import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { pressReleases } from "@/content/market-content";

export const metadata: Metadata = {
  title: "Pressroom",
  description:
    "CGSI company facts, corporate milestones, official releases, leadership resources, and media-enquiry information.",
};

export default function PressroomPage() {
  return (
    <>
      <section className="corporate-press-hero">
        <div className="corporate-press-media">
          <Image
            src="/images/editorial/makati-aerial.jpg"
            alt="Metro Manila and its business districts seen from above"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="corporate-press-overlay" aria-hidden="true" />
        <div className="site-container corporate-press-copy">
          <p className="interior-kicker">About CGSI / Pressroom</p>
          <h1>Company information for media and stakeholders.</h1>
          <p>
            Corporate milestones, leadership resources, official references, and the appropriate
            contact for enquiries about Caballes-Go Securities, Inc.
          </p>
        </div>
      </section>

      <section className="press-facts">
        <div className="site-container press-facts-grid">
          <div>
            <p className="section-label">Company facts</p>
            <h2>Caballes-Go Securities, Inc.</h2>
          </div>
          <dl>
            <div><dt>Industry</dt><dd>Philippine equity brokerage</dd></div>
            <div><dt>Corporate identity</dt><dd>Adopted in 2024</dd></div>
            <div><dt>Trading operations</dt><dd>Commenced in 2025</dd></div>
            <div><dt>Head office</dt><dd>Ortigas Center, Pasig City</dd></div>
          </dl>
        </div>
      </section>

      <section className="press-release-register">
        <div className="site-container press-release-grid">
          <div>
            <p className="section-label section-label-on-dark">Corporate releases</p>
            <h2>Official company milestones.</h2>
          </div>
          <div>
            {pressReleases.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <time>{item.date}</time>
                <span>{item.type}</span>
                <strong>{item.title}</strong>
                <em>Official reference ↗</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="press-resources">
        <div className="site-container">
          <div><p className="section-label">Media resources</p><h2>Background and contacts.</h2></div>
          <div>
            <Link href="/about">Company profile <span aria-hidden="true">→</span></Link>
            <Link href="/about/team">Leadership directory <span aria-hidden="true">→</span></Link>
            <Link href="/governance">Governance overview <span aria-hidden="true">→</span></Link>
            <a href="mailto:admin@caballes-go.com?subject=Media%20Enquiry">
              Media enquiries <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
