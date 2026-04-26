import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/links";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number; // per-month price when billed annually
  yearlySavings: number;
  features: string[];
  highlight?: boolean;
  cta: string;
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
    cta: "Start with Starter",
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
    cta: "Get Growth",
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
      "Custom integrations (Dentrix, Open Dental, Eaglesoft)",
    ],
    cta: "Talk to us",
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden bg-surface-darker py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            Pricing · Cancel Anytime
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Simple pricing. <span className="text-gradient">Outrageous ROI.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Most clients recover 5–15× their monthly fee in the first 30 days. No lock-in contracts. Full money-back guarantee in month one.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !yearly ? "bg-white text-surface-darker" : "text-white/70 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                yearly ? "bg-white text-surface-darker" : "text-white/70 hover:text-white"
              }`}
            >
              Yearly <span className="ml-1 text-secondary">Save 19%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl ${
                  plan.highlight
                    ? "border-secondary/50 bg-gradient-to-b from-secondary/10 to-white/[0.02] shadow-elevated lg:-mt-4 lg:mb-4"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-wider text-surface-darker">
                    <Sparkles className="h-3.5 w-3.5" /> Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{plan.tagline}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-white">${price.toLocaleString()}</span>
                  <span className="text-white/60">/mo</span>
                </div>
                <div className="mt-1 h-5 text-xs text-secondary">
                  {yearly ? `Billed yearly · Save $${plan.yearlySavings.toLocaleString()}/yr` : "Billed monthly · Cancel anytime"}
                </div>

                <Button
                  asChild
                  variant={plan.highlight ? "accent" : "outline"}
                  size="lg"
                  className={`mt-6 w-full ${!plan.highlight ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : ""}`}
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                </Button>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
          <div>
            <h4 className="font-display text-lg font-bold text-white">100% Money-Back Guarantee — Month One</h4>
            <p className="mt-1 text-sm text-white/70">
              If our system doesn't fit your practice in the first 30 days — for any reason — we refund every dollar. No contracts. No lock-in. Our only job is to make you more money than you pay us, every single month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
