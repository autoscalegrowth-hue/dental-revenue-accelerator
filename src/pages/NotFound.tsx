import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageSeo } from "@/hooks/usePageSeo";

const NotFound = () => {
  const location = useLocation();

  usePageSeo({
    title: "Page Not Found (404) | OrthoAutomate",
    description: "The page you're looking for doesn't exist.",
    canonical: `https://orthoautomate.online${location.pathname}`,
  });

  useEffect(() => {
    // Mark response for crawlers/SPA so this page is treated as not-found.
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    meta.setAttribute("data-404", "true");
    document.head.appendChild(meta);
    // Hint to prerender / static-host status-mapping tools.
    document.documentElement.setAttribute("data-status", "404");
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    return () => {
      meta.remove();
      document.documentElement.removeAttribute("data-status");
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Return to home
          </Link>
          <Link to="/blog" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-background">
            Read the blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
