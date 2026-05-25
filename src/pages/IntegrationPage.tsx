import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";
import { getIntegrationBySlug } from "@/data/integrations";
import { usePageSeo } from "@/hooks/usePageSeo";

const IntegrationPage = () => {
  const { slug = "" } = useParams();
  const integration = getIntegrationBySlug(slug);
  const canonical = `https://orthoautomate.online/integrations/${slug}`;

  usePageSeo({
    title: integration
      ? `${integration.name} Integration — OrthoAutomate AI for Dental Clinics`
      : "Integration | OrthoAutomate",
    description: integration?.summary ?? "",
    canonical,
    schemas: integration
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `${integration.name} AI Integration`,
            name: `OrthoAutomate × ${integration.name}`,
            description: integration.summary,
            url: canonical,
            provider: {
              "@type": "Organization",
              name: "OrthoAutomate",
              url: "https://orthoautomate.online",
            },
            areaServed: "Worldwide",
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
                name: "Integrations",
                item: "https://orthoautomate.online/integrations",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: integration.name,
                item: canonical,
              },
            ],
          },
        ]
      : [],
  });

  if (!integration) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Integrations", to: "/integrations" },
              { label: integration.name },
            ]}
          />

          <header className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {integration.vendor}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              OrthoAutomate × {integration.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {integration.summary}
            </p>
          </header>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              How the integration works
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {integration.description}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Supported capabilities
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {integration.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Setup timeline
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {integration.setupTimeline}
            </p>
          </section>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              See it live with your {integration.name} data
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get a free Revenue Leak Audit pulled directly from your{" "}
              {integration.name} reports.
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

export default IntegrationPage;
