/* Local-only WeatherGPT AI server. Keep this file public; keep .env private. */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 8787);
loadDotEnv(path.join(ROOT, '.env'));

const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS || 'http://localhost:8787,https://aspgamingtamila.github.io')
    .split(',').map(value => value.trim()).filter(Boolean),
);
const mimeTypes = {'.css':'text/css; charset=utf-8','.html':'text/html; charset=utf-8','.ico':'image/x-icon','.jpg':'image/jpeg','.jpeg':'image/jpeg','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.webp':'image/webp'};
const rateWindows = new Map();

function loadDotEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!match || process.env[match[1]]) continue;
    process.env[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
  }
}

function sendJson(res, status, payload, origin) {
  const headers = {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'};
  if (origin && isAllowedOrigin(origin)) headers['Access-Control-Allow-Origin'] = origin;
  res.writeHead(status, headers); res.end(JSON.stringify(payload));
}
function isAllowedOrigin(origin) { return allowedOrigins.has(origin); }
function safeString(value, limit = 1000) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function safeEqual(left, right) { const a = Buffer.from(left || ''), b = Buffer.from(right || ''); return a.length === b.length && crypto.timingSafeEqual(a, b); }
function clientIp(req) { return safeString(String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0], 100); }
function isRateLimited(ip) { const now = Date.now(), windowMs = 10 * 60 * 1000, maxRequests = 18, recent = (rateWindows.get(ip) || []).filter(time => now - time < windowMs); recent.push(now); rateWindows.set(ip, recent); return recent.length > maxRequests; }
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; if (body.length > 12000) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(body || '{}')); } catch { reject(new Error('Invalid JSON')); } });
    req.on('error', reject);
  });
}
function extractText(response) {
  if (typeof response.output_text === 'string' && response.output_text.trim()) return response.output_text.trim();
  return (response.output || []).flatMap(item => item.content || [])
    .filter(part => part.type === 'output_text').map(part => part.text).join('\n').trim();
}

async function answerQuestion(payload) {
  const question = safeString(payload.question, 700);
  if (!question) throw Object.assign(new Error('Ask a weather question first.'), {status:400});
  const weather = payload.weather && typeof payload.weather === 'object' ? payload.weather : {};
  const context = {
    location: safeString(weather.location, 120),
    observed_at: safeString(weather.observed_at, 80),
    temperature_c: Number(weather.temperature_c),
    feels_like_c: Number(weather.feels_like_c),
    humidity_percent: Number(weather.humidity_percent),
    precipitation_mm: Number(weather.precipitation_mm),
    wind_kmh: Number(weather.wind_kmh),
    condition: safeString(weather.condition, 100),
    tomorrow_rain_probability: weather.tomorrow_rain_probability,
    risk_signals: weather.risk_signals || {},
    sector: safeString(weather.sector, 40),
  };
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw Object.assign(new Error('The local assistant key is not configured.'), {status:503});
  const upstream = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {'Authorization':`Bearer ${apiKey}`,'Content-Type':'application/json'},
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-5-mini',
      store: false,
      max_output_tokens: 260,
      instructions: 'You are WeatherGPT, a concise weather decision assistant. Use only the supplied local weather context. State that risk labels are app-generated signals, not official warnings. Give practical, cautious advice. Do not claim access to live emergency systems, government alerts, radar beyond the supplied data, or information not in the context. Direct users to official local authorities for emergencies.',
      input: `Question: ${question}\n\nSelected weather context:\n${JSON.stringify(context)}`,
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const error = new Error('OpenAI request failed. Check the local key, billing, and model access.');
    error.status = upstream.status === 429 ? 429 : 502;
    throw error;
  }
  const answer = extractText(data);
  if (!answer) throw Object.assign(new Error('The assistant returned no text.'), {status:502});
  return answer;
}

function serveStatic(req, res) {
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requestPath = pathname === '/' ? '/index.html' : pathname;
  const file = path.resolve(ROOT, `.${requestPath}`);
  if (!file.startsWith(ROOT + path.sep) || path.basename(file).startsWith('.') || !mimeTypes[path.extname(file).toLowerCase()]) {
    res.writeHead(404); return res.end('Not found');
  }
  fs.readFile(file, (error, content) => {
    if (error) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type':mimeTypes[path.extname(file).toLowerCase()],'X-Content-Type-Options':'nosniff'});
    res.end(content);
  });
}

http.createServer(async (req, res) => {
  const origin = req.headers.origin;
  if (req.method === 'OPTIONS' && req.url === '/api/weather-assistant') {
    if (origin && !isAllowedOrigin(origin)) return sendJson(res, 403, {error:'Origin not allowed'});
    res.writeHead(204, {'Access-Control-Allow-Origin':origin || 'http://localhost:8787','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'}); return res.end();
  }
  if (req.method === 'POST' && req.url === '/api/weather-assistant') {
    if (origin && !isAllowedOrigin(origin)) return sendJson(res, 403, {error:'Origin not allowed'});
    const demoCode = process.env.WEATHERGPT_DEMO_CODE;
    if (!demoCode || !safeEqual(req.headers['x-weathergpt-demo-code'], demoCode)) return sendJson(res, 401, {error:'Private AI access code required'}, origin);
    if (isRateLimited(clientIp(req))) return sendJson(res, 429, {error:'Too many AI requests. Please wait a few minutes.'}, origin);
    try { const answer = await answerQuestion(await readBody(req)); sendJson(res, 200, {answer}, origin); }
    catch (error) { sendJson(res, error.status || 500, {error:error.message || 'Assistant unavailable'}, origin); }
    return;
  }
  if (req.method === 'GET' || req.method === 'HEAD') return serveStatic(req, res);
  sendJson(res, 405, {error:'Method not allowed'}, origin);
}).listen(PORT, () => console.log(`WeatherGPT local demo: http://localhost:${PORT}`));
