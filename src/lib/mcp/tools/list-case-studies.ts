import { defineTool } from "@lovable.dev/mcp-js";
import { caseStudies } from "@/data/caseStudies";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description:
    "List OrthoAutomate's published client case studies with clinic, location, service used, headline metrics, challenge, solution and result.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = caseStudies.map((c) => ({
      ...c,
      url: `${SITE}/case-studies/${c.slug}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { caseStudies: items },
    };
  },
});
