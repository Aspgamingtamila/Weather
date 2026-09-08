const crypto = require('node:crypto');
const recentRequests = new Map();

function safeString(value, limit = 1000) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function safeEqual(left, right) { const a = Buffer.from(left || ''), b = Buffer.from(right || ''); return a.length === b.length && crypto.timingSafeEqual(a, b); }
function clientIp(req) { return safeString(String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0], 100); }
function isRateLimited(ip) { const now = Date.now(), windowMs = 10 * 60 * 1000, maxRequests = 18, recent = (recentRequests.get(ip) || []).filter(time => now - time < windowMs); recent.push(now); recentRequests.set(ip, recent); return recent.length > maxRequests; }
function outputText(response) { return typeof response.output_text === 'string' && response.output_text.trim() ? response.output_text.trim() : (response.output || []).flatMap(item => item.content || []).filter(part => part.type === 'output_text').map(part => part.text).join('\n').trim(); }

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  const demoCode = process.env.WEATHERGPT_DEMO_CODE;
  if (!demoCode || !safeEqual(req.headers['x-weathergpt-demo-code'], demoCode)) return res.status(401).json({error:'Private AI access code required'});
  if (isRateLimited(clientIp(req))) return res.status(429).json({error:'Too many AI requests. Please wait a few minutes.'});
  const question = safeString(req.body?.question, 700);
  if (!question) return res.status(400).json({error:'Ask a weather question first.'});
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({error:'The AI key is not configured on this deployment.'});
  const weather = req.body?.weather && typeof req.body.weather === 'object' ? req.body.weather : {};
  const context = {location:safeString(weather.location,120),observed_at:safeString(weather.observed_at,80),temperature_c:Number(weather.temperature_c),feels_like_c:Number(weather.feels_like_c),humidity_percent:Number(weather.humidity_percent),precipitation_mm:Number(weather.precipitation_mm),wind_kmh:Number(weather.wind_kmh),condition:safeString(weather.condition,100),tomorrow_rain_probability:weather.tomorrow_rain_probability,risk_signals:weather.risk_signals || {},sector:safeString(weather.sector,40)};
  try {
    const upstream = await fetch('https://api.openai.com/v1/responses', {method:'POST',headers:{'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL || 'gpt-5-mini',store:false,max_output_tokens:260,instructions:'You are WeatherGPT, a concise weather decision assistant. Use only the supplied local weather context. State that risk labels are app-generated signals, not official warnings. Give practical, cautious advice. Do not claim access to live emergency systems, government alerts, radar beyond the supplied data, or information not in the context. Direct users to official local authorities for emergencies.',input:`Question: ${question}\n\nSelected weather context:\n${JSON.stringify(context)}`})});
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) return res.status(upstream.status === 429 ? 429 : 502).json({error:'OpenAI request failed. Check the key, billing, and model access.'});
    const answer = outputText(data);
    if (!answer) return res.status(502).json({error:'The assistant returned no text.'});
    return res.status(200).json({answer});
  } catch { return res.status(502).json({error:'The AI service could not be reached.'}); }
};
