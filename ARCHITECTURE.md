# CGSI public platform architecture

This document defines how the Caballes-Go Securities, Inc. public platform should grow without
turning into a collection of unrelated campaign pages. It covers the public Next.js application,
the Payload CMS service, future content and offering types, folder boundaries, content ownership,
and design-system governance.

The current website is the first public channel in this platform. It is not the final limit of the
architecture.

## 1. Architectural principles

1. **One public brand, multiple bounded systems.** Corporate pages, offerings, publications, news,
   and educational content can share one public experience. Transactional platforms and
   user-generated communities have different security and operational requirements and remain
   separate applications.
2. **Next.js owns presentation and public behavior.** Routes, metadata, rendering, accessibility,
   interaction, and composition belong to the public application.
3. **Payload owns managed content.** Editorial records, media metadata, workflow state,
   relationships, publishing dates, and content permissions belong to the CMS.
4. **The public site never owns editorial truth in UI components.** Components render typed domain
   data; they do not contain duplicated service descriptions, regulatory facts, or navigation
   structures.
5. **The CMS is not the public runtime.** Payload runs as a separate authenticated Node service
   backed by PostgreSQL and managed media storage.
6. **Design consistency is governed centrally.** Global tokens, primitives, patterns, and content
   rules are shared. A new page should compose the system rather than create its own visual
   language.
7. **Regulated facts require ownership and review.** A technically publishable record is not
   automatically approved financial communication.

## 2. System context

| System | Responsibility | Data it owns | It must not own |
| --- | --- | --- | --- |
| Public Next.js site | Public routes, SEO, rendering, accessibility, navigation behavior, forms, and content presentation | Build-time configuration, typed view models, short-lived caches | CMS credentials, editorial workflow, forum conversations, brokerage transactions |
| Payload CMS | Editorial administration, content workflow, media metadata, relationships, schedules, and public content API | Pages, offerings, publications, news, people, documents, navigation, settings | Trading accounts, orders, settlements, community messages, customer authentication |
| PostgreSQL for Payload | Durable CMS records and publishing state | CMS relational data | Public application sessions, trading data, forum data |
| Managed object storage | Original media and approved derivatives | Photographs, documents, thumbnails, media metadata references | Unreviewed client documents or confidential operational files |
| Client/trading platform | Authenticated brokerage and account workflows | Account, portfolio, order, and other regulated transactional records | Public marketing content |
| Future community application | Identity-aware discussion, moderation, reporting, and abuse controls | Profiles, posts, replies, reports, moderation events | Corporate page content, investment instructions, client service records |

The public application reads published content server-to-server through `PAYLOAD_CMS_URL`. Database
credentials and the Payload secret stay inside the CMS environment. The browser should not query
PostgreSQL or receive administrative credentials.

## 3. Deployment separation

The public site and the CMS must be deployable independently.

### Public application

- Next.js App Router with server components by default.
- Static generation or revalidation for public editorial pages where appropriate.
- Client components only for interaction that requires browser state.
- Public images delivered through an approved CDN or object-storage path.
- No dependency on CMS availability for every browser request.

### Payload service

- Node-compatible hosting with TLS.
- Managed PostgreSQL with backups, recovery testing, restricted ingress, and separate
  environments.
- Managed object storage instead of ephemeral container storage.
- Least-privilege editor roles and organizational SSO or MFA where available.
- Schema migrations, audit logging, monitoring, and controlled releases.

### Content delivery and resilience

- Use typed server-side CMS queries with bounded cache and revalidation rules.
- A CMS publish event may call a protected revalidation endpoint for time-sensitive content.
- Preserve the current reviewed local fallback only as a deliberate resilience mechanism. It must
  not silently mask outdated regulatory, contact, pricing, or product information.
- Critical content should show a reviewed last-known version or fail visibly to the responsible
  team; it should never be replaced with invented defaults.
- Preview and draft APIs remain authenticated and are not exposed through public page requests.

## 4. Public information architecture

The public site should expand through durable content domains rather than adding miscellaneous
navigation links.

| Domain | Examples | Recommended public routes |
| --- | --- | --- |
| Audiences | Individuals and families, OFWs and seafarers, new investors, institutions | `/clients`, `/clients/[slug]` |
| Services | Broker-assisted trading, research, execution, DMA, PERA, settlement support | `/services`, `/services/[slug]` |
| Future offerings | New services, investment products, digital platforms, partner solutions | `/platforms`, `/services/[slug]`, or a clearly named domain per mature product family |
| Publications | Market notes, investor education, research reports, explainers, commentary | `/insights`, `/insights/market-notes`, `/insights/guides`, `/insights/library`, `/insights/[slug]` |
| Market information | Market news and official exchange/issuer notice directories | `/market-news`, `/market-announcements` |
| Pressroom | Company announcements, media releases, leadership appointments | `/about/pressroom` |
| Investor tools | Calculators and future screening, watchlist, and portfolio workspaces | `/tools/...` |
| Corporate | Company profile, leadership, history, offices, careers | `/about/...`, `/careers` |
| Governance | Oversight, risk, privacy, AML, disclosures, policies, regulatory documents | `/governance/...`, `/disclosures/...` |
| Service tasks | Contact, support, account readiness, secure-platform handoff | `/contact`, `/help`, `/open-account` |

