import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Risk Management",
  description:
    "Learn how CGSI frames client investment risk and operational risk through clear constraints, controls, and escalation.",
};

const clientRisk = [
  ["Purpose", "What the capital needs to do and when it may be required."],
  ["Capacity", "The financial loss or volatility the client can absorb without compromising essential needs."],
  ["Tolerance", "The level of uncertainty and price movement the client can realistically sustain."],
  ["Concentration", "The effect of one issuer, sector, or position on the whole portfolio."],
  ["Liquidity", "The ability to transact at an available market price when funds are needed."],
] as const;

const operationalRisk = [
  ["Clear authority", "Understand who may provide instructions and how those instructions are confirmed."],
  ["Accurate records", "Maintain the information needed to support transactions, accounts, and required reporting."],
  ["Process ownership", "Assign responsibility for execution, settlement, custody, support, and exception handling."],
  ["Monitoring & escalation", "Identify unusual activity or process breaks and route them to the appropriate control owner."],
] as const;

export default function RiskManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Risk management"
        title="Make the constraints visible before making the move."
        description="Risk cannot be removed from investing or brokerage operations. It can be identified, discussed, bounded, monitored, and escalated with greater discipline."
        image="/images/editorial/research-meeting.jpg"
        imageAlt="A financial professional explaining market information during a meeting"
      />

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Client investment risk</p>
            <h2>Suitability starts with real-world capacity.</h2>
          </div>
          <div className="clean-list">
            {clientRisk.map(([title,text],index)=>(
              <article key={title}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">Operational risk</p>
            <h2>Disciplined processes around the transaction.</h2>
            <p className="clean-muted-copy">Controls work when authority, records, ownership, monitoring, and escalation remain clear.</p>
          </div>
          <ol>
            {operationalRisk.map(([title,text],index)=>(
              <li key={title}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
