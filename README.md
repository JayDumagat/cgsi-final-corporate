# Caballes-Go Securities corporate website

A full multipage Next.js App Router website with TypeScript, locally hosted fonts and images,
Tailwind CSS, Radix navigation/dialog primitives, and Motion. Content lives in typed files;
there is no CMS, content API, database, or Cloudflare/Vinext runtime dependency.

## Run

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm start
```

`npm test` checks the generated Next.js HTML, route inventory, navigation destinations, local
assets, and content dependencies. Run the build first. No network or running server is needed.
Docker is optional: `docker compose up --build` runs a single Next.js service on port 3000.
No CMS credentials or database environment variables are required.

## Website features preserved

- Five distinct mega menus: audiences, expertise, research, tools, and company.
- Utility bar, help, contact, language menu, theme switcher, login link, and announcement dismissal.
- Accessible mobile navigation with all menu groups.
- Client overview and four audience pages.
- Six service pages, including the existing DMA and PERA pages.
- Company, team, governance, risk, careers, pressroom, and investor relations.
- Research overview, market notes, guides, searchable library, and article pages.
- Market news and official announcements.
- Tools hub, working investment calculator, and existing planned-tool pages.
- Account opening, contact, help, privacy, disclosures, and accessibility.
- Additional individual/corporate preparation paths and sourced forms at `/get-started` and `/resources`.

Existing page content and capabilities have been retained. Planned tools remain explicitly
planned; the visual refresh does not turn them into live brokerage functionality.

## Content and components

| Location | Purpose |
| --- | --- |
| `content/navigation.ts` | All mega-menu groups, descriptions, destinations, and feature stories |
| `content/site-settings.ts` | Existing company settings, announcements, leadership, and market snapshot |
| `content/profiles.ts` | Client and service profiles |
| `content/insights.ts` | Local articles, categories, and publication dates |
| `content/market-content.ts` | Existing market and corporate editorial content |
| `content/company.ts`, `content/documents.ts` | Sourced account preparation and official form links |
| `lib/content.ts` | Local content access functions; no remote fetches |
| `components/layout/` | Shared utility bar, mega menus, mobile navigation, logo, footer |
| `components/sections/corporate-hero.tsx` | Reusable homepage hero |
| `components/sections/service-category-tabs.tsx` | Keyboard-operable service tabs |
| `components/pages/` | Existing audience and service templates |
| `app/refinement.css` | Shared visual refinements, spacing, type, responsive and dark-theme rules |

See [design and verification notes](docs/REDESIGN-2026-09.md), [architecture](ARCHITECTURE.md),
and [image sources](IMAGE-SOURCES.md). Older documents in `docs/` describe the previous CMS
architecture; this README and the September redesign notes supersede that architecture.

## Content and launch review

The restored local content is the existing project content, not a fresh compliance approval.
Existing market numbers, publication attribution, leadership roles, service availability,
and the external login destination still need company review before public launch.
The homepage photography is Philippine context, not a representation of CGSI’s office or staff.
The existing Sites manifest is historical; it is not used by the Next.js application or build.