### Publications, blogs, and news

“Blog” should be a presentation or publication type, not an unstructured second content system.
A publication record can support types such as research, market commentary, investor education,
opinion, video, podcast, or blog article. Each type can have its own template while sharing
authors, topics, disclosures, related offerings, publication dates, and search.

Market News, Market Announcements, and Press Releases remain separate collections because
market reporting, official-source notices, and company communications have different authorship,
approval, expiry, legal metadata, and archive behavior.

### New products and platforms

Start with a shared `Offerings` model containing a controlled `kind` such as `service`, `product`,
or `platform`, plus relationships to audiences, documents, contacts, and publications. Split a
kind into its own collection only when it develops materially different fields, permissions,
workflow, or release cadence. Do not create a separate page builder or visual theme for every new
offering.

## 5. Community and forum boundary

A future forum is not a Payload page type. It is a separate application domain because it requires:

- user identity, account recovery, consent, and session management;
- posts, replies, reactions, following, notifications, and search;
- moderation queues, user reports, blocking, rate limits, and anti-spam controls;
- immutable moderation and safety audit events;
- retention, deletion, legal-hold, and incident-response procedures;
- explicit controls against accepting investment instructions or exposing client information.

The forum may live on a dedicated host such as `community.cgsi.com`, or behind a carefully managed
`/community` gateway. It should have its own database and deployment lifecycle. A shared
organizational identity provider may support single sign-on, but public-site, trading-platform,
and community permissions must remain separate.

Payload may manage community landing pages, rules, help articles, moderator biographies, and
featured educational content. It must not be used as the primary store for conversations,
moderation events, or brokerage-client communication.

## 6. Content model direction

The implemented Pages, Offerings, Insights, Market News, Market Announcements, Press Releases,
People, Job Openings, Market Snapshots, Media, Users, Navigation, and Site Settings models are
the current starting point. Expansion should introduce
explicit domain collections rather than placing everything in generic rich text.

### Recommended collections

- **Pages** — exceptional corporate pages and composed landing pages.
- **Audiences** — client circumstances, needs, related offerings, and next steps.
- **Offerings** — services, products, and platforms with controlled types.
- **Publications** — research, insights, explainers, commentary, podcasts, videos, and blog posts.
- **News** — corporate announcements, media releases, notices, and archive metadata.
- **People** — approved biographies, roles, credentials, portraits, and publication authorship.
- **Media** — source, rights, consent, alt text, focal point, derivatives, and review status.
- **Documents** — disclosures, forms, policies, research PDFs, version, effective date, and owner.
- **Topics and taxonomies** — controlled topics shared by publications and offerings.
- **Offices and contact channels** — verified locations, hours, phone numbers, and service scope.
- **Redirects** — source path, destination, status code, owner, and review date.

### Recommended globals

- Primary and utility navigation.
- Footer and legal navigation.
- Site identity and approved corporate contact information.
- Default SEO and social-sharing settings.
- Risk and disclosure snippets with effective dates.
- Emergency or operational notice settings.

### Shared fields

Every publishable record should support, where relevant:

- stable slug and canonical URL;
- draft, review, scheduled, published, archived, and withdrawn states;
- content owner and approver;
- created, updated, published, effective, expiry, and next-review dates;
- audience, topic, offering, author, and document relationships;
- SEO title, description, image, canonical setting, and indexability;
- page-specific risk or disclosure references;
- revision history and a reason for material updates.

## 7. Editorial workflow and ownership

Payload permissions enforce who can perform an action. The following matrix defines who is
accountable for the content itself.

| Content | Primary owner | Required reviewers |
| --- | --- | --- |
| Corporate messaging and navigation | Corporate communications or marketing | Business owner; compliance where claims are made |
| Service and offering pages | Offering owner | Operations, compliance, legal as applicable |
| Market research and investment publications | Authorized research or investment team | Supervisory and compliance review required by policy |
| News and company announcements | Corporate communications | Executive sponsor; legal/compliance as applicable |
| Regulatory status, disclosures, AML and risk content | Compliance | Legal, operations, DPO or information security where applicable |
| Privacy and cookie content | Data Protection Officer or privacy owner | Legal, information security, marketing technology owner |
| Account requirements and support channels | Client service and operations | Compliance and data owner |
| People biographies and credentials | HR or corporate communications | The individual; compliance for licensed credentials |
| Photography and media rights | Corporate communications | Design, legal/rights owner, DPO when personal data is involved |
| CMS schema, roles and availability | Technology owner | Security, content owners, data owner |
| Design tokens and shared components | Design-system owner | Frontend owner, accessibility reviewer |

Recommended publishing flow:

1. Draft.
2. Subject-matter and fact review.
3. Compliance, legal, privacy, or security review as required by content type.
4. Final editorial and accessibility check.
5. Schedule or publish.
6. Monitor and review by its recorded next-review date.
7. Supersede, archive, or withdraw while preserving the audit trail.

