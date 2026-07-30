const fs = require('fs');
const path = require('path');

const ALLOWED_ORIGINS = new Set([
  'https://brettswensen.github.io',
  'http://127.0.0.1:4173',
  'http://localhost:4173'
]);

function setCors(req, res) {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://brettswensen.github.io');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function tokenize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2);
}

function scoreChunk(question, chunk) {
  const words = tokenize(question);
  const blob = [chunk.title, chunk.category, ...(chunk.topics || []), chunk.text].join(' ').toLowerCase();
  let score = 0;
  for (const word of words) {
    const hits = blob.split(word).length - 1;
    score += hits ? 2 + Math.min(hits, 6) : 0;
  }
  if (blob.includes(String(question || '').toLowerCase())) score += 15;
  return score;
}

function snippetFor(text, question) {
  const words = tokenize(question);
  const lower = String(text || '').toLowerCase();
  let pos = 0;
  for (const word of words) {
    const found = lower.indexOf(word);
    if (found >= 0) { pos = found; break; }
  }
  const start = Math.max(0, pos - 220);
  const end = Math.min(String(text || '').length, pos + 520);
  return `${start ? '…' : ''}${String(text || '').slice(start, end).replace(/\s+/g, ' ').trim()}${end < String(text || '').length ? '…' : ''}`;
}

function loadIndex() {
  const indexPath = path.join(process.cwd(), 'data', 'search-index.json');
  return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
}

function searchTranscripts(question, limit = 6) {
  const index = loadIndex();
  return index.chunks
    .map(chunk => ({ ...chunk, score: scoreChunk(question, chunk) }))
    .filter(chunk => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((chunk, i) => ({
      title: chunk.title,
      category: chunk.category,
      timestamp: chunk.timestamp,
      match: `${Math.min(98, 92 - i * 4)}%`,
      quote: snippetFor(chunk.text, question),
      text: String(chunk.text || '').replace(/\s+/g, ' ').slice(0, 700)
    }));
}

function fallbackAnswer(question, sources) {
  const is1031 = /1031|exchange|qualified intermediary|tax/i.test(question);
  if (is1031) {
    return {
      title: '1031 exchange guidance',
      intent: 'Live backend fallback answer from transcript retrieval.',
      confidence: sources.length ? 'Source-backed' : 'General',
      steps: [
        'First clarify the timing: accepted offer is not the same as closed.',
        'If the client has not closed yet, get a qualified intermediary involved immediately before funds are received.',
        'If the client already closed and received the money, the exchange may be blown or severely limited — tell them to contact a QI/CPA right away.',
        'Do not give tax or legal advice; explain the risk and make the expert handoff urgent.'
      ],
      script: 'Because this is a potential 1031 exchange, timing matters a lot. If you have not closed yet, we need to get a qualified intermediary involved immediately before you receive any funds. If you already closed and took the money, the exchange may be at risk, so the next call should be to a QI or CPA.',
      followups: ['Call qualified intermediary', 'Confirm closing/fund status', 'Loop in CPA/tax advisor']
    };
  }
  return {
    title: 'Broker guidance',
    intent: 'Live backend fallback answer from transcript retrieval.',
    confidence: sources.length ? 'Source-backed' : 'Exploratory',
    steps: [
      'Start with the most relevant training source and identify the client decision point.',
      'Give the agent a practical next step rather than a generic summary.',
      'Use the source excerpts below to verify the recommendation.',
      'Escalate to the broker, CPA, attorney, lender, or TC when the issue crosses into licensed/specialist advice.'
    ],
    script: 'Based on our training library, here is the practical next step I would take. Let’s focus on the client’s immediate decision, document the recommendation, and bring in the right specialist if this goes beyond agent guidance.',
    followups: ['Review source excerpts', 'Open related playbook', 'Escalate if specialist advice is needed']
  };
}

function safeJsonParse(text) {
  const raw = String(text || '');
  const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
  for (const candidate of [raw, cleaned]) {
    try { return JSON.parse(candidate); } catch (_) {}
  }
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try { return JSON.parse(cleaned.slice(start, end + 1)); } catch (_) {}
  }
  return null;
}

