import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Brokerage Services",
  description:
    "CGSI services across research, execution, market access, settlement, custody, and retirement investing.",
};

const stages = [
  {
    number: "01",
    title: "Understand",
    text: "Research, market context, and a clear discussion of the order or mandate.",
    links: [["Research & intelligence", "/services/research"], ["Advisory & execution", "/services/advisory-execution"]],
  },
  {
    number: "02",
    title: "Execute",
    text: "Broker-assisted orders or approved professional market-access workflows.",
    links: [["Broker-assisted trading", "/services/broker-assisted-trading"], ["Direct Market Access", "/services/direct-market-access"]],
  },
  {
    number: "03",
    title: "Settle & support",
    text: "Post-trade coordination, custody, records, and ongoing account administration.",
    links: [["Settlement & custody", "/services/settlement-custody"], ["PERA", "/services/pera"]],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Brokerage services"
        title="Support before, during, and after the trade."
        description="CGSI connects research, execution, market access, and post-trade work so the client experience does not stop when an order is filled."
        image="/images/editorial/trading-research.jpg"
        imageAlt="A professional market workstation"
      />

      <section className="ref-service-flow" aria-labelledby="service-flow-title">
        <div className="site-container">
          <div className="ref-section-heading">
            <p className="ref-kicker">How the work connects</p>
            <h2 id="service-flow-title">Three stages. One brokerage relationship.</h2>
          </div>
          <div className="ref-service-flow-grid">
            {stages.map((stage) => (
              <article key={stage.number}>
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <nav>
                  {stage.links.map(([label, href]) => (
                    <Link href={href} key={href}>{label}<ArrowRight size={13} /></Link>
                  ))}
                </nav>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-service-image-band">
        <div className="site-container ref-service-image-band-grid">
          <figure>
            <Image src="/images/editorial/operations-team.jpg" alt="Operations professionals collaborating in an office" fill sizes="(min-width: 900px) 55vw, 100vw" className="object-cover" />
          </figure>
          <div>
            <p className="ref-kicker">For professional requirements</p>
            <h2>Need a defined operating model?</h2>
            <p>Institutional relationships can include communication protocols, approved authorities, market-access controls, settlement requirements, and reporting expectations.</p>
            <Link href="/clients/institutions" className="ref-text-link">Institutional services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
