import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { usePageSeo } from "@/hooks/usePageSeo";

const CaseStudiesIndex = () => {
  const canonical = "https://orthoautomate.online/case-studies";
  usePageSeo({
    title: "Case Studies — Real Dental Clinic Results | OrthoAutomate",
    description:
      "Real case studies from private dental clinics using OrthoAutomate: $42K recovered in 90 days, 8× lead-to-consult conversion, missed-call rates from 31% to 2%.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: caseStudies.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://orthoautomate.online/case-studies/${c.slug}`,
          name: c.headline,
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container-px mx-auto max-w-5xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]}
          />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Real clinics. Real recovered revenue.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Every case study below is a named OrthoAutomate client with tracked,
            verified results from their PMS and phone-system data.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-1">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="block rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {c.service} · {c.location}
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-foreground">
                  {c.headline}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.clinic} · {c.size}
                </p>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "{c.quote}"
                </blockquote>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {c.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground"
                    >
                      <strong className="text-foreground">{m.value}</strong>{" "}
                      {m.label}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-semibold text-primary">
                  Read the full case study →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export const CaseStudyPage = () => {
  const { slug = "" } = useParams();
  const c = getCaseStudyBySlug(slug);
  const canonical = `https://orthoautomate.online/case-studies/${slug}`;

  usePageSeo({
    title: c
      ? `${c.headline} — ${c.clinic} | OrthoAutomate Case Study`
      : "Case Study | OrthoAutomate",
    description: c
      ? `${c.quote.substring(0, 155)}`
      : "",
    canonical,
    schemas: c
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${canonical}#article`,
            headline: c.headline,
            description: c.quote,
            author: {
              "@type": "Organization",
              name: "OrthoAutomate",
              url: "https://orthoautomate.online",
            },
            publisher: {
              "@type": "Organization",
              name: "OrthoAutomate",
              url: "https://orthoautomate.online",
              logo: {
                "@type": "ImageObject",
                url: "https://orthoautomate.online/favicon.png",
              },
            },
            url: canonical,
            mainEntityOfPage: canonical,
            image: "https://orthoautomate.online/og-image.jpg",
            about: {
              "@type": "Service",
              name: c.service,
              provider: { "@type": "Organization", name: "OrthoAutomate" },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: "OrthoAutomate",
              url: "https://orthoautomate.online",
            },
            author: {
              "@type": "Person",
              name: c.clientName,
              worksFor: { "@type": "Organization", name: c.clinic },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: c.quote,
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
                name: "Case Studies",
                item: "https://orthoautomate.online/case-studies",
              },
              { "@type": "ListItem", position: 3, name: c.clinic, item: canonical },
            ],
          },
        ]
      : [],
  });

  if (!c) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Case Studies", to: "/case-studies" },
              { label: c.clinic },
            ]}
          />

          <header className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {c.service} · {c.location}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {c.headline}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {c.clinic} · {c.size} · {c.durationDays}-day result
            </p>
          </header>

          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-soft"
              >
                <div className="font-display text-3xl font-bold text-gradient-accent md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </section>

          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-card-soft">
            <p className="font-display text-xl italic leading-snug text-foreground md:text-2xl">
              "{c.quote}"
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — {c.clientName}, {c.clinic}
            </footer>
          </blockquote>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground">
              The challenge
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.challenge}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              What we installed
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.solution}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              The result
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.result}
            </p>
          </section>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Want results like {c.clinic}?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Start with a free Revenue Leak Audit — we'll show you exactly how
              much your clinic is losing each month.
            </p>
            <Link
              to="/?focus=all#audit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get my free audit
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudiesIndex;
