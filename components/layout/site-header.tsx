"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu } from "@/content/navigation";

function isActive(pathname: string, menu: MegaMenu) {
  return pathname === menu.overviewHref ||
    menu.groups.some((group) =>
      group.links.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)),
    );
}

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="ref-mega-panel">
      <div className="site-container ref-mega-grid">
        <div className="ref-mega-intro">
          <p>{menu.label}</p>
          <h2>{menu.summary}</h2>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref} className="ref-inline-link">
              {menu.overviewLabel}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </NavigationMenu.Link>
        </div>

        <div className="ref-mega-groups">
          {menu.groups.map((group) => (
            <section key={group.heading}>
              <p>{group.heading}</p>
              <div>
                {group.links.map((item) => (
                  <NavigationMenu.Link asChild key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenu.Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <NavigationMenu.Link asChild>
          <Link href={menu.featured.href} className="ref-mega-feature">
            <span className="ref-mega-feature-media">
              <Image
                src={menu.featured.image}
                alt={menu.featured.imageAlt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </span>
            <span className="ref-mega-feature-copy">
              <small>{menu.featured.eyebrow}</small>
              <strong>{menu.featured.title}</strong>
              <span>Explore <ArrowUpRight size={13} aria-hidden="true" /></span>
            </span>
          </Link>
        </NavigationMenu.Link>
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
        <button className="ref-mobile-trigger" type="button" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ref-mobile-overlay" />
        <Dialog.Content className="ref-mobile-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>

          <div className="ref-mobile-head">
            <SiteLogo />
            <Dialog.Close asChild>
              <button className="ref-mobile-trigger" type="button" aria-label="Close navigation">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="ref-mobile-nav">
            <Accordion.Root type="multiple">
              {megaMenus.map((menu) => (
                <Accordion.Item value={menu.id} key={menu.id}>
                  <Accordion.Header>
                    <Accordion.Trigger>
                      {menu.label}
                      <ChevronDown aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="ref-mobile-links">
                      <Dialog.Close asChild>
                        <Link href={menu.overviewHref}>{menu.overviewLabel}</Link>
                      </Dialog.Close>
                      {menu.groups.flatMap((group) => group.links).map((item) => (
                        <Dialog.Close asChild key={item.href}>
                          <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                            {item.label}
                          </Link>
                        </Dialog.Close>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </nav>

          <div className="ref-mobile-actions">
            <Dialog.Close asChild>
              <Link href="/open-account">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="ref-mobile-utility">
            <Link href="/resources">Forms</Link>
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SiteHeader({ settings }: { settings: PublicSiteSettings }) {
  const pathname = usePathname();

  return (
    <header className="ref-site-header">
      <div className="ref-utility-bar">
        <div className="site-container ref-utility-inner">
          <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
            PSE Trading Participant
            <span>Broker ID 378</span>
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>

          <nav aria-label="Utility navigation">
            <Link href="/resources">Forms</Link>
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      <div className="site-container ref-primary-nav">
        <SiteLogo />

        <NavigationMenu.Root className="ref-desktop-nav">
          <NavigationMenu.List>
            {megaMenus.map((menu) => (
              <NavigationMenu.Item key={menu.id}>
                <NavigationMenu.Trigger className={`ref-nav-trigger ${isActive(pathname, menu) ? "is-active" : ""}`}>
                  {menu.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="ref-mega-content">
                  <MegaPanel menu={menu} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <div className="ref-mega-viewport-wrap">
            <NavigationMenu.Viewport className="ref-mega-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="ref-header-actions">
          <Link href="/open-account">Open an account</Link>
        </div>

        <div className="ref-mobile-only">
          <MobileNavigation pathname={pathname} settings={settings} />
        </div>
      </div>
    </header>
  );
}
