import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "No need to change your software",
  "Works with Dentrix, Open Dental, Eaglesoft, Curve",
  "Done-for-you setup — we handle everything",
  "No technical knowledge required",
  "Your team keeps working exactly as they do today",
  "HIPAA-conscious infrastructure",
  "Cancel anytime — no long contracts",
  "Dedicated account manager",
];

const Features = () => {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Built For Busy Owners
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Simple to start.<br />
              <span className="text-gradient-accent">Impossible to undo.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              You shouldn't need a tech team or a 6-month rollout to fix a revenue leak. Everything is done for you.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card-soft"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
