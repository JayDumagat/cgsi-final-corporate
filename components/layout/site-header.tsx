"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Menu,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu } from "@/content/navigation";

function menuActive(pathname: string, menu: MegaMenu) {
  if (pathname === menu.overviewHref) return true;
  return menu.groups.some((group) =>
    group.links.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)),
  );
}

function DesktopMegaMenu({ menu }: { menu: MegaMenu }) {
  return (
    <div className="rl-mega">
      <div className="site-container rl-mega-grid">
        <div className="rl-mega-intro">
          <p>{menu.label}</p>
          <h2>{menu.featured.title}</h2>
          <span>{menu.featured.description}</span>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref}>
              {menu.overviewLabel}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </NavigationMenu.Link>
        </div>

        <div className="rl-mega-directory">
          {menu.groups.map((group) => (
            <section key={group.heading}>
              <p>{group.heading}</p>
              <div>
                {group.links.map((item) => (
                  <NavigationMenu.Link asChild key={item.href}>
                    <Link href={item.href}>
                      <span>{item.label}</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <NavigationMenu.Link asChild>
          <Link href={menu.featured.href} className="rl-mega-feature">
            <span className="rl-mega-feature-image">
              <Image
                src={menu.featured.image}
                alt={menu.featured.imageAlt}
                fill
                sizes="320px"
                className="object-cover"
              />
            </span>
            <span>
              <small>{menu.featured.eyebrow}</small>
              <strong>{menu.featured.title}</strong>
            </span>
          </Link>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

function MobileNav({
  pathname,
  settings,
}: {
  pathname: string;
  settings: PublicSiteSettings;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rl-mobile-trigger" type="button" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="rl-mobile-overlay" />
        <Dialog.Content className="rl-mobile-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>

          <div className="rl-mobile-head">
            <SiteLogo />
            <Dialog.Close asChild>
              <button type="button" aria-label="Close navigation">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <Accordion.Root type="multiple" className="rl-mobile-menu">
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
                      <Link
                        href={menu.overviewHref}
                        aria-current={pathname === menu.overviewHref ? "page" : undefined}
                        className="rl-mobile-overview"
                      >
                        {menu.overviewLabel}
                      </Link>
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

          <div className="rl-mobile-actions">
            <Dialog.Close asChild>
              <Link href="/open-account">Open an account</Link>
            </Dialog.Close>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login
              <ExternalLink size={14} aria-hidden="true" />
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
    <header className="rl-header">
      <div className="rl-utility">
        <div className="site-container rl-utility-inner">
          <p>
            Caballes-Go Securities, Inc.
            <span aria-hidden="true">·</span>
            <a href={settings.pseParticipantUrl} target="_blank" rel="noreferrer">
              PSE Trading Participant
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          </p>

          <nav aria-label="Utility navigation">
            <Link href="/insights">Research</Link>
            <Link href="/resources">Forms</Link>
            <Link href="/contact">Contact</Link>
            <a href={settings.clientLoginUrl} target="_blank" rel="noreferrer">
              Client login
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      <div className="site-container rl-primary">
        <SiteLogo />

        <NavigationMenu.Root className="rl-desktop-nav">
          <NavigationMenu.List className="rl-nav-list">
            {megaMenus.map((menu) => (
              <NavigationMenu.Item key={menu.id}>
                <NavigationMenu.Trigger
                  className={`rl-nav-trigger ${menuActive(pathname, menu) ? "is-active" : ""}`}
                >
                  {menu.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="rl-mega-content">
                  <DesktopMegaMenu menu={menu} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="rl-mega-position">
            <NavigationMenu.Viewport className="rl-mega-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="rl-header-actions">
          <Link href="/insights/library" aria-label="Search research" className="rl-search">
            <Search aria-hidden="true" />
          </Link>
          <Link href="/open-account" className="rl-open">
            Open an account
          </Link>
        </div>

        <div className="rl-mobile-only">
          <MobileNav pathname={pathname} settings={settings} />
        </div>
      </div>
    </header>
  );
}
