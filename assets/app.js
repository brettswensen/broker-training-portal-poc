const trainings = [
  {id:"tc-workflow-2025-07", title:"Work With Your TC w Marty & Marc", file:"2025 Jul 30 Work With Your TC w Marty & Marc.mp4", type:"Video Training", category:"Transaction Coordination", size:"634 MB", duration:"1:08:00", watchTime:"12:15", thumbnail:"assets/thumbnails/tc-workflow.svg", videoUrl:"https://drive.google.com/file/d/1NHnH4kyYeOPGMXJjZeQDdVY-RkKnWsMp/preview", access:"Authorized preview", summary:"How agents should collaborate with transaction coordination from contract to close.", excerpt:"Marty and Marc walk through when to bring the TC in, how deadlines are tracked, and what the agent still owns with the client.", topics:["transaction coordinator","contract to close","operations","timelines","work with TC"], playbooks:["Contract-to-Close Checklist","New Agent Onboarding"]},
  {id:"new-construction-2026-04", title:"Development & New Construction Deals w Craig", file:"2026 Apr 16 Development & New Construction Deals w Craig.mp4", type:"Video Training", category:"New Construction", size:"728.4 MB", duration:"48:00", watchTime:"09:40", thumbnail:"assets/thumbnails/new-construction.svg", videoUrl:"https://drive.google.com/file/d/1drEtA0-AEhko1hFGNafeCnzJdMX5gk7b/preview", access:"Authorized preview", summary:"Specialized training for development, builders, land, and new construction opportunities.", excerpt:"Craig explains how builder/developer conversations differ from regular resale and what agents need to know before advising clients.", topics:["development deals","new construction","builders","land"], playbooks:["New Construction Deal Playbook"]},
  {id:"cma-triplex-2026-02", title:"CMA's - Triplex, Addition, Nightly Rental w Craig", file:"2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", duration:"58:00", watchTime:"18:30", thumbnail:"assets/thumbnails/cma-triplex.svg", videoUrl:"https://drive.google.com/file/d/1H8Yfo2oVq71p1mhjQTxfpIoMCOPpDhcY/preview", access:"Authorized preview", summary:"Advanced valuation examples for unusual properties like triplexes, additions, and nightly rentals.", excerpt:"Craig breaks down how to think about comp selection and adjustments when the property does not fit a clean single-family template.", topics:["CMA","triplex","addition","nightly rental","pricing"], playbooks:["CMA/Pricing Playbook"]},
  {id:"repair-negotiations-2026-07", title:"Repair Negotiations w Craig", file:"2026 Jul 23 Repair Negotiations w Craig.mp4", type:"Video Training", category:"Negotiation & Inspection", size:"157.9 MB", duration:"42:00", watchTime:"14:20", thumbnail:"assets/thumbnails/repair-negotiations.svg", videoUrl:"https://drive.google.com/file/d/1N_5dat4PrTQBU7XstbBH65lR8UzdD6uh/preview", access:"Authorized preview", summary:"How to guide buyers and sellers through inspection objections and repair negotiations.", excerpt:"The training focuses on separating safety and lending issues from wishlist repairs, then turning the inspection report into a calm negotiation strategy.", topics:["repair negotiations","inspection objection","buyer requests","seller response"], playbooks:["Repair Negotiation Playbook","Inspection Objection Playbook"]},
  {id:"1031-exchange-2026-05", title:"1031 Exchange Basics w Darrin", file:"2026 May 4 1031 Exchange Basics w Darrin.mp4", type:"Video Training", category:"Investors & Tax Strategy", size:"Pending", duration:"52:00", watchTime:"07:50", thumbnail:"assets/thumbnails/1031-exchange.svg", videoUrl:"https://drive.google.com/file/d/17tZ1yt8WUsjf5kklgMajg7z0B7JK0Bik/preview", access:"Authorized preview", summary:"The basics agents should understand when working with investor clients considering a 1031 exchange.", excerpt:"Darrin covers the high-level exchange concept, timing pressure, and why agents should bring in a qualified intermediary/tax advisor early.", topics:["1031 exchange","investor clients","tax deferral","timelines"], playbooks:["Investor Client Playbook"]},
  {id:"cma-flip-land-2026-05", title:"CMA - Flip Property and Land w Craig", file:"2026 May 6 CMA - Flip Property and Land w Craig.mp4", type:"Video Training", category:"CMA & Pricing", size:"Pending", duration:"46:00", watchTime:"21:10", thumbnail:"assets/thumbnails/cma-flip-land.svg", videoUrl:"https://drive.google.com/file/d/10PndJY6HrRDyLMLNmybzAtPPi_w54tsP/preview", access:"Authorized preview", summary:"CMA approach for flip properties, land valuation, and investor-oriented pricing questions.", excerpt:"Craig compares flip potential and land value scenarios, showing how investor intent changes the pricing conversation.", topics:["CMA","flip property","land valuation","investor property"], playbooks:["CMA/Pricing Playbook","Investor Client Playbook"]}
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
    intent:"Keep the inspection response focused on safety, financing, material defects, and the cleanest remedy. Avoid turning the repair request into a wish list.",
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
    intent:"Bring the transaction coordinator in early, while keeping the agent clearly responsible for the client relationship and key communication.",
    queryTerms:["transaction coordinator","contract to close","deadlines"],
    sources:[
      {name:"Work With Your TC w Marty & Marc", cite:"Video training · Operations", match:"92%", quote:"Loop in the TC right after contract acceptance so deadlines, documents, and contacts are organized early."},
      {name:"Contract-to-Close Checklist", cite:"Generated checklist · 2 sources", match:"84%", quote:"Agent owns the relationship; TC helps keep the process and paperwork moving."}
    ],
    steps:["Loop in the transaction coordinator immediately after going under contract.","Confirm deadlines, documents, contacts, lender info, and title contacts are complete.","Let the TC manage process visibility while the agent continues leading client communication.","Use a shared checklist so nothing falls through between acceptance and closing."],
    script:"We are bringing in our transaction coordinator now so deadlines, paperwork, title, lender details, and next steps stay organized. You will still have a clear main point of contact, and the TC helps make sure every detail is tracked through closing.",
    followups:["Open contract-to-close checklist","Create new-agent task list","Find deadline reminders"]
  },
  "1031": {
    title:"1031 exchange basics for agents",
    confidence:"Strong match",
    intent:"Treat 1031 questions as timing-sensitive and specialist-sensitive. Confirm where the client is in the transaction, then involve a qualified intermediary or CPA before giving specific tax direction.",
    queryTerms:["1031 exchange","investor clients","tax deferral"],
    sources:[
      {name:"1031 Exchange Basics w Darrin", cite:"Video training · Investors/Tax Strategy", match:"90%", quote:"A 1031 can defer taxes on investment property, but the timelines and intermediary rules matter."},
      {name:"Investor Client Playbook", cite:"Generated playbook · 3 sources", match:"78%", quote:"Agents should identify the situation early and connect the client with a qualified intermediary or tax professional."}
    ],
    steps:["First clarify the timing: accepted offer is not the same as closed.","If the client has not closed yet, pause and get a qualified intermediary involved immediately before funds are received.","If the client already closed and received the money, the exchange may be blown or severely limited. Tell them to contact a QI or CPA right away.","Do not give tax or legal advice; explain the risk, document the recommendation, and make the expert handoff urgent."],
    script:"Because this is a potential 1031 exchange, timing matters a lot. If you have not closed yet, a qualified intermediary should be involved before you receive any funds. If you already closed and took the money, the exchange may be at risk, so the next call should be to a QI or CPA. They need to give the tax guidance.",
    followups:["Call qualified intermediary","Confirm closing/fund status","Loop in CPA/tax advisor"]
  },
  cma: {
    title:"CMA and pricing guidance",
    confidence:"Good match",
    intent:"Price unusual properties by separating the major value drivers first, then use the comps as evidence instead of forcing one clean number.",
    queryTerms:["CMA","pricing","land valuation","flip property"],
    sources:[
      {name:"CMA's - Triplex, Addition, Nightly Rental w Craig", cite:"Video training · CMA/Pricing", match:"89%", quote:"Unusual properties require careful comp selection and explanation of adjustments."},
      {name:"CMA - Flip Property and Land w Craig", cite:"Video training · CMA/Pricing", match:"85%", quote:"Investor intent, land value, and renovation upside change how the pricing story is told."}
    ],
    steps:["Start with the closest comparable properties, then adjust for property type, condition, location, and income potential.","Flag unusual valuation factors like additions, nightly rental use, land value, or flip condition.","Use the CMA as a pricing conversation tool, not just a number.","Explain uncertainty clearly when the property does not fit the normal comp set."],
    script:"This is not a standard apples-to-apples CMA, so we should separate the value drivers: location, property condition, income potential, land value, and buyer or investor use case. Then we can use the comps as evidence instead of pretending there is one perfect number.",
    followups:["Open CMA playbook","Show pricing objection script","Find land valuation examples"]
  },
  general: {
    title:"Broker Brain answer",
    confidence:"Exploratory match",
    intent:"Start with the client decision in front of the agent, then use the closest team guidance to choose the safest next step.",
    queryTerms:["training library","broker playbooks","agent coaching"],
    sources:[
      {name:"Repair Negotiations w Craig", cite:"Inspection and repair workflow", match:"72%", quote:"Keep the request focused on material defects, clean remedies, and keeping the transaction together."},
      {name:"Work With Your TC w Marty & Marc", cite:"Contract-to-close coordination", match:"69%", quote:"Keep deadlines, documentation, and handoffs clear so the client is protected and the file stays moving."}
    ],
    steps:["Start by separating safety, lending, and material defects from cosmetic asks.","Coach the client toward the cleanest remedy: repair, credit, concession, or price adjustment.","Frame the request around solving the problem and keeping the transaction together.","Document the agreement clearly and keep the TC aligned on deadlines."],
    script:"Focus the client on what actually matters from the inspection: safety issues, lending concerns, and material defects. Then recommend the cleanest remedy for the situation instead of treating the inspection response like a wish list. The goal is to protect the client, keep the deal together where appropriate, and document the agreement clearly.",
    followups:["Open repair playbook","Draft client text","Review deadline checklist"]
  }
};

