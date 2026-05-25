import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";

const ServicesIndex = () => {
  const canonical = "https://orthoautomate.online/services";
  usePageSeo({
    title: "Services — AI Revenue Recovery for Dental Clinics | OrthoAutomate",
    description:
      "Three done-for-you AI systems for private dental clinics: 24/7 AI receptionist, instant ad-lead response, and treatment-plan follow-up. Live in 72 hours.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://orthoautomate.online/services/${s.slug}`,
          name: s.name,
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
            items={[{ label: "Home", to: "/" }, { label: "Services" }]}
          />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Three AI systems that recover $30K–$150K/year for dental clinics.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Every OrthoAutomate service is done-for-you, integrates with your
            existing PMS, and goes live in 72 hours. Cancel anytime — no
            contracts.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-1">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary md:p-8"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {s.name}
                </h2>
                <p className="mt-2 text-primary">{s.tagline}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  {s.outcomes.map((o) => (
                    <span
                      key={o.label}
                      className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground"
                    >
                      <strong className="text-foreground">{o.value}</strong>{" "}
                      {o.label}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-semibold text-primary">
                  Read full details →
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

export default ServicesIndex;
