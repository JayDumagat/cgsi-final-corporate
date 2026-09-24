import type { Metadata } from "next";

import { InsightLibrary } from "@/components/content/insight-library";
import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Search and filter the complete CGSI publication archive across market notes, investor guides, and research reports.",
};

export default async function ResearchLibraryPage() {
  const insights = await getPublishedInsights();

  return (
    <>
      <section className="library-masthead">
        <div className="site-container library-masthead-grid">
          <div>
            <p className="interior-kicker">Research library</p>
            <h1>Search the complete publication archive.</h1>
          </div>
          <p>
            Find reports, market commentary, and investor education by subject. Each publication
            should distinguish source evidence from interpretation and keep material risk visible.
          </p>
        </div>
      </section>

      <section className="library-index">
        <div className="site-container">
          <div className="library-index-meta">
            <span>CGSI Research</span>
            <span>{insights.length} publications</span>
            <span>Philippine equities</span>
          </div>
          <InsightLibrary items={insights} />
        </div>
      </section>
    </>
  );
}
