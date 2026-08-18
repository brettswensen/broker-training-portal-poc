const trainings = [
  {title:"Work With Your TC w Marty & Marc", file:"2025 Jul 30 Work With Your TC w Marty & Marc.mp4", type:"Video Training", category:"Transaction Coordination", size:"634 MB", summary:"How agents should collaborate with transaction coordination from contract to close.", excerpt:"Marty and Marc walk through when to bring the TC in, how deadlines are tracked, and what the agent still owns with the client.", topics:["transaction coordinator","contract to close","operations","timelines","work with TC"], playbooks:["Contract-to-Close Checklist","New Agent Onboarding"], videoUrl:"https://drive.google.com/file/d/1NHnH4kyYeOPGMXJjZeQDdVY-RkKnWsMp/preview"},
  {title:"Development & New Construction Deals w Craig", file:"2026 Apr 16 Development & New Construction Deals w Craig.mp4", type:"Video Training", category:"New Construction", size:"Pending", summary:"Specialized training for development, builders, land, and new construction opportunities.", excerpt:"Craig explains how builder/developer conversations differ from regular resale and what agents need to know before advising clients.", topics:["development deals","new construction","builders","land"], playbooks:["New Construction Deal Playbook"], videoUrl:"https://drive.google.com/file/d/1drEtA0-AEhko1hFGNafeCnzJdMX5gk7b/preview"},
  {title:"CMA's - Triplex, Addition, Nightly Rental w Craig", file:"2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"Advanced valuation examples for unusual properties like triplexes, additions, and nightly rentals.", excerpt:"Craig breaks down how to think about comp selection and adjustments when the property does not fit a clean single-family template.", topics:["CMA","triplex","addition","nightly rental","pricing"], playbooks:["CMA/Pricing Playbook"], videoUrl:"https://drive.google.com/file/d/1H8Yfo2oVq71p1mhjQTxfpIoMCOPpDhcY/preview"},
  {title:"Repair Negotiations w Craig", file:"2026 Jul 23 Repair Negotiations w Craig.mp4", type:"Video Training", category:"Negotiation & Inspection", size:"157.9 MB", summary:"How to guide buyers and sellers through inspection objections and repair negotiations.", excerpt:"The training focuses on separating safety and lending issues from wishlist repairs, then turning the inspection report into a calm negotiation strategy.", topics:["repair negotiations","inspection objection","buyer requests","seller response"], playbooks:["Repair Negotiation Playbook","Inspection Objection Playbook"], videoUrl:"https://drive.google.com/file/d/1N_5dat4PrTQBU7XstbBH65lR8UzdD6uh/preview"},
  {title:"1031 Exchange Basics w Darrin", file:"2026 May 4 1031 Exchange Basics w Darrin.mp4", type:"Video Training", category:"Investors & Tax Strategy", size:"Pending", summary:"The basics agents should understand when working with investor clients considering a 1031 exchange.", excerpt:"Darrin covers the high-level exchange concept, timing pressure, and why agents should bring in a qualified intermediary/tax advisor early.", topics:["1031 exchange","investor clients","tax deferral","timelines"], playbooks:["Investor Client Playbook"], videoUrl:"https://drive.google.com/file/d/17tZ1yt8WUsjf5kklgMajg7z0B7JK0Bik/preview"},
  {title:"CMA - Flip Property and Land w Craig", file:"2026 May 6 CMA - Flip Property and Land w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"CMA approach for flip properties, land valuation, and investor-oriented pricing questions.", excerpt:"Craig compares flip potential and land value scenarios, showing how investor intent changes the pricing conversation.", topics:["CMA","flip property","land valuation","investor property"], playbooks:["CMA/Pricing Playbook","Investor Client Playbook"], videoUrl:"https://drive.google.com/file/d/10PndJY6HrRDyLMLNmybzAtPPi_w54tsP/preview"}
];

const playbooks = [
  {name:"New Agent 30-Day Onboarding", question:"What should a new agent learn first?", sources:4, time:"24 min", tags:["onboarding","daily routine","scripts"], steps:["Start with team expectations, tools, and who to contact.","Practice the core buyer and seller conversations before taking live appointments.","Use the first transaction checklist once an offer is accepted.","Graduate into investor, CMA, and new construction topics as questions come up."], script:"Start with the basics first. Learn how the team operates, where the trainings live, who handles each part of the transaction, and what to say in the first client conversations."},
  {name:"Repair Negotiation Playbook", question:"How do we handle inspection and repair asks?", sources:1, time:"8 min", tags:["inspection","negotiation","transaction"], steps:["Read the inspection report and separate safety, lending, and material defects from cosmetic asks.","Coach the client on the cleanest remedy: repair, credit, concession, or price adjustment.","Frame the request around keeping the transaction together, not punishing the other side.","Document the agreement clearly and keep the TC aligned on deadlines."], script:"Let’s focus the repair request on the items that affect safety, financing, or the buyer’s confidence. Then we can decide whether a repair, credit, concession, or price adjustment gives us the cleanest path forward.", sourcesUsed:["Repair Negotiations w Craig","Inspection Objection Playbook"]},
  {name:"CMA / Pricing Playbook", question:"How do agents price unusual properties?", sources:2, time:"14 min", tags:["CMA","pricing","valuation"], steps:["Identify whether the property is standard resale, flip, land-heavy, income-producing, or otherwise unusual.","Pull the closest comparables first, then explain where the comp set breaks down.","Separate value drivers like condition, land, addition quality, rental use, and investor upside.","Present the CMA as a pricing story with a range, not a pretend-perfect number."], script:"This is not a perfect apples-to-apples property, so I’m going to show you the closest evidence, call out the adjustments, and explain the pricing range instead of pretending there is one exact number.", sourcesUsed:["CMA's - Triplex, Addition, Nightly Rental w Craig","CMA - Flip Property and Land w Craig"]},
  {name:"Contract-to-Close Checklist", question:"What happens after going under contract?", sources:2, time:"10 min", tags:["TC","deadlines","operations"], steps:["Loop in the transaction coordinator immediately after contract acceptance.","Confirm deadlines, title, lender, client contacts, and required documents.","Keep the agent responsible for the relationship while the TC tracks process details.","Use the checklist until closing so nothing falls between people."], script:"I’m bringing in our transaction coordinator now so we can keep the details and deadlines organized. I’ll stay your main point of contact, and the TC helps us keep the process moving cleanly."},
  {name:"Investor Client Playbook", question:"How should agents support investor clients?", sources:3, time:"12 min", tags:["1031","flip","land"], steps:["Clarify the investor’s goal: tax deferral, flip margin, cash flow, land hold, or development.","Flag timing and expert handoff issues early, especially for 1031 exchanges.","Use training examples to explain risk and uncertainty in plain language.","Connect the client to the right professional instead of giving tax or legal advice."], script:"Before we go too far, I want to understand the investment goal and timing. If this involves taxes, exchange rules, or development assumptions, we need the right professional involved early."},
  {name:"New Construction Deal Playbook", question:"What should agents know about builder/development deals?", sources:1, time:"9 min", tags:["development","builders","land"], steps:["Clarify whether the client is buying new construction, working with a builder, or evaluating land/development.","Understand the builder relationship and registration requirements before touring.","Separate resale assumptions from development and construction realities.","Document representation and client expectations early."], script:"New construction works differently than a normal resale. Before we tour or talk numbers, let’s make sure we understand the builder process, representation, timelines, and what is already included."}
];

const topics = ["CMA & Pricing","Repair Negotiations","Transaction Coordination","1031 Exchange","New Construction","Investor Clients","Inspection Objections","Contract-to-Close","Land Valuation","Flip Properties","Nightly Rentals","New Agent Onboarding"];

const socialAssets = [
  {title:'Deal deadline stress', type:'Social Asset', category:'Agent Marketing', summary:'Caption, carousel, and vertical post idea about slowing down before contract deadlines.', topics:['contract deadlines','decision pressure','client education']},
  {title:'Contract inclusion reminder', type:'Social Asset', category:'Buyer Education', summary:'Post and carousel reminding buyers to write down appliances, fixtures, and included items.', topics:['buyer offer details','contracts','client reminder']},
  {title:'Repair negotiation client post', type:'Social Asset', category:'Inspection Education', summary:'Saveable post idea that explains how to keep inspection asks focused and constructive.', topics:['repair negotiations','inspection objection','client education']}
];
function itemText(item){ return [item.title,item.category,item.summary,item.excerpt,item.script,item.situation,...(item.topics||[]),...(item.tags||[]),...(item.playbooks||[])].join(' ').toLowerCase(); }
function matchesQuery(item, query){ const q=String(query||'').toLowerCase().trim(); if(!q) return true; const words=tokenize(q); const text=itemText(item); return text.includes(q) || words.some(w=>text.includes(w)); }
function kindIcon(kind){ return {video:'▶', playbook:'PB', transcript:'TXT', script:'SC', social:'SOC'}[kind] || '•'; }

function appBasePath(){
  const parts = location.pathname.split('/').filter(Boolean);
  const appMarkers = ['design-pass','library','all-content','playbooks','topics','scripts','pipeline','admin','social-assets','onboarding','training-videos','objections'];
  const markerIndex = parts.findIndex(part => appMarkers.includes(part));
  return markerIndex > 0 ? '/' + parts.slice(0, markerIndex).join('/') : '';
}
function appPath(path){
  return `${appBasePath()}${path}`;
}
function slugifyPlaybook(name){
  return String(name || '').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function playbookUrl(name){ return appPath(`/playbooks/${slugifyPlaybook(name)}/`); }
function playbookFromPath(){
  const parts = location.pathname.split('/').filter(Boolean);
  const playbooksIndex = parts.lastIndexOf('playbooks');
  const slug = playbooksIndex >= 0 ? (parts[playbooksIndex + 1] || '') : '';
  return playbooks.find(p => slugifyPlaybook(p.name) === slug) || playbooks[0];
}

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function tokenize(q){
  return (q || '').toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(w => w.length > 2);
}
function scoreChunk(query, chunk){
  const words = tokenize(query);
  const blob = [chunk.title, chunk.category, ...(chunk.topics || []), chunk.text].join(' ').toLowerCase();
  let score = 0;
  for (const w of words) {
    const hits = blob.split(w).length - 1;
    score += hits ? 2 + Math.min(hits, 5) : 0;
  }
  if (blob.includes((query || '').toLowerCase())) score += 12;
  return score;
}
function snippetFor(text, query){
  const source = String(text || '');
  const words = tokenize(query);
  const lower = source.toLowerCase();
  let pos = 0;
  for (const w of words) { const found = lower.indexOf(w); if (found >= 0) { pos = found; break; } }
  const start = Math.max(0, pos - 170);
  const end = Math.min(source.length, pos + 330);
  const raw = source.slice(start, end).replace(/\s+/g,' ').trim();
  return `${start ? '…' : ''}${raw}${end < source.length ? '…' : ''}`;
}
function getQuery(){ return new URLSearchParams(location.search).get('q') || ''; }
function goLibrary(q){ const value = String(q || document.getElementById('routeSearch')?.value || '').trim(); location.href = appPath(`/all-content/${value ? `?q=${encodeURIComponent(value)}` : ''}`); }
function handleSearchSubmit(e){ e?.preventDefault?.(); goLibrary(); }
function setActiveNav(){
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.route-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    let target = '';
    try { target = new URL(href, location.href).pathname.replace(/\/$/, '') || '/'; } catch(e) { target = href.replace(/\/$/,''); }
    a.classList.toggle('active', target === path);
  });
}
let transcriptIndex = {records:[], chunks:[]};
let transcriptReady = false;
async function loadIndex(){
  try{
    const r = await fetch(appPath('/data/search-index.json'));
    if(!r.ok) throw new Error('index missing');
    transcriptIndex = await r.json();
    transcriptReady = true;
  }catch(e){ transcriptReady = false; }
}
function transcriptSearch(query, limit=12){
  if(!transcriptReady || !String(query).trim()) return [];
  return transcriptIndex.chunks.map(ch => ({...ch, score: scoreChunk(query, ch)})).filter(ch => ch.score > 0).sort((a,b)=>b.score-a.score).slice(0, limit);
}
function matchingTrainings(query){
  const q = String(query || '').toLowerCase().trim();
  if(!q) return trainings;
  return trainings.filter(t => [t.title,t.category,t.summary,t.excerpt,...(t.topics||[]),...(t.playbooks||[])].join(' ').toLowerCase().includes(q));
}
function trainingWatchUrl(training){
  return training?.videoUrl || appPath('/VIDEO_UPLOAD_INSTRUCTIONS.md');
}
function videoTargetAttrs(training){
  return `href="${escapeHtml(trainingWatchUrl(training))}" target="_blank" rel="noopener"`;
}
function relatedPlaybooksFor(text){
  const source = String(text || '').toLowerCase();
  const scored = playbooks.map((p, index) => {
    const haystack = [p.name, p.question, ...(p.tags || [])].join(' ').toLowerCase();
    const score = haystack.split(/\W+/).filter(word => word && source.includes(word)).length;
    return {p, index, score};
  }).filter(item => item.score > 0).sort((a,b)=>b.score-a.score);
  return (scored.length ? scored : playbooks.map((p,index)=>({p,index,score:1}))).slice(0,5).map(item => ({...item.p, index:item.index}));
}

function sourceProofMarkup(label='Related material', count=1){
  const n = Math.max(1, Number(count) || 1);
  return `<div class="source-proof-strip" aria-label="Source validation"><span>✓</span><strong>${escapeHtml(label)}</strong><small>${n} training source${n===1?'':'s'} to review</small></div>`;
}

function resultType(){ return new URLSearchParams(location.search).get('type') || 'all'; }
function setResultFilter(next){
  const params = new URLSearchParams(location.search);
  if(next && next !== 'all') params.set('type', next); else params.delete('type');
  const q = getQuery();
  if(q) params.set('q', q);
  location.href = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
}
function applyResultFilter(){
  const active = resultType();
  document.querySelectorAll('[data-result-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.resultFilter === active || (!active && btn.dataset.resultFilter === 'all'));
    btn.addEventListener('click', () => setResultFilter(btn.dataset.resultFilter));
  });
  document.querySelectorAll('[data-result-section]').forEach(section => {
    const types = (section.dataset.resultSection || '').split(/\s+/);
    section.hidden = !(active === 'all' || types.includes(active));
  });
}
function matchPercent(item, query){
  const base = 76;
  const words = tokenize(query);
  const text = itemText(item);
  const hits = words.filter(w=>text.includes(w)).length;
  return Math.min(96, base + (hits * 4) + (text.includes(String(query||'').toLowerCase()) ? 6 : 0));
}
function resultTags(item){ return (item.topics || item.tags || []).slice(0,3).map(t=>`<em>${escapeHtml(t)}</em>`).join(''); }
function transcriptProof(count=1){ return `<div class="operator-proof"><span>✓</span><strong>Transcript proof</strong><small>${Math.max(1,count)} training source${count===1?'':'s'} supporting this</small></div>`; }
function renderLibrary(){
  const q = getQuery();
  const input = document.getElementById('routeSearch'); if(input) input.value = q;
  const title = document.getElementById('libraryTitle');
  const subtitle = document.getElementById('librarySubtitle');
  const transcriptMatches = transcriptSearch(q, 12);
  const videoMatches = trainings.filter(t => matchesQuery(t, q)).slice(0, q ? 8 : 6);
  const playbookMatches = relatedPlaybooksFor(q || 'agent training playbook').slice(0, 5);
  const scriptMatches = routeScripts.filter(s => matchesQuery(s, q)).slice(0, 4);
  const assetMatches = socialAssets.filter(a => matchesQuery(a, q)).slice(0, 4);
  const total = videoMatches.length + playbookMatches.length + transcriptMatches.length + scriptMatches.length + assetMatches.length;
  if(title) title.textContent = q ? `Results for “${q}”` : 'Search across videos, playbooks, and source material.';
  if(subtitle) subtitle.textContent = q ? `${total} matched content items across trainings, transcript sections, playbooks, scripts, and social assets.` : 'Use one search to pull back matching trainings, video cards, transcript moments, playbooks, scripts, and social-ready assets.';
  const meta = document.getElementById('libraryTopMeta'); if(meta) meta.textContent = transcriptMatches.length ? `${transcriptMatches.length} transcript matches` : 'Best matches';

  const top = document.getElementById('libraryTop');
  if(top){
    const topTranscriptCards = transcriptMatches.slice(0,3).map(ch => ({kind:'transcript', item:ch}));
    const fallbackCards = [
      ...videoMatches.slice(0,3).map(item=>({kind:'video', item})),
      ...playbookMatches.slice(0,2).map(item=>({kind:'playbook', item})),
      ...assetMatches.slice(0,1).map(item=>({kind:'social', item}))
    ];
    const cards = (q && topTranscriptCards.length ? topTranscriptCards : fallbackCards).slice(0,3);
    top.innerHTML = cards.map(({kind,item})=>{
      const isTranscript = kind === 'transcript';
      const heading = item.title || item.name;
      const category = item.category || 'Training';
      const snippet = isTranscript ? snippetFor(item.text, q) : (item.summary || item.question || item.situation || '');
      const href = isTranscript ? appPath(`/all-content/?q=${encodeURIComponent(heading)}`) : kind === 'playbook' ? playbookUrl(item.name) : kind === 'social' ? appPath('/social-assets/') : trainingWatchUrl(item);
      const targetAttrs = kind === 'video' ? ' target="_blank" rel="noopener"' : '';
      const pct = matchPercent(item, q || heading);
      return `<a class="operator-result-card ${kind}" href="${href}"${targetAttrs}><div class="play-dot" aria-label="${kind === 'video' ? 'Play video' : 'Result type'}">${kindIcon(kind)}</div><div class="operator-card-media"><small>${escapeHtml(category)}</small><span>${escapeHtml(item.timestamp || '')}</span></div><p class="match-line">${pct}% match · ${escapeHtml(category)}</p><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(snippet).slice(0,330)}${snippet.length>330?'…':''}</p>${transcriptProof(1)}<div class="mini-tags">${resultTags(item)}</div></a>`;
    }).join('') || '<p class="muted">Search repair negotiations, CMA land, 1031 exchange, or work with TC to see grouped results.</p>';
  }

  const vids = document.getElementById('libraryVideos');
  if(vids){
    vids.innerHTML = videoMatches.map(t=>`<article class="video-result-card operator-video-card"><a class="route-thumb" ${videoTargetAttrs(t)} aria-label="Play ${escapeHtml(t.title)}"><span>▶</span><strong>${escapeHtml(t.category)}</strong></a><div><small>${escapeHtml(t.size)} · ${escapeHtml(t.type)}</small><h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.summary)}</p><div class="mini-tags">${resultTags(t)}</div><a class="route-button" ${videoTargetAttrs(t)}>Open video</a><a class="route-button ghost-button" href="${appPath('/all-content/')}?q=${encodeURIComponent(t.title)}">Search this training</a></div></article>`).join('') || '<p class="muted">No matching videos for this query.</p>';
  }

  const pb = document.getElementById('libraryPlaybooks');
  if(pb) pb.innerHTML = playbookMatches.map(p=>`<a class="operator-playbook-row" href="${playbookUrl(p.name)}"><b>PB</b><div><span>Playbook · ${(p.tags||[]).slice(0,2).join(' / ')}</span><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.question)}</p></div><small>${p.sources} source${p.sources===1?'':'s'}</small></a>`).join('');

  const list = document.getElementById('libraryRows');
  if(list){
    const rows = transcriptMatches.length ? transcriptMatches : videoMatches.slice(0,5).map(t=>({title:t.title, category:t.category, timestamp:t.size, text:t.excerpt, topics:t.topics}));
    list.innerHTML = rows.map(item=>{
      const text = snippetFor(item.text || item.summary || '', q).slice(0,260);
      const meta = item.timestamp ? `${item.timestamp} · Transcript` : 'Training note';
      return `<article class="route-row transcript-row operator-transcript-row"><b>TXT</b><div><small>${escapeHtml(item.category || 'Training')}</small><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(text)}</p>${transcriptProof(1)}</div><span>${escapeHtml(meta)}</span><i>☆</i></article>`;
    }).join('') || '<p class="muted">Transcript excerpts will appear here after a search.</p>';
  }

  const assets = document.getElementById('libraryAssets');
  if(assets){
    const combined = [
      ...scriptMatches.map(item=>({...item, kind:'Script', href: appPath('/scripts/')})),
      ...assetMatches.map(item=>({...item, kind:'Social Asset', href: appPath('/social-assets/')}))
    ];
    assets.innerHTML = combined.map(item=>`<a class="asset-result-card operator-asset-card" href="${item.href}"><span>${escapeHtml(item.kind)} · ${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary || item.situation || item.script)}</p><small>Open ${escapeHtml(item.kind.toLowerCase())} workspace →</small></a>`).join('') || '<p class="muted">Related scripts and social assets will appear here when matched.</p>';
  }
  applyResultFilter();
}
function expertNamesFor(p){
  const map = {
    'Repair Negotiation Playbook':['Craig'],
    'CMA / Pricing Playbook':['Craig'],
    'Contract-to-Close Checklist':['Marty','Marc'],
    'Investor Client Playbook':['Darrin','Craig'],
    'New Construction Deal Playbook':['Craig'],
    'New Agent 30-Day Onboarding':['Marty','Marc','Craig']
  };
  return map[p.name] || ['Team training'];
}
function sourcesForPlaybook(p){
  return (p.sourcesUsed && p.sourcesUsed.length) ? p.sourcesUsed : trainings.filter(t => (t.playbooks || []).includes(p.name)).map(t => t.title).slice(0, Math.max(1,p.sources));
}
function renderPlaybooksPage(){
  const grid = document.getElementById('playbookCards');
  if(grid) grid.innerHTML = playbooks.map((p,i)=>`<a class="route-card playbook-index-card" href="${playbookUrl(p.name)}"><span>Playbook ${String(i+1).padStart(2,'0')} · ${p.sources} sources · ${p.time}</span><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.question)}</p><div class="mini-tags">${p.tags.map(t=>`<em>${escapeHtml(t)}</em>`).join('')}</div><strong class="open-cue">Open full playbook</strong></a>`).join('');
}
function renderPlaybookDetailPage(){
  const p = playbookFromPath();
  const sources = sourcesForPlaybook(p);
  const experts = expertNamesFor(p);
  const shell = document.getElementById('playbookDetailShell');
  if(!shell) return;
  document.title = `${p.name} - Broker Brain`;
  const sections = [
    ['short-version','The Short Version','Use this first'],
    ['how-to','How to Use It','Operating steps'],
    ['expert-notes','Notes from the Expert','Training voice'],
    ['watchouts','Watchouts','Avoid mistakes'],
    ['experts','People','Who appears'],
    ['sources','Source Trail','Evidence links'],
    ['related','Related Concepts','Keep exploring']
  ];
  shell.innerHTML = `
    <section class="playbook-page-hero compact-playbook-hero">
      <a class="back-link" href="${appPath('/playbooks/')}">← All playbooks</a>
      <p class="eyebrow">Playbooks · Field guide</p>
      <h1>${escapeHtml(p.name)}</h1>
      <p class="leadline">${escapeHtml(p.question)}</p>
      <div class="doc-meta-row"><span>${escapeHtml(p.time)} read</span><span>${p.steps.length} steps</span><span>${sources.length || p.sources} sources</span><span>${experts.join(', ')}</span></div>
    </section>
    <section class="broker-summary-card source-validated-summary" aria-label="Broker summary">
      <p class="eyebrow">Broker Summary</p>
      <p>${escapeHtml(p.script || p.question)}</p>

    </section>
    <nav class="playbook-chapter-index" aria-label="Jump to playbook sections">
      ${sections.map((section,index)=>`<a href="#${section[0]}"><span>${String(index+1).padStart(2,'0')}</span><strong>${section[1]}</strong><small>${section[2]}</small><i>Jump →</i></a>`).join('')}
    </nav>
    <section id="short-version" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>01</span></div><h2>The Short Version</h2><p>${escapeHtml(p.script || p.question)}</p><p>Use this page as the operating guide. If an agent needs exact client wording, start with Ask the Broker from this playbook context and keep expert-sensitive guidance separated from tax, legal, lending, or inspection advice.</p></section>
    <section id="how-to" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>02</span></div><h2>How to Use It</h2><ol>${p.steps.map((s,i)=>`<li><span>${i+1}</span><p>${escapeHtml(s)}</p></li>`).join('')}</ol></section>
    <section id="expert-notes" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>03</span></div><h2>Notes from the Expert</h2><div class="expert-note-grid">${experts.map((name,i)=>`<article><strong>${escapeHtml(name)}</strong><p>${i===0 ? 'Primary training voice for this workflow. Use these notes to understand the team standard before applying it to a live client situation.' : 'Supporting training voice connected to the process, timing, or handoff in this playbook.'}</p></article>`).join('')}</div></section>
    <section id="watchouts" class="route-doc playbook-doc-section operator-section amber"><div class="section-kicker"><span>04</span></div><h2>Watchouts</h2><ul><li>Do not turn the playbook itself into a one-size-fits-all client script.</li><li>Confirm the facts of the transaction before recommending the next step.</li><li>Escalate expert topics early and avoid giving tax, legal, lending, or inspection advice.</li><li>Use the source trail when the topic is sensitive or the agent needs more confidence.</li></ul></section>
    <section id="experts" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>05</span></div><h2>People in the Trainings</h2><div class="people-list">${experts.map(name=>`<span>${escapeHtml(name)}</span>`).join('')}</div></section>
    <section id="sources" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>06</span></div><h2>Source Trail</h2><div class="source-trail-list">${sources.map((src,i)=>`<a href="${appPath('/library/')}?q=${encodeURIComponent(src)}"><span>[${String(i+1).padStart(2,'0')}]</span><small>Training source</small><strong>${escapeHtml(src)}</strong><em>Read/search →</em></a>`).join('') || '<p>Sources will appear as training material is connected.</p>'}</div></section>
    <section id="related" class="route-doc playbook-doc-section operator-section"><div class="section-kicker"><span>07</span></div><h2>Related Concepts</h2><div class="mini-tags large">${p.tags.map(t=>`<a href="${appPath('/library/')}?q=${encodeURIComponent(t)}"><em>${escapeHtml(t)}</em></a>`).join('')}</div></section>`;
}
function renderTopicsPage(){
  const grid = document.getElementById('topicCards');
  if(grid) grid.innerHTML = topics.map(t=>{
    const count = trainings.filter(v=>[v.category,...v.topics].join(' ').toLowerCase().includes(t.split(' ')[0].toLowerCase())).length || 1;
    return `<a class="route-card topic-card" href="${appPath('/library/')}?q=${encodeURIComponent(t)}"><span>${count} related source${count===1?'':'s'}</span><h3>${escapeHtml(t)}</h3><p>Open related trainings, playbooks, examples, and client conversation guidance.</p></a>`;
  }).join('');
}

