export type CaseStudy = {
  slug: string;
  clientName: string;
  clinic: string;
  location: string;
  size: string;
  service: string;
  durationDays: number;
  headline: string;
  quote: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mendoza-family-dental-42k",
    clientName: "Dr. Rachel Mendoza, DDS",
    clinic: "Mendoza Family Dental",
    location: "Phoenix, AZ · 3 locations",
    size: "$2.1M / year production",
    service: "Treatment Plan Follow-Up",
    durationDays: 90,
    headline: "Recovered $42,000 in 90 days from unaccepted treatment plans",
    quote:
      "We recovered $42,000 in 90 days just from treatment plans we'd already diagnosed but never followed up on. The AI did the work my team never had time for.",
    metrics: [
      { value: "$42K", label: "Revenue recovered (90 days)" },
      { value: "23%", label: "Reactivation rate on stuck plans" },
      { value: "184", label: "Missed calls captured per month" },
    ],
    challenge:
      "Mendoza Family Dental had over 600 unaccepted treatment plans across three locations — implants, full arches, and large restorative cases — sitting untouched in Open Dental. The front desk was running flat-out on day-to-day operations and had no bandwidth for systematic follow-up.",
    solution:
      "We installed AI Treatment Plan Follow-Up integrated directly with Open Dental, prioritizing $3K+ cases first. Each patient received a personalized 60-day cadence referencing their specific procedure, with objection-handling content (financing, timing, sedation) and one-tap booking links. Clinical questions escalated to the team automatically.",
    result:
      "$42,000 of additional production booked in the first 90 days, a 23% reactivation rate on the prioritized $3K+ cohort, and zero added workload for the front desk. Sequences continue to compound month-over-month.",
  },
  {
    slug: "north-shore-ortho-leads",
    clientName: "Dr. Marcus Patel, DMD",
    clinic: "North Shore Orthodontics",
    location: "Boston, MA · 1 location",
    size: "$1.4M / year production",
    service: "Instant AI Lead Response",
    durationDays: 60,
    headline: "8× higher booking rate from Meta ads in 60 days",
    quote:
      "We were spending $6K/month on Facebook ads and getting maybe 4 booked consults. After OrthoAutomate, that same spend now books 30+ — same ads, same budget, just instant response.",
    metrics: [
      { value: "8×", label: "Increase in booking rate" },
      { value: "<45s", label: "Average lead response time" },
      { value: "$0", label: "Additional ad spend required" },
    ],
    challenge:
      "North Shore Orthodontics was running $6K/month in Meta ads for Invisalign and braces consultations. Leads sat in the Facebook lead inbox for 4–24 hours before the front desk could reply — by then, parents had already booked competitors.",
    solution:
      "We connected Facebook Lead Ads directly to our AI lead-response engine. Every new lead got an SMS within 45 seconds, was qualified in 2–3 messages, and booked straight into the practice calendar. Ghosted leads entered a 14-day re-engagement sequence.",
    result:
      "Booked consults jumped from ~4/month to 32/month on identical ad spend — an 8× improvement in booking rate and roughly an 87% reduction in effective cost-per-booked-consult.",
  },
  {
    slug: "lakeside-dental-receptionist",
    clientName: "Dr. Jennifer Walsh, DDS",
    clinic: "Lakeside Family Dentistry",
    location: "Tampa, FL · 1 location",
    size: "$1.1M / year production",
    service: "24/7 AI Receptionist",
    durationDays: 30,
    headline: "Missed-call rate dropped from 31% to 2% in 30 days",
    quote:
      "We were losing 3 out of every 10 new-patient calls — usually during lunch or after 5. The AI receptionist picks up in under 2 seconds and books them straight into Dentrix. It's like adding a perfect front-desk hire for a fraction of one salary.",
    metrics: [
      { value: "31% → 2%", label: "Missed-call rate" },
      { value: "72%", label: "Recovered calls that booked" },
      { value: "$11.4K", label: "Recovered production / month" },
    ],
    challenge:
      "Lakeside Dental was losing 31% of inbound calls — almost all during lunch, after 5pm, and on weekends. Each missed new-patient call represented $700–$1,200 in first-visit production walking out the door.",
    solution:
      "We deployed our 24/7 AI Receptionist integrated with Dentrix and their RingCentral phone system. The AI handles overflow during peak hours and 100% of after-hours calls, books directly into the Dentrix schedule, and routes emergencies to the on-call line.",
    result:
      "Missed-call rate fell from 31% to 2% within 30 days. Of the recovered calls, 72% became booked appointments — adding ~$11,400/month in recovered production with zero additional staff.",
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
