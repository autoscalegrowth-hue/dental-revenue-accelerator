
# OrthoAutomate — Full SEO/AEO/GEO Rebuild Plan

This is a large, multi-file rebuild. I'll execute it in 5 phases so it's reviewable and reversible. The current site already has a strong foundation (blog, services, integrations, pricing, contact, case studies, FAQ, About, robots.txt with 20+ AI bots, sitemap, llms.txt, Person/Article/HowTo/Review/Service schemas). This plan **fills the gaps** specified in your brief rather than re-doing what's already done.

## Gap analysis (what's missing vs. your brief)

| Required | Current state | Action |
|---|---|---|
| 5 use-case landing pages (missed-call, treatment-plan, lead-conv, no-show, dormant) | Only 3 exist under `/services/*` with different slugs | Create 5 new pages at the exact required slugs, reuse `ServicePage` pattern |
| 4 PMS integration pages with required slugs (`/dentrix-ai-revenue-recovery` etc.) | Exist under `/integrations/dentrix` etc. | Add the 4 new top-level slugs (redirect/duplicate-canonical handled via canonical tag pointing to new URL) |
| `/roi-calculator` interactive page | Missing | Build with sliders (missed calls/mo, avg case value, unsold plans) → estimated recovery |
| `/security-and-privacy` | Missing | Plain-language page, no fake HIPAA claims |
| `/compare/manual-follow-up-vs-ai` | Missing | Comparison table page |
| `/privacy-policy`, `/terms`, `/contact` | Contact exists; Privacy/Terms missing | Create Privacy + Terms |
| 3 specific blog posts (dental-revenue-leakage, how-to-reduce-missed-calls, how-ai-follows-up-treatment-plans) | Different slugs exist | Add 3 new articles at required slugs |
| `/llms-full.txt` extended | Exists but should be reviewed | Update if needed |
| Quick Answer block on every commercial page | Missing | Add reusable `<QuickAnswer>` component, place on all service/integration/use-case pages |
| Homepage hero copy change to "Recover Missed Dental Revenue With AI" | Current is different | Update Hero component |
| Robots meta `index, follow, max-image-preview:large…` | Not in index.html | Add to `index.html` head |
| Self-canonical on every page | Done via `usePageSeo` | Verify, no action |
| Security headers (HSTS, CSP, etc.) | Hosting-platform-level | Add `public/_headers` (Netlify) + note this is host-configured |
| 404 returns 404 status | SPA returns 200 | Add `public/_redirects` for Netlify SPA + 404 handling |

## Phase plan

### Phase 1 — Routing & shared components
- `src/components/QuickAnswer.tsx` (reusable AEO block)
- `src/components/seo/RobotsMeta` — add advanced robots meta to `index.html` head
- `src/data/useCases.ts` — content for the 5 use-case pages
- Update `src/App.tsx` with 14 new routes

### Phase 2 — Use-case + integration pages (9 pages)
- `/missed-call-recovery-for-dental-clinics`
- `/treatment-plan-follow-up-ai`
- `/dental-lead-conversion-ai`
- `/no-show-recovery-automation`
- `/dormant-patient-reactivation`
- `/dentrix-ai-revenue-recovery`
- `/open-dental-ai-revenue-recovery`
- `/eaglesoft-ai-revenue-recovery`
- `/curve-dental-ai-revenue-recovery`

Each: H1, Quick Answer, problem, how-it-works, integration list, 6–10 FAQs, internal links, Service + FAQPage + BreadcrumbList JSON-LD, self-canonical, OG tags.

### Phase 3 — Conversion + trust pages
- `/roi-calculator` — interactive sliders, no backend, computes locally
- `/security-and-privacy` — plain language, no fake HIPAA claims
- `/compare/manual-follow-up-vs-ai` — comparison table
- `/privacy-policy`, `/terms` — standard policies with TODO contact placeholders

### Phase 4 — Blog posts (3 new)
- Add 3 articles to `src/data/articles.ts` with the required slugs and content.

### Phase 5 — Homepage copy + infra
- Update `Hero.tsx` headline + CTAs
- Update `index.html`: advanced robots meta, verify Organization/WebSite/Service schemas
- Update `public/sitemap.xml` with all 25 URLs
- Add `public/_headers` (security headers for Netlify) + `public/_redirects` (SPA + 404)
- Update `public/llms.txt` and `public/llms-full.txt` to match new routes
- Update `Footer.tsx` + `Navbar.tsx` so all pages are ≤2 clicks from home

### Phase 6 — Final checklist
A markdown checklist confirming each requirement from your brief: technical SEO, AEO, schema, canonical, performance, a11y, security, trust — with status (Done / TODO needs user input / Hosting-dependent).

## Hard rules I will follow
- No fake testimonials, no fake HIPAA/BAA claims, no fake awards.
- Placeholders use visible TODO comments.
- Static semantic HTML preferred over animation.
- Use existing design tokens (no hardcoded colors).
- No new heavy deps.

## What I will NOT do without your confirmation
- Delete the existing `/services/*`, `/integrations/*`, `/case-studies/*` routes — I'll keep them and add the new slugs alongside (the new ones become canonical; old ones get a canonical pointing to new). If you'd rather hard-redirect old → new, say so.
- Change the visual design system or remove framer-motion entirely (it's already in use; I'll only avoid adding more).

## Scope estimate
~25 new/edited files. I'll batch writes in parallel per phase.

**Approve and I'll start with Phase 1.**
