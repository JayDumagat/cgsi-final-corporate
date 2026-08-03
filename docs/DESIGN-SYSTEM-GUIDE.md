# CGSI design system guide

## Design proposition

CGSI should look like a prepared Philippine financial institution with real people behind the
work. The visual system uses editorial structure, strong typographic hierarchy, rules, quiet
surfaces, and documentary working images. It should feel established without pretending to have a
history, scale, or capability that has not been verified.

## Visual principles

- **Institutional**: use order, proportion, evidence, and restraint.
- **Human**: show people in credible work or client contexts and explain responsibility plainly.
- **Local**: use Philippine market, office, and city context when it is truthful and rights-cleared.
- **Considered**: give important decisions enough space without creating empty decorative zones.
- **Useful**: every visual or interaction should help recognition, comparison, trust, or action.
- **Connected**: reuse the same tokens, rules, link treatments, and spacing rhythm across sections.

## Tokens currently in `app/globals.css`

### Brand and semantic colors

| Token | Current role |
| --- | --- |
| `--cgsi-blue` | Primary institutional blue for headings and links |
| `--cgsi-blue-mid` | Secondary blue for supporting accents |
| `--cgsi-blue-deep` | Dark institutional surface and governance blocks |
| `--cgsi-blue-dark` | Deepest hero and structural background |
| `--cgsi-green` | Brand accent and primary action background |
| `--cgsi-green-ui` | Accessible green for interface text and indicators |
| `--cgsi-green-dark` | Darker green for small labels and icon accents |
| `--cgsi-green-soft` | Quiet green surface |
| `--cgsi-paper` | Mineral paper surface |
| `--cgsi-warm` | Warm neutral section surface |
| `--cgsi-ink` | Primary body text |
| `--cgsi-muted` | Secondary body text |
| `--cgsi-subtle` | Low-emphasis metadata |
| `--cgsi-line` | Structural rules and borders |
| `--cgsi-surface` | Main white or dark surface |

Dark mode reassigns these semantic tokens. New components should consume tokens rather than hard-
coding a new palette. Do not introduce a page-specific purple, gradient, beige, or dark-blue-only
theme.

### Typography

- `Manrope Variable` is the interface and body family.
- `Source Serif 4 Variable` is the display and editorial family.
- Body text is 16px by default.
- Section headings use a controlled clamp and should remain readable at mobile widths.
- Do not force hero copy into awkward one-word lines. Use a sensible max-width and natural wrapping.
- Do not use negative letter spacing for interface text. Display styles may follow existing tokenized
  heading rules where the current system already does so.

### Shape and density

- Buttons use a restrained rectangular form with minimal radius; this is part of the institutional
  language.
- Cards are used for repeated items, framed tools, and panels, not for every page section.
- Sections are full-width bands with a constrained `.site-container` inside.
- Prefer thin structural rules, controlled padding, and meaningful alignment over shadows and
  decorative floating objects.
- Do not put a card inside another card unless the inner item is a genuinely independent repeated
  object.

## Controls and iconography

The project already depends on `lucide-react`. Use Lucide icons for familiar actions and utility
controls instead of hand-drawn SVGs. Icons should clarify a label, not replace essential meaning.

Good patterns:

- Globe for language.
- LifeBuoy for help.
- Mail for contact.
- Accessibility icon for accessibility.
- Star/moon or the approved theme pair for day/night state.
- ArrowUpRight or a simple arrow for an external or directional link.

Avoid placing an icon beside every heading or turning every action into an icon-only control. An
unfamiliar icon needs a visible label, accessible name, or tooltip. Preserve the existing utility
bar's compact scale.

## Images

Use local, documented assets in `public/images/editorial/` and follow
[PHOTOGRAPHY-DIRECTION.md](../PHOTOGRAPHY-DIRECTION.md). Image selection should reveal the actual
subject: people working, a Philippine market context, a service process, or a credible environment.

Do not use a generic image as a named executive headshot. The current homepage gives each named
leader a dedicated blank portrait slot because approved individual portraits and biographies are
not yet present. Add only the correct approved image to each slot.

## Accessibility and WCAG practice

The project aims for WCAG-aware implementation, but no blanket compliance claim should be made
without a current audit. For every change, verify:

- Text and controls have sufficient contrast in both themes and all states.
- Body text remains readable at 200% zoom and with increased text spacing.
- Keyboard focus is visible and not hidden behind sticky headers.
- Tabs expose selected state, relationships, keyboard movement, and a usable focus order.
- Decorative images use empty alt text; meaningful images describe their page purpose.
- Links and buttons have names that make sense out of context.
- Motion respects `prefers-reduced-motion`.
- Layout does not depend on color alone.
- Mobile controls have usable touch targets and no horizontal page overflow.

Do not lower text contrast simply to make a section feel lighter. Fix the palette or hierarchy.

## Responsive breakpoints

The existing stylesheet uses broad CSS media queries around 1023px, 767px, and desktop ranges.
Use the existing breakpoints and component rules before adding a new breakpoint. Test at least:

- Narrow mobile around 360px.
- Typical mobile around 390px.
- Tablet around 768px.
- Desktop around 1280px.
- Wide desktop around 1440px.

Check text wrapping, image focal points, tab scrolling, section spacing, and focus states at each
size.

## Motion

Motion is restrained and supports hierarchy or state change. Keep the existing motion primitives
and respect reduced motion. Do not add auto-rotating carousels, attention-seeking parallax, or
animation that delays access to financial information.
