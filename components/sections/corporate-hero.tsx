import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorporateHero() {
  return (
    <section className="ref-home-hero" aria-labelledby="home-title">
      <div className="site-container ref-home-hero-grid">
        <div className="ref-home-hero-copy">
          <p className="ref-kicker">Philippine equity brokerage</p>
          <h1 id="home-title">Trade the Philippine market with a broker you can reach.</h1>
          <p>
            Research, broker-assisted execution, and post-trade support for individual and
            institutional investors.
          </p>
          <div className="ref-home-hero-actions">
            <Link href="/open-account" className="ref-button-primary">
              Open an account
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/insights" className="ref-button-link">Read market research</Link>
          </div>
        </div>

        <figure className="ref-home-hero-image">
          <Image
            src="/images/editorial/makati-dusk.jpg"
            alt="Makati skyline at dusk"
            fill
            priority
            sizes="(min-width: 960px) 52vw, 100vw"
            className="object-cover"
          />
          <figcaption>Philippine markets · Metro Manila</figcaption>
        </figure>
      </div>

      <div className="site-container ref-proof-bar" aria-label="Caballes-Go Securities credentials">
        <div><span>Status</span><strong>Active PSE Trading Participant</strong></div>
        <div><span>License</span><strong>Broker-Dealer</strong></div>
        <div><span>Clients</span><strong>Retail & Institutional</strong></div>
        <div><span>Research</span><strong>Publications available</strong></div>
      </div>
    </section>
  );
}
