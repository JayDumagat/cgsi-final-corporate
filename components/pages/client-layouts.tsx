import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import type { ClientProfile } from "@/content/profiles";

export function ClientProfileLayout({ profile }: { profile: ClientProfile }) {
  const isNewInvestor = profile.slug === "new-investors";
  const isInstitution = profile.slug === "institutions";

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
          href={isNewInvestor ? "/insights/guides" : "/contact"}
          className="clean-primary-button"
        >
          {isNewInvestor ? "Start with investor guides" : isInstitution ? "Discuss a mandate" : "Speak with CGSI"}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="clean-profile-intro">
        <div className="site-container clean-profile-intro-grid">
          <div>
            <p className="clean-eyebrow">What matters</p>
            <h2>{profile.problemTitle}</h2>
            <p>{profile.problem}</p>
          </div>
          <aside>
            <p className="clean-eyebrow">Our approach</p>
            <h3>{profile.solutionTitle}</h3>
            <p>{profile.solution}</p>
          </aside>
        </div>
      </section>

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Key priorities</p>
            <h2>Keep the important things visible.</h2>
          </div>
          <div className="clean-list">
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

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">How we work</p>
            <h2>A simple path from context to action.</h2>
          </div>
          <ol>
            {profile.steps.map((step, index) => (
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
      </section>

      <CtaBand />
    </>
  );
}
