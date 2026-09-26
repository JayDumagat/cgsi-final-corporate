import { ArrowRight, BookOpenText, Building2, Check, Globe2, UsersRound } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import type { ClientProfile } from "@/content/profiles";

function LearningLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="ref-learning-primer" aria-labelledby="learning-primer-title">
        <div className="site-container ref-learning-primer-grid">
          <div>
            <p className="ref-kicker">Before the first trade</p>
            <h2 id="learning-primer-title">{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
            <Link href="/insights/guides" className="ref-text-link">
              Browse investor guides <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <ol>
            {profile.priorities.map((item, index) => (
              <li key={item.title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ref-learning-path" aria-labelledby="learning-path-title">
        <div className="site-container">
          <div className="ref-section-intro ref-section-intro-horizontal">
            <div>
              <p className="ref-kicker">A practical starting path</p>
              <h2 id="learning-path-title">Learn. Prepare. Begin.</h2>
            </div>
            <p>{profile.solution}</p>
          </div>

          <div className="ref-learning-steps">
            {profile.steps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InstitutionalLayout({ profile }: { profile: ClientProfile }) {
  return (
    <>
      <section className="ref-mandate-brief" aria-labelledby="mandate-brief-title">
        <div className="site-container ref-mandate-brief-grid">
          <div>
            <p className="ref-kicker">Mandate setup</p>
            <h2 id="mandate-brief-title">{profile.problemTitle}</h2>
          </div>
          <div>
            <p>{profile.problem}</p>
            <p>{profile.solution}</p>
            <Link href="/contact" className="ref-text-link">
              Discuss a mandate <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ref-mandate-operating" aria-label="Institutional operating model">
        <div className="site-container">
          <div className="ref-mandate-columns">
            {profile.priorities.map((item, index) => (
              <article key={item.title}>
                {index === 0 ? <Building2 aria-hidden="true" /> : index === 1 ? <UsersRound aria-hidden="true" /> : <Check aria-hidden="true" />}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="ref-mandate-flow">
            {profile.steps.map((step, index) => (
              <div key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PrivateClientLayout({ profile }: { profile: ClientProfile }) {
  const global = profile.layout === "global";

  return (
    <>
      <section className={`ref-private-context ${global ? "is-global" : ""}`} aria-labelledby="private-context-title">
        <div className="site-container ref-private-context-grid">
          <div className="ref-private-context-icon" aria-hidden="true">
            {global ? <Globe2 /> : <UsersRound />}
          </div>
          <div>
            <p className="ref-kicker">{global ? "Investing across distance" : "Investing around real life"}</p>
            <h2 id="private-context-title">{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
          </div>
          <aside>
            <p className="ref-kicker">Where CGSI fits</p>
            <h3>{profile.solutionTitle}</h3>
            <p>{profile.solution}</p>
          </aside>
        </div>
      </section>

      <section className="ref-private-priorities" aria-labelledby="private-priorities-title">
        <div className="site-container">
          <div className="ref-section-intro ref-section-intro-horizontal">
            <div>
              <p className="ref-kicker">Keep these visible</p>
              <h2 id="private-priorities-title">{global ? "A process that works when you are away." : "The account should fit the life around it."}</h2>
            </div>
            <p>Three practical considerations shape the relationship before any individual security does.</p>
          </div>

          <div className="ref-private-priority-list">
            {profile.priorities.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
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

export function ClientProfileLayout({ profile }: { profile: ClientProfile }) {
  const isLearning = profile.layout === "learning";
  const isInstitutional = profile.layout === "institutional";

  return (
    <>
      <PageHero
        eyebrow={profile.eyebrow}
        title={profile.title}
        description={profile.description}
        image={profile.image}
        imageAlt={profile.imageAlt}
        imagePosition={profile.imagePosition}
      >
        <Link
          href={isLearning ? "/insights/guides" : isInstitutional ? "/contact" : "/open-account"}
          className="ref-button-primary"
        >
          {isLearning ? "Start learning" : isInstitutional ? "Discuss a mandate" : "Account requirements"}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
        {isLearning ? (
          <Link href="/open-account" className="ref-button-link">See account requirements</Link>
        ) : null}
      </PageHero>

      {isLearning ? <LearningLayout profile={profile} /> : null}
      {isInstitutional ? <InstitutionalLayout profile={profile} /> : null}
      {!isLearning && !isInstitutional ? <PrivateClientLayout profile={profile} /> : null}

      <CtaBand />
    </>
  );
}
