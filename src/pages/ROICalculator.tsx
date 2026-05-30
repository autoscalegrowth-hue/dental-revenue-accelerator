import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import { usePageSeo } from "@/hooks/usePageSeo";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const ROICalculator = () => {
  const canonical = "https://orthoautomate.online/roi-calculator";

  // Inputs
  const [missedCalls, setMissedCalls] = useState(80); // per month
  const [bookingRate, setBookingRate] = useState(40); // % of recovered calls that book
  const [newPatientValue, setNewPatientValue] = useState(900); // $ first-visit production
  const [unacceptedPlanValue, setUnacceptedPlanValue] = useState(150000); // $ stuck in PMS
  const [reactivationRate, setReactivationRate] = useState(18); // %
  const [monthlyAdLeads, setMonthlyAdLeads] = useState(40);
  const [currentLeadBook, setCurrentLeadBook] = useState(15); // %
  const [aiLeadBook, setAiLeadBook] = useState(30); // % after AI

  const recoveredCallRevenue = useMemo(
    () => missedCalls * (bookingRate / 100) * newPatientValue,
    [missedCalls, bookingRate, newPatientValue]
  );
  const treatmentRevenue = useMemo(
    () => (unacceptedPlanValue * (reactivationRate / 100)) / 12, // monthly slice
    [unacceptedPlanValue, reactivationRate]
  );
  const leadRevenue = useMemo(
    () =>
      monthlyAdLeads * ((aiLeadBook - currentLeadBook) / 100) * newPatientValue,
    [monthlyAdLeads, aiLeadBook, currentLeadBook, newPatientValue]
  );
  const monthlyTotal = recoveredCallRevenue + treatmentRevenue + leadRevenue;
  const annualTotal = monthlyTotal * 12;

  usePageSeo({
    title: "Dental Revenue Recovery ROI Calculator | OrthoAutomate",
    description:
      "Calculate exactly how much revenue your dental clinic is losing to missed calls, unaccepted treatment plans, and slow ad lead response — and what AI recovery would return.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "OrthoAutomate Dental Revenue ROI Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: canonical,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://orthoautomate.online/" },
          { "@type": "ListItem", position: 2, name: "ROI Calculator", item: canonical },
        ],
      },
    ],
  });

  type FieldProps = {
    label: string;
    value: number;
    onChange: (n: number) => void;
    min: number;
    max: number;
    step: number;
    suffix?: string;
    prefix?: string;
  };
  const Field = ({ label, value, onChange, min, max, step, suffix, prefix }: FieldProps) => (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="font-display text-base font-semibold text-foreground">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-2 w-full accent-primary"
      />
    </label>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-4xl pb-24 md:pb-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "ROI Calculator" }]} />

          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Dental Revenue Recovery ROI Calculator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Three sliders. One honest dollar figure. Tune the inputs to match your clinic.
            </p>
          </header>

          <QuickAnswer
            question="How much revenue can a dental clinic recover with AI automation?"
            answer="Most private dental clinics doing $800K–$3M/year recover $30,000–$150,000 annually across missed-call capture, treatment-plan follow-up, and faster ad-lead response. The exact number depends on missed-call volume, unaccepted treatment backlog, and current lead response time — use the calculator below to estimate yours."
          />

          {/* Calculator */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Missed calls
              </h2>
              <div className="mt-5 space-y-5">
                <Field label="Missed calls per month" value={missedCalls} onChange={setMissedCalls} min={0} max={500} step={5} />
                <Field label="% of recovered calls that book" value={bookingRate} onChange={setBookingRate} min={0} max={100} step={5} suffix="%" />
                <Field label="Avg new-patient first-visit value" value={newPatientValue} onChange={setNewPatientValue} min={100} max={5000} step={50} prefix="$" />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Recovered: <strong className="text-foreground">{fmt(recoveredCallRevenue)}/mo</strong>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Unaccepted treatment plans
              </h2>
              <div className="mt-5 space-y-5">
                <Field label="Total $ in unaccepted plans (PMS backlog)" value={unacceptedPlanValue} onChange={setUnacceptedPlanValue} min={10000} max={2000000} step={5000} prefix="$" />
                <Field label="Reactivation rate" value={reactivationRate} onChange={setReactivationRate} min={0} max={40} step={1} suffix="%" />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Recovered: <strong className="text-foreground">{fmt(treatmentRevenue)}/mo</strong> (annualized over 12 months)
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8 md:col-span-2">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Paid ad lead conversion
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <Field label="Monthly ad leads" value={monthlyAdLeads} onChange={setMonthlyAdLeads} min={0} max={500} step={5} />
                <Field label="Current book rate" value={currentLeadBook} onChange={setCurrentLeadBook} min={0} max={100} step={1} suffix="%" />
                <Field label="Book rate after AI" value={aiLeadBook} onChange={setAiLeadBook} min={0} max={100} step={1} suffix="%" />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Recovered: <strong className="text-foreground">{fmt(leadRevenue)}/mo</strong>
              </p>
            </div>
          </section>

          {/* Result */}
          <section
            aria-label="Estimated recovery"
            className="mt-10 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center md:p-10"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Your estimated recovery
            </div>
            <div className="mt-3 font-display text-5xl font-bold text-foreground md:text-6xl">
              {fmt(monthlyTotal)}<span className="text-2xl text-muted-foreground">/mo</span>
            </div>
            <div className="mt-2 text-lg text-muted-foreground">
              ≈ <strong className="text-foreground">{fmt(annualTotal)}</strong> per year
            </div>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/?focus=all#audit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a 15-Minute Revenue Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/missed-call-recovery-for-dental-clinics"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                See How It Works
              </Link>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground md:p-8">
            <h2 className="font-display text-base font-semibold text-foreground">
              How this calculator works
            </h2>
            <p className="mt-2">
              <strong>Missed calls:</strong> missed calls × booking rate × new-patient value.
              {" "}
              <strong>Treatment plans:</strong> unaccepted backlog × reactivation rate, divided by 12 to annualize per month.
              {" "}
              <strong>Lead conversion:</strong> monthly ad leads × (AI book rate – current book rate) × new-patient value.
              {" "}
              All assumptions come from observed ranges across dental practices; your results will vary. This is an estimate, not a guarantee — book a free Revenue Audit and we'll calculate the real figure from your call logs and PMS data.
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ROICalculator;
