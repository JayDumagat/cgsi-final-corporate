import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Find the CGSI client path for new investors, private clients, OFWs and seafarers, institutions, and corporations.",
};

const paths = [
  {
    image: "/images/editorial/young-investors.jpg",
    alt: "Young investors discussing financial information",
    eyebrow: "First-time investors",
    title: "Learn the market before you enter it.",
    text: "Start with account basics, risk, terminology, and the practical steps behind your first Philippine equity investment.",
    href: "/clients/new-investors",
    cta: "Start with the basics",
  },
  {
    image: "/images/editorial/long-term-clients.jpg",
    alt: "Clients discussing long-term financial plans",
    eyebrow: "Individuals & families",
    title: "Invest around the rest of your financial life.",
    text: "A private-client path for investors balancing liquidity, long-term goals, family priorities, and direct broker support.",
    href: "/clients/individuals-families",
    cta: "Explore private client support",
  },
  {
    image: "/images/editorial/seafarer-client.jpg",
    alt: "Maritime professionals working on a ship deck",
    eyebrow: "OFWs & seafarers",
    title: "Stay connected to your account from wherever work takes you.",
    text: "Understand the account and service considerations that matter when schedules, locations, and time zones change.",
    href: "/clients/ofws-seafarers",
    cta: "View the OFW & seafarer path",
  },
  {
    image: "/images/editorial/institutional-team.jpg",
    alt: "Institutional professionals discussing documents in a meeting",
    eyebrow: "Institutions & corporations",
    title: "Start with the mandate, controls, and operating requirements.",
    text: "Go directly to professional execution, research, settlement, custody, and market-access conversations.",
    href: "/clients/institutions",
    cta: "Explore institutional services",
  },
] as const;

export default function ClientsPage() {
  return (
    <>
      <section className="rl-subhero" aria-labelledby="clients-title">
        <div className="site-container rl-subhero-grid">
          <div>
            <p className="rl-kicker">Clients</p>
            <h1 id="clients-title">Choose the level of support that fits how you invest.</h1>
            <p>
              CGSI serves people with very different levels of market experience. Start with your
              situation and move into the detail you need.
            </p>
          </div>
          <figure>
            <Image
              src="/images/editorial/advisor-clients.jpg"
              alt="An adviser reviewing financial information with clients"
              fill
              priority
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-path-list" aria-label="Client pathways">
        <div className="site-container">
          {paths.map((item, index) => (
            <article key={item.href}>
              <figure>
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 36vw, 100vw" className="object-cover" />
              </figure>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="rl-kicker">{item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link href={item.href}>
                  {item.cta}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rl-page-cta">
        <div className="site-container">
          <div>
            <p className="rl-kicker">Not sure which path applies?</p>
            <h2>Tell us what you are trying to do.</h2>
            <p>CGSI can point you to the appropriate account, service, or information before you prepare documents.</p>
          </div>
          <Link href="/contact">
            Contact CGSI
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
