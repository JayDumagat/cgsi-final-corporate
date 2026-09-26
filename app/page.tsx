import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChartNoAxesColumnIncreasing,
  CircleHelp,
} from "lucide-react";

import { CorporateHero } from "@/components/sections/corporate-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { getPublishedInsights } from "@/lib/content";

const services = [
  {
    title: "Trading & execution",
    text: "Broker-assisted execution and market access with a clear human point of contact.",
    href: "/services/broker-assisted-trading",
  },
  {
    title: "Research & intelligence",
    text: "Market notes, company disclosures, and investor context organized for better decisions.",
    href: "/services/research",
  },
  {
    title: "Settlement & custody",
    text: "Post-trade coordination, records, and account administration with defined ownership.",
    href: "/services/settlement-custody",
  },
] as const;

const pathways = [
  {
    icon: BookOpen,
    title: "New to investing",
    text: "Start with clear explanations of equities, risk, accounts, and how the market works.",
    href: "/clients/new-investors",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Experienced investors",
    text: "Go directly to research, execution services, tools, and market information.",
    href: "/insights",
  },
  {
    icon: Building2,
    title: "Institutions & corporations",
    text: "Explore professional market access, execution, custody, and mandate support.",
    href: "/clients/institutions",
  },
  {
    icon: CircleHelp,
    title: "Existing clients",
    text: "Find forms, account resources, help, and service channels quickly.",
    href: "/resources",
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
  const secondary = insights.slice(1, 3);

  return (
    <>
      <CorporateHero />

      <section className="airy-intro" aria-labelledby="airy-intro-title">
        <div className="site-container airy-intro-grid">
          <div>
            <p className="airy-eyebrow">A traditional broker, moving forward</p>
            <h2 id="airy-intro-title">Professional where it matters. Approachable where it helps.</h2>
          </div>
          <div className="airy-intro-copy">
            <p>
              CGSI combines the discipline expected from a broker-dealer with a more useful digital
              experience: clear explanations, accessible research, practical resources, and direct
              routes to the people and services clients need.
            </p>
            <Link href="/about">
              Learn about CGSI
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="airy-services" aria-labelledby="airy-services-title">
        <div className="site-container airy-services-grid">
          <div className="airy-services-heading">
            <p className="airy-eyebrow">What we do</p>
            <h2 id="airy-services-title">Market access supported by research and accountable service.</h2>
            <Link href="/services">
              View all services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="airy-service-list">
            {services.map((service, index) => (
              <Link href={service.href} key={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="airy-research" aria-labelledby="airy-research-title">
        <div className="site-container airy-research-grid">
          <div className="airy-research-media">
            <Image
              src="/images/editorial/research-meeting.jpg"
              alt="Professionals discussing market research"
              fill
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="airy-research-copy">
            <p className="airy-eyebrow">Research & community</p>
            <h2 id="airy-research-title">Useful market knowledge should be easy to find.</h2>
            <p>
              Research, investor education, market notices, and practical tools are part of the
              relationship—not extras hidden several levels deep.
            </p>

            {featured ? (
              <Link href={`/insights/${featured.slug}`} className="airy-featured-insight">
                <span>{formatDate(featured.publishedAt)}</span>
                <strong>{featured.title}</strong>
                <small>{featured.excerpt}</small>
                <em>
                  Read insight
                  <ArrowRight size={15} aria-hidden="true" />
                </em>
              </Link>
            ) : null}

            <div className="airy-research-links">
              <Link href="/insights/guides">Investor guides</Link>
              <Link href="/market-announcements">Market announcements</Link>
              <Link href="/tools">Investor tools</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="airy-pathways" aria-labelledby="airy-pathways-title">
        <div className="site-container">
          <div className="airy-pathways-heading">
            <p className="airy-eyebrow">Find what matters to you</p>
            <h2 id="airy-pathways-title">Different investors should not have to navigate the same way.</h2>
          </div>

          <div className="airy-pathway-grid">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <Link href={pathway.href} key={pathway.href}>
                  <Icon aria-hidden="true" />
                  <h3>{pathway.title}</h3>
                  <p>{pathway.text}</p>
                  <span>
                    Explore
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="airy-latest" aria-labelledby="airy-latest-title">
        <div className="site-container airy-latest-grid">
          <div className="airy-latest-heading">
            <p className="airy-eyebrow">Latest from CGSI</p>
            <h2 id="airy-latest-title">Research that respects your time.</h2>
            <p>
              Dated, scannable, and written to help readers understand what changed and why it
              matters.
            </p>
            <Link href="/insights">
              Browse all insights
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="airy-latest-list">
            {secondary.map((insight) => (
              <Link href={`/insights/${insight.slug}`} key={insight.slug}>
                <span>{formatDate(insight.publishedAt)}</span>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
