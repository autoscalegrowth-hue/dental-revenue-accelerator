import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSeo } from "@/hooks/usePageSeo";

const Terms = () => {
  const canonical = "https://orthoautomate.online/terms";
  usePageSeo({
    title: "Terms of Service | OrthoAutomate",
    description:
      "Terms governing use of the OrthoAutomate website and AI revenue-recovery services for dental clinics.",
    canonical,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
          <header className="mt-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: May 30, 2026</p>
          </header>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">1. Acceptance</h2>
              <p className="mt-3">
                By using orthoautomate.online or any OrthoAutomate service, you agree to these Terms. If you don't
                agree, please don't use the site or services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">2. The service</h2>
              <p className="mt-3">
                OrthoAutomate provides AI-powered revenue-recovery services for dental clinics, including missed-call
                capture, treatment-plan follow-up, no-show recovery, dormant patient reactivation, and lead conversion.
                Service scope is defined in each customer's order form or written agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">3. Customer responsibilities</h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Provide accurate clinic and operational information needed to deliver the service.</li>
                <li>Maintain valid consent for any patient or lead data we process on your behalf.</li>
                <li>Comply with applicable laws (HIPAA, TCPA, GDPR, and equivalents) in your jurisdiction.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">4. Fees and contracts</h2>
              <p className="mt-3">
                Plans are month-to-month unless a custom agreement says otherwise. Fees are billed monthly in advance.
                You can cancel any time with effect at the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">5. Acceptable use</h2>
              <p className="mt-3">
                You may not use the service to send spam, harass patients, violate consent requirements, or do anything
                illegal. We may suspend service for violations after written notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">6. Disclaimers</h2>
              <p className="mt-3">
                Revenue figures shown on this site (e.g., "$30K–$150K/year recovered") are observed ranges across
                customers and not a guaranteed outcome. Results depend on your clinic's call volume, treatment
                backlog, ad spend, and execution.
              </p>
              <p className="mt-3">
                The service is provided "as is" without warranties beyond those required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">7. Limitation of liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, OrthoAutomate's total liability for any claim arising out of
                the service is limited to the fees paid by the customer in the 3 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">8. Changes</h2>
              <p className="mt-3">
                We may update these Terms. Material changes will be communicated to active customers by email at least
                30 days before they take effect.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">9. Contact</h2>
              <p className="mt-3">
                {/* TODO: replace with a registered business address and governing-law jurisdiction once finalized. */}
                Email <a className="text-primary hover:underline" href="mailto:orthoautomate@gmail.com">orthoautomate@gmail.com</a>.
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

export default Terms;
