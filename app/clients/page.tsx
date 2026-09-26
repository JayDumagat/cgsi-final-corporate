import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { clientProfiles } from "@/content/profiles";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Explore CGSI client pathways for new investors, individuals and families, OFWs and seafarers, corporations, and institutions.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="Different investors need different kinds of support."
        description="Choose the pathway that best matches your circumstances. Each page explains the practical concerns, service model, and next step without assuming the same level of market experience."
        image="/images/editorial/advisor-clients.jpg"
        imageAlt="An adviser speaking with clients at a table"
      />

      <section className="clean-directory">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Client pathways</p>
            <h2>Start with your situation.</h2>
          </div>

          <div className="clean-directory-list">
            {clientProfiles.map((profile, index) => (
              <Link href={`/clients/${profile.slug}`} key={profile.slug}>
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

      <section className="clean-feature-split">
        <div className="site-container clean-feature-split-grid">
          <div className="clean-feature-split-image">
            <Image
              src="/images/editorial/institutional-team.jpg"
              alt="Professionals discussing documents in a meeting"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="clean-eyebrow">Not sure where to begin?</p>
            <h2>Tell us what you are trying to accomplish.</h2>
            <p>
              CGSI can help identify the appropriate account, service, or information pathway
              before you prepare documents or make an investment decision.
            </p>
            <Link href="/contact" className="clean-primary-button">
              Contact CGSI
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
