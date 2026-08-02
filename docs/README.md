# CGSI project documentation

This directory preserves the product, brand, content, UX, and engineering context for the
Caballes-Go Securities, Inc. (CGSI) public website. Read these documents before making a
substantial change to the homepage, navigation, service presentation, company messaging, or
content model.

## Reading order

1. [Project context](./PROJECT-CONTEXT.md) explains who CGSI is meant to be on the web, who the
   website serves, and which facts are confirmed versus still subject to review.
2. [Website experience](./WEBSITE-EXPERIENCE.md) explains the current information architecture,
   homepage flow, interaction patterns, and responsive behavior.
3. [Design system guide](./DESIGN-SYSTEM-GUIDE.md) explains visual language, typography, color,
   layout, imagery, controls, accessibility, and motion.
4. [Content and copy guide](./CONTENT-AND-COPY-GUIDE.md) explains voice, claims discipline,
   service language, calls to action, and regulated-finance content boundaries.
5. [Content model map](./CONTENT-MODEL-MAP.md) maps the current routes and local/CMS sources of
   truth.
6. [Development handoff](./DEVELOPMENT-HANDOFF.md) explains the repository, code boundaries,
   local commands, validation, and release expectations.
7. [Decision log](./DECISION-LOG.md) records the design and product decisions made during the
   homepage iteration.
8. [AI operating guide](./AI-OPERATING-GUIDE.md) gives future coding agents a short working
   contract for this repository.
9. [Known gaps](./KNOWN-GAPS.md) lists information that must not be invented and decisions that
   still need an owner.

## Existing technical references

These root-level documents remain authoritative for their narrower subjects:

- [README](../README.md): setup, route summary, stack, deployment, and launch notes.
- [ARCHITECTURE](../ARCHITECTURE.md): public application, CMS, data boundaries, and expansion.
- [DESIGN-RATIONALE](../DESIGN-RATIONALE.md): design-thinking, HCI, information architecture,
  copy strategy, and validation principles.
- [PHOTOGRAPHY-DIRECTION](../PHOTOGRAPHY-DIRECTION.md): image direction, rights, privacy, and
  commissioning guidance.
- [IMAGE-SOURCES](../IMAGE-SOURCES.md): image source and licensing record.
- [CMS-SETUP](../CMS-SETUP.md): Payload, PostgreSQL, environment variables, and deployment.

## Source-of-truth hierarchy

When documents, seeded content, or a visual request conflict, use this order:

1. Current user or stakeholder instruction for the requested change.
2. Approved legal, compliance, regulatory, and operational facts.
3. CMS records marked published and approved.
4. Typed local content in `content/`.
5. Current component behavior and styles.
6. These design and handoff notes for intent and rationale.

Never resolve a factual conflict by guessing. Record the gap in
[KNOWN-GAPS.md](./KNOWN-GAPS.md) and ask for an approved source when the fact affects public
financial communication.

## Documentation maintenance

Update the relevant document when a decision changes the homepage flow, audience model, service
taxonomy, design tokens, content claims, CMS ownership, or operational workflow. Keep current
implementation notes separate from future ideas, and label assumptions explicitly.

Last reviewed: 2026-08-02.
