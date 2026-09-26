export type ClientProfile = {
  slug: string;
  layout: "household" | "global" | "learning" | "institutional";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  priorities: { title: string; text: string }[];
  steps: { title: string; text: string }[];
};

export const clientProfiles: ClientProfile[] = [
  {
    slug: "individuals-families",
    layout: "household",
    eyebrow: "Individuals & families",
    title: "Invest without losing sight of the rest of your financial life.",
    description:
      "A brokerage relationship for people balancing long-term investing with family, business, and liquidity needs.",
    image: "/images/editorial/long-term-clients.jpg",
    imageAlt: "A couple discussing long-term financial plans",
    problemTitle: "Your portfolio is only one part of the plan.",
    problem:
      "Money for emergencies, education, business, retirement, and investing should not all carry the same risk or time horizon.",
    solutionTitle: "Define what the portfolio is for.",
    solution:
      "CGSI helps keep account decisions connected to the capital you can invest, the time you have, and the support you want from a broker.",
    priorities: [
      { title: "Liquidity", text: "Keep near-term obligations separate from long-term investment capital." },
      { title: "Concentration", text: "Know when one company, sector, or theme carries too much of the account." },
      { title: "Continuity", text: "Have a direct contact for orders, account questions, and follow-through." },
    ],
    steps: [
      { title: "Set the boundaries", text: "Clarify available capital, time horizon, and account needs." },
      { title: "Make the decision", text: "Use research and market context to evaluate the investment." },
      { title: "Place and support", text: "Coordinate execution, confirmation, and post-trade questions." },
    ],
  },
  {
    slug: "ofws-seafarers",
    layout: "global",
    eyebrow: "OFWs & seafarers",
    title: "Stay connected to your investments, even when work takes you away.",
    description:
      "Broker-assisted support for Filipinos managing investments across time zones, schedules, and family responsibilities.",
    image: "/images/editorial/seafarer-client.jpg",
    imageAlt: "Maritime professionals working on a ship",
    imagePosition: "center 38%",
    problemTitle: "Distance changes how you manage an account.",
    problem:
      "Connectivity, shift work, remittances, and family obligations can make routine account decisions harder to coordinate.",
    solutionTitle: "Make the process predictable.",
    solution:
      "Prepare documents early, agree how instructions are handled, and keep a direct channel to CGSI for account and execution support.",
    priorities: [
      { title: "Separate funds", text: "Keep remittances and emergency reserves outside the investment budget." },
      { title: "Plan communication", text: "Use a clear contact and instruction process that works across time zones." },
      { title: "Review deliberately", text: "Focus on material information instead of reacting to every market move." },
    ],
    steps: [
      { title: "Prepare", text: "Review documents and account requirements before deployment or travel." },
      { title: "Coordinate", text: "Agree the practical communication path for instructions and questions." },
      { title: "Review", text: "Revisit the account when circumstances, goals, or material information change." },
    ],
  },
  {
    slug: "new-investors",
    layout: "learning",
    eyebrow: "New investors",
    title: "Learn the market before you put money at risk.",
    description:
      "A plain-language starting point for first-time investors who want to understand Philippine equities before opening or funding an account.",
    image: "/images/editorial/young-investors.jpg",
    imageAlt: "Young investors reviewing information with an adviser",
    problemTitle: "Buying a stock is easy. Knowing why you own it is harder.",
    problem:
      "A first trade should come after you understand risk, time horizon, emergency savings, and the information you will use to make decisions.",
    solutionTitle: "Build the habit before the portfolio.",
    solution:
      "Start with investor education, official market information, and small deliberate decisions instead of chasing activity.",
    priorities: [
      { title: "Money you can leave invested", text: "Do not use emergency funds or money needed soon." },
      { title: "A reason for every position", text: "Understand the business, the risk, and what would change your view." },
      { title: "A repeatable process", text: "Use the same research and review habits before each decision." },
    ],
    steps: [
      { title: "Learn", text: "Understand equities, orders, disclosures, and basic portfolio risk." },
      { title: "Prepare", text: "Set a budget and review the account-opening requirements." },
      { title: "Begin", text: "Start deliberately and keep reviewing the reason behind each position." },
    ],
  },
  {
    slug: "institutions",
    layout: "institutional",
    eyebrow: "Institutions & corporations",
    title: "Philippine equity execution with clear operating ownership.",
    description:
      "Local market access, research, execution, settlement, and account coordination for professional mandates.",
    image: "/images/editorial/institutional-team.jpg",
    imageAlt: "Institutional professionals in a business meeting",
    problemTitle: "Professional execution is an operating process, not just an order.",
    problem:
      "Authorities, controls, reporting, settlement, and communication need to work together around the mandate.",
    solutionTitle: "Define the workflow before the first trade.",
    solution:
      "CGSI works with professional clients on account structure, approved contacts, execution requirements, information needs, and post-trade responsibilities.",
    priorities: [
      { title: "Governance", text: "Document authorized persons, instructions, controls, and escalation paths." },
      { title: "Execution", text: "Maintain responsive local coverage for orders and market questions." },
      { title: "Operations", text: "Connect confirmations, settlement, records, and account support." },
    ],
    steps: [
      { title: "Scope the mandate", text: "Review requirements, account structure, users, and reporting expectations." },
      { title: "Set the operating model", text: "Agree controls, communication, and settlement procedures." },
      { title: "Run the relationship", text: "Coordinate execution and post-trade support under the agreed model." },
    ],
  },
];

