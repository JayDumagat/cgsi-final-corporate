import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
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
      <PageHero
        eyebrow="Market news"
        title="Market developments, with a clear source trail."
        description="Follow relevant Philippine equity-market developments and verify each story at its cited source."
        image="/images/editorial/makati-aerial.jpg"
        imageAlt="Metro Manila seen from above"
      />

      <section className="clean-news-feature">
        <div className="site-container clean-news-feature-grid">
          <div className="clean-news-feature-image">
            <Image
              src={lead.image}
              alt="The Makati central business district after the market close"
              fill
              priority
              sizes="(min-width: 900px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <article>
            <p className="clean-eyebrow">Latest coverage</p>
            <small>{lead.category} · {lead.date}</small>
            <h2>{lead.title}</h2>
            <p>{lead.summary}</p>
            {lead.sourceHref.startsWith("/") ? (
              <Link href={lead.sourceHref} className="clean-text-link">
                Read more <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : (
              <a href={lead.sourceHref} target="_blank" rel="noreferrer" className="clean-text-link">
                Verify at {lead.sourceLabel} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="clean-news-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Latest coverage</p>
            <h2>Recent market stories.</h2>
          </div>
          <div className="clean-news-list">
            {more.map((story)=>(
              <article key={story.slug}>
                <div>
                  <small>{story.category} · {story.date}</small>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                </div>
                {story.sourceHref.startsWith("/") ? (
                  <Link href={story.sourceHref}>Read more <ArrowRight size={14} aria-hidden="true" /></Link>
                ) : (
                  <a href={story.sourceHref} target="_blank" rel="noreferrer">
                    {story.sourceLabel} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-security-strip">
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
