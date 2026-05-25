import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "@/pages/NotFound";
import { getArticleBySlug } from "@/data/articles";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const BlogPost = () => {
  const { slug = "" } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (!article) return;

    document.title = `${article.title} — OrthoAutomate Blog`;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", article.summary);
    setMeta("author", article.author);
    setMeta("article:author", article.author, "property");
    setMeta("og:type", "article", "property");
    setMeta("og:title", article.title, "property");
    setMeta("og:description", article.summary, "property");
    setMeta("og:url", `https://orthoautomate.online/blog/${article.slug}`, "property");
    setMeta("og:image", "https://orthoautomate.online/og-image.jpg", "property");
    setMeta("article:published_time", article.publishedAt, "property");
    setMeta("article:modified_time", article.updatedAt, "property");
    setMeta("twitter:title", article.title);
    setMeta("twitter:description", article.summary);
    setMeta("twitter:image", "https://orthoautomate.online/og-image.jpg");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = `https://orthoautomate.online/blog/${article.slug}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      author: {
        "@type": "Person",
        name: article.author,
        url: "https://orthoautomate.online/about#founder",
        jobTitle: "Founder & CEO, OrthoAutomate",
        worksFor: {
          "@type": "Organization",
          name: "OrthoAutomate",
          url: "https://orthoautomate.online",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "OrthoAutomate",
        url: "https://orthoautomate.online",
        logo: {
          "@type": "ImageObject",
          url: "https://orthoautomate.online/favicon.png",
        },
      },
      image: "https://orthoautomate.online/og-image.jpg",
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: `https://orthoautomate.online/blog/${article.slug}`,
      url: `https://orthoautomate.online/blog/${article.slug}`,
      keywords: article.tags.join(", "),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable", "[data-speakable]"],
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orthoautomate.online/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://orthoautomate.online/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://orthoautomate.online/blog/${article.slug}`,
        },
      ],
    };

    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "article-schema";
    s1.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "article-breadcrumb-schema";
    s2.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s2);

    return () => {
      s1.remove();
      s2.remove();
      if (canonical) canonical.href = previousCanonical || "https://orthoautomate.online/";
    };
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="container-px mx-auto max-w-3xl pb-24 md:pb-32">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">{article.title}</span>
          </nav>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>By {article.author}</span>
              <span aria-hidden="true">•</span>
              <span>
                Published <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </span>
              {article.updatedAt !== article.publishedAt && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>
                    Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                  </span>
                </>
              )}
              <span aria-hidden="true">•</span>
              <span>{article.readingMinutes} min read</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{article.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
              {article.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-12 space-y-12">
            {article.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {sec.heading}
                </h2>
                {sec.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
                ))}
                {sec.bullets && (
                  <ul className="mt-4 list-inside list-disc space-y-2 pl-2 text-muted-foreground">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {sec.subsections?.map((sub) => (
                  <div key={sub.heading} className="mt-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">{sub.heading}</h3>
                    {sub.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3 leading-relaxed text-muted-foreground">{p}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>

          {article.internalLinks && article.internalLinks.length > 0 && (
            <aside
              aria-labelledby="related-heading"
              className="mt-16 rounded-2xl border border-border bg-card p-6 shadow-card-soft md:p-8"
            >
              <h2 id="related-heading" className="font-display text-xl font-semibold text-foreground">
                Related on OrthoAutomate
              </h2>
              <ul className="mt-4 space-y-2">
                {article.internalLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-primary hover:underline">
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
            <h2 className="font-display text-2xl font-bold text-foreground">See your clinic's numbers</h2>
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

          <div className="mt-10 text-center">
            <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
