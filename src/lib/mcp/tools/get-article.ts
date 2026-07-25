import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { articles } from "@/data/articles";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "get_article",
  title: "Get blog article",
  description:
    "Read the full text of one OrthoAutomate blog article as markdown, including all sections and subsections. Use list_articles to find the slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Article slug from list_articles."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const article = articles.find((a) => a.slug === slug.trim().toLowerCase());
    if (!article) {
      return {
        content: [
          {
            type: "text",
            text: `No article found for slug "${slug}". Available slugs: ${articles
              .map((a) => a.slug)
              .join(", ")}.`,
          },
        ],
        isError: true,
      };
    }

    const lines: string[] = [
      `# ${article.title}`,
      "",
      `By ${article.author} — published ${article.publishedAt}, updated ${article.updatedAt}`,
      "",
      article.intro,
      "",
    ];

    for (const section of article.sections) {
      lines.push(`## ${section.heading}`, "");
      for (const p of section.paragraphs ?? []) lines.push(p, "");
      for (const b of section.bullets ?? []) lines.push(`- ${b}`);
      if (section.bullets?.length) lines.push("");
      for (const sub of section.subsections ?? []) {
        lines.push(`### ${sub.heading}`, "");
        for (const p of sub.paragraphs) lines.push(p, "");
      }
    }

    const markdown = lines.join("\n").trim();
    const url = `${SITE}/blog/${article.slug}`;

    return {
      content: [{ type: "text", text: `${markdown}\n\nSource: ${url}` }],
      structuredContent: { slug: article.slug, title: article.title, url, markdown },
    };
  },
});
