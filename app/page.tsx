import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights, getPublicSiteSettings } from "@/lib/content";

const tasks = [
  {
    title: "Start investing",
    text: "Learn the basics, review account requirements, and prepare your first conversation.",
    href: "/clients/new-investors",
  },
  {
    title: "Speak with a broker",
    text: "Get broker-assisted execution and support for an investment decision you have already made.",
    href: "/services/broker-assisted-trading",
  },
  {
    title: "Follow the market",
    text: "Read CGSI research, market notes, and official announcements in one place.",
    href: "/insights",
  },
  {
    title: "Discuss a mandate",
    text: "Review execution, research, market access, and settlement support for institutions.",
    href: "/clients/institutions",
  },
] as const;

const supportPoints = [
  ["Broker-assisted execution", "A direct point of contact for orders and account-related questions."],
  ["Research you can discuss", "Market context and publications that support—not replace—your own decision."],
  ["Post-trade support", "Settlement, custody, records, and account administration stay connected to the relationship."],
] as const;

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

export default async function Home() {
  const [insights, settings] = await Promise.all([
    getPublishedInsights(),
    getPublicSiteSettings(),
  ]);

  const featured = insights[0];
  const latest = insights.slice(1, 3);

  return (
    <>
      <section className="ref-home-hero" aria-labelledby="home-title">
        <div className="site-container ref-home-hero-grid">
          <Reveal animate className="ref-home-hero-copy">
            <p className="ref-kicker">Caballes-Go Securities, Inc.</p>
            <h1 id="home-title">Invest in Philippine equities with a broker you can reach.</h1>
            <p>
              Research, broker-assisted execution, and account support from a PSE Trading Participant
              serving individual and institutional clients.
            </p>
            <div className="ref-home-hero-actions">
              <Link href="/open-account" className="ref-primary-button">
                Open an account
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/insights" className="ref-text-link">
                Read market research
              </Link>
            </div>
          </Reveal>

          <figure className="ref-home-hero-image">
            <Image
              src="/images/editorial/makati-dusk.jpg"
              alt="Makati business district at dusk"
              fill
              priority
              sizes="(min-width: 960px) 52vw, 100vw"
              className="object-cover"
            />
            <figcaption>Philippine market perspective, from Metro Manila.</figcaption>
          </figure>
        </div>

        <div className="site-container ref-home-proof" aria-label="CGSI credentials">
          <div><span>PSE status</span><strong>Active Trading Participant</strong></div>
          <div><span>License</span><strong>Broker-Dealer</strong></div>
          <div><span>Client coverage</span><strong>Retail & Institutional</strong></div>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            Verify on PSE
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="ref-task-section" aria-labelledby="task-title">
        <div className="site-container">
          <div className="ref-section-heading ref-section-heading-row">
            <div>
              <p className="ref-kicker">Start with the task</p>
              <h2 id="task-title">What do you want to do?</h2>
            </div>
            <p>
              You do not need to understand the brokerage industry to find the right part of the site.
            </p>
          </div>

          <div className="ref-task-list">
            {tasks.map((task, index) => (
              <Link href={task.href} key={task.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{task.title}</h3><p>{task.text}</p></div>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-research-section" aria-labelledby="research-title">
        <div className="site-container">
          <div className="ref-section-heading ref-section-heading-row">
            <div>
              <p className="ref-kicker">From the research desk</p>
              <h2 id="research-title">What changed. What matters. What to watch.</h2>
            </div>
            <Link href="/insights" className="ref-text-link">
              All research
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {featured ? (
            <div className="ref-research-layout">
              <Link href={`/insights/${featured.slug}`} className="ref-research-feature">
                <span className="ref-research-feature-image">
                  <Image
                    src="/images/editorial/trading-research.jpg"
                    alt="Market data displayed across professional trading screens"
                    fill
                    sizes="(min-width: 960px) 65vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="ref-research-feature-copy">
                  <small>{featured.category} · {formatDate(featured.publishedAt)}</small>
                  <strong>{featured.title}</strong>
                  <p>{featured.excerpt}</p>
                  <em>Read the report <ArrowRight size={14} aria-hidden="true" /></em>
                </span>
              </Link>

              <aside className="ref-research-latest" aria-label="More recent research">
                <p>More from CGSI</p>
                {latest.map((item) => (
                  <Link href={`/insights/${item.slug}`} key={item.slug}>
                    <small>{formatDate(item.publishedAt)}</small>
                    <strong>{item.title}</strong>
                    <span>{item.readTime}</span>
                  </Link>
                ))}
                <Link href="/insights/guides" className="ref-research-guide-link">
                  Investor guides
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </aside>
            </div>
          ) : null}
        </div>
      </section>

      <section className="ref-support-section" aria-labelledby="support-title">
        <div className="site-container ref-support-grid">
          <figure>
            <Image
              src="/images/editorial/advisor-clients.jpg"
              alt="An adviser discussing financial documents with clients"
              fill
              sizes="(min-width: 960px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div>
            <p className="ref-kicker">Brokerage, not just a platform</p>
            <h2 id="support-title">When the order matters, know who you can call.</h2>
            <p className="ref-support-lead">
              CGSI keeps research, execution, and account support close enough that clients can move
              from a question to the right person without navigating a maze of products.
            </p>

            <div className="ref-support-points">
              {supportPoints.map(([title, text]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <Link href="/services" className="ref-text-link">
              Explore brokerage services
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ref-institutional-section" aria-labelledby="institutional-title">
        <div className="site-container ref-institutional-grid">
          <div>
            <p className="ref-kicker">Institutional clients</p>
            <h2 id="institutional-title">Local market access with clear operating ownership.</h2>
            <p>
              For corporations and professional investors, CGSI supports execution, research,
              Direct Market Access, settlement, custody, and account administration.
            </p>
            <div className="ref-institutional-actions">
              <Link href="/clients/institutions" className="ref-primary-button is-light">
                Institutional services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="ref-text-link is-light">Discuss a requirement</Link>
            </div>
          </div>

          <figure>
            <Image
              src="/images/editorial/institutional-team.jpg"
              alt="Institutional professionals discussing documents in a meeting"
              fill
              sizes="(min-width: 960px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="ref-learning-section" aria-labelledby="learning-title">
        <div className="site-container ref-learning-grid">
          <div className="ref-learning-copy">
            <p className="ref-kicker">New to investing?</p>
            <h2 id="learning-title">Learn the market before you make the trade.</h2>
            <p>
              Start with the mechanics: how an account works, what an order means, where risk enters,
              and how to read company and exchange information.
            </p>
            <Link href="/clients/new-investors" className="ref-text-link">
              Start the new investor path
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <figure>
            <Image
              src="/images/editorial/young-investors.jpg"
              alt="Young investors reviewing information together"
              fill
              sizes="(min-width: 960px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>

          <nav aria-label="Investor learning resources" className="ref-learning-links">
            <Link href="/insights/guides"><span>01</span><strong>Investor guides</strong><ArrowUpRight size={14} /></Link>
            <Link href="/insights/reading-pse-disclosures"><span>02</span><strong>Read PSE disclosures</strong><ArrowUpRight size={14} /></Link>
            <Link href="/tools/calculators"><span>03</span><strong>Investment calculator</strong><ArrowUpRight size={14} /></Link>
          </nav>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
