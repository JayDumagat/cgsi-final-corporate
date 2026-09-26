import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DocumentList } from "@/components/sections/document-list";
import { PageHero } from "@/components/sections/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Resources",
  description: "CGSI account forms, client request documents, and account-preparation resources.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The documents you need, without the hunt."
        description="Find account forms, client requests, and preparation guides. Confirm the approved submission method before sending sensitive records."
        compact
      />

      <section className="clean-resources">
        <div className="site-container">
          <div className="clean-resources-heading">
            <div>
              <p className="clean-eyebrow">Document library</p>
              <h2>Account forms & requests.</h2>
            </div>
            <a href={company.forms} target="_blank" rel="noreferrer" className="clean-text-link">
              Official CGSI forms library <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="clean-resource-groups">
            <section>
              <h3>Individual accounts</h3>
              <DocumentList group="individual" />
              <Link href="/get-started/individual" className="clean-text-link">
                Individual requirements <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </section>
            <section>
              <h3>Corporate accounts</h3>
              <DocumentList group="corporate" />
              <Link href="/get-started/corporate" className="clean-text-link">
                Corporate requirements <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </section>
          </div>

          <section className="clean-client-requests">
            <h3>Existing client requests</h3>
            <DocumentList group="client" />
          </section>

          <p className="clean-resource-note">
            Contact CGSI if you need help reading or completing a document. Confirm the appropriate
            submission method before sending identity or account records.
          </p>
        </div>
      </section>
    </>
  );
}
