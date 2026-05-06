import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type QA = { id: string; q: string; a: string };
type Category = { id: string; title: string; items: QA[] };

const categories: Category[] = [
  {
    id: "about",
    title: "About OrthoAutomate",
    items: [
      {
        id: "what-is-orthoautomate",
        q: "What is OrthoAutomate?",
        a: "OrthoAutomate is a done-for-you AI automation company that helps private dental and orthodontic clinics recover lost revenue. We install three core AI systems — a 24/7 AI receptionist, an instant ad-lead response engine, and a treatment-plan follow-up sequence — that together recover $30,000 to $150,000 per year for the average practice. Everything is fully managed: no software for your team to learn, no new hires, and live in 72 hours.",
      },
      {
        id: "who-founded-orthoautomate",
        q: "Who founded OrthoAutomate and when was it established?",
        a: "OrthoAutomate was founded in 2024 by a team of dental-marketing operators and AI engineers who saw private clinics losing six figures per year to missed calls, slow lead response, and unaccepted treatment plans. The company is headquartered remotely and serves dental practices worldwide.",
      },
      {
        id: "is-orthoautomate-legit",
        q: "Is OrthoAutomate a legitimate business and is the AI HIPAA compliant?",
        a: "Yes. OrthoAutomate runs on HIPAA-conscious infrastructure with encrypted data handling, signed BAAs where required, and strict role-based access controls. Patient information is never used to train public AI models, and every system we deploy follows dental-industry privacy standards.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    items: [
      {
        id: "what-services-do-you-offer",
        q: "What services does OrthoAutomate offer?",
        a: "We offer three core services for dental clinics. (1) 24/7 AI Receptionist — answers every call in under 2 seconds, books appointments directly into your calendar, answers FAQs, and routes urgent cases. (2) Instant AI Lead Response — replies to every Google, Facebook, and Instagram ad lead in under 60 seconds via SMS and DM, qualifying and booking them automatically. (3) AI Treatment Plan Follow-Up — nurtures unaccepted treatment plans with personalized 30–60 day sequences, prioritizing high-value $3K+ cases.",
      },
      {
        id: "how-does-ai-receptionist-work",
        q: "How does the AI receptionist work?",
        a: "When a call comes in, our AI picks up in under two seconds, greets the patient in your clinic's tone, and handles the conversation naturally. It can book new appointments directly into your calendar, answer common questions about insurance, hours, and services, and instantly route emergencies or human-required calls to your front desk with full context. It works 24/7 — including nights, weekends, and holidays — and never misses a call.",
      },
      {
        id: "do-i-need-to-change-pms",
        q: "Do I need to change my practice management software?",
        a: "No. OrthoAutomate integrates directly with Dentrix, Open Dental, Eaglesoft, Curve, and most other major dental PMS platforms. Your team keeps working in the exact same software they use today — we layer the AI on top.",
      },
    ],
  },
  {
    id: "clients",
    title: "Clients & Industries",
    items: [
      {
        id: "who-do-you-work-with",
        q: "Who do you work with?",
        a: "We work with private dental practices, orthodontic clinics, cosmetic and implant centers, and small DSO groups doing $800,000 to $3,000,000 per year in production. Our typical client is an owner-operated practice that's losing revenue to missed calls, slow ad lead response, or stuck treatment plans, and wants results without hiring more front-desk staff.",
      },
      {
        id: "what-industries-do-you-serve",
        q: "What industries does OrthoAutomate serve?",
        a: "OrthoAutomate is built specifically for the dental industry — including general dentistry, orthodontics, cosmetic dentistry, dental implants, periodontics, and pediatric dentistry. Because we focus only on dental, our AI is pre-trained on dental terminology, treatment workflows, and common patient objections.",
      },
    ],
  },
  {
    id: "process",
    title: "Process & Getting Started",
    items: [
      {
        id: "how-do-i-get-started",
        q: "How do I get started with OrthoAutomate?",
        a: "Start with a free revenue audit. We pull your missed-call data, current lead-response time, and unaccepted treatment-plan value, then show you exactly how much revenue you're losing each month. There's no pressure and no commitment — many clinics use the audit alone to fix obvious leaks. If you want us to install the systems, we move to a 72-hour build.",
      },
      {
        id: "what-happens-after-i-contact-you",
        q: "What happens after I contact you?",
        a: "Within 24 hours of your inquiry we run a free audit call (15–20 minutes), share a written revenue-leak report, and — if it's a fit — kick off the 72-hour build. We handle 100% of the technical work: integrations, AI training on your tone and services, calendar setup, and team onboarding. You go live in three business days.",
      },
      {
        id: "how-long-does-setup-take",
        q: "How long does setup take?",
        a: "72 hours from kickoff to fully live. We handle all the technical setup, integrations, AI training on your clinic's tone and services, and a short team onboarding call so your front desk knows exactly how the AI hands off calls and leads.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Availability",
    items: [
      {
        id: "where-do-you-operate",
        q: "Where does OrthoAutomate operate?",
        a: "OrthoAutomate operates worldwide. Our active client base is in the United States, Canada, the United Kingdom, Australia, the United Arab Emirates, and Saudi Arabia, and we onboard English-speaking clinics globally. Everything is delivered remotely — there is nothing to install on-site.",
      },
      {
        id: "do-you-work-internationally",
        q: "Do you work with clinics internationally?",
        a: "Yes. Because the entire system is cloud-based and delivered remotely, we onboard international dental clinics in days, not weeks. We support English-speaking practices across North America, Europe, the Middle East, and Australia.",
      },
      {
        id: "how-much-does-it-cost",
        q: "How much does OrthoAutomate cost and is there a contract?",
        a: "Plans range from $566/month to $1,997/month depending on which systems you install and your clinic's call and lead volume. All plans are month-to-month with no long-term contract — you can cancel anytime. Most clinics see 300–1000% ROI; for example, a $1,197/month plan that recovers $8,000/month in booked treatments delivers roughly 568% ROI.",
      },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

const FAQPage = () => {
  useEffect(() => {
    document.title = "FAQ — OrthoAutomate | AI for Dental Clinics: Answers to Common Questions";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const desc =
      "Answers to the most common questions about OrthoAutomate — what we do, who we serve, how our AI receptionist and treatment-plan follow-up work, pricing, HIPAA, setup time, and more.";
    setMeta("description", desc);
    setMeta("og:title", "FAQ — OrthoAutomate | AI for Dental Clinics", "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", "https://orthoautomate.online/faq", "property");
    setMeta("twitter:title", "FAQ — OrthoAutomate | AI for Dental Clinics");
    setMeta("twitter:description", desc);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = "https://orthoautomate.online/faq";

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-page-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
      if (canonical) canonical.href = previousCanonical || "https://orthoautomate.online/";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container-px mx-auto max-w-3xl pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">FAQ</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything dental and orthodontic clinic owners ask before working with OrthoAutomate — about our AI systems, services, process, pricing, and HIPAA compliance.
          </p>

          <nav aria-label="FAQ categories" className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {cat.title}
              </h2>
              <div className="mt-6 space-y-6">
                {cat.items.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                      <a href={`#${item.id}`} className="hover:text-primary">
                        {item.q}
                      </a>
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">Still have questions?</h2>
            <p className="mt-3 text-muted-foreground">
              Get a free revenue audit and we'll show you exactly how much your clinic is losing each month.
            </p>
            <Link
              to="/#audit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get my free audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
