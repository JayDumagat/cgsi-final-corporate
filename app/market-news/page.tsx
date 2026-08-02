import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { marketNews } from "@/content/market-content";

export const metadata: Metadata = {
  title: "Market News",
  description:
    "Editorial coverage and source-based context on relevant Philippine equity-market developments.",
};

export default function MarketNewsPage() {
  const [lead, ...more] = marketNews;

  return (
    <>
      <section className="market-news-masthead">
        <div className="site-container">
          <div className="market-news-nameplate">
            <span>CGSI Market Desk</span>
            <h1>Market news</h1>
            <time>Philippine equities · Source-based coverage</time>
          </div>
          <nav aria-label="Market editorial">
            <Link href="/market-news">Latest coverage</Link>
            <Link href="/market-announcements">Market announcements</Link>
            <Link href="/insights/market-notes">Analysis & notes</Link>
          </nav>
        </div>
      </section>

      <section className="market-news-lead">
        <div className="site-container market-news-lead-grid">
          <div className="market-news-lead-media">
            <Image
              src={lead.image}
              alt="The Makati central business district after the market close"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </div>
          <article>
            <p>{lead.category} · {lead.date}</p>
            <h2>{lead.title}</h2>
            <span>{lead.summary}</span>
            {lead.sourceHref.startsWith("/") ? (
              <Link href={lead.sourceHref}>Read from {lead.sourceLabel} →</Link>
            ) : (
              <a href={lead.sourceHref} target="_blank" rel="noreferrer">
                Verify at {lead.sourceLabel} ↗
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="market-news-grid-section">
        <div className="site-container">
          <div className="market-news-section-head">
            <p className="section-label">Latest coverage</p>
            <h2>Market developments with a clear source trail.</h2>
          </div>
          <div className="market-news-grid">
            {more.map((story) => (
              <article key={story.slug}>
                <div>
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p>{story.category} · {story.date}</p>
                <h3>{story.title}</h3>
                <span>{story.summary}</span>
                {story.sourceHref.startsWith("/") ? (
                  <Link href={story.sourceHref}>Read more →</Link>
                ) : (
                  <a href={story.sourceHref} target="_blank" rel="noreferrer">
                    Official source ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="market-news-disclaimer">
        <div className="site-container">
          <strong>Editorial distinction</strong>
          <p>
            Market news reports developments. Market notes interpret context. Neither is a
            personalized recommendation or a guarantee of future market behavior.
          </p>
        </div>
      </section>
    </>
  );
}
