// Verified against CGSI and PSE public sources on 2026-09-24.
export const company = {
  name: "Caballes-Go Securities, Inc.",
  phone: "+63 2 7777 8970",
  phoneHref: "tel:+63277778970",
  email: "admin@caballes-go.com",
  address:
    "1606 Robinsons Equitable Tower, ADB Avenue corner P. Poveda Road, Ortigas Center, Pasig City 1605",
  pse: "https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/",
  forms: "https://caballes-go.com/forms",
  about: "https://caballes-go.com/about-us",
  reviewed: "2026-09-24",
} as const;
export const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;
export const brokerageServices = [
  {
    slug: "broker-assisted-trading",
    title: "Broker-assisted trading",
    text: "A personal point of contact to discuss your instructions and help you place trades in Philippine equities.",
    detail:
      "Speak with a broker about your account, the shares you wish to trade, and your order instructions. Ask how orders are accepted, confirmed, and followed up before you begin.",
  },
  {
    slug: "advisory-execution",
    title: "Advisory & execution",
    text: "Put market context alongside your objectives, with guidance and support through the execution of your trades.",
    detail:
      "Discuss investment objectives, risk tolerance, and trade decisions with CGSI. Advice and execution support do not remove investment risk or guarantee an outcome.",
  },
  {
    slug: "research",
    title: "Research & market insight",
    text: "Make sense of Philippine equities through market commentary, sector analysis, and research conversations.",
    detail:
      "Ask your broker which research publications are available and how to receive them. Always check a report’s publication date, assumptions, and disclosures before relying on it.",
  },
  {
    slug: "settlement-custody",
    title: "Settlement & custody",
    text: "Support beyond the trade, with settlement coordination and custody services for your securities.",
    detail:
      "Contact CGSI for settlement instructions, account records, and custody questions. Confirm the applicable arrangements and deadlines directly with the operations team.",
  },
] as const;
export const accountTypes = [
  {
    slug: "individual",
    title: "Individual account",
    audience: "For your personal investments",
    text: "For individual investors, including those with more complex or high-net-worth needs.",
    forms: [
      "Client Account Information Form — Individual",
      "Specimen Signature Card — Individual",
    ],
    preparation:
      "Ask CGSI to confirm the identification, supporting documents, and verification steps that apply to you.",
  },
  {
    slug: "corporate",
    title: "Corporate account",
    audience: "For institutions and corporations",
    text: "For organizations seeking a Philippine equity brokerage relationship.",
    forms: [
      "Client Account Information Form — Corporate",
      "Specimen Signature Card — Corporate",
    ],
    preparation:
      "Ask CGSI to confirm entity documents, authorized signatories, and any supporting approvals required for your organization.",
  },
] as const;
export const faqs = [
  {
    question: "Which account type should I choose?",
    answer:
      "Choose the individual path for a personal account, or the corporate path for an organization. CGSI publishes separate account information forms and signature cards for each. Contact the team if you are unsure which applies.",
    source: "https://caballes-go.com/get-started",
  },
  {
    question: "Where can I find account opening forms?",
    answer:
      "The official forms library includes individual and corporate account information forms and specimen signature cards, plus withdrawal, lodgment, certification, and transfer request forms.",
    source: company.forms,
  },
  {
    question: "Can I open an account entirely online?",
    answer:
      "The published pages provide forms, but do not confirm a fully digital application or instant approval. Contact CGSI for the current submission and verification process.",
    source: "https://caballes-go.com/get-started",
  },
  {
    question: "What risks should I understand?",
    answer:
      "Securities investments can lose value, including your principal. Past performance does not guarantee future results. Consider your financial situation, objectives, and risk tolerance before investing.",
    source: "https://caballes-go.com/disclaimerdisclosure",
  },
] as const;
