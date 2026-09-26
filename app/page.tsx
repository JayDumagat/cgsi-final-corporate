import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileText,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import { HeroCopy, HeroLine, Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights } from "@/lib/content";
import styles from "./home.module.css";

const proof = [
  {
    icon: ShieldCheck,
    label: "Market status",
    value: "PSE Trading Participant",
  },
  {
    icon: Building2,
    label: "License",
    value: "Broker-Dealer",
  },
  {
    icon: LineChart,
    label: "Client coverage",
    value: "Individual & institutional",
  },
  {
    icon: FileText,
    label: "Research",
    value: "Market publications available",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Research the decision",
    text: "Use market context, issuer information, and official disclosures to frame the question first.",
  },
  {
    number: "02",
    title: "Place the instruction",
    text: "When you are ready, work with CGSI on the order and the execution details that matter.",
  },
  {
    number: "03",
    title: "Complete the trade",
    text: "Settlement, records, and follow-through remain connected after the order is executed.",
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
  const recent = insights.slice(1, 3);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <HeroCopy>
              <div className={styles.heroCopy}>
                <HeroLine>
                  <p className={styles.kicker}>Caballes-Go Securities, Inc.</p>
                </HeroLine>
                <HeroLine>
                  <h1 id="home-title">Your access to Philippine equities.</h1>
                </HeroLine>
                <HeroLine>
                  <p className={styles.heroLead}>
                    Research, execution, and account support from a Philippine broker-dealer
                    serving individual and institutional investors.
                  </p>
                </HeroLine>
                <HeroLine>
                  <div className={styles.heroActions}>
                    <Link href="/open-account" className={styles.primaryButton}>
                      Open an account
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <Link href="/insights" className={styles.secondaryButton}>
                      Explore research
                    </Link>
                  </div>
                </HeroLine>
              </div>
            </HeroCopy>

            <Reveal animate direction="none" className={styles.heroMedia}>
              <figure>
                <Image
                  src="/images/editorial/makati-skyline.jpg"
                  alt="Makati skyline representing the Philippine business and capital market"
                  fill
                  priority
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>

          <nav className={styles.taskRail} aria-label="Popular actions">
            <Link href="/open-account">
              <span>Open an account</span>
              <small>Requirements and next steps</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/insights">
              <span>Read market research</span>
              <small>Latest notes and analysis</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/clients/institutions">
              <span>Institutional services</span>
              <small>Execution and operating support</small>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>

      <section className={styles.trustSection} aria-labelledby="trust-title">
        <div className={styles.container}>
          <div className={styles.trustIntro}>
            <Reveal animate>
              <p className={styles.kicker}>Why CGSI</p>
              <h2 id="trust-title">A brokerage relationship built around clear decisions.</h2>
            </Reveal>

            <Reveal animate delay={0.04}>
              <p>
                You should be able to understand what you are looking at, know who to contact,
                and move from research to execution without unnecessary friction.
              </p>
            </Reveal>
          </div>

          <dl className={styles.proofGrid}>
            {proof.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal animate delay={index * 0.03} key={item.label}>
                  <div className={styles.proofItem}>
                    <Icon size={18} aria-hidden="true" />
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </section>

      {featured ? (
        <section className={styles.insightSection} aria-labelledby="insight-title">
          <div className={styles.container}>
            <div className={styles.insightGrid}>
              <Reveal animate className={styles.insightMedia}>
                <figure>
                  <Image
                    src="/images/editorial/research-meeting.jpg"
                    alt="Professionals reviewing market research together"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <Reveal animate delay={0.05} className={styles.insightContent}>
                <p className={styles.kickerLight}>Market intelligence</p>
                <h2 id="insight-title">Know what changed before you decide what to do.</h2>
                <p className={styles.insightLead}>
                  Research is most useful when the date, source, and context are easy to see.
                </p>

                <Link href={`/insights/${featured.slug}`} className={styles.featuredInsight}>
                  <span>
                    {formatDate(featured.publishedAt)} · {featured.category}
                  </span>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <strong>
                    Read the insight
                    <ArrowRight size={15} aria-hidden="true" />
                  </strong>
                </Link>

                {recent.length ? (
                  <div className={styles.recentList}>
                    {recent.map((item) => (
                      <Link href={`/insights/${item.slug}`} key={item.slug}>
                        <span>{formatDate(item.publishedAt)}</span>
                        <strong>{item.title}</strong>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <Reveal animate>
              <p className={styles.kicker}>How CGSI works with you</p>
              <h2 id="process-title">From instruction to settlement, one connected process.</h2>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                The website introduces the process. The deeper service pages provide the detail
                when you need it.
              </p>
            </Reveal>
          </div>

          <div className={styles.processLayout}>
            <Reveal animate className={styles.processMedia}>
              <figure>
                <Image
                  src="/images/editorial/operations-team.jpg"
                  alt="Brokerage operations professionals collaborating in an office"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div className={styles.processList}>
              {process.map((item, index) => (
                <Reveal animate delay={index * 0.04} key={item.number}>
                  <article>
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}

              <Link href="/services" className={styles.textAction}>
                View all services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.learnSection} aria-labelledby="learn-title">
        <div className={styles.container}>
          <div className={styles.learnHeader}>
            <Reveal animate>
              <p className={styles.kicker}>Helpful resources</p>
              <h2 id="learn-title">Learn first. Verify the source. Then act.</h2>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                Education, research, and official announcements serve different purposes. CGSI
                keeps them separate so you can scan the site with confidence.
              </p>
            </Reveal>
          </div>

          <div className={styles.learnGrid}>
            <Reveal animate className={styles.learnFeature}>
              <Link href="/insights/guides">
                <figure>
                  <Image
                    src="/images/editorial/young-investors.jpg"
                    alt="Young investors reviewing financial information together"
                    fill
                    sizes="(min-width: 900px) 58vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <span>Investor education</span>
                  <h3>Start with the fundamentals of Philippine equities.</h3>
                  <strong>
                    Browse investor guides
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </strong>
                </div>
              </Link>
            </Reveal>

            <div className={styles.learnList}>
              <Reveal animate delay={0.04}>
                <Link href="/insights/library">
                  <span>Research library</span>
                  <strong>Browse dated market notes and publications.</strong>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </Reveal>
              <Reveal animate delay={0.07}>
                <Link href="/market-announcements">
                  <span>Official information</span>
                  <strong>Go directly to market announcements and notices.</strong>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </Reveal>
              <Reveal animate delay={0.1}>
                <Link href="/resources">
                  <span>Client resources</span>
                  <strong>Find account forms and practical support materials.</strong>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closeSection} aria-labelledby="close-title">
        <div className={styles.container}>
          <div className={styles.closeGrid}>
            <Reveal animate>
              <p className={styles.kicker}>Start with CGSI</p>
              <h2 id="close-title">Ready to open an account?</h2>
              <p>
                Review the requirements first. If you are unsure which path applies, contact the
                team before preparing your documents.
              </p>
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
    </div>
  );
}
