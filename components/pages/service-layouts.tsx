import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";
import type { ServiceProfile } from "@/content/profiles";

function CoverageLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="coverage-hero">
        <div className="site-container coverage-hero-grid">
          <div className="coverage-hero-copy">
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <Link href="/contact" className="btn btn-primary">Speak with a broker</Link>
          </div>
          <div className="coverage-hero-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="site-container coverage-contact-band">
          <span>One point of contact</span>
          <strong>Instruction</strong><i />
          <strong>Execution</strong><i />
          <strong>Follow-through</strong>
        </div>
      </section>

      <section className="coverage-context">
        <div className="site-container coverage-context-grid">
          <Reveal animate>
            <p className="section-label">Why human coverage matters</p>
            <h2>When the instruction needs more than an order ticket.</h2>
            <p>{profile.problem}</p>
          </Reveal>
          <Reveal animate direction="right" className="coverage-quote">
            <p>{profile.approach}</p>
          </Reveal>
        </div>
      </section>

      <section className="coverage-commitments">
        <div className="site-container">
          <p className="section-label">Coverage commitments</p>
          <div>
            {profile.outcomes.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-sequence">
        <div className="site-container coverage-sequence-grid">
          <h2>A clear path around every instruction.</h2>
          <ol>
            {profile.process.map((step) => (
              <li key={step.title}><strong>{step.title}</strong><span>{step.text}</span></li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function DecisionLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="decision-masthead">
        <div className="site-container decision-masthead-grid">
          <div>
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
          </div>
          <div>
            <p>{profile.description}</p>
            <Link href="/contact" className="text-link">Begin a decision conversation</Link>
          </div>
        </div>
      </section>

      <section className="decision-brief">
        <div className="site-container decision-brief-grid">
          <div className="decision-brief-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <Reveal animate direction="right" className="decision-brief-copy">
            <span>Decision brief / 01</span>
            <h2>Suitability is more than a compelling idea.</h2>
            <p>{profile.problem}</p>
            <blockquote>{profile.approach}</blockquote>
          </Reveal>
        </div>
      </section>

      <section className="decision-questions">
        <div className="site-container decision-question-grid">
          <div>
            <p className="section-label">The questions before execution</p>
            <h2>Make the trade-offs visible.</h2>
          </div>
          <div>
            {profile.outcomes.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="decision-process">
        <div className="site-container">
          {profile.process.map((step, index) => (
            <div key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ResearchLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="research-service-masthead">
        <div className="site-container">
          <div className="research-service-rule">
            <span>CGSI Research</span><span>Philippine equities</span><span>Evidence before urgency</span>
          </div>
          <div className="research-service-title">
            <p>{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
          </div>
        </div>
      </section>

      <section className="research-service-lead">
        <div className="site-container research-service-lead-grid">
          <div className="research-service-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </div>
          <aside>
            <p>{profile.description}</p>
            <Link href="/insights" className="btn btn-primary">Visit the research desk</Link>
          </aside>
        </div>
      </section>

      <section className="research-service-thesis">
        <div className="site-container research-service-thesis-grid">
          <div>
            <p className="section-label">The information problem</p>
            <h2>More information does not automatically create insight.</h2>
            <p>{profile.problem}</p>
          </div>
          <blockquote>{profile.approach}</blockquote>
        </div>
      </section>

      <section className="research-service-standards">
        <div className="site-container">
          <div>
            <p className="section-label section-label-on-dark">Research standards</p>
            <h2>What every publication should make clear.</h2>
          </div>
          <div className="research-service-standard-grid">
            {profile.outcomes.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
          <nav aria-label="Research destinations">
            <Link href="/insights/market-notes">Market notes</Link>
            <Link href="/insights/guides">Investor guides</Link>
            <Link href="/insights/library">Research library</Link>
          </nav>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function OperationsLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="operations-hero">
        <div className="site-container operations-hero-grid">
          <div>
            <p className="interior-kicker">{profile.eyebrow}</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
          </div>
          <div className="operations-hero-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="operations-blueprint">
        <div className="site-container">
          <div className="operations-blueprint-head">
            <p className="section-label">Post-trade blueprint</p>
            <h2>Execution is the midpoint, not the finish line.</h2>
            <p>{profile.problem}</p>
          </div>
          <div className="operations-flow">
            {profile.process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operations-controls">
        <div className="site-container operations-controls-grid">
          <div>
            <p className="section-label section-label-on-dark">Operational ownership</p>
            <h2>Details with an accountable owner.</h2>
            <p>{profile.approach}</p>
          </div>
          <div>
            {profile.outcomes.map((item) => (
              <article key={item.title}><strong>{item.title}</strong><p>{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function DmaLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="dma-hero">
        <div className="dma-grid" aria-hidden="true" />
        <div className="site-container dma-hero-grid">
          <div className="dma-copy">
            <p className="interior-kicker">Professional access / DMA</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <div>
              <Link href="/contact" className="btn btn-primary">Discuss eligibility</Link>
              <span>Subject to approval and applicable requirements</span>
            </div>
          </div>
          <div className="dma-terminal" aria-label="DMA operating model illustration">
            <div><span>ACCESS MODEL</span><em>CONTROLLED</em></div>
            <ol>
              <li><span>01</span><strong>Authorized user</strong><em>Verified</em></li>
              <li><span>02</span><strong>Order controls</strong><em>Defined</em></li>
              <li><span>03</span><strong>Market access</strong><em>Connected</em></li>
              <li><span>04</span><strong>Post-trade</strong><em>Accountable</em></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="dma-operating">
        <div className="site-container dma-operating-grid">
          <div>
            <p className="section-label">The operating requirement</p>
            <h2>Speed without governance creates a different kind of risk.</h2>
            <p>{profile.problem}</p>
          </div>
          <blockquote>{profile.approach}</blockquote>
        </div>
      </section>

      <section className="dma-control-stack">
        <div className="site-container">
          <p className="section-label section-label-on-dark">Control stack</p>
          <div>
            {profile.outcomes.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
          <ol>
            {profile.process.map((step) => (
              <li key={step.title}><strong>{step.title}</strong><span>{step.text}</span></li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function PeraLayout({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="pera-hero">
        <div className="site-container pera-hero-grid">
          <div className="pera-copy">
            <p className="interior-kicker">Retirement planning / PERA</p>
            <h1>{profile.title}</h1>
            <p>{profile.description}</p>
            <div>
              <Link href="/contact" className="btn btn-primary">Discuss PERA with CGSI</Link>
              <Link href="/tools/calculators" className="text-link">Use retirement calculator</Link>
            </div>
          </div>
          <div className="pera-media">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <span>Long-term purpose</span>
          </div>
        </div>
      </section>

      <section className="pera-horizon">
        <div className="site-container pera-horizon-grid">
          <div>
            <p className="section-label">Retirement horizon</p>
            <h2>A durable plan needs more than a product label.</h2>
            <p>{profile.problem}</p>
          </div>
          <div className="pera-horizon-line">
            {profile.process.map((step, index) => (
              <article key={step.title}>
                <span>{index + 1}</span><strong>{step.title}</strong><p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pera-principles">
        <div className="site-container">
          <div className="pera-principle-intro">
            <p className="section-label section-label-on-dark">Planning principles</p>
            <h2>{profile.approach}</h2>
          </div>
          <div>
            {profile.outcomes.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
          <p className="pera-disclosure">
            Availability, eligibility, account benefits, contribution rules, and investment
            choices are subject to current regulations and participating-provider arrangements.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function ServiceProfileLayout({ profile }: { profile: ServiceProfile }) {
  if (profile.layout === "coverage") return <CoverageLayout profile={profile} />;
  if (profile.layout === "decision") return <DecisionLayout profile={profile} />;
  if (profile.layout === "research") return <ResearchLayout profile={profile} />;
  if (profile.layout === "operations") return <OperationsLayout profile={profile} />;
  if (profile.layout === "dma") return <DmaLayout profile={profile} />;
  return <PeraLayout profile={profile} />;
}
