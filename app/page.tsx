import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HeroCopy, HeroLine, Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights } from "@/lib/content";
import styles from "./home.module.css";

const intentLinks = [
  {
    label: "Open an account",
    detail: "Requirements, documents, and next steps",
    href: "/open-account",
  },
  {
    label: "Follow the market",
    detail: "Research, market notes, and announcements",
    href: "/insights",
  },
  {
    label: "Talk to a broker",
    detail: "Execution, account, or service questions",
    href: "/contact",
  },
] as const;

const relationshipSteps = [
  {
    number: "01",
    title: "Research",
    text: "Start with dated market context, issuer information, and official source material.",
  },
  {
    number: "02",
    title: "Execute",
    text: "When you are ready to act, work with CGSI on the order and execution details.",
  },
  {
    number: "03",
    title: "Settle",
    text: "Post-trade processing, records, and follow-through remain part of the relationship.",
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
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopyWrap}>
            <HeroCopy>
              <div className={styles.heroCopy}>
                <HeroLine>
                  <p className={styles.eyebrow}>Caballes-Go Securities, Inc.</p>
                </HeroLine>
                <HeroLine>
                  <h1 id="home-title">
                    Philippine equities, with research and a broker you can reach.
                  </h1>
                </HeroLine>
                <HeroLine>
                  <p className={styles.heroLead}>
                    A Philippine broker-dealer serving retail and institutional investors with
                    broker-assisted execution, research publications, and post-trade support.
                  </p>
                </HeroLine>
                <HeroLine>
                  <div className={styles.heroActions}>
                    <Link href="/open-account" className={styles.primaryAction}>
                      Open an account
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <Link href="/insights" className={styles.secondaryAction}>
                      Read market research
                    </Link>
                  </div>
                </HeroLine>
              </div>
            </HeroCopy>

            <div className={styles.credentials} aria-label="CGSI credentials">
              <span>PSE Trading Participant</span>
              <span>Broker-Dealer</span>
              <span>Retail & Institutional</span>
              <span>Research Publications</span>
            </div>
          </div>

          <Reveal animate direction="none" className={styles.heroMedia}>
            <figure>
              <Image
                src="/images/editorial/pse-trading-floor.jpg"
                alt="Philippine securities market trading environment"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <div className={styles.container}>
          <nav className={styles.intentRail} aria-label="Popular actions">
            <p>I&apos;m here to</p>
            <div>
              {intentLinks.map((item) => (
                <Link href={item.href} key={item.href}>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {featured ? (
        <section className={styles.research} aria-labelledby="research-title">
          <div className={styles.container}>
            <div className={styles.researchIntro}>
              <Reveal animate>
                <p className={styles.eyebrow}>From the research desk</p>
                <h2 id="research-title">A current view, with the date and source kept visible.</h2>
              </Reveal>
              <Reveal animate delay={0.04}>
                <Link href="/insights" className={styles.textLink}>
                  All research
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <div className={styles.researchStage}>
              <Reveal animate className={styles.researchImage}>
                <figure>
                  <Image
                    src="/images/editorial/research-meeting.jpg"
                    alt="Research professionals reviewing market information together"
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <Reveal animate delay={0.05} className={styles.researchStory}>
                <span className={styles.meta}>
                  {formatDate(featured.publishedAt)} · {featured.category}
                </span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <Link href={`/insights/${featured.slug}`}>
                  Read the insight
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                {recent.length ? (
                  <div className={styles.recentResearch}>
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

      <section className={styles.relationship} aria-labelledby="relationship-title">
        <div className={styles.container}>
          <div className={styles.relationshipHeading}>
            <Reveal animate>
              <p className={styles.eyebrow}>The brokerage relationship</p>
              <h2 id="relationship-title">Before the order. At execution. After the trade.</h2>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                The site should make each stage easier to understand without forcing every client
                through the same amount of detail.
              </p>
            </Reveal>
          </div>

          <div className={styles.relationshipStage}>
            <Reveal animate className={styles.relationshipImage}>
              <figure>
                <Image
                  src="/images/editorial/operations-team.jpg"
                  alt="Brokerage operations professionals collaborating in an office"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div className={styles.relationshipPanel}>
              {relationshipSteps.map((item, index) => (
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

              <Link href="/services" className={styles.panelLink}>
                Explore services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.institutional} aria-labelledby="institutional-title">
        <Image
          src="/images/editorial/institutional-team.jpg"
          alt="Institutional professionals discussing documents in a meeting"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className={styles.institutionalShade} />
        <div className={styles.container}>
          <Reveal animate className={styles.institutionalCopy}>
            <p className={styles.eyebrowLight}>Institutions & corporations</p>
            <h2 id="institutional-title">
              Professional mandates should have a direct route into the firm.
            </h2>
            <p>
              Discuss execution, research, market access, settlement, custody, and operating
              requirements without moving through the retail investor journey first.
            </p>
            <Link href="/clients/institutions" className={styles.lightAction}>
              Institutional services
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.education} aria-labelledby="education-title">
        <div className={styles.container}>
          <div className={styles.educationGrid}>
            <Reveal animate className={styles.educationCopy}>
              <p className={styles.eyebrow}>New to equities?</p>
              <h2 id="education-title">Start with the questions, not the jargon.</h2>
              <p>
                Learn how Philippine equities work, what risk means, how disclosures help, and
                what happens between deciding to invest and placing an order.
              </p>
              <div className={styles.educationActions}>
                <Link href="/insights/guides" className={styles.primaryAction}>
                  Browse investor guides
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/clients/new-investors" className={styles.secondaryAction}>
                  New investor path
                </Link>
              </div>
            </Reveal>

            <Reveal animate delay={0.05} className={styles.educationMedia}>
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
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-title">
        <div className={styles.container}>
          <div className={styles.finalInner}>
            <Reveal animate>
              <p className={styles.eyebrow}>Open an account</p>
              <h2 id="final-title">Know what you need before you begin.</h2>
            </Reveal>
            <Reveal animate delay={0.04} className={styles.finalSide}>
              <p>
                Review the requirements first. If anything is unclear, contact CGSI before you
                prepare or submit documents.
              </p>
              <div>
                <Link href="/open-account" className={styles.primaryAction}>
                  View requirements
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/contact" className={styles.secondaryAction}>
                  Contact CGSI
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
