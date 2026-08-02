import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";
import type { ClientProfile } from "@/content/profiles";

function HouseholdLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="household-hero">
        <div className="site-container household-hero-grid">
          <div className="household-hero-copy">
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <Link href="/contact" className="btn btn-primary">Discuss your family priorities</Link>
          </div>
          <div className="household-hero-visual">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div>
              <span>Household perspective</span>
              <strong>Liquidity · Family goals · Time horizon</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="household-lens">
        <div className="site-container household-lens-grid">
          <Reveal animate>
            <p className="section-label">The household lens</p>
            <h2>{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
          </Reveal>
          <Reveal animate direction="right" className="household-response">
            <span>CGSI response</span>
            <h3>{profile.solutionTitle}</h3>
            <p>{profile.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="household-priorities">
        <div className="site-container">
          <div className="household-priority-head">
            <p className="section-label">One family, several responsibilities</p>
            <h2>Make the trade answer to the plan.</h2>
          </div>
          <div className="household-priority-grid">
            {profile.priorities.map((item, index) => (
              <Reveal animate delay={index * 0.04} key={item.title}>
                <article>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="household-journey">
        <div className="site-container household-journey-grid">
          <div>
            <p className="section-label section-label-on-dark">Relationship journey</p>
            <h2>From shared priorities to an investable structure.</h2>
          </div>
          <ol>
            {profile.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function GlobalLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="global-client-hero">
        <div className="global-client-media">
          <Image
            src={profile.image}
            alt={profile.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: profile.imagePosition }}
          />
        </div>
        <div className="global-client-overlay" aria-hidden="true" />
        <div className="site-container global-client-content">
          <p className="interior-kicker">{profile.eyebrow}</p>
          <h1>{profile.title}</h1>
          <p>{profile.description}</p>
          <Link href="/contact" className="btn btn-primary">Plan a remote conversation</Link>
        </div>
        <div className="global-time-band">
          <span>Manila</span><i />
          <span>At sea</span><i />
          <span>Overseas</span><i />
          <strong>One accountable relationship</strong>
        </div>
      </section>

      <section className="global-capital">
        <div className="site-container global-capital-grid">
          <Reveal animate className="global-capital-intro">
            <p className="section-label">Capital boundaries</p>
            <h2>{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
          </Reveal>
          <div className="global-capital-buckets">
            {profile.priorities.map((item, index) => (
              <Reveal animate delay={index * 0.04} key={item.title}>
                <article>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="global-protocol">
        <div className="site-container global-protocol-grid">
          <div>
            <p className="section-label section-label-on-dark">Communication protocol</p>
            <h2>{profile.solutionTitle}</h2>
            <p>{profile.solution}</p>
          </div>
          <ol>
            {profile.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{step.title}</strong><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function LearningLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="learning-client-hero">
        <div className="site-container learning-client-grid">
          <div className="learning-client-copy">
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <div>
              <Link href="/insights/guides" className="btn btn-primary">Start with investor guides</Link>
              <Link href="/open-account" className="text-link">See account requirements</Link>
            </div>
          </div>
          <div className="learning-client-card">
            <div className="learning-client-image">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <p>Investor foundations</p>
            <strong>Purpose → Risk → Research → Position</strong>
          </div>
        </div>
      </section>

      <section className="learning-curriculum">
        <div className="site-container">
          <div className="learning-curriculum-head">
            <div>
              <p className="section-label">Learning path</p>
              <h2>Understanding before exposure.</h2>
            </div>
            <p>{profile.problem}</p>
          </div>
          <div className="learning-modules">
            {profile.steps.map((step, index) => (
              <Reveal animate delay={index * 0.04} key={step.title}>
                <article>
                  <span>Module {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-readiness">
        <div className="site-container learning-readiness-grid">
          <Reveal animate>
            <p className="section-label section-label-on-dark">Investor readiness</p>
            <h2>{profile.solutionTitle}</h2>
            <p>{profile.solution}</p>
          </Reveal>
          <div>
            {profile.priorities.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true">✓</span>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function InstitutionalLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="mandate-hero">
        <div className="site-container mandate-hero-grid">
          <div className="mandate-hero-copy">
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <Link href="/contact" className="btn btn-primary">Discuss a mandate</Link>
          </div>
          <div className="mandate-hero-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="site-container mandate-facts">
          <span>Coverage</span><strong>Philippine equities</strong>
          <span>Operating model</span><strong>Execution + post-trade</strong>
          <span>Relationship</span><strong>Defined mandate</strong>
        </div>
      </section>

      <section className="mandate-brief">
        <div className="site-container mandate-brief-grid">
          <div>
            <p className="section-label">The institutional brief</p>
            <h2>{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
          </div>
          <blockquote>
            <p>{profile.solutionTitle}</p>
            <span>{profile.solution}</span>
          </blockquote>
        </div>
      </section>

      <section className="mandate-operating-model">
        <div className="site-container">
          <div className="mandate-operating-head">
            <p className="section-label section-label-on-dark">Operating model</p>
            <h2>Coverage, execution, and operations around one mandate.</h2>
          </div>
          <div className="mandate-operating-grid">
            {profile.priorities.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <ol className="mandate-sequence">
            {profile.steps.map((step) => (
              <li key={step.title}><strong>{step.title}</strong><span>{step.text}</span></li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function ClientProfileLayout({ profile }: { profile: ClientProfile }) {
  if (profile.layout === "household") return <HouseholdLayout profile={profile} />;
  if (profile.layout === "global") return <GlobalLayout profile={profile} />;
  if (profile.layout === "learning") return <LearningLayout profile={profile} />;
  return <InstitutionalLayout profile={profile} />;
}
