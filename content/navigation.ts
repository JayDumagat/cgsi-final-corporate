export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaMenu = {
  id: "invest" | "research" | "markets" | "institutional" | "about";
  label: string;
  overviewHref: string;
  overviewLabel: string;
  summary: string;
  featured: {
    eyebrow: string;
    title: string;
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
    overviewLabel: "Explore ways to invest",
    summary: "Start with your goal, then choose the level of guidance and execution support you need.",
    featured: {
      eyebrow: "Getting started",
      title: "New to Philippine equities?",
      href: "/clients/new-investors",
      image: "/images/editorial/young-investors.jpg",
      imageAlt: "Young investors reviewing financial information together",
    },
    groups: [
      {
        heading: "Start here",
        links: [
          { label: "Open an account", href: "/open-account" },
          { label: "New investors", href: "/clients/new-investors" },
          { label: "Individuals & families", href: "/clients/individuals-families" },
          { label: "OFWs & seafarers", href: "/clients/ofws-seafarers" },
        ],
      },
      {
        heading: "Ways we help",
        links: [
          { label: "Broker-assisted trading", href: "/services/broker-assisted-trading" },
          { label: "Advisory & execution", href: "/services/advisory-execution" },
          { label: "PERA", href: "/services/pera" },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    overviewHref: "/insights",
    overviewLabel: "Explore research & insights",
    summary: "Market context, practical investing education, and source-based publications.",
    featured: {
      eyebrow: "Research desk",
      title: "Read the latest market perspective.",
      href: "/insights",
      image: "/images/editorial/trading-research.jpg",
      imageAlt: "Professional trading screens displaying market information",
    },
    groups: [
      {
        heading: "Analysis",
        links: [
          { label: "Market notes", href: "/insights/market-notes" },
          { label: "Research library", href: "/insights/library" },
          { label: "Research service", href: "/services/research" },
        ],
      },
      {
        heading: "Learn",
        links: [
          { label: "Investor guides", href: "/insights/guides" },
          { label: "Reading PSE disclosures", href: "/insights/reading-pse-disclosures" },
          { label: "Why equities", href: "/why-equities" },
        ],
      },
    ],
  },
  {
    id: "markets",
    label: "Markets",
    overviewHref: "/market-news",
    overviewLabel: "Explore market information",
    summary: "News, official announcements, and practical tools for following the Philippine market.",
    featured: {
      eyebrow: "Market information",
      title: "Keep official notices separate from commentary.",
      href: "/market-announcements",
      image: "/images/editorial/market-office.jpg",
      imageAlt: "Market information displayed on a professional workstation",
    },
    groups: [
      {
        heading: "Stay current",
        links: [
          { label: "Market news", href: "/market-news" },
          { label: "Market announcements", href: "/market-announcements" },
        ],
      },
      {
        heading: "Tools",
        links: [
          { label: "Investment calculators", href: "/tools/calculators" },
          { label: "Stock screener", href: "/tools/stock-screener" },
          { label: "Watchlist", href: "/tools/watchlist" },
          { label: "Portfolio workspace", href: "/tools/portfolio" },
        ],
      },
    ],
  },
  {
    id: "institutional",
    label: "Institutional",
    overviewHref: "/clients/institutions",
    overviewLabel: "Institutional client services",
    summary: "Execution, market access, settlement, research, and operating support for professional mandates.",
    featured: {
      eyebrow: "Professional clients",
      title: "Discuss an institutional requirement.",
      href: "/contact",
      image: "/images/editorial/institutional-team.jpg",
      imageAlt: "Institutional professionals reviewing documents in a meeting",
    },
    groups: [
      {
        heading: "Capabilities",
        links: [
          { label: "Institutional clients", href: "/clients/institutions" },
          { label: "Direct Market Access", href: "/services/direct-market-access" },
          { label: "Settlement & custody", href: "/services/settlement-custody" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Advisory & execution", href: "/services/advisory-execution" },
          { label: "Research & intelligence", href: "/services/research" },
          { label: "Contact CGSI", href: "/contact" },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About",
    overviewHref: "/about",
    overviewLabel: "About CGSI",
    summary: "The firm, its leadership, governance, and role in the Philippine capital market.",
    featured: {
      eyebrow: "The firm",
      title: "A traditional broker with a modern operating mindset.",
      href: "/about",
      image: "/images/editorial/governance-building.jpg",
      imageAlt: "Modern office building at dusk",
    },
    groups: [
      {
        heading: "Company",
        links: [
          { label: "Company profile", href: "/about" },
          { label: "Leadership & team", href: "/about/team" },
          { label: "Pressroom", href: "/about/pressroom" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Standards",
        links: [
          { label: "Governance & oversight", href: "/governance" },
          { label: "Risk management", href: "/governance/risk-management" },
          { label: "Investor relations", href: "/investor-relations" },
          { label: "Disclosures", href: "/disclosures" },
        ],
      },
    ],
  },
];
