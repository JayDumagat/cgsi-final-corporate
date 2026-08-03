import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/motion-primitives";
import { leadership } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "Meet the board and executive leadership of Caballes-Go Securities and the functions supporting CGSI clients.",
};

const functions = [
  ["Coverage & execution", "Client communication, market context, order clarification, and execution coordination."],
  ["Research", "Official-source market information, company disclosures, and investor education."],
  ["Operations", "Account documentation, trade confirmation, settlement, records, and service follow-through."],
  ["Compliance & risk", "Market conduct, control monitoring, financial-crime safeguards, and escalation."],
] as const;

export default function TeamPage() {
  return (
    <>
      <section className="team-masthead">
        <div className="site-container team-masthead-grid">
          <div>
            <p className="interior-kicker">Leadership & team</p>
            <h1>Clear responsibility across the firm.</h1>
            <p>
              CGSI’s board and executive leadership set the standard for client service,
              market conduct, operational discipline, and long-term stewardship.
            </p>
          </div>
          <div className="team-masthead-image">
            <Image
              src="/images/editorial/market-office.jpg"
              alt="A professional office with financial-market information on screen"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="board-directory">
        <div className="site-container board-directory-grid">
          <div className="board-directory-intro">
            <p className="section-label">Board & executive leadership</p>
            <h2>Accountability is named.</h2>
            <p>
              Leadership information is presented as a corporate directory. Role details should
              be read together with current company and regulatory disclosures.
            </p>
          </div>
          <div className="board-list">
            {leadership.map((person, index) => (
              <Reveal animate delay={index * 0.03} key={person.name}>
                <article>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{person.name}</h2>
                  <p>{person.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="team-functions">
        <div className="site-container">
          <div className="team-functions-heading">
            <p className="section-label section-label-on-dark">How the firm works</p>
            <h2>Specialist functions connected by client context.</h2>
          </div>
          <div className="team-functions-grid">
            {functions.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-governance-link">
        <div className="site-container">
          <div>
            <p className="section-label">Governance</p>
            <h2>See the framework behind leadership responsibility.</h2>
          </div>
          <Link href="/governance" className="btn btn-secondary">Governance & oversight</Link>
        </div>
      </section>
    </>
  );
}
