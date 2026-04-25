import { motion } from "framer-motion";
import { Search, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "We audit your clinic",
    body: "We pull missed call data, lead response times, and unaccepted treatment plans. We tell you exactly how much revenue you're losing — for free.",
  },
  {
    n: "02",
    icon: Wrench,
    title: "We install AI systems",
    body: "Done-for-you setup in 72 hours. We integrate with your existing PMS — Dentrix, Open Dental, Eaglesoft, Curve. No software changes for your team.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "You get more booked treatments",
    body: "Within 30 days you see calls answered, leads booked, and stuck treatments converting. We track every dollar recovered.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            How It Works
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Three steps. <span className="text-gradient-accent">Zero hassle.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft"
            >
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(220_70%_24%)] text-white shadow-elevated">
                  <s.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-4 font-display text-sm font-bold tracking-widest text-accent">STEP {s.n}</div>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
