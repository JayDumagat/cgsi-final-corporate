import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CorporateHero } from "@/components/sections/corporate-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { getPublishedInsights } from "@/lib/content";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

export default async function Home() {
  const insights = await getPublishedInsights();
  const featured = insights[0];
  const latest = insights.slice(1, 4);

  return (
    <>
      <CorporateHero />

      <section className="ref-home-capabilities" aria-labelledby="capabilities-title">
        <div className="site-container ref-home-capabilities-grid">
          <div className="ref-section-intro">
            <p className="ref-kicker">What CGSI does</p>
            <h2 id="capabilities-title">From an investment idea to a settled trade.</h2>
            <p>
              Work with one brokerage relationship for research, execution, and the operational
              details that follow.
            </p>
            <Link href="/services" className="ref-text-link">
              See all services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="ref-capability-list">
            <Link href="/services/broker-assisted-trading">
              <span>Trading</span>
              <div>
                <h3>Broker-assisted execution</h3>
                <p>Place and clarify orders with a direct human point of contact.</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/services/research">
              <span>Research</span>
              <div>
                <h3>Market intelligence</h3>
                <p>Use market notes, issuer information, and research to prepare decisions.</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/services/settlement-custody">
              <span>Post-trade</span>
              <div>
                <h3>Settlement & custody</h3>
                <p>Keep confirmations, records, and account administration connected to the trade.</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <figure className="site-container ref-capability-image">
          <Image
            src="/images/editorial/cgsi-professionals.jpg"
            alt="Financial professionals reviewing information together"
            fill
            sizes="(min-width: 960px) 1200px, 100vw"
            className="object-cover"
          />
        </figure>
      </section>

      <section className="ref-home-research" aria-labelledby="research-title">
        <div className="site-container ref-research-heading">
          <div>
            <p className="ref-kicker">Research & insights</p>
            <h2 id="research-title">Know what changed before you decide what to do.</h2>
          </div>
          <Link href="/insights" className="ref-text-link">
            View all research <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {featured ? (
          <div className="site-container ref-research-layout">
            <Link href={`/insights/${featured.slug}`} className="ref-featured-story">
              <span className="ref-featured-story-image">
                <Image
                  src="/images/editorial/trading-research.jpg"
                  alt="Professional trading screens showing market information"
                  fill
                  sizes="(min-width: 900px) 62vw, 100vw"
                  className="object-cover"
                />
              </span>
              <span className="ref-featured-story-copy">
                <small>{featured.category} · {formatDate(featured.publishedAt)}</small>
                <strong>{featured.title}</strong>
                <p>{featured.excerpt}</p>
                <em>Read the publication <ArrowRight size={14} aria-hidden="true" /></em>
              </span>
            </Link>

            <div className="ref-research-rail">
              {latest.map((item) => (
                <Link href={`/insights/${item.slug}`} key={item.slug}>
                  <small>{formatDate(item.publishedAt)}</small>
                  <strong>{item.title}</strong>
                  <span>{item.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="ref-home-start" aria-labelledby="start-title">
        <div className="site-container ref-home-start-grid">
          <figure>
            <Image
              src="/images/editorial/young-investors.jpg"
              alt="Young investors reviewing financial information with an adviser"
              fill
              sizes="(min-width: 900px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div>
            <p className="ref-kicker">New to investing?</p>
            <h2 id="start-title">Learn the market before you place the first order.</h2>
            <p>
              Start with how equities work, what risk means, and what you need to open an account.
              No product pitch required.
            </p>
            <div className="ref-home-start-actions">
              <Link href="/insights/guides" className="ref-button-primary">
                Start with investor guides
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/clients/new-investors" className="ref-button-link">New investor pathway</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ref-home-institutional" aria-labelledby="institutional-title">
        <div className="site-container ref-home-institutional-grid">
          <div>
            <p className="ref-kicker">Institutional & corporate</p>
            <h2 id="institutional-title">Local execution. Clear operating ownership.</h2>
            <p>
              For professional mandates, CGSI supports defined authorities, market access,
              execution, settlement, and account coordination.
            </p>
            <Link href="/clients/institutions" className="ref-text-link">
              Explore institutional services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <figure>
            <Image
              src="/images/editorial/institutional-team.jpg"
              alt="Institutional professionals in a business meeting"
              fill
              sizes="(min-width: 900px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
