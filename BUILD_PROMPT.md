# Build Prompt — Pruthvi Kalyandurg Personal Site

> Paste everything below into your AI build tool (Lovable, v0, Bolt, Cursor, Claude, etc.).
> It is self-contained. Replace bracketed `[...]` placeholders with final copy where noted.

---

## Role & goal

You are a senior front-end engineer and editorial designer. Build a **premium personal-branding website** for **Pruthvi Kalyandurg**, a scientist-founder: a virologist and plant biologist now building an early-stage biotechnology startup. The site should read as crafted and high-end — closer to an editorial magazine feature than a generic academic CV. Reference feel: the flowing, one-page pacing of eggsplain.com. Motion and interactivity should signal deep scientific literacy without feeling like gimmicks.

## Tech constraints

- **Static site, plain HTML/CSS/vanilla JS only.** No frameworks, no build step, no external runtime dependencies. It deploys to GitHub Pages.
- Each page is a **single self-contained `.html` file** with all CSS and JS inlined. The design system (tokens, fonts, theme logic) is duplicated into each file.
- Canvas/JS animations must be lightweight and degrade gracefully.
- Fully responsive, mobile-first. Must look excellent from 360px to 1440px+.
- Accessible: semantic HTML, keyboard-navigable interactions, visible focus states, ARIA where needed, WCAG AA contrast in both themes.

## Pages to build (3 files)

### 1. `index.html` — one-page homepage
A vertically flowing single page with 8 sections, in this order:

1. **Hero** — name, one-line positioning, and an animated `<canvas>` "sequence field" background (subtle drifting nucleotide letters / particle field, low opacity, calm).
2. **About** — short editorial bio of the scientist-founder arc.
3. **Research themes** — 5 editorial rows, each a theme with a short description. Generous whitespace, large type, alternating rhythm.
4. **DNA education interaction (signature centerpiece)** — a rotating double-helix rendered on `<canvas>`. As the visitor advances, **one career/education milestone is "lit" at a time** and a side panel updates with that milestone's detail. Controllable via: arrow keys, clickable navigation dots, and a gentle auto-advance. When `prefers-reduced-motion` is set, replace the rotating helix with a **static vertical ladder** (base-pair rungs) that still steps through milestones. This is the most important and most polished element on the site.
5. **Publications preview** — a few highlighted papers with a link to the full publications page.
6. **Venture preview** — the startup, kept deliberately vague (see stealth rule below). Links to the venture page.
7. **Approach** — how Pruthvi works / thinks.
8. **"Let's talk" contact** — email, LinkedIn, Google Scholar.

### 2. `publications.html`
The full publication list (13 papers; 4 first-author, 2 book chapters) with **filters** (by theme / type / year) and the research themes shown alongside.

### 3. `startup-news.html`
The venture story as a **vertical timeline** with milestones, plus a **"field notes" log**. All copy written abstractly to remain stealth-safe.

## Design system (shared across all files)

- **Theme:** light mode by default with a dark-mode toggle. Set via `data-theme` on `<html>`, persisted in `localStorage`, and respect `prefers-color-scheme` on first load.
- **Palette:**
  - Light: background `#faf8f4` (warm cream), accent `#8a6120` (bronze/gold).
  - Dark: background `#0c0b0f` (near-black), accent `#d4aa60` (soft gold).
  - Shared: a **sage green** accent used specifically for DNA base-pairing visuals.
- **Type:** Playfair Display for display headings, Inter for body. Use fluid `clamp()` sizing throughout.
- **Motion:** restrained, intentional; respect `prefers-reduced-motion` everywhere.

## Content anchors (use these as the real substance)

- **Career arc:** B.Tech Biotechnology (Kalasalingam University) → MSc Biology (Uppsala University) → PhD Virology (SLU, advisor Eugene Savenkov) → Postdoc (SLU Alnarp) → Founder.
- **Contact:** SLU email, LinkedIn (`pruthvikalyandurg`), Google Scholar (profile id `WvfE15YAAAAJ`).
- Treat the education arc as the milestone sequence for the DNA interaction.

## CRITICAL — stealth rule (do not violate)

The startup is in stealth. **Do NOT include the company name, the specific technology, the molecular mechanism, or the target application — anywhere.** Not in copy, not in headings, not in meta tags, not in code comments, not in alt text. Refer to it only as a "stealth startup," "my startup," or "pre-seed biotechnology startup." Keep all venture copy abstract (mission-level, not method-level).

## Deliverables

Three complete, polished `.html` files (`index.html`, `publications.html`, `startup-news.html`), each self-contained and ready to drop into a GitHub Pages repo. Prioritize the homepage and the DNA interaction. Ask me for final bio copy, the 5 research theme titles, and the publication list rather than inventing scientific claims.
