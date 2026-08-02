import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Platforms",
  description:
    "Explore CGSI investment access channels and the framework for introducing future approved platforms and programs.",
};

export default function PlatformsPage() {
  return (
    <>
      <section className="platforms-hero">
        <div className="site-container platforms-hero-grid">
          <div>
            <p className="interior-kicker">Investment platforms</p>
            <h1>Access that can evolve without losing accountability.</h1>
            <p>
              CGSI’s platform architecture is designed to support approved access channels and
              programs while keeping service ownership, risk information, and availability clear.
            </p>
          </div>
          <div className="platforms-hero-image">
            <Image
              src="/images/editorial/market-office.jpg"
              alt="A financial market screen in a modern professional office"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="platform-directory">
        <div className="site-container platform-directory-grid">
          <div>
            <p className="section-label">Current access</p>
            <h2>Begin with the service available today.</h2>
          </div>
          <article>
            <span>Available</span>
            <h3>Broker-assisted market access</h3>
            <p>
              Communicate instructions through a professional relationship supported by
              execution, research context, and post-trade coordination.
            </p>
            <Link href="/services/broker-assisted-trading">Explore broker-assisted trading →</Link>
          </article>
        </div>
      </section>

      <section className="platform-framework">
        <div className="site-container">
          <div className="platform-framework-heading">
            <p className="section-label section-label-on-dark">Built to extend</p>
            <h2>New offerings enter a consistent product framework.</h2>
          </div>
          <div className="platform-framework-grid">
            <article><span>01</span><h3>Availability</h3><p>Show whether an offering is current, limited, planned, or retired.</p></article>
            <article><span>02</span><h3>Audience</h3><p>Explain who the access channel or program is intended to serve.</p></article>
            <article><span>03</span><h3>Requirements</h3><p>Make eligibility, onboarding, and operating conditions visible.</p></article>
            <article><span>04</span><h3>Risk & support</h3><p>Keep material risk information and the accountable service team close to the offering.</p></article>
          </div>
          <p className="platform-framework-note">
            Examples such as direct market access or PERA-related services would only appear as
            available after CGSI confirms the relevant product, operational, and regulatory
            requirements. This page does not represent those examples as currently offered.
          </p>
        </div>
      </section>

      <section className="platform-contact">
        <div className="site-container">
          <div><p className="section-label">Current availability</p><h2>Discuss the access your account requires.</h2></div>
          <Link href="/contact" className="btn btn-secondary">Contact CGSI</Link>
        </div>
      </section>
    </>
  );
}
