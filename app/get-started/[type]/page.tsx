import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro, TextLink } from "@/components/sections/editorial";
import { accountTypes } from "@/content/company";
import { DocumentList } from "@/components/sections/document-list";
export function generateStaticParams() {
  return accountTypes.map((a) => ({ type: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  return {
    title: accountTypes.find((a) => a.slug === type)?.title,
    alternates: { canonical: `/get-started/${type}` },
  };
}
export default async function AccountPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const account = accountTypes.find((a) => a.slug === type);
  if (!account) notFound();
  return (
    <>
      <PageIntro label="Get started" title={account.title}>
        <p>{account.text}</p>
      </PageIntro>
      <section className="ed-section ed-container ed-content-grid">
        <div className="ed-prose">
          <h2>Prepare for your conversation.</h2>
          <p>{account.preparation}</p>
          <ol>
            <li>
              Review the account information form and specimen signature card.
            </li>
            <li>
              Contact CGSI to confirm the complete requirements for your
              circumstances.
            </li>
            <li>Follow the team’s submission and verification instructions.</li>
          </ol>
          <p className="ed-note">
            A complete supporting-document checklist and approval timeframe are
            not confirmed on the source pages. Please request the current
            checklist before submitting sensitive documents.
          </p>
          <TextLink href="/contact">Ask for submission guidance</TextLink>
          <br />
          <TextLink href="/get-started">Change account type</TextLink>
        </div>
        <div>
          <h2>Account opening forms</h2>
          <DocumentList group={account.slug} />
          <p className="ed-note">
            These are the documents linked by CGSI’s official forms library. Use
            a PDF reader to complete or print them, as instructed by CGSI.
          </p>
        </div>
      </section>
    </>
  );
}
