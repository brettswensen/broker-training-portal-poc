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

function cleanBrokerText(value) {
  return String(value || '')
    .replace(/[—–]/g, ', ')
    .replace(/\s+/g, ' ')
    .replace(/\bdisclosure leverage\b/gi, 'disclosure position')
    .replace(/\bactionable\b/gi, 'clear')
    .replace(/\bleverage\b/gi, 'use')
    .replace(/\butilize\b/gi, 'use')
    .replace(/\bIt is important to note that\b/gi, '')
    .replace(/\bHere's what you need to know:?\s*/gi, '')
    .replace(/\bLet's break this down:?\s*/gi, '')
    .replace(/\bGreat question[.!]?\s*/gi, '')
    .replace(/\bGood news[,!]?\s*/gi, '')
    .replace(/\bsuper helpful\b/gi, 'useful')
    .replace(/\bawesome\b/gi, 'strong')
    .replace(/\bdead\b/gi, 'no longer viable')
    .replace(/\bblown\b/gi, 'at serious risk')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,/g, ',')
    .trim();
}

function cleanBrokerAnswer(answer) {
  return {
    ...answer,
    title: cleanBrokerText(answer.title || 'Broker guidance'),
    intent: 'Broker guidance.',
    confidence: cleanBrokerText(answer.confidence || 'Broker guidance'),
    steps: (answer.steps || []).map(cleanBrokerText).filter(Boolean),
    script: cleanBrokerText(answer.script || ''),
    followups: (answer.followups || []).map(cleanBrokerText).filter(Boolean)
  };
}

function hasModelMeta(answer) {
  const text = [
    answer.title,
    answer.intent,
    answer.confidence,
    ...(answer.steps || []),
    answer.script,
    ...(answer.followups || [])
  ].join('\n');
  return /\b(the user wants|i need to|json response|the prompt|system prompt|return only json|let me analyze)\b/i.test(text);
}

function cleanAndValidateModelAnswer(answer) {
  const cleaned = cleanBrokerAnswer(answer);
  if (hasModelMeta(cleaned)) throw new Error('Model returned meta commentary');
  return cleaned;
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
      intent: 'Broker guidance.',
      confidence: sources.length ? 'Broker guidance' : 'General',
      steps: [
        'First clarify the timing: accepted offer is not the same as closed.',
        'If the client has not closed yet, get a qualified intermediary involved immediately before funds are received.',
        'If the client already closed and received the money, the exchange may be blown or severely limited. Tell them to contact a QI or CPA right away.',
        'Do not give tax or legal advice; explain the risk and make the expert handoff urgent.'
      ],
      script: 'Because this is a potential 1031 exchange, timing matters a lot. If you have not closed yet, we need to get a qualified intermediary involved immediately before you receive any funds. If you already closed and took the money, the exchange may be at risk, so the next call should be to a QI or CPA.',
      followups: ['Call qualified intermediary', 'Confirm closing/fund status', 'Loop in CPA/tax advisor']
    };
  }
  return {
    title: 'Broker guidance',
    intent: 'Broker guidance.',
    confidence: sources.length ? 'Broker guidance' : 'Exploratory',
    steps: [
      'Start with the most relevant training source and identify the client decision point.',
      'Give the agent a practical next step rather than a generic summary.',
      'Review the related material if the agent wants more context before advising the client.',
      'Escalate to the broker, CPA, attorney, lender, or TC when the issue crosses into licensed/specialist advice.'
    ],
    script: 'Here is the practical next step I would take. Focus on the client’s immediate decision, document the recommendation, and bring in the right specialist if this goes beyond agent guidance.',
    followups: ['Review related training', 'Open related playbook', 'Escalate if specialist advice is needed']
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

function normalizeKimiAnswer(parsed) {
  if (!parsed || typeof parsed !== 'object') return null;
  const steps = Array.isArray(parsed.steps) ? parsed.steps.map(s => String(s || '').trim()).filter(Boolean) : [];
  if (!steps.length) return null;
  return {
    title: String(parsed.title || 'Live broker guidance').trim(),
    intent: String(parsed.intent || 'Broker guidance').trim(),
    confidence: String(parsed.confidence || 'Broker guidance').trim(),
    steps: steps.slice(0, 5),
    script: String(parsed.script || steps.join(' ')).trim(),
    followups: Array.isArray(parsed.followups) ? parsed.followups.map(s => String(s || '').trim()).filter(Boolean).slice(0, 4) : []
  };
}

function salvageJsonLikeAnswer(text) {
  const cleaned = String(text || '').replace(/```json/gi, '').replace(/```/g, '').trim();
  if (!cleaned.includes('"steps"') && !cleaned.includes('steps')) return null;

  const titleMatch = cleaned.match(/"title"\s*:\s*"([\s\S]*?)"\s*,/);
  const scriptMatch = cleaned.match(/"script"\s*:\s*"([\s\S]*?)"\s*(?:,\s*"followups"|\})/);
  const followupsMatch = cleaned.match(/"followups"\s*:\s*\[([\s\S]*?)\]/);
  const stepsStart = cleaned.search(/"steps"\s*:\s*\[/);
  const stepsEnd = cleaned.search(/,\s*"script"\s*:/);
  const stepsBlock = stepsStart >= 0 ? cleaned.slice(stepsStart, stepsEnd > stepsStart ? stepsEnd : cleaned.length) : '';
  const unquoteList = value => (value || '').match(/"(?:\\.|[^"\\])*"/g)?.map(s => {
    try { return JSON.parse(s); } catch (_) { return s.slice(1, -1).replace(/\\"/g, '"'); }
  }).map(s => String(s || '').trim()).filter(Boolean) || [];
  let steps = unquoteList(stepsBlock).filter(s => !['steps'].includes(s));
  steps = steps.filter(s => !s.includes('"title"') && !s.includes('"intent"') && !s.includes('"confidence"'));
  if (!steps.length) return null;

  return {
    title: titleMatch?.[1] || 'Live broker guidance',
    intent: 'Broker guidance',
    confidence: 'Broker guidance',
    steps: steps.slice(0, 5),
    script: scriptMatch?.[1] ? scriptMatch[1].replace(/\\"/g, '"') : steps.join(' '),
    followups: unquoteList(followupsMatch?.[1]).slice(0, 4)
  };
}

async function callKimi(question, sources) {
  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) throw new Error('KIMI_API_KEY is not configured');

  const sourceContext = sources.map((s, i) => `Training note ${i + 1}: ${s.title} (${s.timestamp})\n${s.text}`).join('\n\n').slice(0, 2200);
  const system = `You are an experienced real estate broker coaching an agent. Answer the agent directly in a calm, authoritative, professional voice. Use the training notes for substance. Do not mention prompts, JSON, source numbers, internal excerpts, the user, or what you need to do. Do not sound like an AI assistant, legal memo, software product, or corporate training deck. Do not use em dashes. Avoid jargon such as training-matched, proof point, leverage, actionable, optimize, framework, and key insight. Avoid casual phrases like good news, great question, let's break this down, awesome, super helpful, no-brainer, and game changer. Do not give tax or legal advice. Tell agents when to involve the CPA, QI, attorney, lender, TC, or broker. Return only JSON with string fields: {"title":"","intent":"","confidence":"","steps":[""],"script":"","followups":[""]}.`;
  const user = `/no_think\nAgent question: ${question}\n\nRelevant training notes:\n${sourceContext || 'No direct training matches were found.'}`;

  const modelCandidates = [process.env.KIMI_MODEL, 'kimi-k2.7-code', 'kimi-k2.6'].filter(Boolean);
  const models = [...new Set(modelCandidates)];
  let data;
  let lastError;

  for (const model of models) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 55000);
    try {
      const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          temperature: 1,
          max_tokens: 1200,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: user }
          ]
        })
      });

      if (!response.ok) {
        const err = await response.text();
        lastError = new Error(`Kimi error ${response.status} for ${model}: ${err.slice(0, 300)}`);
        continue;
      }

      data = await response.json();
      break;
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timeout);
    }
  }

  if (!data) throw lastError || new Error('Kimi request failed');
  const message = data.choices?.[0]?.message || {};
  const content = message.content || message.reasoning_content || '';
  const parsed = normalizeKimiAnswer(safeJsonParse(content));
  if (parsed) return cleanAndValidateModelAnswer(parsed);

  const salvaged = salvageJsonLikeAnswer(content);
  if (salvaged) return cleanAndValidateModelAnswer(salvaged);

  const cleaned = String(content || '').replace(/```json/gi, '').replace(/```/g, '').trim();
  if (cleaned && !cleaned.trim().startsWith('{')) {
    const titleMatch = cleaned.match(/"title"\s*:\s*"([\s\S]*?)"\s*,/);
    const stepsMatch = cleaned.match(/"steps"\s*:\s*\[([\s\S]*?)\]\s*,/);
    const scriptMatch = cleaned.match(/"script"\s*:\s*"([\s\S]*?)"\s*,\s*"followups"/);
    const followupsMatch = cleaned.match(/"followups"\s*:\s*\[([\s\S]*?)\]/);
    const unquoteList = value => (value || '').match(/"([\s\S]*?)"/g)?.map(s => s.slice(1, -1).replace(/\\"/g, '"').trim()).filter(Boolean) || [];
    const extractedSteps = unquoteList(stepsMatch?.[1]).slice(0, 5);
    if (extractedSteps.length) {
      return cleanAndValidateModelAnswer({
        title: titleMatch?.[1] || 'Broker guidance',
        intent: 'Broker guidance',
        confidence: 'Broker guidance',
        steps: extractedSteps,
        script: (scriptMatch?.[1] || extractedSteps.join(' ')).replace(/\\"/g, '"').slice(0, 900),
        followups: unquoteList(followupsMatch?.[1]).slice(0, 4).length ? unquoteList(followupsMatch?.[1]).slice(0, 4) : ['Review the training notes', 'Confirm the timing and facts', 'Bring in the right specialist if needed']
      });
    }
    const sentences = cleaned.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 4);
    return cleanAndValidateModelAnswer({
      title: 'Broker guidance',
      intent: 'Broker guidance',
      confidence: 'Broker guidance',
      steps: sentences.length ? sentences : [cleaned.slice(0, 240)],
      script: cleaned.slice(0, 900),
      followups: ['Review the training notes', 'Confirm the timing and facts', 'Bring in the right specialist if needed']
    });
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
      console.warn('Ask live generation fallback:', error?.message || String(error));
      answer = cleanBrokerAnswer(fallbackAnswer(question, sources));
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
    return res.status(500).json({ error: 'Ask service failed' });
  }
};
