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
    <div className="airy-mega-panel">
      <div className="site-container airy-mega-grid">
        <div className="airy-mega-intro">
          <span>{menu.label}</span>
          <h2>{menu.featured.title}</h2>
          <p>{menu.featured.description}</p>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref} className="airy-mega-overview">
              {menu.overviewLabel}
            </Link>
          </NavigationMenu.Link>
        </div>

        <div className="airy-mega-links">
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
        <button className="airy-mobile-menu-trigger" type="button" aria-label="Open menu">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="airy-mobile-overlay" />
        <Dialog.Content className="airy-mobile-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="airy-mobile-header">
            <SiteLogo />
            <Dialog.Close asChild>
              <button type="button" aria-label="Close menu">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <Accordion.Root type="multiple" className="airy-mobile-accordion">
            {megaMenus.map((menu) => (
              <Accordion.Item key={menu.id} value={menu.id}>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <span>{menu.label}</span>
                    <ChevronDown aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="airy-mobile-links">
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

          <div className="airy-mobile-primary-actions">
            <Dialog.Close asChild>
              <Link href="/open-account">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="airy-mobile-meta">
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
    <header className="airy-site-header">
      <div className="airy-utility-bar">
        <div className="site-container airy-utility-inner">
          <div className="airy-utility-left">
            <span>Philippine equity brokerage</span>
            <span aria-hidden="true">•</span>
            <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
              PSE Trading Participant
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
          <nav className="airy-utility-right" aria-label="Utility navigation">
            <Link href="/insights">Insights</Link>
            <Link href="/resources">Forms</Link>
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
            <span className="airy-utility-language" aria-label="Language: English">
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

      <div className="site-container airy-primary-nav">
        <SiteLogo />

        <NavigationMenu.Root className="airy-desktop-navigation">
          <NavigationMenu.List className="airy-desktop-navigation-list">
            {megaMenus.map((menu) => (
              <NavigationMenu.Item key={menu.id}>
                <NavigationMenu.Trigger
                  className={`airy-nav-trigger ${isActive(pathname, menu) ? "is-active" : ""}`}
                >
                  {menu.label}
                  <ChevronDown aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="airy-mega-content">
                  <MegaPanel menu={menu} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="airy-mega-viewport-wrap">
            <NavigationMenu.Viewport className="airy-mega-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="airy-primary-nav-actions">
          <Link href="/insights/library" className="airy-nav-search" aria-label="Search research">
            <Search aria-hidden="true" />
          </Link>
          <Link href="/open-account" className="airy-open-account">
            Open an account
          </Link>
        </div>

        <div className="airy-mobile-only">
          <MobileNavigation pathname={pathname} settings={settings} />
        </div>
      </div>
    </header>
  );
}
