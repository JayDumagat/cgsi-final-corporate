import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Overview of how Caballes-Go Securities handles personal data and privacy inquiries.",
};

const sections = [
  {
    title: "Information that may be collected",
    paragraphs: [
      "Depending on your relationship with CGSI, personal data may include identity and contact details, account and tax information, financial information, employment or business information, transaction and communication records, and other information required for brokerage services or regulatory obligations.",
      "Information may be provided directly by you or your authorized representative, generated through your transactions or interactions, or obtained from lawful public and third-party sources.",
    ],
  },
  {
    title: "Why information is processed",
    paragraphs: [
      "CGSI may process personal data to evaluate and establish a client relationship, provide and administer services, verify identity, comply with legal and regulatory obligations, prevent fraud, manage risk, communicate with you, maintain records, and protect legitimate business and client interests.",
      "Certain information is necessary to meet account-opening, know-your-client, anti-money-laundering, tax, market, and other regulatory requirements. If required information is not provided, CGSI may be unable to establish or continue a service relationship.",
    ],
  },
  {
    title: "Access, protection, and retention",
    paragraphs: [
      "Access to personal information is limited to authorized persons with a legitimate purpose. CGSI uses administrative, technical, and physical safeguards appropriate to the nature of the information and the risks involved.",
      "Records are retained for periods required or permitted by applicable laws, regulations, contractual duties, dispute requirements, and legitimate business purposes, after which they are securely disposed of or anonymized where appropriate.",
    ],
  },
  {
    title: "Sharing and service providers",
    paragraphs: [
      "Information may be disclosed to regulators, market institutions, government authorities, professional advisers, counterparties, banks, technology and service providers, and other recipients where required for a lawful purpose. Relevant safeguards and confidentiality requirements apply according to the relationship and applicable law.",
    ],
  },
  {
    title: "Your data privacy rights",
    paragraphs: [
      "Subject to the Philippine Data Privacy Act of 2012 and its implementing rules, you may have rights to be informed, access personal data, object to certain processing, request correction or deletion where applicable, obtain data portability in qualifying cases, and seek remedies for violations.",
      "Rights may be limited where processing is required by law, necessary for legal claims, or subject to another lawful exception.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="CGSI values the privacy of clients, prospects, employees, and other individuals whose personal data it processes. This page provides a plain-language overview and should be reviewed together with the current official privacy statement and applicable notices."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <article className="max-w-3xl">
            {sections.map((section, index) => (
              <Reveal key={section.title} className={index ? "mt-12" : ""}>
                <p className="text-xs font-extrabold tracking-[0.15em] text-[#00a800]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-[#104862]">{section.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#536b77]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </Reveal>
            ))}
          </article>

          <aside>
            <Reveal className="sticky top-36 border border-[#d9e4e4] bg-[#f4f8f7] p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#00a800]">
                Privacy contact
              </p>
              <h2 className="mt-5 font-bold text-[#104862]">Data Protection Officer</h2>
              <p className="mt-3 text-xs leading-6 text-[#637780]">
                For privacy questions or to exercise an applicable data-subject right, contact the
                CGSI Data Protection Officer.
              </p>
              <a href="mailto:dpo@caballes-go.com" className="mt-5 inline-block border-b border-[#00a800] pb-1 text-sm font-bold text-[#104862]">
                dpo@caballes-go.com
              </a>
              <p className="mt-5 border-t border-[#d5e1df] pt-5 text-xs leading-5 text-[#71858d]">
                16/F Robinsons Equitable Tower, ADB Avenue corner Poveda Road, Ortigas Center,
                Pasig City
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
