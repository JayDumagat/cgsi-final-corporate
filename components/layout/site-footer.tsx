import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const groups = [
  {
    heading: "Invest",
    links: [
      ["Who we serve", "/clients"],
      ["Expertise", "/services"],
      ["Open an account", "/open-account"],
      ["Account forms", "/resources"],
    ],
  },
  {
    heading: "Research",
    links: [
      ["Research & insights", "/insights"],
      ["Investor guides", "/insights/guides"],
      ["Market notes", "/insights/market-notes"],
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
    <footer className="clean-footer">
      <div className="site-container clean-footer-top">
        <div className="clean-footer-brand">
          <SiteLogo inverse />
          <p>
            Philippine equity brokerage for individual, corporate, and institutional clients.
          </p>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            View PSE participant record
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> opens in a new tab</span>
          </a>
        </div>

        <div className="clean-footer-links">
          {groups.map((group) => (
            <nav aria-label={`${group.heading} links`} key={group.heading}>
              <p>{group.heading}</p>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className="site-container clean-footer-contact">
        <div>
          <strong>{settings.companyName}</strong>
          <span>{settings.officeAddress}</span>
        </div>
        <div>
          <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
        </div>
      </div>

      <div className="site-container clean-footer-legal">
        <p>
          Investing in securities involves risk, including possible loss of principal. Website
          content is general information and is not personalized investment advice or an offer to
          buy or sell any security.
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
