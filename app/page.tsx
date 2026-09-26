import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CorporateHero } from "@/components/sections/corporate-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { getPublishedInsights, getPublicSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Philippine Equity Brokerage",
  description:
    "Caballes-Go Securities provides Philippine equity market access, research, execution, and post-trade support for retail and institutional clients.",
};

const startingPoints = [
  {
    label: "New to investing",
    title: "Build your understanding first.",
    text: "Learn how Philippine equities work, what risk means, and how to prepare before opening an account.",
    href: "/clients/new-investors",
    link: "Start here",
  },
  {
    label: "Individual investors",
    title: "Invest around real-life priorities.",
    text: "Explore a brokerage relationship designed around liquidity, long-term goals, and direct human support.",
    href: "/clients/individuals-families",
    link: "Explore private client support",
  },
  {
    label: "Institutions & corporations",
    title: "Local market access for professional mandates.",
    text: "Review execution, research, settlement, and operating support for corporate and institutional requirements.",
    href: "/clients/institutions",
    link: "Explore institutional services",
  },
  {
    label: "Existing clients",
    title: "Find forms and support quickly.",
    text: "Go directly to account resources, support information, and the secure client portal.",
    href: "/resources",
    link: "Client resources",
  },
] as const;

const serviceRows = [
  {
    title: "Trading & execution",
    text: "Broker-assisted trading, advisory, and professional execution support.",
    href: "/services/broker-assisted-trading",
  },
  {
    title: "Research & market intelligence",
    text: "Market notes, issuer information, and decision-focused research.",
    href: "/services/research",
  },
  {
    title: "Settlement & account support",
    text: "Post-trade coordination, custody, records, and ongoing account administration.",
    href: "/services/settlement-custody",
  },
] as const;

const resourceLinks = [
  ["Investor guides", "/insights/guides"],
  ["Research library", "/insights/library"],
  ["Market notes", "/insights/market-notes"],
  ["Market announcements", "/market-announcements"],
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
  const supporting = insights.slice(1, 3);

  return (
    <>
      <CorporateHero />

      <section className="clean-start" aria-labelledby="start-title">
        <div className="site-container">
          <div className="clean-section-heading clean-section-heading-wide">
            <p className="clean-eyebrow">Start where you are</p>
            <h2 id="start-title">A clearer path into the market.</h2>
            <p>
              The site is organized around what you need to do—not around how much financial
              terminology you already know.
            </p>
          </div>

          <div className="clean-start-list">
            {startingPoints.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <strong>
                  {item.link}
                  <ArrowRight size={16} aria-hidden="true" />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-services-home" aria-labelledby="services-title">
        <div className="site-container clean-services-home-grid">
          <div className="clean-services-home-intro">
            <p className="clean-eyebrow">What we do</p>
            <h2 id="services-title">Support around the investment decision.</h2>
            <p>
              CGSI combines market access, research, execution, and post-trade support in one
              professional brokerage relationship.
            </p>
            <Link href="/services" className="clean-text-link">
              View all expertise
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="clean-service-rows">
            {serviceRows.map((service, index) => (
              <Link href={service.href} key={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div className="site-container clean-wide-image">
          <Image
            src="/images/editorial/cgsi-professionals.jpg"
            alt="Financial professionals reviewing information together in an office"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="clean-research-home" aria-labelledby="research-title">
        <div className="site-container">
          <div className="clean-section-heading clean-research-heading">
            <div>
              <p className="clean-eyebrow">Research & learning</p>
              <h2 id="research-title">Make the market easier to understand.</h2>
            </div>
            <p>
              Research, investor education, and official market information should help people
              make better-informed decisions—not add more noise.
            </p>
          </div>

          {featured ? (
            <div className="clean-research-grid">
              <Link href={`/insights/${featured.slug}`} className="clean-research-feature">
                <span className="clean-research-image">
                  <Image
                    src="/images/editorial/trading-research.jpg"
                    alt="Financial market information on professional trading screens"
                    fill
                    sizes="(min-width: 900px) 58vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="clean-research-copy">
                  <small>{featured.category} · {formatDate(featured.publishedAt)}</small>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <strong>Read the insight <ArrowRight size={15} aria-hidden="true" /></strong>
                </span>
              </Link>

              <aside className="clean-research-side">
                {supporting.map((item) => (
                  <Link href={`/insights/${item.slug}`} key={item.slug}>
                    <small>{item.category} · {formatDate(item.publishedAt)}</small>
                    <h3>{item.title}</h3>
                    <span>{item.readTime}</span>
                  </Link>
                ))}

                <nav aria-label="Research resources">
                  {resourceLinks.map(([label, href]) => (
                    <Link href={href} key={href}>
                      {label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
              </aside>
            </div>
          ) : null}
        </div>
      </section>

      <section className="clean-audience-home" aria-labelledby="audience-title">
        <div className="site-container">
          <div className="clean-section-heading clean-section-heading-wide">
            <p className="clean-eyebrow">For different kinds of investors</p>
            <h2 id="audience-title">Personal when it should be. Institutional when it needs to be.</h2>
          </div>

          <div className="clean-audience-split">
            <article>
              <p>Private clients</p>
              <h3>Direct support for individual investors and families.</h3>
              <span>
                From first-time investors to experienced private clients, the relationship starts
                with context, not a product list.
              </span>
              <Link href="/clients">
                Explore private client pathways
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
            <article>
              <p>Professional clients</p>
              <h3>Execution and operating support for institutions and corporations.</h3>
              <span>
                Clear authorities, communication, execution, settlement, and reporting around
                defined professional requirements.
              </span>
              <Link href="/clients/institutions">
                Institutional services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="clean-proof" aria-labelledby="proof-title">
        <div className="site-container clean-proof-grid">
          <div>
            <p className="clean-eyebrow">Institutional foundation</p>
            <h2 id="proof-title">Modern service, grounded in market discipline.</h2>
            <p>
              CGSI is an active corporate Trading Participant of the Philippine Stock Exchange
              serving retail and institutional clients.
            </p>
            <div className="clean-proof-actions">
              <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer" className="clean-text-link">
                PSE participant record
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <Link href="/about" className="clean-text-link">
                About CGSI
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <dl className="clean-proof-list">
            <div>
              <dt>PSE status</dt>
              <dd>Active Trading Participant</dd>
            </div>
            <div>
              <dt>License type</dt>
              <dd>Broker-Dealer</dd>
            </div>
            <div>
              <dt>Client service</dt>
              <dd>Retail & Institutional</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>Publications available</dd>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
