import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CorporateHero } from "@/components/sections/corporate-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { getPublishedInsights } from "@/lib/content";

const services = [
  {
    title: "Trading & execution",
    text: "Broker-assisted execution and market access with a direct point of contact.",
    href: "/services/broker-assisted-trading",
  },
  {
    title: "Research & intelligence",
    text: "Market context, issuer information, and decision-focused research.",
    href: "/services/research",
  },
  {
    title: "Settlement & custody",
    text: "Post-trade coordination, records, and account administration.",
    href: "/services/settlement-custody",
  },
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
  const insights = await getPublishedInsights();
  const featured = insights[0];
  const latest = insights.slice(1, 3);

  return (
    <>
      <CorporateHero />

      <section className="airy-services" aria-labelledby="services-title">
        <div className="site-container airy-services-grid">
          <div className="airy-services-heading">
            <p className="airy-eyebrow">What we do</p>
            <h2 id="services-title">One brokerage relationship, from research to settlement.</h2>
            <p>
              Choose the level of support you need. The detail is available when you want it,
              without putting every service in your way at once.
            </p>
            <Link href="/services">
              View all services
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="airy-service-list">
            {services.map((service, index) => (
              <Link href={service.href} key={service.href}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <figure className="site-container airy-service-image">
          <Image
            src="/images/editorial/operations-team.jpg"
            alt="Professionals collaborating in a modern office"
            fill
            sizes="(min-width: 960px) 1180px, 100vw"
            className="object-cover"
          />
          <figcaption>Research, execution, and operations working as one client experience.</figcaption>
        </figure>
      </section>

      <section className="airy-research" aria-labelledby="research-title">
        <div className="site-container airy-research-grid">
          <figure className="airy-research-media">
            <Image
              src="/images/editorial/research-meeting.jpg"
              alt="Professionals reviewing market research around a table"
              fill
              sizes="(min-width: 960px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="airy-research-copy">
            <p className="airy-eyebrow">Research & learning</p>
            <h2 id="research-title">Useful context, without the noise.</h2>
            <p>
              CGSI publishes market research and practical investor education so clients can move
              from information to a better-informed decision.
            </p>

            {featured ? (
              <Link href={`/insights/${featured.slug}`} className="airy-featured-insight">
                <span>{formatDate(featured.publishedAt)} · {featured.category}</span>
                <strong>{featured.title}</strong>
                <small>{featured.excerpt}</small>
                <em>
                  Read insight
                  <ArrowRight size={14} aria-hidden="true" />
                </em>
              </Link>
            ) : null}

            <nav className="airy-research-links" aria-label="Research resources">
              <Link href="/insights/guides">Investor guides</Link>
              <Link href="/insights/library">Research library</Link>
              <Link href="/market-announcements">Market announcements</Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="airy-clients" aria-labelledby="clients-title">
        <div className="site-container airy-clients-heading">
          <div>
            <p className="airy-eyebrow">Who we serve</p>
            <h2 id="clients-title">Different clients. Different starting points.</h2>
          </div>
          <p>
            New investors can start with plain-language guidance. Experienced individuals and
            professional institutions can move directly to the depth they need.
          </p>
        </div>

        <div className="site-container airy-client-stories">
          <article>
            <figure>
              <Image
                src="/images/editorial/long-term-clients.jpg"
                alt="Clients discussing long-term financial plans"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div>
              <p>Individuals & families</p>
              <h3>A direct relationship for personal investing decisions.</h3>
              <span>
                Support for first-time investors, experienced private clients, families, OFWs,
                and seafarers.
              </span>
              <div>
                <Link href="/clients/individuals-families">
                  Private clients <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link href="/clients/new-investors">New investor guide</Link>
              </div>
            </div>
          </article>

          <article>
            <figure>
              <Image
                src="/images/editorial/institutional-team.jpg"
                alt="Institutional professionals discussing documents in a meeting"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div>
              <p>Institutions & corporations</p>
              <h3>Local execution and operating support for defined mandates.</h3>
              <span>
                Market access, research, settlement, custody, and direct coordination for
                professional requirements.
              </span>
              <Link href="/clients/institutions">
                Institutional services <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="airy-latest" aria-labelledby="latest-title">
        <div className="site-container airy-latest-grid">
          <div className="airy-latest-heading">
            <p className="airy-eyebrow">Latest insights</p>
            <h2 id="latest-title">What changed, and why it matters.</h2>
            <p>
              Recent research is kept short enough to scan and dated clearly so readers know the
              context they are looking at.
            </p>
            <Link href="/insights">
              Browse all insights
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="airy-latest-list">
            {latest.map((insight) => (
              <Link href={`/insights/${insight.slug}`} key={insight.slug}>
                <span>{formatDate(insight.publishedAt)}</span>
                <div>
                  <h3>{insight.title}</h3>
                  <p>{insight.excerpt}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
