// AEO "Quick Answer" block — visible 40–60 word direct answer for AI answer engines
// (ChatGPT, Perplexity, Google AI Overviews) and human scanners.
import { HelpCircle } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

const QuickAnswer = ({ question, answer }: Props) => {
  return (
    <section
      aria-label="Quick answer"
      className="mt-8 rounded-2xl border border-secondary/30 bg-secondary/5 p-6 md:p-7"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary">
        <HelpCircle className="h-4 w-4" aria-hidden="true" />
        Quick Answer
      </div>
      <p className="mt-3 font-display text-lg font-semibold text-foreground">
        {question}
      </p>
      <p className="mt-2 leading-relaxed text-muted-foreground">{answer}</p>
    </section>
  );
};

export default QuickAnswer;
