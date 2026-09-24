import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investor Guides",
  description:
    "Structured CGSI learning paths for first-time investors, OFWs, families, and clients building a disciplined Philippine-equity process.",
};

const learningPaths = [
  {
    step: "01",
    label: "Prepare",
    title: "Separate investment capital from near-term obligations.",
    description: "Begin with liquidity, emergency reserves, purpose, and time horizon.",
  },
  {
    step: "02",
    label: "Understand",
    title: "Know what ownership, volatility, and liquidity actually mean.",
    description: "Learn the mechanics and risks before comparing securities.",
  },
  {
    step: "03",
    label: "Evaluate",
    title: "Build an evidence-based review habit.",
    description: "Use official disclosures, business fundamentals, and visible assumptions.",
  },
] as const;

export default async function GuidesPage() {
  const guides = (await getPublishedInsights()).filter(
    (item) => item.publicationType === "guide",
  );

  return (
    <>
      <section className="guides-hero">
        <div className="site-container guides-hero-grid">
          <div>
            <p className="interior-kicker">Investor guides</p>
            <h1>A learning path before the first—or next—trade.</h1>
            <p>
              Use the guides in sequence, or begin with the decision that is most relevant to
              your current circumstances.
            </p>
          </div>
          <div className="guides-hero-media">
            <Image
              src="/images/editorial/young-investors.jpg"
              alt="Young investors discussing financial plans with an adviser"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="guide-pathway">
        <div className="site-container">
          <div className="guide-pathway-head">
            <p className="section-label">Core pathway</p>
            <h2>Move from readiness to repeatable judgment.</h2>
          </div>
          <div className="guide-pathway-grid">
            {learningPaths.map((path) => (
              <article key={path.step}>
                <span>{path.step}</span>
                <small>{path.label}</small>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-shelves">
        <div className="site-container guide-shelves-grid">
          <div>
            <p className="section-label section-label-on-dark">Guide collection</p>
            <h2>Choose the question you need to answer.</h2>
          </div>
          <div>
            {guides.map((guide, index) => (
              <Link href={`/insights/${guide.slug}`} key={guide.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><small>{guide.category}</small><strong>{guide.title}</strong><p>{guide.excerpt}</p></div>
                <em>{guide.readTime} →</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="guides-next-step">
        <div className="site-container">
          <h2>Ready to search by topic instead?</h2>
          <Link href="/insights/library" className="btn btn-secondary">Open the research library</Link>
        </div>
      </section>
    </>
  );
}
