import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorporateHero() {
  return (
    <section className="airy-hero" aria-labelledby="home-title">
      <div className="site-container airy-hero-grid">
        <div className="airy-hero-copy">
          <p className="airy-eyebrow">Philippine equity brokerage</p>
          <h1 id="home-title">Clear access to Philippine equities.</h1>
          <p className="airy-hero-lead">
            Caballes-Go Securities, Inc. provides research, execution, and post-trade support for
            individual and institutional investors.
          </p>

          <div className="airy-hero-actions">
            <Link href="/open-account" className="airy-primary-action">
              Open an account
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="airy-secondary-action">
              Explore services
            </Link>
          </div>

          <dl className="airy-hero-proof" aria-label="Firm profile">
            <div>
              <dt>PSE status</dt>
              <dd>Active Trading Participant</dd>
            </div>
            <div>
              <dt>Client service</dt>
              <dd>Retail & institutional</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>Publications available</dd>
            </div>
          </dl>
        </div>

        <figure className="airy-hero-media">
          <Image
            src="/images/editorial/makati-dusk.jpg"
            alt="Makati business district at dusk"
            fill
            priority
            sizes="(min-width: 960px) 46vw, 100vw"
            className="object-cover"
          />
          <figcaption>
            Philippine markets
            <span>Metro Manila</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
