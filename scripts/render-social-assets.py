#!/usr/bin/env python3
"""Render Broker Brain 9:16 social asset concepts into PNG images.

Input: Billy/Hermes JSON with an `assets` array.
Output: 1080x1920 PNG files plus a manifest JSON.

This is intentionally deterministic and text-first. It avoids AI-generated
text artifacts by rendering the words with Pillow, while still allowing each
asset to carry AI/image-generation prompts for future variants.
"""

from __future__ import annotations

import argparse
import json
import math
import re
import textwrap
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
SAFE_X = 92
SAFE_TOP = 150
SAFE_BOTTOM = 150

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_INPUT = ROOT / "content-ingestion/social-assets/social-asset-designs-batch-001.json"
DEFAULT_OUTPUT = ROOT / "content-ingestion/social-assets/batch-001-images"

FONT_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/SFCompact.ttf",
    "/System/Library/Fonts/NewYork.ttf",
    "/Library/Fonts/Arial Unicode.ttf",
]

PALETTES = [
    {"bg": "#071A2D", "fg": "#F8FBFF", "muted": "#BFD1E5", "accent": "#4FD1C5", "accent2": "#E7C873"},
    {"bg": "#F3EDE2", "fg": "#17212B", "muted": "#5B6671", "accent": "#C96F4A", "accent2": "#0E6B6F"},
    {"bg": "#111827", "fg": "#FFFFFF", "muted": "#CBD5E1", "accent": "#F59E8B", "accent2": "#86A789"},
    {"bg": "#F8FAFC", "fg": "#102033", "muted": "#5B6678", "accent": "#2F80ED", "accent2": "#75A99C"},
    {"bg": "#222222", "fg": "#FFF8E8", "muted": "#DED4BE", "accent": "#DDBA62", "accent2": "#7FB3D5"},
    {"bg": "#EEF2F1", "fg": "#16302B", "muted": "#55605D", "accent": "#EA7C4F", "accent2": "#2D6A6A"},
]

TEMPLATE_BY_KEYWORD = [
    ("deadline|3 pm|friday", "checklist"),
    ("short sale|discount|process|myth", "myth_fact"),
    ("conversation log|tool", "notebook"),
    ("settlement|closing", "timeline"),
    ("inspection|repair|wish list|strategy", "priority"),
    ("response|negotiations", "pathways"),
    ("pricing|evidence|guess|cma", "chart"),
    ("zestimate|unique", "split"),
    ("1031|tax|defer", "timeline"),
    ("pid|construction", "checklist"),
    ("contract|details|blank|repc", "icons"),
    ("ooda|panic|decision", "loop"),
]


