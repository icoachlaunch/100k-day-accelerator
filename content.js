// ============================================================
//  DASHBOARD CONTENT CONFIG
//  Edit this file to update everything on your portal.
//  No HTML knowledge needed — just fill in the fields below.
// ============================================================

const SITE = {
  brand:   "$100K Day Accelerator",   // Shown in header + browser tab
  title:   "Members Portal",          // Main heading
  tagline: "Every guide, tool, and framework you need — in one place.",
  footer:  "© 2026 $100K Day Accelerator. Members only. Do not distribute.",
};

// ─── NAVIGATION PILLS ────────────────────────────────────────
// Quick-jump links shown below the search bar.
// href: use "#section-id" to jump to a section, or a full URL.

const NAV_PILLS = [
  { label: "MDM",          href: "#offer-engine" },
  { label: "Roadmap",      href: "#offer-engine" },
  { label: "Model Builder", href: "#offer-engine" },
  { label: "SCRIPT",       href: "#content-engine" },
  { label: "WW / AA",      href: "#content-engine" },
];

// ─── SECTIONS ────────────────────────────────────────────────
// Each section has:
//   id          — used for nav pill links (#id)
//   title       — section heading
//   badge       — small label next to the heading (optional)
//   badgeStyle  — "default" | "ai" | "ref" | "muted"
//   overviewLink — shows an "Overview Guide →" link (optional)
//   cards       — array of cards (see card format below)
//
// ─── CARD FORMAT ─────────────────────────────────────────────
//   label       — small uppercase label at top of card
//   title       — card heading
//   desc        — description paragraph
//   tags        — space-separated keywords for search
//   comingSoon  — true | false (grays out the card)
//   links       — array of buttons:
//                   { text, href, style }
//                   style: "primary" | "outline" | "disabled"

