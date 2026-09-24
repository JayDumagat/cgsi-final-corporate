import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { brokerageServices, faqs } from "@/content/company";
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <Link className="ed-link" href={href}>
      {children}
      {external ? (
        <ArrowUpRight size={17} aria-hidden="true" />
      ) : (
        <ArrowRight size={18} aria-hidden="true" />
      )}
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="ed-page-intro ed-container">
      <nav className="ed-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{label}</span>
      </nav>
      <p className="ed-eyebrow">{label}</p>
      <h1>{title}</h1>
      <div className="ed-intro-description">{children}</div>
    </section>
  );
}
export function ServiceGrid() {
  return (
    <div className="ed-service-grid">
      {brokerageServices.map((service, index) => (
        <article key={service.slug}>
          <span className="ed-number">0{index + 1}</span>
          <div>
            <h3>
              <Link href={`/services/${service.slug}`}>{service.title}</Link>
            </h3>
            <p>{service.text}</p>
            <TextLink href={`/services/${service.slug}`}>
              Explore {service.title.toLowerCase()}
            </TextLink>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Faqs({ limit }: { limit?: number }) {
  return (
    <div className="ed-faqs">
      {faqs.slice(0, limit).map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <span aria-hidden="true">+</span>
          </summary>
          <div>
            <p>{faq.answer}</p>
            <TextLink href={faq.source} external>
              View CGSI’s published information
            </TextLink>
          </div>
        </details>
      ))}
    </div>
  );
}
export function ClosingInvitation() {
  return (
    <section className="ed-closing">
      <div className="ed-container">
        <div>
          <p className="ed-eyebrow">LET’S TALK</p>
          <h2>
            A good relationship starts
            <br />
            with a conversation.
          </h2>
          <p>
            Tell us what you have in mind. We’ll help you find your next step.
          </p>
        </div>
        <Link href="/contact" className="ed-button ed-button-light">
          Speak to a broker <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
