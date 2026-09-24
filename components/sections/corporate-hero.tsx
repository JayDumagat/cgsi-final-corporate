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
          Personal expertise. A modern perspective.
        </p>
        <p>
          From market insight to broker-assisted trading and post-trade support,
          CGSI works alongside you at every step.
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
            src="/images/ret.jpeg"
            width={399}
            height={501}
            fetchPriority="high"
            alt="Illuminated high-rise tower against a deep blue evening sky"
          />
        </picture>
        <figcaption>
          <span>Perspective. Partnership. Progress.</span>
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
