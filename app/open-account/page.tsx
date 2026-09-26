import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Open an Account",
  description:
    "Review the CGSI account-opening process and request the current checklist for individual, corporate, or institutional accounts.",
};

const requirements = [
  ["Identity & contact information", "Valid identification and current personal or organizational details appropriate to the account type."],
  ["Financial profile", "Occupation or business information, source of funds, investment experience, objectives, and risk information."],
  ["Account & tax forms", "Required declarations, signatures, tax information, and supporting records."],
  ["Funding information", "Bank and funding details confirmed through the approved account-opening process."],
] as const;

const process = [
  ["Discuss", "Identify the appropriate account type and confirm which requirements apply."],
  ["Prepare", "Complete the current forms and supporting documents."],
  ["Verify", "CGSI performs applicable identity, KYC, risk, sanctions, and compliance checks."],
  ["Activate", "Receive confirmed funding and account-access instructions after approval."],
] as const;

export default function OpenAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account opening"
        title="Open the right account, with the right information."
        description="Account requirements vary by client type and circumstances. Start with the current checklist, then confirm the approved submission channel before sending sensitive records."
        image="/images/editorial/advisor-clients.jpg"
        imageAlt="An adviser reviewing documents with clients"
      >
        <a href="tel:+63277778970" className="clean-primary-button">Call CGSI</a>
        <a
          href="mailto:admin@caballes-go.com?subject=Request%20current%20account%20checklist"
          className="clean-secondary-button"
        >
          Request checklist by email
        </a>
      </PageHero>

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">What to prepare</p>
            <h2>The main information categories.</h2>
            <p>
              Exact documentation depends on the account. CGSI will confirm the current forms and
              supporting records before submission.
            </p>
          </div>
          <div className="clean-list">
            {requirements.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-process-section">
        <div className="site-container clean-process-grid">
          <div>
            <p className="clean-eyebrow">The process</p>
            <h2>Four stages from inquiry to activation.</h2>
            <p className="clean-muted-copy">
              Approval, timing, and documentation remain subject to CGSI review and applicable
              legal, regulatory, and market requirements.
            </p>
          </div>
          <ol>
            {process.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="clean-safety-note">
        <div className="site-container clean-safety-note-grid">
          <div>
            <p className="clean-eyebrow">Protect your information</p>
            <h2>Confirm the secure submission method before sending records.</h2>
          </div>
          <div>
            <p>
              Do not send passwords, one-time PINs, full identification documents, tax records,
              or financial statements through ordinary email unless CGSI has confirmed that
              method for the specific request.
            </p>
            <Link href="/contact" className="clean-primary-button">
              Contact CGSI
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
