export const marketNews = [
  {
    slug: "psei-closes-at-6237-55",
    date: "23 Jul 2026",
    category: "Market close",
    title: "PSEi closes at 6,237.55 as the market finishes lower",
    summary:
      "The benchmark declined 45.57 points, with the published end-of-day snapshot also showing weakness in financials and services.",
    image: "/images/editorial/makati-dusk.jpg",
    sourceLabel: "PSE EDGE",
    sourceHref: "https://edge.pse.com.ph/index/form.do",
  },
  {
    slug: "how-to-read-sector-breadth",
    date: "21 Jul 2026",
    category: "Market structure",
    title: "What sector breadth can add to the headline index",
    summary:
      "A practical way to compare sector moves, participation, and company disclosures before drawing a conclusion from the index alone.",
    image: "/images/editorial/market-office.jpg",
    sourceLabel: "CGSI Research",
    sourceHref: "/insights/reading-sector-breadth-beyond-index",
  },
  {
    slug: "official-disclosures-first",
    date: "17 Jul 2026",
    category: "Issuer information",
    title: "Why official disclosures should anchor a market-news workflow",
    summary:
      "Market headlines create awareness; exchange and issuer records provide the evidence needed to evaluate what changed.",
    image: "/images/editorial/research-meeting.jpg",
    sourceLabel: "Investor guide",
    sourceHref: "/insights/reading-pse-disclosures",
  },
] as const;

export const marketAnnouncements = [
  {
    date: "23 Jul 2026",
    type: "Market reference",
    title: "End-of-day Philippine index information",
    description:
      "Official closing values and index movements published through the Philippine Stock Exchange’s information channels.",
    href: "https://edge.pse.com.ph/index/form.do",
    source: "PSE EDGE",
  },
  {
    date: "Current",
    type: "Issuer disclosures",
    title: "Company announcements and material disclosures",
    description:
      "Search current listed-company disclosures, financial reports, dividends, and other material filings at the official source.",
    href: "https://edge.pse.com.ph/",
    source: "PSE EDGE",
  },
  {
    date: "Current",
    type: "Exchange notices",
    title: "Trading, market-operation, and exchange notices",
    description:
      "Refer to the Philippine Stock Exchange for the latest trading schedules, market circulars, and operational notices.",
    href: "https://www.pse.com.ph/",
    source: "Philippine Stock Exchange",
  },
] as const;

export const pressReleases = [
  {
    date: "25 Apr 2025",
    type: "Corporate milestone",
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
] as const;