const routeScripts = [
  {category:'Repair Negotiations', title:'Inspection repair request', situation:'Buyer wants to respond after inspection.', script:'Based on the inspection, there are a few items worth addressing. Let’s separate the items that affect safety, financing, or confidence from the cosmetic items, then choose the cleanest path: repair, credit, concession, or price adjustment.', playbook:'Repair Negotiation Playbook'},
  {category:'Transaction Coordination', title:'TC introduction', situation:'Client is under contract and needs to know who handles what.', script:'I’m bringing in our transaction coordinator now so deadlines, paperwork, title, lender details, and next steps stay organized. I’ll stay your main point of contact while the TC helps keep the process moving cleanly.', playbook:'Contract-to-Close Checklist'},
  {category:'Pricing', title:'Unusual property CMA', situation:'Seller has a property that does not fit easy comps.', script:'This is not a perfect apples-to-apples CMA, so I’m going to show you the closest evidence, call out where the comp set breaks down, and explain the pricing range instead of pretending there is one exact number.', playbook:'CMA / Pricing Playbook'},
  {category:'Investor Clients', title:'1031 timing handoff', situation:'Client asks about selling and avoiding taxes.', script:'Because this may involve a 1031 exchange, timing matters. Before funds are received, a qualified intermediary should be involved. Let’s get the QI or CPA into the conversation before giving tax-specific direction.', playbook:'Investor Client Playbook'}
];
function renderScriptsPage(){
  const grid = document.getElementById('scriptsGrid');
  if(!grid) return;
  grid.innerHTML = routeScripts.map(item => `<article class="route-card script-route-card"><span>${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.situation)}</p><blockquote>${escapeHtml(item.script)}</blockquote><a class="route-button" href="${playbookUrl(item.playbook)}">Open related playbook</a></article>`).join('');
}
function renderPipelinePage(){
  const flow = document.getElementById('pipelineAdminFlow');
  if(!flow) return;
  const steps = [
    ['Uploaded','Drop in Zoom, Drive, YouTube, or video file.'],
    ['Transcribed','Create searchable transcript and sections.'],
    ['Indexed','Tag topics, speakers, timestamps, and training categories.'],
    ['Scripts extracted','Pull client wording and agent talk tracks.'],
    ['Playbooks updated','Add the strongest guidance to operating playbooks.'],
    ['Ready in Ask','Agents can ask questions from the new material.']
  ];
  flow.innerHTML = steps.map((step,i)=>`<article class="route-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${step[0]}</h3><p>${step[1]}</p></article>`).join('');
}

