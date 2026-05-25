import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { integrations } from "@/data/integrations";
import { usePageSeo } from "@/hooks/usePageSeo";

const IntegrationsIndex = () => {
  const canonical = "https://orthoautomate.online/integrations";
  usePageSeo({
    title: "Integrations — Dentrix, Open Dental, Eaglesoft & Curve | OrthoAutomate",
    description:
      "OrthoAutomate integrates directly with Dentrix, Open Dental, Eaglesoft, and Curve. No software change for your team — fully managed setup in 72 hours.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: integrations.map((i, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://orthoautomate.online/integrations/${i.slug}`,
          name: i.name,
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
            items={[{ label: "Home", to: "/" }, { label: "Integrations" }]}
          />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Works with the dental software you already run.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Direct integrations with the four most-used dental practice
            management systems. No rip-and-replace. No workflow disruption.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {integrations.map((i) => (
              <Link
                key={i.slug}
                to={`/integrations/${i.slug}`}
                className="block rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {i.vendor}
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-foreground">
                  {i.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {i.summary}
                </p>
                <div className="mt-5 text-sm font-semibold text-primary">
                  View integration details →
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

export default IntegrationsIndex;