function appBasePath(){
  const parts = location.pathname.split('/').filter(Boolean);
  if(location.hostname.endsWith('github.io') && parts[0] === 'broker-training-portal-poc'){
    if(parts[1] === 'staging' && parts[2]) return '/' + parts.slice(0,3).join('/');
    return '/broker-training-portal-poc';
  }
  const appMarkers = ['design-pass','library','playbooks','topics','scripts','pipeline'];
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
function normalizeSourceTitle(value){
  return String(value || '').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').replace(/(with|w)/g,' ').replace(/\s+/g,' ').trim();
}
function trainingForSource(sourceOrTitle){
  const label = typeof sourceOrTitle === 'string' ? sourceOrTitle : (sourceOrTitle?.name || sourceOrTitle?.title || '');
  const normalized = normalizeSourceTitle(label);
  return trainings.find(t => normalizeSourceTitle(t.title) === normalized)
    || trainings.find(t => normalized.includes(normalizeSourceTitle(t.title).slice(0,18)) || normalizeSourceTitle(t.title).includes(normalized.slice(0,18)))
    || trainings.find(t => (t.topics || []).some(topic => normalized.includes(normalizeSourceTitle(topic))));
}
function trainingWatchUrl(training, timestamp=''){
  if(!training || !training.videoUrl || training.videoUrl === '#demo-video-upload-needed') return appPath('/VIDEO_UPLOAD_INSTRUCTIONS.md');
  const time = String(timestamp || training.watchTime || '').trim();
  return training.videoUrl + (time && training.videoUrl.includes('cloudflarestream.com') ? `?start=${encodeURIComponent(time)}` : '');
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function cleanDisplayText(value){
  return String(value || '')
    .replace(/[—–]/g, ', ')
    .replace(/\bLive answer · training matched\b/gi, 'Broker guidance')
    .replace(/\bLive answer from training notes\b/gi, 'Broker guidance')
    .replace(/\btraining matched\b/gi, 'related training')
    .replace(/\btraining notes matched\b/gi, 'related training')
    .replace(/\bdisclosure leverage\b/gi, 'disclosure position')
    .replace(/\bbackend\b/gi, 'service')
    .replace(/\bmodel unavailable:?[^.]*\.?/gi, '')
    .replace(/\bModel returned[^.]*\.?/g, '')
    .replace(/\bactionable\b/gi, 'clear')
    .replace(/\bleverage\b/gi, 'use')
    .replace(/\butilize\b/gi, 'use')
    .replace(/\bGood news[,!]?\s*/gi, '')
    .replace(/\bI am here to help\b/gi, 'We can help')
    .replace(/\bI can help to help\b/gi, 'We can help')
    .replace(/\bWe can help to help\b/gi, 'We can help')
    .replace(/\bI am here\b/gi, 'We can help')
    .replace(/\bI can help\b/gi, 'We can help')
    .replace(/\bI would\b/gi, 'The recommended move is to')
    .replace(/\bI’d\b/gi, 'The recommended move is to')
    .replace(/\bI'd\b/gi, 'The recommended move is to')
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
    confidence: cleanDisplayText(answer.confidence || 'Broker guidance'),
    intent: cleanDisplayText(answer.intent || ''),
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

function thumbnailStyle(t){
  return t.thumbnail ? ` style="background-image:linear-gradient(135deg,rgba(8,10,15,.08),rgba(8,10,15,.32)),url('${appPath('/' + t.thumbnail)}')"` : '';
}
function card(t){
  return `<article class="card training-card"><button class="video-thumb small-thumb"${thumbnailStyle(t)} data-title="${escapeHtml(t.title)}" onclick="openTraining(this.dataset.title)" aria-label="Open ${escapeHtml(t.title)}"><span class="play">▶</span><strong>${escapeHtml(t.category)}</strong></button><span class="type">${t.type} · ${t.category}</span><h3>${t.title}</h3><p class="muted">${t.summary}</p><blockquote>${t.excerpt}</blockquote><div class="tag-row">${t.topics.slice(0,4).map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
}


const scriptLibrary = [
  {category:'Repair Negotiations', title:'Inspection repair request', situation:'Buyer wants to respond after inspection.', script:'Based on the inspection, there are a few items worth addressing. Let’s separate the items that affect safety, financing, or confidence from the cosmetic items, then choose the cleanest path: repair, credit, concession, or price adjustment.', playbook:'Repair Negotiation Playbook'},
  {category:'Transaction Coordination', title:'TC introduction', situation:'Client is under contract and needs to know who handles what.', script:'I’m bringing in our transaction coordinator now so deadlines, paperwork, title, lender details, and next steps stay organized. I’ll stay your main point of contact while the TC helps keep the process moving cleanly.', playbook:'Contract-to-Close Checklist'},
  {category:'Pricing', title:'Unusual property CMA', situation:'Seller has a property that does not fit easy comps.', script:'This is not a perfect apples-to-apples CMA, so I’m going to show you the closest evidence, call out where the comp set breaks down, and explain the pricing range instead of pretending there is one exact number.', playbook:'CMA / Pricing Playbook'},
  {category:'Investor Clients', title:'1031 timing handoff', situation:'Client asks about selling and avoiding taxes.', script:'Because this may involve a 1031 exchange, timing matters. Before funds are received, a qualified intermediary should be involved. Let’s get the QI or CPA into the conversation before giving tax-specific direction.', playbook:'Investor Client Playbook'}
];
function renderScriptPreview(){
  const grid = document.getElementById('scriptPreviewGrid');
  if(!grid) return;
  grid.innerHTML = scriptLibrary.map(item => `<article class="script-card"><span>${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.situation)}</p><blockquote>${escapeHtml(item.script)}</blockquote><div class="script-actions"><button type="button" onclick="copyText('${escapeHtml(item.script).replace(/'/g,'&#39;')}')">Copy script</button><button type="button" onclick="saveScriptItem(this,'${escapeHtml(item.title).replace(/'/g,'&#39;')}','${escapeHtml(item.script).replace(/'/g,'&#39;')}')">Save</button><a href="${playbookUrl(item.playbook)}">Open playbook</a></div></article>`).join('');
}
function renderSavedWorkspace(){
  const list = document.getElementById('savedWorkspaceList');
  const count = document.getElementById('savedWorkspaceCount');
  if(!list) return;
  const items = readSavedBrokerItems();
  if(count) count.textContent = `${items.length} saved`;
  list.innerHTML = items.length ? items.slice(0,5).map(item => `<article><span>${escapeHtml(item.type)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail || 'Saved for later review.')}</p></article>`).join('') : '<p class="muted">Saved answers and scripts will appear here during the demo. Use the Save buttons in Ask or Scripts to test it.</p>';
}


const socialContentExamples = [
  {id:'planned-decision-making-2026-07', title:'Planned Decision Making', source:'2026 Jul 6 Planned Decision Making transcript', bucket:'Done folder - transcript PDF', audience:'Potential buyers + sellers', recommendation:'Buyer/seller friendly', platform:'Instagram + Facebook', risk:'Educational only. Avoid promising outcomes; invite people to talk through their own situation with an agent.', hook:'Before you make a rushed real estate decision, pause for one simple question.', caption:'Real estate decisions can feel urgent: deadlines, inspections, offers, repairs, financing. But urgent does not always mean rushed. A simple decision rule I use with clients is: what could make this worse, and what next step protects us? That pause can help buyers and sellers make clearer moves instead of reacting from stress.', cta:'If you are buying or selling and the next step feels confusing, send me a message. I can help you slow it down and sort through the options.', hashtags:'#HomeBuyingTips #HomeSellingTips #RealEstateAdvice #UtahRealEstate', carousel:['Buying or selling can feel urgent.','Urgent does not always mean rushed.','Pause and ask: what could make this worse?','Then ask: what next step protects us?','A good agent helps you make decisions with a process.'], newsletter:'Buying or selling a home comes with high-pressure moments. Instead of reacting quickly, pause and identify the facts, the risk, and the next safest step. If you are facing a real estate decision and want help thinking it through, reach out and I can walk you through the options.', assets:['Instagram caption for buyers/sellers','Facebook educational post','5-slide carousel outline','Reel talking points']},
  {id:'short-sales-2025-04', title:'Short Sales - How to Buy and Sell', source:'2025 Apr 9 Short Sales - How to Buy and Sell w Marty transcript', bucket:'Done folder - transcript PDF', audience:'Homeowners who may need options', recommendation:'Seller lead-gen with review', platform:'Facebook + Instagram', risk:'Sensitive financial hardship topic. Keep general, avoid tax/legal advice, and recommend professional guidance.', hook:'If selling your home feels impossible because of what is owed, you may still have options.', caption:'A short sale is not just “selling for less.” It is a process that may come up when the sale price will not cover what is owed plus selling costs. Lender approval, timing, documentation, and professional advice all matter. The important thing is not to wait until the last minute or assume there is only one path.', cta:'If you are worried about selling because of your loan balance, message me privately. I can help you understand what questions to ask and who should be involved before you make a decision.', hashtags:'#HomeSellerTips #ShortSale #RealEstateOptions #UtahHomes', carousel:['Worried your home will not sell for enough?','A short sale may be one possible path.','The lender usually has to approve it.','Tax/legal questions need qualified professionals.','Start early so you have more options.'], newsletter:'If a homeowner is worried they cannot sell because of the loan balance, the first step is getting clear information. A short sale can involve lender approval, timing, deficiency questions, and professional tax/legal guidance. If you or someone you know is in this situation, I can help you organize the right questions before next steps are taken.', assets:['Facebook seller education post','Instagram caption','Carousel for homeowners','Private-message CTA idea']},
  {id:'repc-errors-2025-12', title:'Common REPC Errors to Avoid', source:'2025 Dec 10 Common REPC Errors to Avoid transcript', bucket:'Done folder - transcript PDF', audience:'Buyers + sellers under contract', recommendation:'Consumer-safe checklist angle', platform:'Instagram + Facebook', risk:'Contract content can sound legal. Keep it high-level and encourage clients to review terms with their agent or qualified advisor.', hook:'Small contract details can create big real estate headaches.', caption:'When you are buying or selling, the small details in the contract matter: deadlines, earnest money, included items, written changes, and who is responsible for what. A good transaction is not just about getting accepted. It is about making sure the details are clear after everyone signs.', cta:'Thinking about making an offer or reviewing one? Let’s make sure the important details are clear before they become problems.', hashtags:'#HomeBuyingTips #HomeSellingTips #RealEstateContracts #TransactionTips', carousel:['Contract details matter.','Deadlines should be clear.','Earnest money rules matter.','Included items should be written down.','Ask questions before you sign.'], newsletter:'Real estate contracts include details that can affect the whole transaction: earnest money, deadlines, included items, and written changes. Before signing or changing terms, slow down and ask your agent what the contract actually says.', assets:['Buyer/seller checklist post','Instagram caption','Facebook educational post','Offer-prep talking points']}
];
let activeSocialIndex = 0;
let activeSocialFormat = 'caption';
function renderSocialStudio(){
  const list = document.getElementById('socialSourceList');
  if(!list) return;
  list.innerHTML = socialContentExamples.map((item,index)=>`<button type="button" class="social-source-button ${index===activeSocialIndex?'active':''}" onclick="selectSocialSource(${index})"><span>${escapeHtml(item.recommendation)}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.audience)} · ${escapeHtml(item.platform)}</small></button>`).join('');
  document.querySelectorAll('[data-social-format]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.socialFormat === activeSocialFormat);
    btn.onclick = () => { activeSocialFormat = btn.dataset.socialFormat; renderSocialStudio(); };
  });
  renderSocialPreview();
}
function selectSocialSource(index){ activeSocialIndex = index; renderSocialStudio(); }
function socialFormatBody(item){
  if(activeSocialFormat === 'carousel') return `<ol class="carousel-preview">${item.carousel.map(slide=>`<li>${escapeHtml(slide)}</li>`).join('')}</ol>`;
  if(activeSocialFormat === 'newsletter') return `<p class="social-hook">Facebook post idea</p><p>${escapeHtml(item.newsletter)}</p><p class="social-cta">${escapeHtml(item.cta)}</p>`;
  return `<p class="social-hook">${escapeHtml(item.hook)}</p><p>${escapeHtml(item.caption)}</p><p class="social-cta">${escapeHtml(item.cta)}</p><small>${escapeHtml(item.hashtags)}</small>`;
}
function renderSocialPreview(){
  const item = socialContentExamples[activeSocialIndex] || socialContentExamples[0];
  const card = document.getElementById('socialPreviewCard');
  const title = document.getElementById('socialPreviewTitle');
  const meta = document.getElementById('socialPreviewMeta');
  const assets = document.getElementById('socialAssetGrid');
  if(!card || !item) return;
  if(title) title.textContent = `${item.title} → ${activeSocialFormat === 'newsletter' ? 'Facebook post' : activeSocialFormat === 'caption' ? 'Instagram caption' : 'Instagram carousel'}`;
  if(meta) meta.textContent = `${item.source} · Audience: ${item.audience}`;
  const draft = `${item.caption} ${item.cta}`;
  card.innerHTML = `<div class="social-card-top"><span>${escapeHtml(item.recommendation)}</span><strong>${escapeHtml(item.audience)}</strong></div><div class="phone-post"><div class="post-avatar">AG</div><div><strong>Your Local Real Estate Agent</strong><small>Client-facing content idea from a team training</small></div></div><div class="social-post-body">${socialFormatBody(item)}</div><div class="compliance-note"><strong>Review note:</strong> ${escapeHtml(item.risk)}</div><div class="script-actions"><button type="button" onclick="copyText('${escapeHtml(draft).replace(/'/g,'&#39;')}')">Copy draft</button><button type="button" onclick="saveBrokerItem('Social draft','${escapeHtml(item.title).replace(/'/g,'&#39;')}','${escapeHtml(item.recommendation).replace(/'/g,'&#39;')}')">Save idea</button></div>`;
  if(assets) assets.innerHTML = item.assets.map(asset=>`<article><span>✓</span><strong>${escapeHtml(asset)}</strong><small>Ready for agent review/customization</small></article>`).join('');
}

function renderResults(query=''){
  const q=query.toLowerCase().trim();
  const results=trainings.filter(t=>!q||[t.title,t.category,t.summary,t.excerpt,...t.topics,...t.playbooks].join(' ').toLowerCase().includes(q));
  document.getElementById('resultCount').textContent=q ? `${results.length} match${results.length===1?'':'es'} for “${query}”` : `Showing all`;
  document.getElementById('resultsGrid').innerHTML=results.map(card).join('')||`<p class="muted">No exact matches yet. Try a broader topic or open the playbooks page.</p>`;
}

function renderLatestTraining(){
  const latest = trainings.slice(0,6).map((t,i)=>({
    ...t,
    status: i === 0 ? 'Processed 42 min ago' : i < 3 ? 'Indexed this week' : 'Available in library',
    deliverables: i === 0 ? ['Transcript','Summary','Client scripts','Checklist','Infographic'] : ['Transcript','Ask about it','Key takeaways','Related playbook']
  }));
  const rail = document.getElementById('latestTrainingRail');
  if(!rail) return;
  rail.innerHTML = latest.map((t,i)=>`
    <article class="video-card">
      <button class="video-thumb"${thumbnailStyle(t)} data-title="${escapeHtml(t.title)}" onclick="watchTraining(this.dataset.title)" aria-label="Watch ${escapeHtml(t.title)}">
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
  const training = trainingForSource(source);
  const detail = [source.cite, source.quote].filter(Boolean).join(' · ');
  return `<a class="source-pill" href="${trainingWatchUrl(training, source.timestamp || source.cite)}" target="_blank" rel="noopener" data-tooltip="${escapeHtml(detail || label)}" aria-label="Open source video: ${escapeHtml(label)}"><span>${String(index + 1).padStart(2,'0')}</span>${escapeHtml(label)}</a>`;
}