function renderOnboardingPage(){
  const grid = document.getElementById('onboardingPath');
  if(!grid) return;
  const steps = [['Day 1','Team operating system','Brokerage expectations, tech stack, who to contact, and how trainings work.'],['Week 1','Core conversations','Buyer consult, listing appointment, follow-up, and TC workflow.'],['First deal','Contract-to-close','Inspection, repair negotiations, deadlines, documents, and TC handoff.'],['Advanced agent','Specialty knowledge','1031 exchange basics, land/flip CMA, and new construction opportunities.']];
  grid.innerHTML = steps.map(step=>`<article class="route-card"><span>${escapeHtml(step[0])}</span><h3>${escapeHtml(step[1])}</h3><p>${escapeHtml(step[2])}</p></article>`).join('');
}
function renderTrainingVideosPage(){
  const grid = document.getElementById('trainingVideoGrid');
  if(!grid) return;
  grid.innerHTML = trainings.map(t=>`<article class="route-card"><a class="route-thumb" ${videoTargetAttrs(t)} aria-label="Play ${escapeHtml(t.title)}"><span>▶</span><strong>${escapeHtml(t.category)}</strong></a><span>${escapeHtml(t.category)} · ${escapeHtml(t.size)}</span><h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.summary)}</p><div class="mini-tags">${(t.topics||[]).slice(0,3).map(topic=>`<em>${escapeHtml(topic)}</em>`).join('')}</div><a class="route-button" ${videoTargetAttrs(t)}>Open video</a><a class="route-button ghost-button" href="${appPath('/all-content/')}?q=${encodeURIComponent(t.title)}">Search this training</a></article>`).join('');
}
function renderObjectionsPage(){
  const grid = document.getElementById('objectionCards');
  if(!grid) return;
  const objections = [['Pricing','“Zillow says my home is worth more.”','Use the CMA/Pricing Playbook to explain market evidence, adjustments, and pricing strategy.','CMA / Pricing Playbook'],['Inspection','“The buyer is asking for too many repairs.”','Use the Repair Negotiation Playbook to prioritize safety, lender-required items, and deal positioning.','Repair Negotiation Playbook'],['Investor','“Can I sell and avoid taxes?”','Use 1031 Exchange Basics as a compliant starting point, then refer to a qualified intermediary/tax advisor.','Investor Client Playbook'],['Transaction','“Who is handling the next deadline?”','Use the Contract-to-Close Checklist to clarify agent, TC, lender, and title handoffs.','Contract-to-Close Checklist']];
  grid.innerHTML = objections.map(item=>`<article class="route-card"><span>${escapeHtml(item[0])}</span><h3>${escapeHtml(item[1])}</h3><p>${escapeHtml(item[2])}</p><a class="route-button" href="${playbookUrl(item[3])}">Open related playbook</a></article>`).join('');
}

