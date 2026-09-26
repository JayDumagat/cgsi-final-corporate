import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const footerGroups = [
  {
    title: "Invest",
    links: [
      ["Open an account", "/open-account"],
      ["New investors", "/clients/new-investors"],
      ["Individuals & families", "/clients/individuals-families"],
      ["Institutional clients", "/clients/institutions"],
    ],
  },
  {
    title: "Research",
    links: [
      ["Research & insights", "/insights"],
      ["Market notes", "/insights/market-notes"],
      ["Investor guides", "/insights/guides"],
      ["Market announcements", "/market-announcements"],
    ],
  },
  {
    title: "CGSI",
    links: [
      ["About", "/about"],
      ["Leadership", "/about/team"],
      ["Governance", "/governance"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function SiteFooter({ settings }: { settings: PublicSiteSettings }) {
  return (
    <footer className="ref-footer">
      <div className="site-container ref-footer-main">
        <div className="ref-footer-brand">
          <SiteLogo inverse />
          <p>
            Caballes-Go Securities, Inc. is a Philippine broker-dealer and PSE Trading Participant
            serving individual and institutional clients.
          </p>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            View PSE participant record
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="ref-footer-links">
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p>{group.title}</p>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className="site-container ref-footer-meta">
        <div>
          <strong>{settings.companyName}</strong>
          <span>{settings.officeAddress}</span>
          <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
        </div>

        <p>
          Securities investments involve risk, including possible loss of principal. Website
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
