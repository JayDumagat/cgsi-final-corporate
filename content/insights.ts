// Local publication fallback used when Payload is unavailable.
export const primaryNavigation = [
  { label: "Investing & trading", href: "/services" },
  { label: "Why equities", href: "/why-equities" },
  { label: "Research & insights", href: "/insights" },
  { label: "About CGSI", href: "/about" },
  { label: "Contact & support", href: "/contact" },
] as const;

export const services = [
  {
    title: "Broker-assisted trading",
    description:
      "Trade with a dedicated professional who can help clarify instructions and keep execution aligned with your plan.",
    detail:
      "Designed for investors who value a human point of contact, deliberate decisions, and responsive support through changing market conditions.",
    icon: "headset",
  },
  {
    title: "Advisory & execution",
    description:
      "Turn your objectives and risk boundaries into a more disciplined approach to Philippine equities.",
    detail:
      "Our team combines market context with precise order handling while keeping the final investment decision with you.",
    icon: "compass",
  },
  {
    title: "Market data & research",
    description:
      "Make decisions with timely market context, company disclosures, and structured research—not market noise.",
    detail:
      "Research publications and conversations are intended to improve understanding, not promise a particular outcome.",
    icon: "chart",
  },
  {
    title: "Settlement support",
    description:
      "Dependable post-trade coordination helps transactions move from execution to settlement with clarity.",
    detail:
      "Our operations team supports account records, trade confirmations, and settlement-related client questions.",
    icon: "refresh",
  },
  {
    title: "Custodial services",
    description:
      "Keep your securities records and transaction history supported by established market processes.",
    detail:
      "Holdings are maintained through the Philippine market's book-entry infrastructure and applicable custody arrangements.",
    icon: "shield",
  },
] as const;

export type InsightCategory = "Getting started" | "Market basics" | "Planning";
export type InsightPublicationType = "market-note" | "guide" | "research-report";

