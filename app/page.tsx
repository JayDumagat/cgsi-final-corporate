import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { ServiceCategoryTabs } from "@/components/sections/service-category-tabs";
import { Reveal } from "@/components/ui/motion-primitives";
import { CorporateHero } from "@/components/sections/corporate-hero";
import { marketAnnouncements, marketNews } from "@/content/market-content";
import { leadership, marketSnapshot } from "@/content/site-settings";
import { getPublishedInsights, getPublicSiteSettings } from "@/lib/content";

const quickActions = [
  {
    label: "Open an account",
    detail: "Requirements and next steps",
    href: "/open-account",
  },
  {
    label: "Speak with CGSI",
    detail: "Client and mandate enquiries",
    href: "/contact",
  },
  {
    label: "Read market insights",
    detail: "Research notes and investor guides",
    href: "/insights",
  },
] as const;

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
    eyebrow: "Private clients",
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

const serviceGroups = [
  {
    title: "Trading & intelligence",
    items: services.slice(0, 3),
  },
  {
    title: "Operations & access",
    items: services.slice(3),
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
    title: "Clarify the decision",
    text: "Bring the mandate, question, or investment objective into a clear conversation.",
  },
  {
    number: "02",
    title: "Coordinate execution",
    text: "Translate agreed instructions into an accountable process around the trade.",
  },
  {
    number: "03",
    title: "Stay informed after the trade",
    text: "Keep research, records, and post-trade support connected to the relationship.",
  },
] as const;

const leadershipHighlights = [
  {
    ...leadership[0],
    focus: "Board stewardship",
    background:
      "Board oversight, long-term stewardship, and governance responsibility.",
  },
  {
    ...leadership[1],
    focus: "Executive direction",
    background:
      "Executive direction, corporate priorities, and the client relationship.",
  },
  {
    ...leadership[2],
    focus: "Operating discipline",
    background:
      "Operations, service delivery, and post-trade accountability.",
  },
  {
    ...leadership[3],
    focus: "Independent oversight",
    background:
      "Independent perspective, board challenge, and governance oversight.",
  },
  {
    ...leadership[4],
    focus: "Independent oversight",
    background:
      "Independent perspective, board challenge, and governance oversight.",
  },
] as const;

const insightImages = [
  "/images/editorial/trading-research.jpg",
  "/images/editorial/market-office.jpg",
  "/images/editorial/research-meeting.jpg",
] as const;

