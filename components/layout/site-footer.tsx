import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const primary = [
  ["Clients", "/clients"],
  ["Services", "/services"],
  ["Insights", "/insights"],
  ["Resources", "/tools"],
  ["Company", "/about"],
] as const;

const support = [
  ["Open an account", "/open-account"],
  ["Account forms", "/resources"],
  ["Help", "/help"],
  ["Contact", "/contact"],
] as const;

export function SiteFooter({ settings }: { settings: PublicSiteSettings }) {
  return (
    <footer className="rl-footer">
      <div className="site-container rl-footer-top">
        <div className="rl-footer-brand">
          <SiteLogo inverse />
          <p>
            Licensed Philippine broker-dealer providing equity market access, research,
            execution, and post-trade support.
          </p>
        </div>

        <nav aria-label="Explore CGSI">
          <p>Explore</p>
          {primary.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <nav aria-label="Client support">
          <p>Client support</p>
          {support.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
            Client login
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>

        <div className="rl-footer-contact">
          <p>Contact</p>
          <address>{settings.officeAddress}</address>
          <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            PSE participant record
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-container rl-footer-bottom">
        <p>
          Investing in securities involves risk, including possible loss of principal.
          Information on this website is general in nature and is not personalized investment advice.
        </p>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclosures">Disclosures</Link>
          <Link href="/accessibility">Accessibility</Link>
          <span>© {new Date().getFullYear()} Caballes-Go Securities, Inc.</span>
        </nav>
      </div>
    </footer>
  );
}
