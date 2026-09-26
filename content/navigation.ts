export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
  meta?: string;
};

export type MegaMenu = {
  id: "invest" | "services" | "research" | "company";
  label: string;
  overviewHref: string;
  overviewLabel: string;
  intro: string;
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
    id: "invest",
    label: "Invest",
    overviewHref: "/clients",
    overviewLabel: "Find your starting point",
    intro: "Choose the path that fits your experience and account needs.",
    featured: {
      eyebrow: "Getting started",
      title: "New to Philippine equities?",
      description:
        "Learn the basics first, then move into account opening when you are ready.",
      href: "/clients/new-investors",
      image: "/images/editorial/young-investors.jpg",
      imageAlt: "Young investors reviewing financial information with an adviser",
    },
    groups: [
      {
        heading: "By investor",
        links: [
          { label: "New investors", href: "/clients/new-investors" },
          { label: "Individuals & families", href: "/clients/individuals-families" },
          { label: "OFWs & seafarers", href: "/clients/ofws-seafarers" },
          { label: "Institutions & corporations", href: "/clients/institutions" },
        ],
      },
      {
        heading: "Start here",
        links: [
          { label: "Open an account", href: "/open-account" },
          { label: "Account forms", href: "/resources" },
          { label: "Investor guides", href: "/insights/guides" },
          { label: "Why equities", href: "/why-equities" },
        ],
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    overviewHref: "/services",
    overviewLabel: "See all services",
    intro: "Research, execution, and post-trade support in one brokerage relationship.",
    featured: {
      eyebrow: "For professional clients",
      title: "Direct Market Access",
      description:
        "A controlled execution workflow for eligible institutional and professional users.",
      href: "/services/direct-market-access",
      image: "/images/editorial/trading-research.jpg",
      imageAlt: "Professional market workstation displaying trading information",
    },
    groups: [
      {
        heading: "Trading",
        links: [
          { label: "Broker-assisted trading", href: "/services/broker-assisted-trading" },
          { label: "Advisory & execution", href: "/services/advisory-execution" },
          { label: "Direct Market Access", href: "/services/direct-market-access" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Research & market intelligence", href: "/services/research" },
          { label: "Settlement & custody", href: "/services/settlement-custody" },
          { label: "PERA", href: "/services/pera" },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    overviewHref: "/insights",
    overviewLabel: "Go to research & insights",
    intro: "Market context, practical education, and official information.",
    featured: {
      eyebrow: "Featured guide",
      title: "How to read PSE disclosures",
      description:
        "A practical way to separate material company information from market noise.",
      href: "/insights/reading-pse-disclosures",
      image: "/images/editorial/research-meeting.jpg",
      imageAlt: "Professionals reviewing market research together",
    },
    groups: [
      {
        heading: "Insights",
        links: [
          { label: "Latest research", href: "/insights" },
          { label: "Market notes", href: "/insights/market-notes" },
          { label: "Research library", href: "/insights/library" },
          { label: "Market news", href: "/market-news" },
        ],
      },
      {
        heading: "Learn & monitor",
        links: [
          { label: "Investor guides", href: "/insights/guides" },
          { label: "Market announcements", href: "/market-announcements" },
          { label: "Investment calculators", href: "/tools/calculators" },
          { label: "Investor tools", href: "/tools" },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    overviewHref: "/about",
    overviewLabel: "About Caballes-Go Securities",
    intro: "Company information, leadership, governance, and client support.",
    featured: {
      eyebrow: "The firm",
      title: "A Philippine broker-dealer built for long-term participation.",
      description:
        "Learn about CGSI's market role, operating standards, and current corporate identity.",
      href: "/about",
      image: "/images/editorial/governance-building.jpg",
      imageAlt: "Modern office building at dusk",
    },
    groups: [
      {
        heading: "About",
        links: [
          { label: "Company profile", href: "/about" },
          { label: "Leadership & team", href: "/about/team" },
          { label: "Pressroom", href: "/about/pressroom" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Standards & support",
        links: [
          { label: "Governance", href: "/governance" },
          { label: "Risk management", href: "/governance/risk-management" },
          { label: "Disclosures", href: "/disclosures" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];
