import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { marketAnnouncements } from "@/content/market-content";

export const metadata: Metadata = {
  title: "Market Announcements",
  description:
    "A source-first directory for Philippine exchange notices, issuer disclosures, market-operation updates, and trading information.",
};

export default function MarketAnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Market information"
        title="Market announcements."
        description="Go directly to official exchange notices, issuer disclosures, and market-operation updates. This directory is separate from CGSI corporate press releases."
        compact
      />

      <section className="clean-register">
        <div className="site-container">
          <div className="clean-register-head">
            <span>Date</span>
            <span>Type</span>
            <span>Announcement</span>
            <span>Source</span>
          </div>
          {marketAnnouncements.map((item)=>(
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <time>{item.date}</time>
              <span>{item.type}</span>
              <div><strong>{item.title}</strong><p>{item.description}</p></div>
              <em>{item.source} <ArrowUpRight size={14} aria-hidden="true" /></em>
            </a>
          ))}
        </div>
      </section>

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">How to use this directory</p>
            <h2>Follow the information back to its source.</h2>
          </div>
          <ol>
            <li><span>01</span><div><strong>Identify the issuer</strong><p>Check whether the notice concerns an issuer, the exchange, or market operations.</p></div></li>
            <li><span>02</span><div><strong>Read the full notice</strong><p>Review dates, conditions, attachments, and the complete official wording.</p></div></li>
            <li><span>03</span><div><strong>Separate fact from interpretation</strong><p>Keep the verified announcement distinct from commentary about what it may mean.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="clean-related-links">
        <div className="site-container">
          <Link href="/market-news">Market news <ArrowRight size={14} aria-hidden="true" /></Link>
          <Link href="/insights/market-notes">Market notes <ArrowRight size={14} aria-hidden="true" /></Link>
          <Link href="/about/pressroom">CGSI pressroom <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
