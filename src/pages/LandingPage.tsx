// Generic data-driven landing page powering all use-case + PMS integration routes.
// Each route file simply mounts this with a slug.
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import NotFound from "@/pages/NotFound";
import { getLandingPageBySlug } from "@/data/landingPages";
import { usePageSeo } from "@/hooks/usePageSeo";

const LandingPage = ({ slug }: { slug: string }) => {
  const page = getLandingPageBySlug(slug);
  const canonical = `https://orthoautomate.online/${slug}`;

  usePageSeo({
    title: page?.title ?? "OrthoAutomate",
    description: page?.metaDescription ?? "",
    canonical,
    schemas: page
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: page.serviceType,
            name: page.h1,
            description: page.metaDescription,
            url: canonical,
            provider: {
              "@type": "Organization",
              name: "OrthoAutomate",
              url: "https://orthoautomate.online",
            },
            areaServed: "Worldwide",
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Private dental clinics doing $800K–$3M/year in production",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://orthoautomate.online/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: page.breadcrumbLabel,
                item: canonical,
              },
            ],
          },
        ]
      : [],
  });

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-4xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: page.breadcrumbLabel },
            ]}
          />

          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {page.h1}
            </h1>
          </header>

          <QuickAnswer
            question={page.quickAnswer.question}
            answer={page.quickAnswer.answer}
          />

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            {page.intro}
          </p>

          <section
            aria-label="Outcomes"
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {page.outcomes.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-soft"
              >
                <div className="font-display text-3xl font-bold text-gradient-accent md:text-4xl">
                  {o.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {o.label}
                </div>
              </div>
            ))}
          </section>

          <section className="mt-16" aria-labelledby="how-heading">
            <h2
              id="how-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground"
            >
              How it works
            </h2>
            <ol className="mt-6 space-y-5">
              {page.howItWorks.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
                >
                  <div className="font-display text-sm font-bold tracking-widest text-accent">
                    STEP {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16" aria-labelledby="features-heading">
            <h2
              id="features-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground"
            >
              What's included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16" aria-labelledby="best-for-heading">
            <h2
              id="best-for-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground"
            >
              Best for
            </h2>
            <ul className="mt-6 list-inside list-disc space-y-2 pl-2 text-muted-foreground">
              {page.bestFor.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground"
            >
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {page.faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card-soft"
                >
                  <summary className="cursor-pointer font-display text-base font-semibold text-foreground md:text-lg">
                    {f.q}
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <aside
            aria-labelledby="related-heading"
            className="mt-16 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
          >
            <h2
              id="related-heading"
              className="font-display text-xl font-semibold text-foreground"
            >
              Related pages
            </h2>
            <ul className="mt-4 space-y-2">
              {page.internalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary hover:underline">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              See exactly what this would recover for your clinic
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book a 15-minute Revenue Audit — we'll show you the exact dollar
              figure your clinic is losing each month.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/?focus=all#audit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a 15-Minute Revenue Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/roi-calculator"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                Calculate Missed Revenue
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
