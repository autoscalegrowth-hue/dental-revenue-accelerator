import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "966534954076";
  const msg = encodeURIComponent("Hi OrthoAutomate, I'd like to book a free revenue audit for my dental clinic.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-110 animate-pulse-glow"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
