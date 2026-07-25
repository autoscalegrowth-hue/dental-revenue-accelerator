import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "@/data/services";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get the full public detail of one OrthoAutomate service: intro, outcomes, how it works, features, who it is best for, and its FAQs. Use list_services first to find the slug.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Service slug, e.g. ai-receptionist, lead-response, treatment-followup."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = services.find((s) => s.slug === slug.trim().toLowerCase());
    if (!service) {
      return {
        content: [
          {
            type: "text",
            text: `No service found for slug "${slug}". Available slugs: ${services
              .map((s) => s.slug)
              .join(", ")}.`,
          },
        ],
        isError: true,
      };
    }

    const payload = { ...service, url: `${SITE}/services/${service.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { service: payload },
    };
  },
});
