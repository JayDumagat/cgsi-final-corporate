import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and professional life at Caballes-Go Securities, Inc.",
};

const workPrinciples = [
  ["Own the next step", "Make responsibility visible and follow through on the details clients depend on."],
  ["Stay close to the market", "Keep learning from official information, changing conditions, and experienced colleagues."],
  ["Protect the standard", "Treat accuracy, confidentiality, and market conduct as part of everyday work."],
] as const;

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="careers-hero-image">
          <Image
            src="/images/editorial/careers-team.jpg"
            alt="Professionals collaborating around laptops in a contemporary office"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="careers-hero-overlay" aria-hidden="true" />
        <div className="site-container careers-hero-copy">
          <p className="interior-kicker">Careers at CGSI</p>
          <h1>Build work the market can trust.</h1>
          <p>
            Join a growing brokerage where market knowledge, careful operations, and direct
            responsibility matter every day.
          </p>
          <a href="#open-roles" className="btn btn-primary">View open roles</a>
        </div>
      </section>

      <section className="careers-principles">
        <div className="site-container careers-principles-grid">
          <Reveal animate>
            <p className="section-label">How we work</p>
            <h2>Professional standards without unnecessary distance.</h2>
          </Reveal>
          <div>
            {workPrinciples.map(([title, text], index) => (
              <Reveal animate delay={index * 0.035} key={title}>
                <article>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="open-roles" id="open-roles">
        <div className="site-container">
          <div className="open-roles-heading">
            <div>
              <p className="section-label">Opportunities</p>
              <h2>Open roles</h2>
            </div>
            <p>Role availability may change. Contact CGSI to confirm the current status and application requirements.</p>
          </div>
          <article className="job-card">
            <div>
              <span>Sales & client coverage</span>
              <h3>Equities Sales Agent</h3>
              <p>Ortigas Center, Pasig City · Client-facing · On-site</p>
            </div>
            <div>
              <p>
                Support client relationships, communicate relevant market information, and
                coordinate equity instructions within CGSI’s operating and compliance standards.
              </p>
              <a href="mailto:admin@caballes-go.com?subject=Equities%20Sales%20Agent%20Enquiry" className="btn btn-secondary">
                Enquire about this role
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="careers-enquiry">
        <div className="site-container">
          <p>Do not see your discipline listed?</p>
          <h2>Introduce your experience to CGSI.</h2>
          <Link href="/contact">Send a general career enquiry →</Link>
        </div>
      </section>
    </>
  );
}
