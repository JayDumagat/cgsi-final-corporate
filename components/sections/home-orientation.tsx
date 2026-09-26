import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  CircleUserRound,
  Compass,
} from "lucide-react";

const pathways = [
  {
    title: "New to investing",
    description:
      "Start with plain-language guides, risk basics, and a clear account-opening path.",
    href: "/clients/new-investors",
    link: "Start with the basics",
    icon: Compass,
  },
  {
    title: "Experienced investors",
    description:
      "Move quickly to research, execution services, market tools, and account resources.",
    href: "/insights",
    link: "Go to research",
    icon: BookOpenText,
  },
  {
    title: "Institutions & corporations",
    description:
      "Explore execution, market access, settlement, custody, and mandate support.",
    href: "/clients/institutions",
    link: "Explore institutional services",
    icon: Building2,
  },
  {
    title: "Existing clients",
    description:
      "Find forms, support channels, account resources, and secure client access.",
    href: "/resources",
    link: "Find client resources",
    icon: CircleUserRound,
  },
] as const;

const trustItems = [
  ["PSE Trading Participant", "Active corporate trading participant"],
  ["Licensed broker-dealer", "Registered in the Philippine capital market"],
  ["Retail + institutional", "Service pathways for different investor needs"],
  ["Research publications", "Market notes, guides, and investor education"],
] as const;

export function HomeOrientation() {
  return (
    <section className="home-orientation" aria-labelledby="home-orientation-title">
      <div className="site-container">
        <div className="home-orientation-head">
          <div>
            <p className="section-label">Find your starting point</p>
            <h2 id="home-orientation-title">Built for different levels of investing experience.</h2>
          </div>
          <p>
            Whether you are learning how Philippine equities work, managing an established
            portfolio, or representing an institution, CGSI keeps the next step visible without
            hiding the detail you may need later.
          </p>
        </div>

        <nav className="home-orientation-grid" aria-label="Investor pathways">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <Link className="home-orientation-card" href={item.href} key={item.href}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>
                  {item.link}
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="home-trust-strip" aria-label="Caballes-Go Securities profile">
          {trustItems.map(([title, detail]) => (
            <div className="home-trust-item" key={title}>
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
