import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";

const footerGroups = [
  {
    heading: "Expertise",
    links: [
      ["Broker-assisted trading", "/services/broker-assisted-trading"],
      ["Advisory & execution", "/services/advisory-execution"],
      ["Research & intelligence", "/services/research"],
      ["Direct Market Access", "/services/direct-market-access"],
      ["PERA", "/services/pera"],
      ["Settlement & custody", "/services/settlement-custody"],
    ],
  },
  {
    heading: "Research",
    links: [
      ["Research & insights", "/insights"],
      ["Market notes", "/insights/market-notes"],
      ["Investor guides", "/insights/guides"],
      ["Research library", "/insights/library"],
      ["Market news", "/market-news"],
      ["Market announcements", "/market-announcements"],
    ],
  },
  {
    heading: "Tools",
    links: [
      ["Investor tools", "/tools"],
      ["Investment calculators", "/tools/calculators"],
      ["Stock screener", "/tools/stock-screener"],
      ["Watchlist", "/tools/watchlist"],
      ["Portfolio workspace", "/tools/portfolio"],
    ],
  },
  {
    heading: "The firm",
    links: [
      ["About CGSI", "/about"],
      ["Leadership & team", "/about/team"],
      ["Governance & oversight", "/governance"],
      ["Investor relations", "/investor-relations"],
      ["Pressroom", "/about/pressroom"],
      ["Careers", "/careers"],
    ],
  },
  {
    heading: "Client support",
    links: [
      ["Open an account", "/open-account"],
      ["Account forms", "/resources"],
      ["Help center", "/help"],
      ["Contact CGSI", "/contact"],
      ["Disclosures & compliance", "/disclosures"],
      ["Accessibility", "/accessibility"],
    ],
  },
] as const;

export function SiteFooter({ settings }: { settings: PublicSiteSettings }) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-primary">
        <div className="footer-brand">
          <SiteLogo inverse />
          <p>
            Philippine equity brokerage for individual and institutional clients seeking
            informed decisions, disciplined execution, and accountable service.
          </p>
          <a
            href={settings.clientLoginUrl}
            target="_blank"
            rel="noreferrer"
            className="footer-portal"
          >
            Secure client portal <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="footer-directory">
          {footerGroups.map((group) => (
            <nav key={group.heading} aria-label={`${group.heading} links`}>
              <p className="footer-heading">{group.heading}</p>
              <div>
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} className="footer-link">
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
      </div>

      <div className="footer-contact">
        <div className="site-container footer-contact-grid">
          <div>
            <p className="footer-meta-heading">{settings.companyName}</p>
            <p>{settings.officeAddress}</p>
          </div>
          <div>
            <p className="footer-meta-heading">Client support</p>
            <a href={`tel:${settings.telephone.replace(/\s/g, "")}`}>{settings.telephone}</a>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
          </div>
          <div>
            <p className="footer-meta-heading">Official participant information</p>
            <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
              View the PSE participant record <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="site-container footer-legal">
        <p>
          Securities investments involve risk, including possible loss of principal. Past
          performance does not guarantee future results. Website content is general information,
          not personalized investment advice or an offer to buy or sell any security.
        </p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclosures">Disclosures</Link>
          <span>© {new Date().getFullYear()} CGSI</span>
        </div>
      </div>
    </footer>
  );
}
