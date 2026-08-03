# AI operating guide for this repository

This file is a short contract for future coding agents working on the CGSI website. Read it with
the longer documents in this directory before making a broad change.

## First actions

1. Read `README.md` and [docs/README.md](./README.md).
2. Read [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md), [WEBSITE-EXPERIENCE.md](./WEBSITE-EXPERIENCE.md),
   and [KNOWN-GAPS.md](./KNOWN-GAPS.md).
3. Inspect the target route and its content source.
4. Search for existing tokens, components, icons, and patterns before inventing new ones.
5. Check the working tree or file timestamps for user changes and preserve them.

## Non-negotiable product context

- CGSI is a Philippine stock brokerage website, not a generic fintech dashboard.
- The site should feel institutional, stable, professional, and trustworthy while remaining human.
- The desired relationship is partnership and accountability around the trade, not product selling.
- The user has explicitly preferred restrained, non-cliche hero and CTA areas.
- Lucide React is already installed and should be used for interface icons.
- Do not turn every control into a pure icon; use labels when they improve recognition.
- Do not fabricate company facts, service availability, executive biographies, headshots, testimonials,
  client logos, performance, licenses, or regulatory claims.

## Engineering defaults

- Prefer server components; add `"use client"` only when browser state or event handlers require it.
- Reuse the existing CSS tokens and layout primitives.
- Keep component APIs typed.
- Use structured data and typed arrays rather than repeated ad hoc JSX strings.
- Use `apply_patch` for manual edits.
- Add focused tests or validation when behavior changes.
- Keep the change scoped and do not refactor unrelated sections.

## Frontend quality bar

- Preserve the current institutional color, type, rule, and spacing system.
- Avoid decorative gradients, floating blobs, excessive rounded cards, and overly dense controls.
- Keep section headings at a suitable scale; do not make a hero-size heading inside a compact panel.
- Ensure text wraps naturally on mobile.
- Check keyboard focus, reduced motion, contrast, alt text, and tab semantics.
- Keep one primary CTA per section where possible.
- Make the next action obvious without adding a large explanatory paragraph.

## Content quality bar

- Distinguish confirmed facts, approved copy, working assumptions, and future ideas.
- Treat all market, regulatory, product, eligibility, tax, and leadership information as reviewable.
- Use risk-aware language and do not imply a guaranteed outcome.
- Source market numbers with date, state, and source label.
- Use role summaries only when a biography is unavailable; label them as responsibilities rather
  than invented career history.

## Operational closeout

- Run the relevant lint and TypeScript checks.
- Run the build or explain why the environment prevented it.
- If a dev server was started, stop it before the final response.
- Confirm no test port is left listening.
- Summarize changed files, validation, and any remaining source or content gap.