def slugify(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-") or "asset"


def load_font(size: int, bold: bool = False):
    # SFNS has a bold-looking system rendering at large sizes; use it everywhere
    # for portability on this macOS Hermes host.
    for p in FONT_CANDIDATES:
        if Path(p).exists():
            try:
                return ImageFont.truetype(p, size=size)
            except Exception:
                continue
    return ImageFont.load_default(size=size)


def hex_to_rgb(h: str) -> tuple[int, int, int]:
    h = h.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def blend(c1: str, c2: str, t: float) -> tuple[int, int, int]:
    a, b = hex_to_rgb(c1), hex_to_rgb(c2)
    return (
        round(a[0] * (1 - t) + b[0] * t),
        round(a[1] * (1 - t) + b[1] * t),
        round(a[2] * (1 - t) + b[2] * t),
    )


def rounded_rect(draw: ImageDraw.ImageDraw, xy, r, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=r, fill=fill, outline=outline, width=width)


def draw_gradient_bg(img: Image.Image, palette: dict):
    pix = img.load()
    if pix is None:
        return
    for y in range(H):
        t = y / H
        # slight diagonal-ish variation using y only for speed/determinism
        color = blend(palette["bg"], palette.get("accent2", palette["bg"]), t * 0.22)
        for x in range(W):
            pix[x, y] = color


def draw_subtle_pattern(draw: ImageDraw.ImageDraw, palette: dict):
    accent = hex_to_rgb(palette["accent"])
    color = (*accent, 55)
    for i in range(-200, 1300, 180):
        draw.line([(i, 220), (i + 520, 1220)], fill=color, width=2)
    for r in [360, 560, 760]:
        draw.ellipse((W - r // 2, 120 - r // 2, W + r // 2, 120 + r // 2), outline=color, width=2)


def text_bbox(draw, xy, text, font):
    return draw.textbbox(xy, text, font=font)


def fit_font(draw, text: str, max_width: int, start: int, min_size: int = 54):
    size = start
    while size >= min_size:
        font = load_font(size, bold=True)
        lines = wrap_text(draw, text, font, max_width)
        max_line = max((draw.textlength(line, font=font) for line in lines), default=0)
        if max_line <= max_width and len(lines) <= 5:
            return font
        size -= 4
    return load_font(min_size, bold=True)


def wrap_text(draw, text: str, font, max_width: int) -> list[str]:
    words = text.replace(" — ", " - ").split()
    lines: list[str] = []
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        if draw.textlength(test, font=font) <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            # break very long single words if needed
            if draw.textlength(word, font=font) > max_width:
                chunks = textwrap.wrap(word, width=12)
                lines.extend(chunks[:-1])
                line = chunks[-1]
            else:
                line = word
    if line:
        lines.append(line)
    return lines


def draw_wrapped(draw, text: str, xy: tuple[int, int], font, fill, max_width: int, line_gap: int = 10, anchor: str = "la") -> int:
    x, y = xy
    lines = wrap_text(draw, text, font, max_width)
    total_h = 0
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        h = bbox[3] - bbox[1]
        tx = x
        if anchor == "ma":
            tx = x - draw.textlength(line, font=font) / 2
        draw.text((tx, y + total_h), line, font=font, fill=fill)
        total_h += h + line_gap
    return total_h


def pick_template(asset: dict) -> str:
    primary = " ".join(str(asset.get(k, "")) for k in ["asset_id", "headline"]).lower()
    explicit_rules = [
        ("conversation-log", "notebook"),
        ("deadline", "checklist"),
        ("settlement", "timeline"),
        ("repair-negotiations-seller", "pathways"),
        ("repair-negotiations-strategy", "priority"),
        ("pricing-evidence", "chart"),
        ("unique-homes", "split"),
        ("1031", "timeline"),
        ("pid", "checklist"),
        ("repc-errors-details", "icons"),
        ("short-sales-process", "myth_fact"),
        ("ooda", "loop"),
    ]
    for token, template in explicit_rules:
        if token in primary:
            return template

    hay = " ".join(str(asset.get(k, "")) for k in ["headline", "format", "visual_direction", "body_copy"]).lower()
    for pattern, template in TEMPLATE_BY_KEYWORD:
        if re.search(pattern, hay):
            return template
    return "icons"


def draw_brand(draw, palette, asset):
    """Draw a non-branded, agent-postable kicker.

    These images are meant to be posted by an individual agent, so the canvas
    must not carry Broker Brain, brokerage, or platform branding. The small top
    label acts like native social editorial context, not a logo.
    """
    eyebrow_font = load_font(30)
    label = str(asset.get("series_label", "Real estate note")).upper()[:38]
    draw.text((SAFE_X, 82), label, font=eyebrow_font, fill=palette["muted"])


def draw_cta(draw, palette, text):
    font = load_font(38, True)
    box = (SAFE_X, H - SAFE_BOTTOM - 126, W - SAFE_X, H - SAFE_BOTTOM + 22)
    rounded_rect(draw, box, 34, fill=palette["accent"], outline=None)
    draw_wrapped(draw, text, (W // 2, box[1] + 32), font, palette["bg"], box[2] - box[0] - 64, 6, anchor="ma")


def draw_headline_block(draw, palette, asset):
    headline = asset.get("headline", "")
    subheadline = asset.get("subheadline", "")
    hfont = fit_font(draw, headline, W - 2 * SAFE_X, 102)
    y = 250
    used = draw_wrapped(draw, headline, (SAFE_X, y), hfont, palette["fg"], W - 2 * SAFE_X, 12)
    sfont = load_font(42)
    draw_wrapped(draw, subheadline, (SAFE_X, y + used + 34), sfont, palette["muted"], W - 2 * SAFE_X, 10)
    return y + used + 160


def draw_loop(draw, palette, asset, y):
    steps = ["OBSERVE", "ORIENT", "DECIDE", "ACT"]
    x0 = SAFE_X + 40
    y0 = max(y + 50, 760)
    for i, step in enumerate(steps):
        cy = y0 + i * 155
        draw.line((x0 + 28, y0, x0 + 28, y0 + 3 * 155), fill=palette["accent"], width=5)
        draw.ellipse((x0, cy - 28, x0 + 56, cy + 28), fill=palette["accent"])
        draw.text((x0 + 92, cy - 32), step, font=load_font(46, True), fill=palette["fg"])
    body = asset.get("body_copy", "")
    if body:
        draw_wrapped(draw, body, (SAFE_X + 40, y0 + 670), load_font(46, True), palette["accent"], W - 2 * SAFE_X, 10)


def draw_checklist(draw, palette, asset, y):
    body = asset.get("body_copy", "")
    parts = re.split(r"\?\s+|\.\s+", body)
    items = [p.strip(" ?:. ") for p in parts if len(p.strip()) > 3][:3]
    cleaned = []
    for item in items:
        item = re.sub(r"^(Three questions before any deadline|Three questions to ask):\s*", "", item, flags=re.I)
        item = re.sub(r"^(How much) is it$", r"\1 is it?", item, flags=re.I)
        item = re.sub(r"^(How long) does it last$", r"\1 does it last?", item, flags=re.I)
        if not item.endswith("?") and re.match(r"^(What|Is|How|Who|When|Where|Why)\b", item):
            item += "?"
        cleaned.append(item)
    items = cleaned
    if not items:
        items = ["Know the risk", "Ask the right question", "Plan before you sign"]
    y0 = max(y + 30, 790)
    for item in items:
        box = (SAFE_X, y0, W - SAFE_X, y0 + 132)
        rounded_rect(draw, box, 30, fill=palette["bg"], outline=palette["accent"], width=3)
        draw.ellipse((SAFE_X + 34, y0 + 36, SAFE_X + 94, y0 + 96), fill=palette["accent"])
        draw.text((SAFE_X + 50, y0 + 38), "✓", font=load_font(44, True), fill=palette["bg"])
        draw_wrapped(draw, item, (SAFE_X + 126, y0 + 36), load_font(40, True), palette["fg"], W - 2 * SAFE_X - 160, 6)
        y0 += 168


def draw_myth_fact(draw, palette, asset, y):
    body = asset.get("body_copy", "")
    myth = "Short sales are fast deals."
    fact = "Lender approval is required and takes time."
    m = re.search(r"Myth:\s*(.*?)\.\s*Fact:\s*(.*)", body)
    if m:
        myth, fact = m.group(1).strip() + ".", m.group(2).strip()
    y0 = max(y, 720)
    top = (SAFE_X, y0, W - SAFE_X, y0 + 290)
    bottom = (SAFE_X, y0 + 330, W - SAFE_X, y0 + 660)
    rounded_rect(draw, top, 42, fill=(255, 120, 120, 45), outline="#F59E8B", width=4)
    rounded_rect(draw, bottom, 42, fill=(120, 190, 150, 55), outline=palette["accent2"], width=4)
    draw.text((SAFE_X + 40, y0 + 36), "MYTH", font=load_font(42, True), fill="#F59E8B")
    draw_wrapped(draw, myth, (SAFE_X + 40, y0 + 105), load_font(48, True), palette["fg"], W - 2 * SAFE_X - 80, 8)
    draw.text((SAFE_X + 40, y0 + 370), "FACT", font=load_font(42, True), fill=palette["accent"])
    draw_wrapped(draw, fact, (SAFE_X + 40, y0 + 440), load_font(48, True), palette["fg"], W - 2 * SAFE_X - 80, 8)


def draw_notebook(draw, palette, asset, y):
    y0 = max(y, 720)
    page = (SAFE_X + 20, y0, W - SAFE_X - 20, y0 + 700)
    rounded_rect(draw, page, 32, fill="#FFFDF8", outline=palette["accent"], width=5)
    draw.line((page[0] + 90, page[1], page[0] + 90, page[3]), fill="#F4B4A6", width=3)
    items = ["Date", "Time", "Who you spoke with", "What they said"]
    for i, item in enumerate(items):
        yy = y0 + 110 + i * 120
        draw.line((page[0] + 130, yy + 55, page[2] - 60, yy + 55), fill="#C9D5E4", width=3)
        draw.text((page[0] + 130, yy), f"✓ {item}", font=load_font(44, True), fill="#17212B")


def draw_icons(draw, palette, asset, y):
    labels = ["Inclusions", "Deadlines", "Blank spaces"]
    y0 = max(y, 760)
    xs = [W // 2, W // 2, W // 2]
    symbols = ["⌂", "◷", "□"]
    for i, label in enumerate(labels):
        cy = y0 + i * 170
        draw.ellipse((SAFE_X, cy - 58, SAFE_X + 116, cy + 58), fill=palette["accent"])
        draw.text((SAFE_X + 30, cy - 45), symbols[i], font=load_font(62, True), fill=palette["bg"])
        draw.text((SAFE_X + 150, cy - 35), label, font=load_font(54, True), fill=palette["fg"])
    body = asset.get("body_copy", "")
    draw_wrapped(draw, body, (SAFE_X, y0 + 570), load_font(38), palette["muted"], W - 2 * SAFE_X, 8)


def draw_timeline(draw, palette, asset, y):
    y0 = max(y + 80, 850)
    x1, x2 = SAFE_X + 120, W - SAFE_X - 120
    draw.line((x1, y0, x2, y0), fill=palette["accent"], width=10)
    for x, label in [(x1, "NOW"), (x2, "FUTURE")]:
        draw.ellipse((x - 55, y0 - 55, x + 55, y0 + 55), fill=palette["accent"])
        draw_wrapped(draw, label, (x, y0 + 85), load_font(36, True), palette["fg"], 260, anchor="ma")
    body = asset.get("body_copy", "")
    draw_wrapped(draw, body, (SAFE_X, y0 + 230), load_font(46, True), palette["fg"], W - 2 * SAFE_X, 10, anchor="la")


def draw_priority(draw, palette, asset, y):
    items = ["Safety", "Function", "Major defects"]
    symbols = ["盾", "⚙", "!"]
    y0 = max(y, 780)
    for i, item in enumerate(items):
        x = SAFE_X + i * 304
        draw.ellipse((x, y0, x + 210, y0 + 210), fill=palette["accent"])
        draw_wrapped(draw, symbols[i], (x + 105, y0 + 50), load_font(74, True), palette["bg"], 180, anchor="ma")
        draw_wrapped(draw, item, (x + 105, y0 + 245), load_font(36, True), palette["fg"], 250, anchor="ma")
    draw_wrapped(draw, asset.get("body_copy", ""), (SAFE_X, y0 + 460), load_font(52, True), palette["fg"], W - 2 * SAFE_X, 10)


def draw_pathways(draw, palette, asset, y):
    y0 = max(y, 800)
    center = (W // 2, y0 + 120)
    draw.ellipse((center[0] - 72, center[1] - 72, center[0] + 72, center[1] + 72), fill=palette["accent"])
    labels = ["Fix it", "Credit it", "Explain why not"]
    points = [(SAFE_X + 150, y0 + 420), (W // 2, y0 + 520), (W - SAFE_X - 150, y0 + 420)]
    for p, label in zip(points, labels):
        draw.line((center[0], center[1], p[0], p[1] - 60), fill=palette["accent"], width=8)
        rounded_rect(draw, (p[0] - 138, p[1] - 55, p[0] + 138, p[1] + 70), 28, fill=(255,255,255,45), outline=palette["accent"], width=3)
        draw_wrapped(draw, label, (p[0], p[1] - 18), load_font(34, True), palette["fg"], 230, anchor="ma")


def draw_chart(draw, palette, asset, y):
    y0 = max(y, 780)
    bars = [280, 440, 350]
    labels = ["Location", "Condition", "Timing"]
    x0 = SAFE_X + 80
    for i, bh in enumerate(bars):
        x = x0 + i * 260
        rounded_rect(draw, (x, y0 + 470 - bh, x + 140, y0 + 470), 24, fill=palette["accent"], outline=None)
        draw_wrapped(draw, labels[i], (x + 70, y0 + 515), load_font(33, True), palette["fg"], 220, anchor="ma")
    draw.line((SAFE_X, y0 + 470, W - SAFE_X, y0 + 470), fill=palette["muted"], width=4)


def draw_split(draw, palette, asset, y):
    y0 = max(y, 720)
    rounded_rect(draw, (SAFE_X, y0, W - SAFE_X, y0 + 290), 34, fill=(255,255,255,55), outline=None)
    rounded_rect(draw, (SAFE_X, y0 + 330, W - SAFE_X, y0 + 665), 34, fill=(255,255,255,90), outline=palette["accent"], width=4)
    draw.text((SAFE_X + 44, y0 + 52), "GENERIC ESTIMATE", font=load_font(40, True), fill=palette["muted"])
    draw_wrapped(draw, "Sees basic comps. Misses the weird stuff.", (SAFE_X + 44, y0 + 130), load_font(36, True), palette["fg"], W - 2*SAFE_X - 88, 8)
    draw.text((SAFE_X + 44, y0 + 382), "AGENT PRICING REVIEW", font=load_font(40, True), fill=palette["muted"])
    body = asset.get("body_copy", "")
    draw_wrapped(draw, body, (SAFE_X + 44, y0 + 470), load_font(37, True), "#102033", W - 2*SAFE_X - 88, 8)


TEMPLATE_DRAWERS = {
    "loop": draw_loop,
    "checklist": draw_checklist,
    "myth_fact": draw_myth_fact,
    "notebook": draw_notebook,
    "icons": draw_icons,
    "timeline": draw_timeline,
    "priority": draw_priority,
    "pathways": draw_pathways,
    "chart": draw_chart,
    "split": draw_split,
}


def render_asset(asset: dict, idx: int, output_dir: Path) -> dict:
    palette = PALETTES[idx % len(PALETTES)]
    template = pick_template(asset)

    img = Image.new("RGB", (W, H), hex_to_rgb(palette["bg"]))
    draw_gradient_bg(img, palette)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    draw_subtle_pattern(odraw, palette)
    # Convert back to RGB before drawing typography/cards. Drawing semi-transparent
    # RGBA fills directly onto an RGBA canvas can leave translucent pixels that
    # flatten against white later, washing out dark templates.
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    # main safe-area frame
    rounded_rect(draw, (54, 54, W - 54, H - 54), 58, fill=None, outline=palette["accent"], width=2)

    draw_brand(draw, palette, asset)
    y = draw_headline_block(draw, palette, asset)
    TEMPLATE_DRAWERS.get(template, draw_icons)(draw, palette, asset, y)
    draw_cta(draw, palette, asset.get("cta", "DM me to talk through your next move."))

    name = str(asset.get("asset_id") or asset.get("headline") or "asset")
    out = output_dir / f"{slugify(name)}.png"
    output_dir.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(out, "PNG", optimize=True)
    return {
        "asset_id": asset.get("asset_id"),
        "headline": asset.get("headline"),
        "source_id": asset.get("source_id"),
        "template": template,
        "path": str(out.relative_to(ROOT)),
        "width": W,
        "height": H,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default=str(DEFAULT_INPUT), help="social asset JSON file")
    ap.add_argument("--output", default=str(DEFAULT_OUTPUT), help="directory for PNG output")
    ap.add_argument("--limit", type=int, default=0, help="optional number of assets to render")
    args = ap.parse_args()

    src = Path(args.input)
    if not src.is_absolute():
        src = ROOT / src
    out = Path(args.output)
    if not out.is_absolute():
        out = ROOT / out
    data = json.loads(src.read_text())
    assets = data.get("assets", [])
    if args.limit:
        assets = assets[: args.limit]
    manifest = {
        "batch_id": data.get("batch_id"),
        "source_json": str(src.relative_to(ROOT)) if src.is_relative_to(ROOT) else str(src),
        "asset_size": "1080x1920",
        "rendered_count": len(assets),
        "assets": [],
    }
    out.mkdir(parents=True, exist_ok=True)
    for stale in out.glob("*.png"):
        stale.unlink()
    for idx, asset in enumerate(assets):
        manifest["assets"].append(render_asset(asset, idx, out))
    manifest_path = out / "render-manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
    print(json.dumps({"rendered": len(assets), "output": str(out), "manifest": str(manifest_path)}, indent=2))


if __name__ == "__main__":
    main()
