const { spawn } = require('node:child_process');
const chromePath = '/Applications/Google Chrome.app/Contents/MOS/Google Chrome'.replace('/MOS/','/MacOS/');
const port = 9341;
const url = process.argv[2] || 'http://127.0.0.1:4173/design-pass/?v=phase3-local';
function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }
async function json(url){ const r = await fetch(url); if(!r.ok) throw new Error(`${url} ${r.status}`); return r.json(); }
(async()=>{
  const chrome = spawn(chromePath, [
    '--headless=new', `--remote-debugging-port=${port}`, '--user-data-dir=/tmp/hermes-phase3-cdp-profile',
    '--no-first-run','--no-default-browser-check','--disable-gpu','--window-size=390,844', url
  ], {stdio:['ignore','ignore','pipe']});
  try{
    let wsUrl;
    for(let i=0;i<60;i++){
      try{ wsUrl = (await json(`http://127.0.0.1:${port}/json/version`)).webSocketDebuggerUrl; break; }
      catch(e){ await sleep(100); }
    }
    if(!wsUrl) throw new Error('Chrome CDP did not start');
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
    let id=0; const pending=new Map();
    ws.onmessage = event => {
      const msg=JSON.parse(event.data);
      if(msg.id && pending.has(msg.id)){ const {resolve,reject}=pending.get(msg.id); pending.delete(msg.id); msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result); }
    };
    const send=(method, params={}, sessionId)=>new Promise((resolve,reject)=>{ const msg={id:++id,method,params}; if(sessionId) msg.sessionId=sessionId; pending.set(msg.id,{resolve,reject}); ws.send(JSON.stringify(msg)); });
    const target = await send('Target.createTarget', {url:'about:blank'});
    const attached = await send('Target.attachToTarget', {targetId:target.targetId, flatten:true});
    const sessionId = attached.sessionId;
    await send('Page.enable', {}, sessionId);
    await send('Runtime.enable', {}, sessionId);
    await send('Emulation.setDeviceMetricsOverride', {width:390,height:844,deviceScaleFactor:2,mobile:true}, sessionId);
    await send('Page.navigate', {url}, sessionId);
    await sleep(1700);
    await send('Runtime.evaluate', {expression:`document.querySelector('[data-ask="How should I handle repair negotiations after inspection?"]')?.click()`, awaitPromise:true}, sessionId);
    await sleep(3300);
    await send('Runtime.evaluate', {expression:`document.getElementById('globalSearch').value='repair'`, awaitPromise:true}, sessionId);
    await sleep(300);
    const result = await send('Runtime.evaluate', {returnByValue:true, awaitPromise:true, expression:`(() => {
      const section = id => document.querySelector(id);
      const rect = el => { const r = el?.getBoundingClientRect(); return r ? {top:Math.round(r.top), width:Math.round(r.width), height:Math.round(r.height)} : null; };
      const sectionMetrics = ['#ask','#latest','#playbooks','#topics','#trainings','#objections','#all-content'].map(id => ({id, ...rect(section(id))}));
      const cardChecks = [
        ['latest cards', '.video-card'], ['playbooks', '.playbook-card'], ['topics', '.topic'], ['trainings', '.training'], ['objections', '.objection-grid article'], ['all content rows', '.content-row']
      ].map(([label, sel]) => ({label, count:document.querySelectorAll(sel).length, widths:[...document.querySelectorAll(sel)].slice(0,6).map(el=>Math.round(el.getBoundingClientRect().width))}));
      const touchTargets = [...document.querySelectorAll('button,a,input,textarea,summary')].filter(el => el.offsetParent !== null).map(el => ({tag:el.tagName.toLowerCase(), id:el.id, className:el.className || '', text:(el.textContent||el.getAttribute('aria-label')||el.placeholder||el.tagName).trim().slice(0,40), h:Math.round(el.getBoundingClientRect().height), w:Math.round(el.getBoundingClientRect().width)}));
      const tinyTargets = touchTargets.filter(t => t.h < 34 || t.w < 34).slice(0,20);
      return {
        title: document.title,
        innerWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        noHorizontalOverflow: document.documentElement.scrollWidth <= innerWidth && document.body.scrollWidth <= innerWidth,
        answerReady: !!document.querySelector('#answer .ai-answer.ready'),
        sourcesCollapsed: document.querySelector('#answer details.source-evidence-panel')?.open === false,
        searchValue: document.getElementById('globalSearch')?.value,
        sectionMetrics,
        cardChecks,
        tinyTargets,
        consoleErrors: window.__phase3ConsoleErrors || []
      };
    })()`}, sessionId);
    const metrics = result.result.value;
    console.log(JSON.stringify(metrics, null, 2));
    if(!metrics.noHorizontalOverflow) throw new Error('Horizontal overflow detected');
    if(!metrics.answerReady) throw new Error('Ask answer did not render');
    if(!metrics.sourcesCollapsed) throw new Error('Sources should be collapsed by default');
    if(metrics.searchValue !== 'repair') throw new Error('Search input did not accept mobile query');
    if(metrics.tinyTargets.length) throw new Error(`Tiny touch targets: ${JSON.stringify(metrics.tinyTargets.slice(0,5))}`);
    await send('Runtime.evaluate', {expression:`document.querySelector('.dashboard-search-form').requestSubmit()`, awaitPromise:true}, sessionId);
    await sleep(1200);
    const searchNav = await send('Runtime.evaluate', {returnByValue:true, expression:`({href: location.href, path: location.pathname, query: new URLSearchParams(location.search).get('q'), noHorizontalOverflow: document.documentElement.scrollWidth <= innerWidth && document.body.scrollWidth <= innerWidth})`}, sessionId);
    console.log(JSON.stringify({searchNavigation: searchNav.result.value}, null, 2));
    if(!searchNav.result.value.path.includes('/library/')) throw new Error('Dashboard search did not route to library');
    if(searchNav.result.value.query !== 'repair') throw new Error('Dashboard search query was not preserved');
    if(!searchNav.result.value.noHorizontalOverflow) throw new Error('Library route has horizontal overflow after search navigation');
    ws.close();
  } finally { chrome.kill('SIGTERM'); }
})().catch(err => { console.error(err.stack || err.message); process.exit(1); });
