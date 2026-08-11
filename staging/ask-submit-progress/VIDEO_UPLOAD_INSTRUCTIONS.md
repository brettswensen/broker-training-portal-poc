# Broker Brain Video Upload Instructions

## Short recommendation

For the next demo, use **Google Drive or Vimeo private links** as the cheapest/fastest path. Use **Cloudflare Stream** when we are ready for a real paid/member portal.

Why:

- **Cheapest demo:** Google Drive links you already have, plus Broker Brain source cards that look like authorized/member access.
- **Best low-friction hosted demo:** Vimeo private/unlisted embeds, restricted to the demo domain when possible.
- **Best real platform:** Cloudflare Stream with signed playback URLs behind login.

## What to upload right now

Upload a small batch first: **5 to 8 representative videos**, not the whole library.

Best demo mix:

1. Repair Negotiations
2. 1031 Exchange Basics
3. Work With Your TC
4. CMA / Pricing
5. New Construction
6. One client-communication or listing/seller training if available

## Cheapest upload path for this demo

### Option 1 — Google Drive, fastest and cheapest

1. Create a Drive folder named:

```text
Broker Brain Demo Videos
```

2. Upload each `.mp4` there.
3. Set access to one of these:
   - **Restricted** if only we need to test it.
   - **Anyone with link can view** if Marty needs to click without permission issues.
4. Send Hermes/Billy the share links.

This is not true secure member hosting, but it is enough to demo the workflow:

```text
AI answer → source card → Watch source → actual video opens
```

### Option 2 — Vimeo private/unlisted, best polished demo

1. Upload each video to Vimeo.
2. Set video privacy to private/unlisted.
3. If your plan allows it, restrict embeds to the Broker Brain preview domain.
4. Send Hermes/Billy the Vimeo watch/embed links.

This feels more like a real video product than Drive.

### Option 3 — Cloudflare Stream, real platform path

Use this when ready to move past the demo.

1. Create/upload videos in Cloudflare Stream.
2. For each video, copy:
   - Stream video ID
   - playback URL/embed URL
   - thumbnail URL
3. Later, Broker Brain can use signed playback URLs behind login.

## Send this metadata with each upload

Use this template for each video:

```text
Title:
Trainer/speaker:
Date:
Category:
Topics:
Video link:
Transcript link, if any:
Approx duration:
Notes / best sections:
```

Example:

```text
Title: Repair Negotiations w Craig
Trainer/speaker: Craig
Date: 2026-07-23
Category: Negotiation & Inspection
Topics: repair negotiations, inspection objection, seller response
Video link: https://...
Transcript link: https://...
Approx duration: 42 min
Notes / best sections: safety vs cosmetic repairs, credits vs repairs, how to frame the ask
```

## What Hermes/Billy will do with the links

For each uploaded video, we connect:

```text
training record
→ thumbnail
→ transcript chunks
→ timestamp/source breadcrumb
→ Watch source button
```

The visible demo flow becomes:

```text
Ask Broker Brain a question
→ answer appears
→ Sources to Check expands
→ source card shows thumbnail + timestamp
→ Watch source opens the real video
```

## Important security note

Google Drive, unlisted Vimeo, and GitHub Pages are **demo-level authorization**, not true member security.

For a real paid private portal, use:

```text
Vercel app + login + Cloudflare Stream signed URLs
```

That is the correct future build once the demo proves value.
