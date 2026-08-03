// Central navigation model. The `variant` field intentionally gives each
// desktop mega menu its own information hierarchy instead of forcing every
// business area into the same repeated grid.
export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
  meta?: string;
};

export type MegaMenu = {
  id: "clients" | "services" | "insights" | "tools" | "about";
  label: string;
  variant: "audiences" | "capabilities" | "editorial" | "tools" | "company";
  overviewHref: string;
  overviewLabel: string;
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
  };
  groups: {
    heading: string;
    links: NavigationLink[];
  }[];
};

export const megaMenus: MegaMenu[] = [
  {
    id: "clients",
    label: "Who we serve",
    variant: "audiences",
    overviewHref: "/clients",
    overviewLabel: "See every client pathway",
    featured: {
      eyebrow: "Client relationships",
      title: "A brokerage relationship shaped around how you invest.",
      description:
        "Different responsibilities, time horizons, and operating needs call for different service conversations.",
      href: "/clients",
      image: "/images/editorial/advisor-clients.jpg",
      imageAlt: "An adviser reviewing financial documents with clients",
    },
    groups: [
      {
        heading: "Private clients",
        links: [
          {
            label: "Individuals & families",
            href: "/clients/individuals-families",
            description: "Personal portfolios considered alongside family priorities.",
          },
          {
            label: "OFWs & seafarers",
            href: "/clients/ofws-seafarers",
            description: "Account support across distance, schedules, and time zones.",
          },
          {
            label: "New investors",
            href: "/clients/new-investors",
            description: "A measured entry into Philippine equities.",
          },
        ],
      },
      {
        heading: "Professional clients",
        links: [
          {
            label: "Institutions & corporations",
            href: "/clients/institutions",
            description: "Execution and post-trade coordination for defined mandates.",
          },
          {
            label: "Discuss a mandate",
            href: "/contact",
            description: "Start with the requirements and decision structure.",
          },
        ],
      },
    ],
  },
  {
    id: "services",
    label: "Expertise",
    variant: "capabilities",
    overviewHref: "/services",
    overviewLabel: "Explore our expertise",
    featured: {
      eyebrow: "Connected brokerage",
      title: "From market context to post-trade administration.",
      description:
        "The service model connects execution, research, settlement, and account support without hiding who owns the next step.",
      href: "/services",
      image: "/images/editorial/trading-research.jpg",
      imageAlt: "A market professional reviewing data across trading screens",
    },
    groups: [
      {
        heading: "Trading & intelligence",
        links: [
          {
            label: "Broker-assisted trading",
            href: "/services/broker-assisted-trading",
            description: "A direct human point of contact for instructions and orders.",
            meta: "01",
          },
          {
            label: "Advisory & execution",
            href: "/services/advisory-execution",
            description: "Market context paired with disciplined order handling.",
            meta: "02",
          },
          {
            label: "Research & market intelligence",
            href: "/services/research",
            description: "Official sources, company disclosures, and decision context.",
            meta: "03",
          },
        ],
      },
      {
        heading: "Operations & access",
        links: [
          {
            label: "Settlement & custody",
            href: "/services/settlement-custody",
            description: "Post-trade coordination, records, and account administration.",
            meta: "04",
          },
          {
            label: "Direct Market Access",
            href: "/services/direct-market-access",
            description: "Professional order access with defined controls and support.",
            meta: "05",
          },
          {
            label: "PERA",
            href: "/services/pera",
            description: "A dedicated pathway for long-term retirement investing.",
            meta: "06",
          },
        ],
      },
    ],
  },
  {
    id: "insights",
    label: "Research & insights",
    variant: "editorial",
    overviewHref: "/insights",
    overviewLabel: "Visit the research desk",
    featured: {
      eyebrow: "Featured guide",
      title: "How to read PSE disclosures with purpose.",
      description:
        "A practical guide to separating material company information from market noise.",
      href: "/insights/reading-pse-disclosures",
      image: "/images/editorial/market-office.jpg",
      imageAlt: "Market information displayed on a professional workstation",
    },
    groups: [
      {
        heading: "Research & analysis",
        links: [
          {
            label: "Market notes",
            href: "/insights/market-notes",
            description: "Dated market observations and analyst context.",
          },
          {
            label: "Research library",
            href: "/insights/library",
            description: "Search reports, commentary, and source-based publications.",
          },
          {
            label: "Research standards",
            href: "/insights#research-standards",
            description: "How CGSI separates evidence, interpretation, and uncertainty.",
          },
        ],
      },
      {
        heading: "Markets & learning",
        links: [
          {
            label: "Investor guides",
            href: "/insights/guides",
            description: "Structured learning paths for practical investor decisions.",
          },
          {
            label: "Market news",
            href: "/market-news",
            description: "Editorial coverage of relevant Philippine market developments.",
          },
          {
            label: "Market announcements",
            href: "/market-announcements",
            description: "Exchange, trading, and market-operation notices.",
          },
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    variant: "tools",
    overviewHref: "/tools",
    overviewLabel: "Explore investor tools",
    featured: {
      eyebrow: "Available now",
      title: "Estimate a trade before placing it.",
      description:
        "Use the investment calculator to organize capital, price, and estimated position size before speaking with CGSI.",
      href: "/tools/calculators",
      image: "/images/editorial/market-office.jpg",
      imageAlt: "Market information displayed on a professional workstation",
    },
    groups: [
      {
        heading: "Plan & calculate",
        links: [
          {
            label: "Investment calculators",
            href: "/tools/calculators",
            description: "Explore position size, cost, and long-term contribution scenarios.",
            meta: "Available",
          },
          {
            label: "Portfolio planning",
            href: "/tools/portfolio",
            description: "A future workspace for allocation and portfolio review.",
            meta: "Planned",
          },
        ],
      },
      {
        heading: "Discover & monitor",
        links: [
          {
            label: "Stock screener",
            href: "/tools/stock-screener",
            description: "A future research workflow for defined screening criteria.",
            meta: "Planned",
          },
          {
            label: "Watchlist",
            href: "/tools/watchlist",
            description: "A future authenticated space for securities you follow.",
            meta: "Planned",
          },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About CGSI",
    variant: "company",
    overviewHref: "/about",
    overviewLabel: "Discover the firm",
    featured: {
      eyebrow: "The firm",
      title: "A modern brokerage built around accountable service.",
      description:
        "Learn about CGSI’s corporate milestones, operating principles, and role in the Philippine equity market.",
      href: "/about",
      image: "/images/editorial/governance-building.jpg",
      imageAlt: "A substantial modern office building at dusk",
    },
    groups: [
      {
        heading: "Company",
        links: [
          {
            label: "Company profile",
            href: "/about",
            description: "Purpose, recent history, and operating principles.",
          },
          {
            label: "Leadership & team",
            href: "/about/team",
            description: "Board, leadership, and the functions behind client service.",
          },
          {
            label: "Careers",
            href: "/careers",
            description: "Build your career in the Philippine capital market.",
          },
          {
            label: "Pressroom",
            href: "/about/pressroom",
            description: "Company facts, corporate releases, and media enquiries.",
          },
        ],
      },
      {
        heading: "Standards",
        links: [
          {
            label: "Governance & oversight",
            href: "/governance",
            description: "Market conduct, controls, and regulatory context.",
          },
          {
            label: "Risk management",
            href: "/governance/risk-management",
            description: "How financial and operational risks are considered.",
          },
          {
            label: "Disclosures & compliance",
            href: "/disclosures",
            description: "Important legal, regulatory, and risk information.",
          },
        ],
      },
    ],
  },
];
