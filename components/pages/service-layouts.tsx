import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import type { ServiceProfile } from "@/content/profiles";

export function ServiceProfileLayout({ profile }: { profile: ServiceProfile }) {
  const research = profile.slug === "research";
  const institutional = profile.slug === "direct-market-access";

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
          className="clean-primary-button"
        >
          {research ? "Visit the research desk" : institutional ? "Discuss market access" : "Speak with CGSI"}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="clean-profile-intro">
        <div className="site-container clean-profile-intro-grid">
          <div>
            <p className="clean-eyebrow">The need</p>
            <h2>Why this service matters.</h2>
            <p>{profile.problem}</p>
          </div>
          <aside>
            <p className="clean-eyebrow">How CGSI approaches it</p>
            <h3>Clarity before execution.</h3>
            <p>{profile.approach}</p>
          </aside>
        </div>
      </section>

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">What clients can expect</p>
            <h2>Professional support without unnecessary complexity.</h2>
          </div>
          <div className="clean-list">
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

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">Process</p>
            <h2>Clear steps. Clear ownership.</h2>
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
      </section>

      <CtaBand />
    </>
  );
}
