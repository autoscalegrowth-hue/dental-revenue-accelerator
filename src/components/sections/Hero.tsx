import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyDialog from "@/components/CalendlyDialog";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 inline-flex w-full justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            AI Revenue Recovery for Private Dental Clinics
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto max-w-5xl text-center font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Recover Missed Dental Revenue{" "}
          <span className="text-gradient">With AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-white/70 md:text-xl"
        >
          OrthoAutomate helps dental clinics capture missed calls, follow up unsold treatment plans,
          convert leads, and recover lost production — without adding front-desk staff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild variant="accent" size="xl">
            <a href="#audit">
              Book a 15-Minute Revenue Audit <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href="/roi-calculator">
              <PlayCircle /> Calculate Missed Revenue
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            Works for clinics doing $800K–$3M/year
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-secondary" />
            Setup in 72 hours
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-secondary" />
            300–1000% ROI
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <div className="relative mt-20 hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-2 top-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md animate-float"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Missed Calls Captured</div>
            <div className="mt-2 font-display text-3xl font-bold text-white">+$5,200<span className="text-base text-white/50">/mo</span></div>
            <div className="mt-1 text-xs text-secondary">↑ 412% vs last quarter</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute -right-2 top-10 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Treatments Reactivated</div>
            <div className="mt-2 font-display text-3xl font-bold text-white">+$8,400<span className="text-base text-white/50">/mo</span></div>
            <div className="mt-1 text-xs text-accent">↑ 38 cases recovered</div>
          </motion.div>
          <div className="mx-auto h-48" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