const ownerInsights = {
  metrics: [
    {label:'Total searches', value:'1,248', delta:'+18%', note:'Agents are using search before escalating questions.'},
    {label:'Ask Broker questions', value:'412', delta:'+31%', note:'Repeat broker guidance is being captured and reused.'},
    {label:'Video plays', value:'286', delta:'+22%', note:'Training recordings are being reopened after meetings.'},
    {label:'Assets downloaded/copied', value:'174', delta:'+27%', note:'Scripts and checklists are becoming field tools.'},
    {label:'Avg answer satisfaction', value:'87%', delta:'+9%', note:'Example post-answer helpfulness score.'},
    {label:'Content gap alerts', value:'14', delta:'5 urgent', note:'Topics with demand but weak current coverage.'},
    {label:'Recommended new assets', value:'23', delta:'Next 30 days', note:'Demo content roadmap generated from agent demand.'}
  ],
  searches: [
    {term:'price reduction script', count:42, quality:'Strong', opportunity:'Create 3 shorter roleplay clips'},
    {term:'repair negotiations', count:37, quality:'Strong', opportunity:'Promote inspection playbook'},
    {term:'1031 exchange timing', count:29, quality:'Medium', opportunity:'Add QI handoff checklist'},
    {term:'FSBO objection script', count:24, quality:'Weak', opportunity:'Record FSBO training'},
    {term:'new agent first week', count:21, quality:'Medium', opportunity:'Expand onboarding path'}
  ],
  noResults: [
    {term:'FSBO follow-up texts', count:24, action:'Create text/email script pack'},
    {term:'buyer agency agreement objection', count:18, action:'Add compliant buyer consult module'},
    {term:'probate listing checklist', count:13, action:'Record specialty-situation training'},
    {term:'Instagram open house captions', count:12, action:'Generate approved social asset batch'}
  ],
  questions: [
    {question:'How do I explain a price reduction without upsetting the seller?', count:38, category:'Listings', status:'Strong answer'},
    {question:'What should I say after a buyer inspection report?', count:34, category:'Negotiation', status:'Strong answer'},
    {question:'When do I bring in the transaction coordinator?', count:27, category:'Contract-to-close', status:'Strong answer'},
    {question:'What should a new agent do in week one?', count:21, category:'Onboarding', status:'Needs path'},
    {question:'What are the basics of a 1031 exchange?', count:19, category:'Investors', status:'Needs checklist'}
  ],
  content: [
    {title:'Repair Negotiation Playbook', type:'Playbook', views:84, saves:19, downloads:11, engagement:92},
    {title:'Listing Appointment Training', type:'Video', views:72, saves:14, downloads:6, engagement:88},
    {title:'Price Reduction Scripts', type:'Script pack', views:69, saves:21, downloads:32, engagement:96},
    {title:'Work With Your TC', type:'Video training', views:58, saves:11, downloads:9, engagement:81},
    {title:'1031 Exchange Basics', type:'Training + Ask source', views:43, saves:8, downloads:5, engagement:74},
    {title:'New Construction Deal Playbook', type:'Playbook', views:36, saves:7, downloads:4, engagement:68}
  ],
  videos: [
    {title:'Repair Negotiations w Craig', plays:67, watch:'73%', sourceClicks:24, opportunity:'Turn top objections into 5 short clips'},
    {title:'Listing Appointment Masterclass', plays:52, watch:'61%', sourceClicks:18, opportunity:'Add pre-appointment checklist'},
    {title:'Work With Your TC w Marty & Marc', plays:48, watch:'58%', sourceClicks:16, opportunity:'Add contract-to-close timeline'},
    {title:'1031 Exchange Basics w Darrin', plays:38, watch:'44%', sourceClicks:11, opportunity:'Add 1-page QI handoff guide'}
  ],
  assets: [
    {title:'Price Reduction Script', downloads:43, copies:31, related:'price reduction'},
    {title:'Buyer Consultation Checklist', downloads:26, copies:14, related:'buyer consult'},
    {title:'Repair Request Script', downloads:21, copies:17, related:'inspection repairs'},
    {title:'TC Introduction Message', downloads:18, copies:22, related:'work with TC'},
    {title:'1031 Timing Disclaimer', downloads:14, copies:9, related:'1031 exchange'}
  ],
  recommendations: [
    {gap:'FSBO objection + follow-up', evidence:'24 searches, weak current result quality', build:'Record 10-minute FSBO objection training and create 4 text follow-up templates.', priority:'High'},
    {gap:'New agent first 30 days', evidence:'21 searches, scattered results across videos', build:'Create structured onboarding path with required trainings, scripts, and first-deal checklist.', priority:'High'},
    {gap:'1031 exchange handoff', evidence:'29 asks/searches, medium confidence', build:'Add broker-approved checklist with QI/CPA escalation language.', priority:'Medium'},
    {gap:'Open house follow-up', evidence:'Rising search trend, low asset downloads', build:'Create follow-up script pack and social posts for open house leads.', priority:'Medium'},
    {gap:'Buyer agency agreement objections', evidence:'18 weak-result searches and 11 Ask questions', build:'Record buyer consult objection module with approved consumer-facing language.', priority:'High'},
    {gap:'Short-form manager roleplays', evidence:'High usage on scripts but lower long-video completion', build:'Cut top pricing/inspection/TC topics into 2-minute coaching clips.', priority:'High'}
  ],
  segments: [
    {name:'Newer agents', pct:48, behavior:'Search onboarding, scripts, TC workflow'},
    {name:'Producing agents', pct:34, behavior:'Use pricing, inspection, and client wording assets'},
    {name:'Team leads/admin', pct:18, behavior:'Review training gaps and source performance'}
  ],
  roadmap: [
    {signal:'24 weak searches', title:'FSBO objection gap', takeaway:'Agents are looking for prospecting language that does not exist yet.', next:'Record FSBO objection training + create 4 follow-up texts', value:'Creates a sellable script pack from one owner training'},
    {signal:'29 Ask/searches', title:'1031 exchange handoff', takeaway:'Investor questions need approved escalation language before agents improvise.', next:'Build QI/CPA checklist and disclaimer card', value:'Reduces risk while supporting investor conversations'},
    {signal:'96% script engagement', title:'Price reduction roleplay', takeaway:'Agents use the script pack, but need practice clips for difficult sellers.', next:'Record 3 manager-agent roleplays', value:'Turns repeated coaching into reusable video assets'}
  ],
  reports: [
    {title:'Training demand report', detail:'Weekly summary of top searches, weak results, repeated Ask topics, and new training opportunities.'},
    {title:'Content ROI report', detail:'Which videos, playbooks, scripts, and social assets are getting used, saved, copied, or ignored.'},
    {title:'Owner action plan', detail:'A prioritized list of what to record, what to turn into checklists, and what to promote to agents next.'}
  ],
  events: [
    ['search_performed','Query, result count, clicked result, no-result flag'],
    ['ask_question_submitted','Question, category, sources returned, helpfulness'],
    ['content_opened','Content id, type, source route, time on page'],
    ['video_progress','Video id, play, 25/50/75/100% milestones'],
    ['asset_downloaded','Asset id, format, related source/training'],
    ['script_copied','Script id, playbook, question context'],
    ['source_card_clicked','Answer id, source title, video/transcript timestamp']
  ]
};
function qualityClass(value){ return String(value || '').toLowerCase().replace(/[^a-z]+/g,'-'); }
function barWidth(value, max){ return Math.max(4, Math.round((Number(value)||0) / max * 100)); }
function renderMetricCards(){
  const el = document.getElementById('insightMetricCards'); if(!el) return;
  el.innerHTML = ownerInsights.metrics.map(m=>`<article><span>${escapeHtml(m.label)}</span><strong>${escapeHtml(m.value)}</strong><em>${escapeHtml(m.delta)}</em><p>${escapeHtml(m.note)}</p></article>`).join('');
}
function renderInsightRows(){
  const top = document.getElementById('topSearches');
  if(top){ top.innerHTML = ownerInsights.searches.map(s=>`<article><div><strong>${escapeHtml(s.term)}</strong><small>${s.count} searches</small></div><span class="quality ${qualityClass(s.quality)}">${escapeHtml(s.quality)}</span><p>${escapeHtml(s.opportunity)}</p><i><b style="width:${barWidth(s.count,42)}%"></b></i></article>`).join(''); }
  const gaps = document.getElementById('noResultSearches');
  if(gaps){ gaps.innerHTML = ownerInsights.noResults.map(s=>`<article><div><strong>${escapeHtml(s.term)}</strong><small>${s.count} weak/no-result searches</small></div><p>${escapeHtml(s.action)}</p><i><b style="width:${barWidth(s.count,24)}%"></b></i></article>`).join(''); }
  const qs = document.getElementById('askQuestionAnalytics');
  if(qs){ qs.innerHTML = ownerInsights.questions.map(q=>`<article><span>${escapeHtml(q.category)}</span><h3>${escapeHtml(q.question)}</h3><p>${q.count} asks · ${escapeHtml(q.status)}</p></article>`).join(''); }
}
function renderPerformance(){
  const el = document.getElementById('contentPerformance'); if(!el) return;
  el.innerHTML = ownerInsights.content.map(c=>`<article><span>${escapeHtml(c.type)}</span><h3>${escapeHtml(c.title)}</h3><div class="perf-stats"><b>${c.views}<small>views</small></b><b>${c.saves}<small>saves</small></b><b>${c.downloads}<small>downloads</small></b></div><div class="engagement-bar"><i style="width:${c.engagement}%"></i></div><p>${c.engagement}% engagement score</p></article>`).join('');
}
function renderVideoAndAssets(){
  const v = document.getElementById('videoEngagement');
  if(v){ v.innerHTML = ownerInsights.videos.map(item=>`<article><div class="video-mini-thumb"><span>▶</span><small>${escapeHtml(item.watch)} avg watch</small></div><div><h3>${escapeHtml(item.title)}</h3><p>${item.plays} plays · ${item.sourceClicks} clicks from Ask/source cards</p><strong>${escapeHtml(item.opportunity)}</strong></div></article>`).join(''); }
  const a = document.getElementById('assetDownloads');
  if(a){ a.innerHTML = ownerInsights.assets.map(item=>`<article><div><strong>${escapeHtml(item.title)}</strong><small>${item.downloads} downloads · ${item.copies} copies</small></div><p>Related search: ${escapeHtml(item.related)}</p><i><b style="width:${barWidth(item.downloads + item.copies,74)}%"></b></i></article>`).join(''); }
}
function renderRoadmapWow(){
  const el = document.getElementById('roadmapWow'); if(!el) return;
  el.innerHTML = ownerInsights.roadmap.map((r,i)=>`<article><div><span>${escapeHtml(r.signal)}</span><b>${String(i+1).padStart(2,'0')}</b></div><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.takeaway)}</p><strong>${escapeHtml(r.next)}</strong><small>${escapeHtml(r.value)}</small></article>`).join('');
}
function renderRecommendations(){
  const el = document.getElementById('contentRecommendations'); if(!el) return;
  el.innerHTML = ownerInsights.recommendations.map((r,i)=>`<article><span>${escapeHtml(r.priority)} priority · ${String(i+1).padStart(2,'0')}</span><h3>${escapeHtml(r.gap)}</h3><p><strong>Evidence:</strong> ${escapeHtml(r.evidence)}</p><p><strong>Build next:</strong> ${escapeHtml(r.build)}</p></article>`).join('');
}
function renderOwnerReports(){
  const el = document.getElementById('ownerReportCards'); if(!el) return;
  el.innerHTML = ownerInsights.reports.map((r,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.detail)}</p></article>`).join('');
}
function renderSegmentsAndEvents(){
  const s = document.getElementById('agentSegments');
  if(s){ s.innerHTML = ownerInsights.segments.map(item=>`<article><strong>${item.pct}%</strong><span>${escapeHtml(item.name)}</span><p>${escapeHtml(item.behavior)}</p></article>`).join(''); }
  const e = document.getElementById('eventPlan');
  if(e){ e.innerHTML = ownerInsights.events.map(item=>`<article><code>${escapeHtml(item[0])}</code><p>${escapeHtml(item[1])}</p></article>`).join(''); }
}
function renderInsightsPage(){ renderMetricCards(); renderInsightRows(); renderRoadmapWow(); renderPerformance(); renderVideoAndAssets(); renderRecommendations(); renderOwnerReports(); renderSegmentsAndEvents(); }

async function initRoutePage(){
  setActiveNav();
  document.querySelectorAll('[data-route-query]').forEach(b=>b.addEventListener('click',()=>goLibrary(b.dataset.routeQuery)));
  document.getElementById('routeSearchForm')?.addEventListener('submit', handleSearchSubmit);
  await loadIndex();
  if(document.body.dataset.page === 'library' || document.body.dataset.page === 'all-content') renderLibrary();
  if(document.body.dataset.page === 'playbooks') renderPlaybooksPage();
  if(document.body.dataset.page === 'playbook-detail') renderPlaybookDetailPage();
  if(document.body.dataset.page === 'topics') renderTopicsPage();
  if(document.body.dataset.page === 'scripts') renderScriptsPage();
  if(document.body.dataset.page === 'pipeline') renderPipelinePage();
  if(document.body.dataset.page === 'onboarding') renderOnboardingPage();
  if(document.body.dataset.page === 'training-videos') renderTrainingVideosPage();
  if(document.body.dataset.page === 'objections') renderObjectionsPage();
  if(document.body.dataset.page === 'insights') renderInsightsPage();
}
initRoutePage();
