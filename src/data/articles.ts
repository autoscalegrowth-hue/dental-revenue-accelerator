// Add new articles by appending to this array.
// Each article supports rich content via simple section blocks.

export type ArticleSection = {
  heading: string; // renders as <h2>
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[]; // <h3> blocks
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string; // one-sentence summary for index + meta description
  author: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD
  readingMinutes: number;
  tags: string[];
  intro: string; // lead paragraph under H1
  sections: ArticleSection[];
  internalLinks?: { label: string; to: string }[];
};

export const articles: Article[] = [
  {
    slug: "missed-call-revenue-loss-dental-clinics",
    title: "How Much Revenue Are You Really Losing to Missed Calls?",
    summary:
      "Most private dental clinics lose $40,000–$120,000 a year to missed calls — here's how to measure it and stop the leak in 72 hours.",
    author: "Jashim Uddin",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-01",
    readingMinutes: 6,
    tags: ["AI Receptionist", "Revenue Recovery", "Dental Operations"],
    intro:
      "If you've ever pulled your phone-system report and seen a double-digit missed-call percentage, you're not alone — and the dollar figure attached to those calls is almost always bigger than clinic owners expect. In this article we break down the real math and show what most clinics are quietly losing every month.",
    sections: [
      {
        heading: "The hidden math of a missed call",
        paragraphs: [
          "The average new-patient phone call in general dentistry is worth $600–$1,200 in first-visit production. For ortho, implants, or full-arch consults, that single call can represent $4,000–$25,000 in lifetime production.",
          "When 18–35% of inbound calls go unanswered (the typical range we see in audits), the cumulative monthly loss adds up fast — usually between $4,000 and $12,000 in walked-away production.",
        ],
        subsections: [
          {
            heading: "Why missed calls happen — even with a great front desk",
            paragraphs: [
              "Front desks aren't the problem. Calls peak during huddles, lunch, and the 4–6 PM after-work spike — exactly when staff is thinnest. Add weekends, holidays, and snow days and you have a structural gap that no human team can close on its own.",
            ],
          },
        ],
      },
      {
        heading: "How to measure your real loss this week",
        bullets: [
          "Pull your last 30 days of call logs from your VoIP provider (RingCentral, Mango, Weave, etc.).",
          "Count inbound calls answered vs. missed (include voicemail-only as missed).",
          "Multiply missed × your average new-patient value × your historical booking rate.",
          "That number is your monthly missed-call revenue leak.",
        ],
      },
      {
        heading: "What a 24/7 AI receptionist actually changes",
        paragraphs: [
          "A well-trained AI receptionist answers in under two seconds, books directly into your calendar, and hands off to a human the moment empathy or clinical judgment is needed. Across our installs we typically see missed-call rates drop from 25%+ to under 3% — and 60–80% of the recovered calls turn into booked appointments.",
        ],
      },
      {
        heading: "Next step: get the actual number for your clinic",
        paragraphs: [
          "We'll pull your call data, calculate your real missed-call loss in dollars, and show you exactly what an AI receptionist would recover. No pitch unless you ask for one.",
        ],
      },
    ],
    internalLinks: [
      { label: "How our 24/7 AI Receptionist works", to: "/about#what-we-do" },
      { label: "Common questions about the AI receptionist", to: "/faq#how-does-ai-receptionist-work" },
      { label: "Get a free Revenue Leak Audit", to: "/?focus=missed-calls#audit" },
    ],
  },
  {
    slug: "treatment-plan-follow-up-recovery-playbook",
    title: "The Treatment Plan Follow-Up Playbook That Reactivates 15–25% of Stuck Cases",
    summary:
      "A step-by-step framework for reactivating unaccepted dental treatment plans using AI follow-up sequences over 30–60 days.",
    author: "Jashim Uddin",
    publishedAt: "2026-04-29",
    updatedAt: "2026-05-04",
    readingMinutes: 7,
    tags: ["Treatment Plans", "Patient Reactivation", "AI Follow-Up"],
    intro:
      "Every dental practice has a six- or seven-figure pile of unaccepted treatment plans sitting in their PMS. Most never get touched again after the initial conversation. Here's the exact follow-up framework we use to recover 15–25% of them.",
    sections: [
      {
        heading: "Why treatment plans go stale",
        paragraphs: [
          "Patients almost never say no — they say 'let me think about it,' 'I need to check with my spouse,' or 'I'll call you back.' Without a structured follow-up cadence, those plans quietly die in the PMS report.",
        ],
      },
      {
        heading: "The 30–60 day reactivation cadence",
        subsections: [
          {
            heading: "Days 1–7: warm reminder",
            paragraphs: [
              "Personalized SMS referencing the specific procedure and recommended timeline, with a one-tap booking link. No discount, no pressure — just a helpful nudge.",
            ],
          },
          {
            heading: "Days 8–21: objection handling",
            paragraphs: [
              "Address the top three objections we see across thousands of cases: cost (financing options), timing (procedure duration and recovery), and fear (sedation and pain management).",
            ],
          },
          {
            heading: "Days 22–60: value reinforcement",
            paragraphs: [
              "Share patient education content, before/after results when appropriate, and a final 'is now still not the right time?' check-in.",
            ],
          },
        ],
      },
      {
        heading: "Prioritize $3K+ cases first",
        paragraphs: [
          "Not all unaccepted plans deserve equal attention. Sort by treatment value and start with implants, ortho, full arches, and large restorative cases. A 20% recovery rate on a $50,000 backlog is a $10,000 month.",
        ],
      },
      {
        heading: "What to automate vs. what to keep human",
        paragraphs: [
          "Automate the follow-up cadence, scheduling links, and FAQ replies. Always escalate to a human the moment a patient asks a clinical question, requests a callback, or expresses frustration.",
        ],
      },
    ],
    internalLinks: [
      { label: "How AI Treatment Plan Follow-Up works", to: "/about#what-we-do" },
      { label: "FAQ: services overview", to: "/faq#what-services-do-you-offer" },
      { label: "Get a treatment-plan-focused audit", to: "/?focus=treatment#audit" },
    ],
  },
  {
    slug: "ad-lead-response-time-dental-marketing",
    title: "Why 60-Second Lead Response Time Doubles Your Dental Ad ROI",
    summary:
      "Lead response time is the single highest-leverage variable in paid dental marketing — here's the data and how AI fixes it.",
    author: "Jashim Uddin",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    readingMinutes: 5,
    tags: ["Paid Ads", "Lead Response", "Conversion"],
    intro:
      "If your clinic runs Google or Facebook ads, the gap between when a lead submits a form and when you reply is the single biggest predictor of whether they book. The data on this is brutal — and most clinics are losing the auction before the front desk even sees the lead.",
    sections: [
      {
        heading: "The 5-minute cliff",
        paragraphs: [
          "Industry research consistently shows leads contacted within 5 minutes are roughly 100x more likely to qualify than those contacted after 30 minutes. The drop-off is exponential, not linear.",
        ],
      },
      {
        heading: "Why human-only follow-up loses",
        paragraphs: [
          "Front desks are answering phones, handling check-ins, and managing the schedule. Ad leads land in an email inbox or CRM that nobody is monitoring in real time. By the time someone sees it, the lead has already messaged three competitors.",
        ],
      },
      {
        heading: "What instant AI lead response changes",
        bullets: [
          "Replies in under 60 seconds, 24/7, across SMS, Instagram DM, and Facebook Messenger.",
          "Qualifies the lead with 2–3 conversational questions.",
          "Books straight into the calendar or hands off to a human with full context.",
          "Re-engages ghosted leads automatically over 7–14 days.",
        ],
      },
      {
        heading: "The compounding effect on ad spend",
        paragraphs: [
          "When booking rates double, your effective cost-per-acquisition is cut in half — without changing your ad budget, creative, or targeting. That's why lead response is the highest-ROI lever in dental marketing.",
        ],
      },
    ],
    internalLinks: [
      { label: "How Instant AI Lead Response works", to: "/about#what-we-do" },
      { label: "FAQ: how do I get started?", to: "/faq#how-do-i-get-started" },
      { label: "Get a lead-response-focused audit", to: "/?focus=leads#audit" },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
