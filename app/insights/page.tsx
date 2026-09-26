import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research & Insights",
  description:
    "CGSI research, market notes, investor guides, and source-based publications for Philippine equity investors.",
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
      <PageHero
        eyebrow="Research & insights"
        title="Evidence before urgency."
        description="Read market context, build investing knowledge, and search source-based publications without having to sort through unnecessary noise."
        image="/images/editorial/research-meeting.jpg"
        imageAlt="Professionals reviewing market research together"
      />

      {featured ? (
        <section className="clean-insights-feature">
          <div className="site-container clean-insights-feature-grid">
            <Link href={`/insights/${featured.slug}`} className="clean-insights-feature-image">
              <Image
                src="/images/editorial/trading-research.jpg"
                alt="Financial market information displayed across professional screens"
                fill
                sizes="(min-width: 900px) 55vw, 100vw"
                className="object-cover"
              />
            </Link>
            <div>
              <p className="clean-eyebrow">Latest publication</p>
              <small>{featured.category} · {formatDate(featured.publishedAt)}</small>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link href={`/insights/${featured.slug}`} className="clean-text-link">
                Read the publication
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="clean-insights-index">
        <div className="site-container clean-insights-index-grid">
          <div>
            <p className="clean-eyebrow">Research paths</p>
            <h2>Choose the depth you need.</h2>
          </div>

          <nav aria-label="Research destinations">
            <Link href="/insights/market-notes">
              <span>Market notes</span>
              <small>Dated market observations and context</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/insights/guides">
              <span>Investor guides</span>
              <small>Plain-language investing education</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/insights/library">
              <span>Research library</span>
              <small>Search the complete publication archive</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/market-announcements">
              <span>Market announcements</span>
              <small>Official notices and market information</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>

      {latest.length ? (
        <section className="clean-latest-list">
          <div className="site-container">
            <div className="clean-section-heading">
              <p className="clean-eyebrow">Latest from CGSI</p>
              <h2>Recent publications.</h2>
            </div>
            <div>
              {latest.map((item) => (
                <Link href={`/insights/${item.slug}`} key={item.slug}>
                  <small>{item.category} · {formatDate(item.publishedAt)}</small>
                  <h3>{item.title}</h3>
                  <span>{item.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
