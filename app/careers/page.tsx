import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and professional life at Caballes-Go Securities, Inc.",
};

const principles = [
  ["Own the next step", "Make responsibility visible and follow through on the details clients depend on."],
  ["Stay close to the market", "Keep learning from official information, changing conditions, and experienced colleagues."],
  ["Protect the standard", "Treat accuracy, confidentiality, and market conduct as part of everyday work."],
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at CGSI"
        title="Build work the market can trust."
        description="Join a growing brokerage where market knowledge, careful operations, and direct responsibility matter every day."
        image="/images/editorial/careers-team.jpg"
        imageAlt="Professionals collaborating around laptops in a contemporary office"
      />

      <section className="clean-list-section">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">How we work</p>
            <h2>Professional standards without unnecessary distance.</h2>
          </div>
          <div className="clean-list">
            {principles.map(([title,text],index)=>(
              <article key={title}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-career-role" id="open-roles">
        <div className="site-container clean-career-role-grid">
          <div>
            <p className="clean-eyebrow">Open role</p>
            <h2>Equities Sales Agent</h2>
            <span>Ortigas Center, Pasig City · Client-facing · On-site</span>
          </div>
          <div>
            <p>
              Support client relationships, communicate relevant market information, and
              coordinate equity instructions within CGSI’s operating and compliance standards.
            </p>
            <a
              href="mailto:admin@caballes-go.com?subject=Equities%20Sales%20Agent%20Enquiry"
              className="clean-primary-button"
            >
              Enquire about this role
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
