import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "About CGSI",
  description:
    "Learn about Caballes-Go Securities, its purpose, operating principles, leadership, and recent corporate history.",
};

const principles = [
  ["Precision", "Clear instructions, careful execution, and attention to the records behind each transaction."],
  ["Accountability", "Visible ownership of client communication, execution, settlement, and support."],
  ["Integrity", "Transparent risk language, ethical conduct, and respect for a regulated market."],
  ["Adaptability", "Modern systems supported by disciplined, repeatable operating processes."],
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
      <section className="company-intro">
        <div className="site-container company-intro-grid">
          <div className="company-intro-copy">
            <p className="interior-kicker">About CGSI</p>
            <h1>A modern brokerage grounded in enduring standards.</h1>
            <p>
              Caballes-Go Securities, Inc. serves individual, family, corporate, and
              institutional clients through informed decisions, disciplined execution, and
              accountable support.
            </p>
          </div>
          <div className="company-intro-image">
            <Image
              src="/images/editorial/governance-building.jpg"
              alt="A substantial contemporary office building at dusk"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <span>Corporate profile</span>
          </div>
        </div>
      </section>

      <section className="company-statement">
        <div className="site-container company-statement-grid">
          <Reveal animate>
            <p className="section-label">Our point of view</p>
            <span>01 / Purpose</span>
          </Reveal>
          <Reveal animate direction="right">
            <h2>
              Technology helps the work move. People remain accountable for how the work is done.
            </h2>
            <div>
              <p>
                CGSI brings client service, market information, execution, and account operations
                into a more coherent brokerage relationship.
              </p>
              <p>
                Different clients bring different circumstances and mandates. The firm applies
                the same expectation for clarity, responsiveness, and regulatory discipline to
                each relationship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="company-principles">
        <div className="site-container">
          <div className="company-principles-heading">
            <p className="section-label">Operating principles</p>
            <h2>Standards clients should be able to observe.</h2>
          </div>
          <div className="company-principles-grid">
            {principles.map(([title, text], index) => (
              <Reveal animate delay={index * 0.035} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="company-history">
        <div className="site-container company-history-grid">
          <div className="company-history-media">
            <Image
              src="/images/editorial/makati-dusk.jpg"
              alt="The Makati business district at dusk"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div>
              <span>Recent corporate history</span>
              <strong>From market-participant approval to operating under the CGSI name.</strong>
            </div>
          </div>
          <div className="company-timeline">
            {history.map(([date, event], index) => (
              <Reveal animate delay={index * 0.035} key={date}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time>{date}</time>
                  <p>{event}</p>
                </div>
              </Reveal>
            ))}
            <p className="company-history-note">
              Dates summarize CGSI’s recent corporate history. Current status should be verified
              through the relevant official directories.
            </p>
          </div>
        </div>
      </section>

      <section className="company-people">
        <div className="site-container company-people-grid">
          <div>
            <p className="section-label section-label-on-dark">People & governance</p>
            <h2>Meet the people responsible for the firm.</h2>
          </div>
          <div>
            <p>
              Explore CGSI’s board and executive leadership, then review the governance and
              oversight structure behind its market participation.
            </p>
            <div>
              <Link href="/about/team" className="btn btn-primary">Leadership & team</Link>
              <Link href="/governance" className="btn btn-on-dark">Governance & oversight</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="company-careers-link">
        <div className="site-container">
          <p>Careers at CGSI</p>
          <h2>Help build the next chapter of Philippine capital markets.</h2>
          <Link href="/careers">Explore careers <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
