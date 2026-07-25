import { defineTool } from "@lovable.dev/mcp-js";
import { integrations } from "@/data/integrations";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "list_integrations",
  title: "List PMS integrations",
  description:
    "List the dental practice-management systems OrthoAutomate integrates with (Dentrix, Open Dental, Eaglesoft, Curve Dental), including supported capabilities and setup timeline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = integrations.map((i) => ({
      ...i,
      url: `${SITE}/integrations/${i.slug}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { integrations: items },
    };
  },
});
