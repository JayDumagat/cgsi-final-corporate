import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find CGSI account-opening, client portal, trading, settlement, research, and contact information.",
};

const faqs = [
  ["How do I begin opening an account?", "Review the current account checklist, then contact CGSI to confirm the forms and supporting documents for your account type."],
  ["Where is the client portal?", "Use the Client portal link in the utility bar. It opens CGSI’s secure account-access site in a new tab."],
  ["How do I contact my broker?", "Existing clients should use the communication channel agreed during onboarding. General enquiries may be directed to CGSI by phone or email."],
  ["Where can I verify official market information?", "Use issuer disclosures and official sources such as PSE EDGE. CGSI research provides context and does not replace source documents."],
  ["What happens after an order is executed?", "Trade confirmation, funding or settlement coordination, and account records follow the applicable account and market process."],
] as const;

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Find the next step quickly."
        description="Start with a common task or open a frequently asked question. The goal is to get you to the right information without making you search the entire site."
        compact
      />

      <section className="clean-help-actions">
        <div className="site-container">
          <Link href="/open-account"><span>Open an account</span><small>Checklist and process</small><ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/contact"><span>Contact CGSI</span><small>Phone, email, and office</small><ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/insights"><span>Research & guides</span><small>Investor education and analysis</small><ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/disclosures"><span>Disclosures</span><small>Risk and compliance information</small><ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="clean-faq">
        <div className="site-container clean-faq-grid">
          <div>
            <p className="clean-eyebrow">Frequently asked questions</p>
            <h2>Clear answers to common requests.</h2>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
