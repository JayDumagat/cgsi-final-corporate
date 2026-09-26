import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Browse CGSI market research, investor education, market notes, and official market information.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

export default async function InsightsPage() {
  const insights = await getPublishedInsights();
  const featured = insights[0];
  const latest = insights.slice(1, 5);

  return (
    <>
      <section className="rl-editorial-hero" aria-labelledby="insights-title">
        <div className="site-container">
          <div className="rl-editorial-hero-copy">
            <p className="rl-kicker">Insights</p>
            <h1 id="insights-title">Research that tells you what changed—and when.</h1>
            <p>
              Browse dated market commentary, practical investor education, and source-based
              publications without mixing analysis with official notices.
            </p>
          </div>

          {featured ? (
            <Link href={`/insights/${featured.slug}`} className="rl-editorial-feature">
              <figure>
                <Image
                  src="/images/editorial/trading-research.jpg"
                  alt="Financial market information on professional trading screens"
                  fill
                  priority
                  sizes="(min-width: 960px) 62vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <span>{formatDate(featured.publishedAt)} · {featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <strong>Read publication <ArrowRight size={15} aria-hidden="true" /></strong>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="rl-insight-paths" aria-labelledby="insight-paths-title">
        <div className="site-container">
          <div>
            <p className="rl-kicker">Choose what you need</p>
            <h2 id="insight-paths-title">Analysis, education, or official information.</h2>
          </div>
          <nav aria-label="Insight destinations">
            <Link href="/insights/market-notes"><span>Market notes</span><small>Recent market context</small><ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/insights/guides"><span>Investor guides</span><small>Plain-language education</small><ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/insights/library"><span>Research library</span><small>Search all publications</small><ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/market-announcements"><span>Market announcements</span><small>Official notices and sources</small><ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </div>
      </section>

      <section className="rl-publication-list" aria-labelledby="recent-publications-title">
        <div className="site-container">
          <div>
            <p className="rl-kicker">Recent publications</p>
            <h2 id="recent-publications-title">Latest from the research desk.</h2>
          </div>
          <div>
            {latest.map((item) => (
              <Link href={`/insights/${item.slug}`} key={item.slug}>
                <span>{formatDate(item.publishedAt)}</span>
                <div><small>{item.category}</small><h3>{item.title}</h3></div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
