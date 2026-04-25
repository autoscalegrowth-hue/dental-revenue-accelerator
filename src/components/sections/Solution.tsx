import { motion } from "framer-motion";
import { Bot, Zap, Repeat2, Check } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    tag: "24/7 AI Receptionist",
    title: "Never miss another call.",
    body: "Our AI answers every call — day, night, weekends, holidays. Books appointments, answers FAQs, routes urgent cases.",
    bullets: ["Answers in under 2 seconds", "Books directly into your calendar", "Sounds natural, not robotic"],
    accent: "secondary",
  },
  {
    icon: Zap,
    tag: "Instant Lead Response",
    title: "Reply to ad leads in seconds.",
    body: "The moment a lead fills your form or messages you, AI responds — qualifies them, books them, follows up if they ghost.",
    bullets: ["Response in <60 seconds", "8x higher booking rate", "Works across SMS, IG, Facebook"],
    accent: "accent",
  },
  {
    icon: Repeat2,
    tag: "Treatment Plan Follow-Up",
    title: "Reactivate stuck treatments.",
    body: "AI nurtures every unaccepted treatment plan with smart, personalized sequences — until they book or opt out.",
    bullets: ["Targets $3K+ cases first", "30–60 day cadence", "Recovers 15–25% on average"],
    accent: "secondary",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            The Fix
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Our AI fixes the <span className="text-gradient-accent">3 biggest revenue leaks</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Three plug-in systems. Done-for-you. Live in 72 hours. Working while you sleep.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-card-soft md:grid-cols-[auto_1fr_auto] md:p-10"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                s.accent === "accent" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"
              }`}>
                <s.icon className="h-8 w-8" />
              </div>
              <div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${
                  s.accent === "accent" ? "text-accent" : "text-secondary"
                }`}>
                  0{i + 1} — {s.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">{s.body}</p>
              </div>
              <ul className="space-y-2 md:min-w-[240px]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${
                      s.accent === "accent" ? "text-accent" : "text-secondary"
                    }`} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
