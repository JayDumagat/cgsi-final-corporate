import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Contact CGSI",
  description:
    "Contact Caballes-Go Securities in Ortigas Center for account, trading, research, or service inquiries.",
};

const inquiryRoutes = [
  {
    title: "Open an account",
    description: "Review typical account requirements before speaking with the CGSI team.",
    action: "Account requirements",
    href: "/open-account",
  },
  {
    title: "Existing account support",
    description: "Use the order channel confirmed by CGSI. Do not place, change, or cancel orders through general email.",
    action: "+63 2 7777 8970",
    href: "tel:+63277778970",
  },
  {
    title: "Institutional & corporate inquiries",
    description: "Discuss execution, research, account structure, and operating requirements.",
    action: "admin@caballes-go.com",
    href: "mailto:admin@caballes-go.com?subject=Institutional%20inquiry",
  },
  {
    title: "General inquiries",
    description: "Company information, media questions, and matters not covered above.",
    action: "admin@caballes-go.com",
    href: "mailto:admin@caballes-go.com?subject=General%20inquiry",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact CGSI"
        title="Speak with the team responsible for your inquiry."
        description="Choose the most relevant contact route below. For time-sensitive account or trading matters, telephone CGSI and confirm current desk hours in Asia/Manila."
        image="/images/editorial/governance-building.jpg"
        imageAlt="Modern office building at dusk"
        compact
      />

      <section className="contact-section">
        <div className="site-container contact-grid">
          <Reveal className="contact-office">
            <p className="section-label section-label-on-dark">Head office</p>
            <h2>Caballes-Go Securities, Inc.</h2>
            <address>
              16/F Robinsons Equitable Tower<br />
              ADB Avenue corner Poveda Street<br />
              Ortigas Center, Pasig City
            </address>
            <div className="contact-office-links">
              <a href="tel:+63277778970">
                <span>Telephone</span>
                <strong>+63 2 7777 8970</strong>
              </a>
              <a href="mailto:admin@caballes-go.com">
                <span>Email</span>
                <strong>admin@caballes-go.com</strong>
              </a>
              <a
                href="https://maps.google.com/?q=Robinsons+Equitable+Tower+Ortigas+Pasig"
                target="_blank"
                rel="noreferrer"
              >
                <span>Location</span>
                <strong>
                  View directions ↗
                  <span className="sr-only"> (opens in a new tab)</span>
                </strong>
              </a>
              <div className="contact-office-hours">
                <span>Service hours</span>
                <strong>Confirm current desk and holiday coverage by telephone (Asia/Manila).</strong>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-directory">
            <p className="section-label">Direct your inquiry</p>
            <h2>How can we help?</h2>
            <div>
              {inquiryRoutes.map((route, index) => {
                const content = (
                  <>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>{route.title}</strong>
                      <small>{route.description}</small>
                    </span>
                    <em>{route.action} <span aria-hidden="true">→</span></em>
                  </>
                );

                return route.href.startsWith("/") ? (
                  <Link href={route.href} key={route.title}>{content}</Link>
                ) : (
                  <a href={route.href} key={route.title}>{content}</a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-security">
        <div className="site-container">
          <p>
            <strong>Protect your information.</strong> Never send passwords, one-time PINs, or
            full identification documents through ordinary email. A CGSI representative will
            confirm the approved channel for sensitive records. General email and this website
            must not be used to place, change, or cancel orders.
          </p>
        </div>
      </section>
    </>
  );
}
