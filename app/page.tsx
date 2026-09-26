import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Building2,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import { HeroCopy, HeroLine, Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsights } from "@/lib/content";
import styles from "./home.module.css";

const nextSteps = [
  {
    icon: BookOpenText,
    number: "01",
    title: "Learn the basics",
    text: "Understand Philippine equities, risk, and the account-opening process before you invest.",
    href: "/clients/new-investors",
    action: "Start learning",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    number: "02",
    title: "Follow the market",
    text: "Read dated research, market notes, and official announcements without mixing the sources.",
    href: "/insights",
    action: "Explore research",
  },
  {
    icon: Building2,
    number: "03",
    title: "Work with CGSI",
    text: "Explore broker-assisted execution, account support, and services for individual or institutional needs.",
    href: "/services",
    action: "View services",
  },
] as const;

const learningLinks = [
  {
    image: "/images/editorial/young-investors.jpg",
    alt: "Young investors reviewing financial information together",
    label: "Investor education",
    title: "Start investing with the concepts in the right order.",
    href: "/insights/guides",
    action: "Browse guides",
  },
  {
    image: "/images/editorial/trading-research.jpg",
    alt: "Professional market screens displaying financial information",
    label: "Market research",
    title: "Read the latest market notes and company-focused research.",
    href: "/insights/library",
    action: "Open research library",
  },
  {
    image: "/images/editorial/market-office.jpg",
    alt: "Market information displayed in a professional office",
    label: "Official information",
    title: "Check market announcements and source material directly.",
    href: "/market-announcements",
    action: "View announcements",
  },
] as const;

