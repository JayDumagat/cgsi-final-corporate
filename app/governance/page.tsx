import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Governance & Oversight",
  description:
    "Understand the regulatory, market-integrity, privacy, financial-crime, and operational framework relevant to CGSI.",
};

const oversightAreas = [
  ["Market conduct & integrity", "Trading activity operates within exchange rules, securities regulation, and applicable market-conduct requirements."],
  ["Investor protection", "Account processes, disclosures, suitability considerations, and client communication support informed participation."],
  ["Anti-money laundering", "Client identification, monitoring, record keeping, and escalation form part of the financial-crime control framework."],
  ["Data privacy & security", "Personal and account information is handled within applicable privacy and information-security obligations."],
  ["Operational resilience", "Responsibilities, records, settlement processes, and exception handling support continuity and accurate follow-through."],
  ["Financial consumer protection", "Transparent language, accessible support, and fair treatment are relevant across the client relationship."],
] as const;

const authorities = [
  ["Securities and Exchange Commission", "https://www.sec.gov.ph/"],
  ["The Philippine Stock Exchange", "https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/"],
  ["Capital Markets Integrity Corporation", "https://cmic.com.ph/"],
  ["Anti-Money Laundering Council", "https://www.amlc.gov.ph/"],
  ["National Privacy Commission", "https://privacy.gov.ph/"],
] as const;

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & oversight"
        title="Regulated participation needs visible responsibility."
        description="Review the control areas, official institutions, and operating responsibilities relevant to CGSI’s brokerage business."
        image="/images/editorial/governance-building.jpg"
        imageAlt="A substantial modern office building at dusk"
      />

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading clean-section-heading-wide">
            <p className="clean-eyebrow">Oversight & control</p>
            <h2>One framework, several connected responsibilities.</h2>
          </div>
          <div className="clean-list">
            {oversightAreas.map(([title,text],index)=>(
              <article key={title}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-authorities">
        <div className="site-container clean-authorities-grid">
          <div>
            <p className="clean-eyebrow">Official institutions</p>
            <h2>Verify at the source.</h2>
            <p>Use official regulators and market institutions for current rules, notices, and participant information.</p>
          </div>
          <nav aria-label="Official institutions">
            {authorities.map(([label,href])=>(
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
