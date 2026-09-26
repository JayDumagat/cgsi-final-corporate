import { ArrowRight, BookOpenText, CircleCheck, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import type { ServiceProfile } from "@/content/profiles";

function DecisionService({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="ref-service-thesis" aria-labelledby="service-thesis-title">
        <div className="site-container ref-service-thesis-grid">
          <div>
            <p className="ref-kicker">Why it exists</p>
            <h2 id="service-thesis-title">{profile.problem}</h2>
          </div>
          <aside>
            <p className="ref-kicker">CGSI approach</p>
            <p>{profile.approach}</p>
          </aside>
        </div>
      </section>

      <section className="ref-service-outcomes" aria-labelledby="service-outcomes-title">
        <div className="site-container">
          <div className="ref-section-intro ref-section-intro-horizontal">
            <div>
              <p className="ref-kicker">What the service adds</p>
              <h2 id="service-outcomes-title">Support where the decision becomes an order.</h2>
            </div>
          </div>
          <div className="ref-outcome-row">
            {profile.outcomes.map((item) => (
              <article key={item.title}>
                <CircleCheck aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResearchService({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="ref-research-service" aria-labelledby="research-service-title">
        <div className="site-container ref-research-service-grid">
          <div>
            <BookOpenText aria-hidden="true" />
            <p className="ref-kicker">Research discipline</p>
            <h2 id="research-service-title">{profile.problem}</h2>
            <p>{profile.approach}</p>
          </div>

          <div className="ref-research-standards">
            {profile.outcomes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
            <Link href="/insights" className="ref-text-link">
              Visit research & insights <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function OperatingService({ profile }: { profile: ServiceProfile }) {
  const dma = profile.layout === "dma";

  return (
    <>
      <section className="ref-operating-service" aria-labelledby="operating-service-title">
        <div className="site-container">
          <div className="ref-operating-heading">
            <div>
              {dma ? <Gauge aria-hidden="true" /> : <ShieldCheck aria-hidden="true" />}
              <p className="ref-kicker">{dma ? "Access & controls" : "Post-trade operations"}</p>
              <h2 id="operating-service-title">{profile.problem}</h2>
            </div>
            <p>{profile.approach}</p>
          </div>

          <div className="ref-operating-grid">
            <div>
              {profile.outcomes.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <ol>
              {profile.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

function PeraService({ profile }: { profile: ServiceProfile }) {
  return (
    <>
      <section className="ref-pera-service" aria-labelledby="pera-service-title">
        <div className="site-container ref-pera-service-grid">
          <div>
            <p className="ref-kicker">Long-horizon investing</p>
            <h2 id="pera-service-title">{profile.problem}</h2>
            <p>{profile.approach}</p>
          </div>
          <div>
            {profile.outcomes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ServiceProfileLayout({ profile }: { profile: ServiceProfile }) {
  const research = profile.layout === "research";
  const operating = profile.layout === "operations" || profile.layout === "dma";
  const pera = profile.layout === "pera";

  return (
    <>
      <PageHero
        eyebrow={profile.eyebrow}
        title={profile.title}
        description={profile.description}
        image={profile.image}
        imageAlt={profile.imageAlt}
      >
        <Link
          href={research ? "/insights" : "/contact"}
          className="ref-button-primary"
        >
          {research ? "Read CGSI research" : "Talk to CGSI"}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </PageHero>

      {research ? <ResearchService profile={profile} /> : null}
      {operating ? <OperatingService profile={profile} /> : null}
      {pera ? <PeraService profile={profile} /> : null}
      {!research && !operating && !pera ? <DecisionService profile={profile} /> : null}

      <CtaBand />
    </>
  );
}
