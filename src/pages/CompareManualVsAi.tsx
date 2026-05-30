import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import { usePageSeo } from "@/hooks/usePageSeo";

type Row = { dimension: string; manual: string; ai: string; manualWins?: boolean };

const rows: Row[] = [
  { dimension: "Response time (calls)", manual: "Often >2 min; voicemail after hours", ai: "<2 seconds, 24/7/365" },
  { dimension: "Response time (ad leads)", manual: "Hours to days", ai: "Under 60 seconds" },
  { dimension: "Coverage", manual: "Office hours, minus huddles/lunch/sick days", ai: "24/7/365 including weekends and holidays" },
  { dimension: "Cost (single FTE equivalent)", manual: "$40K–$55K/yr salary + benefits + management", ai: "$566–$1,997/mo, month-to-month, no benefits" },
  { dimension: "Treatment plan follow-up", manual: "Sporadic; depends on capacity", ai: "Every plan, every patient, every 30–60 days" },
  { dimension: "Consistency of tone & info", manual: "Varies by staff and day", ai: "Trained once on your tone & services; identical every call" },
  { dimension: "PMS data entry", manual: "Manual typing into Dentrix/Open Dental/Eaglesoft/Curve", ai: "Direct booking into the PMS, no double-entry" },
  { dimension: "Empathy & clinical judgment", manual: "Strong — human relationships matter", ai: "Hands off to humans for clinical/empathy moments", manualWins: true },
  { dimension: "Scaling to new locations", manual: "Hire + train + manage", ai: "Clone the workflow; live in 72 hours" },
  { dimension: "Recovered revenue per year", manual: "Capped by hours in a day", ai: "Typically $30K–$150K recovered for $800K–$3M clinics" },
];

const Compare = () => {
  const canonical = "https://orthoautomate.online/compare/manual-follow-up-vs-ai";

  usePageSeo({
    title: "Manual Follow-Up vs AI: Dental Clinic Comparison | OrthoAutomate",
    description:
      "Honest comparison of manual front-desk follow-up vs AI for dental clinics — response time, coverage, cost, and recovered revenue, across 10 dimensions.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Manual Follow-Up vs AI: Dental Clinic Comparison",
        author: { "@type": "Organization", name: "OrthoAutomate" },
        publisher: { "@type": "Organization", name: "OrthoAutomate", url: "https://orthoautomate.online" },
        datePublished: "2026-05-30",
        dateModified: "2026-05-30",
        url: canonical,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://orthoautomate.online/" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://orthoautomate.online/compare/manual-follow-up-vs-ai" },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-4xl pb-24 md:pb-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Compare: Manual vs AI Follow-Up" }]} />

          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Manual Follow-Up vs AI — Dental Clinic Comparison
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An honest, side-by-side look. We acknowledge where human staff still wins.
            </p>
          </header>

          <QuickAnswer
            question="Should a dental clinic use AI or hire another front-desk staff member?"
            answer="In most cases, the highest ROI move is to keep your front desk for empathy and clinical judgment, and add AI for the work humans can't do reliably: sub-2-second pickup 24/7, sub-60-second lead response, and methodical 30–60 day treatment-plan follow-up on every patient. Cost is typically a fraction of one new FTE, and recovered revenue is $30K–$150K/year for clinics doing $800K–$3M."
          />

          <section className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-card text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-5 py-4">Dimension</th>
                  <th scope="col" className="px-5 py-4">Manual front-desk only</th>
                  <th scope="col" className="px-5 py-4">OrthoAutomate AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.dimension}>
                    <th scope="row" className="px-5 py-4 font-semibold text-foreground align-top">
                      {r.dimension}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground align-top">
                      <div className="flex items-start gap-2">
                        {r.manualWins ? (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-label="Manual advantage" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-label="Manual limitation" />
                        )}
                        <span>{r.manual}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground align-top">
                      <div className="flex items-start gap-2">
                        {r.manualWins ? (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-label="AI limitation" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-label="AI advantage" />
                        )}
                        <span>{r.ai}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">When manual is still the right answer</h2>
            <p>
              Complex clinical conversations, anxious patients, post-op concerns, and the long-term relationship that
              turns a patient into a 20-year advocate — human staff wins, and should keep doing this work. AI should
              free your team from the repetitive 80% of work so they can focus on the 20% that actually requires them.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">When AI is the higher-ROI move</h2>
            <p>
              When the work is structured (confirmations, FAQs, scheduling), happens outside business hours, or
              demands a sub-60-second response that no human team can hit consistently. That's where AI prints
              recovered revenue.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Want the dollar figure for your clinic?
            </h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/roi-calculator" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Calculate Missed Revenue
              </Link>
              <Link to="/?focus=all#audit" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-card">
                Book a 15-Minute Revenue Audit
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

export default Compare;
