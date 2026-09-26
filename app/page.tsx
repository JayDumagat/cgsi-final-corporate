import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  FileText,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

import { CorporateHero } from "@/components/sections/corporate-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { HomeOrientation } from "@/components/sections/home-orientation";
import { ServiceCategoryTabs } from "@/components/sections/service-category-tabs";
import { Reveal } from "@/components/ui/motion-primitives";
import { marketAnnouncements, marketNews } from "@/content/market-content";
import { leadership } from "@/content/site-settings";
import { getPublishedInsights, getPublicSiteSettings } from "@/lib/content";

const audienceTiles = [
  {
    eyebrow: "Private clients",
    title: "Individuals & families",
    text: "Personal investing considered alongside family priorities, liquidity, and long-term goals.",
    href: "/clients/individuals-families",
    image: "/images/editorial/long-term-clients.jpg",
    imageAlt: "An older couple speaking together at home",
    size: "primary",
  },
  {
    eyebrow: "Corporate & institutional",
    title: "Institutions & corporations",
    text: "Local market access with clear operational ownership for defined mandates and professional requirements.",
    href: "/clients/institutions",
    image: "/images/editorial/institutional-team.jpg",
    imageAlt: "A team of professionals discussing documents in a meeting",
    size: "institutional",
  },
  {
    eyebrow: "Private clients",
    title: "OFWs & seafarers",
    text: "A dependable investing relationship across distance, schedules, and time zones.",
    href: "/clients/ofws-seafarers",
    image: "/images/editorial/seafarer-client.jpg",
    imageAlt: "Maritime professionals working on a ship deck",
    size: "compact",
  },
  {
    eyebrow: "Investor education",
    title: "New investors",
    text: "A considered first step into Philippine equities, with understanding before exposure.",
    href: "/clients/new-investors",
    image: "/images/editorial/young-investors.jpg",
    imageAlt: "A young couple reviewing documents with an adviser",
    size: "compact-wide",
  },
] as const;

const services = [
  {
    number: "01",
    title: "Broker-assisted trading",
    text: "Direct access to a professional who can clarify instructions and coordinate execution.",
    href: "/services/broker-assisted-trading",
  },
  {
    number: "02",
    title: "Advisory & execution",
    text: "Market context and disciplined order handling around a clearly defined client decision.",
    href: "/services/advisory-execution",
  },
  {
    number: "03",
    title: "Research & market intelligence",
    text: "Official disclosures and market information organized around decisions, not headlines.",
    href: "/services/research",
  },
  {
    number: "04",
    title: "Direct Market Access",
    text: "Controlled market access for eligible professional workflows and approved operating models.",
    href: "/services/direct-market-access",
  },
  {
    number: "05",
    title: "PERA",
    text: "A long-horizon retirement structure considered alongside liquidity, eligibility, and current rules.",
    href: "/services/pera",
  },
  {
    number: "06",
    title: "Settlement & custody",
    text: "Connected post-trade coordination, records, and account administration.",
    href: "/services/settlement-custody",
  },
] as const;

const serviceCategories = [
  {
    eyebrow: "Market access",
    title: "Access & execution",
    text: "Broker-assisted and approved digital access models for clients who need clear coordination around the trade.",
    href: "/services",
    image: "/images/editorial/trading-research.jpg",
    imageAlt: "A market professional reviewing information across several trading screens",
    items: [services[0], services[1], services[3]],
  },
  {
    eyebrow: "Research & intelligence",
    title: "Research for considered decisions",
    text: "Market context, research, and official information organized to support considered decisions.",
    href: "/services/research",
    image: "/images/editorial/research-meeting.jpg",
    imageAlt: "Professionals reviewing market research together",
    items: [services[2]],
  },
  {
    eyebrow: "Investment solutions",
    title: "Structures for different needs",
    text: "Account and investment structures shaped around client objectives, time horizon, and eligibility.",
    href: "/services",
    image: "/images/editorial/advisor-clients.jpg",
    imageAlt: "An adviser speaking with clients at a table",
    items: [services[4]],
  },
  {
    eyebrow: "Operations & support",
    title: "Support after the trade",
    text: "Settlement, custody, records, and post-trade administration with clear operational ownership.",
    href: "/services/settlement-custody",
    image: "/images/editorial/operations-team.jpg",
    imageAlt: "An operations team working together in an office",
    items: [services[5]],
  },
] as const;

const engagementSteps = [
  {
    number: "01",
    title: "Understand the need",
    text: "Start with the objective, mandate, question, or account requirement—not a product pitch.",
  },
  {
    number: "02",
    title: "Coordinate the work",
    text: "Move from research and discussion to clear instructions, execution, and accountable ownership.",
  },
  {
    number: "03",
    title: "Stay supported",
    text: "Keep records, research, settlement, and post-trade support connected to the relationship.",
  },
] as const;

