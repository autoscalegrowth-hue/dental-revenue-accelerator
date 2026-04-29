import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "What exactly does OrthoAutomate do for my dental clinic?",
    a: "OrthoAutomate installs AI systems that recover lost revenue in three areas: capturing missed calls with an AI receptionist, automatically following up with patients who have unaccepted treatment plans, and responding to new leads from Google and Facebook ads within minutes. Most clinics recover $30K–$150K per year that was previously walking out the door.",
  },
  {
    q: "How much revenue can my clinic realistically recover?",
    a: "Clinics doing $800K–$3M/year typically recover $30K–$150K annually. The exact amount depends on your missed call volume, number of unaccepted treatment plans sitting in your software, and your current lead response time. Our free revenue audit shows you the exact dollar figure for your clinic before you commit to anything.",
  },
  {
    q: "Do I need to change my practice management software?",
    a: "No. OrthoAutomate integrates directly with Dentrix, Open Dental, Eaglesoft, Curve, and most major dental PMS platforms. Your team keeps working exactly as they do today — nothing changes in their daily workflow.",
  },
  {
    q: "How long does setup take?",
    a: "72 hours from kickoff. We handle 100% of the technical setup, integrations, AI training on your clinic's tone and services, and team onboarding. You don't need any technical knowledge or in-house IT support.",
  },
  {
    q: "Is the AI HIPAA compliant?",
    a: "Yes. We use HIPAA-conscious infrastructure with encrypted data handling, signed BAAs where required, and strict access controls. Patient information is never used to train public AI models.",
  },
  {
    q: "What happens if a patient prefers to talk to a real human?",
    a: "The AI is built to escalate. Any time a patient asks for a human, has an emergency, or needs clinical judgment, the call or message is instantly routed to your front desk with full conversation context — so your team picks up exactly where the AI left off.",
  },
  {
    q: "How is this different from hiring another front desk staff member?",
    a: "A new hire costs $40K–$55K/year, takes weeks to train, calls in sick, and only works 40 hours/week. OrthoAutomate works 24/7, never misses a call, follows up on every treatment plan automatically, and costs a fraction of one salary — with measurable ROI you can track every month.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are month-to-month. You can cancel anytime. We earn your business every month by the revenue we recover for you.",
  },
  {
    q: "What kind of ROI should I expect?",
    a: "Our clients see 300–1000% ROI. For example, a $1,197/mo plan that recovers $8,000/mo in additional booked treatments delivers roughly 568% ROI. We send you a monthly report showing every dollar recovered, so the value is never a guess.",
  },
  {
    q: "How do I get started?",
    a: "Start with a free revenue audit. We pull your missed call data, lead response times, and unaccepted treatment plan value, then show you exactly how much revenue you're losing. No pressure, no commitment — just clarity on the opportunity.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="container-px mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Questions dental owners <span className="text-gradient-accent">always ask.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to know about how OrthoAutomate recovers lost revenue for private dental clinics.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-border bg-card p-2 shadow-card-soft md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border px-4">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
