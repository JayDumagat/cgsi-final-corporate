import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "About CGSI",
  description:
    "Learn about Caballes-Go Securities, its purpose, operating principles, leadership, governance, and recent corporate history.",
};

const principles = [
  ["Clarity", "Explain the decision, the process, and the risk in language clients can use."],
  ["Accountability", "Keep ownership of communication, execution, settlement, and support visible."],
  ["Discipline", "Operate with the controls and care expected in a regulated securities market."],
  ["Adaptability", "Use modern systems and better digital experiences without losing human responsibility."],
] as const;

const history = [
  ["Sep 2024", "Primary and secondary licenses were approved and issued to MVG Securities."],
  ["Oct 2024", "The Philippine Stock Exchange accepted MVG Securities as a Trading Participant."],
  ["Nov 2024", "The company adopted the Caballes-Go Securities, Inc. corporate name."],
  ["Apr 2025", "CGSI commenced trading operations under its current identity."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CGSI"
        title="A modern brokerage with institutional discipline."
        description="Caballes-Go Securities serves retail, high-net-worth, corporate, and institutional clients in the Philippine equity market."
        image="/images/editorial/governance-building.jpg"
        imageAlt="A modern office building at dusk"
      />

      <section className="clean-about-statement">
        <div className="site-container clean-about-statement-grid">
          <p className="clean-eyebrow">Our point of view</p>
          <div>
            <h2>Technology should make the relationship simpler—not less accountable.</h2>
            <p>
              CGSI combines modern systems with direct human ownership of client communication,
              execution, settlement, research, and support. The aim is a brokerage experience that
              feels current without becoming impersonal.
            </p>
          </div>
        </div>
      </section>

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Operating principles</p>
            <h2>Standards clients should be able to notice.</h2>
          </div>
          <div className="clean-list">
            {principles.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-about-history">
        <div className="site-container clean-about-history-grid">
          <div className="clean-about-history-image">
            <Image
              src="/images/editorial/makati-dusk.jpg"
              alt="Makati business district at dusk"
              fill
              sizes="(min-width: 900px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="clean-eyebrow">Recent corporate history</p>
            <h2>The current CGSI chapter.</h2>
            <div className="clean-timeline">
              {history.map(([date, event]) => (
                <div key={date}>
                  <time>{date}</time>
                  <p>{event}</p>
                </div>
              ))}
            </div>
            <small>
              Dates summarize recent corporate history and should be read alongside official
              regulatory and exchange records.
            </small>
          </div>
        </div>
      </section>

      <section className="clean-about-links">
        <div className="site-container clean-about-links-grid">
          <div>
            <p className="clean-eyebrow">Leadership</p>
            <h3>Meet the people responsible for the firm.</h3>
            <Link href="/about/team">Leadership & team <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <div>
            <p className="clean-eyebrow">Governance</p>
            <h3>Review oversight, controls, and risk management.</h3>
            <Link href="/governance">Governance & oversight <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
