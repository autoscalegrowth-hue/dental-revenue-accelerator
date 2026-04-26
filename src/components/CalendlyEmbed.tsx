import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/links";

interface CalendlyEmbedProps {
  url?: string;
  minWidth?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * Inline Calendly widget. Loads the Calendly script once and renders the booking
 * widget directly on the page (no redirect / new tab).
 */
const CalendlyEmbed = ({
  url = CALENDLY_URL,
  minWidth = 320,
  height = 700,
  className,
}: CalendlyEmbedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SRC = "https://assets.calendly.com/assets/external/widget.js";
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);

    const init = () => {
      // @ts-expect-error - Calendly is injected globally by the widget script
      if (window.Calendly && ref.current) {
        ref.current.innerHTML = "";
        // @ts-expect-error - global
        window.Calendly.initInlineWidget({
          url,
          parentElement: ref.current,
        });
      }
    };

    if (existing) {
      init();
    } else {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = init;
      document.body.appendChild(s);
    }
  }, [url]);

  return (
    <div
      ref={ref}
      className={`calendly-inline-widget ${className ?? ""}`}
      style={{
        minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    />
  );
};

export default CalendlyEmbed;
