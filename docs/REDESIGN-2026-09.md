# September 2026 visual refinement and CMS removal

## Scope

Preserve the full multipage website, mega menus, utility bar, theme control, audience and
service pages, research library, market pages, calculator, company pages, and account/support
journeys. The user clarified that this is a visual redesign, not a reduction in functionality.
The CMS is the only product capability removed. Related deployment scaffolding is replaced
with standard Next.js so the app runs independently.

## Design thinking

Audience hypotheses, not participant findings: first-time investors need clear orientation;
experienced investors need quick access to research and service detail; corporate prospects
need execution and operational information; existing clients need forms, tools, and support.
Older users and mobile visitors benefit from larger text, controls, and less crowded groups.

Problem: how can visitors understand CGSI, verify credibility, and find their next step without
losing the depth of the existing corporate site?

Two approaches considered: a five-link brochure navigation with fewer entry points, or the
existing task-rich mega-menu structure with clearer spacing and hierarchy. The latter is the
selected approach after the user's scope clarification. Every original route remains a page.

The prototype uses a calm split hero, 1280px container, responsive gutters, shared section and
panel spacing, readable descriptions in mega menus, and image/text audience cards. Service
tabs, content filters, calculator, utility controls, and mobile accordions remain functional.
Source Serif 4 is used for editorial headings; Manrope handles body text and controls. Brand
blue and green remain, with white and neutral surfaces. Dark mode is retained.

## Reusable components and content

`CorporateHero` contains the homepage proposition and actions. Existing `SiteHeader`, mega-menu
panels, mobile navigation, `ServiceCategoryTabs`, `PageHero`, `SectionHeading`, audience/service
templates, and `SiteFooter` remain shared. Spacing refinements live in `app/refinement.css`.
`lib/content.ts` reads typed local files rather than a remote CMS. No secrets or DB required.

The account preparation and forms library are additive. Their PDF/DOCX links come directly
from CGSI's official forms page. The original `/open-account` page is retained.

## Sources reviewed on 24 September 2026

- [CGSI company profile](https://caballes-go.com/about-us): published services and audience.
- [PSE participant](https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/): active, broker ID 378.
- [Getting started](https://caballes-go.com/get-started): individual and corporate paths.
- [Forms](https://caballes-go.com/forms): four account PDFs and four client-request DOCX files.
- [Contact](https://caballes-go.com/contact-us): official general phone, email, and address.
- [Disclosures](https://caballes-go.com/disclaimerdisclosure): investment and research limitations.
- [Vanguard corporate](https://corporate.vanguard.com/) and [investor](https://investor.vanguard.com/): hierarchy and information organization reference, not copied assets or layouts.

## Assumptions and missing approvals

Original content is restored as existing project content. This is not a new verification of
every market number, article attribution, leadership title, founding/history statement,
service availability, or portal destination. These require company review before publication.
No new founding date, fee, return, testimonial, or technology capability is introduced.

The forms pages describe a proposed preparation flow. A complete checklist, submission method,
and approval timeframe need operational confirmation. No instant approval is claimed.
Planned tools retain their existing availability labels. No external messages are sent.

## Verification and limits

The production HTML regression suite checks the full original page inventory, mega-menu and
utility controls, internal destinations, local assets, local content architecture, and distinct
account-form paths. All five tests pass, as do ESLint and the production build including
TypeScript validation; Next.js generated 56 pages and metadata outputs.

Browser checks verified desktop menu dismissal with Escape and restored focus, mobile service
accordions, keyboard service tabs, research search (one matching sector-breadth article), and
calculator updates (PHP 10,000 at PHP 25 gives 400 shares and no remainder). No horizontal
overflow was found on the homepage at 320px, 390px, or 1440px, or the calculator at 768px.
The theme controls now use a shared hydration-safe snapshot and agree across desktop/mobile.
Both themes were checked. The user-selected `ret.jpeg` hero is retained; its 399×501 resolution
is a limitation for desktop sharpness. Docker configuration was updated but not built locally.

This is heuristic and engineering evaluation, not actual participant testing. Before launch,
recruit representative first-time, experienced, corporate, and existing-client participants;
ask them to explain CGSI, locate a service, select an account, find a form, read a publication,
and reach support. Record task completion, errors, and comprehension without coaching.

WCAG 2.2 AA is a target, not a conformance claim. Full assistive-technology review, 200% text
resize, reduced-motion device testing, PDF accessibility, and field Core Web Vitals remain
launch checks. Aim for LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1 at the 75th percentile, separately
for mobile and desktop. No real-user performance measurements have been obtained.

The old Sites project returned project-not-found. No deployment or audience change occurred.

## Institutional-modern redesign pass — 26 September 2026

This branch establishes the next visual direction requested for the corporate site. The existing
multi-page information architecture and five mega-menu domains remain intact. The work deliberately
does not turn CGSI into a fintech-style trading app.

### Experience direction

- Modern, clean, editorial layouts with institutional restraint.
- The brand green `#00CC00` is treated as a directional accent; deeper green shades carry
  institutional surfaces and high-emphasis actions.
- Square-to-subtle-radius geometry, visible rules, and disciplined grids replace rounded SaaS-card
  styling.
- The homepage starts with audience orientation so first-time investors, experienced investors,
  institutional visitors, and existing clients can recognize their path without learning internal
  brokerage terminology first.
- Research, investor education, market notices, tools, governance, and disclosures are presented as
  a connected knowledge ecosystem rather than secondary footer content.
- Static market values are no longer foregrounded on the homepage where visitors could mistake
  historical numbers for a live quote feed.

### HCI rationale

The redesign applies recognition over recall, progressive disclosure, Hick's Law, clear visual
hierarchy, large target sizes, source/date visibility, and consistent navigation language. Content
is designed to work for a broad adult audience, including people with limited securities-market
knowledge and professional users who need fast access to detailed information.

The homepage uses a two-layer path: fast audience/task orientation first, then deep service,
research, governance, and support material. The mega menu remains the desktop depth mechanism;
mobile continues to expose the same destinations through an accessible disclosure pattern.

### SEO, GEO, and production work

- Canonical metadata and social metadata are explicit.
- Existing organization structured data remains.
- Sitemap and robots metadata remain part of the application.
- Next.js image optimization is enabled for AVIF/WebP instead of globally bypassing optimization.
- Baseline security headers are configured at the framework layer.
- Semantic headings and section labels are tied with `aria-labelledby` where appropriate.
- Reduced-motion behavior and visible keyboard focus remain mandatory.

### Photography

The redesign reuses the locally hosted Pexels-derived editorial library documented in
`IMAGE-SOURCES.md`. The low-resolution `ret.jpeg` hero is replaced by the documented Makati dusk
asset so the first viewport remains sharp on desktop screens.

### Stack migration note

The visual and information-architecture pass is intentionally isolated from the headless-component
migration so dependency-lock changes can be reviewed independently. The current interaction
primitives remain functional while the Ark UI/Boneyard migration is prepared as a separate,
testable dependency commit rather than leaving `package.json` and `package-lock.json` out of sync.

