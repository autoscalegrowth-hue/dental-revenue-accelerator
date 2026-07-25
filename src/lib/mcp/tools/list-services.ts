import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../../../data/services";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List every OrthoAutomate service (AI receptionist, instant lead response, treatment-plan follow-up) with slug, tagline, summary and page URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = services.map((s) => ({
      slug: s.slug,
      name: s.name,
      shortName: s.shortName,
      tagline: s.tagline,
      summary: s.summary,
      url: `${SITE}/services/${s.slug}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
