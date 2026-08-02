"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Accessibility,
  ChevronDown,
  Globe,
  LifeBuoy,
  LogIn,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteLogo } from "@/components/layout/site-logo";
import { ThemeToggle } from "@/components/providers/theme-toggle";
import type { PublicSiteSettings } from "@/content/site-settings";
import { megaMenus, type MegaMenu, type NavigationLink } from "@/content/navigation";

const utilityLinks = [
  { label: "Help center", utilityLabel: "Help", href: "/help", icon: LifeBuoy },
  { label: "Contact CGSI", utilityLabel: "Contact", href: "/contact", icon: Mail },
  { label: "Accessibility", utilityLabel: undefined, href: "/accessibility", icon: Accessibility },
] as const;

function isMenuActive(pathname: string, menu: MegaMenu) {
  if (menu.id === "clients") return pathname.startsWith("/clients");
  if (menu.id === "services") {
    return pathname.startsWith("/services") || pathname.startsWith("/platforms");
  }
  if (menu.id === "insights") {
    return (
      pathname.startsWith("/insights") ||
      pathname.startsWith("/news") ||
      pathname.startsWith("/market-news") ||
      pathname.startsWith("/market-announcements")
    );
  }
  if (menu.id === "tools") return pathname.startsWith("/tools");
  return (
    pathname.startsWith("/about") ||
    pathname.startsWith("/governance") ||
    pathname.startsWith("/careers")
  );
}

function MenuLink({
  item,
  numbered = false,
}: {
  item: NavigationLink;
  numbered?: boolean;
}) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={item.href} className={`mega-link ${numbered ? "mega-link-numbered" : ""}`}>
        {numbered && item.meta ? <span className="mega-link-index">{item.meta}</span> : null}
        <span className="mega-link-copy">
          <strong>{item.label}</strong>
          {item.description ? <small>{item.description}</small> : null}
        </span>
        <span className="mega-link-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}

function FeaturedStory({
  menu,
  className = "",
}: {
  menu: MegaMenu;
  className?: string;
}) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={menu.featured.href} className={`mega-feature ${className}`}>
        <span className="mega-feature-media">
          <Image
            src={menu.featured.image}
            alt={menu.featured.imageAlt}
            fill
            sizes="(min-width: 1100px) 32vw, 100vw"
            className="object-cover"
          />
        </span>
        <span className="mega-feature-copy">
          <span>{menu.featured.eyebrow}</span>
          <strong>{menu.featured.title}</strong>
          <small>{menu.featured.description}</small>
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}

function AudiencePanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-layout mega-layout-audiences">
      <div className="mega-audience-intro">
        <p className="mega-menu-label">{menu.label}</p>
        <h2>Start with the investor, not the product.</h2>
        <p>{menu.featured.description}</p>
        <NavigationMenu.Link asChild>
          <Link href={menu.overviewHref} className="text-link">
            {menu.overviewLabel}
          </Link>
        </NavigationMenu.Link>
      </div>
      <div className="mega-audience-paths">
        {menu.groups.map((group) => (
          <section key={group.heading} aria-labelledby={`mega-${menu.id}-${group.heading}`}>
            <p id={`mega-${menu.id}-${group.heading}`} className="mega-group-heading">
              {group.heading}
            </p>
            <div>
              {group.links.map((item) => (
                <MenuLink key={item.href} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <FeaturedStory menu={menu} className="mega-feature-portrait" />
    </div>
  );
}

function CapabilitiesPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-layout mega-layout-capabilities">
      <div className="mega-capability-heading">
        <p className="mega-menu-label">{menu.label}</p>
        <h2>Connected expertise across the trade lifecycle.</h2>
        <NavigationMenu.Link asChild>
          <Link href={menu.overviewHref}>{menu.overviewLabel} <span aria-hidden="true">→</span></Link>
        </NavigationMenu.Link>
      </div>
      <div className="mega-capability-groups">
        {menu.groups.map((group) => (
          <section key={group.heading}>
            <p className="mega-group-heading">{group.heading}</p>
            {group.links.map((item) => (
              <MenuLink key={item.href} item={item} numbered />
            ))}
          </section>
        ))}
      </div>
      <FeaturedStory menu={menu} className="mega-feature-landscape" />
    </div>
  );
}

function EditorialPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-layout mega-layout-editorial">
      <FeaturedStory menu={menu} className="mega-feature-editorial" />
      <div className="mega-editorial-desk">
        <div className="mega-editorial-heading">
          <p className="mega-menu-label">From the research desk</p>
          <NavigationMenu.Link asChild>
            <Link href={menu.overviewHref}>{menu.overviewLabel} <span aria-hidden="true">→</span></Link>
          </NavigationMenu.Link>
        </div>
        <div className="mega-editorial-columns">
          {menu.groups.map((group) => (
            <section key={group.heading}>
              <p className="mega-group-heading">{group.heading}</p>
              <div>
                {group.links.map((item) => (
                  <NavigationMenu.Link asChild key={item.href}>
                    <Link href={item.href} className="mega-editorial-link">
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
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

function CompanyPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-layout mega-layout-company">
      <div className="mega-company-fact">
        <p className="mega-menu-label">Caballes-Go Securities</p>
        <p className="mega-company-year">2024</p>
        <p>Current corporate identity adopted</p>
        <NavigationMenu.Link asChild>
          <Link href={menu.overviewHref} className="text-link">
            {menu.overviewLabel}
          </Link>
        </NavigationMenu.Link>
      </div>
      <div className="mega-company-directory">
        {menu.groups.map((group) => (
          <section key={group.heading}>
            <p className="mega-group-heading">{group.heading}</p>
            <div>
              {group.links.map((item) => (
                <MenuLink key={item.href} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <FeaturedStory menu={menu} className="mega-feature-company" />
    </div>
  );
}

function ToolsPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-layout mega-layout-tools">
      <div className="mega-tools-intro">
        <p className="mega-menu-label">Investor workspace</p>
        <h2>Tools that support the decision—not replace it.</h2>
        <p>
          Start with practical planning utilities. Authenticated monitoring and portfolio
          workspaces can be introduced as the platform expands.
        </p>
        <NavigationMenu.Link asChild>
          <Link href={menu.overviewHref} className="text-link">
            {menu.overviewLabel}
          </Link>
        </NavigationMenu.Link>
      </div>
      <div className="mega-tools-directory">
        {menu.groups.flatMap((group) => group.links).map((item, index) => (
          <NavigationMenu.Link asChild key={item.href}>
            <Link href={item.href} className="mega-tool-link">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
              {item.meta ? <em>{item.meta}</em> : null}
            </Link>
          </NavigationMenu.Link>
        ))}
      </div>
      <FeaturedStory menu={menu} className="mega-feature-tools" />
    </div>
  );
}

function MegaMenuPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className={`mega-panel mega-panel-${menu.variant}`}>
      <div className="site-container">
        {menu.variant === "audiences" ? <AudiencePanel menu={menu} /> : null}
        {menu.variant === "capabilities" ? <CapabilitiesPanel menu={menu} /> : null}
        {menu.variant === "editorial" ? <EditorialPanel menu={menu} /> : null}
        {menu.variant === "tools" ? <ToolsPanel menu={menu} /> : null}
        {menu.variant === "company" ? <CompanyPanel menu={menu} /> : null}
      </div>
    </div>
  );
}

function DesktopMegaMenuItem({ menu, pathname }: { menu: MegaMenu; pathname: string }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={`nav-trigger ${isMenuActive(pathname, menu) ? "nav-trigger-active" : ""}`}
      >
        {menu.label}
        <ChevronDown aria-hidden="true" />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="mega-content">
        <MegaMenuPanel menu={menu} />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function MobileMegaMenuItem({ menu, pathname }: { menu: MegaMenu; pathname: string }) {
  return (
    <Accordion.Item value={menu.id} className="mobile-nav-group">
      <Accordion.Header>
        <Accordion.Trigger className="mobile-nav-trigger">
          {menu.label}
          <ChevronDown aria-hidden="true" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mobile-nav-content">
        <div>
          <Dialog.Close asChild>
            <Link
              href={menu.overviewHref}
              className="mobile-nav-overview"
              aria-current={pathname === menu.overviewHref ? "page" : undefined}
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
  );
}

function LanguageMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "language-menu language-menu-mobile" : "language-menu"}>
      <summary aria-label="Choose site language" title="Choose site language">
        <Globe aria-hidden="true" />
        <span>EN</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div className="language-popover">
        <span aria-current="true">English</span>
        <span aria-disabled="true">Filipino <small>Planned</small></span>
      </div>
    </details>
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
        <button type="button" className="header-menu-button" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-nav-overlay" />
        <Dialog.Content className="mobile-nav-panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="mobile-nav-head">
            <SiteLogo />
            <Dialog.Close asChild>
              <button type="button" className="header-menu-button" aria-label="Close navigation">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="mobile-nav-body">
            <Accordion.Root type="multiple" className="mobile-nav-groups">
              {megaMenus.map((menu) => (
                <MobileMegaMenuItem key={menu.id} menu={menu} pathname={pathname} />
              ))}
            </Accordion.Root>

            <div className="mobile-nav-actions">
              <Dialog.Close asChild>
                <Link href="/open-account" className="btn btn-primary">
                  Open an account
                </Link>
              </Dialog.Close>
              <a
                href={settings.clientLoginUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Client portal <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div className="mobile-nav-utility">
              <LanguageMenu mobile />
              {utilityLinks.map((item) => (
                <Dialog.Close asChild key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </Dialog.Close>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SiteHeader({ settings }: { settings: PublicSiteSettings }) {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <AnnouncementBar announcement={settings.announcement} />

      <div className="utility-bar">
        <div className="site-container utility-bar-inner">
          <LanguageMenu />
          <nav aria-label="Utility navigation" className="utility-actions">
            {utilityLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="utility-icon-link"
                data-icon-only={!item.utilityLabel ? "true" : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
                aria-label={item.label}
                title={item.label}
              >
                {item.icon ? <item.icon aria-hidden="true" /> : null}
                {item.utilityLabel ? <span>{item.utilityLabel}</span> : null}
              </Link>
            ))}
            <ThemeToggle compact />
            <span className="utility-splitter" aria-hidden="true" />
            <a
              href={settings.clientLoginUrl}
              target="_blank"
              rel="noreferrer"
              className="utility-login"
              aria-label="Client portal (opens in a new tab)"
              title="Client portal (opens in a new tab)"
            >
              <LogIn aria-hidden="true" />
              <span>Login</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="site-container main-navigation">
        <SiteLogo />

        <NavigationMenu.Root className="desktop-navigation">
          <NavigationMenu.List className="desktop-navigation-list">
            {megaMenus.map((menu) => (
              <DesktopMegaMenuItem key={menu.id} menu={menu} pathname={pathname} />
            ))}
            <NavigationMenu.Indicator className="nav-indicator">
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
          <div className="nav-viewport-position">
            <NavigationMenu.Viewport className="nav-viewport" />
          </div>
        </NavigationMenu.Root>

        <div className="desktop-header-action">
          <Link
            href="/open-account"
            className="header-cta"
            aria-current={pathname === "/open-account" ? "page" : undefined}
          >
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
