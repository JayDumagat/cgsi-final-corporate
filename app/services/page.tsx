import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CGSI trading, execution, research, market access, PERA, settlement, and custody services.",
};

const items = [
  ["Broker-assisted trading", "Place orders with a direct human point of contact for instructions and execution.", "/services/broker-assisted-trading"],
  ["Advisory & execution", "Use market context and broker support around a client-directed investment decision.", "/services/advisory-execution"],
  ["Research & market intelligence", "Access market notes, issuer information, and research for Philippine equity decisions.", "/services/research"],
  ["Direct Market Access", "Explore professional order-access workflows for eligible institutional requirements.", "/services/direct-market-access"],
  ["Settlement & custody", "Keep post-trade processing, records, and asset administration connected to the relationship.", "/services/settlement-custody"],
  ["PERA", "Explore the Personal Equity and Retirement Account pathway for long-term retirement investing.", "/services/pera"],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="rl-subhero" aria-labelledby="services-page-title">
        <div className="site-container rl-subhero-grid">
          <div>
            <p className="rl-kicker">Services</p>
            <h1 id="services-page-title">Support before, during, and after the trade.</h1>
            <p>
              CGSI brings market access, research, execution, and post-trade operations into one
              brokerage relationship.
            </p>
          </div>
          <figure>
            <Image
              src="/images/editorial/trading-research.jpg"
              alt="A market professional reviewing data across trading screens"
              fill
              priority
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-service-directory" aria-labelledby="service-directory-title">
        <div className="site-container rl-service-directory-grid">
          <div>
            <p className="rl-kicker">Service directory</p>
            <h2 id="service-directory-title">Start with the job that needs to get done.</h2>
            <p>Each service page explains what it is for, who it applies to, and what to expect next.</p>
          </div>

          <div className="rl-service-directory-list">
            {items.map(([title, text, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-process" aria-labelledby="process-title">
        <div className="site-container">
          <div className="rl-process-head">
            <p className="rl-kicker">How the relationship fits together</p>
            <h2 id="process-title">Research informs. Execution acts. Operations close the loop.</h2>
          </div>
          <div className="rl-process-grid">
            <article><span>01</span><h3>Understand</h3><p>Start with the objective, account, or mandate—not a product list.</p></article>
            <article><span>02</span><h3>Execute</h3><p>Translate a client instruction into a controlled market-access and execution workflow.</p></article>
            <article><span>03</span><h3>Settle & support</h3><p>Keep settlement, records, and follow-up connected after the trade is placed.</p></article>
          </div>
          <Link href="/clients/institutions">
            Institutional requirements
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
