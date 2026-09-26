import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About CGSI",
  description:
    "Company information, leadership, governance, and recent history of Caballes-Go Securities, Inc.",
};

const facts = [
  ["Market status", "Active PSE Trading Participant"],
  ["License", "Broker-Dealer"],
  ["Client service", "Retail & Institutional"],
  ["Research", "Publications available"],
] as const;

const history = [
  ["2024", "The company adopted the Caballes-Go Securities, Inc. corporate identity following its transition from MVG Securities."],
  ["2025", "CGSI began trading operations under its current name and business direction."],
  ["Today", "The firm serves retail and institutional clients in the Philippine equity market."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="rl-about-hero" aria-labelledby="about-title">
        <div className="site-container rl-about-hero-grid">
          <div>
            <p className="rl-kicker">Company</p>
            <h1 id="about-title">A Philippine broker-dealer built for a market that keeps changing.</h1>
            <p>
              Caballes-Go Securities, Inc. combines experienced market professionals, regulated
              brokerage operations, and a willingness to improve how clients access information and service.
            </p>
          </div>
          <figure>
            <Image
              src="/images/editorial/governance-building.jpg"
              alt="Modern office building at dusk"
              fill
              priority
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-company-facts" aria-labelledby="facts-title">
        <div className="site-container">
          <div>
            <p className="rl-kicker">Firm profile</p>
            <h2 id="facts-title">The essentials, without the corporate filler.</h2>
          </div>
          <dl>
            {facts.map(([term, value]) => (
              <div key={term}><dt>{term}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="rl-about-story" aria-labelledby="story-title">
        <div className="site-container rl-about-story-grid">
          <figure>
            <Image
              src="/images/editorial/cgsi-professionals.jpg"
              alt="Financial professionals collaborating in an office"
              fill
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
          <div>
            <p className="rl-kicker">How CGSI works</p>
            <h2 id="story-title">Modern tools are useful only when responsibility stays clear.</h2>
            <p>
              CGSI’s digital direction is meant to make research, account information, and client
              service easier to reach while keeping brokerage responsibility with identifiable people and teams.
            </p>
            <div>
              <Link href="/about/team">Leadership & team <ArrowRight size={15} aria-hidden="true" /></Link>
              <Link href="/governance">Governance & oversight <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rl-history" aria-labelledby="history-title">
        <div className="site-container">
          <div>
            <p className="rl-kicker">Recent history</p>
            <h2 id="history-title">The current CGSI chapter.</h2>
          </div>
          <div>
            {history.map(([date, event]) => (
              <article key={date}><time>{date}</time><p>{event}</p></article>
            ))}
          </div>
          <Link href="/about/pressroom">
            Company facts & pressroom
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
