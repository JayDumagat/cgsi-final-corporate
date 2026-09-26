import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CorporateHero() {
  return (
    <section className="clean-hero" aria-labelledby="home-title">
      <div className="site-container clean-hero-grid">
        <div className="clean-hero-copy">
          <p className="clean-eyebrow">Philippine equity brokerage</p>
          <h1 id="home-title">Invest with clarity.</h1>
          <p className="clean-hero-lead">
            Market access, research, and human support for investors navigating the Philippine
            equity market.
          </p>
          <div className="clean-hero-actions">
            <Link href="/open-account" className="clean-primary-button">
              Open an account
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/insights" className="clean-text-link">
              Explore research
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="clean-hero-note">
            For retail, high-net-worth, corporate, and institutional clients.
          </p>
        </div>

        <figure className="clean-hero-visual">
          <Image
            src="/images/editorial/makati-dusk.jpg"
            alt="Makati business district at dusk"
            fill
            priority
            sizes="(min-width: 900px) 48vw, 100vw"
            className="object-cover"
          />
          <figcaption>
            <span>Philippine market perspective</span>
            <span>Caballes-Go Securities, Inc.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
