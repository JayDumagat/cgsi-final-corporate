import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research & Insights",
  description:
    "Enter the CGSI research desk for market notes, structured investor guides, and the complete publication library.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

export default async function InsightsPage() {
  const insights = await getPublishedInsights();
  const lead = insights.find((item) => item.publicationType === "market-note") ?? insights[0];
  const latestGuides = insights.filter((item) => item.publicationType === "guide").slice(0, 2);

  return (
    <>
      <section className="research-portal-masthead">
        <div className="site-container">
          <div className="research-portal-brand">
            <span>CGSI Research</span>
            <span>Philippine equities</span>
            <span>Evidence before urgency</span>
          </div>
          <div className="research-portal-title">
            <div>
              <p>Research & insights</p>
              <h1>Three different ways to use the research desk.</h1>
            </div>
            <p>
              Read timely market interpretation, follow a structured learning path, or search
              the complete source-based publication archive.
            </p>
          </div>
          <nav aria-label="Research destinations">
            <Link href="/insights/market-notes">Market notes</Link>
            <Link href="/insights/guides">Investor guides</Link>
            <Link href="/insights/library">Research library</Link>
            <Link href="/market-news">Market news</Link>
          </nav>
        </div>
      </section>

      {lead ? (
        <section className="research-portal-lead">
          <div className="site-container research-portal-lead-grid">
            <Reveal animate className="research-portal-lead-media">
              <Image
                src="/images/editorial/trading-research.jpg"
                alt="A market professional reviewing financial information across trading screens"
                fill
                priority
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal animate direction="right" className="research-portal-lead-copy">
              <p>Latest market note · {formatDate(lead.publishedAt)}</p>
              <h2>{lead.title}</h2>
              <span>{lead.excerpt}</span>
              <Link href={`/insights/${lead.slug}`}>Read the note →</Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="research-destinations">
        <div className="site-container research-destination-grid">
          <Reveal animate>
            <Link href="/insights/market-notes" className="research-destination research-destination-notes">
              <span>01 / Timely</span>
              <h2>Market notes</h2>
              <p>Dated observations organized around what moved, what to verify, and what matters next.</p>
              <em>Read market notes →</em>
            </Link>
          </Reveal>
          <Reveal animate delay={0.04}>
            <Link href="/insights/guides" className="research-destination research-destination-guides">
              <span>02 / Structured</span>
              <h2>Investor guides</h2>
              <p>Learning paths built around readiness, risk, research discipline, and portfolio purpose.</p>
              <em>Start a learning path →</em>
            </Link>
          </Reveal>
          <Reveal animate delay={0.08}>
            <Link href="/insights/library" className="research-destination research-destination-library">
              <span>03 / Searchable</span>
              <h2>Research library</h2>
              <p>A filterable archive of reports, guides, commentary, and source-based publications.</p>
              <em>Search the library →</em>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="research-guide-preview">
        <div className="site-container research-guide-preview-grid">
          <div>
            <p className="section-label">From the learning desk</p>
            <h2>Build the process before adding exposure.</h2>
          </div>
          <div>
            {latestGuides.map((guide) => (
              <Link href={`/insights/${guide.slug}`} key={guide.slug}>
                <span>{guide.category}</span>
                <strong>{guide.title}</strong>
                <small>{guide.readTime}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="research-standards" id="research-standards">
        <div className="site-container research-standards-grid">
          <div>
            <p className="section-label section-label-on-dark">Research standards</p>
            <h2>Evidence before urgency.</h2>
          </div>
          <div>
            <article><span>01</span><h3>Start at the source</h3><p>Anchor analysis in issuer disclosures, exchange information, and established market data.</p></article>
            <article><span>02</span><h3>State uncertainty</h3><p>Separate verified facts, interpretation, and areas where the evidence remains incomplete.</p></article>
            <article><span>03</span><h3>Keep risk visible</h3><p>Research supports judgment; it does not remove downside or guarantee an outcome.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
