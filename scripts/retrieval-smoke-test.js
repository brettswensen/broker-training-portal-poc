#!/usr/bin/env node
/*
 * No-content retrieval smoke test for Billy-approved Broker Brain canaries.
 *
 * This script reports IDs, ranks, and pass/fail counts only. It intentionally
 * does not print chunk text or source guidance. Billy owns content QA; Hermes
 * uses this as a mechanical retrieval regression check.
 */
const fs = require('fs');
const path = require('path');

function argValue(name, fallback) {
  const idx = process.argv.indexOf(name);
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
  return fallback;
}

function hasFlag(name) {
  return process.argv.includes(name);
}

const root = process.cwd();
const manifestPath = argValue('--manifest', 'content-ingestion/retrieval-tests/2026-08-22-batch.json');
const indexPath = argValue('--index', 'data/search-index.json');
const outPath = argValue('--out', 'content-ingestion/retrieval-tests/results/latest-runtime-keyword-smoke.json');
const topSources = Number(argValue('--top-sources', '4'));
const topChunks = Number(argValue('--top-chunks', '10'));
const allChunksTop = Number(argValue('--all-chunks-top', '20'));
const failOnMiss = hasFlag('--fail-on-miss');

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(path.resolve(root, relPath), 'utf8'));
}

function tokenize(text) {
  const stop = new Set(['the','and','for','with','that','this','from','what','when','where','about','into','should','could','would','have','has','are','you','your','agent','client','seller','buyer','real','estate']);
  return String(text || '')
    .toLowerCase()
    .match(/[a-z0-9%$']+/g)?.filter(word => word.length > 2 && !stop.has(word)) || [];
}

function scoreChunk(query, chunk) {
  const words = tokenize(query);
  const fields = [
    { value: [chunk.title, chunk.category, ...(chunk.topics || [])].join(' '), weight: 4 },
    { value: chunk.section || '', weight: 3 },
    { value: (chunk.sourceRetrievalTerms || []).join(' '), weight: 8 },
    { value: (chunk.chunkRetrievalTerms || []).join(' '), weight: 28 },
    { value: (chunk.retrievalTerms || []).join(' '), weight: 10 },
    { value: chunk.text || '', weight: 1 }
  ];
  let score = 0;
  for (const word of words) {
    for (const field of fields) {
      const blob = String(field.value || '').toLowerCase();
      const hits = blob.split(word).length - 1;
      score += hits ? field.weight * (2 + Math.min(hits, 6)) : 0;
    }
  }
  const exactQuery = String(query || '').toLowerCase();
  if (exactQuery && fields.some(field => String(field.value || '').toLowerCase().includes(exactQuery))) score += 30;
  return score;
}

function expectedRefs(test) {
  const rawRefs = (test.expected_chunk_refs || test.expected_chunks || test.expected_chunk_ids || []).map(ref => {
    if (typeof ref === 'string') return ref;
    return ref.chunk_ref || ref.chunk_id || ref.id;
  }).filter(Boolean);
  const sources = expectedSources(test, []);
  return rawRefs.flatMap(ref => {
    if (String(ref).includes('-chunk-')) return [String(ref)];
    return sources.map(sourceId => `${sourceId}-${ref}`);
  });
}

function expectedSources(test, refs) {
  const values = test.expected_source_ids || test.expected_sources || test.expected_source_id || test.source_id || [];
  const list = Array.isArray(values) ? values : [values];
  const fromFields = list.map(String).filter(Boolean);
  if (fromFields.length) return fromFields;
  const inferred = (refs[0] || '').replace(/-chunk-\d+$/, '');
  return inferred ? [inferred] : [];
}

const manifest = readJson(manifestPath);
const index = readJson(indexPath);
const tests = Array.isArray(manifest) ? manifest : (manifest.tests || manifest.retrieval_tests || []);
const chunks = index.chunks || [];
const chunkIds = new Set(chunks.map(chunk => chunk.id));
const sourceIds = new Set((index.records || []).map(record => record.id));

const results = tests.map(test => {
  const ranked = chunks
    .map(chunk => ({ id: chunk.id, sourceId: chunk.sourceId, score: scoreChunk(test.query, chunk) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const refs = expectedRefs(test);
  const expectedSourceIds = expectedSources(test, refs);
  const expectedRanks = Object.fromEntries(refs.map(ref => [ref, ranked.findIndex(item => item.id === ref) + 1 || null]));
  const topSourceIds = [...new Set(ranked.slice(0, Math.max(topSources * 5, 20)).map(item => item.sourceId))].slice(0, topSources);

  return {
    test_id: test.test_id || test.id,
    expected_source_ids: expectedSourceIds,
    expected_source_exists: expectedSourceIds.every(sourceId => sourceIds.has(sourceId)),
    expected_refs_exist: refs.every(ref => chunkIds.has(ref)),
    source_top_pass: expectedSourceIds.some(sourceId => topSourceIds.includes(sourceId)),
    chunk_any_top_pass: refs.some(ref => (expectedRanks[ref] || Infinity) <= topChunks),
    chunk_all_top_pass: refs.every(ref => (expectedRanks[ref] || Infinity) <= allChunksTop),
    expected_ranks: expectedRanks,
    top_sources: topSourceIds
  };
});

const summary = {
  manifest: manifestPath,
  index: indexPath,
  tests: results.length,
  expected_sources_exist: results.filter(r => r.expected_source_exists).length,
  expected_refs_exist: results.filter(r => r.expected_refs_exist).length,
  source_top_pass: results.filter(r => r.source_top_pass).length,
  chunk_any_top_pass: results.filter(r => r.chunk_any_top_pass).length,
  chunk_all_top_pass: results.filter(r => r.chunk_all_top_pass).length,
  citation_capable_pass: results.filter(r => r.expected_refs_exist).length,
  thresholds: { topSources, topChunks, allChunksTop }
};

const failed_tests = results.filter(r => !r.source_top_pass || !r.chunk_any_top_pass || !r.expected_refs_exist);
const report = { summary, failed_tests, results };
fs.mkdirSync(path.dirname(path.resolve(root, outPath)), { recursive: true });
fs.writeFileSync(path.resolve(root, outPath), JSON.stringify(report, null, 2) + '\n');

console.log(JSON.stringify({ ...summary, failed_tests: failed_tests.length, output: outPath }, null, 2));

if (failOnMiss && failed_tests.length) {
  process.exitCode = 1;
}