export type ServiceProfile = {
  slug: string;
  layout: "coverage" | "decision" | "research" | "operations" | "dma" | "pera";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  problem: string;
  approach: string;
  outcomes: { title: string; text: string }[];
  process: { title: string; text: string }[];
};

export const serviceProfiles: ServiceProfile[] = [
  {
    slug: "broker-assisted-trading",
    layout: "coverage",
    eyebrow: "Broker-assisted trading",
    title: "A broker on the other side of the instruction.",
    description:
      "Place orders with a direct professional contact who can clarify the instruction and coordinate what happens next.",
    image: "/images/editorial/cgsi-professionals.jpg",
    imageAlt: "Financial professionals working together",
    problem:
      "An interface can accept an order. It cannot resolve an unclear instruction, explain an unfamiliar order type, or coordinate an account issue.",
    approach:
      "CGSI keeps the client in control of the investment decision while providing a human channel for order handling and follow-through.",
    outcomes: [
      { title: "Order clarity", text: "Confirm the security, side, quantity, price parameters, and relevant details." },
      { title: "Human support", text: "Ask execution and account questions before or after an order." },
      { title: "Continuity", text: "Keep the trade connected to settlement and account support." },
    ],
    process: [
      { title: "Prepare", text: "Review the investment decision and intended order." },
      { title: "Confirm", text: "Clarify the instruction with the broker." },
      { title: "Execute", text: "Place the order and coordinate confirmation and post-trade support." },
    ],
  },
  {
    slug: "advisory-execution",
    layout: "decision",
    eyebrow: "Advisory & execution",
    title: "Put market context around the decision before the order.",
    description:
      "For clients who want research and market discussion alongside disciplined execution.",
    image: "/images/editorial/advisor-clients.jpg",
    imageAlt: "An adviser reviewing information with clients",
    problem:
      "A good idea can still be the wrong trade when liquidity, concentration, timing, or downside do not fit the account.",
    approach:
      "Use research and market context to test the decision, then translate the client’s instruction into a clearly handled order.",
    outcomes: [
      { title: "Relevant research", text: "Focus on information that can change the investment case." },
      { title: "Visible trade-offs", text: "Consider liquidity, concentration, volatility, and downside." },
      { title: "Disciplined handling", text: "Move from a clear decision to a clear order." },
    ],
    process: [
      { title: "Frame", text: "Define the objective and constraints." },
      { title: "Evaluate", text: "Review the information and trade-offs." },
      { title: "Execute", text: "Confirm and place the instruction." },
    ],
  },
  {
    slug: "research",
    layout: "research",
    eyebrow: "Research & market intelligence",
    title: "Research that helps answer a question.",
    description:
      "Market notes, issuer information, and source-based analysis designed to support better-informed decisions.",
    image: "/images/editorial/research-meeting.jpg",
    imageAlt: "Professionals reviewing market research",
    problem:
      "More information does not automatically create better judgment. Investors need to know which facts are material and what remains uncertain.",
    approach:
      "CGSI research emphasizes official sources, business fundamentals, market context, and explicit risk rather than headline volume.",
    outcomes: [
      { title: "Source discipline", text: "Start with issuer disclosures and established market information." },
      { title: "Decision relevance", text: "Connect new information to the assumptions behind the investment." },
      { title: "Clear uncertainty", text: "Separate what is known from interpretation and open questions." },
    ],
    process: [
      { title: "Define the question", text: "Start with the decision or assumption under review." },
      { title: "Examine the evidence", text: "Review disclosures, data, and relevant market context." },
      { title: "Update the view", text: "Identify what changed and whether it matters to the thesis." },
    ],
  },
  {
    slug: "settlement-custody",
    layout: "operations",
    eyebrow: "Settlement & custody",
    title: "Keep the trade moving after execution.",
    description:
      "Settlement coordination, records, and account support for the operational side of investing.",
    image: "/images/editorial/operations-team.jpg",
    imageAlt: "Operations professionals reviewing account documents",
    problem:
      "A completed market order still needs accurate confirmation, funding, settlement, records, and account administration.",
    approach:
      "CGSI keeps operational ownership visible so clients know where to go when a transaction or account needs follow-through.",
    outcomes: [
      { title: "Confirmation", text: "Keep transaction details clear after execution." },
      { title: "Settlement", text: "Coordinate the applicable market and account procedures." },
      { title: "Records", text: "Maintain account information and support subsequent questions." },
    ],
    process: [
      { title: "Confirm", text: "Review the transaction details." },
      { title: "Settle", text: "Coordinate funding and applicable settlement procedures." },
      { title: "Maintain", text: "Support records and account administration." },
    ],
  },
  {
    slug: "direct-market-access",
    layout: "dma",
    eyebrow: "Direct Market Access",
    title: "Direct order entry with brokerage controls around it.",
    description:
      "An execution channel for eligible professional clients that need direct market access and defined operating controls.",
    image: "/images/editorial/trading-research.jpg",
    imageAlt: "Professional trading workstation",
    problem:
      "Professional access requires entitlements, controls, support ownership, and post-trade coordination—not just a fast screen.",
    approach:
      "CGSI structures DMA around eligibility, approved users, access controls, operating procedures, and accountable brokerage support.",
    outcomes: [
      { title: "Approved access", text: "Align user permissions with the account and mandate." },
      { title: "Defined controls", text: "Establish order and operating controls before use." },
      { title: "Brokerage support", text: "Keep execution and post-trade ownership connected to the access model." },
    ],
    process: [
      { title: "Qualify", text: "Review the mandate and access requirements." },
      { title: "Configure", text: "Set users, controls, and procedures." },
      { title: "Operate", text: "Use the approved model with ongoing brokerage support." },
    ],
  },
  {
    slug: "pera",
    layout: "pera",
    eyebrow: "PERA",
    title: "Put retirement money on a longer time horizon.",
    description:
      "A dedicated pathway for clients exploring the Personal Equity and Retirement Account within a broader retirement plan.",
    image: "/images/editorial/long-term-clients.jpg",
    imageAlt: "A couple discussing long-term plans",
    problem:
      "Retirement investing works differently from money needed for emergencies, near-term spending, or shorter goals.",
    approach:
      "CGSI places PERA in the context of time horizon, liquidity, contribution capacity, eligibility, and available investment choices.",
    outcomes: [
      { title: "Long-term purpose", text: "Define what the account is meant to fund and when." },
      { title: "Separate liquidity", text: "Keep near-term needs outside long-horizon retirement capital." },
      { title: "Periodic review", text: "Revisit contributions, risk, and retirement priorities over time." },
    ],
    process: [
      { title: "Understand", text: "Review retirement goals and practical constraints." },
      { title: "Prepare", text: "Check current eligibility, documents, and available choices." },
      { title: "Maintain", text: "Support contributions, instructions, and periodic review." },
    ],
  },
];

export function getClientProfile(slug: string) {
  return clientProfiles.find((profile) => profile.slug === slug);
}

export function getServiceProfile(slug: string) {
  return serviceProfiles.find((profile) => profile.slug === slug);
}
