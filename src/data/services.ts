export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string; // meta description / 1-sentence
  intro: string; // lead paragraph
  outcomes: { value: string; label: string }[];
  howItWorks: { title: string; body: string }[];
  features: string[];
  bestFor: string[];
  faqs: ServiceFAQ[];
  relatedSlugs?: string[];
};

export const services: Service[] = [
  {
    slug: "ai-receptionist",
    name: "24/7 AI Receptionist for Dental Clinics",
    shortName: "AI Receptionist",
    tagline: "Answer every call in under 2 seconds. Day, night, weekends, holidays.",
    summary:
      "A 24/7 AI phone receptionist for dental clinics that captures every missed call, books appointments into your calendar, and routes urgent cases to your team — recovering $40K–$120K/year in walked-away production.",
    intro:
      "Between huddles, lunch, the after-work spike, weekends, and holidays, the average private dental clinic misses 18–35% of inbound calls. Each missed new-patient call is worth $600–$1,200 in first-visit production — $4K–$25K in lifetime value for ortho, implants, or full-arch consults. Our AI receptionist closes that gap, permanently.",
    outcomes: [
      { value: "<2s", label: "Average pickup time" },
      { value: "<3%", label: "Missed-call rate after install" },
      { value: "60–80%", label: "Recovered calls that book" },
    ],
    howItWorks: [
      {
        title: "We learn your clinic",
        body: "We train the AI on your services, hours, providers, insurance accepted, FAQs, and brand tone — so it sounds like a member of your team, not a robot.",
      },
      {
        title: "We connect your PMS & phone",
        body: "Direct integration with Dentrix, Open Dental, Eaglesoft, or Curve plus your VoIP provider (RingCentral, Weave, Mango, etc.). Live in 72 hours.",
      },
      {
        title: "AI answers every call, 24/7",
        body: "Books appointments straight into the calendar, answers FAQs, collects insurance details, and instantly transfers to a human for emergencies or clinical questions.",
      },
    ],
    features: [
      "Sub-2-second pickup, 24/7/365 — no voicemail, no missed calls",
      "Direct calendar booking into Dentrix, Open Dental, Eaglesoft, Curve",
      "Bilingual support (English + Spanish) on request",
      "Real-time human escalation with full conversation context",
      "Caller transcripts and call recordings logged to your PMS",
      "Custom voice + brand tone — sounds like your front desk",
      "HIPAA-conscious infrastructure, encrypted at rest and in transit",
    ],
    bestFor: [
      "Private practices losing 15%+ of inbound calls",
      "Clinics where the front desk is overwhelmed at peak hours",
      "Multi-location DSOs needing consistent call-handling across sites",
      "Specialty practices (ortho, implants, cosmetic) with high-value calls",
    ],
    faqs: [
      {
        q: "How is this different from a voicemail or call-overflow service?",
        a: "Voicemail loses 80%+ of new-patient callers — they hang up and call a competitor. A traditional overflow service answers as a generic call center, doesn't know your providers or insurance, and can't book into your PMS. Our AI receptionist books directly into your calendar, knows your services and pricing, and sounds like your front desk.",
      },
      {
        q: "Can patients tell they're talking to AI?",
        a: "Most can't. The AI uses natural conversational tone, handles interruptions, and adapts to accents. When a caller explicitly asks for a human or has an emergency, the call is transferred instantly with full context.",
      },
      {
        q: "What happens during a real dental emergency?",
        a: "The AI is trained to identify emergency keywords (swelling, severe pain, trauma, broken tooth) and immediately routes the call to your on-call number or after-hours line with the patient's name, callback number, and a 1-sentence summary of the issue.",
      },
      {
        q: "Does it integrate with Dentrix and Open Dental?",
        a: "Yes — direct calendar and patient-record integrations with Dentrix, Open Dental, Eaglesoft, and Curve are included. We handle 100% of the technical setup.",
      },
    ],
    relatedSlugs: ["lead-response", "treatment-followup"],
  },
  {
    slug: "lead-response",
    name: "Instant AI Lead Response for Dental Ads",
    shortName: "Instant Lead Response",
    tagline: "Reply to every Google, Facebook, and Instagram lead in under 60 seconds.",
    summary:
      "An AI system that replies to every paid dental ad lead in under 60 seconds via SMS and DM — qualifying, booking, and re-engaging ghosted leads automatically. Typically doubles booking rate without changing ad spend.",
    intro:
      "Industry research is unambiguous: leads contacted within 5 minutes are roughly 100× more likely to qualify than leads contacted after 30 minutes. Most dental clinics take hours — sometimes days — to reply to a paid ad lead, while a competitor's auto-responder is already in the conversation. We close that gap to under 60 seconds.",
    outcomes: [
      { value: "<60s", label: "Average response time" },
      { value: "8×", label: "Higher booking rate vs. human-only" },
      { value: "~50%", label: "Lower effective cost-per-booked-patient" },
    ],
    howItWorks: [
      {
        title: "We connect your lead sources",
        body: "Direct integrations with Google Ads lead forms, Facebook & Instagram Lead Ads, Meta Messenger, your website forms, and your CRM. Every new lead hits the AI in real time.",
      },
      {
        title: "AI qualifies in 2–3 messages",
        body: "Conversational SMS / DM that confirms the service interest, insurance, location, and preferred time — without sounding like a survey.",
      },
      {
        title: "Books or hands off, then re-engages",
        body: "Qualified leads are booked directly into the calendar. Ghosted leads get a 7–14 day re-engagement sequence that typically recovers 20–30% of them.",
      },
    ],
    features: [
      "<60-second response across SMS, Instagram DM, and Facebook Messenger",
      "Lead qualification with 2–3 conversational questions",
      "Direct calendar booking into your PMS",
      "7–14 day ghosted-lead re-engagement sequence",
      "Real-time human handoff with full conversation context",
      "Per-campaign attribution and ROI reporting",
      "Spam and tire-kicker filtering before your team sees the lead",
    ],
    bestFor: [
      "Clinics spending $2K+/month on Google or Meta ads",
      "Practices running implant, Invisalign, or cosmetic ad campaigns",
      "DSOs with multiple locations and shared ad spend",
      "Any clinic where leads sit in an inbox for hours before reply",
    ],
    faqs: [
      {
        q: "What ad platforms do you support?",
        a: "Google Ads (Lead Forms, Search, Performance Max), Facebook & Instagram Lead Ads, Meta Messenger, TikTok Lead Generation, and any website form via webhook. Custom CRM integrations available.",
      },
      {
        q: "Will the AI sound spammy or scare leads off?",
        a: "No. We A/B test message tone for every client and tune for the local market. The AI uses your clinic's name, references the specific ad the lead clicked on, and asks helpful questions — not pressure tactics.",
      },
      {
        q: "What about TCPA / SMS compliance?",
        a: "Every message includes opt-out language, only goes to leads who consented on the ad form, and is sent from a registered 10DLC business number. Full compliance documentation is provided.",
      },
      {
        q: "How fast do I see results?",
        a: "Booking rates typically double within the first 14 days. Re-engagement of ghosted leads compounds month-over-month — most clinics see steady-state ROI by day 60.",
      },
    ],
    relatedSlugs: ["ai-receptionist", "treatment-followup"],
  },
  {
    slug: "treatment-followup",
    name: "AI Treatment Plan Follow-Up & Reactivation",
    shortName: "Treatment Plan Follow-Up",
    tagline: "Reactivate 15–25% of unaccepted treatment plans sitting in your PMS.",
    summary:
      "A done-for-you AI nurture system that follows up on every unaccepted dental treatment plan over a 30–60 day cadence — prioritizing high-value $3K+ cases and turning dormant production into booked revenue.",
    intro:
      "Every private dental practice has a six- or seven-figure pile of diagnosed-but-unaccepted treatment plans sitting in their PMS. Patients rarely say no outright — they say 'let me think about it,' 'I need to check with my spouse,' or 'I'll call you back.' Without a structured follow-up cadence, those plans quietly die. We reactivate them automatically.",
    outcomes: [
      { value: "15–25%", label: "Reactivation rate on stuck plans" },
      { value: "$3K+", label: "High-value cases prioritized first" },
      { value: "30–60d", label: "Full nurture cadence per patient" },
    ],
    howItWorks: [
      {
        title: "We pull your unaccepted plans",
        body: "We import every unaccepted treatment plan from Dentrix, Open Dental, Eaglesoft, or Curve, sort by treatment value, and prioritize $3K+ cases first.",
      },
      {
        title: "Personalized 30–60 day cadence",
        body: "SMS + email referencing the specific procedure, with objection-handling content (cost, timing, fear) and one-tap booking links. No discounts or pressure — just helpful nudges.",
      },
      {
        title: "Bookings, escalations, and reporting",
        body: "Booked appointments flow straight into your calendar. Clinical questions or callback requests escalate to your team. Monthly report shows every reactivated dollar.",
      },
    ],
    features: [
      "Automated import of unaccepted treatment plans from your PMS",
      "30–60 day personalized SMS + email cadence",
      "Built-in objection handling: cost (financing), timing, fear/sedation",
      "$3K+ case prioritization (implants, ortho, full arches, large restorative)",
      "One-tap booking links into your calendar",
      "Human escalation for clinical questions or frustration",
      "Monthly reactivation report with dollar-tracked ROI",
    ],
    bestFor: [
      "Practices with 50+ unaccepted plans sitting in their PMS",
      "Implant, ortho, and cosmetic practices with high-ticket cases",
      "Clinics where no one has time for systematic follow-up",
      "Owners who want production from patients already diagnosed",
    ],
    faqs: [
      {
        q: "How far back do you reactivate plans?",
        a: "We typically import unaccepted plans from the last 18–24 months. Plans older than that get a softer re-introduction sequence; recent plans (under 90 days) get the full objection-handling cadence.",
      },
      {
        q: "Will patients feel spammed?",
        a: "No. Each patient gets 6–8 touches over 60 days — not daily messages. Every message is personalized to their specific procedure and includes opt-out. Patients who decline are immediately removed from the sequence.",
      },
      {
        q: "What's a realistic reactivation rate?",
        a: "15–25% of unaccepted plans book within 60 days across our installs. On a $200K backlog of unaccepted treatment, that's $30K–$50K of recovered production in the first 2 months.",
      },
      {
        q: "Do you offer discounts on behalf of the clinic?",
        a: "Only if you ask us to. By default, the sequence uses financing options (CareCredit, Sunbit, in-house plans) and education — never discounts. We've found discounting trains patients to wait.",
      },
    ],
    relatedSlugs: ["ai-receptionist", "lead-response"],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
