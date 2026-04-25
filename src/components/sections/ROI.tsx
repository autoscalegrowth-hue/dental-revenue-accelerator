import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const lines = [
  { label: "Recovered from missed calls", value: "+$5,000", suffix: "/mo" },
  { label: "Reactivated treatment plans", value: "+$8,000", suffix: "/mo" },
  { label: "Faster lead conversion", value: "+$3,500", suffix: "/mo" },
];

const ROI = () => {
  return (
    <section id="roi" className="relative overflow-hidden bg-roi py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              Real Numbers
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              The math is brutal.<br />
              <span className="text-gradient">In your favor.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/70">
              Average clinic results in the first 90 days. We'll show you your specific numbers in the free audit.
            </p>
            <div className="mt-8">
              <Button asChild variant="accent" size="xl">
                <a href="#audit">
                  Calculate My Recovery <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {lines.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <span className="text-base text-white/70 md:text-lg">{l.label}</span>
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  <span className="text-gradient">{l.value}</span>
                  <span className="text-base font-medium text-white/50">{l.suffix}</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-[hsl(20_95%_58%)] p-8 shadow-accent-glow"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/80">Total ROI</div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-white md:text-6xl">300–1000%</span>
              </div>
              <p className="mt-2 text-white/85">Across 50+ private dental clinics. Pays for itself in week one.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
