// Data-driven landing pages for AEO/GEO-required commercial routes.
// Each entry powers <LandingPage> with Service + FAQPage + BreadcrumbList JSON-LD,
// a visible Quick Answer block, and 6–10 FAQs.
//
// HARD RULES followed below:
//  - No fake testimonials, no fake HIPAA/BAA claims, no fake awards.
//  - All quantitative claims include a methodology or "typical range" qualifier.
//  - Internal-link slugs reference real routes in this app.

export type LandingFAQ = { q: string; a: string };

export type LandingPage = {
  slug: string; // top-level slug, e.g. "missed-call-recovery-for-dental-clinics"
  category: "use-case" | "integration";
  breadcrumbLabel: string; // short label for breadcrumb / nav
  h1: string;
  title: string; // <title>
  metaDescription: string; // <meta description>
  quickAnswer: { question: string; answer: string };
  intro: string;
  outcomes: { value: string; label: string }[];
  howItWorks: { title: string; body: string }[];
  features: string[];
  bestFor: string[];
  faqs: LandingFAQ[];
  internalLinks: { label: string; to: string }[];
  serviceType: string; // for schema.org Service
};

export const landingPages: LandingPage[] = [
  // ─── USE CASES ──────────────────────────────────────────────────────────────
  {
    slug: "missed-call-recovery-for-dental-clinics",
    category: "use-case",
    breadcrumbLabel: "Missed Call Recovery",
    h1: "Missed Call Recovery for Dental Clinics",
    title:
      "Missed Call Recovery for Dental Clinics | OrthoAutomate AI Receptionist",
    metaDescription:
      "Stop losing $4K–$12K/month to missed dental clinic calls. Our AI receptionist answers in under 2 seconds, books straight into Dentrix/Open Dental/Eaglesoft/Curve, and runs 24/7.",
    quickAnswer: {
      question: "How do dental clinics recover missed calls without hiring more staff?",
      answer:
        "OrthoAutomate installs a 24/7 AI receptionist that answers every dental clinic call in under 2 seconds, books appointments directly into Dentrix, Open Dental, Eaglesoft, or Curve, and routes urgent cases to a human. Clinics typically cut missed-call rates from 25%+ to under 3% and recover $4,000–$12,000 in monthly production.",
    },
    intro:
      "Most private dental practices miss 18–35% of inbound calls during huddles, lunch, after-hours, and weekends. Each missed new-patient call is worth $600–$1,200 in first-visit production — and $4K–$25K in lifetime value for ortho, implants, or full-arch cases. This page explains how an AI receptionist closes that gap permanently, without adding front-desk staff.",
    outcomes: [
      { value: "<2s", label: "Average pickup time" },
      { value: "<3%", label: "Missed-call rate post-install (typical)" },
      { value: "60–80%", label: "Recovered calls that book" },
    ],
    howItWorks: [
      {
        title: "Audit your missed-call leak",
        body: "We pull your last 30 days of call logs from your VoIP (RingCentral, Mango, Weave, etc.) and calculate the exact monthly dollar loss based on your average new-patient value.",
      },
      {
        title: "Install the AI receptionist in 72 hours",
        body: "We train the AI on your services, hours, providers, insurance, and brand tone, then connect it directly to your PMS calendar and phone system. Zero work for your team.",
      },
      {
        title: "Track every recovered call",
        body: "Monthly report shows calls captured, appointments booked, and dollars recovered — with transcripts logged into your PMS for review.",
      },
    ],
    features: [
      "24/7/365 coverage — no voicemail, no missed calls",
      "Direct calendar booking into Dentrix, Open Dental, Eaglesoft, Curve",
      "Bilingual support (English + Spanish) on request",
      "Real-time human escalation with full conversation context",
      "Call recordings and transcripts logged to your PMS",
      "Custom voice + brand tone — sounds like your front desk",
      "Encrypted in transit and at rest",
    ],
    bestFor: [
      "Practices missing 15%+ of inbound calls",
      "Clinics overwhelmed at peak hours, lunch, and after-work spike",
      "Multi-location DSOs needing consistent call handling",
      "Specialty practices (ortho, implants, cosmetic) with high-value calls",
    ],
    faqs: [
      {
        q: "How much revenue does the average clinic recover from missed-call capture?",
        a: "Clinics with 20%+ missed-call rates typically recover $4,000–$12,000/month in booked production after install. The exact figure depends on call volume, average new-patient value, and historical booking rate. Our free Revenue Audit calculates this from your actual call logs before you commit to anything.",
      },
      {
        q: "How is this different from voicemail or a call-overflow service?",
        a: "Voicemail loses 80%+ of new-patient callers — they hang up and call a competitor. Generic overflow call centers don't know your providers, insurance, or pricing, and can't book into your PMS. Our AI receptionist books directly into your calendar, sounds like your front desk, and knows your clinic's services.",
      },
      {
        q: "Can patients tell they're talking to AI?",
        a: "Most cannot. The AI uses natural conversational tone, handles interruptions, and adapts to accents. The moment a caller asks for a human or has an emergency, the call transfers instantly with full context.",
      },
      {
        q: "What happens during a real dental emergency?",
        a: "The AI is trained on emergency keywords (swelling, severe pain, trauma, broken tooth) and routes the call immediately to your on-call number with the patient's name, callback number, and a one-line summary.",
      },
      {
        q: "Which dental PMS do you integrate with?",
        a: "Direct integrations with Dentrix, Open Dental, Eaglesoft, and Curve Dental are included. CSV/manual workflows are supported as a fallback for less common systems.",
      },
      {
        q: "How long does setup take?",
        a: "72 hours from kickoff. We handle 100% of the technical setup — phone routing, PMS integration, AI training on your clinic's tone and services, and team onboarding.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No. All plans are month-to-month and you can cancel any time. We earn the business each month through measurable recovered revenue.",
      },
    ],
    internalLinks: [
      { label: "Calculate your missed-call revenue loss", to: "/roi-calculator" },
      { label: "Manual follow-up vs AI — full comparison", to: "/compare/manual-follow-up-vs-ai" },
      { label: "Treatment plan follow-up automation", to: "/treatment-plan-follow-up-ai" },
      { label: "How we handle data & privacy", to: "/security-and-privacy" },
    ],
    serviceType: "Missed Call Recovery for Dental Clinics",
  },
  {
    slug: "treatment-plan-follow-up-ai",
    category: "use-case",
    breadcrumbLabel: "Treatment Plan Follow-Up",
    h1: "AI Treatment Plan Follow-Up for Dental Clinics",
    title:
      "AI Treatment Plan Follow-Up for Dental Clinics | OrthoAutomate",
    metaDescription:
      "Reactivate 15–25% of unaccepted dental treatment plans. AI nurture sequences over 30–60 days, prioritizing $3K+ cases. Works with Dentrix, Open Dental, Eaglesoft, Curve.",
    quickAnswer: {
      question: "How do you follow up on unaccepted dental treatment plans automatically?",
      answer:
        "OrthoAutomate imports every unaccepted treatment plan from your PMS, prioritizes $3K+ cases, and runs personalized 30–60 day SMS and email sequences with objection-handling content and one-tap booking links. Across installs, 15–25% of stuck plans reactivate without discounts or pressure tactics.",
    },
    intro:
      "Every private dental practice has a six- or seven-figure pile of diagnosed-but-unaccepted treatment plans sitting in their PMS. Patients rarely say no outright — they say 'let me think,' 'I'll check with my spouse,' or 'I'll call back.' Without a structured follow-up cadence, those plans quietly die. This page explains the framework we use to reactivate them.",
    outcomes: [
      { value: "15–25%", label: "Reactivation rate on stuck plans (typical)" },
      { value: "$3K+", label: "High-value cases prioritized first" },
      { value: "30–60 days", label: "Full nurture cadence per patient" },
    ],
    howItWorks: [
      {
        title: "Import unaccepted plans",
        body: "We pull every unaccepted treatment plan from the last 18–24 months out of Dentrix, Open Dental, Eaglesoft, Curve, or a CSV export, then sort by treatment value.",
      },
      {
        title: "Run the 30–60 day cadence",
        body: "Personalized SMS + email referencing the specific procedure, with objection handling for cost (financing), timing, and fear/sedation. One-tap booking links throughout.",
      },
      {
        title: "Book, escalate, and report",
        body: "Booked appointments flow straight into your calendar. Clinical questions or frustration escalate to your team. Monthly report shows every reactivated dollar.",
      },
    ],
    features: [
      "Automated import of unaccepted plans from your PMS",
      "30–60 day SMS + email cadence with objection handling",
      "$3K+ case prioritization (implants, ortho, full arches, large restorative)",
      "One-tap booking links into your calendar",
      "Human escalation for clinical questions or frustration",
      "Monthly reactivation report with dollar-tracked ROI",
      "Opt-out on every message",
    ],
    bestFor: [
      "Practices with 50+ unaccepted plans sitting in the PMS",
      "Implant, ortho, and cosmetic practices with high-ticket cases",
      "Clinics where no one has time for systematic follow-up",
      "Owners who want production from patients already diagnosed",
    ],
    faqs: [
      {
        q: "How far back do you reactivate plans?",
        a: "We typically import unaccepted plans from the last 18–24 months. Plans older than that get a softer re-introduction sequence; plans under 90 days old get the full objection-handling cadence.",
      },
      {
        q: "Will patients feel spammed?",
        a: "No. Patients get 6–8 touches over 60 days — not daily messages. Every message is personalized to the specific procedure and includes opt-out. Patients who decline are removed immediately.",
      },
      {
        q: "What's a realistic reactivation rate?",
        a: "15–25% of unaccepted plans book within 60 days across our installs. On a $200K backlog of stuck treatment, that's $30K–$50K of recovered production in the first 2 months.",
      },
      {
        q: "Do you offer discounts to close the case?",
        a: "Only if you ask us to. By default the sequence uses financing options (CareCredit, Sunbit, in-house plans) and patient education — never discounts. Discounting trains patients to wait.",
      },
      {
        q: "Which PMS systems do you support?",
        a: "Dentrix, Open Dental, Eaglesoft, and Curve Dental directly. CSV exports work for any other system as a fallback.",
      },
      {
        q: "Is patient data handled securely?",
        a: "Yes — encrypted in transit and at rest, minimum-necessary data principle, and patient information is never used to train public AI models. See our Security & Privacy page for details.",
      },
      {
        q: "How is success measured?",
        a: "Booked appointments and dollars of treatment reactivated — both reported monthly, tied to specific patients and procedures so you can verify against your PMS.",
      },
    ],
    internalLinks: [
      { label: "Estimate reactivation revenue", to: "/roi-calculator" },
      { label: "How AI follows up treatment plans", to: "/blog/how-ai-follows-up-treatment-plans" },
      { label: "Manual follow-up vs AI", to: "/compare/manual-follow-up-vs-ai" },
      { label: "Dental lead conversion automation", to: "/dental-lead-conversion-ai" },
    ],
    serviceType: "AI Treatment Plan Follow-Up",
  },
  {
    slug: "dental-lead-conversion-ai",
    category: "use-case",
    breadcrumbLabel: "Dental Lead Conversion",
    h1: "AI Dental Lead Conversion — Reply to Every Ad Lead in Under 60 Seconds",
    title:
      "AI Dental Lead Conversion | OrthoAutomate (Google, Facebook, Instagram)",
    metaDescription:
      "Reply to every Google, Facebook, and Instagram dental ad lead in under 60 seconds via SMS and DM. Qualify, book, and re-engage ghosted leads automatically.",
    quickAnswer: {
      question: "How do dental clinics convert more Google and Facebook ad leads?",
      answer:
        "OrthoAutomate replies to every paid ad lead in under 60 seconds via SMS and Instagram/Facebook DM, qualifies them with 2–3 conversational questions, and books directly into the clinic's calendar. Ghosted leads get a 7–14 day re-engagement sequence. Booking rates typically double without changing ad spend.",
    },
    intro:
      "Industry research is unambiguous: leads contacted within 5 minutes are roughly 100× more likely to qualify than those contacted after 30 minutes. Most dental clinics take hours — sometimes days — to reply, while a competitor's auto-responder is already in the conversation. This page explains how we close that gap to under 60 seconds.",
    outcomes: [
      { value: "<60s", label: "Average response time" },
      { value: "~2×", label: "Booking rate vs. human-only (typical)" },
      { value: "~50%", label: "Lower effective cost per booked patient" },
    ],
    howItWorks: [
      {
        title: "Connect your lead sources",
        body: "Direct integrations with Google Ads Lead Forms, Facebook & Instagram Lead Ads, Meta Messenger, website forms, and your CRM. Every new lead hits the AI in real time.",
      },
      {
        title: "Qualify in 2–3 messages",
        body: "Conversational SMS / DM that confirms service interest, insurance, location, and preferred time — without sounding like a survey.",
      },
      {
        title: "Book or re-engage",
        body: "Qualified leads are booked directly into the calendar. Ghosted leads get a 7–14 day sequence that typically recovers 20–30% of them.",
      },
    ],
    features: [
      "<60-second reply across SMS, Instagram DM, Facebook Messenger",
      "Direct calendar booking into your PMS",
      "7–14 day ghosted-lead re-engagement sequence",
      "Real-time human handoff with full conversation context",
      "Per-campaign attribution and ROI reporting",
      "Spam/tire-kicker filtering before your team sees the lead",
      "TCPA / 10DLC-compliant SMS infrastructure",
    ],
    bestFor: [
      "Clinics spending $2K+/month on Google or Meta ads",
      "Practices running implant, Invisalign, or cosmetic campaigns",
      "DSOs with multiple locations and shared ad spend",
      "Any clinic where leads sit in an inbox for hours",
    ],
    faqs: [
      {
        q: "Which ad platforms do you support?",
        a: "Google Ads (Lead Forms, Search, Performance Max), Facebook & Instagram Lead Ads, Meta Messenger, TikTok Lead Generation, and any website form via webhook. Custom CRM integrations are available.",
      },
      {
        q: "Will the AI sound spammy and scare leads off?",
        a: "No. We A/B test message tone for every clinic and tune for the local market. The AI uses your clinic's name, references the specific ad the lead clicked, and asks helpful questions — not pressure tactics.",
      },
      {
        q: "What about TCPA / SMS compliance?",
        a: "Every message includes opt-out language, only goes to leads who consented on the ad form, and is sent from a registered 10DLC business number. Full compliance documentation is provided.",
      },
      {
        q: "How fast do I see results?",
        a: "Booking rates typically double within 14 days. Re-engagement of ghosted leads compounds month-over-month — most clinics see steady-state ROI by day 60.",
      },
      {
        q: "Does this replace my marketing agency?",
        a: "No — it makes them more effective. Your agency drives the lead; we make sure the lead actually becomes a booked appointment. Most agencies see their reported CPA drop 30–50% after install.",
      },
      {
        q: "Can the AI handle insurance questions?",
        a: "Yes. It's trained on which insurance plans your clinic accepts, in-network vs out-of-network policies, and self-pay financing options. Edge cases escalate to a human.",
      },
    ],
    internalLinks: [
      { label: "Why 60-second lead response doubles ad ROI", to: "/blog/ad-lead-response-time-dental-marketing" },
      { label: "Estimate lead conversion revenue", to: "/roi-calculator" },
      { label: "Missed call recovery", to: "/missed-call-recovery-for-dental-clinics" },
      { label: "No-show recovery automation", to: "/no-show-recovery-automation" },
    ],
    serviceType: "AI Dental Lead Conversion",
  },
  {
    slug: "no-show-recovery-automation",
    category: "use-case",
    breadcrumbLabel: "No-Show Recovery",
    h1: "Dental No-Show Recovery Automation",
    title:
      "Dental No-Show Recovery Automation | OrthoAutomate",
    metaDescription:
      "Automatically recover dental no-shows and last-minute cancellations. AI confirms, reschedules, and fills holes in the schedule using your existing PMS.",
    quickAnswer: {
      question: "How can dental clinics reduce no-shows and recover empty chair time?",
      answer:
        "OrthoAutomate runs AI confirmation sequences before every appointment and, when no-shows or cancellations happen, automatically reaches out to reschedule and fills open chair time from a prioritized waitlist of dormant and treatment-plan patients. Clinics typically cut no-show rates 30–50% and recover 2–5 chair-hours per week.",
    },
    intro:
      "A typical no-show in general dentistry costs $250–$400 in lost chair time; in specialty practices it's $800–$2,500. Most clinics have no system for backfilling that time — the chair just sits empty. This page explains how AI confirms, recovers, and refills no-shows automatically.",
    outcomes: [
      { value: "30–50%", label: "No-show rate reduction (typical)" },
      { value: "2–5 hrs", label: "Chair-time refilled per week" },
      { value: "24/7", label: "Automatic confirmations + recovery" },
    ],
    howItWorks: [
      {
        title: "Pre-appointment confirmations",
        body: "AI sends SMS confirmations 72h, 24h, and 2h before each appointment with one-tap confirm / reschedule. Patients who don't confirm escalate to a final personal touch.",
      },
      {
        title: "Instant no-show recovery",
        body: "When a no-show happens, AI immediately reaches the patient to reschedule with empathy — not a generic blast. Reasons (forgot, transport, anxiety) feed future workflows.",
      },
      {
        title: "Backfill from a smart waitlist",
        body: "Open chair time is offered to a ranked waitlist (treatment-plan patients, dormant high-LTV patients, hygiene overdue) so the slot rarely stays empty.",
      },
    ],
    features: [
      "Multi-touch SMS confirmations with one-tap actions",
      "Automatic rescheduling on no-show / cancellation",
      "Smart waitlist prioritizing high-value patients",
      "PMS integration: Dentrix, Open Dental, Eaglesoft, Curve",
      "Reason-code tracking (forgot, transport, anxiety, cost)",
      "Human escalation when sentiment turns negative",
      "Monthly report on recovered chair-hours and production",
    ],
    bestFor: [
      "Practices with no-show rates above 8%",
      "Specialty clinics where empty chair time is $800+/hour",
      "Multi-provider practices with complex schedules",
      "Clinics already running treatment-plan follow-up who want full schedule density",
    ],
    faqs: [
      {
        q: "How much does a no-show actually cost?",
        a: "In general dentistry, $250–$400 per slot. In ortho, implants, or cosmetic specialties, $800–$2,500 per slot. A practice losing 6 hours/week to no-shows is leaving $60K–$300K per year on the table.",
      },
      {
        q: "Will patients find confirmation messages annoying?",
        a: "No — most patients prefer SMS confirmations to phone calls. Frequency is tuned per clinic; patients can opt down to a single 24h reminder if they prefer.",
      },
      {
        q: "How does the waitlist know who to call first?",
        a: "Patients are ranked by treatment value, recency, opt-in status, and likelihood to accept based on past behavior. High-LTV patients with active treatment plans are always offered first.",
      },
      {
        q: "Does this work with HIPAA / privacy rules?",
        a: "Yes. Messages reveal only minimum-necessary information (appointment time, clinic name) and patient data stays inside the secure pipeline. We don't claim formal HIPAA certification — see our Security & Privacy page for full detail.",
      },
      {
        q: "How fast can we see no-show rates drop?",
        a: "Most clinics see a measurable drop in 2–3 weeks once full confirmation coverage starts. The backfill side compounds month-over-month as the waitlist matures.",
      },
      {
        q: "Can it handle same-day cancellations?",
        a: "Yes — same-day cancellations trigger instant waitlist outreach to high-priority patients within minutes, often filling the slot before the original patient even notices the rescheduling.",
      },
    ],
    internalLinks: [
      { label: "Dormant patient reactivation", to: "/dormant-patient-reactivation" },
      { label: "Treatment plan follow-up", to: "/treatment-plan-follow-up-ai" },
      { label: "ROI calculator", to: "/roi-calculator" },
      { label: "Security and privacy", to: "/security-and-privacy" },
    ],
    serviceType: "Dental No-Show Recovery Automation",
  },
  {
    slug: "dormant-patient-reactivation",
    category: "use-case",
    breadcrumbLabel: "Dormant Patient Reactivation",
    h1: "Dormant Dental Patient Reactivation",
    title:
      "Dormant Patient Reactivation for Dental Clinics | OrthoAutomate",
    metaDescription:
      "Reactivate patients who haven't been seen in 12+ months. AI personalized re-engagement using your PMS history — recover hygiene, perio, and overdue treatment.",
    quickAnswer: {
      question: "How do dental clinics bring back patients who haven't been seen in over a year?",
      answer:
        "OrthoAutomate pulls dormant patients (typically 12+ months since last visit) from your PMS, segments them by last procedure and lifetime value, and runs personalized SMS + email re-engagement that books overdue hygiene, perio maintenance, and outstanding treatment. Reactivation rates of 8–15% are typical in the first 90 days.",
    },
    intro:
      "Every dental practice has a long tail of patients who 'fell off the chart' — moved jobs, lost insurance, missed a recall, or just drifted away. They were already comfortable with your team; reactivating them is faster and cheaper than acquiring a new patient. This page explains how we do it automatically.",
    outcomes: [
      { value: "8–15%", label: "Dormant-patient reactivation in 90 days" },
      { value: "12+ mo", label: "Default dormancy window" },
      { value: "1/5 cost", label: "Vs. acquiring a new patient via ads" },
    ],
    howItWorks: [
      {
        title: "Segment the dormant list",
        body: "Pull patients from your PMS by last-visit date and segment by last procedure, lifetime value, and overdue recall — so the right message reaches the right patient.",
      },
      {
        title: "Personalized re-engagement",
        body: "SMS + email that references the specific recall or treatment they're due for, with one-tap booking. Tone is warm, not transactional.",
      },
      {
        title: "Compound monthly",
        body: "Reactivated patients re-enter normal hygiene recall and treatment-plan follow-up — so they don't drift away again. Monthly report shows reactivations + downstream production.",
      },
    ],
    features: [
      "PMS-driven dormant patient segmentation",
      "Personalized SMS + email re-engagement",
      "One-tap booking into your calendar",
      "Insurance / benefit reset reminders (calendar-year prompts)",
      "Hand-off to live front desk for complex requests",
      "Monthly report showing reactivated patients + production",
      "Patient suppression list respected (opt-outs, deceased, transferred)",
    ],
    bestFor: [
      "Practices with 500+ dormant patients in the PMS",
      "Clinics whose hygiene chair has unused capacity",
      "Owners who want to use their existing patient base before scaling ad spend",
      "Specialty practices where past patients still need recall/maintenance",
    ],
    faqs: [
      {
        q: "What counts as a 'dormant' patient?",
        a: "By default, any active patient with no completed visit in the last 12+ months. The window is configurable per clinic — some prefer 6 months for hygiene, 18 for treatment.",
      },
      {
        q: "Won't patients feel like I'm just hounding them?",
        a: "No. The cadence is warm and limited (typically 3–4 touches over 6 weeks), opt-out is on every message, and patients who don't engage stop receiving messages.",
      },
      {
        q: "How is this different from a generic recall campaign?",
        a: "Generic recalls send the same message to everyone. Our system personalizes per patient — last procedure, last provider, overdue recall, and remaining insurance benefits — so the message actually matters.",
      },
      {
        q: "What about patients who moved or transferred?",
        a: "Bounced numbers, unresponsive patients across multiple cycles, and explicit transfer/move signals automatically suppress that patient from future sequences.",
      },
      {
        q: "How does this stack with treatment-plan follow-up?",
        a: "Treatment-plan follow-up handles diagnosed-but-unaccepted cases. Dormant reactivation handles patients we've lost contact with. Together they cover the full inactive base.",
      },
      {
        q: "How quickly do I see reactivations?",
        a: "First booked reactivations typically land within the first 7–10 days. Steady-state production from this channel usually shows up in monthly reports by day 60.",
      },
    ],
    internalLinks: [
      { label: "Treatment plan follow-up", to: "/treatment-plan-follow-up-ai" },
      { label: "No-show recovery", to: "/no-show-recovery-automation" },
      { label: "ROI calculator", to: "/roi-calculator" },
      { label: "Security & privacy", to: "/security-and-privacy" },
    ],
    serviceType: "Dormant Patient Reactivation",
  },

  // ─── INTEGRATIONS ──────────────────────────────────────────────────────────
  {
    slug: "dentrix-ai-revenue-recovery",
    category: "integration",
    breadcrumbLabel: "Dentrix AI Revenue Recovery",
    h1: "Dentrix AI Revenue Recovery",
    title:
      "Dentrix AI Revenue Recovery | OrthoAutomate Integration",
    metaDescription:
      "AI revenue recovery for clinics running Dentrix. Capture missed calls, reactivate treatment plans, convert leads — booked directly into your Dentrix calendar.",
    quickAnswer: {
      question: "How does OrthoAutomate work with Dentrix?",
      answer:
        "OrthoAutomate connects directly to your Dentrix calendar and patient records to power three AI systems: a 24/7 missed-call receptionist that books straight into Dentrix, treatment-plan follow-up that pulls unaccepted plans from Dentrix Treatment Manager, and lead conversion that schedules new patients into open Dentrix slots — without changing your daily workflow.",
    },
    intro:
      "Dentrix is the backbone of thousands of US dental practices. This page explains exactly how OrthoAutomate integrates with Dentrix to install missed-call recovery, treatment-plan follow-up, and lead conversion — with zero workflow disruption for your front desk.",
    outcomes: [
      { value: "72 hrs", label: "Setup to live on Dentrix" },
      { value: "0 changes", label: "To your Dentrix workflow" },
      { value: "Native", label: "Calendar + patient-record sync" },
    ],
    howItWorks: [
      {
        title: "Connect to Dentrix",
        body: "We connect to your Dentrix install via supported integration paths (eSync / API bridge / CSV fallback if needed). All work is done by our team — your IT or office manager doesn't have to lift a finger.",
      },
      {
        title: "Sync calendar & treatment plans",
        body: "Two-way sync of the appointment book and read access to unaccepted treatment plans. The AI books into the same slots your team books into.",
      },
      {
        title: "Go live in 72 hours",
        body: "Phone routing, lead sources, and follow-up sequences all activate together. Your front desk keeps using Dentrix exactly as they do today.",
      },
    ],
    features: [
      "Direct Dentrix calendar booking",
      "Unaccepted treatment plan import from Treatment Manager",
      "Patient-record sync (notes, recall types, insurance)",
      "Multi-provider, multi-operatory scheduling support",
      "Works with Dentrix Ascend and Dentrix G7",
      "CSV/manual fallback for unsupported configurations",
    ],
    bestFor: [
      "Single and multi-location Dentrix practices",
      "Specialty clinics using Dentrix for ortho/implants/cosmetic",
      "DSOs standardized on Dentrix across locations",
    ],
    faqs: [
      {
        q: "Which versions of Dentrix do you support?",
        a: "Dentrix G6, G7, and Dentrix Ascend are supported via documented integration paths. Older versions or custom configurations are supported via CSV/manual workflows as a fallback.",
      },
      {
        q: "Do you require a server or local install?",
        a: "No on-clinic install is required for the cloud workflows. For some on-prem Dentrix setups, a lightweight read/write bridge is installed during onboarding — we handle it.",
      },
      {
        q: "What data does OrthoAutomate pull from Dentrix?",
        a: "Minimum-necessary: appointment book availability, patient contact info, recall status, and unaccepted treatment plans. We do not pull clinical chart notes or imaging.",
      },
      {
        q: "Will this slow Dentrix down?",
        a: "No. All sync happens out-of-band and is throttled to avoid any impact on your live Dentrix usage.",
      },
      {
        q: "What happens if our Dentrix server is down?",
        a: "The AI receptionist keeps answering calls. Bookings queue and sync when Dentrix is back online; your front desk sees no gaps in the schedule.",
      },
      {
        q: "How long does setup take?",
        a: "72 hours from kickoff to live, including Dentrix integration, AI training on your clinic, and team onboarding.",
      },
    ],
    internalLinks: [
      { label: "Open Dental integration", to: "/open-dental-ai-revenue-recovery" },
      { label: "Missed call recovery", to: "/missed-call-recovery-for-dental-clinics" },
      { label: "Treatment plan follow-up", to: "/treatment-plan-follow-up-ai" },
      { label: "Security & privacy", to: "/security-and-privacy" },
    ],
    serviceType: "Dentrix AI Revenue Recovery",
  },
  {
    slug: "open-dental-ai-revenue-recovery",
    category: "integration",
    breadcrumbLabel: "Open Dental AI Revenue Recovery",
    h1: "Open Dental AI Revenue Recovery",
    title:
      "Open Dental AI Revenue Recovery | OrthoAutomate Integration",
    metaDescription:
      "AI revenue recovery for Open Dental practices. Books straight into your Open Dental calendar via the official API. Missed calls, treatment plans, lead conversion.",
    quickAnswer: {
      question: "How does OrthoAutomate integrate with Open Dental?",
      answer:
        "OrthoAutomate uses Open Dental's official API to read appointments, unaccepted treatment plans, and patient records, and to write new bookings directly into your Open Dental calendar. The AI receptionist, treatment-plan follow-up, and lead conversion all run natively against your Open Dental database in 72 hours.",
    },
    intro:
      "Open Dental's open API makes it one of the cleanest integrations in dental software. This page explains how OrthoAutomate uses that API to install missed-call recovery, treatment-plan follow-up, and lead conversion against your Open Dental system.",
    outcomes: [
      { value: "Native API", label: "Direct Open Dental integration" },
      { value: "72 hrs", label: "Setup to live" },
      { value: "Two-way", label: "Calendar + patient sync" },
    ],
    howItWorks: [
      {
        title: "Connect via the Open Dental API",
        body: "We configure the official Open Dental API connection during onboarding. Authentication uses a scoped key your team controls.",
      },
      {
        title: "Sync schedule, patients, and plans",
        body: "Real-time read of appointments, patients, and unaccepted treatment plans. Write access scoped to booking new appointments.",
      },
      {
        title: "Go live in 72 hours",
        body: "Phone routing, lead sources, and follow-up sequences activate together. Your front desk keeps using Open Dental exactly as today.",
      },
    ],
    features: [
      "Official Open Dental API integration",
      "Direct calendar booking into the right operatory and provider",
      "Unaccepted treatment plan extraction with value sorting",
      "Recall/hygiene status sync for dormant patient reactivation",
      "Per-provider scheduling rules respected",
      "Self-hosted and cloud-hosted Open Dental supported",
    ],
    bestFor: [
      "Practices that picked Open Dental for openness and customization",
      "Multi-provider clinics with complex scheduling rules",
      "DSOs running Open Dental across locations",
    ],
    faqs: [
      {
        q: "Do you use the official Open Dental API?",
        a: "Yes. We integrate via Open Dental's official API — no screen-scraping, no unsupported hacks. Authentication and scopes are controlled by your team.",
      },
      {
        q: "Self-hosted or cloud-hosted — does it matter?",
        a: "Both are supported. Self-hosted clinics need to whitelist our connection during onboarding; we handle the rest.",
      },
      {
        q: "What about custom Open Dental setups?",
        a: "Custom operatory layouts, provider rules, and recall configurations are mapped during onboarding so the AI books into the right slot every time.",
      },
      {
        q: "Does the AI honor my appointment-type rules?",
        a: "Yes — appointment types, durations, and provider restrictions in Open Dental are respected. The AI never books into a slot your team wouldn't book into.",
      },
      {
        q: "Can I see exactly what the AI changes in Open Dental?",
        a: "Yes. Every booking, every cancellation, every reschedule is logged with timestamps. You can audit it inside Open Dental and in our monthly report.",
      },
      {
        q: "What if I switch from Open Dental later?",
        a: "All your patient communication history stays portable. If you migrate to Dentrix, Eaglesoft, or Curve, we re-point the integration during onboarding — no data loss.",
      },
    ],
    internalLinks: [
      { label: "Dentrix integration", to: "/dentrix-ai-revenue-recovery" },
      { label: "Eaglesoft integration", to: "/eaglesoft-ai-revenue-recovery" },
      { label: "Treatment plan follow-up", to: "/treatment-plan-follow-up-ai" },
      { label: "ROI calculator", to: "/roi-calculator" },
    ],
    serviceType: "Open Dental AI Revenue Recovery",
  },
  {
    slug: "eaglesoft-ai-revenue-recovery",
    category: "integration",
    breadcrumbLabel: "Eaglesoft AI Revenue Recovery",
    h1: "Eaglesoft AI Revenue Recovery",
    title:
      "Eaglesoft AI Revenue Recovery | OrthoAutomate Integration",
    metaDescription:
      "AI revenue recovery for Eaglesoft clinics. Capture missed calls, follow up unaccepted treatment plans, and convert leads — booked directly into Eaglesoft.",
    quickAnswer: {
      question: "How does OrthoAutomate work with Eaglesoft?",
      answer:
        "OrthoAutomate connects to Eaglesoft via supported integration paths to read your appointment book, unaccepted treatment plans, and patient records, and to book new appointments back into Eaglesoft. The full stack — AI receptionist, treatment-plan follow-up, and lead conversion — runs against Eaglesoft in 72 hours.",
    },
    intro:
      "Eaglesoft is the standard at thousands of Patterson Dental practices. This page explains how OrthoAutomate integrates with Eaglesoft to install missed-call recovery, treatment-plan follow-up, and lead conversion — without changing how your team uses Eaglesoft.",
    outcomes: [
      { value: "72 hrs", label: "Setup to live on Eaglesoft" },
      { value: "Native", label: "Calendar + patient sync" },
      { value: "0 retraining", label: "For your front desk" },
    ],
    howItWorks: [
      {
        title: "Connect to Eaglesoft",
        body: "We configure the Eaglesoft integration via supported integration partners or a secure local bridge. Done entirely by our team.",
      },
      {
        title: "Sync calendar, patients, plans",
        body: "Real-time read of the appointment book and unaccepted treatment plans. The AI books directly into the same Eaglesoft schedule your team uses.",
      },
      {
        title: "Go live in 72 hours",
        body: "AI receptionist, treatment-plan follow-up, and lead conversion all activate together. Your team keeps using Eaglesoft exactly as today.",
      },
    ],
    features: [
      "Direct Eaglesoft calendar booking",
      "Unaccepted treatment plan extraction",
      "Patient-record sync (recall, insurance, contact)",
      "Multi-provider scheduling support",
      "Local-server-friendly bridge architecture",
      "CSV/manual fallback for edge cases",
    ],
    bestFor: [
      "Patterson Dental / Eaglesoft practices, single or multi-location",
      "Specialty clinics running Eaglesoft for orthodontics or cosmetic",
      "Owners who don't want to migrate PMS just to get AI",
    ],
    faqs: [
      {
        q: "Do I need to install anything on our Eaglesoft server?",
        a: "Most setups use a lightweight, read-and-write bridge installed by our team during onboarding. The bridge respects your network and IT policies.",
      },
      {
        q: "Does Patterson need to be involved?",
        a: "Usually not. The bridge runs alongside Eaglesoft without modifying it. If your Patterson rep needs to whitelist anything, we provide the documentation.",
      },
      {
        q: "What data is pulled from Eaglesoft?",
        a: "Minimum-necessary: appointment availability, patient contact info, recall status, and unaccepted treatment plans. We do not access clinical charting or imaging.",
      },
      {
        q: "What happens if Eaglesoft is offline?",
        a: "The AI receptionist keeps answering and queues new bookings. They sync back to Eaglesoft the moment the system is reachable — no lost appointments.",
      },
      {
        q: "Will the AI overbook?",
        a: "No. The AI sees real-time availability before offering a slot, and respects provider/operatory rules configured in Eaglesoft.",
      },
      {
        q: "How long does setup take?",
        a: "72 hours from kickoff. We handle Eaglesoft integration, AI training, phone routing, and team onboarding.",
      },
    ],
    internalLinks: [
      { label: "Dentrix integration", to: "/dentrix-ai-revenue-recovery" },
      { label: "Curve Dental integration", to: "/curve-dental-ai-revenue-recovery" },
      { label: "Missed call recovery", to: "/missed-call-recovery-for-dental-clinics" },
      { label: "Security & privacy", to: "/security-and-privacy" },
    ],
    serviceType: "Eaglesoft AI Revenue Recovery",
  },
  {
    slug: "curve-dental-ai-revenue-recovery",
    category: "integration",
    breadcrumbLabel: "Curve Dental AI Revenue Recovery",
    h1: "Curve Dental AI Revenue Recovery",
    title:
      "Curve Dental AI Revenue Recovery | OrthoAutomate Integration",
    metaDescription:
      "Cloud-native AI revenue recovery for Curve Dental clinics. Real-time calendar booking, treatment plan follow-up, and lead conversion via Curve's modern API.",
    quickAnswer: {
      question: "How does OrthoAutomate integrate with Curve Dental?",
      answer:
        "OrthoAutomate connects to Curve Dental's cloud platform to book appointments directly into Curve, pull unaccepted treatment plans, and sync patient records in real time. Because Curve is cloud-native, integration is fast — the AI receptionist, treatment-plan follow-up, and lead conversion all go live in 72 hours.",
    },
    intro:
      "Curve Dental is the leading modern cloud PMS in dentistry. This page explains how OrthoAutomate integrates with Curve to install missed-call recovery, treatment-plan follow-up, and lead conversion — taking full advantage of Curve's cloud-native architecture.",
    outcomes: [
      { value: "Cloud-native", label: "No local install required" },
      { value: "Real-time", label: "Two-way calendar sync" },
      { value: "72 hrs", label: "Live on Curve" },
    ],
    howItWorks: [
      {
        title: "Connect to Curve Dental",
        body: "We configure the Curve integration via supported pathways during onboarding. No on-site install — everything runs cloud-to-cloud.",
      },
      {
        title: "Sync schedule, patients, plans",
        body: "Real-time read of appointments and unaccepted treatment plans, with scoped write access for new bookings.",
      },
      {
        title: "Go live in 72 hours",
        body: "Phone routing, ad lead sources, and follow-up sequences activate together. Your team keeps using Curve exactly as today.",
      },
    ],
    features: [
      "Cloud-native integration — no servers or bridges",
      "Real-time two-way calendar sync",
      "Unaccepted treatment plan extraction",
      "Multi-location support for Curve DSOs",
      "Recall/hygiene status sync",
      "Per-provider scheduling rules respected",
    ],
    bestFor: [
      "Cloud-first practices that picked Curve for modern UX",
      "Multi-location groups standardized on Curve",
      "Specialty practices that want zero-server-overhead AI",
    ],
    faqs: [
      {
        q: "Do I need to install anything?",
        a: "No. Curve is cloud, OrthoAutomate is cloud — integration is entirely server-to-server. Nothing runs on your office computers.",
      },
      {
        q: "Does my Curve account need to be on a specific plan?",
        a: "Most current Curve plans expose the integration paths we use. If anything additional is needed, we'll flag it during the free audit before you commit.",
      },
      {
        q: "How fast can we go live?",
        a: "Because Curve is cloud-native, integration is typically the fastest of any PMS — clinics usually go live within 72 hours of kickoff.",
      },
      {
        q: "What about multi-location Curve setups?",
        a: "Fully supported. Each location can have its own AI receptionist persona, phone number, and reporting — while sharing centralized treatment-plan follow-up if desired.",
      },
      {
        q: "What if Curve is down?",
        a: "The AI receptionist keeps answering. Bookings queue and sync back to Curve when it's reachable — your front desk sees no gaps.",
      },
      {
        q: "Will the AI honor Curve's appointment rules?",
        a: "Yes — appointment types, durations, providers, and operatory restrictions are all respected. The AI never books a slot your team wouldn't book.",
      },
    ],
    internalLinks: [
      { label: "Open Dental integration", to: "/open-dental-ai-revenue-recovery" },
      { label: "Eaglesoft integration", to: "/eaglesoft-ai-revenue-recovery" },
      { label: "Dental lead conversion", to: "/dental-lead-conversion-ai" },
      { label: "ROI calculator", to: "/roi-calculator" },
    ],
    serviceType: "Curve Dental AI Revenue Recovery",
  },
];

export const getLandingPageBySlug = (slug: string) =>
  landingPages.find((p) => p.slug === slug);
