import type { Metadata } from "next";
import { PageIntro, Faqs, TextLink } from "@/components/sections/editorial";
import { DocumentList } from "@/components/sections/document-list";
import { company } from "@/content/company";
export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};
export default function ResourcesPage() {
  return (
    <>
      <PageIntro label="Resources" title="The right information. Within reach.">
        <p>
          Find account forms, prepare for your next step, and get answers to
          common questions. No sign-in is required.
        </p>
      </PageIntro>
      <section id="forms" className="ed-section ed-container">
        <div className="ed-section-heading">
          <div>
            <p className="ed-eyebrow">DOCUMENT LIBRARY</p>
            <h2>Account forms & requests.</h2>
          </div>
          <TextLink href={company.forms} external>
            CGSI’s official forms library
          </TextLink>
        </div>
        <div className="ed-content-grid">
          <div>
            <h3>Individual accounts</h3>
            <DocumentList group="individual" />
            <TextLink href="/get-started/individual">
              Individual account requirements
            </TextLink>
          </div>
          <div>
            <h3>Corporate accounts</h3>
            <DocumentList group="corporate" />
            <TextLink href="/get-started/corporate">
              Corporate account requirements
            </TextLink>
          </div>
        </div>
        <div style={{ marginTop: 48 }}>
          <h3>Existing client requests</h3>
          <DocumentList group="client" />
        </div>
        <p className="ed-note">
          Contact CGSI if you need help reading or completing a document.
          Confirm the appropriate submission method before sending identity or
          account records.
        </p>
      </section>
      <section id="faqs" className="ed-section ed-container">
        <div className="ed-faq-layout">
          <h2>Common questions.</h2>
          <Faqs />
        </div>
      </section>
    </>
  );
}
