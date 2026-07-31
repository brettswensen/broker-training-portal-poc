const trainings = [
  {title:"Work With Your TC w Marty & Marc", file:"2025 Jul 30 Work With Your TC w Marty & Marc.mp4", type:"Video Training", category:"Transaction Coordination", size:"634 MB", summary:"How agents should collaborate with transaction coordination from contract to close.", excerpt:"Marty and Marc walk through when to bring the TC in, how deadlines are tracked, and what the agent still owns with the client.", topics:["transaction coordinator","contract to close","operations","timelines","work with TC"], playbooks:["Contract-to-Close Checklist","New Agent Onboarding"]},
  {title:"Development & New Construction Deals w Craig", file:"2026 Apr 16 Development & New Construction Deals w Craig.mp4", type:"Video Training", category:"New Construction", size:"Pending", summary:"Specialized training for development, builders, land, and new construction opportunities.", excerpt:"Craig explains how builder/developer conversations differ from regular resale and what agents need to know before advising clients.", topics:["development deals","new construction","builders","land"], playbooks:["New Construction Deal Playbook"]},
  {title:"CMA's - Triplex, Addition, Nightly Rental w Craig", file:"2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"Advanced valuation examples for unusual properties like triplexes, additions, and nightly rentals.", excerpt:"Craig breaks down how to think about comp selection and adjustments when the property does not fit a clean single-family template.", topics:["CMA","triplex","addition","nightly rental","pricing"], playbooks:["CMA/Pricing Playbook"]},
  {title:"Repair Negotiations w Craig", file:"2026 Jul 23 Repair Negotiations w Craig.mp4", type:"Video Training", category:"Negotiation & Inspection", size:"157.9 MB", summary:"How to guide buyers and sellers through inspection objections and repair negotiations.", excerpt:"The training focuses on separating safety and lending issues from wishlist repairs, then turning the inspection report into a calm negotiation strategy.", topics:["repair negotiations","inspection objection","buyer requests","seller response"], playbooks:["Repair Negotiation Playbook","Inspection Objection Playbook"]},
  {title:"1031 Exchange Basics w Darrin", file:"2026 May 4 1031 Exchange Basics w Darrin.mp4", type:"Video Training", category:"Investors & Tax Strategy", size:"Pending", summary:"The basics agents should understand when working with investor clients considering a 1031 exchange.", excerpt:"Darrin covers the high-level exchange concept, timing pressure, and why agents should bring in a qualified intermediary/tax advisor early.", topics:["1031 exchange","investor clients","tax deferral","timelines"], playbooks:["Investor Client Playbook"]},
  {title:"CMA - Flip Property and Land w Craig", file:"2026 May 6 CMA - Flip Property and Land w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"CMA approach for flip properties, land valuation, and investor-oriented pricing questions.", excerpt:"Craig compares flip potential and land value scenarios, showing how investor intent changes the pricing conversation.", topics:["CMA","flip property","land valuation","investor property"], playbooks:["CMA/Pricing Playbook","Investor Client Playbook"]}
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

function slugifyPlaybook(name){
  return String(name || '').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function playbookUrl(name){ return `/playbooks/${slugifyPlaybook(name)}/`; }
function playbookFromPath(){
  const parts = location.pathname.split('/').filter(Boolean);
  const slug = parts[1] || '';
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
function goLibrary(q){ const value = String(q || document.getElementById('routeSearch')?.value || '').trim(); location.href = `/library/${value ? `?q=${encodeURIComponent(value)}` : ''}`; }
function handleSearchSubmit(e){ e?.preventDefault?.(); goLibrary(); }
function setActiveNav(){
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.route-nav a').forEach(a => a.classList.toggle('active', (a.getAttribute('href') || '').replace(/\/$/,'') === path));
}
let transcriptIndex = {records:[], chunks:[]};
let transcriptReady = false;
async function loadIndex(){
  try{
    const r = await fetch('/data/search-index.json');
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
function relatedPlaybooksFor(text){
  const source = String(text || '').toLowerCase();
  const scored = playbooks.map((p, index) => {
    const haystack = [p.name, p.question, ...(p.tags || [])].join(' ').toLowerCase();
    const score = haystack.split(/\W+/).filter(word => word && source.includes(word)).length;
    return {p, index, score};
  }).filter(item => item.score > 0).sort((a,b)=>b.score-a.score);
  return (scored.length ? scored : playbooks.map((p,index)=>({p,index,score:1}))).slice(0,5).map(item => ({...item.p, index:item.index}));
}
function renderLibrary(){
  const q = getQuery();
  const input = document.getElementById('routeSearch'); if(input) input.value = q;
  const title = document.getElementById('libraryTitle');
  const subtitle = document.getElementById('librarySubtitle');
  const transcriptMatches = transcriptSearch(q, 8);
  const trainingMatches = matchingTrainings(q);
  const rows = q ? [...transcriptMatches.slice(0,8), ...trainingMatches.slice(0,6)].slice(0,12) : trainings;
  const related = relatedPlaybooksFor(q || 'agent training playbook');
  if(title) title.textContent = q ? `Results for “${q}”` : 'Training library';
  if(subtitle) subtitle.textContent = q ? `${rows.length} relevant items across trainings, transcript sections, and playbooks.` : 'Search or browse videos, training notes, playbooks, scripts, and topic guidance.';
  const top = document.getElementById('libraryTop');
  if(top){
    const topItems = q ? (transcriptMatches.length ? transcriptMatches.slice(0,3) : trainingMatches.slice(0,3)) : trainings.slice(0,3);
    top.innerHTML = topItems.map((item)=>{
      const isTranscript = !!item.text;
      const category = item.category || 'Training';
      const text = isTranscript ? snippetFor(item.text, q) : item.summary;
      return `<article class="route-card feature"><span>${isTranscript ? 'Transcript match' : 'Training video'} · ${escapeHtml(category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(text)}</p><div class="mini-tags">${(item.topics||[]).slice(0,3).map(t=>`<em>${escapeHtml(t)}</em>`).join('')}</div></article>`;
    }).join('');
  }
  const list = document.getElementById('libraryRows');
  if(list){
    list.innerHTML = rows.map(item=>{
      const isTranscript = !!item.text;
      const text = isTranscript ? snippetFor(item.text, q).slice(0,190) : item.summary;
      const meta = isTranscript ? `${item.timestamp} · transcript` : `${item.size} · video training`;
      return `<article class="route-row"><b>${isTranscript ? 'TXT' : 'VID'}</b><div><small>${escapeHtml(item.category)}</small><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(text)}</p></div><span>${escapeHtml(meta)}</span></article>`;
    }).join('');
  }
  const pb = document.getElementById('libraryPlaybooks');
  if(pb) pb.innerHTML = related.map(p=>`<a class="route-row compact" href="${playbookUrl(p.name)}"><b>PB</b><div><small>${p.sources} sources</small><strong>${escapeHtml(p.name)}</strong><p>${escapeHtml(p.question)}</p></div><span>Open</span></a>`).join('');
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
  shell.innerHTML = `
    <section class="playbook-page-hero">
      <a class="back-link" href="/playbooks/">← All playbooks</a>
      <p class="eyebrow">Playbooks · Field guide</p>
      <h1>${escapeHtml(p.name)}</h1>
      <p class="leadline">${escapeHtml(p.question)}</p>
      <div class="doc-meta-row"><span>${escapeHtml(p.time)} read</span><span>${p.steps.length} steps</span><span>${sources.length || p.sources} sources</span><span>${experts.length} ${experts.length===1?'person':'people'}</span></div>
    </section>
    <nav class="playbook-jump-nav" aria-label="Playbook sections">
      <a href="#short-version">01 Short Version</a><a href="#how-to">02 How to Use It</a><a href="#expert-notes">03 Expert Notes</a><a href="#watchouts">04 Watchouts</a><a href="#experts">05 People</a><a href="#sources">06 Source Trail</a><a href="#related">07 Related Concepts</a>
    </nav>
    <section id="short-version" class="route-doc playbook-doc-section"><p class="eyebrow">01</p><h2>The Short Version</h2><p>${escapeHtml(p.script || p.question)}</p><p>Use this page as the operating guide. If an agent needs exact client wording, start with Ask the Broker from this playbook context and keep expert-sensitive guidance separated from tax, legal, lending, or inspection advice.</p></section>
    <section id="how-to" class="route-doc playbook-doc-section"><p class="eyebrow">02</p><h2>How to Use It</h2><ol>${p.steps.map((s,i)=>`<li><span>${i+1}</span><p>${escapeHtml(s)}</p></li>`).join('')}</ol></section>
    <section id="expert-notes" class="route-doc playbook-doc-section"><p class="eyebrow">03</p><h2>Notes from the Expert</h2><div class="expert-note-grid">${experts.map((name,i)=>`<article><strong>${escapeHtml(name)}</strong><p>${i===0 ? 'Primary training voice for this workflow. Use these notes to understand the team standard before applying it to a live client situation.' : 'Supporting training voice connected to the process, timing, or handoff in this playbook.'}</p></article>`).join('')}</div></section>
    <section id="watchouts" class="route-doc playbook-doc-section amber"><p class="eyebrow">04</p><h2>Watchouts</h2><ul><li>Do not turn the playbook itself into a one-size-fits-all client script.</li><li>Confirm the facts of the transaction before recommending the next step.</li><li>Escalate expert topics early and avoid giving tax, legal, lending, or inspection advice.</li><li>Use the source trail when the topic is sensitive or the agent needs more confidence.</li></ul></section>
    <section id="experts" class="route-doc playbook-doc-section"><p class="eyebrow">05</p><h2>People in the Trainings</h2><div class="people-list">${experts.map(name=>`<span>${escapeHtml(name)}</span>`).join('')}</div></section>
    <section id="sources" class="route-doc playbook-doc-section"><p class="eyebrow">06</p><h2>Source Trail</h2><div class="source-trail-list">${sources.map((src,i)=>`<a href="/library/?q=${encodeURIComponent(src)}"><span>[${String(i+1).padStart(2,'0')}]</span><small>Training source</small><strong>${escapeHtml(src)}</strong></a>`).join('') || '<p>Sources will appear as training material is connected.</p>'}</div></section>
    <section id="related" class="route-doc playbook-doc-section"><p class="eyebrow">07</p><h2>Related Concepts</h2><div class="mini-tags large">${p.tags.map(t=>`<a href="/library/?q=${encodeURIComponent(t)}"><em>${escapeHtml(t)}</em></a>`).join('')}</div></section>`;
}
function renderTopicsPage(){
  const grid = document.getElementById('topicCards');
  if(grid) grid.innerHTML = topics.map(t=>{
    const count = trainings.filter(v=>[v.category,...v.topics].join(' ').toLowerCase().includes(t.split(' ')[0].toLowerCase())).length || 1;
    return `<a class="route-card topic-card" href="/library/?q=${encodeURIComponent(t)}"><span>${count} related source${count===1?'':'s'}</span><h3>${escapeHtml(t)}</h3><p>Open the library filtered to trainings, transcript notes, and playbooks for this topic.</p></a>`;
  }).join('');
}
async function initRoutePage(){
  setActiveNav();
  document.querySelectorAll('[data-route-query]').forEach(b=>b.addEventListener('click',()=>goLibrary(b.dataset.routeQuery)));
  document.getElementById('routeSearchForm')?.addEventListener('submit', handleSearchSubmit);
  await loadIndex();
  if(document.body.dataset.page === 'library') renderLibrary();
  if(document.body.dataset.page === 'playbooks') renderPlaybooksPage();
  if(document.body.dataset.page === 'playbook-detail') renderPlaybookDetailPage();
  if(document.body.dataset.page === 'topics') renderTopicsPage();
}
initRoutePage();
