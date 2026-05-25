import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSeo } from "@/hooks/usePageSeo";

const ContactPage = () => {
  const canonical = "https://orthoautomate.online/contact";
  usePageSeo({
    title: "Contact OrthoAutomate — AI for Dental Clinics",
    description:
      "Get in touch with OrthoAutomate. Email orthoautomate@gmail.com, call/WhatsApp +966 55 219 0206, or book a free Revenue Leak Audit for your dental clinic.",
    canonical,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact OrthoAutomate",
        url: canonical,
        mainEntity: {
          "@type": "Organization",
          name: "OrthoAutomate",
          url: "https://orthoautomate.online",
          email: "orthoautomate@gmail.com",
          telephone: "+966552190206",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "orthoautomate@gmail.com",
              telephone: "+966552190206",
              availableLanguage: ["English", "Arabic"],
              areaServed: ["US", "CA", "GB", "AU", "AE", "SA"],
            },
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "orthoautomate@gmail.com",
              availableLanguage: ["English"],
            },
          ],
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
            name: "Contact",
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
        <section className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Contact" }]}
          />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Talk to OrthoAutomate
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We answer dental practice owners directly — usually within a few
            business hours. Fastest path: book a free Revenue Leak Audit and
            we'll come prepared with your real numbers.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a
              href="mailto:orthoautomate@gmail.com"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary"
            >
              <Mail
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Email
                </h2>
                <p className="text-sm text-muted-foreground">
                  orthoautomate@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+966552190206"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary"
            >
              <Phone
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Phone
                </h2>
                <p className="text-sm text-muted-foreground">
                  +966 55 219 0206
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/966552190206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary"
            >
              <MessageCircle
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  WhatsApp
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fastest async reply
                </p>
              </div>
            </a>
            <a
              href="https://orthoautomate.online"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:border-primary"
            >
              <Globe
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Website
                </h2>
                <p className="text-sm text-muted-foreground">
                  orthoautomate.online
                </p>
              </div>
            </a>
          </div>

          <address className="mt-10 not-italic">
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                Remote-first — serving private dental clinics across the United
                States, Canada, United Kingdom, Australia, the UAE, and Saudi
                Arabia.
              </span>
            </div>
          </address>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Want hard numbers on your clinic first?
            </h2>
            <p className="mt-3 text-muted-foreground">
              The free Revenue Leak Audit shows exactly how much your clinic is
              losing to missed calls, slow lead response, and unaccepted
              treatments — no commitment.
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

export default ContactPage;
