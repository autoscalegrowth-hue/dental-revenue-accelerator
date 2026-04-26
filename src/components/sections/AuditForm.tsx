import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CALENDLY_URL } from "@/lib/links";

const auditSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  clinic: z.string().trim().min(2, "Enter your clinic name").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  revenue: z.string().trim().max(40).optional(),
});

const benefits = [
  "We pull your missed call data",
  "We measure your lead response time",
  "We identify unbooked treatment revenue",
  "We give you a clear $ recovery number",
];

const AuditForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = auditSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
    toast.success("Audit request received. Opening our calendar so you can pick a time…");
    // Send them straight to Calendly so the meeting lands in your account.
    setTimeout(() => {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <section id="audit" className="relative overflow-hidden bg-surface-darker py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[140px]" />

      <div className="container-px relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              Free · No Obligation
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Find out <span className="text-gradient">exactly</span> how much your clinic is losing.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Free Revenue Leak Audit. We do the analysis. You get the report. No pitch unless you ask for one.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-elevated md:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-white">Book Your Free Audit</h3>
            <p className="mt-1 text-sm text-white/60">Takes 30 seconds. We respond within 24 hours.</p>

            <div className="mt-6 grid gap-4">
              <div>
                <Label htmlFor="name" className="text-white/80">Full name</Label>
                <Input id="name" name="name" required maxLength={80} className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="Dr. Jane Smith" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="text-white/80">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="you@clinic.com" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white/80">Phone</Label>
                  <Input id="phone" name="phone" required maxLength={30} className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="+1 555 123 4567" />
                </div>
              </div>
              <div>
                <Label htmlFor="clinic" className="text-white/80">Clinic name</Label>
                <Input id="clinic" name="clinic" required maxLength={120} className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="Smile Dental Studio" />
              </div>
              <div>
                <Label htmlFor="revenue" className="text-white/80">Annual revenue (optional)</Label>
                <Input id="revenue" name="revenue" maxLength={40} className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="$1.2M" />
              </div>
            </div>

            <Button type="submit" variant="accent" size="xl" disabled={loading || done} className="mt-7 w-full">
              {done ? (<><Check /> Request received</>) :
               loading ? (<><Loader2 className="animate-spin" /> Sending…</>) :
               (<>Get My Free Audit <Send /></>)}
            </Button>
            <p className="mt-3 text-center text-xs text-white/50">No spam. No long sales call. Real numbers.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
