import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Risk Management",
  description:
    "Learn how CGSI frames client investment risk and operational risk through clear constraints, controls, and escalation.",
};

const clientRisk = [
  ["Purpose", "What the capital needs to do and when it may be required."],
  ["Capacity", "The financial loss or volatility the client can absorb without compromising essential needs."],
  ["Tolerance", "The level of uncertainty and price movement the client can realistically sustain."],
  ["Concentration", "The effect of one issuer, sector, or position on the whole portfolio."],
  ["Liquidity", "The ability to transact at an available market price when funds are needed."],
] as const;

const operationalRisk = [
  ["Clear authority", "Understand who may provide instructions and how those instructions are confirmed."],
  ["Accurate records", "Maintain the information needed to support transactions, accounts, and required reporting."],
  ["Process ownership", "Assign responsibility for execution, settlement, custody, support, and exception handling."],
  ["Monitoring & escalation", "Identify unusual activity or process breaks and route them to the appropriate control owner."],
] as const;

export default function RiskManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Risk management"
        title="Make the constraints visible before making the move."
        description="Risk cannot be removed from investing or brokerage operations. It can be identified, discussed, bounded, monitored, and escalated with greater discipline."
        image="/images/editorial/research-meeting.jpg"
        imageAlt="A financial professional explaining market information during a meeting"
      />

      <section className="py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Client investment risk</p>
            <h2 className="section-title mt-5">Suitability starts with real-world capacity.</h2>
            <p className="mt-6 text-sm leading-7 text-[#5d737e]">
              Price volatility is only one part of risk. Time, liquidity, obligations,
              concentration, behavior, and the possibility of permanent capital loss also matter.
            </p>
          </Reveal>
          <div className="border-t border-[#104862]/16">
            {clientRisk.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.035}>
                <div className="grid gap-3 border-b border-[#104862]/16 py-6 sm:grid-cols-[52px_0.55fr_1.45fr] sm:gap-6">
                  <span className="text-xs font-bold text-[#0b8b2e]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#104862]">{title}</h3>
                  <p className="text-sm leading-6 text-[#617782]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#104862]/12 bg-[#f1f4f1] py-20 lg:py-26">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Operational risk</p>
            <h2 className="section-title mt-5">Disciplined processes around the transaction.</h2>
          </Reveal>
          <div className="mt-11 grid border-y border-[#104862]/16 md:grid-cols-2 lg:grid-cols-4">
            {operationalRisk.map(([title, text], index) => (
              <Reveal
                key={title}
                delay={index * 0.04}
                className={`py-8 md:px-8 ${index < 3 ? "lg:border-r" : ""} ${index < 2 ? "border-b md:border-b-0 md:border-r" : ""}`}
              >
                <span className="text-xs font-bold text-[#0b8b2e]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-2xl font-normal text-[#104862]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#617782]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="site-container flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="eyebrow">Important distinction</p>
            <h2 className="mt-5 max-w-3xl font-serif text-3xl font-normal leading-[1.15] text-[#104862] sm:text-4xl">
              Risk management supports better decisions. It does not guarantee an investment outcome.
            </h2>
          </Reveal>
          <Reveal direction="right">
            <Link href="/disclosures" className="btn btn-secondary shrink-0">Read important disclosures</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
