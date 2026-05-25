import { useEffect } from "react";

type SeoArgs = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  schemas?: Record<string, unknown>[];
};

export function usePageSeo({
  title,
  description,
  canonical,
  ogImage = "https://orthoautomate.online/og-image.jpg",
  ogType = "website",
  schemas = [],
}: SeoArgs) {
  useEffect(() => {
    document.title = title;

    const setMeta = (
      name: string,
      content: string,
      attr: "name" | "property" = "name"
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${name}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:type", ogType, "property");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    const previousCanonical = canonicalLink.href;
    canonicalLink.href = canonical;

    const scripts: HTMLScriptElement[] = [];
    schemas.forEach((schema, idx) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-page-schema", `${canonical}-${idx}`);
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
      scripts.push(s);
    });

    return () => {
      scripts.forEach((s) => s.remove());
      if (canonicalLink)
        canonicalLink.href = previousCanonical || "https://orthoautomate.online/";
    };
  }, [title, description, canonical, ogImage, ogType, JSON.stringify(schemas)]);
}
