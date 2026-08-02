import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Watchlist",
  description:
    "Preview the planned CGSI watchlist for following securities, disclosures, and investor questions.",
};

export default function WatchlistPage() {
  return (
    <>
      <section className="watchlist-masthead">
        <div className="site-container watchlist-masthead-grid">
          <div>
            <p className="interior-kicker">Tools / Planned workspace</p>
            <h1>Follow the thesis, not only the ticker.</h1>
          </div>
          <div>
            <span className="tool-status">Planned</span>
            <p>
              A future authenticated watchlist will connect price context with disclosures,
              research notes, and the unanswered questions behind each security.
            </p>
          </div>
        </div>
      </section>

      <section className="watchlist-ledger">
        <div className="site-container">
          <div className="watchlist-ledger-head">
            <span>Security</span><span>Reason for watching</span><span>Next evidence</span><span>Status</span>
          </div>
          <div className="watchlist-empty">
            <span>Private workspace</span>
            <h2>Your watchlist should begin with a reason.</h2>
            <p>
              The planned experience will require secure access. No market data or portfolio
              information is being stored on this page.
            </p>
          </div>
        </div>
      </section>

      <section className="watchlist-prompts">
        <div className="site-container">
          <article><span>01</span><h3>What changed?</h3><p>Identify the new evidence, not just the price movement.</p></article>
          <article><span>02</span><h3>What remains uncertain?</h3><p>Keep questions and missing evidence visible.</p></article>
          <article><span>03</span><h3>What would change the view?</h3><p>Define decision points before urgency arrives.</p></article>
          <Link href="/market-announcements">Review official market sources →</Link>
        </div>
      </section>
    </>
  );
}
