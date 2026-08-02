import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Open an Account",
  description:
    "Request the current CGSI account checklist and review the typical verification stages.",
};

const requirements = [
  {
    title: "Identity & contact information",
    text: "Current personal or organizational details and valid identification appropriate to the account type.",
  },
  {
    title: "Financial profile",
    text: "Information about occupation or business, source of funds, investment experience, objectives, and risk tolerance.",
  },
  {
    title: "Account & tax forms",
    text: "Required declarations, signatures, tax information, and supporting records for the proposed account.",
  },
  {
    title: "Funding information",
    text: "Bank and funding details confirmed through the account-opening process after the required reviews.",
  },
] as const;

const process = [
  {
    title: "Discuss the account",
    text: "Contact CGSI to identify the appropriate account type and confirm the requirements that apply.",
  },
  {
    title: "Submit documents securely",
    text: "Provide completed forms and supporting records through the channel confirmed by CGSI.",
  },
  {
    title: "Complete verification",
    text: "CGSI performs applicable identity, know-your-client, risk, sanctions, and compliance checks.",
  },
  {
    title: "Fund & activate",
    text: "Receive confirmed funding instructions and account access after requirements and approvals are complete.",
  },
] as const;

export default function OpenAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account opening"
        title="Request the current account checklist."
        description="CGSI will confirm the forms and supporting documents required for your account type. The overview below explains the main information categories and verification stages."
        image="/images/editorial/advisor-clients.jpg"
        imageAlt="An advisor reviewing documents with clients"
        compact
      >
        <a href="tel:+63277778970" className="btn btn-primary">Call +63 2 7777 8970</a>
        <span className="account-email-action">
          <a href="mailto:admin@caballes-go.com?subject=Request%20current%20account%20checklist" className="btn btn-secondary">
            Request checklist by email
          </a>
          <small>Do not attach IDs, tax records, or financial statements to ordinary email.</small>
        </span>
      </PageHero>

      <section className="account-requirements">
        <div className="site-container account-requirements-grid">
          <Reveal className="account-requirements-intro">
            <p className="section-label">What to prepare</p>
            <h2>Categories covered by the account checklist.</h2>
            <p>
              Exact documentation varies by account type and circumstances. Do not send sensitive
              records until a CGSI representative confirms the approved submission channel.
            </p>
          </Reveal>

          <Reveal className="account-requirements-list">
            {requirements.map((requirement, index) => (
              <div key={requirement.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{requirement.title}</strong>
                <p>{requirement.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="account-process">
        <div className="site-container">
          <Reveal>
            <div className="home-section-head">
              <div>
                <p className="section-label">The process</p>
                <h2>Four stages from inquiry to activation.</h2>
              </div>
              <p className="account-process-note">
                Approval, timing, and documentation remain subject to CGSI review and applicable
                laws, rules, and market requirements.
              </p>
            </div>
            <div className="account-process-grid">
              {process.map((step, index) => (
                <div key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="account-help">
        <div className="site-container account-help-grid">
          <div>
            <p className="section-label section-label-on-dark">Before you send documents</p>
            <h2>Confirm the account requirements with CGSI.</h2>
          </div>
          <div>
            <p>
              A representative can explain the process, identify the records relevant to your
              account, and confirm how sensitive information should be transmitted.
            </p>
            <div>
              <Link href="/contact" className="btn btn-accent">Request the current checklist</Link>
              <Link href="/disclosures" className="btn btn-on-dark">Review disclosures</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
