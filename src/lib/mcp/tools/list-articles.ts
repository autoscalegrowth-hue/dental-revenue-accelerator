import { defineTool } from "@lovable.dev/mcp-js";
import { articles } from "@/data/articles";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "list_articles",
  title: "List blog articles",
  description:
    "List OrthoAutomate blog articles with slug, title, one-sentence summary, author, publish/update dates and tags. Use get_article to read the full text.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      author: a.author,
      publishedAt: a.publishedAt,
      updatedAt: a.updatedAt,
      readingMinutes: a.readingMinutes,
      tags: a.tags,
      url: `${SITE}/blog/${a.slug}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items },
    };
  },
});
