import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorporateHero() {
  return (
    <section className="corporate-hero site-container">
      <div className="corporate-hero-copy">
        <p className="section-label"><span className="hero-status-dot" aria-hidden="true" />PHILIPPINE EQUITY BROKERAGE</p>
        <h1>
          A partner
          <br />
          <span>beyond the trade.</span>
        </h1>
        <p className="corporate-hero-description">
          Market access with a human point of contact.
        </p>
        <p>
          Research, execution, and post-trade support for investors who value clear
          decisions, accountable service, and access to the Philippine equity market.
        </p>
        <div className="corporate-hero-actions">
          <Link className="btn btn-primary" href="/open-account">
            Open an account <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/insights">
            Market insights <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <figure className="corporate-hero-figure">
        <picture>
          <img
            src="/images/editorial/makati-dusk.jpg"
            width={2400}
            height={1600}
            fetchPriority="high"
            alt="Makati skyline at dusk, representing the Philippine business and capital market"
          />
        </picture>
        <figcaption>
          <span>Philippine market perspective. Professional execution.</span>
          <span>Caballes-Go Securities, Inc.</span>
        </figcaption>
      </figure>
      <nav className="hero-pathways" aria-label="Quick pathways">
        <Link href="/clients"><span>01</span><div><strong>Invest your way</strong><small>Find the right client pathway</small></div><ArrowRight aria-hidden="true" size={20}/></Link>
        <Link href="/services"><span>02</span><div><strong>Explore our expertise</strong><small>Support at every stage</small></div><ArrowRight aria-hidden="true" size={20}/></Link>
        <Link href="/resources"><span>03</span><div><strong>Find what you need</strong><small>Account forms and resources</small></div><ArrowRight aria-hidden="true" size={20}/></Link>
      </nav>
    </section>
  );
}
