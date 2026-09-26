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
    label: "Clients",
    variant: "audiences",
    overviewHref: "/clients",
    overviewLabel: "See all client options",
    featured: {
      eyebrow: "Choose your path",
      title: "Start with the kind of support you need.",
      description:
        "Different investors need different levels of explanation, access, and service.",
      href: "/clients",
      image: "/images/editorial/advisor-clients.jpg",
      imageAlt: "An adviser reviewing financial documents with clients",
    },
    groups: [
      {
        heading: "Individuals",
        links: [
          { label: "Individuals & families", href: "/clients/individuals-families" },
          { label: "OFWs & seafarers", href: "/clients/ofws-seafarers" },
          { label: "New investors", href: "/clients/new-investors" },
        ],
      },
      {
        heading: "Organizations",
        links: [
          { label: "Institutions & corporations", href: "/clients/institutions" },
          { label: "Contact institutional services", href: "/contact" },
        ],
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    variant: "capabilities",
    overviewHref: "/services",
    overviewLabel: "View all services",
    featured: {
      eyebrow: "Brokerage services",
      title: "Research, execution, and post-trade support.",
      description:
        "Explore the services CGSI provides before, during, and after a trade.",
      href: "/services",
      image: "/images/editorial/trading-research.jpg",
      imageAlt: "A market professional reviewing data across trading screens",
    },
    groups: [
      {
        heading: "Market access",
        links: [
          { label: "Broker-assisted trading", href: "/services/broker-assisted-trading" },
          { label: "Advisory & execution", href: "/services/advisory-execution" },
          { label: "Direct Market Access", href: "/services/direct-market-access" },
        ],
      },
      {
        heading: "Research & operations",
        links: [
          { label: "Research & market intelligence", href: "/services/research" },
          { label: "Settlement & custody", href: "/services/settlement-custody" },
          { label: "PERA", href: "/services/pera" },
        ],
      },
    ],
  },
  {
    id: "insights",
    label: "Insights",
    variant: "editorial",
    overviewHref: "/insights",
    overviewLabel: "Browse all insights",
    featured: {
      eyebrow: "Investor guide",
      title: "How to read PSE disclosures with purpose.",
      description:
        "Learn what to look for when reviewing company disclosures and exchange notices.",
      href: "/insights/reading-pse-disclosures",
      image: "/images/editorial/market-office.jpg",
      imageAlt: "Market information displayed on a professional workstation",
    },
    groups: [
      {
        heading: "Research",
        links: [
          { label: "Market notes", href: "/insights/market-notes" },
          { label: "Research library", href: "/insights/library" },
          { label: "Research standards", href: "/insights#research-standards" },
        ],
      },
      {
        heading: "Learn & verify",
        links: [
          { label: "Investor guides", href: "/insights/guides" },
          { label: "Market news", href: "/market-news" },
          { label: "Market announcements", href: "/market-announcements" },
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Resources",
    variant: "tools",
    overviewHref: "/tools",
    overviewLabel: "View tools & resources",
    featured: {
      eyebrow: "Investor tools",
      title: "Estimate a trade before you place it.",
      description:
        "Use the calculator to estimate position size and expected transaction costs.",
      href: "/tools/calculators",
      image: "/images/editorial/market-office.jpg",
      imageAlt: "Market information displayed on a professional workstation",
    },
    groups: [
      {
        heading: "Available",
        links: [
          { label: "Investment calculators", href: "/tools/calculators" },
          { label: "Account forms", href: "/resources" },
        ],
      },
      {
        heading: "Investor workspace",
        links: [
          { label: "Portfolio planning", href: "/tools/portfolio" },
          { label: "Stock screener", href: "/tools/stock-screener" },
          { label: "Watchlist", href: "/tools/watchlist" },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "Company",
    variant: "company",
    overviewHref: "/about",
    overviewLabel: "About CGSI",
    featured: {
      eyebrow: "Caballes-Go Securities",
      title: "Licensed Philippine broker-dealer and PSE Trading Participant.",
      description:
        "Company information, leadership, governance, and regulatory resources.",
      href: "/about",
      image: "/images/editorial/governance-building.jpg",
      imageAlt: "A modern office building at dusk",
    },
    groups: [
      {
        heading: "The firm",
        links: [
          { label: "Company profile", href: "/about" },
          { label: "Leadership & team", href: "/about/team" },
          { label: "Pressroom", href: "/about/pressroom" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Governance",
        links: [
          { label: "Governance & oversight", href: "/governance" },
          { label: "Risk management", href: "/governance/risk-management" },
          { label: "Disclosures & compliance", href: "/disclosures" },
        ],
      },
    ],
  },
];
