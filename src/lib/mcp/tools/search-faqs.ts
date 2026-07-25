import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../../../data/services";
import { landingPages } from "../../../data/landingPages";

const SITE = "https://orthoautomate.online";

type Entry = { question: string; answer: string; source: string; url: string };

const allFaqs = (): Entry[] => {
  const fromServices = services.flatMap((s) =>
    s.faqs.map((f) => ({
      question: f.q,
      answer: f.a,
      source: s.shortName,
      url: `${SITE}/services/${s.slug}`,
    })),
  );
  const fromLanding = landingPages.flatMap((p) =>
    p.faqs.map((f) => ({
      question: f.q,
      answer: f.a,
      source: p.breadcrumbLabel,
      url: `${SITE}/${p.slug}`,
    })),
  );
  return [...fromServices, ...fromLanding];
};

export default defineTool({
  name: "search_faqs",
  title: "Search FAQs",
  description:
    "Search OrthoAutomate's published FAQ answers about pricing, setup time, integrations, HIPAA/compliance, AI call handling and results. Omit the query to get every FAQ.",
  inputSchema: {
    query: z
      .string()
      .describe("Keywords to match against questions and answers. Use an empty string for all FAQs."),
    limit: z.number().int().min(1).max(50).describe("Maximum number of FAQs to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    const scored = allFaqs()
      .map((f) => {
        const haystack = `${f.question} ${f.answer}`.toLowerCase();
        const score = terms.length
          ? terms.reduce((acc, t) => acc + (haystack.includes(t) ? 1 : 0), 0)
          : 1;
        return { ...f, score };
      })
      .filter((f) => f.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ score: _score, ...rest }) => rest);

    return {
      content: [{ type: "text", text: JSON.stringify(scored, null, 2) }],
      structuredContent: { faqs: scored, count: scored.length },
    };
  },
});
