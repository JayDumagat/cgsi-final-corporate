import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find CGSI account-opening, client portal, trading, settlement, and contact information.",
};

const faqs = [
  ["How do I begin opening an account?", "Review the current account checklist, then contact CGSI to confirm the forms and supporting documents for your account type."],
  ["Where is the client portal?", "Use the Client portal link in the utility bar. It opens CGSI’s secure account-access site in a new tab."],
  ["How do I contact my broker?", "Existing clients should use the communication channel agreed during onboarding. General enquiries may be directed to CGSI by phone or email."],
  ["Where can I verify official market information?", "Use issuer disclosures and official sources such as PSE EDGE. CGSI research is intended to provide context, not replace source documents."],
  ["What happens after an order is executed?", "Trade confirmation, funding or settlement coordination, and account records follow the applicable account and market process."],
] as const;

export default function HelpPage() {
  return (
    <>
      <section className="help-masthead">
        <div className="site-container">
          <p className="interior-kicker">Help center</p>
          <h1>What do you need to do?</h1>
          <p>Start with a common task or review frequently asked questions below.</p>
        </div>
      </section>

      <section className="help-actions">
        <div className="site-container help-action-grid">
          <Link href="/open-account"><strong>Open an account</strong><span>Checklist and process →</span></Link>
          <Link href="/contact"><strong>Contact CGSI</strong><span>Phone, email, and office →</span></Link>
          <Link href="/insights"><strong>Research & guides</strong><span>Investor education →</span></Link>
          <Link href="/disclosures"><strong>Disclosures</strong><span>Risk and compliance →</span></Link>
        </div>
      </section>

      <section className="help-faq">
        <div className="site-container help-faq-grid">
          <div>
            <p className="section-label">Frequently asked questions</p>
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

      <section className="help-contact-strip">
        <div className="site-container">
          <p>Still need help?</p>
          <Link href="/contact">Speak with CGSI →</Link>
        </div>
      </section>
    </>
  );
}
