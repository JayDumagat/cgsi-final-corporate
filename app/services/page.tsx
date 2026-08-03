import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Brokerage Expertise",
  description:
    "Explore CGSI human coverage, execution, research, direct market access, PERA, and post-trade operations.",
};

const capabilityGroups = [
  {
    number: "01",
    label: "Human coverage",
    title: "A person accountable for the instruction.",
    description:
      "Broker-assisted coverage and advisory execution connect client context with disciplined order handling.",
    links: [
      ["Broker-assisted trading", "/services/broker-assisted-trading"],
      ["Advisory & execution", "/services/advisory-execution"],
    ],
  },
  {
    number: "02",
    label: "Market intelligence",
    title: "Evidence organized around the decision.",
    description:
      "Research separates source information, interpretation, and uncertainty so context remains usable.",
    links: [["Research & market intelligence", "/services/research"]],
  },
  {
    number: "03",
    label: "Market access",
    title: "Access designed around the operating mandate.",
    description:
      "Direct market access can support eligible professional workflows where approvals, controls, and infrastructure align.",
    links: [["Direct Market Access", "/services/direct-market-access"]],
  },
  {
    number: "04",
    label: "Long-term programs",
    title: "A retirement structure with a longer horizon.",
    description:
      "PERA planning begins with eligibility, contribution purpose, liquidity needs, and current provider availability.",
    links: [["Personal Equity and Retirement Account", "/services/pera"]],
  },
  {
    number: "05",
    label: "Post-trade operations",
    title: "Completion is part of the client experience.",
    description:
      "Settlement, records, custody coordination, and account support carry the instruction through its full lifecycle.",
    links: [["Settlement & custody", "/services/settlement-custody"]],
  },
] as const;

const operatingModel = [
  ["Define", "Clarify objectives, authorities, eligibility, account structure, and practical constraints."],
  ["Design", "Select the service model, controls, communication protocol, and relevant information flow."],
  ["Execute", "Coordinate the instruction through the appropriate human or approved access channel."],
  ["Complete", "Connect confirmation, settlement, records, review, and ongoing support."],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="capability-map-hero">
        <div className="site-container capability-map-hero-grid">
          <div>
            <p className="interior-kicker">Our expertise</p>
            <h1>Specialist capability across the investment lifecycle.</h1>
            <p>
              CGSI connects coverage, research, market access, retirement programs, and
              post-trade operations around the requirements of each client relationship.
            </p>
            <Link href="/contact" className="btn btn-primary">Discuss your requirements</Link>
          </div>
          <div className="capability-map-visual">
            <Image
              src="/images/editorial/trading-research.jpg"
              alt="A financial-market professional working across multiple trading screens"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div>
              <span>Coverage</span><i />
              <span>Intelligence</span><i />
              <span>Access</span><i />
              <span>Operations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-map">
        <div className="site-container capability-map-grid">
          <div className="capability-map-index">
            <p className="section-label">Capability architecture</p>
            <h2>Different functions. One operating context.</h2>
            <p>
              Expertise is organized by the work being done—not by a repeated product-card
              template. Each capability opens into its own service experience.
            </p>
          </div>
          <div className="capability-map-list">
            {capabilityGroups.map((group, index) => (
              <Reveal animate delay={index * 0.035} key={group.label}>
                <article>
                  <span>{group.number}</span>
                  <div>
                    <small>{group.label}</small>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <nav aria-label={`${group.label} services`}>
                    {group.links.map(([label, href]) => (
                      <Link href={href} key={href}>{label} <span aria-hidden="true">→</span></Link>
                    ))}
                  </nav>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-operating-model">
        <div className="expertise-operating-media">
          <Image
            src="/images/editorial/operations-team.jpg"
            alt="Financial operations professionals collaborating in an office"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="expertise-operating-copy">
          <div>
            <p className="section-label section-label-on-dark">How the work connects</p>
            <h2>A disciplined operating sequence.</h2>
            <ol>
              {operatingModel.map(([title, text], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="expertise-mandate-note">
        <div className="site-container expertise-mandate-note-grid">
          <div>
            <p className="section-label">Institutional mandates</p>
            <h2>Professional requirements deserve a deliberate operating conversation.</h2>
          </div>
          <div>
            <p>
              Corporate and institutional accounts may involve defined authorities, reporting,
              execution protocols, market-access controls, and settlement requirements.
            </p>
            <Link href="/clients/institutions" className="text-link">
              Institutional client services
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
