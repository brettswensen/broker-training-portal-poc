const trainings = [
  {title:"Work With Your TC w Marty & Marc", file:"2025 Jul 30 Work With Your TC w Marty & Marc.mp4", type:"Video Training", category:"Transaction Coordination", size:"634 MB", summary:"How agents should collaborate with transaction coordination from contract to close.", topics:["transaction coordinator","contract to close","operations","timelines","work with TC"], playbooks:["Contract-to-Close Checklist","New Agent Onboarding"]},
  {title:"Development & New Construction Deals w Craig", file:"2026 Apr 16 Development & New Construction Deals w Craig.mp4", type:"Video Training", category:"New Construction", size:"Pending", summary:"Specialized training for development, builders, land, and new construction opportunities.", topics:["development deals","new construction","builders","land"], playbooks:["New Construction Deal Playbook"]},
  {title:"CMA's - Triplex, Addition, Nightly Rental w Craig", file:"2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"Advanced valuation examples for unusual properties like triplexes, additions, and nightly rentals.", topics:["CMA","triplex","addition","nightly rental","pricing"], playbooks:["CMA/Pricing Playbook"]},
  {title:"Repair Negotiations w Craig", file:"2026 Jul 23 Repair Negotiations w Craig.mp4", type:"Video Training", category:"Negotiation & Inspection", size:"157.9 MB", summary:"How to guide buyers and sellers through inspection objections and repair negotiations.", topics:["repair negotiations","inspection objection","buyer requests","seller response"], playbooks:["Repair Negotiation Playbook","Inspection Objection Playbook"]},
  {title:"1031 Exchange Basics w Darrin", file:"2026 May 4 1031 Exchange Basics w Darrin.mp4", type:"Video Training", category:"Investors & Tax Strategy", size:"Pending", summary:"The basics agents should understand when working with investor clients considering a 1031 exchange.", topics:["1031 exchange","investor clients","tax deferral","timelines"], playbooks:["Investor Client Playbook"]},
  {title:"CMA - Flip Property and Land w Craig", file:"2026 May 6 CMA - Flip Property and Land w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", summary:"CMA approach for flip properties, land valuation, and investor-oriented pricing questions.", topics:["CMA","flip property","land valuation","investor property"], playbooks:["CMA/Pricing Playbook","Investor Client Playbook"]}
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

function card(t){
  return `<article class="card"><span class="type">${t.type} · ${t.category}</span><h3>${t.title}</h3><p class="muted">${t.summary}</p><div class="tag-row">${t.topics.slice(0,4).map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
}

function renderResults(query=''){
  const q=query.toLowerCase().trim();
  const results=trainings.filter(t=>!q||[t.title,t.category,t.summary,...t.topics,...t.playbooks].join(' ').toLowerCase().includes(q));
  document.getElementById('resultCount').textContent=`${results.length} match${results.length===1?'':'es'}`;
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

function answerFor(q){
  q=q.toLowerCase();
  const focus=q.includes('repair')||q.includes('inspection')?'repair':q.includes('tc')||q.includes('transaction')?'tc':q.includes('1031')?'1031':q.includes('cma')||q.includes('price')||q.includes('land')?'cma':'general';
  const map={
    repair:{title:'Repair negotiation guidance',steps:['Start by separating health/safety issues from wish-list repairs.','Use the inspection report to prioritize items that affect financing, habitability, or deal confidence.','Anchor the conversation in solutions: repair, credit, price adjustment, or seller concession.','Keep emotion out of it and document every agreement clearly.'],sources:['Repair Negotiations w Craig','Inspection Objection Playbook']},
    tc:{title:'Working with your TC',steps:['Loop in the transaction coordinator immediately after going under contract.','Make sure deadlines, documents, contacts, and lender/title details are complete.','The agent still owns client communication; the TC helps keep the process organized.'],sources:['Work With Your TC w Marty & Marc','Contract-to-Close Checklist']},
    '1031':{title:'1031 exchange basics',steps:['Identify whether the client may be selling investment property, not a primary residence.','Explain that strict timelines apply and a qualified intermediary is required.','Do not give tax/legal advice; connect the client with the right professional.'],sources:['1031 Exchange Basics w Darrin','Investor Client Playbook']},
    cma:{title:'CMA and pricing guidance',steps:['Start with the closest comparable properties, then adjust for property type, condition, location, and income potential.','Flag unusual valuation factors like additions, nightly rental use, land value, or flip condition.','Use the CMA as a pricing conversation tool, not just a number.'],sources:["CMA's - Triplex, Addition, Nightly Rental w Craig",'CMA - Flip Property and Land w Craig','CMA/Pricing Playbook']},
    general:{title:'Broker Brain answer',steps:['Search the training library for matching topics.','Summarize the relevant process in practical agent language.','Link back to the source training and related playbook.'],sources:['Training library','Broker playbooks']}
  }[focus];
  return `<h3>${map.title}</h3><ul>${map.steps.map(s=>`<li>${s}</li>`).join('')}</ul><p><strong>Related sources:</strong></p>${map.sources.map(s=>`<span class="source">${s}</span>`).join('')}`;
}

document.getElementById('globalSearch').addEventListener('input',e=>renderResults(e.target.value));
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('globalSearch').value=b.dataset.query;renderResults(b.dataset.query);document.getElementById('results').scrollIntoView({behavior:'smooth'});}));
document.querySelectorAll('[data-ask]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('askInput').value=b.dataset.ask;document.getElementById('answer').innerHTML=answerFor(b.dataset.ask);}));
document.getElementById('askButton').addEventListener('click',()=>{document.getElementById('answer').innerHTML=answerFor(document.getElementById('askInput').value||'general')});
renderResults();renderPlaybooks();renderTopics();renderTrainings();
