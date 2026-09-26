import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const groups = [
  {
    heading: "Explore",
    links: [
      ["Clients", "/clients"],
      ["Services", "/services"],
      ["Insights", "/insights"],
      ["Tools & resources", "/tools"],
      ["About CGSI", "/about"],
    ],
  },
  {
    heading: "Client support",
    links: [
      ["Open an account", "/open-account"],
      ["Forms", "/resources"],
      ["Help center", "/help"],
      ["Contact", "/contact"],
      ["Disclosures", "/disclosures"],
    ],
  },
] as const;

export function SiteFooter({ settings }: { settings: PublicSiteSettings }) {
  return (
    <footer className="site-footer">
      <div className="site-container clean-footer-grid">
        <div className="clean-footer-brand">
          <SiteLogo inverse />
          <p>
            Philippine equity brokerage for individuals, families, corporations, and institutions.
          </p>
          <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
            Client login
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        {groups.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="clean-footer-heading">{group.heading}</p>
            {group.links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="clean-footer-contact">
          <p className="clean-footer-heading">Caballes-Go Securities, Inc.</p>
          <p>{settings.officeAddress}</p>
          <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            PSE participant record
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-container clean-footer-bottom">
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
