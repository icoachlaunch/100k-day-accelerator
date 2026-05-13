// ============================================================
//  DASHBOARD CONTENT CONFIG
//  This is the ONLY file you need to edit.
//  Update content here, save, push to GitHub — site updates live.
// ============================================================

const SITE = {
  brand:   "Coach Launch",
  title:   "The $100K Day Accelerator",
  tagline: "Every guide, tool, prompt and framework you will ever need to run a successful $100K Day masterclass.",
  footer:  "© 2026 Coachlaunch.com. Members only. Do not distribute.",
};

// ─── NAVIGATION PILLS ────────────────────────────────────────
// Quick-jump links shown below the search bar.

const NAV_PILLS = [
  { label: "Phase 1", href: "#offer-engine" },
  { label: "Phase 2", href: "#money-engine" },
  { label: "Phase 3", href: "#client-engine" },
  { label: "Phase 4", href: "#training-tools" },
  { label: "Phase 5", href: "#frameworks" },
];

// ─── SECTIONS ────────────────────────────────────────────────
// Each section has:
//   id           — used for pill nav links (e.g. href: "#offer-engine")
//   title        — section heading text
//   badge        — small label next to heading (e.g. "MODULE 1")
//   badgeStyle   — "default" (indigo) | "ai" (green) | "ref" (orange) | "muted" (gray)
//   overviewLink — adds an "Overview Guide →" link. Set to "#" or a real URL.
//                  Remove the line entirely if you don't want it.
//   cards        — list of cards in this section (see card format below)
//
// ─── CARD FORMAT ─────────────────────────────────────────────
//   label       — small caps label at top of card
//   title       — card heading
//   desc        — one or two sentence description
//   tags        — space-separated search keywords (not shown on card)
//   comingSoon  — true (grays out card + shows badge) | remove line if not needed
//   links       — buttons shown on the card:
//                   text   = button label
//                   href   = link URL ("#" = placeholder)
//                   style  = "primary" (filled) | "outline" (bordered) | "disabled" (grayed)

