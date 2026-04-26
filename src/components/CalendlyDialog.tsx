import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CalendlyEmbed from "./CalendlyEmbed";

interface CalendlyDialogProps {
  children: ReactNode;
  title?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Wraps any trigger element (button/link) and opens the Calendly widget in a
 * modal so booking happens on the same page.
 */
const CalendlyDialog = ({
  children,
  title = "Book a Call",
  open,
  onOpenChange,
}: CalendlyDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternalOpen(v);
    onOpenChange?.(v);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl border-white/10 bg-surface-darker p-0 sm:p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-display text-xl text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="px-2 pb-2 sm:px-4 sm:pb-4">
          {isOpen && <CalendlyEmbed height={650} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyDialog;
