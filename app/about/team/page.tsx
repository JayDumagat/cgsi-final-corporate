import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { leadership } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "Meet the board and executive leadership of Caballes-Go Securities and the functions supporting CGSI clients.",
};

const functions = [
  ["Coverage & execution", "Client communication, market context, order clarification, and execution coordination."],
  ["Research", "Official-source market information, company disclosures, and investor education."],
  ["Operations", "Account documentation, trade confirmation, settlement, records, and service follow-through."],
  ["Compliance & risk", "Market conduct, control monitoring, financial-crime safeguards, and escalation."],
] as const;

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & team"
        title="Clear responsibility across the firm."
        description="CGSI’s board and executive leadership set the standard for client service, market conduct, operational discipline, and long-term stewardship."
        image="/images/editorial/market-office.jpg"
        imageAlt="A professional office with financial-market information on screen"
      />

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Board & executive leadership</p>
            <h2>Accountability is named.</h2>
          </div>
          <div className="clean-list clean-leadership-list">
            {leadership.map((person,index)=>(
              <article key={person.name}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">How the firm works</p>
            <h2>Specialist functions, one client context.</h2>
          </div>
          <ol>
            {functions.map(([title,text],index)=>(
              <li key={title}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="clean-cta">
        <div className="site-container clean-cta-grid">
          <div>
            <p className="clean-eyebrow">Governance</p>
            <h2>See the framework behind leadership responsibility.</h2>
          </div>
          <div className="clean-cta-actions">
            <Link href="/governance" className="clean-primary-button">
              Governance & oversight
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
