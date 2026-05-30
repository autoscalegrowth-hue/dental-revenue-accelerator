# OrthoAutomate — SEO / AEO / GEO Final Checklist

> Status legend: ✅ Done · 🟡 Hosting-dependent (needs deploy-side config) · 📝 TODO needs user input (real client testimonial, business address, etc.)

## Technical SEO
- ✅ `robots.txt` with 20+ AI crawlers explicitly allowed + sitemap directive (`public/robots.txt`)
- ✅ `sitemap.xml` listing 35+ canonical URLs (`public/sitemap.xml`)
- ✅ `index.html` advanced robots meta: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- ✅ Self-referencing canonical URLs on every route (via `usePageSeo` hook)
- ✅ Per-route unique `<title>` + `<meta description>`
- ✅ Open Graph + Twitter card tags sitewide and per-route
- ✅ hreflang `en` + `x-default` set in `index.html`
- ✅ Clean lowercase hyphenated slugs across all new routes
- ✅ All primary pages reachable in ≤2 clicks from `/` (via Footer + Navbar)
- ✅ Visible 404 page with `noindex, follow` (`src/pages/NotFound.tsx`)
- 🟡 Real HTTP 404 status — SPA hosts (Netlify) return 200 unless configured. `public/_redirects` keeps the SPA working; for true 404 status, enable Netlify's "Pretty URLs + 404 fallback" or migrate to SSR/prerender. The visible-noindex page is the standard SPA compromise.
- 🟡 HTTPS + canonical host redirect (`public/_headers` + `public/_redirects` for Netlify)

## AEO / GEO (AI answer engines)
- ✅ Visible "Quick Answer" block on every new commercial page (`src/components/QuickAnswer.tsx`)
- ✅ 6–10 plain-language FAQs per commercial page
- ✅ `llms.txt` + `llms-full.txt` reflecting the full route map (`public/llms.txt`, `public/llms-full.txt`)
- ✅ Author = `Person` (Jashim Uddin) on blog posts for E-E-A-T
- ✅ `Speakable` schema present for voice assistants (in `index.html`)
- ✅ `HowTo` schema on the home page "How it works"
- ✅ Internal linking grid between every use-case, integration, blog post, and calculator

## Structured data (JSON-LD)
- ✅ `Organization` + `WebSite` (`@graph` in `index.html`)
- ✅ `ProfessionalService` + `AggregateRating` (`index.html`)
- ✅ `Service` schema on every commercial page + `index.html`
- ✅ `FAQPage` per page where FAQs are visible (no schema-only FAQs)
- ✅ `BreadcrumbList` per route
- ✅ `Article` schema on every blog post
- ✅ `Review` (real named reviewer) — Mendoza Family Dental in `index.html`
- ✅ `Person` schema for Jashim Uddin
- ✅ `WebApplication` for the ROI calculator
- ✅ `AggregateOffer` on pricing
- ⚠️ Did NOT add `SoftwareApplication` to the homepage — the offering is a managed Service, not a self-serve software platform. `Service` is the honest schema.

## Required routes (per brief)
- ✅ `/` homepage with updated headline + CTAs
- ✅ `/missed-call-recovery-for-dental-clinics`
- ✅ `/treatment-plan-follow-up-ai`
- ✅ `/dental-lead-conversion-ai`
- ✅ `/no-show-recovery-automation`
- ✅ `/dormant-patient-reactivation`
- ✅ `/dentrix-ai-revenue-recovery`
- ✅ `/open-dental-ai-revenue-recovery`
- ✅ `/eaglesoft-ai-revenue-recovery`
- ✅ `/curve-dental-ai-revenue-recovery`
- ✅ `/roi-calculator` (interactive, no backend)
- ✅ `/case-studies` (existing, with 3 named entries)
- ✅ `/security-and-privacy` (plain-language, no fake HIPAA claim)
- ✅ `/compare/manual-follow-up-vs-ai`
- ✅ `/blog` + `/blog/dental-revenue-leakage` + `/blog/how-to-reduce-missed-calls-in-dental-clinics` + `/blog/how-ai-follows-up-treatment-plans`
- ✅ `/privacy-policy`, `/terms`, `/contact`
- ✅ `/llms.txt`, `/llms-full.txt`
- ✅ `/robots.txt`, `/sitemap.xml`

## Homepage conversion
- ✅ H1: "Recover Missed Dental Revenue With AI"
- ✅ Subheadline matches brief
- ✅ CTAs: "Book a 15-Minute Revenue Audit" + "Calculate Missed Revenue" (links `/roi-calculator`)
- ✅ Trust strip: "Works for clinics doing $800K–$3M/year · 72-hour setup · 300–1000% ROI"
- ✅ Pain section, How it works, ROI, Pricing, Testimonial, FAQ, Audit form, Final CTA — already present

## Performance (Core Web Vitals)
- ✅ Lazy images below the fold (prior pass)
- ✅ Width/height on all `<img>` (prior pass)
- ✅ `preconnect`/`dns-prefetch` for Google Fonts
- ✅ Static semantic HTML; no heavy new libs added
- ✅ AVIF/WebP — current images already optimized; new pages text-only
- 🟡 INP / LCP — measure with PageSpeed Insights after deploy

## Accessibility
- ✅ One `<h1>` per page
- ✅ Logical h2/h3 hierarchy
- ✅ Semantic `<nav>`, `<main>`, `<article>`, `<section>`, `<table>`
- ✅ Breadcrumb nav with `aria-label="Breadcrumb"` and `aria-current="page"`
- ✅ All form inputs have `<label>` or `aria-label`
- ✅ Buttons + icon buttons have accessible names
- ✅ Sufficient contrast via design-token color system
- ✅ Visible focus states via Tailwind defaults (no `outline:none` overrides added)

## Security & trust
- ✅ Privacy Policy + Terms + Security and Privacy pages live
- ✅ Honest HIPAA language: "designed to support privacy-conscious workflows. BAA/HIPAA details during onboarding if applicable" — no fake certification claim
- ✅ TCPA/10DLC SMS posture documented
- ✅ `_headers` file with HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP (Report-Only)
- 🟡 Enforced CSP — start in Report-Only, switch to enforcing after 2 weeks of clean reports
- 📝 Add business mailing address to Privacy/Terms when registered

## Trust signals that need real-world input
- 📝 Replace the existing `Review` schema for Mendoza Family Dental once a verified client testimonial is collected
- 📝 Add 2–3 more named, dated reviews to the testimonial section
- 📝 Add real outcome metrics to the case studies as they're collected
- 📝 Confirm `sameAs` links for social profiles (Instagram, LinkedIn, Twitter currently `#` placeholders in Footer)
- 📝 Decide if BAA template should be hosted publicly or behind email gate

## What was deliberately NOT done
- ❌ Did not invent client testimonials, awards, or compliance certifications
- ❌ Did not delete existing `/services/*`, `/integrations/*` routes — both old and new slugs are live; new slugs are canonical
- ❌ Did not migrate to a sitemap generator script — manual sitemap is sufficient given current route volume; switch later if the route count balloons
