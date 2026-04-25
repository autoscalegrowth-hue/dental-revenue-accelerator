import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-[hsl(220_70%_18%)] to-[hsl(220_60%_22%)] p-10 text-center shadow-elevated md:p-20"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Stop losing patients.<br />
              <span className="text-gradient">Start recovering revenue.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Every week you wait is another $1,500–$3,000 walking out the door. Let's stop the bleed.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="accent" size="xl">
                <a href="#audit"><CalendarCheck /> Book a Call</a>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href="#audit">Get Free Audit <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