const SECTIONS = [

  // ── START HERE ──────────────────────────────────────────────
  {
    id:    "start-here",
    title: "Start Here",
    badge: "",
    cards: [
      {
        label: "New Members",
        title: "Getting Started",
        desc:  "Welcome. Download the guide and build checklist, then follow the onboarding path to launch your system.",
        tags:  "new members getting started onboarding",
        links: [
          { text: "Guide",          href: "#", style: "primary" },
          { text: "Build Checklist", href: "#", style: "primary" },
        ],
      },
      {
        label: "AI-Driven Marketing System",
        title: "AI Marketing System",
        desc:  "Build your complete AI-powered system. Download the workspace kit, follow the guide, and set it up step by step.",
        tags:  "ai marketing system workspace kit",
        links: [
          { text: "Guide",           href: "#", style: "primary" },
          { text: "Download Kit →",  href: "#", style: "outline" },
        ],
      },
    ],
  },

  // ── OFFER ENGINE ────────────────────────────────────────────
  {
    id:           "offer-engine",
    title:        "Offer Engine",
    badge:        "Engine 1",
    badgeStyle:   "default",
    overviewLink: "#",
    cards: [
      {
        label: "Million Dollar Message (MDM)",
        title: "Million Dollar Message",
        desc:  "The core formula that makes strangers stop and pay attention. Your primary offer statement that drives every asset.",
        tags:  "million dollar message mdm offer statement",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "Product Roadmap",
        title: "Product Roadmap",
        desc:  "Your unique 3-stage, 9-step system — the backbone of your offer, content, and lead magnet strategy.",
        tags:  "product roadmap stages steps backbone offer",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "Model Builder",
        title: "Model Builder",
        desc:  "Choose your path, set pricing, and build the business model that supports your system and revenue targets.",
        tags:  "model builder pricing business revenue",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
    ],
  },

  // ── CONTENT ENGINE ──────────────────────────────────────────
  {
    id:           "content-engine",
    title:        "Content Engine",
    badge:        "Engine 2",
    badgeStyle:   "default",
    overviewLink: "#",
    cards: [
      {
        label: "Lead Magnet",
        title: "Lead Magnet",
        desc:  "Turn your hot step into a tangible tool that gets the opt-in. One step, one outcome, paired with your core offer.",
        tags:  "lead magnet opt-in email list hot step",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "SCRIPT Content Framework",
        title: "SCRIPT Framework",
        desc:  "6 blocks of core persuasion copy that power every content asset. Write once, use everywhere across your system.",
        tags:  "script content framework copy persuasion blocks",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "SCRIPT VSL",
        title: "SCRIPT VSL",
        desc:  "Turn your SCRIPT into a video sales letter that converts strangers into customers from day one.",
        tags:  "script vsl video sales letter slides convert",
        links: [
          { text: "Guide",        href: "#", style: "primary" },
          { text: "AI Prompt",    href: "#", style: "primary" },
          { text: "Training Deck", href: "#", style: "primary" },
        ],
      },
      {
        label: "Enrollment Amplifier",
        title: "Enrollment Amplifier",
        desc:  "The one-page document that converts more customers from every campaign you run. Pairs with all traffic sources.",
        tags:  "enrollment amplifier conversion one-page campaign",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "Content Blocks",
        title: "Content Blocks",
        desc:  "13 conversion elements that transform your SCRIPT into sales pages, workshops, courses, and email sequences.",
        tags:  "content blocks sales page email copy elements",
        links: [
          { text: "Guide", href: "#", style: "primary" },
        ],
      },
      {
        label: "Winning Workshop",
        title: "Winning Workshop",
        desc:  "Your live conversion event — teach the hot step, pitch the membership. Primary conversion mechanism.",
        tags:  "winning workshop live event conversion webinar",
        links: [
          { text: "Guide",        href: "#", style: "primary" },
          { text: "AI Prompt",    href: "#", style: "primary" },
          { text: "Framework PDF", href: "#", style: "primary" },
        ],
      },
      {
        label: "Authority Amplifier",
        title: "Authority Amplifier",
        desc:  "The video on your thank-you page that builds trust and drives to your next step. Pairs with your lead magnet.",
        tags:  "authority amplifier video thank you page trust",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },
      {
        label: "Paid Strategy Session",
        title: "Paid Strategy Session",
        desc:  "The session framework for high-ticket members — sell the session, close the program on the call.",
        tags:  "paid strategy session call close high ticket",
        links: [
          { text: "Guide",            href: "#", style: "primary" },
          { text: "Calibration Tool", href: "#", style: "primary" },
          { text: "AI Prompt",        href: "#", style: "primary" },
        ],
      },
      {
        label: "Membership Engine™",
        title: "Membership Engine™",
        desc:  "The system that retains members, builds momentum, and turns your best customers into advocates.",
        tags:  "membership engine retain members advocacy retention",
        links: [
          { text: "Guide",        href: "#", style: "primary" },
          { text: "Training Deck", href: "#", style: "primary" },
        ],
      },
      {
        label: "Content Roadmap",
        title: "Content Roadmap",
        desc:  "Map 250 pieces of authority content across your entire Product Roadmap — VSLs, authority content, and follow-up.",
        tags:  "content roadmap 250 pieces authority vsl email",
        links: [
          { text: "Guide",        href: "#", style: "primary" },
          { text: "AI Prompt",    href: "#", style: "primary" },
          { text: "Training Deck", href: "#", style: "primary" },
        ],
      },
      {
        label: "Copywriting 101",
        title: "Copywriting 101",
        desc:  "Master the 18-filter system that turns structured copy into world-class assets. AI-powered copy review.",
        tags:  "copywriting 101 copy chief filters world class",
        links: [
          { text: "Guide",        href: "#", style: "primary" },
          { text: "Training Deck", href: "#", style: "primary" },
          { text: "AI Prompt",    href: "#", style: "primary" },
        ],
      },
      {
        label:     "Ninja Content Sequence",
        title:     "Ninja Content Sequence",
        desc:      "The 5-message email nurture sequence powered by your SCRIPT — turns subscribers into buyers automatically.",
        tags:      "ninja content sequence email nurture subscribers",
        comingSoon: true,
        links: [
          { text: "Guide",     href: "#", style: "disabled" },
          { text: "AI Prompt", href: "#", style: "disabled" },
        ],
      },
    ],
  },

  // ── TRAFFIC ENGINE ──────────────────────────────────────────
  {
    id:         "traffic-engine",
    title:      "Traffic Engine",
    badge:      "Engine 3 — Coming Soon",
    badgeStyle: "muted",
    cards: [
      {
        label:     "Traffic Engine",
        title:     "Traffic Engine",
        desc:      "Organic and paid traffic systems to drive the right people into your system at scale.",
        tags:      "traffic organic paid ads scale",
        comingSoon: true,
        links: [
          { text: "Guide", href: "#", style: "disabled" },
        ],
      },
    ],
  },

  // ── AI TRAINING & TOOLS ─────────────────────────────────────
  {
    id:         "ai-tools",
    title:      "AI Training & Tools",
    badge:      "AI Resources",
    badgeStyle: "ai",
    cards: [
      {
        label: "New AI Crash Course",
        title: "AI Crash Course",
        desc:  "Get up to speed with AI fast — the tools, the mindset, and the exact setup used inside your system.",
        tags:  "ai crash course tools mindset setup",
        links: [
          { text: "Guide",              href: "#", style: "primary" },
          { text: "Automation Tools →", href: "#", style: "outline" },
        ],
      },
    ],
  },

  // ── FRAMEWORKS & TOOLS ──────────────────────────────────────
  {
    id:         "frameworks",
    title:      "Frameworks & Tools",
    badge:      "Reference",
    badgeStyle: "ref",
    cards: [
      {
        label: "Revenue Calculator",
        title: "Revenue Calculator",
        desc:  "Run your numbers — revenue projections, conversion benchmarks, and phase-specific targets for your model.",
        tags:  "calculator revenue projections conversion benchmarks",
        links: [
          { text: "Calculator", href: "#", style: "primary" },
        ],
      },
      {
        label: "Funnel Comparison",
        title: "Funnel Comparison",
        desc:  "Compare 22 funnel models side by side — see which path generates the most revenue for your situation.",
        tags:  "funnel comparison 22 models revenue",
        links: [
          { text: "Calculator", href: "#", style: "primary" },
        ],
      },
      {
        label: "Confirmation Video Framework",
        title: "Confirmation Video Framework",
        desc:  "The video sequence that converts registrants into attendees and reduces no-show rates.",
        tags:  "confirmation video framework registrants attendees",
        links: [
          { text: "PDF", href: "#", style: "primary" },
        ],
      },
      {
        label: "Opt-In VSL Framework",
        title: "Opt-In VSL Framework",
        desc:  "The video sales letter framework for lead magnet opt-in pages that maximizes subscriber conversion.",
        tags:  "opt-in vsl framework lead magnet video",
        links: [
          { text: "PDF", href: "#", style: "primary" },
        ],
      },
    ],
  },

];

// ─── COACHING CTA ────────────────────────────────────────────
// The banner at the bottom of the page.

const COACHING_CTA = {
  title: "Get coaching on your assets",
  desc:  "Post your work in the community for live feedback from the coaching team.",
  btnText: "Go to Coaching Group →",
  btnHref: "#",
};
