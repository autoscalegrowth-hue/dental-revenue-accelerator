import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";
import { getServiceBySlug, services } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";

const ServicePage = () => {
  const { slug = "" } = useParams();
  const service = getServiceBySlug(slug);
  const canonical = `https://orthoautomate.online/services/${slug}`;

  usePageSeo({
    title: service
      ? `${service.name} | OrthoAutomate`
      : "Service | OrthoAutomate",
    description: service?.summary ?? "",
    canonical,
    ogType: "website",
    schemas: service
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.shortName,
            name: service.name,
            description: service.summary,
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
            mainEntity: service.faqs.map((f) => ({
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
                name: "Services",
                item: "https://orthoautomate.online/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.shortName,
                item: canonical,
              },
            ],
          },
        ]
      : [],
  });

  if (!service) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-4xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.shortName },
            ]}
          />

          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {service.tagline}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
          </header>

          <section
            aria-label="Outcomes"
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {service.outcomes.map((o) => (
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
              {service.howItWorks.map((step, i) => (
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
              {service.features.map((f) => (
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
              {service.bestFor.map((b) => (
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
              {service.faqs.map((f) => (
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

          {service.relatedSlugs && service.relatedSlugs.length > 0 && (
            <aside
              aria-labelledby="related-heading"
              className="mt-16 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
            >
              <h2
                id="related-heading"
                className="font-display text-xl font-semibold text-foreground"
              >
                Related services
              </h2>
              <ul className="mt-4 space-y-2">
                {service.relatedSlugs.map((s) => {
                  const rel = services.find((x) => x.slug === s);
                  if (!rel) return null;
                  return (
                    <li key={s}>
                      <Link
                        to={`/services/${rel.slug}`}
                        className="text-primary hover:underline"
                      >
                        {rel.name} →
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              See what this would recover for your clinic
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get a free Revenue Leak Audit — we'll show you the exact dollar
              figure your clinic is losing each month.
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

export default ServicePage;
