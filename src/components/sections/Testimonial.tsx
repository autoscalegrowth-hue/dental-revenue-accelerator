import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="results" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Case Study
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            What clinic owners say after <span className="text-gradient-accent">90 days</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[hsl(220_70%_22%)] p-10 text-white shadow-elevated md:p-14">
            <Quote className="absolute right-8 top-8 h-20 w-20 text-white/5" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-6 font-display text-2xl font-medium leading-snug md:text-3xl">
              "We recovered <span className="text-gradient">$42,000 in 90 days</span> just from
              treatment plans we'd already diagnosed but never followed up on. The AI did the work
              my team never had time for."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                DR
              </div>
              <div>
                <div className="font-semibold">Dr. Rachel Mendoza, DDS</div>
                <div className="text-sm text-white/60">Mendoza Family Dental · 3 locations · Phoenix, AZ</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { v: "$42K", l: "Revenue recovered in 90 days" },
              { v: "184", l: "Missed calls captured per month" },
              { v: "23%", l: "Of stuck treatments reactivated" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="font-display text-4xl font-bold text-gradient-accent md:text-5xl">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
