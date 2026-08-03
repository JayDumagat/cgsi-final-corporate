// Transitional fallback content for audience and service routes. Payload can replace
// these records without changing the page templates.
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
    title: "Investing that respects the responsibilities around it.",
    description:
      "For individuals, couples, and families who want Philippine equity exposure without disconnecting investment decisions from liquidity needs, shared goals, and long-term priorities.",
    image: "/images/editorial/long-term-clients.jpg",
    imageAlt: "An older Asian couple speaking together outdoors",
    problemTitle: "A portfolio can look sensible and still be wrong for the life around it.",
    problem:
      "Family commitments, business interests, education goals, retirement plans, and near-term cash needs often compete for the same capital. When those constraints stay outside the investment conversation, normal market volatility can force poor decisions.",
    solutionTitle: "Start with the obligations. Then define the role of equities.",
    solution:
      "CGSI helps clients make those boundaries visible before discussing orders. The result is a clearer relationship between the portfolio, the time available, and the risks the household can realistically sustain.",
    priorities: [
      {
        title: "One view of the household",
        text: "Understand liquidity, shared priorities, concentration, and time horizon before making trade decisions.",
      },
      {
        title: "Human continuity",
        text: "Keep a direct point of contact who understands the account and the context around it.",
      },
      {
        title: "Decision discipline",
        text: "Use official information and a repeatable review process instead of reacting to every market move.",
      },
    ],
    steps: [
      { title: "Clarify", text: "Discuss goals, constraints, time horizon, and risk capacity." },
      { title: "Structure", text: "Define the intended role, boundaries, and review process for equities." },
      { title: "Support", text: "Coordinate research, execution, settlement, and account questions." },
    ],
  },
  {
    slug: "ofws-seafarers",
    layout: "global",
    eyebrow: "OFWs & seafarers",
    title: "A dependable investing relationship, wherever work takes you.",
    description:
      "For land-based OFWs and maritime professionals balancing family support, remittance priorities, irregular schedules, and investment decisions across time zones.",
    image: "/images/editorial/seafarer-client.jpg",
    imageAlt: "Maritime professionals working on a ship deck",
    imagePosition: "center 38%",
    problemTitle: "Distance can turn ordinary market decisions into rushed ones.",
    problem:
      "Limited connectivity, shift work, time-zone differences, and family obligations can make it difficult to review information and act deliberately. Money intended for the household can also become mixed with money intended for long-term growth.",
    solutionTitle: "Build a process that still works when attention is limited.",
    solution:
      "CGSI provides a direct contact, clear account requirements, and broker-assisted support. The objective is a predictable communication and review rhythm—not more notifications competing for attention.",
    priorities: [
      {
        title: "Separate essential funds",
        text: "Keep remittances, emergency reserves, and near-term obligations distinct from investment capital.",
      },
      {
        title: "Plan the communication",
        text: "Agree how instructions, account questions, and important updates will be handled across time zones.",
      },
      {
        title: "Document the rationale",
        text: "Record why an investment belongs in the plan and which developments could change that view.",
      },
    ],
    steps: [
      { title: "Prepare", text: "Review identity, account, and documentation requirements in advance." },
      { title: "Coordinate", text: "Establish a communication routine that fits work and connectivity." },
      { title: "Review", text: "Focus periodic reviews on material information and changing family needs." },
    ],
  },
  {
    slug: "new-investors",
    layout: "learning",
    eyebrow: "New investors",
    title: "A considered first step into the market.",
    description:
      "For college students, fresh graduates, and first-time investors who want to build understanding before building a Philippine stock portfolio.",
    image: "/images/editorial/young-investors.jpg",
    imageAlt: "A young couple reviewing financial documents with an advisor",
    problemTitle: "Easy access can create the illusion that investing is easy.",
    problem:
      "A first-time investor can open an account quickly, follow a popular ticker, and take risk without first separating emergency savings, near-term expenses, and long-term capital. The cost is often discovered only when prices move sharply.",
    solutionTitle: "Build the decision process before increasing the position size.",
    solution:
      "CGSI combines practical education, official information, and broker-assisted support. The aim is not to remove risk; it is to help new investors understand what they own, why they own it, and what could change the decision.",
    priorities: [
      {
        title: "Purpose before product",
        text: "Define what the money must do and when it may be needed before choosing a security.",
      },
      {
        title: "Understanding before variety",
        text: "Learn the business, risk, valuation, and role of each position rather than collecting tickers.",
      },
      {
        title: "Small, deliberate beginnings",
        text: "Use measured position sizes while developing a repeatable research and review habit.",
      },
    ],
    steps: [
      { title: "Learn", text: "Understand account mechanics, market risk, and official information sources." },
      { title: "Define", text: "Set a purpose, time horizon, risk boundary, and review schedule." },
      { title: "Begin", text: "Build gradually and review decisions against the original rationale." },
    ],
  },
  {
    slug: "institutions",
    layout: "institutional",
    eyebrow: "Institutions & corporations",
    title: "Local market access with clear operational ownership.",
    description:
      "For institutions and corporations that require responsive Philippine equity execution, research access, account coordination, and dependable post-trade support.",
    image: "/images/editorial/institutional-team.jpg",
    imageAlt: "A team of Asian business professionals in a meeting",
    problemTitle: "Execution quality depends on more than the moment an order reaches the market.",
    problem:
      "Professional accounts often involve defined authorities, reporting expectations, settlement requirements, and internal governance. When coverage and operations are disconnected, small communication gaps can become material delays.",
    solutionTitle: "Connect coverage, execution, and operations around the mandate.",
    solution:
      "CGSI works with clients to clarify account requirements, instructions, information needs, and post-trade responsibilities. Each mandate begins with the operating context rather than a generic product package.",
    priorities: [
      {
        title: "Defined account governance",
        text: "Clarify authorized persons, communication protocols, documentation, and reporting expectations.",
      },
      {
        title: "Responsive local execution",
        text: "Maintain a direct relationship for orders, market context, and execution-related questions.",
      },
      {
        title: "Post-trade coordination",
        text: "Keep settlement, records, and operational follow-through connected to the trade workflow.",
      },
    ],
    steps: [
      { title: "Scope", text: "Discuss the mandate, account structure, authorities, and information needs." },
      { title: "Establish", text: "Complete onboarding and agree communication and operating procedures." },
      { title: "Deliver", text: "Coordinate execution, reporting, settlement, and ongoing support." },
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
    title: "A direct professional relationship around every instruction.",
    description:
      "For clients who value a human point of contact to clarify orders, discuss market context, and coordinate execution and follow-through.",
    image: "/images/editorial/cgsi-professionals.jpg",
    imageAlt: "Asian financial professionals in a meeting",
    problem:
      "Fast interfaces make order entry simple, but they do not resolve an unclear instruction, an unfamiliar order type, a thinly traded security, or a decision made under pressure.",
    approach:
      "CGSI keeps a licensed professional in the relationship. Clients retain control of the investment decision while the broker helps clarify instructions, communicate relevant context, and coordinate the path from order to post-trade support.",
    outcomes: [
      { title: "Clear instructions", text: "Confirm the security, side, quantity, price parameters, and other relevant order details." },
      { title: "Market context", text: "Discuss available information and execution considerations without implying a guaranteed outcome." },
      { title: "Account continuity", text: "Keep execution questions connected to the client’s account and service history." },
    ],
    process: [
      { title: "Prepare", text: "Review the objective, available information, and order parameters." },
      { title: "Confirm", text: "Clarify the instruction and communicate material execution considerations." },
      { title: "Coordinate", text: "Handle execution, confirmation, and related account or settlement questions." },
    ],
  },
  {
    slug: "advisory-execution",
    layout: "decision",
    eyebrow: "Advisory & execution",
    title: "Market perspective translated into disciplined action.",
    description:
      "Structured conversations for clients who want market context and careful execution while retaining responsibility for the final investment decision.",
    image: "/images/editorial/advisor-clients.jpg",
    imageAlt: "An advisor reviewing documents with clients",
    problem:
      "A compelling investment idea can still be unsuitable when its liquidity, concentration, time horizon, or downside does not fit the client’s circumstances.",
    approach:
      "CGSI begins with the intended role of the investment and the client’s practical constraints. Research and market context support the conversation; precise order handling carries the decision into execution.",
    outcomes: [
      { title: "Relevant context", text: "Frame market and company information around the decision the client is considering." },
      { title: "Visible trade-offs", text: "Discuss liquidity, concentration, volatility, and the possibility of capital loss." },
      { title: "Deliberate execution", text: "Translate a clear client decision into carefully confirmed order instructions." },
    ],
    process: [
      { title: "Understand", text: "Clarify the objective, time horizon, liquidity needs, and risk boundary." },
      { title: "Evaluate", text: "Review relevant information and the role the investment may play." },
      { title: "Execute", text: "Confirm instructions and coordinate the transaction and follow-through." },
    ],
  },
  {
    slug: "research",
    layout: "research",
    eyebrow: "Research & market intelligence",
    title: "Information organized around the decision it needs to support.",
    description:
      "Market perspective, official disclosures, and structured research that help clients distinguish material information from ordinary market noise.",
    image: "/images/editorial/research-meeting.jpg",
    imageAlt: "A financial professional explaining market information during a meeting",
    problem:
      "Investors can access more market information than ever, but volume is not the same as insight. Headlines, commentary, and price movement can crowd out the facts that actually change a business case.",
    approach:
      "CGSI research support emphasizes official sources, company fundamentals, market context, and explicit risk. Research informs judgment; it does not promise a particular price or return.",
    outcomes: [
      { title: "Official-source discipline", text: "Anchor the review in issuer disclosures and established market information channels." },
      { title: "Decision relevance", text: "Connect new information to the assumptions and risks behind the investment view." },
      { title: "Plain-language context", text: "Explain what is known, what remains uncertain, and why it matters." },
    ],
    process: [
      { title: "Frame", text: "Define the question, investment rationale, and assumptions under review." },
      { title: "Examine", text: "Review official disclosures, market data, and relevant company information." },
      { title: "Interpret", text: "Identify what supports, challenges, or leaves the original view unchanged." },
    ],
  },
  {
    slug: "settlement-custody",
    layout: "operations",
    eyebrow: "Settlement & custody",
    title: "Dependable administration after the market decision.",
    description:
      "Post-trade coordination, account records, and custody support designed to keep operational responsibilities clear.",
    image: "/images/editorial/operations-team.jpg",
    imageAlt: "Asian operations professionals reviewing account documents",
    problem:
      "The trade is only one part of a complete transaction. Missing documents, unclear funding, mismatched details, or fragmented ownership can delay settlement and weaken confidence in the account experience.",
    approach:
      "CGSI connects trade confirmation, settlement coordination, records, and account support. The goal is straightforward ownership of the details that move a transaction from execution into the client’s records.",
    outcomes: [
      { title: "Clear post-trade ownership", text: "Know which team is responsible for confirmation, settlement, and account questions." },
      { title: "Coordinated records", text: "Support accurate transaction information and relevant client documentation." },
      { title: "Responsive resolution", text: "Keep operational questions connected to the transaction and client context." },
    ],
    process: [
      { title: "Confirm", text: "Review transaction details and relevant settlement information." },
      { title: "Settle", text: "Coordinate the applicable market and account procedures." },
      { title: "Maintain", text: "Support records, custody administration, and subsequent account questions." },
    ],
  },
  {
    slug: "direct-market-access",
    layout: "dma",
    eyebrow: "Direct Market Access",
    title: "Professional market access with institutional controls.",
    description:
      "A scalable execution channel for eligible clients who require direct order entry, responsive market access, and a clearly governed operating relationship.",
    image: "/images/editorial/trading-research.jpg",
    imageAlt: "A professional trading workstation displaying market information",
    problem:
      "Sophisticated trading workflows require more than a fast interface. Entitlements, order controls, connectivity, support ownership, and post-trade coordination must work as one operating environment.",
    approach:
      "CGSI’s DMA service is designed around eligibility, approved access, defined controls, and accountable support. Availability and final functionality remain subject to onboarding, agreements, and applicable market requirements.",
    outcomes: [
      { title: "Controlled access", text: "Align user permissions, order access, and operating responsibilities with the approved account structure." },
      { title: "Execution visibility", text: "Support a direct workflow while keeping brokerage and post-trade ownership clear." },
      { title: "Scalable connectivity", text: "Create a foundation for approved professional trading workflows and future integration needs." },
    ],
    process: [
      { title: "Qualify", text: "Review the client profile, mandate, access requirements, and operational readiness." },
      { title: "Configure", text: "Establish approved users, controls, connectivity, and support procedures." },
      { title: "Operate", text: "Provide ongoing execution, account, and post-trade coordination within the agreed model." },
    ],
  },
  {
    slug: "pera",
    layout: "pera",
    eyebrow: "PERA",
    title: "A long-term retirement journey built around deliberate investing.",
    description:
      "A dedicated service pathway for clients exploring the Personal Equity and Retirement Account and its role within a broader retirement plan.",
    image: "/images/editorial/long-term-clients.jpg",
    imageAlt: "A mature couple discussing their long-term plans together",
    problem:
      "Retirement planning can become fragmented across savings, investments, protection needs, and changing family responsibilities. A product alone does not create a durable retirement strategy.",
    approach:
      "CGSI frames PERA within the client’s time horizon, liquidity needs, contribution capacity, and risk profile. Product availability, eligibility, benefits, and account processes remain subject to current rules and participating-provider arrangements.",
    outcomes: [
      { title: "Retirement context", text: "Clarify the purpose, horizon, contribution rhythm, and role of the account before selecting investments." },
      { title: "Measured participation", text: "Keep long-term assets distinct from emergency funds and near-term household obligations." },
      { title: "Ongoing review", text: "Revisit contributions, risk, and retirement priorities as the client’s circumstances change." },
    ],
    process: [
      { title: "Discover", text: "Discuss retirement objectives, existing resources, time horizon, and practical constraints." },
      { title: "Prepare", text: "Review current eligibility, documents, provider arrangements, and available investment choices." },
      { title: "Maintain", text: "Support contributions, account questions, periodic reviews, and approved investment instructions." },
    ],
  },
];

export function getClientProfile(slug: string) {
  return clientProfiles.find((profile) => profile.slug === slug);
}

export function getServiceProfile(slug: string) {
  return serviceProfiles.find((profile) => profile.slug === slug);
}
