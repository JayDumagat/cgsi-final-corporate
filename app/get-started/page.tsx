import type { Metadata } from "next";
import { PageIntro, TextLink, Faqs } from "@/components/sections/editorial";
import { accountTypes } from "@/content/company";
export const metadata: Metadata = {
  title: "Get started",
  alternates: { canonical: "/get-started" },
};
export default function GetStartedPage() {
  return (
    <>
      <PageIntro label="Get started" title="Let’s find your account path.">
        <p>
          Choose who will hold the account. Review the relevant forms, then
          contact CGSI for the current requirements and submission process.
        </p>
      </PageIntro>
      <section className="ed-section ed-container">
        <div className="ed-audience-grid">
          {accountTypes.map((a) => (
            <article key={a.slug}>
              <p className="ed-eyebrow">{a.audience}</p>
              <h2>{a.title}</h2>
              <p>{a.text}</p>
              <TextLink href={`/get-started/${a.slug}`}>
                View {a.title.toLowerCase()} requirements
              </TextLink>
            </article>
          ))}
        </div>
        <p className="ed-note">
          Completing a form does not open an account. CGSI will explain its
          review and verification requirements and confirm the outcome directly.
        </p>
        <div className="ed-faq-layout">
          <h3>Before you begin.</h3>
          <Faqs />
        </div>
      </section>
    </>
  );
}
