import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const footerLinks = [
  {
    heading: "Invest",
    links: [
      ["New investors", "/clients/new-investors"],
      ["Individuals & families", "/clients/individuals-families"],
      ["Institutions & corporations", "/clients/institutions"],
      ["Open an account", "/open-account"],
    ],
  },
  {
    heading: "Research",
    links: [
      ["Latest insights", "/insights"],
      ["Market notes", "/insights/market-notes"],
      ["Investor guides", "/insights/guides"],
      ["Market announcements", "/market-announcements"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About CGSI", "/about"],
      ["Leadership", "/about/team"],
      ["Governance", "/governance"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function SiteFooter({ settings }: { settings: PublicSiteSettings }) {
  return (
    <footer className="ref-footer">
      <div className="site-container ref-footer-top">
        <div className="ref-footer-brand">
          <SiteLogo inverse />
          <p>Philippine equity brokerage for individual and institutional investors.</p>
          <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
            Client portal <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="ref-footer-links">
          {footerLinks.map((group) => (
            <nav aria-label={group.heading} key={group.heading}>
              <p>{group.heading}</p>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className="site-container ref-footer-contact">
        <div>
          <strong>{settings.companyName}</strong>
          <span>{settings.officeAddress}</span>
        </div>
        <div>
          <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
        </div>
        <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
          PSE participant record <ExternalLink size={12} aria-hidden="true" />
        </a>
      </div>

      <div className="site-container ref-footer-bottom">
        <p>
          Investing in securities involves risk, including possible loss of principal. Website
          content is general information and is not personalized investment advice.
        </p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclosures">Disclosures</Link>
          <Link href="/accessibility">Accessibility</Link>
          <span>© {new Date().getFullYear()} CGSI</span>
        </div>
      </div>
    </footer>
  );
}