const SECTIONS = [

  // ════════════════════════════════════════════════════════════
  //  START HERE
  // ════════════════════════════════════════════════════════════
  {
    id:    "start-here",
    title: "Start Here",
    badge: "New Members",
    badgeStyle: "muted",
    cards: [

      {
        label: "New Members",
        title: "Getting Started",
        desc:  "Welcome to the portal. Be sure to download the guide and checklist so you are crystal clear on the entire system before you begin.",
        tags:  "new members getting started guide checklist onboarding",
        links: [
          { text: "Guide",          href: "#", style: "primary" },
          { text: "Build Checklist", href: "#", style: "primary" },
        ],
      },

      {
        label: "Setup",
        title: "Claude AI Setup",
        desc:  "Build your complete system. Download the workspace kit, follow the guide, and set up your system in the right order.",
        tags:  "claude ai setup workspace kit system",
        links: [
          { text: "Guide",          href: "#", style: "primary" },
          { text: "Download Kit →", href: "#", style: "outline" },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════
  //  OFFER ENGINE — MODULE 1
  // ════════════════════════════════════════════════════════════
  {
    id:           "offer-engine",
    title:        "OFFER Engine",
    badge:        "Module 1",
    badgeStyle:   "default",
    overviewLink: "#",
    cards: [

      {
        label: "Offer Engine",
        title: "$Million Story",
        desc:  "The 5-element formula that makes strangers stop scrolling. Your core offer statement that drives everything.",
        tags:  "million story offer formula core statement scrolling",
        links: [
          { text: "Guide",    href: "#", style: "primary" },
          { text: "Resource", href: "#", style: "primary" },
        ],
      },

      {
        label: "Offer Engine",
        title: "Magic Formula",
        desc:  "Your unique 3-stage, 9-step system — the backbone of your offer, content, and lead magnet.",
        tags:  "magic formula stages steps backbone offer lead magnet",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Offer Engine",
        title: "The SCORE CARD",
        desc:  "5 Act system of core persuasion copy that powers every content asset. Write once, use everywhere.",
        tags:  "score card persuasion copy content asset acts",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Offer Engine",
        title: "Money Model",
        desc:  "Choose your path, set pricing, and build the business model that supports your engine.",
        tags:  "money model pricing business model path",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Offer Engine",
        title: "Red Diamond Offer",
        desc:  "Choose your path, set pricing, and build the business model that supports your engine.",
        tags:  "red diamond offer pricing business model",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════
  //  MONEY ENGINE — MODULE 2
  // ════════════════════════════════════════════════════════════
  {
    id:           "money-engine",
    title:        "MONEY Engine",
    badge:        "Module 2",
    badgeStyle:   "default",
    overviewLink: "#",
    cards: [

      {
        label: "Money Engine",
        title: "Lead Magnet",
        desc:  "Turn your core concept into a tangible tool that gets the opt-in. One step, one object.",
        tags:  "lead magnet opt-in core concept tangible tool",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "TNT Masterclass",
        desc:  "Your live conversion event — teach the core concept, pitch the membership. The primary conversion mechanism.",
        tags:  "tnt masterclass live event conversion membership pitch",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "Ticket Sales Video",
        desc:  "The one-page document that converts 25-50% more customers from every campaign you run.",
        tags:  "ticket sales video conversion campaign customers",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "Show-Up Amplifier",
        desc:  "13 conversion elements that transform your framework into sales pages, workshops, and emails.",
        tags:  "show up amplifier conversion elements sales pages workshops emails",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "Sniper Close Sequence",
        desc:  "The video on your thank-you page that builds trust and drives to your next step.",
        tags:  "sniper close sequence video thank you page trust",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "Cashflow Engine",
        desc:  "The 5-message email nurture sequence powered by your framework — turns subscribers into buyers.",
        tags:  "cashflow engine email nurture sequence subscribers buyers",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

      {
        label: "Money Engine",
        title: "Genie X Converter",
        desc:  "The 5-message email nurture sequence powered by your framework — turns subscribers into buyers.",
        tags:  "genie x converter email sequence framework buyers",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════
  //  CLIENT ENGINE — MODULE 3
  // ════════════════════════════════════════════════════════════
  {
    id:         "client-engine",
    title:      "CLIENT Engine",
    badge:      "Module 3",
    badgeStyle: "default",
    cards: [

      {
        label: "Client Engine",
        title: "Goliath Content",
        desc:  "Organic and paid traffic systems to drive the right people into your ecosystem.",
        tags:  "goliath content organic paid traffic ecosystem",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

      {
        label: "Client Engine",
        title: "Pixie Dust Social",
        desc:  "Organic and paid traffic systems to drive the right people into your ecosystem.",
        tags:  "pixie dust social organic traffic ecosystem",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

      {
        label: "Client Engine",
        title: "Dragon Fire Ads",
        desc:  "Organic and paid traffic systems to drive the right people into your ecosystem.",
        tags:  "dragon fire ads paid traffic ecosystem",
        links: [
          { text: "Guide",     href: "#", style: "primary" },
          { text: "AI Prompt", href: "#", style: "primary" },
          { text: "Framework", href: "#", style: "primary" },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════
  //  TRAINING & TOOLS
  // ════════════════════════════════════════════════════════════
  {
    id:         "training-tools",
    title:      "Training & Tools",
    badge:      "Resources",
    badgeStyle: "ai",
    cards: [

      {
        label: "Training",
        title: "Masterclass Series",
        desc:  "Get up to speed fast — the tools, the mindset, and the exact setup used inside the program.",
        tags:  "masterclass series training tools mindset setup",
        links: [
          { text: "Guide",           href: "#", style: "primary" },
          { text: "Access Tools →",  href: "#", style: "outline" },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════
  //  FRAMEWORKS & REFERENCE
  // ════════════════════════════════════════════════════════════
  {
    id:         "frameworks",
    title:      "Frameworks & Reference",
    badge:      "Reference",
    badgeStyle: "ref",
    cards: [

      {
        label: "Reference",
        title: "Revenue Calculator",
        desc:  "Run your numbers — revenue projections, conversion benchmarks, and phase-specific targets.",
        tags:  "revenue calculator projections benchmarks targets",
        links: [
          { text: "Calculator", href: "#", style: "primary" },
        ],
      },

      {
        label: "Reference",
        title: "Model Comparison",
        desc:  "Compare different models side by side — see which path generates the most revenue.",
        tags:  "model comparison revenue path side by side",
        links: [
          { text: "Calculator", href: "#", style: "primary" },
        ],
      },

      {
        label: "Reference",
        title: "Video Frameworks",
        desc:  "The video sequence structures that convert registrants into attendees and buyers.",
        tags:  "video frameworks registrants attendees buyers sequence",
        links: [
          { text: "PDF", href: "#", style: "primary" },
        ],
      },

    ],
  },

];

// ─── COACHING CTA ────────────────────────────────────────────
// Banner at the bottom of the page.

const COACHING_CTA = {
  title:   "Get coaching on your assets",
  desc:    "Post your work in the community for live feedback from the coaching team and connect with other members.",
  btnText: "Go to Coaching Group →",
  btnHref: "#",
};
