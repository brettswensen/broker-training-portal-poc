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
    steps:["First clarify the timing: accepted offer is not the same as closed.","If the client has not closed yet, pause and get a qualified intermediary involved immediately before funds are received.","If the client already closed and received the money, the exchange may be blown or severely limited. Tell them to contact a QI or CPA right away.","Do not give tax or legal advice; explain the risk, document the recommendation, and make the expert handoff urgent."],
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

function slugifyPlaybook(name){
  return String(name || '').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function playbookUrl(name){ return `/playbooks/${slugifyPlaybook(name)}/`; }

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function cleanDisplayText(value){
  return String(value || '')
    .replace(/[—–]/g, ', ')
    .replace(/\bLive Kimi answer · transcript grounded\b/gi, 'Based on team training')
    .replace(/\bLive Kimi answer from transcript excerpts\b/gi, 'Broker guidance based on team training')
    .replace(/\bsource-backed\b/gi, 'based on the training')
    .replace(/\btranscript grounded\b/gi, 'based on the training')
    .replace(/\bdisclosure leverage\b/gi, 'disclosure position')
    .replace(/\bbackend\b/gi, 'service')
    .replace(/\bmodel unavailable:?[^.]*\.?/gi, '')
    .replace(/\bModel returned[^.]*\.?/g, '')
    .replace(/\bactionable\b/gi, 'clear')
    .replace(/\bleverage\b/gi, 'use')
    .replace(/\butilize\b/gi, 'use')
    .replace(/\bGood news[,!]?\s*/gi, '')
    .replace(/\bsuper helpful\b/gi, 'useful')
    .replace(/\bawesome\b/gi, 'strong')
    .replace(/\bdead\b/gi, 'no longer viable')
    .replace(/\bblown\b/gi, 'at serious risk')
    .replace(/\s+/g, ' ')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,/g, ',')
    .trim();
}

