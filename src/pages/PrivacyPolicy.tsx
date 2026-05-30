import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSeo } from "@/hooks/usePageSeo";

const PrivacyPolicy = () => {
  const canonical = "https://orthoautomate.online/privacy-policy";
  usePageSeo({
    title: "Privacy Policy | OrthoAutomate",
    description:
      "How OrthoAutomate collects, uses, and protects information from website visitors and dental clinic customers.",
    canonical,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: May 30, 2026</p>
          </header>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy explains how OrthoAutomate ("we", "us") collects and uses information from this
              website's visitors and from dental clinic customers using our AI revenue-recovery services. For data
              handling specific to clinic patient data, also see our{" "}
              <a className="text-primary hover:underline" href="/security-and-privacy">Security and Privacy</a> page.
            </p>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Information we collect</h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li><strong>From website visitors:</strong> contact info you submit (name, email, phone), audit form responses, and basic analytics (page views, device type, referrer).</li>
                <li><strong>From clinic customers:</strong> business information, billing details, and the patient data needed to run the services you've engaged us for. Details and limits are in our Security and Privacy page.</li>
                <li><strong>Cookies:</strong> functional cookies for the site to work, plus privacy-respecting analytics. We do not run advertising trackers.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">How we use it</h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>To respond to audits, demos, and customer requests.</li>
                <li>To deliver the services a clinic has engaged us for.</li>
                <li>To improve the product and the website (aggregate, non-identifying analytics).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">What we never do</h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Sell, rent, or share your or your patients' data with third parties for advertising.</li>
                <li>Use clinic or patient data to train public or shared AI models.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Your rights</h2>
              <p className="mt-3">
                You can request access, correction, or deletion of personal information we hold about you by emailing
                {" "}<a className="text-primary hover:underline" href="mailto:orthoautomate@gmail.com">orthoautomate@gmail.com</a>.
                We'll respond within 30 days. Clinic customers also have rights and obligations under their service agreement and any signed BAA.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Sub-processors</h2>
              <p className="mt-3">
                We use a small list of cloud and AI infrastructure vendors operating under enterprise data-processing
                agreements. The current list is available on request.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Changes to this policy</h2>
              <p className="mt-3">
                If we change this policy materially, we'll update the "Last updated" date above and notify active
                customers by email.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Contact</h2>
              <p className="mt-3">
                {/* TODO: replace with a registered business address once available. */}
                Email <a className="text-primary hover:underline" href="mailto:orthoautomate@gmail.com">orthoautomate@gmail.com</a>.
                Phone / WhatsApp: <a className="text-primary hover:underline" href="tel:+966552190206">+966 55 219 0206</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
