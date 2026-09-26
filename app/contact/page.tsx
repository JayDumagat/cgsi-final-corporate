import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Contact CGSI",
  description:
    "Contact Caballes-Go Securities in Ortigas Center for account, trading, research, institutional, or service inquiries.",
};

const routes = [
  ["Open an account", "Review requirements and request the current checklist.", "/open-account", "Account opening"],
  ["Existing client support", "Use the communication channel confirmed during onboarding for account and trading matters.", "tel:+63277778970", "+63 2 7777 8970"],
  ["Institutional & corporate", "Discuss execution, research, account structure, and operating requirements.", "mailto:admin@caballes-go.com?subject=Institutional%20inquiry", "Email CGSI"],
  ["General inquiries", "Company information, media questions, and other requests.", "mailto:admin@caballes-go.com?subject=General%20inquiry", "Email CGSI"],
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact CGSI"
        title="Reach the right team."
        description="Choose the route that best matches your inquiry. For time-sensitive account or trading matters, contact CGSI by telephone."
        image="/images/editorial/governance-building.jpg"
        imageAlt="Modern office building at dusk"
        compact
      />

      <section className="clean-contact">
        <div className="site-container clean-contact-grid">
          <aside>
            <p className="clean-eyebrow">Head office</p>
            <h2>Caballes-Go Securities, Inc.</h2>
            <address>
              16/F Robinsons Equitable Tower<br />
              ADB Avenue corner Poveda Street<br />
              Ortigas Center, Pasig City
            </address>
            <a href="tel:+63277778970">+63 2 7777 8970</a>
            <a href="mailto:admin@caballes-go.com">admin@caballes-go.com</a>
            <a href="https://maps.google.com/?q=Robinsons+Equitable+Tower+Ortigas+Pasig" target="_blank" rel="noreferrer">
              View directions <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </aside>

          <div className="clean-contact-routes">
            {routes.map(([title, description, href, action], index) => {
              const inner = (
                <>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <strong>{action} <ArrowRight size={15} aria-hidden="true" /></strong>
                </>
              );
              return href.startsWith("/") ? (
                <Link href={href} key={title}>{inner}</Link>
              ) : (
                <a href={href} key={title}>{inner}</a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="clean-security-strip">
        <div className="site-container">
          <strong>Security reminder</strong>
          <p>
            General email and this website must not be used to place, change, or cancel orders.
            Never send passwords or one-time PINs through ordinary email.
          </p>
        </div>
      </section>
    </>
  );
}
