import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Disclosures and Disclaimer",
  description: "Important investment-risk, research, conflict, and website disclosures from Caballes-Go Securities.",
};

const disclosures = [
  {
    number: "01",
    title: "General information only",
    text: "Website and research content is for general information. Unless expressly stated in an applicable engagement, it is not an offer, solicitation, personalized recommendation, or instruction to buy, sell, or hold a security or financial product.",
  },
  {
    number: "02",
    title: "Investment risk",
    text: "Securities investments involve risk, including the potential loss of principal. Market prices can rise or fall, liquidity may change, and past performance does not guarantee future results.",
  },
  {
    number: "03",
    title: "Information and forward-looking statements",
    text: "Information may come from sources believed to be reliable, but accuracy, completeness, or timeliness cannot be guaranteed. Opinions, estimates, forecasts, and forward-looking statements may change without notice and may not occur as expected.",
  },
  {
    number: "04",
    title: "Conflicts of interest",
    text: "CGSI, its affiliates, directors, officers, or employees may hold interests in securities discussed or maintain business relationships that create potential conflicts. Policies and controls are used to identify and manage conflicts in accordance with applicable requirements.",
  },
];

export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclosures and disclaimer"
        description="Read this information before relying on website, research, or market commentary. Investment decisions should account for your own circumstances and, where appropriate, independent financial, legal, tax, or professional advice."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="site-container border-t border-[#104862]/18">
          {disclosures.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="grid gap-5 border-b border-[#104862]/18 py-9 sm:grid-cols-[62px_0.65fr_1.35fr] sm:gap-8">
              <span className="font-display text-4xl font-semibold text-[#00a800]">{item.number}</span>
              <h2 className="font-display text-4xl font-semibold leading-[0.98] text-[#104862]">{item.title}</h2>
              <p className="text-sm leading-7 text-[#536b77]">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="site-container mt-12 max-w-4xl">
          <Reveal className="bg-[#f4f8f7] p-7 sm:p-10">
            <h2 className="font-display text-4xl font-semibold text-[#104862]">Additional conditions</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#536b77]">
              <p>
                Website material does not consider the financial situation, investment objective,
                experience, or risk tolerance of a particular person. Users are responsible for
                assessing whether information or a security is appropriate for their circumstances.
              </p>
              <p>
                CGSI is not responsible for loss arising solely from reliance on general website
                content, to the extent permitted by law. Links to third-party websites are provided
                for convenience; their content and availability are controlled by their respective
                owners.
              </p>
              <p>
                Material may be restricted from distribution or use in a jurisdiction where doing
                so would violate local law or create licensing, registration, or other regulatory
                obligations.
              </p>
              <p>
                Unauthorized reproduction or redistribution of CGSI research or proprietary material
                is prohibited unless written permission is obtained.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
