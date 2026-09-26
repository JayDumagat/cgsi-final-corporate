import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenText, Building2, CircleUserRound, Compass } from "lucide-react";

import { getPublishedInsights, getPublicSiteSettings } from "@/lib/content";

const intents = [
  {
    icon: Compass,
    label: "I’m new to investing",
    text: "Understand the basics, risks, and account process before you make a move.",
    href: "/clients/new-investors",
  },
  {
    icon: CircleUserRound,
    label: "I already invest",
    text: "Go straight to market research, execution services, and practical investor tools.",
    href: "/insights",
  },
  {
    icon: Building2,
    label: "I represent an institution",
    text: "Explore execution, research, custody, and operating support for professional mandates.",
    href: "/clients/institutions",
  },
  {
    icon: BookOpenText,
    label: "I’m an existing client",
    text: "Find forms, support channels, and account resources without searching through the site.",
    href: "/resources",
  },
] as const;

const services = [
  {
    title: "Trading & execution",
    text: "Broker-assisted execution with a direct point of contact for orders and market access.",
    href: "/services/broker-assisted-trading",
  },
  {
    title: "Research & market intelligence",
    text: "Market context, issuer information, and research designed to support investment decisions.",
    href: "/services/research",
  },
  {
    title: "Settlement & custody",
    text: "Post-trade coordination, records, and account administration handled with clear ownership.",
    href: "/services/settlement-custody",
  },
] as const;