const learningPaths = [
  {
    icon: BookOpenText,
    eyebrow: "Investor education",
    title: "Learn before you invest",
    text: "Plain-language guides that explain Philippine equities, risk, disclosures, and practical investing concepts.",
    href: "/insights/guides",
    link: "Browse investor guides",
  },
  {
    icon: Newspaper,
    eyebrow: "Research & commentary",
    title: "Follow the market with context",
    text: "Dated notes and analysis designed to separate source facts, interpretation, and uncertainty.",
    href: "/insights",
    link: "Visit the research desk",
  },
  {
    icon: FileText,
    eyebrow: "Official information",
    title: "Find market notices faster",
    text: "A clearer route to exchange announcements, company disclosures, and market-operation information.",
    href: "/market-announcements",
    link: "View announcements",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Investor protection",
    title: "Understand process and risk",
    text: "Account requirements, disclosures, governance, and support information are kept visible before action.",
    href: "/disclosures",
    link: "Review disclosures",
  },
] as const;

const leadershipHighlights = leadership.slice(0, 5);

const insightImages = [
  "/images/editorial/trading-research.jpg",
  "/images/editorial/market-office.jpg",
  "/images/editorial/research-meeting.jpg",
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

  const featuredInsight = insights[0];
  const supportingInsights = insights.slice(1, 3);

  return (
    <>
      <CorporateHero />
      <HomeOrientation />

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-visual">
          <Image
            src="/images/editorial/cgsi-professionals.jpg"
            alt="Professionals reviewing documents together in an office"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="home-about-copy">
          <Reveal animate>
            <p className="section-label">About CGSI</p>
            <h2 id="home-about-title">Institutional discipline. Human accountability.</h2>
            <p className="home-about-lead">
              Caballes-Go Securities, Inc. is a Philippine broker-dealer for clients who value
              professional market access and a relationship they can work with directly.
            </p>
            <p>
              The experience is designed around clear ownership: understand the requirement,
              communicate the decision, execute responsibly, and stay connected through
              post-trade support.
            </p>
            <div className="home-about-credentials" aria-label="CGSI profile">
              <div>
                <strong>Licensed broker-dealer</strong>
                <span>Philippine capital-market participation</span>
              </div>
              <div>
                <strong>PSE Trading Participant</strong>
                <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
                  View participant record <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div>
                <strong>Different investor needs</strong>
                <span>Individuals, families, corporations, and institutions</span>
              </div>
            </div>
            <div className="home-about-actions">
              <Link href="/about" className="btn btn-secondary">
                Our company
              </Link>
              <Link href="/governance" className="text-link">
                Governance & oversight <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-expertise" aria-labelledby="home-services-title">
        <div className="site-container home-services-shell">
          <div className="home-services-heading">
            <div>
              <p className="section-label">Our expertise</p>
              <h2 id="home-services-title">Support around the full investment workflow.</h2>
            </div>
            <div className="home-services-summary">
              <p>
                From market access and research to execution and post-trade coordination, CGSI
                brings relevant services together without hiding who owns the next step.
              </p>
              <Link href="/services" className="text-link">
                Explore all services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ServiceCategoryTabs categories={serviceCategories} />
        </div>
      </section>

      <section className="home-audiences" aria-labelledby="home-audiences-title">
        <div className="site-container">
          <div className="home-audiences-heading">
            <p className="section-label">Who we serve</p>
            <h2 id="home-audiences-title">Different investors need different levels of support.</h2>
            <p>
              The site keeps beginner guidance, private-client pathways, and professional
              institutional information distinct so visitors can scan what is relevant to them.
            </p>
          </div>
          <div className="home-audience-bento">
            {audienceTiles.map((tile, index) => (
              <Reveal
                animate
                delay={index * 0.035}
                className={`audience-tile audience-tile-${tile.size}`}
                key={tile.href}
              >
                <Link href={tile.href}>
                  <span className="audience-tile-media">
                    <Image
                      src={tile.image}
                      alt={tile.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="audience-tile-copy">
                    <span className="audience-tile-eyebrow">{tile.eyebrow}</span>
                    <strong>{tile.title}</strong>
                    <small>{tile.text}</small>
                    <em>
                      Explore this pathway <span aria-hidden="true">→</span>
                    </em>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-learning" aria-labelledby="home-learning-title">
        <div className="site-container">
          <div className="home-learning-heading">
            <div>
              <p className="section-label">Knowledge & community</p>
              <h2 id="home-learning-title">A brokerage website should help people understand, not just transact.</h2>
            </div>
            <p>
              CGSI can participate more actively in the investing community by keeping education,
              dated research, market information, tools, and investor-protection resources easy
              to discover from one consistent system.
            </p>
          </div>
          <div className="home-learning-grid">
            {learningPaths.map((item) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} className="home-learning-card" key={item.href}>
                  <Icon aria-hidden="true" />
                  <p>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                  <strong>
                    {item.link} <ArrowRight size={15} aria-hidden="true" />
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-research" aria-labelledby="home-research-title">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="section-label">Research & insights</p>
              <h2 id="home-research-title">Context for considered decisions.</h2>
            </div>
            <Link href="/insights" className="text-link">
              Visit the research desk <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {featuredInsight ? (
            <div className="research-editorial-grid">
              <Reveal animate className="research-feature">
                <Link href={`/insights/${featuredInsight.slug}`}>
                  <span className="research-feature-media">
                    <Image
                      src={insightImages[0]}
                      alt="A professional market workstation with financial information"
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="research-feature-copy">
                    <span>
                      {featuredInsight.category} · {formatDate(featuredInsight.publishedAt)}
                    </span>
                    <strong>{featuredInsight.title}</strong>
                    <small>{featuredInsight.excerpt}</small>
                    <em>Read {featuredInsight.readTime} →</em>
                  </span>
                </Link>
              </Reveal>
              <div className="research-supporting">
                {supportingInsights.map((insight, index) => (
                  <Reveal animate delay={index * 0.04} key={insight.slug}>
                    <Link href={`/insights/${insight.slug}`}>
                      <span className="research-supporting-media">
                        <Image
                          src={insightImages[index + 1]}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 18vw, 36vw"
                          className="object-cover"
                        />
                      </span>
                      <span>
                        <small>
                          {insight.category} · {formatDate(insight.publishedAt)}
                        </small>
                        <strong>{insight.title}</strong>
                        <em>{insight.readTime} →</em>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="home-engagement" aria-labelledby="home-engagement-title">
        <div className="site-container home-engagement-grid">
          <Reveal animate className="home-engagement-heading">
            <p className="section-label">How clients engage</p>
            <h2 id="home-engagement-title">A relationship that continues beyond the order.</h2>
            <p>
              CGSI connects the conversation, execution, records, and post-trade work in one
              considered client relationship.
            </p>
            <Link href="/contact" className="text-link">
              Speak with CGSI <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="engagement-list">
            {engagementSteps.map((step, index) => (
              <Reveal animate delay={index * 0.035} key={step.number}>
                <div>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <small>{step.text}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-leadership" aria-labelledby="home-leadership-title">
        <div className="site-container">
          <Reveal animate className="home-leadership-heading">
            <p className="section-label">Leadership & governance</p>
            <h2 id="home-leadership-title">Accountability should be visible.</h2>
            <p>
              Board, executive, governance, and risk information remain easy to find for both
              private clients and professional counterparties.
            </p>
            <Link href="/about/team" className="text-link">
              Meet the leadership team <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="leadership-directory">
            {leadershipHighlights.map((person, index) => (
              <Reveal
                animate
                className="leadership-profile-card"
                delay={index * 0.035}
                key={person.name}
              >
                <article>
                  <div className="leadership-profile-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{person.name}</h3>
                    <p className="leadership-profile-role">{person.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal animate className="leadership-governance-card">
              <p>Board and governance</p>
              <Link href="/governance">
                Review CGSI&apos;s oversight framework <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-news" aria-labelledby="home-news-title">
        <div className="site-container home-news-grid">
          <div>
            <div className="section-heading-row section-heading-row-compact">
              <div>
                <p className="section-label">Market news & notices</p>
                <h2 id="home-news-title">Useful updates, clearly dated.</h2>
              </div>
              <Link href="/market-news" className="text-link">
                View market news <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="news-list">
              {marketNews.slice(0, 4).map((item) =>
                item.sourceHref.startsWith("http") ? (
                  <a key={item.title} href={item.sourceHref} target="_blank" rel="noreferrer">
                    <span>
                      <time>{item.date}</time>
                      <small>{item.category}</small>
                    </span>
                    <strong>{item.title}</strong>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link key={item.title} href={item.sourceHref}>
                    <span>
                      <time>{item.date}</time>
                      <small>{item.category}</small>
                    </span>
                    <strong>{item.title}</strong>
                    <span aria-hidden="true">→</span>
                  </Link>
                ),
              )}
            </div>
          </div>
          <aside className="pressroom-card">
            <div className="pressroom-image">
              <Image
                src="/images/editorial/makati-aerial.jpg"
                alt="Metro Manila seen from above"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p>Official information</p>
              <h2>Company facts, disclosures, and market announcements.</h2>
              <span>
                Corporate releases are kept distinct from market reporting so visitors can
                understand the source and purpose of each update.
              </span>
              <Link href="/about/pressroom">Visit the pressroom →</Link>
              <Link href="/market-announcements">
                Browse {marketAnnouncements.length} announcement sources →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
