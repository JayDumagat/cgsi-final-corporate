"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu, type NavigationLink } from "@/content/navigation";

const utilityLinks = [
  ["Forms", "/resources"],
  ["Help", "/help"],
  ["Contact", "/contact"],
] as const;

function isMenuActive(pathname: string, menu: MegaMenu) {
  if (menu.id === "clients") return pathname.startsWith("/clients");
  if (menu.id === "services") return pathname.startsWith("/services") || pathname.startsWith("/platforms");
  if (menu.id === "insights") {
    return pathname.startsWith("/insights") || pathname.startsWith("/market-news") || pathname.startsWith("/market-announcements");
  }
  if (menu.id === "tools") return pathname.startsWith("/tools");
  return pathname.startsWith("/about") || pathname.startsWith("/governance") || pathname.startsWith("/careers") || pathname.startsWith("/investor-relations");
}

function DesktopMenuLink({ item }: { item: NavigationLink }) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={item.href} className="clean-mega-link">
        <span>
          <strong>{item.label}</strong>
          {item.description ? <small>{item.description}</small> : null}
        </span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </NavigationMenu.Link>
  );
}

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="clean-mega-panel">
      <div className="site-container clean-mega-grid">
        <div className="clean-mega-intro">
          <p>{menu.label}</p>
          <h2>{menu.featured.title}</h2>
          <span>{menu.featured.description}</span>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref} className="clean-inline-link">
              {menu.overviewLabel}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </NavigationMenu.Link>
        </div>

        <div className="clean-mega-groups">
          {menu.groups.map((group) => (
            <section key={group.heading}>
              <p>{group.heading}</p>
              <div>
                {group.links.map((item) => (
                  <DesktopMenuLink item={item} key={item.href} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <NavigationMenu.Link asChild>
          <Link href={menu.featured.href} className="clean-mega-feature">
            <span>{menu.featured.eyebrow}</span>
            <strong>{menu.featured.title}</strong>
            <small>Explore this topic</small>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

function DesktopNavigation({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu.Root className="clean-desktop-nav">
      <NavigationMenu.List className="clean-desktop-nav-list">
        {megaMenus.map((menu) => (
          <NavigationMenu.Item key={menu.id}>
            <NavigationMenu.Trigger
              className={`clean-nav-trigger ${isMenuActive(pathname, menu) ? "is-active" : ""}`}
            >
              {menu.label}
              <ChevronDown size={15} aria-hidden="true" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="clean-mega-content">
              <MegaPanel menu={menu} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="clean-mega-viewport-wrap">
        <NavigationMenu.Viewport className="clean-mega-viewport" />
      </div>
    </NavigationMenu.Root>
  );
}

function MobileMenuItem({ menu, pathname }: { menu: MegaMenu; pathname: string }) {
  return (
    <Accordion.Item value={menu.id} className="clean-mobile-group">
      <Accordion.Header>
        <Accordion.Trigger className="clean-mobile-trigger">
          {menu.label}
          <ChevronDown size={18} aria-hidden="true" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="clean-mobile-content">
        <Dialog.Close asChild>
          <Link
            href={menu.overviewHref}
            className="clean-mobile-overview"
            aria-current={pathname === menu.overviewHref ? "page" : undefined}
          >
            {menu.overviewLabel}
          </Link>
        </Dialog.Close>
        {menu.groups.map((group) => (
          <div className="clean-mobile-subgroup" key={group.heading}>
            <p>{group.heading}</p>
            {group.links.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </div>
        ))}
      </Accordion.Content>
    </Accordion.Item>
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
        <button className="clean-mobile-menu-button" type="button" aria-label="Open navigation">
          <Menu size={22} aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="clean-mobile-overlay" />
        <Dialog.Content className="clean-mobile-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="clean-mobile-head">
            <SiteLogo />
            <Dialog.Close asChild>
              <button className="clean-mobile-menu-button" type="button" aria-label="Close navigation">
                <X size={22} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="clean-mobile-nav" aria-label="Mobile navigation">
            <Accordion.Root type="multiple">
              {megaMenus.map((menu) => (
                <MobileMenuItem key={menu.id} menu={menu} pathname={pathname} />
              ))}
            </Accordion.Root>
          </nav>

          <div className="clean-mobile-actions">
            <Dialog.Close asChild>
              <Link href="/open-account" className="clean-primary-button">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer" className="clean-secondary-button">
              Client portal
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> opens in a new tab</span>
            </a>
          </div>

          <div className="clean-mobile-utility">
            {utilityLinks.map(([label, href]) => (
              <Dialog.Close asChild key={href}>
                <Link href={href}>{label}</Link>
              </Dialog.Close>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SiteHeader({ settings }: { settings: PublicSiteSettings }) {
  const pathname = usePathname();

  return (
    <header className="clean-site-header">
      <div className="clean-utility-bar">
        <div className="site-container clean-utility-inner">
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            PSE Trading Participant
            <ArrowUpRight size={13} aria-hidden="true" />
            <span className="sr-only"> opens in a new tab</span>
          </a>
          <nav aria-label="Utility navigation">
            {utilityLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client portal
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> opens in a new tab</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="clean-main-nav">
        <div className="site-container clean-main-nav-inner">
          <SiteLogo />
          <DesktopNavigation pathname={pathname} />
          <div className="clean-header-actions">
            <Link href="/open-account" className="clean-primary-button">Open an account</Link>
          </div>
          <div className="clean-mobile-only">
            <MobileNavigation pathname={pathname} settings={settings} />
          </div>
        </div>
      </div>
    </header>
  );
}
