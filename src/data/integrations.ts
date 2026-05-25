export type Integration = {
  slug: string;
  name: string;
  vendor: string;
  summary: string;
  description: string;
  capabilities: string[];
  setupTimeline: string;
};

export const integrations: Integration[] = [
  {
    slug: "dentrix",
    name: "Dentrix",
    vendor: "Henry Schein One",
    summary:
      "OrthoAutomate integrates directly with Dentrix to read appointments, write new bookings, and sync patient records — no rip-and-replace, no workflow change for your front desk.",
    description:
      "Dentrix is the most widely deployed practice-management system in U.S. private dentistry. Our AI receptionist, lead-response engine, and treatment-plan follow-up sequences all read and write directly to Dentrix via the official API, so every booked call, qualified ad lead, and reactivated treatment plan lands in your existing schedule and patient ledger automatically.",
    capabilities: [
      "Read live calendar availability and provider schedules",
      "Write new appointments with full patient details and insurance",
      "Sync patient records (new and existing) bi-directionally",
      "Import unaccepted treatment plans for AI follow-up sequencing",
      "Log every AI call transcript and SMS thread to the patient file",
      "Trigger workflows on appointment status changes (no-show, confirmed)",
    ],
    setupTimeline: "72 hours from kickoff — we handle 100% of the technical setup, including credentials, mapping, and front-desk onboarding.",
  },
  {
    slug: "open-dental",
    name: "Open Dental",
    vendor: "Open Dental Software",
    summary:
      "Direct Open Dental API integration for live scheduling, patient records, and treatment-plan import — fully open-source friendly, no third-party middleware.",
    description:
      "Open Dental's open architecture and FHIR-aligned API make it our cleanest integration. The AI receptionist books appointments straight into the Open Dental schedule, lead response writes new patient records with full ad-source attribution, and treatment-plan follow-up imports unaccepted plans nightly for prioritized AI outreach.",
    capabilities: [
      "Real-time schedule reads and appointment writes via Open Dental API",
      "Full patient record sync (demographics, insurance, history)",
      "Automatic ad-source attribution on new-patient records",
      "Nightly unaccepted treatment-plan import for AI follow-up",
      "Operatory and provider-level routing for multi-doctor practices",
      "Call recording and SMS history attached to the patient chart",
    ],
    setupTimeline: "72 hours — we provision API access, map your operatories and providers, and onboard your team.",
  },
  {
    slug: "eaglesoft",
    name: "Eaglesoft",
    vendor: "Patterson Dental",
    summary:
      "OrthoAutomate connects to Eaglesoft for live appointment booking, patient sync, and treatment-plan reactivation — works across single-location and multi-location practices.",
    description:
      "Eaglesoft powers a large share of U.S. general and specialty dental practices. Our integration uses Eaglesoft's supported data interfaces to book appointments, sync patient demographics and insurance, and pull unaccepted treatment plans for AI follow-up — without disrupting your team's day-to-day workflow.",
    capabilities: [
      "Live appointment booking with provider and operatory matching",
      "Patient demographic and insurance sync",
      "Unaccepted treatment-plan import for AI nurture cadences",
      "AI call transcripts logged to the patient record",
      "Multi-location support with per-site routing",
      "No on-site server changes — fully managed setup",
    ],
    setupTimeline: "72 hours — we coordinate with your Patterson rep when needed, then handle the rest.",
  },
  {
    slug: "curve-dental",
    name: "Curve Dental",
    vendor: "Curve Dental",
    summary:
      "Cloud-native Curve Dental integration for instant appointment booking, patient sync, and treatment-plan reactivation — perfect for modern multi-location practices.",
    description:
      "Curve Dental's cloud-first architecture pairs naturally with our AI stack. Every booked call, qualified ad lead, and reactivated treatment plan flows in real time into Curve, with full ad-source and AI-conversation attribution attached to each patient record.",
    capabilities: [
      "Real-time cloud-to-cloud appointment booking",
      "Bi-directional patient record and insurance sync",
      "Treatment-plan import with value-based prioritization",
      "AI call recordings, transcripts, and SMS threads attached to chart",
      "Multi-location and provider-level scheduling support",
      "Ad-source attribution captured at lead creation",
    ],
    setupTimeline: "72 hours — fully cloud-based, no on-site setup required.",
  },
];

export const getIntegrationBySlug = (slug: string) =>
  integrations.find((i) => i.slug === slug);