function sourceCard(source, index){
  const label = source.name || 'Broker training source';
  const training = trainingForSource(source);
  const why = source.why || whySourceMatters(label, source);
  const watchUrl = trainingWatchUrl(training, source.timestamp || source.cite);
  const thumb = training?.thumbnail ? thumbnailStyle(training) : '';
  const time = source.timestamp || source.cite?.match(/\d{1,2}:\d{2}(?::\d{2})?/)?.[0] || training?.watchTime || 'source moment';
  return `<article class="watchable-source-card">
    <button class="source-video-thumb"${thumb} onclick="window.open('${escapeHtml(watchUrl)}','_blank','noopener')" aria-label="Watch source video: ${escapeHtml(label)}"><span class="play">▶</span><em>${escapeHtml(time)}</em></button>
    <div class="source-video-body">
      <span>${escapeHtml(source.match || 'Source')} match · ${escapeHtml(training?.access || 'Authorized members')}</span>
      <strong>${escapeHtml(label)}</strong>
      <small>${escapeHtml(source.cite || training?.category || 'Broker training library')}</small>
      <p class="source-why"><b>Why this helps:</b> ${escapeHtml(why)}</p>
      <blockquote>“${escapeHtml(source.quote || 'Source excerpt will appear here as transcript depth increases.')}”</blockquote>
      <div class="source-card-actions">
        <a href="${escapeHtml(watchUrl)}" target="_blank" rel="noopener">Watch source</a>
        <a href="${librarySearchUrl(label)}">View transcript/search</a>
        <a href="${appPath('/VIDEO_UPLOAD_INSTRUCTIONS.md')}">Upload notes</a>
      </div>
    </div>
  </article>`;
}

