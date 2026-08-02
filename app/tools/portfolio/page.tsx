import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Workspace",
  description:
    "Preview the planned CGSI portfolio workspace for reviewing allocation, concentration, purpose, and risk.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolio-hero">
        <div className="site-container portfolio-hero-grid">
          <div>
            <p className="interior-kicker">Tools / Planned workspace</p>
            <h1>See the portfolio as a set of responsibilities.</h1>
            <p>
              A future authenticated view will organize allocation and concentration around
              purpose, liquidity, time horizon, and client-defined review points.
            </p>
            <span className="tool-status tool-status-on-dark">Planned</span>
          </div>
          <div className="portfolio-composition" aria-label="Illustrative portfolio framework">
            <span>Purpose</span>
            <span>Liquidity</span>
            <span>Concentration</span>
            <span>Review</span>
            <i />
          </div>
        </div>
      </section>

      <section className="portfolio-framework">
        <div className="site-container portfolio-framework-grid">
          <div>
            <p className="section-label">Proposed framework</p>
            <h2>Start with why the capital exists.</h2>
          </div>
          <div>
            <article><span>01</span><h3>Objective</h3><p>Connect each allocation to a stated purpose and time horizon.</p></article>
            <article><span>02</span><h3>Capacity</h3><p>Keep near-term obligations and loss capacity distinct from return targets.</p></article>
            <article><span>03</span><h3>Concentration</h3><p>Make issuer, sector, and liquidity exposure easy to identify.</p></article>
            <article><span>04</span><h3>Review</h3><p>Use defined evidence and decision points—not arbitrary activity.</p></article>
          </div>
        </div>
      </section>

      <section className="planned-tool-note">
        <div className="site-container">
          <p>For a current account or mandate conversation, speak directly with the CGSI team.</p>
          <Link href="/contact">Contact CGSI →</Link>
        </div>
      </section>
    </>
  );
}
