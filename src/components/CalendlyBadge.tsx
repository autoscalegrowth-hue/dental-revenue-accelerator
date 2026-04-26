import { useEffect } from "react";

/**
 * Floating Calendly badge widget shown on every page.
 * Loads the Calendly script + stylesheet once and initializes the badge.
 */
const CalendlyBadge = () => {
  useEffect(() => {
    const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
    const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

    // Inject stylesheet once
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    const init = () => {
      // @ts-expect-error - Calendly is injected globally
      if (window.Calendly && typeof window.Calendly.initBadgeWidget === "function") {
        // @ts-expect-error - global
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/orthoautomate",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      // @ts-expect-error - global
      if (window.Calendly) init();
      else existing.addEventListener("load", init);
    } else {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = init;
      document.body.appendChild(s);
    }

    return () => {
      // Remove the floating badge element on unmount to avoid duplicates during HMR
      document.querySelectorAll(".calendly-badge-widget").forEach((el) => el.remove());
      document.querySelectorAll(".calendly-overlay").forEach((el) => el.remove());
    };
  }, []);

  return null;
};

export default CalendlyBadge;