const resources = [
  {
    image: "/images/editorial/young-investors.jpg",
    alt: "Young investors discussing financial information",
    eyebrow: "Start here",
    title: "Investor guides",
    text: "Plain-language explanations for people learning how Philippine equities work.",
    href: "/insights/guides",
  },
  {
    image: "/images/editorial/trading-research.jpg",
    alt: "Professional trading screens showing market information",
    eyebrow: "Stay informed",
    title: "Research library",
    text: "Dated market notes, commentary, and source-based analysis in one place.",
    href: "/insights/library",
  },
  {
    image: "/images/editorial/market-office.jpg",
    alt: "Market information displayed in a professional office",
    eyebrow: "Check the source",
    title: "Market announcements",
    text: "Exchange and market-operation notices organized separately from editorial commentary.",
    href: "/market-announcements",
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
  const [insights, settings] = await Promise.all([
    getPublishedInsights(),
    getPublicSiteSettings(),
  ]);

  const featured = insights[0];
  const latest = insights.slice(1, 3);

  return (
    <>
      <section className="rl-hero" aria-labelledby="home-title">
        <div className="site-container rl-hero-grid">
          <div className="rl-hero-copy">
            <p className="rl-kicker">Philippine equity brokerage</p>
            <h1 id="home-title">A clearer way into the Philippine market.</h1>
            <p className="rl-hero-lead">
              Research, execution, and client support from a licensed broker-dealer serving both
              individual and institutional investors.
            </p>
            <div className="rl-hero-actions">
              <Link href="/open-account" className="rl-primary-button">
                Open an account
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="rl-secondary-button">
                Talk to CGSI
              </Link>
            </div>
          </div>

          <figure className="rl-hero-media">
            <Image
              src="/images/editorial/makati-skyline.jpg"
              alt="Makati skyline representing the Philippine business and capital market"
              fill
              priority
              sizes="(min-width: 960px) 52vw, 100vw"
              className="object-cover"
            />
            <figcaption>
              Philippine equities
              <span>Market access with direct human support</span>
            </figcaption>
          </figure>
        </div>

        <div className="site-container rl-proofbar" aria-label="CGSI credentials">
          <div>
            <span>Market status</span>
            <strong>Active PSE Trading Participant</strong>
          </div>
          <div>
            <span>License</span>
            <strong>Broker-Dealer</strong>
          </div>
          <div>
            <span>Client coverage</span>
            <strong>Retail & Institutional</strong>
          </div>
          <div>
            <span>Research</span>
            <strong>Publications available</strong>
          </div>
        </div>
      </section>

      <section className="rl-intent" aria-labelledby="intent-title">
        <div className="site-container">
          <div className="rl-section-heading">
            <p className="rl-kicker">What brings you here?</p>
            <h2 id="intent-title">Start from your situation, not our org chart.</h2>
            <p>
              Choose the path that matches what you need today. You can always go deeper later.
            </p>
          </div>

          <div className="rl-intent-grid">
            {intents.map((item) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} key={item.href}>
                  <Icon aria-hidden="true" />
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                  <span>
                    Continue
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rl-research" aria-labelledby="research-title">
        <div className="site-container rl-research-grid">
          <div className="rl-research-copy">
            <p className="rl-kicker">Research spotlight</p>
            <h2 id="research-title">See the market with context, not just headlines.</h2>
            <p>
              CGSI separates dated research, education, and official market information so readers
              can understand what they are looking at and why it matters.
            </p>

            {featured ? (
              <Link href={`/insights/${featured.slug}`} className="rl-featured-story">
                <span>{formatDate(featured.publishedAt)} · {featured.category}</span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <strong>
                  Read the latest insight
                  <ArrowRight size={15} aria-hidden="true" />
                </strong>
              </Link>
            ) : null}

            <div className="rl-research-actions">
              <Link href="/insights">View all insights</Link>
              <Link href="/insights/guides">Investor education</Link>
            </div>
          </div>

          <figure className="rl-research-media">
            <Image
              src="/images/editorial/research-meeting.jpg"
              alt="Research professionals reviewing market information together"
              fill
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-services" aria-labelledby="services-title">
        <div className="site-container rl-services-head">
          <div>
            <p className="rl-kicker">Core services</p>
            <h2 id="services-title">From the order to the settlement, keep the relationship connected.</h2>
          </div>
          <p>
            You do not need six product cards to understand the model. CGSI’s role is straightforward:
            help you access the market, support the decision, and stay accountable after the trade.
          </p>
        </div>

        <div className="site-container rl-services-layout">
          <figure>
            <Image
              src="/images/editorial/operations-team.jpg"
              alt="Brokerage operations team working together"
              fill
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="rl-service-list">
            {services.map((service, index) => (
              <Link href={service.href} key={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-clients" aria-labelledby="clients-title">
        <div className="site-container rl-clients-grid">
          <figure>
            <Image
              src="/images/editorial/advisor-clients.jpg"
              alt="An adviser reviewing financial information with clients"
              fill
              sizes="(min-width: 960px) 44vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="rl-clients-copy">
            <p className="rl-kicker">Private clients</p>
            <h2 id="clients-title">Support that meets you at your level of experience.</h2>
            <p>
              First-time investors should not be forced to understand brokerage terminology before
              they can get help. Experienced clients should not have to wade through beginner copy
              to reach research and execution.
            </p>
            <div>
              <Link href="/clients/new-investors">
                New investor path
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/clients/individuals-families">
                Individuals & families
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="site-container rl-institutional-row">
          <div>
            <p className="rl-kicker">Institutions & corporations</p>
            <h3>Need a professional mandate conversation instead?</h3>
            <p>Go directly to execution, settlement, research, and operating support for institutional requirements.</p>
          </div>
          <Link href="/clients/institutions">
            Explore institutional services
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="rl-resources" aria-labelledby="resources-title">
        <div className="site-container rl-resources-head">
          <div>
            <p className="rl-kicker">Learn, research, verify</p>
            <h2 id="resources-title">Useful resources should be easy to recognize.</h2>
          </div>
          <Link href="/insights">
            Explore all research
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="site-container rl-resource-grid">
          {resources.map((item) => (
            <Link href={item.href} key={item.href}>
              <figure>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 960px) 33vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
                <strong>
                  Explore
                  <ArrowUpRight size={14} aria-hidden="true" />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rl-latest" aria-labelledby="latest-title">
        <div className="site-container rl-latest-grid">
          <div>
            <p className="rl-kicker">Latest from CGSI</p>
            <h2 id="latest-title">Recent research, clearly dated.</h2>
            <p>Know when something was published before you decide how much weight to give it.</p>
          </div>

          <div className="rl-latest-list">
            {latest.map((insight) => (
              <Link href={`/insights/${insight.slug}`} key={insight.slug}>
                <span>{formatDate(insight.publishedAt)}</span>
                <h3>{insight.title}</h3>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-final" aria-labelledby="final-title">
        <div className="site-container rl-final-grid">
          <div>
            <p className="rl-kicker">Next step</p>
            <h2 id="final-title">Ready to open an account?</h2>
            <p>Review the requirements first. If anything is unclear, contact CGSI before you submit.</p>
          </div>
          <div>
            <Link href="/open-account" className="rl-primary-button">
              View account requirements
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="rl-secondary-button">Contact CGSI</Link>
          </div>
        </div>
      </section>

      <section className="rl-disclosure" aria-label="Important information">
        <div className="site-container">
          <p>
            Caballes-Go Securities, Inc. is listed by the Philippine Stock Exchange as an active
            corporate Trading Participant serving retail and institutional clients. Securities
            investments involve risk, including possible loss of principal.
          </p>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            View PSE participant record
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
