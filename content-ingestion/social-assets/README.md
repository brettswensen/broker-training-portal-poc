# Agent-postable social asset renderer

This folder contains the deterministic design layer for turning transcript-derived social nuggets into ready-to-review 9:16 PNGs that can plausibly be posted by an individual real estate agent.

## Current flow

1. Billy transcribes / digests training PDFs.
2. Billy identifies whether there is a *public social nugget* worth posting. Not every transcript should produce a social asset.
3. Billy writes only selected asset specs to a JSON file, for example:
   - `content-ingestion/social-assets/social-first-curated-batch-002.json`
4. Run the renderer:

```bash
python3 scripts/render-social-assets.py --input content-ingestion/social-assets/social-first-curated-batch-002.json --output content-ingestion/social-assets/social-first-batch-002-images
```

5. Generated assets appear in the requested output folder, for example:
   - `content-ingestion/social-assets/social-first-batch-002-images/`

The renderer creates:

- one `1080x1920` PNG per JSON asset
- `render-manifest.json` with asset id, source id, selected template, output path, and dimensions

## Why this matters

This makes asset creation immediate after PDF transcription without turning every transcript into content. Billy should only create a post when the transcript contains a nugget a buyer, seller, or investor would actually save, share, comment on, or DM about.

## Social-first selection rules

Create an asset when the nugget has at least one of these qualities:

- it corrects a common misconception
- it helps someone avoid a costly mistake
- it gives a simple checklist or question set
- it creates a natural DM conversation for the agent
- it sounds like advice an agent would actually say to a client

Skip asset generation when the transcript only contains:

- internal training process
- generic definitions with no hook
- compliance nuance that cannot be simplified safely
- source-specific details that would not make sense to the public
- anything that feels like a Broker Brain demo instead of an agent post

## Design approach

The renderer is text-first and deterministic:

- no AI-generated text inside images
- no Broker Brain, source IDs, compliance notes, or internal review language printed on the image
- readable typography rendered with Pillow
- reusable visual templates selected from asset metadata/headlines
- captions, compliance notes, and source basis stay in JSON/manifest for review, not on the public image
- output folder is cleaned before each render so every batch is deterministic

## Template types currently supported

- OODA / decision loop
- checklist cards
- myth-vs-fact
- notebook / documentation card
- contract-detail icon list
- settlement/closing timeline
- repair-priority card
- seller-response pathways
- pricing chart
- generic-vs-custom split

## Next production step

Wire this command into Billy's ingestion pipeline after the transcript-to-social-spec stage:

```bash
python3 scripts/render-social-assets.py --input <generated-social-json> --output <batch-image-folder>
```

Then the portal can surface the PNGs, captions, compliance notes, and source citations together for human approval before posting.
