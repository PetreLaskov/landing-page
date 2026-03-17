# AI Consulting Landing Page

## Quick Start
```bash
npm run dev    # Start dev server (localhost:4321)
npm run build  # Production build → dist/
```

## Current State
- **Phase**: 6 COMPLETE — FinalCta (Cal.com + Formspree form) + Footer
- **Next**: Phase 7 — Hardening (a11y, perf, robots.txt, OG image)
- **Last commit**: see `git log --oneline -1`

## Tech Stack
- Astro 6.x (static site, zero client JS)
- Tailwind CSS v4.2 (CSS-first config via `@tailwindcss/vite`)
- @astrojs/sitemap (auto-generates sitemap on build)
- Cloudflare Pages (deployment target, not yet configured)

## Architecture
- `src/layouts/BaseLayout.astro` — HTML shell, meta tags, OG/Twitter cards, imports global.css
- `src/pages/index.astro` — Single page, imports components (placeholder comments mark where each goes)
- `src/components/` — One component per section (Header, Hero, Problem, Solution, etc.)
- `src/data/` — Business content separated from markup (copy.ts for section text, pricing.ts, faq.ts, schema.ts)
- `src/styles/global.css` — Tailwind v4 import + custom theme (Phase 2)

## Phase Plan
1. ~~Scaffold~~ DONE
2. ~~Data + Design System~~ DONE — pricing.ts, faq.ts, schema.ts, Tailwind v4 theme
3. ~~Above the Fold~~ DONE — Header, Hero, Problem + copy.ts data file
4. ~~Middle Sections~~ DONE — Solution, HowItWorks, CaseStudy
5. ~~Pricing + About + FAQ~~ DONE — 3 components, about copy data, 4 JSON-LD schemas injected
6. ~~CTAs + Contact~~ DONE — FinalCta (Cal.com link-out + Formspree form), Footer, copy data
7. Hardening — a11y, perf, robots.txt, OG image
8. Deploy — GitHub repo, Cloudflare Pages
9. Polish — final copy, favicon, legal
10. Verify — all links, forms, Lighthouse 95+

## Business Context
- Owner: Petre Laskov, AI consultant, Skopje
- Product: Custom AI agent environments (Meta-Architecture v7)
- Tiers: Personal EUR 149 / Professional EUR 499 / Custom EUR 2k+
- Proof case: MONIV International (manufacturing)
- CTA: Cal.com discovery call + Formspree contact form

## Key Decisions
- Zero client JS policy
- System fonts only (no web fonts)
- Cal.com link-out (not inline embed)
- Cloudflare Web Analytics only (no cookie banner)
- EUR pricing, English only
- Content in data files, not in component markup
- PAS copy framework (Problem-Agitate-Solution)
