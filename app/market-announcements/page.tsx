import type { Metadata } from "next";
import Link from "next/link";

import { marketAnnouncements } from "@/content/market-content";

export const metadata: Metadata = {
  title: "Market Announcements",
  description:
    "A source-first directory for Philippine exchange notices, issuer disclosures, market-operation updates, and trading information.",
};

export default function MarketAnnouncementsPage() {
  return (
    <>
      <section className="announcement-masthead">
        <div className="site-container announcement-masthead-grid">
          <div>
            <p className="interior-kicker">Market information</p>
            <h1>Market announcements</h1>
          </div>
          <p>
            Find the official source for exchange notices, issuer disclosures, and market
            operations. This page is separate from CGSI corporate press releases.
          </p>
        </div>
      </section>

      <section className="announcement-register">
        <div className="site-container">
          <div className="announcement-register-head">
            <span>Date</span><span>Notice type</span><span>Announcement</span><span>Official source</span>
          </div>
          {marketAnnouncements.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <time>{item.date}</time>
              <span>{item.type}</span>
              <div><strong>{item.title}</strong><p>{item.description}</p></div>
              <em>{item.source} ↗</em>
            </a>
          ))}
        </div>
      </section>

      <section className="announcement-source-guide">
        <div className="site-container announcement-source-grid">
          <div>
            <p className="section-label section-label-on-dark">How to use this register</p>
            <h2>Follow the notice back to the authority that issued it.</h2>
          </div>
          <ol>
            <li><span>01</span><p>Identify whether the information concerns an issuer, the exchange, or market operations.</p></li>
            <li><span>02</span><p>Read the complete official notice, including dates, conditions, and attachments.</p></li>
            <li><span>03</span><p>Separate the verified announcement from commentary about what it may mean.</p></li>
          </ol>
        </div>
      </section>

      <section className="announcement-related">
        <div className="site-container">
          <Link href="/market-news">Market news →</Link>
          <Link href="/insights/market-notes">Market notes →</Link>
          <Link href="/about/pressroom">CGSI pressroom →</Link>
        </div>
      </section>
    </>
  );
}
