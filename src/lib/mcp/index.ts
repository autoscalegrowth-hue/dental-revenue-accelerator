import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfoTool from "./tools/get-company-info";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import listIntegrationsTool from "./tools/list-integrations";
import searchFaqsTool from "./tools/search-faqs";
import listCaseStudiesTool from "./tools/list-case-studies";
import listArticlesTool from "./tools/list-articles";
import getArticleTool from "./tools/get-article";

export default defineMcp({
  name: "orthoautomate-mcp",
  title: "OrthoAutomate",
  version: "0.1.0",
  instructions:
    "Public tools for OrthoAutomate, an AI revenue-recovery service for dental and orthodontic clinics. Start with `get_company_info` for an overview and the page map. Use `list_services` / `get_service` for service detail, `list_integrations` for supported practice-management systems (Dentrix, Open Dental, Eaglesoft, Curve Dental), `search_faqs` for pricing, setup, compliance and results questions, `list_case_studies` for client outcomes, and `list_articles` / `get_article` to read published articles. All data is public marketing content from orthoautomate.online.",
  tools: [
    getCompanyInfoTool,
    listServicesTool,
    getServiceTool,
    listIntegrationsTool,
    searchFaqsTool,
    listCaseStudiesTool,
    listArticlesTool,
    getArticleTool,
  ],
});