const investorResources = [
  {
    eyebrow: "Investor education",
    title: "Build your understanding before your exposure.",
    text: "Practical guides to Philippine equities, risk, portfolio purpose, and official information sources.",
    href: "/insights/guides",
    link: "Browse investor guides",
  },
  {
    eyebrow: "Corporate information",
    title: "Governance and disclosures in one place.",
    text: "Review company information, market-participant references, policies, and material disclosures.",
    href: "/investor-relations",
    link: "Investor relations",
  },
  {
    eyebrow: "Client support",
    title: "Know the process before you begin.",
    text: "Understand account-opening steps, documentation, support channels, and common questions.",
    href: "/help",
    link: "Visit the help center",
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
  const featuredInsight = insights[0];
  const supportingInsights = insights.slice(1, 3);

  return (
    <>
      <CorporateHero />

      {/* Temporarily hidden while the homepage flow is being refined. */}
      {false && (
      <nav className="quick-actions" aria-label="Quick actions">
        <div className="site-container quick-actions-grid">
          {quickActions.map((item) => (
            <Link href={item.href} key={item.href}>
              <span>
                <strong>{item.label}</strong>
                <small>{item.detail}</small>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
            <span>
              <strong>Client portal</strong>
              <small>Secure account access</small>
            </span>
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </nav>
      )}

      <section className="home-about">
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
            <h2>Institutional capability. Human accountability.</h2>
            <p className="home-about-lead">
              Caballes-Go Securities, Inc. is a Philippine broker-dealer built
              for clients who value professional market access and a relationship
              they can work with directly.
            </p>
            <p>
              Behind each mandate is a team responsible for understanding the
              requirement, coordinating the work, and keeping communication clear
              from the first conversation through post-trade support.
            </p>
            <div className="home-about-credentials" aria-label="CGSI profile">
              <div>
                <strong>Licensed broker-dealer</strong>
                <span>Caballes-Go Securities, Inc.</span>
              </div>
              <div>
                <strong>PSE Trading Participant</strong>
                <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
                  View participant record <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
              <div>
                <strong>Different mandates</strong>
                <span>Individuals, families, corporations, and institutions</span>
              </div>
            </div>
            <div className="home-about-actions">
              <Link href="/about" className="btn btn-secondary">
                Our company
              </Link>
              <Link href="/governance" className="home-about-text-link">
                Governance & oversight -&gt;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-expertise">
        <div className="site-container home-services-shell">
          <div className="home-services-heading">
            <div>
              <p className="section-label">Our services</p>
              <h2>The right support around every investment decision.</h2>
            </div>
            <div className="home-services-summary">
              <p>
                From market access and research to execution and post-trade
                coordination, CGSI brings the relevant services together around
                each client&apos;s requirements.
              </p>
              <Link href="/services" className="text-link">
                Explore all services -&gt;
              </Link>
            </div>
          </div>
          <ServiceCategoryTabs categories={serviceCategories} />
        </div>
      </section>

      <section className="home-audiences">
        <div className="site-container">
          <div className="home-audiences-heading">
            <p className="section-label">Who we serve</p>
            <h2>People and institutions are at the center of the work.</h2>
            <p>
              Different responsibilities call for different conversations. CGSI
              brings professional market capability into a relationship that
              still feels direct, considered, and human.
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
                      Explore this pathway <span aria-hidden="true">-&gt;</span>
                    </em>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-engagement">
        <div className="site-container home-engagement-grid">
          <Reveal animate className="home-engagement-heading">
            <p className="section-label">How clients engage</p>
            <h2>A relationship that continues beyond the order.</h2>
            <p>
              CGSI brings the conversation, execution, and post-trade work
              into one considered client relationship.
            </p>
            <Link href="/contact" className="text-link">
              Speak with CGSI -&gt;
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

      {false && (
      <section
        className="market-overview"
        aria-labelledby="market-overview-title"
      >
        <div className="site-container">
          <div className="market-overview-head">
            <div>
              <p className="section-label">Philippine market overview</p>
              <h2 id="market-overview-title">Market snapshot</h2>
            </div>
            <div className="market-overview-asof">
              <span>{marketSnapshot.status}</span>
              <p>As of {marketSnapshot.asOf}</p>
            </div>
          </div>
          <div className="market-ticker">
            {marketSnapshot.items.map((item) => (
              <div key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <span
                  className={`market-change market-change-${item.direction}`}
                >
                  {item.change} ({item.percent})
                </span>
              </div>
            ))}
          </div>
          <div className="market-source">
            <p>
              End-of-day index data is provided for context and is not a live
              trading feed.
            </p>
            <a
              href={marketSnapshot.sourceHref}
              target="_blank"
              rel="noreferrer"
            >
              Source: {marketSnapshot.sourceLabel}{" "}
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      )}

      {false && (
      <section className="home-expertise">
        <div className="site-container home-expertise-grid">
          <Reveal animate className="home-expertise-intro">
            <p className="section-label">Our services</p>
            <h2>Market access with support around the trade.</h2>
            <p>
              CGSI services span market access, research, execution, and
              post-trade support for different client requirements.
            </p>
            <Link href="/services" className="text-link">
              Explore all services
            </Link>
            <div className="home-expertise-photo">
              <Image
                src="/images/editorial/trading-research.jpg"
                alt="A market professional reviewing information across several trading screens"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="service-groups">
            {serviceGroups.map((group) => (
              <section className="service-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="service-list">
                  {group.items.map((item, index) => (
              <Reveal animate delay={index * 0.035} key={item.href}>
                <Link href={item.href}>
                  <span className="expertise-number">{item.number}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      )}

      {false && (
      <section
        className="market-overview"
        aria-labelledby="market-overview-title"
      >
        <div className="site-container">
          <div className="market-overview-head">
            <div>
              <p className="section-label">Philippine market overview</p>
              <h2 id="market-overview-title">Market snapshot</h2>
            </div>
            <div className="market-overview-asof">
              <span>{marketSnapshot.status}</span>
              <p>As of {marketSnapshot.asOf}</p>
            </div>
          </div>
          <div className="market-ticker">
            {marketSnapshot.items.map((item) => (
              <div key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <span
                  className={`market-change market-change-${item.direction}`}
                >
                  {item.change} ({item.percent})
                </span>
              </div>
            ))}
          </div>
          <div className="market-source">
            <p>
              End-of-day index data is provided for context and is not a live
              trading feed.
            </p>
            <a
              href={marketSnapshot.sourceHref}
              target="_blank"
              rel="noreferrer"
            >
              Source: {marketSnapshot.sourceLabel}{" "}
              <span aria-hidden="true">-&gt;</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
      )}

      <section className="home-research">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="section-label">Research & insights</p>
              <h2>Context for considered decisions.</h2>
            </div>
            <Link href="/insights" className="text-link">
              Visit the research desk
            </Link>
          </div>

          <div className="research-market-context" aria-labelledby="market-context-title">
            <div className="research-market-context-head">
              <div>
                <p className="section-label">Market context</p>
                <h3 id="market-context-title">Philippine market snapshot</h3>
              </div>
              <div className="research-market-context-asof">
                <span>{marketSnapshot.status}</span>
                <p>As of {marketSnapshot.asOf}</p>
              </div>
            </div>
            <div className="market-ticker">
              {marketSnapshot.items.map((item) => (
                <div key={item.label}>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                  <span
                    className={`market-change market-change-${item.direction}`}
                  >
                    {item.change} ({item.percent})
                  </span>
                </div>
              ))}
            </div>
            <div className="market-source">
              <p>
                End-of-day index data is provided for context and is not a live
                trading feed.
              </p>
              <a
                href={marketSnapshot.sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                Source: {marketSnapshot.sourceLabel} <span aria-hidden="true">-&gt;</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
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
                      {featuredInsight.category} ·{" "}
                      {formatDate(featuredInsight.publishedAt)}
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

      {false && (
      <section className="home-about">
        <div className="home-about-visual">
          <Image
            src="/images/editorial/makati-skyline.jpg"
            alt="A contemporary view across the Makati business district"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="home-about-copy">
          <Reveal animate>
            <p className="section-label section-label-on-dark">About CGSI</p>
            <h2>Modern capability. Enduring standards.</h2>
            <p className="home-about-lead">
              Caballes-Go Securities, Inc. is a Philippine broker-dealer built
              around client-focused service, market expertise, and accountable
              operations.
            </p>
            <p>
              The firm combines adaptable technology with direct human ownership
              of client communication, execution, and post-trade support.
            </p>
            <div className="home-about-actions">
              <Link href="/about" className="btn btn-on-dark">
                Our company
              </Link>
              <Link href="/governance" className="home-about-text-link">
                Governance & oversight →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      )}

      <section className="home-leadership">
        <div className="site-container">
          <Reveal animate className="home-leadership-heading">
            <p className="section-label">Leadership</p>
            <h2>Accountability begins at the top.</h2>
            <p>
              CGSI’s board and executive leadership bring governance, market,
              and operating responsibility into one visible structure.
            </p>
            <Link href="/about/team" className="text-link">
              Meet the leadership team
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
                  <div className="leadership-profile-media">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={`${person.name}, ${person.role}`}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="leadership-profile-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p className="leadership-profile-focus">{person.focus}</p>
                    <h3>{person.name}</h3>
                    <p className="leadership-profile-role">{person.role}</p>
                    <p className="leadership-profile-background">
                      {person.background}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal animate className="leadership-governance-card">
              <p>Board and governance</p>
              <Link href="/governance">
                Review CGSI’s oversight framework{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-start">
        <div className="site-container home-start-grid">
          <Reveal animate className="home-start-heading">
            <p className="section-label">Getting started</p>
            <h2>Begin with the next conversation.</h2>
            <p>
              Whether you are opening an account, exploring a service, or
              representing an organization, CGSI can direct your enquiry to the
              right starting point.
            </p>
          </Reveal>
          <div className="home-start-options">
            <Link href="/open-account">
              <span>
                <strong>Open an account</strong>
                <small>Review the account-opening pathway.</small>
              </span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/contact">
              <span>
                <strong>Speak with CGSI</strong>
                <small>Discuss a client, corporate, or institutional enquiry.</small>
              </span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/help">
              <span>
                <strong>Review requirements</strong>
                <small>Find practical information before you begin.</small>
              </span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="investor-resources">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="section-label">Investor resources</p>
              <h2>Useful information, where you expect to find it.</h2>
            </div>
          </div>
          <div className="resource-grid">
            {investorResources.map((item, index) => (
              <Reveal animate delay={index * 0.035} key={item.href}>
                <article>
                  <p>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                  <Link href={item.href}>
                    {item.link} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-news">
        <div className="site-container home-news-grid">
          <div>
            <div className="section-heading-row section-heading-row-compact">
              <div>
                <p className="section-label">Market news & notices</p>
                <h2>From the market desk</h2>
              </div>
              <Link href="/market-news" className="text-link">
                View market news
              </Link>
            </div>
            <div className="news-list">
              {marketNews.map((item) =>
                item.sourceHref.startsWith("http") ? (
                  <a
                    key={item.title}
                    href={item.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                  >
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
          <aside className="pressroom-card" id="pressroom">
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
              <p>Pressroom</p>
              <h2>Company facts and media enquiries.</h2>
              <span>
                Corporate releases are kept separate from market reporting and
                official exchange announcements.
              </span>
              <Link href="/about/pressroom">Visit the pressroom →</Link>
              <Link href="/market-announcements">
                {marketAnnouncements.length} market-source directories →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