const workflow = [
  {
    number: "01",
    title: "Understand the decision",
    text: "Start with the objective, the security, and the information you need before an order is placed.",
  },
  {
    number: "02",
    title: "Place the instruction",
    text: "Work with a broker when you are ready to execute, with the order and next steps made clear.",
  },
  {
    number: "03",
    title: "Complete the trade",
    text: "Settlement, records, and post-trade support remain connected to the same client relationship.",
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
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <HeroCopy>
              <div className={styles.heroCopy}>
                <HeroLine>
                  <p className={styles.eyebrow}>Caballes-Go Securities, Inc.</p>
                </HeroLine>
                <HeroLine>
                  <h1 id="home-title">A more direct way to invest in Philippine equities.</h1>
                </HeroLine>
                <HeroLine>
                  <p className={styles.heroLead}>
                    Research, broker-assisted execution, and post-trade support for individual and
                    institutional investors.
                  </p>
                </HeroLine>
                <HeroLine>
                  <div className={styles.heroActions}>
                    <Link href="/open-account" className={styles.primaryAction}>
                      Open an account
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <Link href="/contact" className={styles.secondaryAction}>
                      Talk to CGSI
                    </Link>
                  </div>
                </HeroLine>
              </div>
            </HeroCopy>

            <Reveal animate direction="none" className={styles.heroVisual}>
              <figure>
                <Image
                  src="/images/editorial/makati-dusk.jpg"
                  alt="Makati business district at dusk"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <figcaption>
                  <span>Philippine market access</span>
                  <span>Research · Execution · Support</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className={styles.proofBar} aria-label="CGSI profile">
            <div>
              <span>Market access</span>
              <strong>PSE Trading Participant</strong>
            </div>
            <div>
              <span>Client coverage</span>
              <strong>Individual & institutional</strong>
            </div>
            <div>
              <span>Research</span>
              <strong>Market publications & insights</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextSection} aria-labelledby="next-title">
        <div className={styles.container}>
          <Reveal animate className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Choose your next step</p>
            <h2 id="next-title">What would you like to do?</h2>
            <p>
              Start with the task in front of you. The detailed pages are there when you need them.
            </p>
          </Reveal>

          <div className={styles.nextGrid}>
            {nextSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal animate delay={index * 0.04} key={item.href}>
                  <Link href={item.href} className={styles.nextItem}>
                    <div className={styles.nextTopline}>
                      <span>{item.number}</span>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <strong>
                      {item.action}
                      <ArrowRight size={15} aria-hidden="true" />
                    </strong>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {featured ? (
        <section className={styles.researchSection} aria-labelledby="research-title">
          <div className={styles.container}>
            <div className={styles.researchGrid}>
              <Reveal animate className={styles.researchVisual}>
                <figure>
                  <Image
                    src="/images/editorial/research-meeting.jpg"
                    alt="Professionals discussing investment research"
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <Reveal animate delay={0.05} className={styles.researchCopy}>
                <p className={styles.eyebrow}>Research spotlight</p>
                <h2 id="research-title">Market context before market action.</h2>
                <p className={styles.researchLead}>
                  Read what changed, when it changed, and the source behind it before you decide
                  what deserves your attention.
                </p>

                <Link href={`/insights/${featured.slug}`} className={styles.featuredStory}>
                  <span>
                    {formatDate(featured.publishedAt)} · {featured.category}
                  </span>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <strong>
                    Read the latest insight
                    <ArrowRight size={15} aria-hidden="true" />
                  </strong>
                </Link>

                {secondary.length ? (
                  <div className={styles.secondaryStories} aria-label="More recent insights">
                    {secondary.map((insight) => (
                      <Link href={`/insights/${insight.slug}`} key={insight.slug}>
                        <span>{formatDate(insight.publishedAt)}</span>
                        <strong>{insight.title}</strong>
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

      <section className={styles.workflowSection} aria-labelledby="workflow-title">
        <div className={styles.container}>
          <div className={styles.workflowHeading}>
            <Reveal animate>
              <p className={styles.eyebrow}>Working with CGSI</p>
              <h2 id="workflow-title">When you are ready to act, the process stays clear.</h2>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                Brokerage is more than placing an order. Research, execution, settlement, and
                follow-through should feel like parts of the same relationship.
              </p>
            </Reveal>
          </div>

          <div className={styles.workflowLayout}>
            <Reveal animate className={styles.workflowImage}>
              <figure>
                <Image
                  src="/images/editorial/operations-team.jpg"
                  alt="Brokerage operations professionals collaborating in an office"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div className={styles.workflowList}>
              {workflow.map((item, index) => (
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
              <Link href="/services" className={styles.textLink}>
                Explore CGSI services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.institutionalSection} aria-labelledby="institutional-title">
        <div className={styles.container}>
          <div className={styles.institutionalGrid}>
            <Reveal animate className={styles.institutionalCopy}>
              <p className={styles.eyebrowLight}>For institutions & corporations</p>
              <h2 id="institutional-title">Professional requirements deserve a direct route.</h2>
              <p>
                For institutional mandates, go straight to the conversation around execution,
                market access, settlement, custody, and operating requirements.
              </p>
              <Link href="/clients/institutions" className={styles.lightAction}>
                Institutional services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal animate delay={0.05} className={styles.institutionalImage}>
              <figure>
                <Image
                  src="/images/editorial/institutional-team.jpg"
                  alt="Institutional professionals reviewing documents together"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.learningSection} aria-labelledby="learning-title">
        <div className={styles.container}>
          <div className={styles.learningHeading}>
            <Reveal animate>
              <p className={styles.eyebrow}>Learn & stay informed</p>
              <h2 id="learning-title">Useful information, separated by purpose.</h2>
            </Reveal>
            <Reveal animate delay={0.04}>
              <p>
                Education explains. Research interprets. Official announcements provide the source.
                Keeping them distinct makes the site easier to trust and use.
              </p>
            </Reveal>
          </div>

          <div className={styles.learningGrid}>
            {learningLinks.map((item, index) => (
              <Reveal animate delay={index * 0.04} key={item.href}>
                <Link href={item.href} className={styles.learningItem}>
                  <figure>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                  <div>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <strong>
                      {item.action}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </strong>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="final-title">
        <div className={styles.container}>
          <div className={styles.finalGrid}>
            <Reveal animate>
              <p className={styles.eyebrow}>Open an account</p>
              <h2 id="final-title">Ready to take the next step?</h2>
              <p>
                Review the requirements first. If you are unsure which account path applies, speak
                with CGSI before you prepare your documents.
              </p>
            </Reveal>
            <Reveal animate delay={0.04} className={styles.finalActions}>
              <Link href="/open-account" className={styles.primaryAction}>
                View account requirements
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.secondaryAction}>
                Contact CGSI
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
