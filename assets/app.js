const trainings = [
  {title:"Work With Your TC w Marty & Marc", file:"2025 Jul 30 Work With Your TC w Marty & Marc.mp4", type:"Video Training", category:"Transaction Coordination", size:"634 MB", summary:"How agents should collaborate with transaction coordination from contract to close.", excerpt:"Marty and Marc walk through when to bring the TC in, how deadlines are tracked, and what the agent still owns with the client.", topics:["transaction coordinator","contract to close","operations","timelines","work with TC"], playbooks:["Contract-to-Close Checklist","New Agent Onboarding"]},
  {title:"Development & New Construction Deals w Craig", file:"2026 Apr 16 Development & New Construction Deals w Craig.mp4", type:"Video Training", category:"New Construction", size:"Pending", summary:"Specialized training for development, builders, land, and new construction opportunities.", excerpt:"Craig explains how builder/developer conversations differ from regular resale and what agents need to know before advising clients.", topics:["development deals","new construction","builders","land"], playbooks:["New Construction Deal Playbook"]},
  {title:"CMA's - Triplex, Addition, Nightly Rental w Craig", file:"2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"Advanced valuation examples for unusual properties like triplexes, additions, and nightly rentals.", excerpt:"Craig breaks down how to think about comp selection and adjustments when the property does not fit a clean single-family template.", topics:["CMA","triplex","addition","nightly rental","pricing"], playbooks:["CMA/Pricing Playbook"]},
  {title:"Repair Negotiations w Craig", file:"2026 Jul 23 Repair Negotiations w Craig.mp4", type:"Video Training", category:"Negotiation & Inspection", size:"157.9 MB", summary:"How to guide buyers and sellers through inspection objections and repair negotiations.", excerpt:"The training focuses on separating safety and lending issues from wishlist repairs, then turning the inspection report into a calm negotiation strategy.", topics:["repair negotiations","inspection objection","buyer requests","seller response"], playbooks:["Repair Negotiation Playbook","Inspection Objection Playbook"]},
  {title:"1031 Exchange Basics w Darrin", file:"2026 May 4 1031 Exchange Basics w Darrin.mp4", type:"Video Training", category:"Investors & Tax Strategy", size:"Pending", summary:"The basics agents should understand when working with investor clients considering a 1031 exchange.", excerpt:"Darrin covers the high-level exchange concept, timing pressure, and why agents should bring in a qualified intermediary/tax advisor early.", topics:["1031 exchange","investor clients","tax deferral","timelines"], playbooks:["Investor Client Playbook"]},
  {title:"CMA - Flip Property and Land w Craig", file:"2026 May 6 CMA - Flip Property and Land w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"CMA approach for flip properties, land valuation, and investor-oriented pricing questions.", excerpt:"Craig compares flip potential and land value scenarios, showing how investor intent changes the pricing conversation.", topics:["CMA","flip property","land valuation","investor property"], playbooks:["CMA/Pricing Playbook","Investor Client Playbook"]}
];

const playbooks = [
  {name:"New Agent 30-Day Onboarding", question:"What should a new agent learn first?", sources:4, time:"24 min", tags:["onboarding","daily routine","scripts"]},
  {name:"Repair Negotiation Playbook", question:"How do we handle inspection and repair asks?", sources:1, time:"8 min", tags:["inspection","negotiation","transaction"]},
  {name:"CMA / Pricing Playbook", question:"How do agents price unusual properties?", sources:2, time:"14 min", tags:["CMA","pricing","valuation"]},
  {name:"Contract-to-Close Checklist", question:"What happens after going under contract?", sources:2, time:"10 min", tags:["TC","deadlines","operations"]},
  {name:"Investor Client Playbook", question:"How should agents support investor clients?", sources:3, time:"12 min", tags:["1031","flip","land"]},
  {name:"New Construction Deal Playbook", question:"What should agents know about builder/development deals?", sources:1, time:"9 min", tags:["development","builders","land"]}
];

const topics = ["CMA & Pricing","Repair Negotiations","Transaction Coordination","1031 Exchange","New Construction","Investor Clients","Inspection Objections","Contract-to-Close","Land Valuation","Flip Properties","Nightly Rentals","New Agent Onboarding"];

const demoAnswers = {
  repair: {
    title:"Repair negotiation guidance",
    confidence:"High match",
    intent:"The agent needs a practical inspection-objection process and client script.",
    queryTerms:["repair negotiations","inspection objection","seller response"],
    sources:[
      {name:"Repair Negotiations w Craig", cite:"Video training · Inspection/Negotiation", match:"94%", quote:"Separate safety or financing issues from cosmetic requests, then frame the ask around keeping the deal together."},
      {name:"Inspection Objection Playbook", cite:"Generated playbook · 1 source", match:"87%", quote:"Use repair, credit, price adjustment, or seller concession as possible solution paths."}
    ],
    steps:["Start by separating health/safety issues from wish-list repairs.","Use the inspection report to prioritize items that affect financing, habitability, or deal confidence.","Anchor the conversation in solutions: repair, credit, price adjustment, or seller concession.","Keep emotion out of it and document every agreement clearly."],
    script:"Based on the inspection, there are a few items worth addressing. Let’s separate the items that affect safety, financing, or the buyer’s confidence from the cosmetic items. Then we can decide whether the cleanest path is a repair, a credit, a concession, or a price adjustment.",
    followups:["Build repair request checklist","Show related scripts","Open inspection objection playbook"]
  },
  tc: {
    title:"Working with your transaction coordinator",
    confidence:"High match",
    intent:"The agent needs to know how to partner with TC without dropping client ownership.",
    queryTerms:["transaction coordinator","contract to close","deadlines"],
    sources:[
      {name:"Work With Your TC w Marty & Marc", cite:"Video training · Operations", match:"92%", quote:"Loop in the TC right after contract acceptance so deadlines, documents, and contacts are organized early."},
      {name:"Contract-to-Close Checklist", cite:"Generated checklist · 2 sources", match:"84%", quote:"Agent owns the relationship; TC helps keep the process and paperwork moving."}
    ],
    steps:["Loop in the transaction coordinator immediately after going under contract.","Confirm deadlines, documents, contacts, lender info, and title contacts are complete.","Let the TC manage process visibility while the agent continues leading client communication.","Use a shared checklist so nothing falls through between acceptance and closing."],
    script:"I’m bringing in our transaction coordinator now so we can keep deadlines, paperwork, title, lender details, and next steps organized. I’ll still be your main point of contact, and the TC helps make sure every detail is tracked through closing.",
    followups:["Open contract-to-close checklist","Create new-agent task list","Find deadline reminders"]
  },
  "1031": {
    title:"1031 exchange basics for agents",
    confidence:"Strong match",
    intent:"The agent needs a safe, compliant high-level answer for investor clients.",
    queryTerms:["1031 exchange","investor clients","tax deferral"],
    sources:[
      {name:"1031 Exchange Basics w Darrin", cite:"Video training · Investors/Tax Strategy", match:"90%", quote:"A 1031 can defer taxes on investment property, but the timelines and intermediary rules matter."},
      {name:"Investor Client Playbook", cite:"Generated playbook · 3 sources", match:"78%", quote:"Agents should identify the situation early and connect the client with a qualified intermediary or tax professional."}
    ],
    steps:["First clarify the timing: accepted offer is not the same as closed.","If the client has not closed yet, pause and get a qualified intermediary involved immediately before funds are received.","If the client already closed and received the money, the exchange may be blown or severely limited — tell them to contact a QI/CPA right away.","Do not give tax or legal advice; explain the risk, document the recommendation, and make the expert handoff urgent."],
    script:"Because this is a potential 1031 exchange, timing matters a lot. If you have not closed yet, we need to get a qualified intermediary involved immediately before you receive any funds. If you already closed and took the money, the exchange may be at risk, so the next call should be to a QI or CPA. I can help coordinate that connection, but they need to give the tax guidance.",
    followups:["Call qualified intermediary","Confirm closing/fund status","Loop in CPA/tax advisor"]
  },
  cma: {
    title:"CMA and pricing guidance",
    confidence:"Good match",
    intent:"The agent needs valuation guidance for unusual property types.",
    queryTerms:["CMA","pricing","land valuation","flip property"],
    sources:[
      {name:"CMA's - Triplex, Addition, Nightly Rental w Craig", cite:"Video training · CMA/Pricing", match:"89%", quote:"Unusual properties require careful comp selection and explanation of adjustments."},
      {name:"CMA - Flip Property and Land w Craig", cite:"Video training · CMA/Pricing", match:"85%", quote:"Investor intent, land value, and renovation upside change how the pricing story is told."}
    ],
    steps:["Start with the closest comparable properties, then adjust for property type, condition, location, and income potential.","Flag unusual valuation factors like additions, nightly rental use, land value, or flip condition.","Use the CMA as a pricing conversation tool, not just a number.","Explain uncertainty clearly when the property does not fit the normal comp set."],
    script:"This one is not a standard apples-to-apples CMA, so I’m going to separate the value drivers: location, property condition, income potential, land value, and buyer/investor use case. Then we’ll use the comps as evidence instead of pretending there is one perfect number.",
    followups:["Open CMA playbook","Show pricing objection script","Find land valuation examples"]
  },
  general: {
    title:"Broker Brain answer",
    confidence:"Exploratory match",
    intent:"The question is broad, so the system is surfacing likely sources first.",
    queryTerms:["training library","broker playbooks","agent coaching"],
    sources:[
      {name:"Training library", cite:"All indexed trainings", match:"72%", quote:"Searches source titles, categories, topics, summaries, and transcript-style excerpts."},
      {name:"Broker playbooks", cite:"Generated operating system", match:"69%", quote:"Turns recurring training themes into practical workflows for agents."}
    ],
    steps:["Search the training library for matching topics.","Summarize the relevant process in practical agent language.","Link back to the source training and related playbook.","When transcripts are added, replace demo excerpts with real transcript chunks."],
    script:"I found a few likely sources in the brokerage training library. Review the source excerpts below first, then use the related playbook to turn the guidance into next steps for the agent/client conversation.",
    followups:["Search all trainings","Browse playbooks","Add transcripts"]
  }
};

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function detectFocus(q){
  q=(q||'').toLowerCase();
  if(q.includes('repair')||q.includes('inspection')) return 'repair';
  if(q.includes('tc')||q.includes('transaction')||q.includes('coordinator')) return 'tc';
  if(q.includes('1031')||q.includes('exchange')||q.includes('tax')) return '1031';
  if(q.includes('cma')||q.includes('price')||q.includes('pricing')||q.includes('land')||q.includes('flip')) return 'cma';
  return 'general';
}

function card(t){
  return `<article class="card"><span class="type">${t.type} · ${t.category}</span><h3>${t.title}</h3><p class="muted">${t.summary}</p><blockquote>${t.excerpt}</blockquote><div class="tag-row">${t.topics.slice(0,4).map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
}

function renderResults(query=''){
  const q=query.toLowerCase().trim();
  const results=trainings.filter(t=>!q||[t.title,t.category,t.summary,t.excerpt,...t.topics,...t.playbooks].join(' ').toLowerCase().includes(q));
  document.getElementById('resultCount').textContent=q ? `${results.length} match${results.length===1?'':'es'} for “${query}”` : `Showing all`;
  document.getElementById('resultsGrid').innerHTML=results.map(card).join('')||`<p class="muted">No exact demo matches yet. Add transcripts to improve search depth.</p>`;
}

function renderPlaybooks(){
  document.getElementById('playbookGrid').innerHTML=playbooks.map((p,i)=>`<article class="card"><span class="type">PART ${String(i+1).padStart(2,'0')} · ${p.sources} sources · ${p.time}</span><h3>${p.name}</h3><p class="muted">${p.question}</p><div class="tag-row">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`).join('');
}

function renderTopics(){
  const icons=['⌂','◇','✦','↗','□','◎','△','✓','▱','◆','◌','★'];
  document.getElementById('topicGrid').innerHTML=topics.map((t,i)=>`<article class="topic"><i>${icons[i%icons.length]}</i><div><strong>${t}</strong><span>${trainings.filter(v=>[v.category,...v.topics].join(' ').toLowerCase().includes(t.split(' ')[0].toLowerCase())).length||1} source${i%3===0?'s':''}</span></div></article>`).join('');
}

function renderTrainings(){
  document.getElementById('trainingList').innerHTML=trainings.map(t=>`<article class="training"><div><strong>${t.title}</strong><p>${t.summary}</p></div><span class="training-meta">${t.category}</span><span class="muted">${t.size}</span></article>`).join('');
}

function answerMarkup(answer){
  return `
    <div class="ai-answer ready">
      <div class="answer-topline answer-first">
        <span class="spark">✦</span>
        <div><h3>${answer.title}</h3><p>${answer.intent}</p></div>
        <span class="confidence">${answer.confidence}</span>
      </div>
      <h4>Answer first</h4>
      <ol class="primary-answer">${answer.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
      <h4>Suggested client script</h4>
      <p class="script-box">“${answer.script}”</p>
      <h4>Next actions</h4>
      <div class="tag-row">${answer.followups.map(f=>`<span class="tag">${f}</span>`).join('')}</div>
      <div class="sources-used">
        <h4>Sources used</h4>
        <p class="muted">These follow the answer so the agent can verify where the guidance came from.</p>
        <div class="source-stack compact">
          ${answer.sources.map(s=>`<article><span>${s.match} match</span><strong>${s.name}</strong><small>${s.cite}</small><blockquote>“${s.quote}”</blockquote></article>`).join('')}
        </div>
      </div>
    </div>`;
}

function loadingMarkup(query, answer){
  const terms = answer.queryTerms.map(t=>`<span class="tag">${t}</span>`).join('');
  return `
    <div class="ai-answer thinking">
      <div class="answer-topline">
        <span class="spark pulse">✦</span>
        <div><h3>Generating broker answer...</h3><p>Question: “${escapeHtml(query || 'How should I help this agent?')}”</p></div>
        <span class="confidence">Live demo</span>
      </div>
      <div class="ai-steps">
        <div class="step active"><i></i><span>Searching training library</span><em>6 sources scanned</em></div>
        <div class="step active"><i></i><span>Finding matching transcript sections</span><em>${terms}</em></div>
        <div class="step active"><i></i><span>Reading source excerpts</span><em>${answer.sources.length} citations selected</em></div>
        <div class="step active"><i></i><span>Generating practical agent answer</span><em>script + steps + playbook links</em></div>
      </div>
      <div class="skeleton"></div><div class="skeleton short"></div>
    </div>`;
}

function runAsk(query){
  const focus = detectFocus(query);
  const answer = demoAnswers[focus];
  const answerEl = document.getElementById('answer');
  answerEl.innerHTML = loadingMarkup(query, answer);
  setTimeout(()=>{ answerEl.innerHTML = answerMarkup(answer); }, 1400);
}

document.getElementById('globalSearch').addEventListener('input',e=>renderResults(e.target.value));
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('globalSearch').value=b.dataset.query;renderResults(b.dataset.query);document.getElementById('results').scrollIntoView({behavior:'smooth'});}));
document.querySelectorAll('[data-ask]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('askInput').value=b.dataset.ask;runAsk(b.dataset.ask);}));
document.getElementById('askButton').addEventListener('click',()=>runAsk(document.getElementById('askInput').value||'general'));
renderPlaybooks();renderTopics();renderTrainings();

// Real transcript index: GitHub Pages-safe client-side search over PDF transcript text.
let transcriptIndex = { records: [], chunks: [] };
let transcriptReady = false;

fetch('data/search-index.json')
  .then(r => r.ok ? r.json() : Promise.reject(new Error('index not found')))
  .then(idx => {
    transcriptIndex = idx;
    transcriptReady = true;
    const status = document.querySelector('.sidebar-card');
    if (status) {
      status.innerHTML = `<p class="eyebrow">POC STATUS</p><strong>${idx.records.length} real transcripts indexed</strong><span>${idx.chunks.length} searchable transcript sections loaded from Google Drive PDFs.</span>`;
    }
    renderResults(document.getElementById('globalSearch').value || '');
  })
  .catch(() => { transcriptReady = false; renderResults(''); });

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
  const words = tokenize(query);
  const lower = text.toLowerCase();
  let pos = 0;
  for (const w of words) {
    const found = lower.indexOf(w);
    if (found >= 0) { pos = found; break; }
  }
  const start = Math.max(0, pos - 180);
  const end = Math.min(text.length, pos + 360);
  return `${start ? '…' : ''}${text.slice(start, end).replace(/\s+/g,' ').trim()}${end < text.length ? '…' : ''}`;
}

function transcriptSearch(query, limit=9){
  if (!transcriptReady || !query.trim()) return [];
  return transcriptIndex.chunks
    .map(ch => ({...ch, score: scoreChunk(query, ch)}))
    .filter(ch => ch.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, limit);
}

function transcriptCard(ch, query){
  const pct = Math.min(98, 62 + Math.round(ch.score * 2));
  return `<article class="card"><span class="type">${pct}% MATCH · ${ch.category} · ${ch.timestamp}</span><h3>${ch.title}</h3><p class="muted">Real transcript match from indexed PDF source.</p><blockquote>${escapeHtml(snippetFor(ch.text, query))}</blockquote><div class="tag-row">${(ch.topics || []).slice(0,4).map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
}

function renderResults(query=''){
  const q = query.trim();
  if (transcriptReady && q) {
    const results = transcriptSearch(q, 9);
    document.getElementById('resultCount').textContent = `${results.length} transcript match${results.length===1?'':'es'} for “${query}”`;
    document.getElementById('resultsGrid').innerHTML = results.map(ch => transcriptCard(ch, q)).join('') || `<p class="muted">No transcript matches yet. Try repair, 1031, land, flip, CMA, nightly rental, or inspection.</p>`;
    return;
  }
  const results = trainings;
  document.getElementById('resultCount').textContent = transcriptReady ? `Showing ${transcriptIndex.records.length} indexed transcripts` : `Showing all`;
  document.getElementById('resultsGrid').innerHTML = results.map(card).join('');
}

function transcriptSourcesFor(query, fallbackAnswer){
  const matches = transcriptSearch(query, 3);
  if (!matches.length) return fallbackAnswer.sources;
  return matches.map((ch, i) => ({
    name: ch.title,
    cite: `Real transcript · ${ch.timestamp}`,
    match: `${Math.min(98, 90 - i*5)}%`,
    quote: snippetFor(ch.text, query).slice(0, 280)
  }));
}

function runAsk(query){
  const focus = detectFocus(query);
  const base = demoAnswers[focus];
  const answer = {...base, sources: transcriptSourcesFor(query || base.queryTerms.join(' '), base)};
  const answerEl = document.getElementById('answer');
  answerEl.innerHTML = loadingMarkup(query, answer);
  setTimeout(()=>{ answerEl.innerHTML = answerMarkup(answer); }, 1400);
}