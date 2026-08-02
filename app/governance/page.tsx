import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Governance & Oversight",
  description:
    "Understand the regulatory, market-integrity, privacy, financial-crime, and operational framework relevant to CGSI.",
};

const oversightAreas = [
  {
    title: "Market conduct & integrity",
    text: "Trading activity operates within exchange rules, securities regulation, and applicable market-conduct requirements.",
  },
  {
    title: "Investor protection",
    text: "Account processes, disclosures, suitability considerations, and client communication support informed participation.",
  },
  {
    title: "Anti-money laundering",
    text: "Client identification, monitoring, record keeping, and escalation form part of the financial-crime control framework.",
  },
  {
    title: "Data privacy & security",
    text: "Personal and account information is handled within applicable privacy and information-security obligations.",
  },
  {
    title: "Operational resilience",
    text: "Responsibilities, records, settlement processes, and exception handling support continuity and accurate follow-through.",
  },
  {
    title: "Financial consumer protection",
    text: "Transparent language, accessible support, and fair treatment are relevant across the client relationship.",
  },
] as const;

const authorities = [
  ["Securities and Exchange Commission", "https://www.sec.gov.ph/"],
  ["The Philippine Stock Exchange", "https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/"],
  ["Capital Markets Integrity Corporation", "https://cmic.com.ph/"],
  ["Anti-Money Laundering Council", "https://www.amlc.gov.ph/"],
  ["National Privacy Commission", "https://privacy.gov.ph/"],
] as const;

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & oversight"
        title="Governance and oversight for regulated market participation."
        description="Review the institutions, responsibilities, and control areas relevant to CGSI’s brokerage operations."
        image="/images/editorial/governance-building.jpg"
        imageAlt="A substantial modern office building at dusk"
      />

      <section className="py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why governance matters</p>
          </Reveal>
          <Reveal direction="right">
            <h2 className="max-w-4xl font-serif text-[clamp(2.35rem,4.4vw,4.4rem)] font-normal leading-[1.07] tracking-[-0.035em] text-[#104862]">
              Clients should be able to identify who is responsible, which rules apply, and where
              official information can be verified.
            </h2>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-[#5d737e]">
              CGSI is a Philippine broker-dealer and an active Trading Participant of The
              Philippine Stock Exchange. Current participant information is available through
              the official PSE directory.
            </p>
            <a
              href="https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/"
              target="_blank"
              rel="noreferrer"
              className="text-link mt-7"
            >
              View the official PSE participant record ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#104862]/12 bg-[#f1f4f1] py-20 lg:py-26">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow">Areas of oversight and control</p>
            <h2 className="section-title mt-5 max-w-3xl">One framework, several connected responsibilities.</h2>
          </Reveal>
          <div className="mt-11 grid border-y border-[#104862]/16 md:grid-cols-2 lg:grid-cols-3">
            {oversightAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={index * 0.03}
                className={`py-8 md:px-8 ${
                  index < 3 ? "border-b border-[#104862]/16" : ""
                } ${index % 3 !== 2 ? "lg:border-r" : ""} ${index % 2 === 0 ? "md:border-r lg:border-r" : ""}`}
              >
                <span className="text-xs font-bold text-[#0b8b2e]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-2xl font-normal text-[#104862]">{area.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#617782]">{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-18">
          <Reveal direction="left" className="relative min-h-[430px] overflow-hidden">
            <Image
              src="/images/editorial/operations-team.jpg"
              alt="Asian operations professionals reviewing account documents"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal direction="right">
            <p className="eyebrow">Operational ownership</p>
            <h2 className="section-title mt-5">Controls need people, records, and escalation paths.</h2>
            <p className="mt-6 text-sm leading-7 text-[#5d737e]">
              Policies alone do not complete the work. Effective control depends on understood
              responsibilities, accurate records, routine monitoring, and timely escalation when
              something falls outside the expected process.
            </p>
            <Link href="/governance/risk-management" className="btn btn-secondary mt-8">
              How CGSI approaches risk
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#104862]/12 bg-[#f5f1e9] py-20 lg:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Official institutions</p>
            <h2 className="section-title mt-5">Verify at the source.</h2>
          </Reveal>
          <div className="border-t border-[#104862]/18">
            {authorities.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center justify-between gap-5 border-b border-[#104862]/18 text-sm font-semibold text-[#104862] transition hover:text-[#0a8b2d]"
              >
                {label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
