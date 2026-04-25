import { motion } from "framer-motion";
import { PhoneOff, MessageSquareOff, Timer } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    stat: "35%",
    statLabel: "of calls go unanswered",
    title: "Missed Calls = Lost Patients",
    body: "Every unanswered call is a patient walking to your competitor. Most clinics lose 10–25 new patients a month this way.",
  },
  {
    icon: MessageSquareOff,
    stat: "70%",
    statLabel: "of clinics never follow up",
    title: "No Follow-Up = Lost Treatment Plans",
    body: "Diagnosed treatments worth $5K–$15K sit in your software untouched because nobody has time to chase them.",
  },
  {
    icon: Timer,
    stat: "5 min",
    statLabel: "to lose a hot lead",
    title: "Slow Response = Wasted Ads",
    body: "You spend thousands on Google & Facebook ads. If you don't respond in minutes, those leads disappear forever.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
            The Hidden Bleed
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Your clinic is leaking money in <span className="text-gradient-accent">3 places</span> — every single day.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            You don't have a marketing problem. You have a conversion problem. And it's costing you six figures a year.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-foreground">{p.stat}</span>
                <span className="text-sm text-muted-foreground">{p.statLabel}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
