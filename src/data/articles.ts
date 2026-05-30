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
  {
    slug: "dental-revenue-leakage",
    title: "Dental Revenue Leakage: The Three Hidden Drains Every Private Practice Has",
    summary:
      "Most private dental clinics quietly leak $80K–$150K a year through missed calls, slow lead response, and unaccepted treatment plans — here's how to find and stop each one.",
    author: "Jashim Uddin",
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-30",
    readingMinutes: 7,
    tags: ["Revenue Leakage", "Dental Operations", "AI Automation"],
    intro:
      "Dental revenue leakage is the gap between the production a practice could be booking and what it actually books. For most private clinics doing $800K–$3M/year, that gap is between $80,000 and $150,000 every year — and it's almost always concentrated in three places. This article walks through each leak, how to measure it, and what to do about it.",
    sections: [
      {
        heading: "Leak #1: Missed inbound calls",
        paragraphs: [
          "The average private dental practice misses 18–35% of inbound calls. The losses concentrate during huddles, lunch, the after-work spike, weekends, and holidays — exactly when staffing is thinnest.",
          "Each missed new-patient call is worth $600–$1,200 in first-visit production. For ortho, implants, or full-arch consults, lifetime value rises to $4,000–$25,000 per call. A clinic missing 60 calls a month is realistically leaking $4,000–$12,000 in booked production.",
        ],
        subsections: [
          {
            heading: "How to measure it this week",
            paragraphs: [
              "Pull the last 30 days of call logs from your VoIP. Count answered vs. missed (voicemail-only is missed). Multiply missed × your historical booking rate × your average new-patient value. That's your monthly leak.",
            ],
          },
        ],
      },
      {
        heading: "Leak #2: Slow response to ad leads",
        paragraphs: [
          "Industry data is unambiguous: leads contacted within 5 minutes are roughly 100× more likely to qualify than leads contacted after 30 minutes. Most dental clinics reply in hours, sometimes days — while a competitor's auto-responder is already in the conversation.",
        ],
        bullets: [
          "Pull your ad lead log and median response time.",
          "If it's over 5 minutes, your effective cost-per-booked-patient is probably 2× what it could be.",
          "Closing the gap to under 60 seconds typically doubles booking rate without changing ad spend.",
        ],
      },
      {
        heading: "Leak #3: Unaccepted treatment plans",
        paragraphs: [
          "Every PMS has a quietly growing pile of diagnosed-but-unaccepted treatment plans. Patients rarely say no outright — they say 'let me think,' 'I'll check with my spouse,' or 'I'll call back.' Without a structured 30–60 day follow-up, those plans die.",
          "Reactivating 15–25% of a $200,000 backlog adds $30K–$50K of production in the first 60 days. The plans already exist; nobody is touching them.",
        ],
      },
      {
        heading: "How to stop all three leaks at once",
        paragraphs: [
          "Hiring more front-desk staff doesn't fix this — humans can't answer in 2 seconds 24/7 and can't run a methodical 30–60 day cadence on every patient. AI handles the structured 80% of this work; your front desk keeps doing the empathy and clinical pieces it's already good at.",
          "The fastest path: audit the dollar figure for your own clinic, then install AI workflows targeted at whichever leak is largest. Most practices fix the biggest leak first and add the next two over 60 days.",
        ],
      },
    ],
    internalLinks: [
      { label: "Missed call recovery for dental clinics", to: "/missed-call-recovery-for-dental-clinics" },
      { label: "Treatment plan follow-up AI", to: "/treatment-plan-follow-up-ai" },
      { label: "Dental lead conversion AI", to: "/dental-lead-conversion-ai" },
      { label: "Estimate your leakage with the ROI calculator", to: "/roi-calculator" },
    ],
  },
  {
    slug: "how-to-reduce-missed-calls-in-dental-clinics",
    title: "How to Reduce Missed Calls in Dental Clinics: An Operator's Playbook",
    summary:
      "A practical, vendor-neutral framework for cutting dental clinic missed-call rates from 25%+ to under 5% — phone routing, staffing, scripts, and AI overflow.",
    author: "Jashim Uddin",
    publishedAt: "2026-05-15",
    updatedAt: "2026-05-30",
    readingMinutes: 8,
    tags: ["Missed Calls", "Front Desk Operations", "AI Receptionist"],
    intro:
      "If your missed-call rate is north of 15%, you have a five- to six-figure annual leak and an unhappy front desk. The fix is rarely 'hire more people' — it's a stack of small operational changes plus a 24/7 AI safety net for the calls humans physically can't cover.",
    sections: [
      {
        heading: "Step 1: Get the real number",
        paragraphs: [
          "Pull 30 days of VoIP call logs and bucket them by hour. Most clinics discover 60–80% of misses cluster in three windows: huddle (8–9am), lunch (12–1pm), and the after-work spike (4–6pm).",
        ],
      },
      {
        heading: "Step 2: Fix the obvious operational gaps",
        bullets: [
          "Move the huddle so the phone is staffed at 8am.",
          "Stagger lunch so the desk is never empty.",
          "Set a clean overflow path from extension 1 → 2 → mobile so calls escalate before voicemail.",
          "Disable voicemail for the main line during business hours — it's a known booking killer.",
        ],
      },
      {
        heading: "Step 3: Tighten the scripts",
        paragraphs: [
          "Calls that get answered but don't book are also misses. Use a 4-line opener that confirms name, reason, insurance, and offers two appointment times. Most practices we audit see a 10–15 point booking-rate lift from script changes alone.",
        ],
      },
      {
        heading: "Step 4: Cover the impossible windows with AI",
        paragraphs: [
          "Even a perfect front desk can't answer at 2am on Sunday. A 24/7 AI receptionist picks up in under 2 seconds, books directly into your PMS, and hands off to a human when judgment is needed. Across our installs, missed-call rates drop from 25%+ to under 3% and 60–80% of recovered calls book.",
        ],
      },
      {
        heading: "Step 5: Measure monthly, not yearly",
        paragraphs: [
          "Add 'missed-call rate' and 'recovered-call bookings' to your monthly KPI report. If the number drifts back up, you'll see it immediately instead of at year-end.",
        ],
      },
    ],
    internalLinks: [
      { label: "Missed call recovery for dental clinics", to: "/missed-call-recovery-for-dental-clinics" },
      { label: "Compare manual vs AI follow-up", to: "/compare/manual-follow-up-vs-ai" },
      { label: "Calculate missed-call revenue loss", to: "/roi-calculator" },
    ],
  },
  {
    slug: "how-ai-follows-up-treatment-plans",
    title: "How AI Follows Up on Dental Treatment Plans (Without Discounting or Spamming)",
    summary:
      "The exact 30–60 day cadence we use to reactivate 15–25% of unaccepted dental treatment plans — message timing, objection handling, and what to never automate.",
    author: "Jashim Uddin",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-30",
    readingMinutes: 7,
    tags: ["Treatment Plan Follow-Up", "AI Workflows", "Patient Communication"],
    intro:
      "Following up on unaccepted treatment plans is the highest-ROI work most dental practices never do consistently. AI changes that — but only if the cadence is designed around how patients actually decide, not around blasting messages. Here's the structure that works.",
    sections: [
      {
        heading: "The patient psychology this is built around",
        paragraphs: [
          "Patients with unaccepted plans aren't saying no — they're saying 'not yet.' The three things blocking them are almost always cost (uncertainty about financing), timing (work, kids, recovery), and fear (sedation, pain, the unknown). A good cadence addresses each, one at a time.",
        ],
      },
      {
        heading: "The 30–60 day cadence, step by step",
        subsections: [
          {
            heading: "Days 1–7: warm reminder",
            paragraphs: [
              "Personalized SMS referencing the specific procedure and recommended timeline, with a one-tap booking link. No discount. No pressure. Just a helpful nudge.",
            ],
          },
          {
            heading: "Days 8–21: objection handling",
            paragraphs: [
              "Three short messages, each addressing one objection: financing (CareCredit/Sunbit/in-house), timing (real procedure duration vs. fear of it), and sedation/pain management.",
            ],
          },
          {
            heading: "Days 22–45: value reinforcement",
            paragraphs: [
              "Patient-education content tied to the specific procedure. For implants: bone-loss progression. For ortho: timeline reality vs. perception. No selling — only honest information.",
            ],
          },
          {
            heading: "Days 46–60: final soft check-in",
            paragraphs: [
              "A single 'is now still not the right time?' message that opens the door without pressure. Patients who don't engage are removed from the sequence and re-entered into longer-term recall.",
            ],
          },
        ],
      },
      {
        heading: "What we never automate",
        bullets: [
          "Clinical questions — always escalate to a human.",
          "Discount requests — handled by the office manager case-by-case.",
          "Frustrated or distressed sentiment — instant human handoff with full context.",
        ],
      },
      {
        heading: "Why this works without discounting",
        paragraphs: [
          "Discounting trains patients to wait for the next discount. Education plus financing options closes the same percentage of cases at full fee — and protects the next year's pricing.",
        ],
      },
      {
        heading: "Realistic results",
        paragraphs: [
          "Across installs, 15–25% of unaccepted plans book within 60 days. On a $200,000 backlog, that's $30K–$50K in recovered production in the first two months, with no new ad spend and no front-desk overhead.",
        ],
      },
    ],
    internalLinks: [
      { label: "Treatment plan follow-up AI", to: "/treatment-plan-follow-up-ai" },
      { label: "Dormant patient reactivation", to: "/dormant-patient-reactivation" },
      { label: "Compare manual vs AI follow-up", to: "/compare/manual-follow-up-vs-ai" },
      { label: "Calculate reactivation revenue", to: "/roi-calculator" },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
