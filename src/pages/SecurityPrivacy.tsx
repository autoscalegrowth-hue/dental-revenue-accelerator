import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import { usePageSeo } from "@/hooks/usePageSeo";

const SecurityPrivacy = () => {
  const canonical = "https://orthoautomate.online/security-and-privacy";

  usePageSeo({
    title: "Security and Privacy | OrthoAutomate",
    description:
      "How OrthoAutomate handles patient data for dental clinics: encryption, minimum-necessary access, vendor isolation, BAA handling, and what we do not claim.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Security and Privacy | OrthoAutomate",
        url: canonical,
        description:
          "OrthoAutomate's plain-language security and privacy posture for dental clinic data.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://orthoautomate.online/" },
          { "@type": "ListItem", position: 2, name: "Security and Privacy", item: canonical },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32 prose-content">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Security and Privacy" }]} />

          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Security and Privacy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Plain language. No marketing claims we can't back up.
            </p>
          </header>

          <QuickAnswer
            question="Is OrthoAutomate HIPAA compliant?"
            answer="OrthoAutomate is designed to support privacy-conscious dental workflows: data is encrypted in transit and at rest, access is scoped to minimum-necessary, and patient information is never used to train public AI models. We do not market a blanket 'HIPAA-certified' badge — HIPAA compliance is a shared responsibility between you, our infrastructure, and any signed BAAs. BAA/HIPAA details are reviewed during onboarding and applied where required."
          />

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">What we do</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Encrypt patient data in transit (TLS) and at rest.</li>
              <li>Apply minimum-necessary access: the AI only sees the fields it needs to book or follow up.</li>
              <li>Isolate each clinic's data — your patient list is never mixed with another clinic's.</li>
              <li>Log every booking, cancellation, and outbound message with timestamp and source.</li>
              <li>Honor opt-out and unsubscribe requests immediately and permanently.</li>
              <li>Sign a Business Associate Agreement (BAA) with clinics where one is required.</li>
              <li>Use only AI providers whose enterprise terms prohibit training on customer data.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">What we don't claim</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>We do not claim third-party HIPAA certification (HIPAA has no government-issued certificate; any vendor claiming one is misrepresenting).</li>
              <li>We do not claim SOC 2 / ISO 27001 audits until they are issued; status will be published here if/when achieved.</li>
              <li>We do not sell, resell, or share patient data with third parties under any circumstances.</li>
              <li>We do not use patient data to train public or shared AI models.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">Data we collect from a clinic</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Appointment availability from the PMS (Dentrix, Open Dental, Eaglesoft, Curve).</li>
              <li>Patient contact info (name, phone, email) and recall/treatment-plan status.</li>
              <li>Inbound call audio + transcripts handled by the AI receptionist.</li>
              <li>Inbound SMS/DM messages handled by lead response and follow-up systems.</li>
            </ul>
            <p>We do not pull clinical chart notes, x-rays, or imaging.</p>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">Sub-processors and vendors</h2>
            <p>
              We use a small list of cloud and AI infrastructure vendors operating under enterprise data-processing
              agreements. The current list is shared during onboarding and updated when changes occur. Clinics on a BAA
              receive notification of any sub-processor changes.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">SMS &amp; messaging compliance</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Outbound SMS uses registered 10DLC business numbers.</li>
              <li>Every message includes opt-out language and is sent only to patients/leads with appropriate consent.</li>
              <li>Honor TCPA, CAN-SPAM, and equivalent national rules where the clinic operates.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">Incident response</h2>
            <p>
              If a security incident affecting clinic or patient data occurs, affected clinics are notified without
              undue delay, with the facts known, mitigation steps taken, and recommended actions. Clinics under a BAA
              receive notification on the timeline the BAA requires.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">Questions</h2>
            <p>
              Email <a className="text-primary hover:underline" href="mailto:orthoautomate@gmail.com">orthoautomate@gmail.com</a>
              {" "}to request our current sub-processor list, a BAA template, or to ask any privacy question.
              See also our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms</Link>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SecurityPrivacy;
