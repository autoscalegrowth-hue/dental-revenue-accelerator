import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../../../data/services";
import { integrations } from "../../../data/integrations";
import { landingPages } from "../../../data/landingPages";
import { CALENDLY_URL } from "../../links";

const SITE = "https://orthoautomate.online";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get OrthoAutomate's public company facts: what it does, who it serves, founder, service and page map, and how to book a call. Good starting point for any question about the business.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "OrthoAutomate",
      website: SITE,
      summary:
        "OrthoAutomate builds AI revenue-recovery systems for private dental and orthodontic clinics — a 24/7 AI receptionist, instant new-lead response, and automated treatment-plan follow-up that plug into the clinic's existing practice-management software.",
      founder: "Jashim Uddin, Founder & CEO",
      whoWeServe:
        "Private dental, orthodontic, implant and cosmetic clinics — single-location and multi-location groups — that lose revenue to missed calls, slow lead response, unaccepted treatment plans, no-shows and dormant patients.",
      promisedOutcome:
        "Recover more booked appointments and reduce revenue leakage without changing the software or workflow the front desk already uses.",
      operatesIn: "Worldwide (English and Arabic support)",
      setupTime: "Typically 72 hours from kickoff, fully managed setup.",
      bookACallUrl: CALENDLY_URL,
      services: services.map((s) => ({
        slug: s.slug,
        name: s.name,
        url: `${SITE}/services/${s.slug}`,
      })),
      integrations: integrations.map((i) => ({
        slug: i.slug,
        name: i.name,
        url: `${SITE}/integrations/${i.slug}`,
      })),
      landingPages: landingPages.map((p) => ({
        slug: p.slug,
        category: p.category,
        label: p.breadcrumbLabel,
        url: `${SITE}/${p.slug}`,
      })),
      keyPages: [
        `${SITE}/`,
        `${SITE}/about`,
        `${SITE}/services`,
        `${SITE}/integrations`,
        `${SITE}/pricing`,
        `${SITE}/case-studies`,
        `${SITE}/roi-calculator`,
        `${SITE}/faq`,
        `${SITE}/blog`,
        `${SITE}/contact`,
        `${SITE}/security-and-privacy`,
      ],
    };

    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
