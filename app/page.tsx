import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  FileSearch,
  Headphones,
} from "lucide-react";

import { HeroCopy, HeroLine, Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights } from "@/lib/content";
import styles from "./home.module.css";

const startingPoints = [
  {
    title: "Open an account",
    text: "See what you need before you begin.",
    href: "/open-account",
  },
  {
    title: "Read market research",
    text: "Start with the latest CGSI view.",
    href: "/insights",
  },
  {
    title: "Speak with the desk",
    text: "Ask about execution or account support.",
    href: "/contact",
  },
] as const;

const servicePaths = [
  {
    number: "01",
    title: "Broker-assisted execution",
    text: "Place orders with a direct point of contact when you are ready to act.",
    href: "/services/broker-assisted-trading",
  },
  {
    number: "02",
    title: "Research & market intelligence",
    text: "Use dated market context and issuer information to support your own decisions.",
    href: "/services/research",
  },
  {
    number: "03",
    title: "Settlement & custody",
    text: "Keep post-trade processing, records, and support connected to the same relationship.",
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
  const latest = insights.slice(1, 4);

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroShell}>
          <HeroCopy>
            <div className={styles.heroCopy}>
              <HeroLine>
                <p className={styles.kicker}>Caballes-Go Securities, Inc.</p>
              </HeroLine>
              <HeroLine>
                <h1 id="home-title">Invest with a broker who stays in the picture.</h1>
              </HeroLine>
              <HeroLine>
                <p className={styles.heroLead}>
                  Philippine equity research, broker-assisted execution, and post-trade support
                  for individual and institutional investors.
                </p>
              </HeroLine>
              <HeroLine>
                <div className={styles.heroActions}>
                  <Link href="/open-account" className={styles.primaryButton}>
                    Open an account
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link href="/insights" className={styles.secondaryButton}>
                    View market research
                  </Link>
                </div>
              </HeroLine>
            </div>
          </HeroCopy>

          <Reveal animate direction="none" className={styles.heroImage}>
            <figure>
              <Image
                src="/images/editorial/trading-research.jpg"
                alt="A market professional reviewing financial information across trading screens"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <div className={styles.container}>
          <nav className={styles.startRail} aria-label="Popular actions">
            {startingPoints.map((item) => (
              <Link href={item.href} key={item.href}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className={styles.promise} aria-labelledby="promise-title">
        <div className={styles.container}>
          <div className={styles.promiseGrid}>
            <Reveal animate>
              <div className={styles.promiseStatement}>
                <p className={styles.kicker}>A traditional broker, built for today</p>
                <h2 id="promise-title">A brokerage relationship should feel clear before it feels fast.</h2>
              </div>
            </Reveal>

            <Reveal animate delay={0.04}>
              <div className={styles.promiseCopy}>
                <p>
                  CGSI combines the accountability of a traditional broker-dealer with a more
                  useful digital experience: clearer information, easier access to research, and
                  direct routes to the people handling your account and orders.
                </p>
                <Link href="/about" className={styles.textLink}>
                  About CGSI
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className={styles.promiseProof}>
            <Reveal animate>
              <article>
                <FileSearch size={19} aria-hidden="true" />
                <span>Research before action</span>
                <p>Market context and source material stay easy to find and clearly dated.</p>
              </article>
            </Reveal>
            <Reveal animate delay={0.04}>
              <article>
                <Headphones size={19} aria-hidden="true" />
                <span>A human point of contact</span>
                <p>Broker-assisted service remains available when an order or account needs attention.</p>
              </article>
            </Reveal>
            <Reveal animate delay={0.08}>
              <article>
                <Building2 size={19} aria-hidden="true" />
                <span>Support after the trade</span>
                <p>Settlement, records, and follow-through remain part of the client relationship.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {featured ? (
        <section className={styles.intelligence} aria-labelledby="intelligence-title">
          <div className={styles.container}>
            <div className={styles.intelligenceTop}>
              <Reveal animate>
                <div>
                  <p className={styles.kicker}>CGSI market intelligence</p>
                  <h2 id="intelligence-title">The market moves. Context matters.</h2>
                </div>
              </Reveal>
              <Reveal animate delay={0.04}>
                <Link href="/insights" className={styles.textLink}>
                  Explore all research
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <div className={styles.intelligenceGrid}>
              <Reveal animate className={styles.intelligenceFeature}>
                <Link href={`/insights/${featured.slug}`}>
                  <figure>
                    <Image
                      src="/images/editorial/research-meeting.jpg"
                      alt="Research professionals discussing market information"
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                  <div>
                    <span>
                      {formatDate(featured.publishedAt)} · {featured.category}
                    </span>
                    <h3>{featured.title}</h3>
                    <p>{featured.excerpt}</p>
                    <strong>
                      Read the insight
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </strong>
                  </div>
                </Link>
              </Reveal>

              <div className={styles.intelligenceList}>
                {latest.map((item, index) => (
                  <Reveal animate delay={index * 0.04} key={item.slug}>
                    <Link href={`/insights/${item.slug}`}>
                      <span>{formatDate(item.publishedAt)}</span>
                      <strong>{item.title}</strong>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </Reveal>
                ))}

                <Reveal animate delay={0.13}>
                  <Link href="/market-announcements" className={styles.sourceLink}>
                    <span>Official information</span>
                    <strong>Market announcements and source material</strong>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <Reveal animate>
              <div>
                <p className={styles.kicker}>Ways CGSI can help</p>
                <h2 id="services-title">Use the service you need. Keep the relationship connected.</h2>
              </div>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                Start with the task, not a catalogue of financial products. The detailed service
                pages explain scope, process, and what to expect.
              </p>
            </Reveal>
          </div>

          <div className={styles.servicesBody}>
            <Reveal animate className={styles.servicesImage}>
              <figure>
                <Image
                  src="/images/editorial/advisor-clients.jpg"
                  alt="An adviser reviewing financial information with clients"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div className={styles.serviceIndex}>
              {servicePaths.map((item, index) => (
                <Reveal animate delay={index * 0.04} key={item.href}>
                  <Link href={item.href}>
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}

              <Link href="/services" className={styles.textLink}>
                View all services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.institutional} aria-labelledby="institutional-title">
        <div className={styles.institutionalImage}>
          <Image
            src="/images/editorial/institutional-team.jpg"
            alt="Institutional professionals discussing documents in a meeting"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className={styles.institutionalCopy}>
          <Reveal animate>
            <p className={styles.kickerLight}>Institutions & corporations</p>
            <h2 id="institutional-title">A direct route for professional mandates.</h2>
            <p>
              Discuss execution, market access, research, settlement, custody, and operating
              requirements without moving through the retail investor journey first.
            </p>
            <Link href="/clients/institutions" className={styles.lightButton}>
              Institutional services
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.education} aria-labelledby="education-title">
        <div className={styles.container}>
          <div className={styles.educationGrid}>
            <Reveal animate className={styles.educationImage}>
              <figure>
                <Image
                  src="/images/editorial/young-investors.jpg"
                  alt="Young investors reviewing financial information together"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <Reveal animate delay={0.04} className={styles.educationCopy}>
              <p className={styles.kicker}>Investor education</p>
              <h2 id="education-title">Learn the market before you learn the shortcuts.</h2>
              <p>
                For investors who are still building confidence, start with the fundamentals:
                equities, risk, disclosures, account basics, and how an order reaches the market.
              </p>
              <div>
                <Link href="/insights/guides" className={styles.primaryButton}>
                  Browse investor guides
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/clients/new-investors" className={styles.secondaryButton}>
                  New investor path
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.close} aria-labelledby="close-title">
        <div className={styles.container}>
          <div className={styles.closeGrid}>
            <Reveal animate>
              <div>
                <p className={styles.kicker}>Open an account</p>
                <h2 id="close-title">Know what you need before you start.</h2>
                <p>
                  Review the requirements first. If something is unclear, contact CGSI before
                  preparing or submitting documents.
                </p>
              </div>
            </Reveal>

            <Reveal animate delay={0.04} className={styles.closeActions}>
              <Link href="/open-account" className={styles.primaryButton}>
                View account requirements
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact CGSI
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
