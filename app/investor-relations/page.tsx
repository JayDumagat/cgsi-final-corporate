import type { Metadata } from "next";
import Link from "next/link";

import { defaultSiteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Investor Relations & Corporate Information",
  description:
    "Access CGSI corporate information, governance resources, regulatory references, disclosures, and investor contacts.",
};

const resources = [
  ["Company profile", "Purpose, operating principles, and recent corporate history.", "/about"],
  ["Leadership & team", "Board and executive leadership directory.", "/about/team"],
  ["Governance & oversight", "Control areas, official institutions, and market-participant context.", "/governance"],
  ["Disclosures & compliance", "Risk, privacy, legal, and regulatory information.", "/disclosures"],
] as const;

export default function InvestorRelationsPage() {
  return (
    <>
      <section className="ir-masthead">
        <div className="site-container ir-masthead-grid">
          <div>
            <p className="interior-kicker">Investor relations</p>
            <h1>Corporate information, clearly organized.</h1>
          </div>
          <p>
            Access current company context, governance resources, disclosures, and official
            market-participant references from one corporate information center.
          </p>
        </div>
      </section>

      <section className="ir-profile">
        <div className="site-container ir-profile-grid">
          <div>
            <p>Corporate profile</p>
            <strong>Caballes-Go Securities, Inc.</strong>
            <span>Philippine equity brokerage · PSE Trading Participant</span>
          </div>
          <div>
            <dl>
              <div><dt>Corporate name adopted</dt><dd>November 2024</dd></div>
              <div><dt>Trading operations commenced</dt><dd>April 2025</dd></div>
              <div><dt>Office</dt><dd>Ortigas Center, Pasig City</dd></div>
            </dl>
            <a href={defaultSiteSettings.pseParticipantUrl} target="_blank" rel="noreferrer">
              View official PSE participant record ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ir-resources">
        <div className="site-container">
          <div className="ir-resources-heading">
            <p className="section-label">Corporate resources</p>
            <h2>Documents and information by purpose.</h2>
          </div>
          <div className="ir-resource-grid">
            {resources.map(([title, text, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <em>View resource →</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ir-contact">
        <div className="site-container">
          <div>
            <p className="section-label section-label-on-dark">Corporate enquiries</p>
            <h2>Need a corporate record or clarification?</h2>
          </div>
          <div>
            <p>Contact CGSI and identify the information or reporting period you need.</p>
            <a href={`mailto:${defaultSiteSettings.email}`}>{defaultSiteSettings.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
