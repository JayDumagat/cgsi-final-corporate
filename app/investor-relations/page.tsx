import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
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
      <PageHero
        eyebrow="Investor relations"
        title="Corporate information, clearly organized."
        description="Access current company context, governance resources, disclosures, and official market-participant references from one place."
        compact
      />

      <section className="clean-proof">
        <div className="site-container clean-proof-grid">
          <div>
            <p className="clean-eyebrow">Corporate profile</p>
            <h2>Caballes-Go Securities, Inc.</h2>
            <p>Philippine equity brokerage and PSE Trading Participant based in Ortigas Center, Pasig City.</p>
            <a href={defaultSiteSettings.pseParticipantUrl} target="_blank" rel="noreferrer" className="clean-text-link">
              Official PSE participant record
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <dl className="clean-proof-list">
            <div><dt>Corporate name adopted</dt><dd>November 2024</dd></div>
            <div><dt>Trading operations commenced</dt><dd>April 2025</dd></div>
            <div><dt>Office</dt><dd>Ortigas Center, Pasig City</dd></div>
          </dl>
        </div>
      </section>

      <section className="clean-directory">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Corporate resources</p>
            <h2>Information by purpose.</h2>
          </div>
          <div className="clean-directory-list">
            {resources.map(([title,text,href],index)=>(
              <Link href={href} key={href}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <div><small>Corporate information</small><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
