import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { serviceProfiles } from "@/content/profiles";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Explore CGSI brokerage services across trading, execution, research, market access, retirement investing, settlement, and custody.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Professional support around the trade."
        description="CGSI connects research, execution, market access, and post-trade operations so clients can work with a clearer service model."
        image="/images/editorial/trading-research.jpg"
        imageAlt="A market professional reviewing financial information across trading screens"
      />

      <section className="clean-directory">
        <div className="site-container">
          <div className="clean-section-heading clean-section-heading-wide">
            <p className="clean-eyebrow">Services</p>
            <h2>Use what you need. Go deeper when the mandate requires it.</h2>
          </div>

          <div className="clean-directory-list">
            {serviceProfiles.map((profile, index) => (
              <Link href={`/services/${profile.slug}`} key={profile.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{profile.eyebrow}</small>
                  <h3>{profile.title}</h3>
                  <p>{profile.description}</p>
                </div>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-feature-split is-reverse">
        <div className="site-container clean-feature-split-grid">
          <div className="clean-feature-split-image">
            <Image
              src="/images/editorial/operations-team.jpg"
              alt="Operations professionals working together in an office"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="clean-eyebrow">Institutional requirements</p>
            <h2>Professional mandates need operational clarity.</h2>
            <p>
              Corporate and institutional relationships may require defined authorities,
              communication protocols, market-access controls, settlement coordination, and
              reporting expectations.
            </p>
            <Link href="/clients/institutions" className="clean-primary-button">
              Institutional client services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
