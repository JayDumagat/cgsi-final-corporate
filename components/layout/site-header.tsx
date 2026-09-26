"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  ExternalLink,
  Globe2,
  Menu,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu } from "@/content/navigation";

function isActive(pathname: string, menu: MegaMenu) {
  return pathname === menu.overviewHref || menu.groups.some((group) =>
    group.links.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)),
  );
}

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-panel">
      <div className="site-container mega-panel-grid">
        <div className="mega-panel-intro">
          <span>{menu.label}</span>
          <h2>{menu.featured.title}</h2>
          <p>{menu.featured.description}</p>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref} className="mega-overview-link">
              {menu.overviewLabel}
            </Link>
          </NavigationMenu.Link>
        </div>

        <div className="mega-panel-links">
          {menu.groups.map((group) => (
            <section key={group.heading}>
              <p>{group.heading}</p>
              <div>
                {group.links.map((item) => (
                  <NavigationMenu.Link asChild key={item.href}>
                    <Link href={item.href}>
                      <strong>{item.label}</strong>
                      {item.description ? <span>{item.description}</span> : null}
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavigation({
  pathname,
  settings,
}: {
  pathname: string;
  settings: PublicSiteSettings;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mobile-menu-trigger" type="button" aria-label="Open menu">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-nav-overlay" />
        <Dialog.Content className="mobile-nav-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="mobile-nav-header">
            <SiteLogo />
            <Dialog.Close asChild>
              <button type="button" aria-label="Close menu">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <Accordion.Root type="multiple" className="mobile-nav-accordion">
            {megaMenus.map((menu) => (
              <Accordion.Item key={menu.id} value={menu.id}>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <span>{menu.label}</span>
                    <ChevronDown aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="mobile-nav-links">
                    <Dialog.Close asChild>
                      <Link
                        href={menu.overviewHref}
                        aria-current={pathname === menu.overviewHref ? "page" : undefined}
                      >
                        {menu.overviewLabel}
                      </Link>
                    </Dialog.Close>
                    {menu.groups.flatMap((group) => group.links).map((item) => (
                      <Dialog.Close asChild key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </Dialog.Close>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="mobile-nav-primary-actions">
            <Dialog.Close asChild>
              <Link href="/open-account">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mobile-nav-meta">
            <Link href="/contact">Contact</Link>
            <Link href="/help">Help</Link>
            <Link href="/resources">Forms</Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SiteHeader({ settings }: { settings: PublicSiteSettings }) {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-container utility-bar-inner">
          <div className="utility-left">
            <span>Philippine equity brokerage</span>
            <span aria-hidden="true">•</span>
            <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
              PSE Trading Participant
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
          <nav className="utility-right" aria-label="Utility navigation">
            <Link href="/insights">Insights</Link>
            <Link href="/resources">Forms</Link>
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
            <span className="utility-language" aria-label="Language: English">
              <Globe2 size={14} aria-hidden="true" />
              EN
            </span>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      <div className="site-container primary-nav">
        <SiteLogo />

        <NavigationMenu.Root className="desktop-navigation">
          <NavigationMenu.List className="desktop-navigation-list">
            {megaMenus.map((menu) => (
              <NavigationMenu.Item key={menu.id}>
                <NavigationMenu.Trigger
                  className={`nav-trigger ${isActive(pathname, menu) ? "is-active" : ""}`}
                >
                  {menu.label}
                  <ChevronDown aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-content">
                  <MegaPanel menu={menu} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="mega-viewport-wrap">
            <NavigationMenu.Viewport className="mega-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="primary-nav-actions">
          <Link href="/insights/library" className="nav-search-link" aria-label="Search research">
            <Search aria-hidden="true" />
          </Link>
          <Link href="/open-account" className="nav-open-account">
            Open an account
          </Link>
        </div>

        <div className="mobile-header-action">
          <MobileNavigation pathname={pathname} settings={settings} />
        </div>
      </div>
    </header>
  );
}
