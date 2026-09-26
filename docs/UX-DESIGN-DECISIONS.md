# CGSI UX Design Decisions — September 2026

This pass corrects the homepage and shared shell around a broad audience: first-time investors,
experienced retail clients, corporate users, institutional professionals, and older adults.

## Design thinking

### Empathize

Key user tensions:
- New investors need plain language and visible next steps.
- Experienced investors need fast access to research and services without introductory clutter.
- Institutional users need credibility, operational detail, and direct routes to professional services.
- Older users benefit from stable layouts, generous spacing, readable measures, larger targets, and
  predictable navigation.
- All audiences need confidence that the firm is legitimate before they are asked to act.

### Define

The primary problem is not lack of content. It is excess simultaneous attention demand.

The redesigned homepage therefore limits each section to one dominant question:
1. What is CGSI?
2. What can CGSI do for me?
3. How does CGSI help me understand the market?
4. Which client path applies to me?
5. What is new?
6. What should I do next?

### Ideate and prototype

The interface intentionally favors:
- open two-column compositions over card grids;
- one strong image per major narrative block;
- thin rules and whitespace instead of containers around every item;
- short task-oriented labels in navigation;
- progressive disclosure in the mega menu and mobile accordion;
- a restrained type scale rather than oversized editorial display type.

## HCI principles and laws

- **Hick's Law:** five primary navigation domains, with detail deferred to the mega menu.
- **Recognition over recall:** descriptive navigation labels and visible client pathways.
- **Progressive disclosure:** only essential service summaries appear on the homepage; deeper routes
  retain professional detail.
- **Gestalt proximity and common region:** whitespace and rules group related information without
  excessive cards.
- **Jakob's Law:** familiar utility bar, primary navigation, mega menu, content sections, and footer.
- **F-pattern / scanning behavior:** headings, short summaries, dated research, and aligned action
  links support rapid scanning.
- **Fitts's Law:** interactive targets are designed around 44–48px minimum control heights.
- **Aesthetic-usability effect:** restrained imagery, typography, and spacing support trust without
  decorative complexity.

## WCAG-oriented implementation

- Visible `:focus-visible` outlines.
- 44px+ interactive targets for primary controls and navigation links.
- Semantic headings and labelled sections.
- Descriptive image alt text; decorative icons are `aria-hidden`.
- Reduced-motion handling via `prefers-reduced-motion`.
- Increased-contrast overrides via `prefers-contrast: more`.
- Forced-colors support for key controls.
- Text measures are constrained to reduce long-line fatigue.
- Muted text values are kept dark enough for accessible reading on light surfaces.
- Mobile navigation preserves every top-level destination without horizontal scrolling.

## Responsive system

Desktop uses a calm two-column rhythm. At tablet widths, content stacks while preserving hierarchy.
Mobile uses one-column flow, full-width actions, shorter reading measures, and image heights that
remain visually useful without forcing excessive scrolling.

The utility bar is simplified on small screens instead of wrapping into multiple rows.

## Image strategy

Photography is used as structural content, not as decoration:
- Makati skyline: market and Philippine-business context.
- Operations team: service continuity and human accountability.
- Research meeting: knowledge and research participation.
- Private-client photography: personal investing relationships.
- Institutional-team photography: professional mandates and corporate relationships.

The assets are from the repository's documented Pexels-derived library in `IMAGE-SOURCES.md`.

## Visual scale

Headline sizes are intentionally restrained:
- Hero: approximately 52–77px desktop depending on viewport.
- Major section headings: approximately 37–58px.
- Body copy: approximately 14–16px with 1.7–1.8 line height.

Whitespace, not font size, provides emphasis.
