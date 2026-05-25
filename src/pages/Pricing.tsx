import { Link } from "react-router-dom";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSeo } from "@/hooks/usePageSeo";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  yearlySavings: number;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "Best for solo practices ($600K–$1.1M)",
    monthly: 699,
    yearly: 566,
    yearlySavings: 1596,
    features: [
      "AI Missed Call Recovery",
      "Automated SMS follow-up",
      "Smart appointment reminders",
      "No-show reduction system",
      "Monthly ROI report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "Best for $1M–$2.5M practices",
    monthly: 1197,
    yearly: 970,
    yearlySavings: 2724,
    highlight: true,
    features: [
      "Everything in Starter, plus:",
      "High-Ticket Treatment Follow-Up Engine",
      "Implant, All-on-4 & cosmetic sequences",
      "Financing nudge automation",
      "Dormant patient AI reactivation",
      "2-way AI chat (24/7)",
      "Priority phone + email support",
      "Weekly ROI reporting",
    ],
  },
  {
    name: "Elite",
    tagline: "Best for mid-size & specialty ($2.5M+)",
    monthly: 1897,
    yearly: 1537,
    yearlySavings: 4320,
    features: [
      "Everything in Growth, plus:",
      "Custom AI receptionist voice agent",
      "Multi-location support",
      "Google review automation",
      "Dedicated success manager",
      "Quarterly strategy calls",
      "Custom PMS integrations",
    ],
  },
];

const PricingPage = () => {
  const canonical = "https://orthoautomate.online/pricing";
  usePageSeo({
    title: "Pricing — AI Revenue Recovery Plans for Dental Clinics | OrthoAutomate",
    description:
      "Simple month-to-month pricing for OrthoAutomate's AI systems: Starter $566/mo, Growth $970/mo, Elite $1,537/mo (billed yearly). Cancel anytime. 30-day money-back guarantee.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "OrthoAutomate AI Revenue Recovery",
        description:
          "Done-for-you AI systems that recover $30K–$150K/year for private dental clinics: 24/7 AI receptionist, instant ad-lead response, and treatment-plan follow-up.",
        brand: { "@type": "Brand", name: "OrthoAutomate" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "566",
          highPrice: "1897",
          offerCount: "3",
          offers: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: String(p.yearly),
            priceCurrency: "USD",
            url: canonical,
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: p.yearly,
              priceCurrency: "USD",
              unitText: "MONTH",
              billingDuration: "P1Y",
            },
          })),
        },
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
            name: "Pricing",
            item: canonical,
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container-px mx-auto max-w-6xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Pricing" }]}
          />
          <div className="mt-6 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Simple pricing. Outrageous ROI.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Most clinics recover 5–15× their monthly fee within the first 30
              days. Month-to-month — cancel anytime. 100% money-back guarantee
              in your first month.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-primary bg-card shadow-elevated lg:-mt-4 lg:mb-4"
                    : "border-border bg-card shadow-card-soft"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    <Sparkles className="h-3.5 w-3.5" /> Most Popular
                  </div>
                )}
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {plan.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">
                    ${plan.yearly.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="mt-1 text-xs text-primary">
                  Billed yearly · or ${plan.monthly}/mo month-to-month
                </p>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/?focus=all#audit"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start with {plan.name}
                </Link>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-card-soft">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">
                100% Money-Back Guarantee — Month One
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                If our system doesn't fit your practice in the first 30 days —
                for any reason — we refund every dollar. No contracts. No
                lock-in.
              </p>
            </div>
          </div>

          <section className="mt-16" aria-labelledby="includes-heading">
            <h2
              id="includes-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground"
            >
              Every plan includes
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Done-for-you setup in 72 hours",
                "Direct integration with Dentrix, Open Dental, Eaglesoft, Curve",
                "HIPAA-conscious infrastructure",
                "Real human escalation on every conversation",
                "Monthly ROI reporting with recovered-dollar tracking",
                "Month-to-month — no long-term contract",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PricingPage;
