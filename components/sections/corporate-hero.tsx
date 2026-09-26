import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorporateHero() {
  return (
    <section className="airy-hero" aria-labelledby="home-title">
      <div className="site-container airy-hero-grid">
        <div className="airy-hero-copy">
          <p className="airy-eyebrow">Caballes-Go Securities, Inc.</p>
          <h1 id="home-title">
            Investing with
            <span> clarity and perspective.</span>
          </h1>
          <p className="airy-hero-lead">
            Philippine equity brokerage for individuals, families, and institutions who value
            informed decisions, disciplined execution, and direct human support.
          </p>
          <div className="airy-hero-actions">
            <Link href="/open-account" className="airy-primary-action">
              Open an account
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/insights" className="airy-secondary-action">
              Explore insights
            </Link>
          </div>
          <div className="airy-hero-proof" aria-label="Firm profile">
            <div>
              <strong>PSE</strong>
              <span>Trading Participant</span>
            </div>
            <div>
              <strong>Retail + Institutional</strong>
              <span>Client coverage</span>
            </div>
            <div>
              <strong>Research-led</strong>
              <span>Market perspective</span>
            </div>
          </div>
        </div>

        <div className="airy-hero-media">
          <Image
            src="/images/editorial/makati-dusk.jpg"
            alt="Makati skyline at dusk"
            fill
            priority
            sizes="(min-width: 960px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="airy-hero-caption">
            <span>Philippine markets</span>
            <span>Perspective for long-term decisions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
