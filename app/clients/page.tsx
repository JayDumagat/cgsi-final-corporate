import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/motion-primitives";
import { clientProfiles } from "@/content/profiles";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Explore how CGSI serves individuals, families, OFWs, seafarers, new investors, corporations, and institutions.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="clients-masthead">
        <div className="site-container clients-masthead-grid">
          <div className="clients-masthead-image">
            <Image
              src="/images/editorial/advisor-clients.jpg"
              alt="An adviser reviewing documents with clients"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="clients-masthead-copy">
            <p className="interior-kicker">Who we serve</p>
            <h1>The relationship should fit the investor around it.</h1>
            <p>
              Different responsibilities, time horizons, and operating mandates call for
              different service conversations—not a single generic journey.
            </p>
          </div>
        </div>
      </section>

      <section className="audience-directory">
        <div className="site-container">
          <div className="audience-directory-heading">
            <div>
              <p className="section-label">Client pathways</p>
              <h2>Begin with your circumstances.</h2>
            </div>
            <p>
              Choose the pathway closest to your needs. Each page explains the problem CGSI is
              designed to address, the service approach, and what the relationship requires.
            </p>
          </div>
          <div className="audience-directory-grid">
            {clientProfiles.map((profile, index) => (
              <Reveal animate delay={index * 0.035} key={profile.slug}>
                <Link href={`/clients/${profile.slug}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{profile.eyebrow}</h2>
                  <p>{profile.description}</p>
                  <em>Explore this pathway →</em>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-principle">
        <div className="site-container audience-principle-grid">
          <div>
            <p className="section-label section-label-on-dark">Our service principle</p>
            <h2>Purpose before product.</h2>
          </div>
          <div>
            <p>
              An investment is useful only when its risk, liquidity, and time horizon make sense
              for the responsibility or mandate it needs to serve.
            </p>
            <Link href="/why-equities" className="btn btn-on-dark">
              Compare common investment products
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