## 8. Frontend separation of concerns

### Current boundaries

- `app/` owns routes, route metadata, layouts, and page composition.
- `components/` owns reusable presentation and interaction.
- `lib/payload/` is the boundary between Payload responses and frontend view models.
- `content/` owns reviewed local fallbacks and typed navigation/configuration.
- `app/globals.css` owns design tokens, base styles, global layout rules, and shared component
  classes.
- `public/` contains reviewed, distributable static assets.
- `cms/` is the separate Payload application.
- `tests/` and `scripts/` own validation and release support.

### Recommended expansion structure

This is a target structure for the next refactor, not a claim that every directory exists today:

```text
app/
  (corporate)/
    about/
    governance/
    contact/
  clients/
  services/
  offerings/
  insights/
  news/
components/
  ui/            # approved accessible primitives and variants
  layout/        # containers, grids, section frames
  navigation/    # utility header, main navigation, mega menu, footer
  content/       # cards, article metadata, document lists, rich-content renderers
  features/      # domain compositions used by multiple routes
lib/
  cms/
    client.ts
    queries/
    mappers/
  domain/
    audiences/
    offerings/
    publications/
  validation/
  config/
cms/
  src/
    collections/
    globals/
    blocks/
    access/
    hooks/
    migrations/
tests/
public/
```

Route groups may organize code without changing public URLs.

### Boundary rules

- Route files compose domain and presentation modules; they should not contain large content
  arrays.
- CMS response types are mapped into frontend domain types inside `lib/cms/`. Payload-specific
  shapes should not leak through the component tree.
- Data fetching remains in server routes, server components, or server utilities. Interactive
  client components receive the minimum serializable data they need.
- Shared UI primitives contain no brokerage copy or CMS queries.
- Feature components may understand a domain, but they should not own global navigation,
  typography, or theme values.
- Public forms post only to approved server endpoints. They do not write directly to Payload
  collections unless a separately designed and secured workflow explicitly requires it.
- Transactional or personally identifiable brokerage data never enters the editorial CMS.

## 9. Design-system governance

### Token ownership

`app/globals.css` is the source of truth for:

- brand, semantic, surface, text, border, focus, and status colors;
- font families, type scale, line height, and tracking;
- spacing, content widths, grids, and section rhythm;
- borders, radii, shadows, and elevation;
- interaction duration, easing, distance, and reduced-motion behavior;
- shared focus, selection, link, button, form, and document styles.

Pages and components should use semantic variables or approved utilities. They must not introduce
new hexadecimal colors, private spacing scales, font families, arbitrary shadows, or animation
curves without a design-system decision.

### Component layers

1. **Primitives:** accessible buttons, links, fields, dialogs, accordions, tabs, menus, and
   disclosure controls.
2. **Layout:** containers, editorial grids, section frames, media splits, and content rails.
3. **Content patterns:** article cards, publication metadata, service summaries, document lists,
   people profiles, and calls to action.
4. **Features:** mega navigation, insight library, account journey, and other domain-aware
   compositions.
5. **Pages:** route-specific ordering and content only.

An accessible UI library may provide behavior-heavy primitives, but CGSI-owned wrappers should
define appearance and API. Pages should not import third-party primitives directly. Before adding
a dependency, review its official documentation, license, maintenance, server-rendering support,
keyboard behavior, accessibility contract, bundle effect, and theming model.

### Promotion and change rules

- Promote a pattern into the shared system when it appears on at least two distinct routes or has
  accessibility behavior that must be implemented once.
- Add a variant only when it represents a real semantic need; do not create variants to preserve
  one-off page styling.
- Any token or shared-component change must be reviewed against desktop, tablet, and mobile
  layouts, keyboard use, high zoom, reduced motion, and representative long content.
- Breaking component changes require a migration plan for all consumers.
- New content blocks require a documented purpose, responsive behavior, allowed fields, editorial
  guidance, and accessibility treatment.
- Decorative icons are exceptional. Use icons for recognizable actions or state, not as a visual
  requirement for every paragraph or card.

### Quality gates

- Type checking, linting, production build, and route tests.
- Keyboard, focus, semantics, contrast, reflow, zoom, and reduced-motion checks.
- CMS preview of short, long, missing, scheduled, expired, and withdrawn content.
- Broken-link, redirect, metadata, canonical URL, sitemap, and structured-data checks.
- Image rights, alt text, crop, file size, and focal-point review.
- Compliance sign-off for financial claims, service descriptions, research, and disclosures.
- Periodic design-system audit to remove duplicate patterns and unused variants.

## 10. Decision record for future expansion

Before introducing a new service, product, platform, publication type, or application, record:

1. the audience and user task;
2. the accountable business and content owners;
3. whether it is editorial, transactional, or user-generated;
4. the data classification and retention requirements;
5. the appropriate existing content model and route domain;
6. whether new fields or a genuinely separate bounded system are required;
7. regulatory, accessibility, security, and privacy reviewers;
8. the shared components and tokens it will use;
9. the migration, redirect, analytics, and review plan.

This prevents organizational growth from becoming visual, technical, or editorial fragmentation.
