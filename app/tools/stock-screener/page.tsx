import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stock Screener",
  description:
    "Preview the design direction for a future CGSI Philippine-equity screening workspace.",
};

export default function StockScreenerPage() {
  return (
    <>
      <section className="screener-hero">
        <div className="site-container screener-hero-grid">
          <div>
            <p className="interior-kicker">Tools / Planned workspace</p>
            <h1>Screen with criteria you can explain.</h1>
            <p>
              The planned screener will help investors narrow a research universe while keeping
              definitions, reporting periods, and data timing visible.
            </p>
            <span className="tool-status">Planned</span>
          </div>
          <div className="screener-hero-image">
            <Image
              src="/images/editorial/trading-research.jpg"
              alt="A market professional reviewing data across trading screens"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="screener-blueprint">
        <div className="site-container screener-blueprint-grid">
          <div>
            <p>Proposed research sequence</p>
            <h2>Universe → Criteria → Evidence → Review</h2>
          </div>
          <div className="screener-criteria" aria-label="Illustrative screener criteria">
            <div><span>Universe</span><strong>Philippine listed equities</strong></div>
            <div><span>Liquidity</span><strong>User-defined threshold</strong></div>
            <div><span>Fundamentals</span><strong>Comparable reporting period</strong></div>
            <div><span>Result</span><strong>Research list, not a recommendation</strong></div>
          </div>
        </div>
      </section>

      <section className="planned-tool-note">
        <div className="site-container">
          <p>
            Until the workspace is available, use official disclosures and the CGSI research
            library to build a source-based review.
          </p>
          <Link href="/insights/library">Open the research library →</Link>
        </div>
      </section>
    </>
  );
}
