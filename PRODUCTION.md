# Production / Demo Rule

This project has one canonical demo URL:

https://real-estate-training-portal-poc.vercel.app/

## Hard rule

The canonical Vercel demo must always represent the latest approved production/demo version of Broker Brain. Do not demo, hand off, or validate against a stale branch, preview URL, or GitHub Pages URL when the user asks about the live demo.

## Source of truth

- Production branch: `main`
- Canonical deployment target: Vercel production alias `real-estate-training-portal-poc.vercel.app`
- GitHub Pages is secondary/reference only and should publish from `main` if enabled.

## Before changing production

1. Start from current `origin/main`.
2. Preserve the latest approved demo behavior before adding new features.
3. If restoring older UI from history, graft new approved features back in before deploy.
4. Do not deploy from temporary branches as the final state.
5. If a temporary branch is used, merge/reconcile it back to `main` immediately after verification.

## Verification required before handoff

Run and record real checks before telling the user the demo is ready:

- Static/syntax checks for changed JS/HTML.
- Browser check of the canonical Vercel URL.
- Confirm the root page does not reintroduce retired dashboard-heavy sections unless explicitly requested.
- Confirm Ask Broker / Broker Brain AI features still work.
- Confirm video routes still open Google Drive preview links where applicable.

## Current production baseline

As of the Aug 22 reconciliation, `main` contains the verified production tree with:

- Aug 18 cleaned/Pryer-style dashboard structure.
- Current conversational Ask Broker Option B flow.
- Google Drive video preview behavior on All Content and Training Videos routes.
