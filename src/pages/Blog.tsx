import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { articles } from "@/data/articles";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const BlogIndex = () => {
  useEffect(() => {
    document.title = "Blog — OrthoAutomate | Dental AI, Revenue Recovery & Practice Growth";

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
      "Practical guides on dental AI, revenue recovery, missed-call automation, treatment-plan follow-up, and lead response — written for private dental and orthodontic clinic owners.";
    setMeta("description", desc);
    setMeta("og:title", "Blog — OrthoAutomate", "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", "https://orthoautomate.online/blog", "property");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = "https://orthoautomate.online/blog";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "OrthoAutomate Blog",
      url: "https://orthoautomate.online/blog",
      description: desc,
      publisher: {
        "@type": "Organization",
        name: "OrthoAutomate",
        url: "https://orthoautomate.online",
      },
      blogPost: articles.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        url: `https://orthoautomate.online/blog/${a.slug}`,
        datePublished: a.publishedAt,
        dateModified: a.updatedAt,
        author: { "@type": "Organization", name: a.author },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-index-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
      if (canonical) canonical.href = previousCanonical || "https://orthoautomate.online/";
    };
  }, []);

  const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container-px mx-auto max-w-3xl pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">Blog</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            OrthoAutomate Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical, no-fluff playbooks on AI, revenue recovery, and operations for private dental and orthodontic clinics.
          </p>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <ul className="space-y-6">
            {sorted.map((a) => (
              <li key={a.slug}>
                <article className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-shadow hover:shadow-elevated md:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                    <span aria-hidden="true">•</span>
                    <span>{a.readingMinutes} min read</span>
                    {a.tags[0] && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                          {a.tags[0]}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    <Link to={`/blog/${a.slug}`} className="hover:text-primary">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{a.summary}</p>
                  <Link
                    to={`/blog/${a.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogIndex;