function cleanAnswerForDisplay(answer){
  return {
    ...answer,
    title: cleanDisplayText(answer.title),
    confidence: cleanDisplayText(answer.confidence || 'Based on team training'),
    steps: (answer.steps || []).map(cleanDisplayText).filter(Boolean),
    script: cleanDisplayText(answer.script),
    followups: (answer.followups || []).map(cleanDisplayText).filter(Boolean),
    sources: (answer.sources || []).map(s => ({
      ...s,
      name: cleanDisplayText(s.name),
      cite: cleanDisplayText(s.cite),
      match: cleanDisplayText(s.match),
      quote: cleanDisplayText(s.quote)
    }))
  };
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

function renderLatestTraining(){
  const latest = trainings.slice(0,6).map((t,i)=>({
    ...t,
    status: i === 0 ? 'Processed 42 min ago' : i < 3 ? 'Indexed this week' : 'Available in library',
    deliverables: i === 0 ? ['Transcript','Summary','Script pack','Playbook update','Infographic'] : ['Transcript','Ask ready','Sources','Related playbook']
  }));
  const rail = document.getElementById('latestTrainingRail');
  if(!rail) return;
  rail.innerHTML = latest.map((t,i)=>`
    <article class="video-card">
      <button class="video-thumb" data-title="${escapeHtml(t.title)}" onclick="openTraining(this.dataset.title)" aria-label="Open ${escapeHtml(t.title)}">
        <span class="play">▶</span>
        <strong>${escapeHtml(t.category)}</strong>
      </button>
      <div class="video-body">
        <span class="type">${escapeHtml(t.status)}</span>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.summary)}</p>
        <div class="asset-row">${t.deliverables.slice(0,4).map(d=>`<span>${escapeHtml(d)}</span>`).join('')}</div>
        <div class="video-actions">
          <button data-title="${escapeHtml(t.title)}" onclick="openTraining(this.dataset.title)">Watch / search</button>
          <button data-topic="${escapeHtml(t.topics[0] || t.category)}" onclick="askAbout(this.dataset.topic)">Ask about this</button>
        </div>
      </div>
    </article>`).join('');
}

function renderPlaybooks(activeIndex=1){
  const grid = document.getElementById('playbookGrid');
  if(!grid) return;
  grid.innerHTML = playbooks.map((p,i)=>`<a class="card playbook-card" href="${playbookUrl(p.name)}"><span class="type">PART ${String(i+1).padStart(2,'0')} · ${p.sources} sources · ${p.time}</span><h3>${escapeHtml(p.name)}</h3><p class="muted">${escapeHtml(p.question)}</p><div class="tag-row">${p.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div><span class="ghost-button">Open playbook</span></a>`).join('');
}

function renderTopics(){
  const icons=['⌂','◇','✦','↗','□','◎','△','✓','▱','◆','◌','★'];
  document.getElementById('topicGrid').innerHTML=topics.map((t,i)=>`<article class="topic"><i>${icons[i%icons.length]}</i><div><strong>${t}</strong><span>${trainings.filter(v=>[v.category,...v.topics].join(' ').toLowerCase().includes(t.split(' ')[0].toLowerCase())).length||1} source${i%3===0?'s':''}</span></div></article>`).join('');
}

function renderTrainings(){
  document.getElementById('trainingList').innerHTML=trainings.map(t=>`<article class="training"><div><strong>${t.title}</strong><p>${t.summary}</p></div><span class="training-meta">${t.category}</span><span class="muted">${t.size}</span></article>`).join('');
}

function sourcePill(source, index){
  if(!source) return '';
  const label = source.name || 'Broker training source';
  const detail = [source.cite, source.quote].filter(Boolean).join(' · ');
  return `<a class="source-pill" href="${librarySearchUrl(label)}" data-tooltip="${escapeHtml(detail || label)}" aria-label="Open source: ${escapeHtml(label)}"><span>${String(index + 1).padStart(2,'0')}</span>${escapeHtml(label)}</a>`;
}

function sourceCard(source, index){
  const label = source.name || 'Broker training source';
  return `<article>
    <span>${escapeHtml(source.match || 'Source')} match</span>
    <strong>${escapeHtml(label)}</strong>
    <small>${escapeHtml(source.cite || 'Broker training library')}</small>
    <blockquote>“${escapeHtml(source.quote || 'Source excerpt will appear here as transcript depth increases.')}”</blockquote>
    <div class="source-card-actions">
      <a href="${librarySearchUrl(label)}">Read/search</a>
      <a href="${librarySearchUrl(label)}&type=video">Watch</a>
      <a href="${librarySearchUrl(label)}&type=audio">Listen</a>
    </div>
  </article>`;
}

function answerMarkup(answer){
  const cleanAnswer = cleanAnswerForDisplay(answer);
  const publicConfidence = cleanAnswer.confidence || 'Based on team training';
  const scriptText = String(cleanAnswer.script || '').trim().replace(/^[\'\"“”]+|[\'\"“”]+$/g, '');
  const sources = cleanAnswer.sources || [];
  let nextActions = (cleanAnswer.followups || []).filter(Boolean);
  if(!nextActions.length){
    const titleText = [cleanAnswer.title, ...(cleanAnswer.steps || []), ...sources.map(s=>s.name)].join(' ').toLowerCase();
    nextActions = relatedPlaybooksFor(titleText).map(p => `Open ${p.name}`);
  }
  return `
    <div class="ai-answer ready sourced-answer">
      <div class="answer-topline answer-first">
        <span class="spark">✦</span>
        <div><h3>${escapeHtml(cleanAnswer.title)}</h3><p>Clearly separated training-backed guidance and suggested application.</p></div>
        <span class="confidence">${escapeHtml(publicConfidence)}</span>
      </div>

      <section class="answer-section training-backed">
        <div class="answer-section-head">
          <div><p class="eyebrow">FROM BROKER TRAINING</p><h4>What the training supports</h4></div>
          <span class="section-badge">Source-backed</span>
        </div>
        <ol class="primary-answer source-claim-list">
          ${cleanAnswer.steps.map((s,i)=>`<li><span>${escapeHtml(s)}</span>${sourcePill(sources[i % Math.max(sources.length,1)], i % Math.max(sources.length,1))}</li>`).join('')}
        </ol>
      </section>

      <section class="answer-section suggested-application">
        <div class="answer-section-head">
          <div><p class="eyebrow">SUGGESTED APPLICATION</p><h4>Generated wording to use with a client</h4></div>
          <span class="section-badge amber">Not a direct quote</span>
        </div>
        <p class="script-box">“${escapeHtml(scriptText)}”</p>
        <div class="answer-actions">
          <button onclick="copyCurrentScript(this)">Copy script</button>
          <button onclick="rewriteScript('text')">Text message version</button>
          <button onclick="rewriteScript('email')">Email version</button>
        </div>
      </section>

      ${nextActions.length ? `<section class="answer-section suggested-application compact-section"><div class="answer-section-head"><div><p class="eyebrow">SUGGESTED NEXT STEPS</p><h4>Where to go from here</h4></div><span class="section-badge amber">Recommended</span></div><div class="tag-row action-tags">${nextActions.map(f=>`<button data-label="${escapeHtml(f)}" onclick="handleFollowup(this.dataset.label)">${escapeHtml(f)}</button>`).join('')}</div></section>` : ''}

      <div class="answer-route-links" aria-label="Go deeper in Broker Brain">
        <a href="${librarySearchUrl(cleanAnswer.queryTerms?.[0] || cleanAnswer.title)}">Search the Library</a>
        <a href="/playbooks/">Open Playbooks</a>
        <a href="/topics/">Browse Topics</a>
      </div>
      <div class="sources-used source-evidence-panel">
        <h4>Broker training sources</h4>
        <p class="muted">Green source chips above link back here. Use these cards to watch, read/search, or listen before relying on the suggested application.</p>
        <div class="source-stack compact">
          ${sources.map(sourceCard).join('') || '<p class="muted">Training sources will appear here as matching transcripts are connected.</p>'}
        </div>
      </div>
    </div>`;
}

function relatedPlaybooksFor(text){
  const source = String(text || '').toLowerCase();
  const scored = playbooks.map((p, index) => {
    const haystack = [p.name, p.question, ...(p.tags || [])].join(' ').toLowerCase();
    const score = haystack.split(/\W+/).filter(word => word && source.includes(word)).length;
    return {p, index, score};
  }).filter(item => item.score > 0).sort((a,b)=>b.score-a.score);
  return (scored.length ? scored : [{p:playbooks[1], index:1},{p:playbooks[2], index:2},{p:playbooks[4], index:4}]).slice(0,3).map(item => ({...item.p, index:item.index}));
}

function loadingMarkup(query, answer){
  const terms = answer.queryTerms.map(t=>`<span class="tag">${t}</span>`).join('');
  return `
    <div class="ai-answer thinking">
      <div class="answer-topline">
        <span class="spark pulse">✦</span>
        <div><h3>Writing broker guidance...</h3><p>Question: “${escapeHtml(query || 'How should I help this agent?')}”</p></div>
        <span class="confidence">Checking training</span>
      </div>
      <div class="ai-steps">
        <div class="step active"><i></i><span>Searching training library</span><em>6 sources scanned</em></div>
        <div class="step active"><i></i><span>Finding matching transcript sections</span><em>${terms}</em></div>
        <div class="step active"><i></i><span>Checking the training notes</span><em>${answer.sources.length} matches found</em></div>
        <div class="step active"><i></i><span>Writing it like a broker would say it</span><em>guidance + script + next steps</em></div>
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


function copyText(text){
  navigator.clipboard?.writeText(text).catch(()=>{});
}

function copyCurrentScript(button){
  const box = button.closest('.ai-answer, .playbook-detail')?.querySelector('.script-box');
  if(!box) return;
  const text = box.textContent.replace(/[“”]/g,'').trim();
  copyText(text);
  const old = button.textContent;
  button.textContent = 'Copied';
  setTimeout(()=>button.textContent = old, 1200);
}

function rewriteScript(format){
  const current = document.querySelector('#answer .script-box')?.textContent.replace(/[“”]/g,'').trim();
  if(!current) return;
  const prefix = format === 'text' ? 'Text message version: ' : 'Email version: ';
  const rewritten = format === 'text'
    ? current.split('. ').slice(0,2).join('. ') + '.'
    : 'Hi, I wanted to give you the clean version of the guidance: ' + current;
  copyText(rewritten);
  alert(prefix + rewritten);
}

function handleFollowup(label){
  const lower = label.toLowerCase();
  if (typeof isDesignerRouteDashboard !== 'undefined' && isDesignerRouteDashboard) {
    if (lower.includes('playbook')) {
      window.location.href = `/playbooks/${label ? `?q=${encodeURIComponent(label)}` : ''}`;
      return;
    }
    if (lower.includes('topic') || lower.includes('browse')) {
      window.location.href = '/topics/';
      return;
    }
    window.location.href = librarySearchUrl(label);
    return;
  }
  const match = playbooks.findIndex(p => lower.includes(p.name.toLowerCase().split(' ')[0]) || p.name.toLowerCase().includes(lower.split(' ')[0]));
  if(match >= 0){ showPlaybook(match); return; }
  document.getElementById('globalSearch').value = label;
  renderResults(label);
  document.getElementById('all-content')?.scrollIntoView({behavior:'smooth'});
}


function openTraining(title){
  document.getElementById('globalSearch').value = title;
  renderResults(title);
  document.getElementById('results').scrollIntoView({behavior:'smooth'});
}

function askAbout(topic){
  const question = `What should I know about ${topic}?`;
  document.getElementById('askInput').value = question;
  document.getElementById('ask').scrollIntoView({behavior:'smooth'});
  runAsk(question);
}

const isDesignerRouteDashboard = document.body.classList.contains('designer-pass') && !new URLSearchParams(location.search).has('compare');
const librarySearchUrl = query => `/library/${String(query || '').trim() ? `?q=${encodeURIComponent(String(query).trim())}` : ''}`;
const routeToLibrarySearch = query => { window.location.href = librarySearchUrl(query); };

document.getElementById('globalSearch').addEventListener('input', e => {
  if (!isDesignerRouteDashboard) renderResults(e.target.value);
});
document.getElementById('globalSearch').addEventListener('keydown', e => {
  if (isDesignerRouteDashboard && e.key === 'Enter') {
    e.preventDefault();
    routeToLibrarySearch(e.target.value);
  }
});
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click', e=>{
  if (isDesignerRouteDashboard) {
    e.preventDefault();
    routeToLibrarySearch(b.dataset.query);
    return;
  }
  document.getElementById('globalSearch').value=b.dataset.query;renderResults(b.dataset.query);document.getElementById('all-content')?.scrollIntoView({behavior:'smooth'});
}));
document.querySelectorAll('[data-ask]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();document.getElementById('askInput').value=b.dataset.ask;runAsk(b.dataset.ask);}));
document.getElementById('askButton').addEventListener('click',e=>{e.preventDefault();runAsk(document.getElementById('askInput').value||'general')});
renderLatestTraining();renderPlaybooks();renderTopics();renderTrainings();

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
      status.innerHTML = `<p class="eyebrow">LIBRARY STATUS</p><strong>${idx.records.length} trainings indexed</strong><span>${idx.chunks.length} searchable training sections loaded.</span>`;
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


function clearAllContentSearch(){
  const input = document.getElementById('globalSearch');
  if(input) input.value = '';
  const allContent = document.getElementById('all-content');
  if(allContent) allContent.hidden = true;
  renderResults('');
  document.getElementById('top')?.scrollIntoView({behavior:'smooth'});
}

function matchingTrainings(query){
  const q = String(query || '').toLowerCase().trim();
  if(!q) return trainings;
  return trainings.filter(t => [t.title,t.category,t.summary,t.excerpt,...(t.topics||[]),...(t.playbooks||[])].join(' ').toLowerCase().includes(q));
}

function allContentCard(item, query, index){
  const isTranscript = !!item.text;
  const title = isTranscript ? item.title : item.title;
  const category = item.category || 'Broker training';
  const snippet = isTranscript ? snippetFor(item.text, query) : item.summary;
  const pct = isTranscript ? Math.min(98, 62 + Math.round(item.score * 2)) : 88 - index * 4;
  const tags = (item.topics || []).slice(0,3).map(x=>`<span>${escapeHtml(x)}</span>`).join('');
  return `<article class="content-result-card">
    <div class="thumb-tile"><span>▶</span><strong>${escapeHtml(category)}</strong><em>${isTranscript ? item.timestamp : item.size}</em></div>
    <div class="content-result-body">
      <small>${pct}% match · ${escapeHtml(category)}</small>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(snippet)}</p>
      <div class="mini-tags">${tags}</div>
    </div>
  </article>`;
}

function allResultRow(t, query, index){
  const isTranscript = !!t.text;
  const title = isTranscript ? t.title : t.title;
  const category = t.category || 'Training';
  const meta = isTranscript ? `${t.timestamp} · Transcript` : `${t.size} · Video training`;
  const text = isTranscript ? snippetFor(t.text, query).slice(0, 170) : t.summary;
  return `<article class="content-row" onclick="openTraining('${escapeHtml(title).replace(/'/g,'&#39;')}')">
    <div class="row-thumb"><span>${isTranscript ? 'TXT' : 'VID'}</span></div>
    <div><small>${escapeHtml(category)}</small><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></div>
    <span class="row-meta">${escapeHtml(meta)}</span>
    <button class="star-button" aria-label="Save result">☆</button>
  </article>`;
}

function playbookRow(p, index){
  return `<article class="content-row playbook-row" onclick="showPlaybook(${index});document.getElementById('playbooks')?.scrollIntoView({behavior:'smooth'});">
    <div class="row-thumb playbook-icon"><span>PB</span></div>
    <div><small>Playbook · ${p.tags.slice(0,2).join(' / ')}</small><strong>${escapeHtml(p.name)}</strong><p>${escapeHtml(p.question)}</p></div>
    <span class="row-meta">${p.sources} sources</span>
  </article>`;
}

function videoTile(t, index){
  return `<article class="network-video-card">
    <button class="network-thumb" data-title="${escapeHtml(t.title)}" onclick="openTraining(this.dataset.title)"><span>▶</span><strong>${escapeHtml(t.category)}</strong></button>
    <small>${index === 0 ? 'New this week' : index < 3 ? 'Indexed training' : 'Library video'}</small>
    <h3>${escapeHtml(t.title)}</h3>
  </article>`;
}

function renderAllContent(query=''){
  const allContent = document.getElementById('all-content');
  if(!allContent) return;
  const q = String(query || '').trim();
  if(!q){ allContent.hidden = true; return; }
  allContent.hidden = false;
  const transcriptMatches = transcriptSearch(q, 6);
  const trainingMatches = matchingTrainings(q);
  const top = transcriptMatches.length ? transcriptMatches.slice(0,3) : trainingMatches.slice(0,3);
  const rows = [...transcriptMatches.slice(0,6), ...trainingMatches.slice(0,6)].slice(0,10);
  const related = relatedPlaybooksFor(q + ' ' + rows.map(r=>[r.title,r.category,...(r.topics||[])].join(' ')).join(' '));
  document.getElementById('allContentTitle').textContent = `Results for “${q}”`;
  document.getElementById('allContentSubtitle').textContent = `${rows.length || top.length} matched content items across trainings, transcript sections, and playbooks.`;
  document.getElementById('topResultsMeta').textContent = transcriptMatches.length ? `${transcriptMatches.length} transcript matches` : `${trainingMatches.length} training matches`;
  document.getElementById('topContentResults').innerHTML = top.map((item,i)=>allContentCard(item,q,i)).join('') || `<p class="muted">No top results yet. Try repair, 1031, land, CMA, TC, or inspection.</p>`;
  document.getElementById('allResultRows').innerHTML = rows.map((item,i)=>allResultRow(item,q,i)).join('') || `<p class="muted">No indexed content matches yet.</p>`;
  document.getElementById('allPlaybookRows').innerHTML = related.map(p=>playbookRow(p, p.index ?? playbooks.findIndex(x=>x.name===p.name))).join('');
  const videoPool = [...trainingMatches, ...trainings.filter(t => !trainingMatches.some(m => m.title === t.title))].slice(0,4);
  document.getElementById('allVideoTiles').innerHTML = videoPool.map(videoTile).join('');
}

function renderResults(query=''){
  renderAllContent(query);
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

const ASK_API_URL = 'https://real-estate-training-portal-poc.vercel.app/api/ask';

async function runAsk(query){
  const focus = detectFocus(query);
  const base = demoAnswers[focus];
  const fallback = {...base, sources: transcriptSourcesFor(query || base.queryTerms.join(' '), base)};
  const answerEl = document.getElementById('answer');
  answerEl.innerHTML = loadingMarkup(query, fallback);

  try {
    const response = await fetch(ASK_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({question: query || 'general broker guidance'})
    });
    if (!response.ok) throw new Error(`Ask backend returned ${response.status}`);
    const liveAnswer = await response.json();
    answerEl.innerHTML = answerMarkup({
      ...fallback,
      ...liveAnswer,
      confidence: liveAnswer.live ? 'Based on team training' : (liveAnswer.confidence || fallback.confidence),
      sources: liveAnswer.sources?.length ? liveAnswer.sources : fallback.sources
    });
  } catch (error) {
    console.warn('Ask service unavailable; using saved training answer', error);
    setTimeout(()=>{ answerEl.innerHTML = answerMarkup(fallback); }, 600);
  }
}