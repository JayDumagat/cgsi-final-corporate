"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight, ChevronDown, ExternalLink, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu } from "@/content/navigation";

function menuIsActive(pathname: string, menu: MegaMenu) {
  if (pathname === menu.overviewHref) return true;
  return menu.groups.some((group) =>
    group.links.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)),
  );
}

function DesktopMegaMenu({ menu }: { menu: MegaMenu }) {
  return (
    <div className="ref-mega">
      <div className="site-container ref-mega-grid">
        <div className="ref-mega-intro">
          <p>{menu.label}</p>
          <h2>{menu.intro}</h2>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref}>
              {menu.overviewLabel}
              <ArrowRight size={15} aria-hidden="true" />
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
                sizes="320px"
                className="object-cover"
              />
            </span>
            <span className="ref-mega-feature-copy">
              <small>{menu.featured.eyebrow}</small>
              <strong>{menu.featured.title}</strong>
              <em>{menu.featured.description}</em>
            </span>
          </Link>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

function MobileNav({ pathname, settings }: { pathname: string; settings: PublicSiteSettings }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="ref-menu-button" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ref-mobile-overlay" />
        <Dialog.Content className="ref-mobile-drawer" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="ref-mobile-head">
            <SiteLogo />
            <Dialog.Close asChild>
              <button type="button" className="ref-menu-button" aria-label="Close navigation">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <Accordion.Root type="multiple" className="ref-mobile-nav">
            {megaMenus.map((menu) => (
              <Accordion.Item value={menu.id} key={menu.id}>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <span>{menu.label}</span>
                    <ChevronDown aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div>
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

          <div className="ref-mobile-actions">
            <Dialog.Close asChild>
              <Link href="/open-account">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client portal <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SiteHeader({ settings }: { settings: PublicSiteSettings }) {
  const pathname = usePathname();

  return (
    <header className="ref-header">
      <div className="ref-utility">
        <div className="site-container ref-utility-inner">
          <div>
            <span>Caballes-Go Securities, Inc.</span>
            <span className="ref-utility-divider" aria-hidden="true" />
            <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
              PSE Trading Participant
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          </div>
          <nav aria-label="Utility navigation">
            <Link href="/insights">Insights</Link>
            <Link href="/resources">Forms</Link>
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client portal
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      <div className="site-container ref-nav">
        <SiteLogo />

        <NavigationMenu.Root className="ref-desktop-nav">
          <NavigationMenu.List className="ref-nav-list">
            {megaMenus.map((menu) => (
              <NavigationMenu.Item key={menu.id}>
                <NavigationMenu.Trigger
                  className={`ref-nav-trigger ${menuIsActive(pathname, menu) ? "is-active" : ""}`}
                >
                  {menu.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="ref-mega-content">
                  <DesktopMegaMenu menu={menu} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="ref-mega-viewport-wrap">
            <NavigationMenu.Viewport className="ref-mega-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="ref-nav-actions">
          <Link href="/insights/library" aria-label="Search research" className="ref-search">
            <Search size={18} aria-hidden="true" />
          </Link>
          <Link href="/open-account" className="ref-open-account">Open an account</Link>
        </div>

        <div className="ref-mobile-only">
          <MobileNav pathname={pathname} settings={settings} />
        </div>
      </div>
    </header>
  );
}
