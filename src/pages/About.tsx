import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    name: "24/7 AI Receptionist",
    desc: "Answers every dental clinic call in under 2 seconds — day, night, weekends, and holidays. Books appointments directly into your calendar, handles common patient questions, and instantly routes urgent or human-required cases to your front desk with full conversation context.",
  },
  {
    name: "Instant AI Lead Response",
    desc: "Replies to every Google, Facebook, and Instagram ad lead in under 60 seconds via SMS and DM. Qualifies prospects, books them into the calendar, and follows up automatically when leads ghost — typically delivering 8x higher booking rates than human-only follow-up.",
  },
  {
    name: "AI Treatment Plan Follow-Up",
    desc: "Nurtures every unaccepted treatment plan with personalized SMS and email sequences over a 30–60 day cadence. Prioritizes high-value $3K+ cases first and reactivates 15–25% of stuck plans on average, turning dormant production into booked revenue.",
  },
  {
    name: "Free Revenue Leak Audit",
    desc: "A no-obligation analysis of your missed-call volume, lead response time, and unaccepted treatment-plan value. We deliver a written report with a clear dollar figure of revenue your clinic is losing each month — no pitch unless you ask for one.",
  },
];

const differentiators = [
  {
    title: "Dental-only — never generic",
    desc: "Our AI is pre-trained on dental terminology, treatment workflows, insurance language, and the most common patient objections. Generic AI receptionists guess; ours converts.",
  },
  {
    title: "Live in 72 hours, fully done-for-you",
    desc: "We handle 100% of the technical setup, PMS integration, AI training on your tone and services, and team onboarding. Your front desk does not need to learn new software.",
  },
  {
    title: "Works with your existing PMS",
    desc: "Direct integrations with Dentrix, Open Dental, Eaglesoft, Curve, and most major dental platforms. No rip-and-replace, no workflow disruption.",
  },
  {
    title: "Month-to-month, no contracts",
    desc: "Every plan is month-to-month. Cancel anytime. We earn the renewal every 30 days by delivering measurable recovered revenue.",
  },
  {
    title: "HIPAA-conscious infrastructure",
    desc: "Encrypted data handling, signed BAAs where required, strict role-based access controls, and patient information that is never used to train public AI models.",
  },
  {
    title: "Real ROI, measured monthly",
    desc: "Clients typically see 300–1000% ROI within 90 days. Every month we share a transparent dashboard of recovered calls, booked leads, and reactivated treatment plans.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    document.title = "About OrthoAutomate — AI Revenue Recovery for Dental Clinics";

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
      "OrthoAutomate is a dental-only AI automation company that recovers $30K–$150K/year for private dental clinics by capturing missed calls, replying to ad leads in seconds, and reactivating unaccepted treatment plans.";
    setMeta("description", desc);
    setMeta("og:title", "About OrthoAutomate — AI for Dental Clinics", "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", "https://orthoautomate.online/about", "property");
    setMeta("og:image", "https://orthoautomate.online/og-image.jpg", "property");
    setMeta("twitter:title", "About OrthoAutomate — AI for Dental Clinics");
    setMeta("twitter:description", desc);
    setMeta("twitter:image", "https://orthoautomate.online/og-image.jpg");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = "https://orthoautomate.online/about";

    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About OrthoAutomate",
      url: "https://orthoautomate.online/about",
      description:
        "OrthoAutomate is a done-for-you AI automation company built exclusively for private dental and orthodontic clinics. We install three AI revenue-recovery systems — a 24/7 AI receptionist, instant ad-lead response, and treatment-plan follow-up — that recover $30,000–$150,000 per year for the average practice. Founded in 2024, we operate worldwide and go live in 72 hours.",
      publisher: {
        "@type": "Organization",
        name: "OrthoAutomate",
        url: "https://orthoautomate.online",
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "about-page-schema";
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
            <span aria-current="page" className="text-foreground">About</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            OrthoAutomate — AI revenue recovery, built exclusively for dental clinics.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We install done-for-you AI systems that capture missed calls, respond to ad leads in under 60 seconds, and reactivate stuck treatment plans — recovering $30,000 to $150,000 per year for the average private practice.
          </p>
        </section>

        <section
          id="who-we-are"
          aria-labelledby="who-we-are-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-16"
        >
          <h2 id="who-we-are-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            Who we are
          </h2>
          <article className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              OrthoAutomate was founded in 2024 by a team of dental-marketing operators and AI engineers. We kept seeing the same pattern across private practices: six-figure revenue leaks caused by missed phone calls, slow response to paid-ad leads, and unaccepted treatment plans sitting untouched in the PMS. Most clinics tried to patch these problems by hiring more front-desk staff — a slow, expensive, and unreliable fix.
            </p>
            <p>
              Our mission is simple: recover the revenue dental clinics have already earned but never collected — without forcing them to hire, retrain, or change software. We do that with a fully managed AI stack that goes live in 72 hours and integrates directly with the tools clinics already use.
            </p>
            <p>
              Our values: <strong className="text-foreground">dental-only focus</strong>, <strong className="text-foreground">measurable results</strong> (every recovered call and booked lead is tracked monthly), <strong className="text-foreground">no long-term lock-in</strong> (every plan is month-to-month), and <strong className="text-foreground">patient-first AI</strong> that escalates to a human the moment empathy or clinical judgment is needed.
            </p>
          </article>
        </section>

        <section
          id="what-we-do"
          aria-labelledby="what-we-do-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-16"
        >
          <h2 id="what-we-do-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            What we do
          </h2>
          <div className="mt-6 space-y-5">
            {services.map((s) => (
              <article
                key={s.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="who-we-serve"
          aria-labelledby="who-we-serve-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-16"
        >
          <h2 id="who-we-serve-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            Who we serve
          </h2>
          <article className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              OrthoAutomate is built exclusively for the dental industry. Our active client base includes:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>General dentistry practices</li>
              <li>Orthodontic clinics</li>
              <li>Cosmetic dentistry studios</li>
              <li>Dental implant centers</li>
              <li>Periodontics and endodontics specialists</li>
              <li>Pediatric dental offices</li>
              <li>Small DSO groups (2–10 locations)</li>
            </ul>
            <p>
              Our typical client is an owner-operated practice doing $800,000–$3,000,000 per year in production, losing revenue to missed calls, slow ad lead response, or unaccepted treatment plans, and looking for results without hiring more front-desk staff. We do not serve hospitals, insurance companies, or non-dental verticals — that focus is what makes our AI convert.
            </p>
          </article>
        </section>

        <section
          id="why-choose-us"
          aria-labelledby="why-choose-us-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-16"
        >
          <h2 id="why-choose-us-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            Why choose OrthoAutomate
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {differentiators.map((d) => (
              <article
                key={d.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card-soft"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="founder"
          aria-labelledby="founder-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-16"
        >
          <h2 id="founder-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            Founder
          </h2>
          <article className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Jashim Uddin
              <span className="ml-2 text-sm font-normal text-muted-foreground">— Founder & CEO</span>
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Jashim founded OrthoAutomate in 2024 after spending years working with private dental and orthodontic clinics on marketing and operations. He saw firsthand how clinics were burning ad budgets on leads that never got a call back, and how six-figure treatment plans sat unaccepted in PMS reports for months. OrthoAutomate is his answer: a dental-only AI stack that closes those gaps automatically.
            </p>
          </article>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="container-px mx-auto max-w-3xl scroll-mt-28 pb-24 md:pb-32"
        >
          <h2 id="contact-heading" className="font-display text-3xl font-bold tracking-tight text-foreground">
            Contact us
          </h2>
          <address className="mt-6 not-italic">
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Website:{" "}
                  <a href="https://orthoautomate.online" className="text-primary hover:underline">
                    orthoautomate.online
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Email:{" "}
                  <a href="mailto:orthoautomate@gmail.com" className="text-primary hover:underline">
                    orthoautomate@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Phone / WhatsApp:{" "}
                  <a href="tel:+966552190206" className="text-primary hover:underline">
                    +966 55 219 0206
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>Location: Remote-first — serving dental clinics worldwide</span>
              </li>
            </ul>
          </address>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h3 className="font-display text-2xl font-bold text-foreground">Ready to see your numbers?</h3>
            <p className="mt-3 text-muted-foreground">
              Get a free Revenue Leak Audit — we'll show you exactly how much your clinic is losing each month.
            </p>
            <Link
              to="/?focus=all#audit"
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

export default AboutPage;