export type Insight = {
  slug: string;
  publicationType: InsightPublicationType;
  category: InsightCategory;
  author: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "psei-market-close-23-july-2026",
    publicationType: "market-note",
    category: "Market basics",
    author: "CGSI Research",
    publishedAt: "2026-07-23T17:00:00+08:00",
    title: "PSEi closes at 6,237.55 as financials lead the decline",
    excerpt:
      "A concise end-of-day reading of the index move, sector performance, and the questions investors should carry into the next session.",
    readTime: "4 min read",
    intro:
      "The PSEi closed at 6,237.55 on 23 July 2026, down 45.57 points or 0.73%. The move is useful context, but one session should be read alongside sector participation, issuer disclosures, and the investor’s original time horizon.",
    sections: [
      {
        heading: "What moved",
        body: [
          "Financials declined more than the broader index in the published end-of-day snapshot, while services also finished lower. The difference between index and sector moves can help identify where selling pressure was concentrated.",
        ],
      },
      {
        heading: "What to verify",
        body: [
          "Review official PSE information and issuer disclosures before attributing a market move to one narrative. Price action can reflect several factors at the same time.",
        ],
      },
      {
        heading: "What it means for the plan",
        body: [
          "A daily decline does not by itself change a long-term investment case. Revisit the position when material information, valuation, concentration, or personal liquidity needs have changed.",
        ],
      },
    ],
  },
  {
    slug: "reading-sector-breadth-beyond-index",
    publicationType: "market-note",
    category: "Market basics",
    author: "CGSI Research",
    publishedAt: "2026-07-21T17:00:00+08:00",
    title: "Reading sector breadth beyond the headline index",
    excerpt:
      "Why the index level is only the first line of a useful market review.",
    readTime: "5 min read",
    intro:
      "A market index summarizes a selected group of securities. Sector performance, participation, turnover, and company-specific disclosures can reveal whether the headline move was broad or concentrated.",
    sections: [
      {
        heading: "Begin with the index",
        body: [
          "Record the closing value, point change, and percentage change, then compare them with recent sessions without assuming that one day establishes a trend.",
        ],
      },
      {
        heading: "Move into sectors and breadth",
        body: [
          "Compare sector indices and the balance of advancing, declining, and unchanged securities. A narrow move may tell a different story from a market-wide decline.",
        ],
      },
      {
        heading: "Return to the security",
        body: [
          "Market context matters, but the issuer’s fundamentals, disclosures, valuation, and role in the portfolio remain the decision’s core evidence.",
        ],
      },
    ],
  },
  {
    slug: "first-philippine-stock-portfolio",
    publicationType: "guide",
    category: "Getting started",
    author: "CGSI Research",
    publishedAt: "2026-07-15T00:00:00+08:00",
    title: "Building your first Philippine stock portfolio",
    excerpt:
      "A practical way to move from saving to investing without treating the market like a shortcut.",
    readTime: "6 min read",
    intro:
      "A first portfolio should begin with purpose, time horizon, and risk capacity—not with a trending ticker. The sequence matters because it determines how much volatility you can realistically live with.",
    sections: [
      {
        heading: "Start with the job your money must do",
        body: [
          "Separate emergency funds and near-term expenses from money intended for long-term growth. Equity prices can move sharply, so funds needed soon generally should not depend on a favorable market day.",
          "Write down one clear objective, a target period, and the maximum loss that would cause you to abandon the plan. That creates a decision boundary before emotions enter the picture.",
        ],
      },
      {
        heading: "Build understanding before variety",
        body: [
          "Owning many names is not the same as being diversified. Learn how each company earns, what risks affect it, and how much one position contributes to the whole portfolio.",
          "A measured start gives you room to develop a repeatable review process while limiting the cost of early mistakes.",
        ],
      },
      {
        heading: "Review the plan, not every price movement",
        body: [
          "Company disclosures, material changes, and your own financial needs deserve attention. Constantly reacting to ordinary price movement can quietly turn a long-term plan into short-term speculation.",
        ],
      },
    ],
  },
  {
    slug: "stocks-vs-other-investments",
    publicationType: "guide",
    category: "Market basics",
    author: "CGSI Research",
    publishedAt: "2026-07-08T00:00:00+08:00",
    title: "Stocks versus other investment products",
    excerpt:
      "Compare ownership, liquidity, volatility, and decision control before deciding what belongs in your plan.",
    readTime: "7 min read",
    intro:
      "No investment product is universally best. Each one performs a different job, and a sound plan may use several of them together.",
    sections: [
      {
        heading: "What direct stock ownership changes",
        body: [
          "A share represents ownership in a listed company. That gives investors the possibility of benefiting from business growth and dividends, while also exposing them to company and market risk.",
          "Compared with a pooled fund, direct ownership gives you more control over what you hold and when you trade. It also requires more research and discipline.",
        ],
      },
      {
        heading: "Why liquidity is useful—but not a guarantee",
        body: [
          "Listed shares can ordinarily be traded during exchange hours, but the price available depends on market demand and liquidity. The ability to sell does not guarantee that you will recover your original investment.",
        ],
      },
      {
        heading: "Choose by role, not excitement",
        body: [
          "Cash can protect near-term flexibility, fixed-income products can support stability or income, pooled funds can provide delegated management, and equities can support long-term growth. The right mix depends on your circumstances.",
        ],
      },
    ],
  },
  {
    slug: "ofw-investing-from-abroad",
    publicationType: "guide",
    category: "Planning",
    author: "CGSI Research",
    publishedAt: "2026-06-24T00:00:00+08:00",
    title: "An OFW's framework for investing from abroad",
    excerpt:
      "Keep family goals, remittance needs, and market decisions in one disciplined plan—even across time zones.",
    readTime: "6 min read",
    intro:
      "Investing from abroad adds practical constraints: irregular schedules, currency conversion, family commitments, and the temptation to make rushed decisions during limited free time.",
    sections: [
      {
        heading: "Protect the remittance plan first",
        body: [
          "Household expenses, debt payments, insurance, and emergency reserves should be clearly separated from the amount intended for investments. A market decline should not interrupt essential support at home.",
        ],
      },
      {
        heading: "Create a communication routine",
        body: [
          "Agree on who can give instructions, how account updates will be reviewed, and when decisions will be discussed. A predictable routine reduces the pressure to act on incomplete information between shifts or voyages.",
        ],
      },
      {
        heading: "Use a thesis and review schedule",
        body: [
          "Record why an investment was chosen, which developments could change that view, and how large the position may become. Review based on meaningful information rather than every market notification.",
        ],
      },
    ],
  },
  {
    slug: "risk-tolerance-in-real-life",
    publicationType: "guide",
    category: "Planning",
    author: "CGSI Research",
    publishedAt: "2026-06-10T00:00:00+08:00",
    title: "Risk tolerance in real life",
    excerpt:
      "The amount you can afford to lose and the volatility you can emotionally withstand are not always the same.",
    readTime: "5 min read",
    intro:
      "Risk capacity is financial; risk tolerance is behavioral. A plan becomes more durable when it respects both.",
    sections: [
      {
        heading: "Capacity: what your finances can absorb",
        body: [
          "Time horizon, income stability, obligations, emergency reserves, and concentration all affect how much market risk a person can take without compromising other goals.",
        ],
      },
      {
        heading: "Tolerance: what your behavior can sustain",
        body: [
          "A portfolio that appears suitable on paper can still fail if normal volatility causes panic selling. Smaller position sizes and a clearer review process may be more useful than pursuing the highest theoretical return.",
        ],
      },
      {
        heading: "Test the plan before the market does",
        body: [
          "Ask how you would respond to a meaningful decline, a delayed goal, or a change in income. Decide the response in advance and revisit it when your circumstances change.",
        ],
      },
    ],
  },
  {
    slug: "reading-pse-disclosures",
    publicationType: "research-report",
    category: "Market basics",
    author: "CGSI Research",
    publishedAt: "2026-05-27T00:00:00+08:00",
    title: "How to read PSE disclosures with purpose",
    excerpt:
      "Focus on information that can change the business case instead of reacting to every headline.",
    readTime: "8 min read",
    intro:
      "Company disclosures help investors follow material events using information released through official market channels.",
    sections: [
      {
        heading: "Know what you are trying to confirm",
        body: [
          "Start with a short investment thesis: earnings drivers, balance-sheet strength, management priorities, and major risks. A disclosure becomes useful when it confirms or challenges one of those points.",
        ],
      },
      {
        heading: "Separate recurring results from one-time events",
        body: [
          "Compare reported changes with prior periods and management explanations. A large headline number may be less important if it came from a non-recurring transaction.",
        ],
      },
      {
        heading: "Use official sources",
        body: [
          "PSE EDGE and company investor-relations channels should anchor your review. Social posts may point to an issue, but they should not replace the source document.",
        ],
      },
    ],
  },
  {
    slug: "dividend-and-growth-stocks",
    publicationType: "market-note",
    category: "Market basics",
    author: "CGSI Research",
    publishedAt: "2026-05-13T00:00:00+08:00",
    title: "Dividend and growth stocks: different jobs",
    excerpt:
      "Understand how income, reinvestment, valuation, and business quality interact before choosing a label.",
    readTime: "6 min read",
    intro:
      "Dividend and growth are useful descriptions, but they do not remove the need to assess company quality, valuation, and risk.",
    sections: [
      {
        heading: "A dividend is not the same as a guaranteed income stream",
        body: [
          "Companies may change or suspend dividends. Investors should review cash generation, debt, capital needs, and the sustainability of distributions rather than relying on headline yield alone.",
        ],
      },
      {
        heading: "Growth still has a price",
        body: [
          "A strong business can be a poor investment if expectations already assume unusually high growth. Consider what must go right for the current valuation to be justified.",
        ],
      },
      {
        heading: "Match the holding to the objective",
        body: [
          "Income needs, time horizon, diversification, and willingness to tolerate price changes should guide the role each company plays in a portfolio.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