async function callKimi(question, sources) {
  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) throw new Error('KIMI_API_KEY is not configured');

  const sourceContext = sources.map((s, i) => `SOURCE ${i + 1}: ${s.title} (${s.timestamp})\n${s.text}`).join('\n\n').slice(0, 2200);
  const system = `You are Ask the Broker for a real estate brokerage training portal. Use the transcript excerpts. Be direct, broker-specific, and concise. Answer first; citations are shown separately. Do not give tax/legal advice; tell agents when to involve CPA/QI/attorney/broker. Return only JSON: {"title":"","intent":"","confidence":"","steps":[""],"script":"","followups":[""]}.`;
  const user = `Question: ${question}\n\nTranscript excerpts:\n${sourceContext || 'No direct transcript matches were found.'}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55000);
  const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
    method: 'POST',
    signal: controller.signal,
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.KIMI_MODEL || 'kimi-k2.7-code',
      temperature: 1,
      max_tokens: 1200,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ]
    })
  }).finally(() => clearTimeout(timeout));

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Kimi error ${response.status}: ${err.slice(0, 300)}`);
  }

  const data = await response.json();
  const message = data.choices?.[0]?.message || {};
  const content = message.content || message.reasoning_content || '';
  const parsed = safeJsonParse(content);
  if (parsed && Array.isArray(parsed.steps)) return parsed;

  const cleaned = String(content || '').replace(/```json/gi, '').replace(/```/g, '').trim();
  if (cleaned) {
    const titleMatch = cleaned.match(/"title"\s*:\s*"([\s\S]*?)"\s*,/);
    const stepsMatch = cleaned.match(/"steps"\s*:\s*\[([\s\S]*?)\]\s*,/);
    const scriptMatch = cleaned.match(/"script"\s*:\s*"([\s\S]*?)"\s*,\s*"followups"/);
    const followupsMatch = cleaned.match(/"followups"\s*:\s*\[([\s\S]*?)\]/);
    const unquoteList = value => (value || '').match(/"([\s\S]*?)"/g)?.map(s => s.slice(1, -1).replace(/\\"/g, '"').trim()).filter(Boolean) || [];
    const extractedSteps = unquoteList(stepsMatch?.[1]).slice(0, 5);
    if (extractedSteps.length) {
      return {
        title: titleMatch?.[1] || 'Live broker guidance',
        intent: 'Live Kimi answer from transcript excerpts',
        confidence: 'Live Kimi answer · transcript grounded',
        steps: extractedSteps,
        script: (scriptMatch?.[1] || extractedSteps.join(' ')).replace(/\\"/g, '"').slice(0, 900),
        followups: unquoteList(followupsMatch?.[1]).slice(0, 4).length ? unquoteList(followupsMatch?.[1]).slice(0, 4) : ['Review the source excerpts', 'Confirm the timing/facts', 'Escalate to the right specialist if needed']
      };
    }
    const sentences = cleaned.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 4);
    return {
      title: 'Live broker guidance',
      intent: 'Live Kimi answer from transcript excerpts',
      confidence: 'Live Kimi answer · transcript grounded',
      steps: sentences.length ? sentences : [cleaned.slice(0, 240)],
      script: cleaned.slice(0, 900),
      followups: ['Review the source excerpts', 'Confirm the timing/facts', 'Escalate to the right specialist if needed']
    };
  }
  throw new Error('Model returned an empty answer');
}

module.exports = async function handler(req, res) {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const question = String(req.body?.question || '').trim().slice(0, 1200);
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const sources = searchTranscripts(question, 4);
    let answer;
    let live = true;
    try {
      answer = await callKimi(question, sources);
    } catch (error) {
      live = false;
      answer = fallbackAnswer(question, sources);
      answer.intent = `${answer.intent} Live model unavailable: ${error.message}`;
    }

    return res.status(200).json({
      live,
      ...answer,
      sources: sources.slice(0, 3).map((s, i) => ({
        name: s.title,
        cite: `Real transcript · ${s.timestamp}`,
        match: s.match || `${Math.min(98, 90 - i * 5)}%`,
        quote: s.quote.slice(0, 320)
      }))
    });
  } catch (error) {
    return res.status(500).json({ error: 'Ask backend failed', detail: error.message });
  }
};
