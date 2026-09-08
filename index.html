<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>WeatherGPT — Weather to Action Intelligence</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <link rel="stylesheet" href="style.css">
  <style>
    .map-layer-picker{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.layer-chip{border:1px solid #dcebf1;border-radius:7px;background:#fff;color:#17364d;padding:6px 8px;font:11px 'DM Sans';cursor:pointer}.layer-chip.active{color:#075c93;border-color:#7bc9ed;background:#e5f6ff}#map{height:300px;margin-top:12px;overflow:hidden}.leaflet-control-attribution{font-size:8px!important}.timeline{margin-top:10px;border:1px solid #e4eef2;border-radius:10px;padding:9px;background:#fbfdfe}.timeline-head{display:flex;justify-content:space-between;align-items:center;color:#698091;font-size:10px;font-weight:600}.timeline-head button{border:0;border-radius:6px;background:#e8f7ee;color:#087349;padding:4px 6px;font:700 9px 'DM Sans';cursor:pointer}.time-fields{display:grid;grid-template-columns:1.1fr 1.25fr .9fr .9fr .9fr auto;gap:5px;align-items:end;margin-top:7px}.time-fields label{display:flex;flex-direction:column;gap:3px;color:#6b8494;font:700 8px 'DM Sans';letter-spacing:.4px}.time-fields input,.time-fields select{min-width:0;width:100%;border:1px solid #dcebf1;border-radius:5px;background:#fff;color:#17364d;padding:5px;font:600 10px 'DM Sans'}.time-fields button{border:0;border-radius:6px;background:#1689d4;color:#fff;padding:7px 8px;font:700 10px 'DM Sans';white-space:nowrap;cursor:pointer}.radar-scrub{display:grid;grid-template-columns:24px 1fr 24px 30px;gap:5px;align-items:center;margin-top:8px}.radar-scrub button{height:24px;border:1px solid #dcebf1;border-radius:5px;background:#fff;color:#1689d4;cursor:pointer}.radar-scrub input{accent-color:#1689d4;width:100%}.map-caption{padding-top:9px}.map-legend{display:flex;flex-wrap:wrap;gap:10px;padding:7px 2px 0;color:#698091;font-size:9px}.map-legend span{display:flex;align-items:center;gap:4px}.map-legend i{width:11px;height:6px;border-radius:5px;display:inline-block}.legend-rain{background:linear-gradient(90deg,#51b5ff,#6747f5,#e357c8)}.legend-heat{background:linear-gradient(90deg,#ffdd45,#f26c2d,#be2c2c)}.legend-flood{background:linear-gradient(90deg,#7ed9f7,#1f7ed4,#3c3ba6)}.hazard-label{border:0!important;border-radius:12px!important;padding:3px 6px!important;box-shadow:0 2px 8px #17364d33!important;font:700 9px 'DM Sans'!important}.map-tools button,.primary,.quick button,.outline,.icon-btn,.assistant-launch,.suggestions button{cursor:pointer}@media(max-width:900px){.time-fields{grid-template-columns:repeat(3,1fr)}.time-fields button{grid-column:span 3}}@media(max-width:600px){.time-fields{grid-template-columns:repeat(2,1fr)}.time-fields button{grid-column:span 2}#map{height:280px}}
    .dashboard>.map-card{grid-column:1/-1!important;width:100%;min-width:0}.map-card>.timeline,.system-flow{display:none!important}.location-manager{margin-top:14px;border-top:1px solid #41667a;padding-top:10px;color:#d9f2ff}.location-manager summary{cursor:pointer;font:700 11px 'DM Sans';letter-spacing:.2px}.location-manager>div{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:7px;margin-top:9px}.location-manager input{min-width:0;border:1px solid #6f91a4;border-radius:7px;padding:8px;background:#fff;color:#17364d;font:12px 'DM Sans'}.location-manager button{border:0;border-radius:7px;background:#b9ef19;color:#183949;padding:8px 10px;font:700 12px 'DM Sans';cursor:pointer}.location-manager small{display:block;margin-top:7px;color:#b7d8e8;font-size:10px}.windy-note{font-size:10px;color:#698091;align-self:center}.map-workspace{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:14px;margin-top:14px}#map{position:relative;height:560px;width:100%;min-width:0;overflow:hidden;border-radius:12px}#windy{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-width:0!important}#windy #bottom,#windy .bottom-wrapper,#windy .progress-bar,#windy .timeline{display:none!important}.assistant-panel.map-docked{position:static;display:flex;flex-direction:column;width:auto;height:560px;box-shadow:none;border-radius:12px;z-index:auto}.assistant-panel.map-docked .chat{height:auto;flex:1}.assistant-panel.map-docked + *{display:none}.assistant-launch{display:none!important}.windy-fallback{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:13px;padding:28px;text-align:center;text-decoration:none;color:#fff;background:radial-gradient(circle at 30% 30%,#4fba8d,#155c7d 47%,#123b61);cursor:pointer}.windy-fallback-logo{font:700 32px Outfit}.windy-fallback-logo::first-letter{color:#e4343d}.windy-fallback strong{font:700 25px Outfit}.windy-fallback small{font-size:14px;color:#d7eff9}.windy-fallback b{margin-top:8px;padding:13px 18px;border-radius:10px;background:#d12f35;font:700 14px 'DM Sans';box-shadow:0 5px 16px #051d3e55}.windy-full-link{color:#1689d4;font-weight:700;text-decoration:none;font-size:10px}.windy-launch{margin-left:auto;background:#d12f35;color:#fff!important;border-radius:8px;padding:7px 10px;font:700 11px 'DM Sans';text-decoration:none;box-shadow:0 2px 7px #a51f2533}.map-caption{align-items:center;gap:8px}.legacy-controls{display:none!important}@media(min-width:901px){.dashboard{grid-template-columns:1fr 1fr 1fr}.map-card{grid-row:1}.weather-card{grid-column:1;grid-row:2}.alerts{grid-column:2;grid-row:2}}@media(max-width:900px){.map-workspace{grid-template-columns:1fr}.assistant-panel.map-docked{height:420px}}@media(max-width:700px){.location-manager>div{grid-template-columns:1fr 1fr}.location-manager button{grid-column:span 2}}@media(max-width:600px){.windy-launch{width:100%;text-align:center;margin-left:0}}
  </style>
</head>
<body>
  <div class="aurora a1"></div><div class="aurora a2"></div>
  <header class="topbar">
    <a class="brand" href="#"><img src="weathergpt-logo.jpg" alt="WeatherGPT logo"><span>Weather<span>GPT</span><small>WEATHER TO ACTION</small></span></a>
    <div class="header-tools"><span class="live"><i></i><span data-i18n="live">LIVE DATA</span></span><select id="language" aria-label="Language"><option value="en">English</option><option value="hi">हिन्दी</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="bn">বাংলা</option><option value="mr">मराठी</option></select><button class="icon-btn" id="locate" title="Use my location">⌖</button></div>
  </header>
  <main>
    <section class="hero">
      <div><p class="eyebrow">INDIA'S CONVERSATIONAL WEATHER INTELLIGENCE</p><h1 data-i18n="title">Know the weather.<br><em>Know what to do.</em></h1><p class="hero-copy" data-i18n="subtitle">Real-time forecasts become clear, local actions for safer communities, farms and journeys.</p></div>
      <div class="status-card"><div><span data-i18n="system">SYSTEM STATUS</span><strong>All weather systems operational</strong></div><b>✓</b></div>
    </section>
    <section class="search-panel">
      <div class="selects"><label><span>Country</span><select id="country"><option value="India">🇮🇳 India</option><option value="United States">🇺🇸 United States</option><option value="United Kingdom">🇬🇧 United Kingdom</option><option value="Australia">🇦🇺 Australia</option></select></label><label><span>State / Region</span><select id="state"></select></label><label><span>District / City</span><select id="district"></select></label><button class="primary" id="update">Explore weather <span>→</span></button></div>
      <div class="quick"><span data-i18n="quick">QUICK PLACES</span><button data-place="Chennai">Chennai</button><button data-place="Mumbai">Mumbai</button><button data-place="Delhi">Delhi</button><button data-place="Kolkata">Kolkata</button><button data-place="Bengaluru">Bengaluru</button></div><details class="location-manager"><summary>＋ Add a country, state / region, or district / city</summary><div><input id="newCountry" placeholder="Country"><input id="newState" placeholder="State / region"><input id="newCity" placeholder="District / city"><button type="button" id="addLocation">Add location</button></div><small>Enter a city to find it on the live map. Country and state are used to organise your saved locations.</small></details>
    </section>
    <section class="dashboard">
      <div class="weather-card card"><div class="card-top"><div><p class="label" id="placeLabel">TAMIL NADU · CHENNAI</p><h2 id="cityName">Chennai</h2><p class="updated" id="updated">Updating live conditions…</p></div><span class="weather-icon" id="weatherIcon">☀️</span></div><div class="temp"><strong id="temp">--°</strong><div><b id="condition">Loading…</b><span id="feels">Feels like --°</span></div></div><div class="metrics"><div><span>💧 Humidity</span><b id="humidity">--%</b></div><div><span>↗ Wind</span><b id="wind">-- km/h</b></div><div><span>☂ Rain</span><b id="rain">-- mm</b></div></div></div>
      <div class="map-card card"><div class="section-heading"><div><p class="label">GLOBAL LIVE WINDY MAP</p><h2>Worldwide weather — drag, zoom & explore</h2></div><div class="map-tools" aria-label="Windy layer"><button class="active" data-windy-layer="wind">Wind</button><button data-windy-layer="temp">Temperature</button><button data-windy-layer="pressure">Pressure</button></div></div><div class="map-layer-picker" aria-label="Windy map tools"><button class="layer-chip active" data-windy-view="world">◎ World</button><button class="layer-chip" data-windy-view="india">🇮🇳 India</button><button class="layer-chip" id="particlesToggle">✦ Particles: on</button><span class="windy-note">Windy testing API controls</span></div><div id="map"></div><div class="timeline" aria-label="Weather time navigator"><div class="timeline-head"><span id="timelineTitle">Local weather time navigator</span><button id="timelineLive" title="Jump to the newest available weather">● Live</button></div><div class="time-fields"><label>Year<input id="mapYear" inputmode="numeric" type="number" min="1940" max="2100"></label><label>Month<select id="mapMonth"></select></label><label>Day<select id="mapDay"></select></label><label>Hour<select id="mapHour"></select></label><label>Minute<select id="mapMinute"><option value="0">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select></label><button id="applyMapTime">View weather</button></div></div><div class="map-caption"><span><i></i> <span id="mapStatus">Global live Windy wind map</span></span><span>Worldwide view</span></div><div class="map-legend" id="mapLegend"><span>Use Windy controls above for live wind, temperature, pressure, particles, and world or India views.</span></div></div>
      <div class="radar-scrub legacy-controls" aria-hidden="true"><button id="radarBack">‹</button><input id="radarTimeline" type="range" min="0" max="0" value="0"><button id="radarForward">›</button><button id="radarPlay">▶</button></div><aside class="alerts card"><div class="section-heading"><div><p class="label">EARLY WARNING DESK</p><h2 data-i18n="alerts">Safety alerts</h2></div><span class="count" id="alertCount">0</span></div><div id="alertList" class="alert-list"></div><button class="text-button" id="alertRefresh">↻ Refresh risk assessment</button></aside>
    </section>
    <section class="lower-grid">
      <article class="forecast card"><div class="section-heading"><div><p class="label">NEXT 5 DAYS</p><h2 data-i18n="forecast">Forecast outlook</h2></div><span class="confidence">● HIGH CONFIDENCE</span></div><div id="forecastDays" class="forecast-days"></div><div class="explain"><span>✦</span><p><b>Why this forecast?</b><br><span id="explanation">We are combining local observations with model guidance to provide a simple, explainable outlook.</span></p></div></article>
      <article class="advisory card"><div class="section-heading"><div><p class="label">WEATHER → ACTION</p><h2 data-i18n="advisories">Personalised advisories</h2></div><select id="sector"><option value="farmer">🌾 Farmer</option><option value="marine">⚓ Fisher / Marine</option><option value="citizen">🏙 Citizen</option><option value="aviation">✈ Aviation</option></select></div><div id="advisoryContent"></div></article>
    </section>
    <section class="climate card"><div><p class="label">CLIMATE INTELLIGENCE</p><h2>See the pattern, prepare for the future.</h2><p>Past 30 days of observed temperature at your selected place. Use this view to turn a daily decision into a climate-aware one.</p><button class="outline" id="climateQuestion">Ask about climate trends →</button></div><div class="chart-wrap"><div class="chart-label"><b id="avgTemp">--°C</b><span>30-day average</span></div><svg id="climateChart" viewBox="0 0 520 150" role="img" aria-label="Temperature trend chart"></svg><div class="chart-foot"><span>30 days ago</span><span>Today</span></div></div></section>
    <section class="system-flow card" aria-labelledby="flowTitle"><div class="section-heading"><div><p class="label">WEATHERGPT INTELLIGENCE FLOW</p><h2 id="flowTitle">From question to safe action</h2></div><span class="confidence" id="flowState">● READY</span></div><p class="flow-intro">This live pipeline runs for every chat, voice, place, and time request.</p><div class="flow-grid"><div class="flow-node" id="flowUser"><b>1</b><span>USER</span><small>Text · Voice · Language</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowIntent"><b>2</b><span>WEATHERGPT</span><small>Intent + language router</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowLocation"><b>3</b><span>LOCATION</span><small>Selected city / map point</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowData"><b>4</b><span>DATA FUSION</span><small>Weather API · GFS model · official-alert adapter</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowRisk"><b>5</b><span>RISK ENGINE</span><small>Heat · rain · flood · wind</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowAction"><b>6</b><span>ACTION ROUTER</span><small>Farm · disaster · aviation · citizen</small></div><div class="flow-arrow">→</div><div class="flow-node output" id="flowOutput"><b>7</b><span>PERSONALISED ANSWER</span><small>Text · map · alerts · voice</small></div></div><div class="flow-result"><span>Latest run</span><b id="flowResult">Live monitoring is ready for Chennai.</b><small id="flowMeta">Sources: Open-Meteo forecast + GFS model context + Windy Map Forecast API</small></div></section>
  </main>
  <button class="assistant-launch" id="assistantLaunch"><span>✦</span><span><b>Ask WeatherGPT</b><small>Forecasts, alerts & actions</small></span><kbd>⌘ K</kbd></button>
  <section class="assistant-panel" id="assistantPanel" aria-label="WeatherGPT assistant"><div class="assistant-head"><div><span class="bot-dot">✦</span><div><b>WeatherGPT</b><small>Action intelligence assistant</small></div></div><button id="closeAssistant">×</button></div><div class="chat" id="chat"><div class="bot-message">Hello! I am ready to help with weather, safety alerts, travel or farming decisions for <b id="chatLocation">Chennai</b>. What would you like to know?</div><div class="suggestions"><button>Will it rain tomorrow?</button><button>Is it safe to travel?</button><button>What should farmers do?</button></div></div><form id="chatForm"><button type="button" id="voice" title="Voice input">🎙</button><input id="chatInput" placeholder="Ask about weather or safety…" autocomplete="off"><button class="send" aria-label="Send">↑</button></form></section>
  <footer><span>WeatherGPT prototype · Built for clearer weather decisions</span><span>Weather: Open-Meteo · Radar: RainViewer · Maps: OpenStreetMap / Esri</span></footer>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script><script src="app.js"></script>
  <script>
    /* Windy Map Forecast API: real in-page map engine, not an iframe/video. */
    (function () {
      const windyKey = 'BufL8T0J8DFjZfCweXXI7FloiQJW60db';
      const host = document.querySelector('#map');
      /* Windy requires Leaflet 1.4 and its own styles; remove the prototype's old map runtime first. */
      document.querySelector('link[href*="leaflet@1.9.4"]')?.remove();
      window.L = undefined;
      host.innerHTML = '<div id="windy" aria-label="Live worldwide Windy map"></div>';
      const style = document.createElement('style');
      style.textContent = '#windy{width:100%;height:100%;min-height:560px;background:#143b56}';
      document.head.append(style);
      const leaflet = document.createElement('script');
      leaflet.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
      leaflet.onload = function () {
        const windyLib = document.createElement('script');
        windyLib.src = 'https://api.windy.com/assets/map-forecast/libBoot.js';
        windyLib.onload = function () {
          windyInit({key: windyKey, lat: 15, lon: 0, zoom: 2, overlay: 'wind', level: 'surface', verbose: true}, function (api) {
            window.weatherGPTWindy = api;
            /* Windy API only: redraw after the dashboard gets its final width. */
            const redraw = () => { api.map.invalidateSize(true); api.store.set('overlay', 'wind'); api.store.set('level', 'surface'); };
            setTimeout(redraw, 300); setTimeout(redraw, 1200); window.addEventListener('resize', redraw);
            const choose = layer => { api.store.set('overlay', layer); document.querySelectorAll('[data-windy-layer]').forEach(b => b.classList.toggle('active', b.dataset.windyLayer === layer)); document.querySelector('#mapStatus').textContent = `Global live Windy ${layer === 'temp' ? 'temperature' : layer} map`; };
            document.querySelectorAll('[data-windy-layer]').forEach(button => button.onclick = () => choose(button.dataset.windyLayer));
            document.querySelectorAll('[data-windy-view]').forEach(button => button.onclick = () => { const india = button.dataset.windyView === 'india'; api.map.setView(india ? [21,79] : [15,0], india ? 5 : 2); document.querySelectorAll('[data-windy-view]').forEach(b => b.classList.toggle('active', b === button)); });
            let particles = true; document.querySelector('#particlesToggle').onclick = () => { particles = !particles; api.store.set('particlesAnim', particles); document.querySelector('#particlesToggle').textContent = `✦ Particles: ${particles ? 'on' : 'off'}`; };
            document.querySelectorAll('[data-windy-layer]').forEach(b => b.classList.toggle('active', b.dataset.windyLayer === 'wind'));
            document.querySelector('#mapStatus').textContent = 'Global live Windy wind map · drag, zoom, and choose layers directly on the map';
          });
        };
        windyLib.onerror = function () { host.innerHTML = '<div class="windy-error">Windy map could not load. Check your internet connection and refresh.</div>'; };
        document.head.append(windyLib);
      };
      leaflet.onerror = function () { host.innerHTML = '<div class="windy-error">Map library could not load. Check your internet connection and refresh.</div>'; };
      document.head.append(leaflet);
    }());
  </script>
  <script>
    /* Browser-side Weather Intelligence Engine: the operational flow behind the UI. */
    (function () {
      const nodeIds = ['flowUser','flowIntent','flowLocation','flowData','flowRisk','flowAction','flowOutput'];
      const $flow = id => document.getElementById(id);
      function inferIntent(text) {
        const q = String(text || '').toLowerCase();
        if (/flood|rain|storm|thunder/.test(q)) return 'rain / flood safety';
        if (/heat|hot|heatstroke/.test(q)) return 'heat safety';
        if (/farm|crop|irrigat/.test(q)) return 'farm advisory';
        if (/flight|aviation|airport/.test(q)) return 'aviation advisory';
        if (/travel|road|drive/.test(q)) return 'travel safety';
        return 'local weather briefing';
      }
      function impact() {
        const d = state.data || {}, rain = state.daily?.precipitation_probability_max?.[0] || 0;
        const risks = [];
        if ((d.apparent_temperature || 0) >= 39) risks.push('heat stress');
        if ((d.precipitation || 0) >= 8 || rain >= 75 || (d.weather_code || 0) >= 80) risks.push('flood / heavy rain');
        if ((d.wind_speed_10m || 0) >= 35) risks.push('strong wind');
        return risks.length ? risks.join(', ') : 'no high-impact threshold';
      }
      function runFlow(input, channel) {
        const intent = inferIntent(input), sector = document.getElementById('sector')?.value || 'citizen';
        nodeIds.forEach(id => $flow(id)?.classList.remove('active'));
        nodeIds.forEach((id, index) => setTimeout(() => $flow(id)?.classList.add('active'), index * 110));
        const risk = impact();
        $flow('flowResult').textContent = `${channel} → ${intent} for ${state.city}; risk assessment: ${risk}; action route: ${sector}.`;
        $flow('flowMeta').textContent = `Live source: Open-Meteo weather API · NWP context: GFS forecast · Map: Windy Map Forecast API · Official-alert adapter: IMD-ready`;
        $flow('flowState').textContent = '● PROCESSING';
        setTimeout(() => { $flow('flowState').textContent = '● ACTION READY'; }, 850);
      }
      window.WeatherGPTIntelligence = { run: runFlow, inferIntent, impact };
      const chat = document.getElementById('chat');
      new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
        if (node.classList?.contains('user-message')) runFlow(node.textContent, 'User input');
      }))).observe(chat, {childList:true});
      document.getElementById('update')?.addEventListener('click', () => setTimeout(() => runFlow('Place updated', 'Location selector'), 250));
      document.getElementById('locate')?.addEventListener('click', () => setTimeout(() => runFlow('Live location update', 'Device location'), 500));
      document.getElementById('sector')?.addEventListener('change', e => runFlow('Advisory sector changed', e.target.value));
      runFlow('Live monitoring', 'System');
    }());
  </script>
  <script>
    /* Location manager and safe, in-page language switching. */
    (function () {
      const packs = {
        hi:{live:'लाइव डेटा',title:'मौसम जानें।<br><em>क्या करना है, जानें।</em>',subtitle:'वास्तविक समय का मौसम स्पष्ट स्थानीय कार्यों में बदलता है।',alerts:'सुरक्षा अलर्ट',forecast:'पूर्वानुमान',advisories:'व्यक्तिगत सलाह',add:'＋ देश, राज्य / क्षेत्र या शहर जोड़ें',button:'स्थान जोड़ें',city:'जिला / शहर',state:'राज्य / क्षेत्र',country:'देश'},
        ta:{live:'நேரலை தரவு',title:'வானிலையை அறிக.<br><em>என்ன செய்ய வேண்டும் என அறிக.</em>',subtitle:'நிகழ்நேர வானிலை தெளிவான உள்ளூர் செயல்களாக மாறுகிறது.',alerts:'பாதுகாப்பு எச்சரிக்கைகள்',forecast:'முன்னறிவிப்பு',advisories:'தனிப்பயன் ஆலோசனைகள்',add:'＋ நாடு, மாநிலம் / பகுதி அல்லது நகரம் சேர்க்கவும்',button:'இடம் சேர்க்கவும்',city:'மாவட்டம் / நகரம்',state:'மாநிலம் / பகுதி',country:'நாடு'},
        te:{live:'ప్రత్యక్ష డేటా',title:'వాతావరణాన్ని తెలుసుకోండి.<br><em>ఏం చేయాలో తెలుసుకోండి.</em>',subtitle:'నిజ సమయ వాతావరణం స్పష్టమైన స్థానిక చర్యలుగా మారుతుంది.',alerts:'భద్రతా హెచ్చరికలు',forecast:'అంచనా',advisories:'వ్యక్తిగత సలహాలు',add:'＋ దేశం, రాష్ట్రం / ప్రాంతం లేదా నగరం జోడించండి',button:'స్థలాన్ని జోడించండి',city:'జిల్లా / నగరం',state:'రాష్ట్రం / ప్రాంతం',country:'దేశం'},
        bn:{live:'লাইভ ডেটা',title:'আবহাওয়া জানুন।<br><em>কী করতে হবে, জানুন।</em>',subtitle:'রিয়েল-টাইম আবহাওয়া স্পষ্ট স্থানীয় পদক্ষেপে রূপান্তরিত হয়।',alerts:'নিরাপত্তা সতর্কতা',forecast:'পূর্বাভাস',advisories:'ব্যক্তিগত পরামর্শ',add:'＋ দেশ, রাজ্য / অঞ্চল বা শহর যোগ করুন',button:'স্থান যোগ করুন',city:'জেলা / শহর',state:'রাজ্য / অঞ্চল',country:'দেশ'},
        mr:{live:'थेट डेटा',title:'हवामान जाणून घ्या.<br><em>काय करावे ते जाणून घ्या.</em>',subtitle:'रिअल-टाइम हवामान स्पष्ट स्थानिक कृतींमध्ये बदलते.',alerts:'सुरक्षा सूचना',forecast:'अंदाज',advisories:'वैयक्तिक सल्ला',add:'＋ देश, राज्य / प्रदेश किंवा शहर जोडा',button:'स्थान जोडा',city:'जिल्हा / शहर',state:'राज्य / प्रदेश',country:'देश'}
      };
      document.getElementById('language').onchange = e => {
        if (e.target.value === 'en') { location.reload(); return; }
        const t = packs[e.target.value]; if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => { if (t[el.dataset.i18n]) el.innerHTML = t[el.dataset.i18n]; });
        document.querySelector('.location-manager summary').textContent = t.add;
        document.getElementById('addLocation').textContent = t.button;
        document.getElementById('newCountry').placeholder = t.country;
        document.getElementById('newState').placeholder = t.state;
        document.getElementById('newCity').placeholder = t.city;
        document.getElementById('updated').textContent = '✓ ' + t.live;
      };
      document.getElementById('addLocation').onclick = async () => {
        const country = document.getElementById('newCountry').value.trim() || 'Custom locations';
        const region = document.getElementById('newState').value.trim() || 'Saved places';
        const city = document.getElementById('newCity').value.trim();
        const note = document.querySelector('.location-manager small');
        if (!city) { note.textContent = 'Enter a district or city first.'; return; }
        note.textContent = 'Finding location…';
        try {
          const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
          const result = (await r.json()).results?.[0];
          if (!result) throw new Error('not found');
          if (!places[country]) places[country] = {};
          if (!places[country][region]) places[country][region] = [];
          if (!places[country][region].includes(city)) places[country][region].push(city);
          coords[city] = [result.latitude, result.longitude];
          if (![...document.getElementById('country').options].some(o => o.value === country)) document.getElementById('country').add(new Option(country, country));
          document.getElementById('country').value = country; populate();
          document.getElementById('state').value = region; populateDistrict();
          document.getElementById('district').value = city; update(city);
          note.textContent = `✓ ${city} saved at ${result.latitude.toFixed(2)}°, ${result.longitude.toFixed(2)}°.`;
        } catch { note.textContent = 'Location was not found. Check the spelling and try again.'; }
      };
    }());
  </script>
  <script>
    /* Keep WeatherGPT visible beside the map as its own assistant workspace. */
    (function () {
      const map = document.getElementById('map'), panel = document.getElementById('assistantPanel');
      if (!map || !panel || panel.classList.contains('map-docked')) return;
      const workspace = document.createElement('div'); workspace.className = 'map-workspace';
      map.parentNode.insertBefore(workspace, map); workspace.append(map, panel);
      panel.classList.add('map-docked', 'open');
      document.getElementById('closeAssistant').style.display = 'none';
    }());
  </script>
</body></html>
