# Caballes-Go Securities institutional website

A premium, multipage corporate website for Caballes-Go Securities, Inc. (CGSI). The public site
uses Next.js, TypeScript, Tailwind CSS, Radix UI behavior primitives, and Motion for React. A
separate Payload CMS application provides an editor-friendly admin interface and content API
backed by PostgreSQL.

## Public site

### Information architecture

- `/` — institutional overview, quick actions, market snapshot, expertise, research, company,
  leadership, investor resources, newsroom, and pressroom
- `/clients` — client-relationship overview
- `/clients/individuals-families`
- `/clients/ofws-seafarers`
- `/clients/new-investors`
- `/clients/institutions`
- `/services` — brokerage-capability overview
- `/services/broker-assisted-trading`
- `/services/advisory-execution`
- `/services/research`
- `/services/direct-market-access`
- `/services/pera`
- `/services/settlement-custody`
- `/platforms` — current access and the controlled framework for future platforms/programs
- `/about` — company profile, principles, and documented recent history
- `/about/team` — board, executive leadership, and operating functions
- `/careers` — employer story and controlled job-opening content
- `/governance` — oversight, controls, and official regulatory links
- `/governance/risk-management`
- `/why-equities` — investment-product comparison, risks, and FAQs
- `/insights` and `/insights/[slug]` — editorial research desk and publication pages
- `/insights/market-notes` — dated market interpretation
- `/insights/guides` — structured investor learning
- `/insights/library` — searchable publication archive
- `/market-news` — market-focused editorial coverage
- `/market-announcements` — official market-source directory
- `/about/pressroom` — company facts and corporate releases
- `/tools` — investor-tools roadmap
- `/tools/calculators` — available position estimator
- `/tools/stock-screener`, `/tools/watchlist`, `/tools/portfolio` — planned workspaces
- `/investor-relations` — corporate information and official resources
- `/help` — task shortcuts and frequently asked questions
- `/accessibility` — accessibility approach and feedback path
- `/open-account` — account requirements, verification stages, and direct service contacts
- `/contact` — inquiry directory and verified contact channels
- `/privacy` and `/disclosures`

The desktop header contains five purpose-built mega menus: audience pathways, numbered
capabilities, an editorial research desk, an investor-tools workspace, and a corporate directory. Radix Navigation Menu
provides the desktop interaction model; Radix Dialog and Accordion provide focus management and
the equivalent mobile information hierarchy.

### Run the public site

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm test
```

## Full Docker stack

The repository root includes a production-oriented Compose stack for the public application,
Payload CMS, and PostgreSQL:

```bash
cp .env.example .env
# Replace every placeholder secret in .env.
docker compose up --build
```

- Public site: `http://localhost:3000`
- Payload admin: `http://localhost:3001/admin`

PostgreSQL and CMS uploads use named volumes. Production deployments should replace local media
storage with approved object storage and use managed secrets, backups, TLS, monitoring, and
restricted ingress.

The frontend reads published insight content from Payload when `PAYLOAD_CMS_URL` is configured:

```bash
PAYLOAD_CMS_URL=http://localhost:3001 npm run dev
```

If the CMS is unavailable, the site falls back to reviewed local seed content so public pages do
not fail.

## Payload CMS

The complete Payload application is in [`cms/`](./cms). It includes:

- Pages, Offerings, Insights, Market News, Market Announcements, Press Releases, People, Job
  Openings, Market Snapshots, Media, and authenticated Users collections
- variant-aware Navigation and announcement-capable Site Settings globals
- native drafts, version history, autosave, and scheduled publishing
- PostgreSQL persistence
- REST and GraphQL APIs
- a branded admin experience at `/admin`

See [`CMS-SETUP.md`](./CMS-SETUP.md) for local setup and production architecture.

## Design system

- Institutional blue family anchored by `#104862`
- Brand mark/accent: `#00CC00`, with a darker accessible green for interface text
- Neutral system: soft mineral whites, blue-charcoal text, and low-chroma green-gray surfaces
- Display typography: Source Serif 4 Variable
- Interface typography: Manrope Variable
- Photography: locally hosted, documented Pexels assets
- Motion: restrained hierarchy and state transitions with `prefers-reduced-motion` support

The visual language uses documented editorial photography, substantial rules, restrained color,
purposeful density, and very few decorative icons. It conveys maturity through structure and
craft without claiming an operating history that has not been verified.

See:

- [`DESIGN-RATIONALE.md`](./DESIGN-RATIONALE.md)
- [`ARCHITECTURE.md`](./ARCHITECTURE.md)
- [`PHOTOGRAPHY-DIRECTION.md`](./PHOTOGRAPHY-DIRECTION.md)
- [`IMAGE-SOURCES.md`](./IMAGE-SOURCES.md)
- [`CMS-SETUP.md`](./CMS-SETUP.md)

## Project handoff documentation

The [`docs/`](./docs/) directory preserves the product, company, UX, design, content, and
engineering context needed for future work. Start with [`docs/README.md`](./docs/README.md), then
read [`docs/AI-OPERATING-GUIDE.md`](./docs/AI-OPERATING-GUIDE.md) before making substantial
changes with an AI coding agent.

## Contact and account handoff

The public source does not simulate form submission. Contact and account pages direct visitors to
verified telephone, email, office, and secure-login routes while warning against sending sensitive
records through ordinary email. If CGSI later adds web forms, they require an approved server-side
service, error handling, spam protection, audit logging, retention rules, and a reviewed privacy
notice.

## Compliance and launch notes

Financial copy avoids promises of return. Investment risk, possible loss of principal, research
limitations, and non-advisory context are explicit. Legal and compliance stakeholders must approve
all production copy and confirm company facts immediately before launch.

Public references used for company and investor information:

- CGSI official site: <https://caballes-go.com/about-us>
- CGSI contact page: <https://caballes-go.com/contact-us>
- PSE participant record: <https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/>
- PSE investor education: <https://www.pse.com.ph/investing-at-pse/>
- SEC Investment 101: <https://appointment.sec.gov.ph/investors-education-and-information/investment-101/>

Before public launch:

1. Confirm telephone, email, address, participant details, minimum investment, and external login.
2. Complete legal/compliance review of disclosures, privacy, services, and account requirements.
3. Deploy Payload with PostgreSQL, managed media storage, TLS, backups, and least-privilege access.
4. Connect secure forms and approved operational workflows.
5. Add production analytics only after consent and data-governance approval.
