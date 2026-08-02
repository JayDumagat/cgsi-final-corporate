# Known gaps and open questions

This file prevents future agents from silently turning assumptions into public claims.

## Company and regulatory facts

- Confirm the final public company description and all regulatory wording.
- Confirm license and participant terminology with the responsible compliance owner.
- Confirm public address, telephone, email, client-login URL, and PSE reference immediately before
  launch.
- Confirm any claims about institutional clients, international clients, HNW clients, or years of
  experience before publishing them as marketing facts.

## Service taxonomy

- Confirm which services are actually available today.
- Confirm whether ITF, regular/cash position, managed, discretionary, margin, broker-assisted,
  DMA, and PERA are account models, service modes, products, or internal categories.
- Confirm eligibility, minimums, fees, risks, operating steps, and required disclosures for each.
- Decide whether the homepage category labels should map to CMS taxonomy terms or remain a visual
  presentation layer.

## Leadership

- Add approved biographies, credentials, titles, review dates, and portrait rights to the People
  source.
- Add one approved individual portrait to each currently blank card slot, with the correct person
  mapping and alt text.
- Confirm whether the displayed role `Chairman of the Board and Nominee` remains current.

## Market and editorial data

- Confirm the update owner and automated/manual workflow for market snapshots.
- Confirm source, timestamp, timezone, market-state wording, and stale-data behavior.
- Confirm the approval path for research, market news, and investor guides.

## UX and visual QA

- Run a current browser review at mobile, tablet, desktop, 200% zoom, and reduced-motion settings.
- Audit color contrast in both themes, especially muted text and compact utility controls.
- Verify the final language popover placement and keyboard behavior.
- Decide whether day mode should use the current Sun icon or the previously requested Star icon.
- Review the homepage after real content replaces seeded examples; short or long CMS titles may
  expose new layout constraints.

## Technical workflow

- The root `npm run build` wrapper expects Bash and GNU `timeout`; provide a cross-platform CI path
  or document the supported shell before relying on it on Windows.
- Decide when homepage composition arrays in `app/page.tsx` should migrate to CMS or typed domain
  content.
- Establish production media storage and rights metadata workflow before adding more imagery.
- Add route-level visual regression or browser interaction coverage when the project test setup is
  expanded.
