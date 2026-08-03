# Website experience and information architecture

## Experience objective

The public website should let a visitor answer, in order:

1. What kind of firm is CGSI?
2. Can CGSI serve a situation like mine?
3. What services or support are relevant?
4. How does CGSI work around a decision and after execution?
5. Who is accountable for the firm?
6. Where can I verify information or begin?

The design should support recognition before detail, progressive disclosure, and clear next steps.

## Current homepage flow

The active homepage in `app/page.tsx` follows this sequence:

1. **Hero**: Philippine market context, partner positioning, primary account-opening action, and
   lower-priority market-insights action.
2. **About CGSI**: institutional capability, human accountability, company profile, PSE
   participant reference, and a route to governance.
3. **Our services**: a stable heading and supporting paragraph, followed by category tabs and a
   single focused service panel.
4. **Who we serve**: image-led pathways for individuals and families, institutions and
   corporations, OFWs and seafarers, and new investors.
5. **How clients engage**: clarify the decision, coordinate execution, and stay informed after
   the trade.
6. **Market snapshot and research**: market state, sourced index information, featured insight,
   and supporting publications.
7. **Leadership**: one card per current board or executive record, each with a reserved portrait
   slot, role responsibility, and a governance route.
8. **Getting started**: account opening, speaking with CGSI, and reviewing requirements.
9. **Investor resources**: education, corporate information, and client support.
10. **News and pressroom**: current market or corporate updates.
11. **Final CTA**: a clear next conversation or account-opening action.

The hidden quick-actions block is intentionally retained in the source while the homepage flow is
being refined. Do not delete it without an explicit decision.

## Header and utility bar

The header has two different jobs:

- The utility bar provides small, infrequent tools: language, help, contact, accessibility, theme,
  and secure login.
- The main navigation provides primary information architecture through the five current domains:
  Clients, Services, Insights, Tools, and Company.

The utility bar must not look like a second navbar. Keep it compact, low-contrast, and secondary to
the main navigation. Current utility details include:

- Language at the far left with a globe and a left-aligned details popover.
- Help represented with a Lucide life-buoy icon and label.
- Contact represented with a Lucide mail icon and label.
- Accessibility as an icon-only utility with an accessible label.
- Day/night theme control using Lucide icons.
- A visible separator before the external Login action.
- Utility hover states that change color without adding a border box.

The exact implementation remains in `components/layout/site-header.tsx` and its styles in
`app/globals.css`.

## Service category interaction

The homepage service selector is a tablist, not a second navigation menu. It should:

- Keep the section heading and supporting paragraph stable while the selected panel changes.
- Use short category labels in a quiet horizontal row.
- Show one focused media-and-content panel at a time.
- List the relevant service links inside that panel.
- Support mouse, touch, keyboard arrows, Home, End, focus indication, and screen-reader state.
- Scroll horizontally on narrow screens rather than wrapping into a tall button wall.
- Avoid duplicate labels, decorative arrows, filled cards, and competing calls to action.

The component is `components/sections/service-category-tabs.tsx`; the source categories are defined
near the top of `app/page.tsx`.

## Mobile behavior

Mobile is a first-class reading mode, not a shrunken desktop layout:

- Audience pathways become one card per row instead of a bento arrangement.
- Service category labels remain a compact horizontally scrollable row.
- The selected service panel becomes one column with the image above the content.
- Homepage section headings and body copy should wrap naturally without forced line breaks.
- Leadership imagery stacks or reduces gracefully, and profile responsibility text remains readable.
- Navigation uses the Radix Dialog and Accordion implementation in `site-header.tsx`.
- Tap targets should remain at least approximately 44px high where practical.

## CTA hierarchy

The primary public action is normally `Open an account`. Secondary actions should help the visitor
learn or orient themselves, such as `Market insights`, `Our company`, `Governance & oversight`, or
`Review requirements`. Avoid adding several equal-weight buttons to a section.

## Page families

The route structure is organized around durable domains:

- `/clients` and `/clients/[slug]`: audience pathways.
- `/services` and `/services/[slug]`: service profiles.
- `/insights`, `/insights/[slug]`, and research subroutes: publications and education.
- `/market-news`, `/market-announcements`, and `/about/pressroom`: sourced updates and company
  communications.
- `/about`, `/about/team`, `/governance`, and `/careers`: corporate identity and accountability.
- `/open-account`, `/contact`, `/help`, and `/accessibility`: service tasks.
- `/investor-relations`, `/disclosures`, and `/privacy`: corporate and legal information.
- `/tools/*`: investor utilities and future workspace boundaries.

New pages should fit one of these domains or document why a new domain is necessary.