function whySourceMatters(label, source={}){
  const text = [label, source.cite, source.quote].join(' ').toLowerCase();
  if(text.includes('repair') || text.includes('inspection')) return 'Gives the agent a practical way to separate real repair issues from wish-list items.';
  if(text.includes('1031') || text.includes('tax') || text.includes('exchange')) return 'Flags timing-sensitive guidance and reminds the agent when to involve the QI or CPA.';
  if(text.includes('cma') || text.includes('pricing') || text.includes('land') || text.includes('flip')) return 'Helps the agent explain pricing with evidence instead of pretending there is one perfect number.';
  if(text.includes('transaction') || text.includes('tc') || text.includes('contract')) return 'Clarifies handoffs, deadlines, and who owns client communication after acceptance.';
  if(text.includes('construction') || text.includes('builder')) return 'Shows how builder and development conversations differ from normal resale.';
  return 'Connects the answer back to team training the agent can review before advising the client.';
}

const savedBrokerBrainKey = 'brokerBrainSavedItemsV1';
function readSavedBrokerItems(){
  try { return JSON.parse(localStorage.getItem(savedBrokerBrainKey) || '[]'); } catch (_) { return []; }
}
function writeSavedBrokerItems(items){
  try { localStorage.setItem(savedBrokerBrainKey, JSON.stringify(items.slice(0,24))); } catch (_) {}
}
function saveBrokerItem(type, title, detail=''){
  const items = readSavedBrokerItems();
  const item = {type, title, detail, savedAt: new Date().toISOString()};
  writeSavedBrokerItems([item, ...items.filter(x => x.title !== title || x.type !== type)]);
  renderSavedWorkspace();
}
function saveAnswer(button){
  const card = button.closest('.ai-answer');
  const title = card?.querySelector('h3')?.textContent?.trim() || 'Saved broker answer';
  const detail = card?.querySelector('.answer-summary')?.textContent?.trim() || '';
  saveBrokerItem('Answer', title, detail);
  const old = button.textContent;
  button.textContent = 'Saved';
  setTimeout(()=>button.textContent = old, 1200);
}
function saveScriptItem(button, title, script){
  saveBrokerItem('Script', title, script);
  const old = button.textContent;
  button.textContent = 'Saved';
  setTimeout(()=>button.textContent = old, 1200);
}
function escalationList(answer){
  const text = [answer.title, answer.intent, ...(answer.queryTerms || []), ...(answer.steps || [])].join(' ').toLowerCase();
  if(text.includes('1031') || text.includes('tax')) return ['Client is close to closing or already received funds.', 'The agent is being asked for tax advice.', 'A qualified intermediary or CPA has not been looped in yet.'];
  if(text.includes('repair') || text.includes('inspection')) return ['The repair request involves safety, insurance, lending, or habitability.', 'The other side is emotional or threatening cancellation.', 'Deadlines are close and the TC or broker has not reviewed the response.'];
  if(text.includes('cma') || text.includes('pricing') || text.includes('land') || text.includes('flip')) return ['The property does not fit normal comparable sales.', 'The client wants a number that the market evidence does not support.', 'The pricing discussion may create appraisal, lending, or disclosure risk.'];
  if(text.includes('transaction') || text.includes('tc') || text.includes('contract')) return ['A deadline is unclear or has changed.', 'The client is confused about who owns the next step.', 'Documents, lender details, title, or inspection timing are incomplete.'];
  return ['The issue touches tax, legal, lending, inspection, or contract interpretation.', 'The agent is uncertain after reading the relevant training.', 'A client decision is urgent or could put the transaction at risk.'];
}

