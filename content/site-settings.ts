export type PublicSiteSettings = {
  companyName: string;
  telephone: string;
  email: string;
  officeAddress: string;
  clientLoginUrl: string;
  pseParticipantUrl: string;
  announcement: {
    enabled: boolean;
    label: string;
    message: string;
    href: string;
    linkLabel: string;
    dismissible: boolean;
  };
};

export const defaultSiteSettings: PublicSiteSettings = {
  companyName: "Caballes-Go Securities, Inc.",
  telephone: "+63 2 7777 8970",
  email: "admin@caballes-go.com",
  officeAddress:
    "16/F Robinsons Equitable Tower, ADB Avenue corner Poveda Street, Ortigas Center, Pasig City",
  clientLoginUrl: "https://caballes-go.com/m/login",
  pseParticipantUrl:
    "https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/",
  announcement: {
    enabled: true,
    label: "Latest",
    message: "Read the latest market notes and investor guides from CGSI.",
    href: "/insights",
    linkLabel: "Explore research",
    dismissible: true,
  },
};

export const marketSnapshot = {
  asOf: "23 Jul 2026, market close",
  sourceLabel: "PSE EDGE",
  sourceHref: "https://edge.pse.com.ph/index/form.do",
  status: "Market closed",
  items: [
    { label: "PSEi", value: "6,237.55", change: "−45.57", percent: "−0.73%", direction: "down" },
    { label: "All Shares", value: "3,404.95", change: "−22.12", percent: "−0.64%", direction: "down" },
    { label: "Financials", value: "1,906.34", change: "−27.92", percent: "−1.44%", direction: "down" },
    { label: "Services", value: "3,345.19", change: "−16.44", percent: "−0.49%", direction: "down" },
  ],
} as const;

export const leadership = [
  {
    name: "Patrick Henry C. Go",
    role: "Chairman of the Board and Nominee",
    image: null,
  },
  {
    name: "Melvin O. Vergara",
    role: "President and Director",
    image: null,
  },
  {
    name: "Edwin G. Oliveros",
    role: "Chief Operating Officer and Director",
    image: null,
  },
  {
    name: "Miguel Angel G. Gonzalez",
    role: "Independent Director",
    image: null,
  },
  {
    name: "John Benette B. Mamangun",
    role: "Independent Director",
    image: null,
  },
] as const;

export const corporateNews = [
  {
    date: "25 Apr 2025",
    type: "Market participation",
    title: "CGSI commences trading operations under its current corporate identity",
    href: "https://www.pse.com.ph/month/04-april/",
    external: true,
  },
  {
    date: "04 Dec 2024",
    type: "Corporate update",
    title: "The Philippine Stock Exchange records the change to Caballes-Go Securities, Inc.",
    href: "https://www.pse.com.ph/news_announcement/page/15/",
    external: true,
  },
  {
    date: "17 Jul 2026",
    type: "Market publication",
    title: "CGSI publishes its latest Philippine market wrap",
    href: "/insights",
    external: false,
  },
] as const;