function answerMarkup(answer){
  const cleanAnswer = cleanAnswerForDisplay(answer);
  const scriptText = String(cleanAnswer.script || '').trim().replace(/^[\'\"“”]+|[\'\"“”]+$/g, '');
  const sources = cleanAnswer.sources || [];
  const steps = cleanAnswer.steps || [];
  let nextActions = (cleanAnswer.followups || []).filter(Boolean);
  if(!nextActions.length){
    const titleText = [cleanAnswer.title, ...steps, ...sources.map(s=>s.name)].join(' ').toLowerCase();
    nextActions = relatedPlaybooksFor(titleText).map(p => `Open ${p.name}`);
  }
  const genericGuidance = /^(broker guidance\.?|broker guidance based on team training\.?|based on team training\.?)$/i.test(cleanAnswer.intent || '');
  const guidanceText = cleanAnswer.intent && !genericGuidance
    ? cleanAnswer.intent
    : 'Start with the client decision in front of the agent, then use the closest team guidance to choose the safest next step.';
  const whyList = steps.length
    ? `<ul class="broker-take-list">${steps.map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul>`
    : '<p class="muted">Related team guidance will appear here as more transcripts are connected.</p>';
  return `
    <div class="ai-answer ready sourced-answer practical-answer">
      <div class="answer-topline answer-first">
        <span class="spark">✦</span>
        <div><h3>${escapeHtml(cleanAnswer.title || 'Broker answer')}</h3><p>Recommended guidance for the agent to use or adapt.</p></div>
      </div>

      <section class="answer-section broker-take-section">
        <p class="eyebrow">BROKER GUIDANCE</p>
        <p class="answer-summary">${escapeHtml(guidanceText)}</p>
      </section>

      <section class="answer-section broker-take-section">
        <p class="eyebrow">WHAT TO DO NEXT</p>
        ${whyList}
      </section>

      <section class="answer-section client-wording-section">
        <div class="answer-section-head simple-head">
          <div><p class="eyebrow">WHAT TO SAY</p><h4>If you need to say it plainly</h4></div>
        </div>
        <p class="script-box">“${escapeHtml(scriptText)}”</p>
        <div class="answer-actions">
          <button onclick="copyCurrentScript(this)">Copy</button>
          <button onclick="rewriteScript('text')">Text version</button>
          <button onclick="rewriteScript('email')">Email version</button>
        </div>
      </section>

      <section class="answer-section escalation-section">
        <p class="eyebrow">ESCALATE IF</p>
        <ul class="broker-take-list">${escalationList(cleanAnswer).map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul>
      </section>

      <div class="answer-route-links" aria-label="Go deeper in Broker Brain">
        <a href="${librarySearchUrl(cleanAnswer.queryTerms?.[0] || cleanAnswer.title)}">Find related training</a>
        <a href="${appPath('/playbooks/')}">Open playbooks</a>
        <a href="${appPath('/topics/')}">Browse topics</a>
        <button type="button" onclick="saveAnswer(this)">Save answer</button>
      </div>
      <details class="sources-used source-evidence-panel">
        <summary>Sources to check</summary>
        <p class="muted">Use these if you want to review the original training or dig deeper before advising the client.</p>
        <div class="source-stack compact">
          ${sources.map(sourceCard).join('') || '<p class="muted">Related training will appear here as more transcripts are connected.</p>'}
        </div>
      </details>
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

function askProgressSteps(answer){
  const terms = (answer.queryTerms || []).map(t=>`<span class="tag">${t}</span>`).join('');
  return [
    {label:'Searching the training library', meta:'Scanning saved brokerage training'},
    {label:'Finding matching transcript sections', meta:terms || 'Looking for the closest examples'},
    {label:'Checking the broker notes', meta:`${(answer.sources || []).length} likely matches found`},
    {label:'Preparing the recommended next step', meta:'guidance + reasoning + client wording'}
  ];
}

function loadingMarkup(query, answer, visibleStep=0){
  const steps = askProgressSteps(answer).slice(0, Math.max(1, visibleStep + 1));
  return `
    <div class="ai-answer thinking" aria-live="polite">
      <div class="answer-topline">
        <span class="spark pulse">✦</span>
        <div><h3>Working on your broker answer...</h3><p>Question: “${escapeHtml(query || 'How should I help this agent?')}”</p></div>
        <span class="confidence">In progress</span>
      </div>
      <div class="ai-steps live-steps">
        ${steps.map(step => `<div class="step active"><i></i><span>${escapeHtml(step.label)}</span><em>${step.meta}</em></div>`).join('')}
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

function prefillAskQuestion(question){
  const askInput = document.getElementById('askInput');
  const answerEl = document.getElementById('answer');
  if(!askInput) return;
  askInput.value = question;
  askInput.focus({preventScroll:true});
  document.getElementById('ask')?.scrollIntoView({behavior:'smooth', block:'start'});
  if(answerEl){
    answerEl.innerHTML = '<p class="muted">Question loaded. Hit Ask the Broker when you’re ready for Broker Brain to search the training and write the answer.</p>';
  }
}

function askAbout(topic){
  prefillAskQuestion(`What should I know about ${topic}?`);
}

const isDesignerRouteDashboard = document.body.classList.contains('designer-pass') && !new URLSearchParams(location.search).has('compare');
const librarySearchUrl = query => appPath(`/library/${String(query || '').trim() ? `?q=${encodeURIComponent(String(query).trim())}` : ''}`);
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
document.querySelectorAll('[data-ask]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();prefillAskQuestion(b.dataset.ask);}));
document.getElementById('askButton').addEventListener('click',e=>{e.preventDefault();runAsk(document.getElementById('askInput').value||'general')});
renderLatestTraining();renderPlaybooks();renderTopics();renderTrainings();renderScriptPreview();renderSavedWorkspace();renderSocialStudio();

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
  return `<article class="card"><span class="type">${pct}% MATCH · ${ch.category} · ${ch.timestamp}</span><h3>${ch.title}</h3><p class="muted">Real transcript match from indexed PDF source.</p>${sourceProofMarkup('Transcript excerpt', 1)}<blockquote>${escapeHtml(snippetFor(ch.text, query))}</blockquote><div class="tag-row">${(ch.topics || []).slice(0,4).map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
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
    <div class="thumb-tile"${!isTranscript ? thumbnailStyle(item) : ''}><span>▶</span><strong>${escapeHtml(category)}</strong><em>${isTranscript ? item.timestamp : item.size}</em></div>
    <div class="content-result-body">
      <small>${pct}% match · ${escapeHtml(category)}</small>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(snippet)}</p>
      ${sourceProofMarkup(isTranscript ? 'Transcript proof' : 'Training source', 1)}
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
    <div><small>${escapeHtml(category)}</small><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p>${sourceProofMarkup(isTranscript ? 'Transcript proof' : 'Training source', 1)}</div>
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
    <button class="network-thumb"${thumbnailStyle(t)} data-title="${escapeHtml(t.title)}" onclick="openTraining(this.dataset.title)"><span>▶</span><strong>${escapeHtml(t.category)}</strong></button>
    <small>${index === 0 ? 'New this week' : index < 3 ? 'Indexed training' : 'Library video'}</small>
    <h3>${escapeHtml(t.title)}</h3>
    ${sourceProofMarkup('Original training source', 1)}
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


function sourceProofMarkup(label='Related material', count=1){
  const n = Math.max(1, Number(count) || 1);
  return `<div class="source-proof-strip" aria-label="Source validation"><span>✓</span><strong>${escapeHtml(label)}</strong><small>${n} training source${n===1?'':'s'} supporting this</small></div>`;
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
let askProgressTimers = [];
let askRequestId = 0;

function clearAskProgressTimers(){
  askProgressTimers.forEach(timer => clearTimeout(timer));
  askProgressTimers = [];
}

function scheduleAskProgress(answerEl, query, fallback, requestId){
  clearAskProgressTimers();
  [1, 2, 3].forEach((step, index) => {
    askProgressTimers.push(setTimeout(() => {
      if(requestId !== askRequestId) return;
      answerEl.innerHTML = loadingMarkup(query, fallback, step);
    }, 450 * (index + 1)));
  });
}

async function runAsk(query){
  const focus = detectFocus(query);
  const base = demoAnswers[focus];
  const fallback = {...base, sources: transcriptSourcesFor(query || base.queryTerms.join(' '), base)};
  const answerEl = document.getElementById('answer');
  if(!answerEl) return;
  const requestId = ++askRequestId;
  const minimumProgress = new Promise(resolve => setTimeout(resolve, 1650));
  answerEl.innerHTML = loadingMarkup(query, fallback, 0);
  scheduleAskProgress(answerEl, query, fallback, requestId);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2200);

  try {
    const response = await fetch(ASK_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      signal: controller.signal,
      body: JSON.stringify({question: query || 'general broker guidance'})
    });
    if (!response.ok) throw new Error(`Ask backend returned ${response.status}`);
    const liveAnswer = await response.json();
    await minimumProgress;
    if(requestId !== askRequestId) return;
    answerEl.innerHTML = answerMarkup({
      ...fallback,
      ...liveAnswer,
      confidence: liveAnswer.live ? 'Broker guidance' : (liveAnswer.confidence || fallback.confidence),
      sources: liveAnswer.sources?.length ? liveAnswer.sources : fallback.sources
    });
  } catch (error) {
    console.warn('Ask service unavailable; using saved training answer', error);
    await minimumProgress;
    if(requestId !== askRequestId) return;
    answerEl.innerHTML = answerMarkup(fallback);
  } finally {
    if(requestId === askRequestId) clearAskProgressTimers();
    clearTimeout(timeoutId);
  }
}
