# Development handoff

## Stack

- Next.js App Router with React and TypeScript.
- Vinext/Vite build path used by the current project scripts.
- Tailwind import plus a large tokenized stylesheet in `app/globals.css`.
- Radix UI for navigation, dialog, and accordion behavior.
- `motion` for restrained reveal and hero transitions.
- `lucide-react` for interface icons.
- Payload CMS and PostgreSQL in the separate `cms/` application.

Node.js 22.13 or later is the repository root requirement in `package.json`.

## Repository map

| Path | Responsibility |
| --- | --- |
| `app/` | Public routes, root metadata, global CSS, and homepage composition |
| `components/layout/` | Header, utility bar, navigation, footer, logo, announcement bar |
| `components/sections/` | Reusable page sections and homepage-level composed sections |
| `components/pages/` | Reusable layouts for client and service detail routes |
| `components/ui/` | Motion primitives and small shared UI helpers |
| `components/providers/` | Theme and motion providers |
| `content/` | Typed local public data and seed content |
| `lib/payload/` | Server-side CMS access and resilience fallbacks |
| `public/images/` | Approved or documented local editorial derivatives |
| `cms/` | Separate Payload admin and API application |
| `db/`, `drizzle/` | Database-related project support; do not mix with CMS ownership casually |
| `scripts/` | Build, environment, install, and artifact validation scripts |
| `tests/` | Rendered HTML and project validation tests |
| `docs/` | Context and handoff documentation |

## Important component boundaries

- Keep the root homepage server-rendered unless browser state is necessary.
- Use a client component only for a real interactive concern. The service category selector is a
  client component because it owns selected-tab state.
- Keep header navigation behavior in `components/layout/site-header.tsx` and content data in
  `content/navigation.ts`.
- Keep global tokens and shared states in `app/globals.css`; do not build isolated palettes in a
  page component.
- Prefer a reusable section or page layout when the same structure appears in more than one route.
- Do not put CMS calls in presentational components.

## Common commands

From the repository root:

```bash
npm install
npm run dev
npm run lint
npm test
```

The project currently uses shell scripts inside `npm run build` and `npm test`. On the Windows
environment used for this project, the wrapper may fail with a Bash service access error even when
the application itself builds. The direct build fallback used successfully here is:

```powershell
npm.cmd exec vinext -- build
```

Use the repository's normal script in an environment with the required Bash and GNU `timeout`
tools. Report wrapper failures separately from application failures.

## Local server discipline

The public dev server defaults to port 3000. A future coding agent must:

1. Check whether a server is already running before starting one.
2. Use another port only when the existing server belongs to an unrelated workflow and must remain.
3. Stop any server started for the task before the final response.
4. Confirm that no `LISTENING` process remains on the test port.

Do not leave a development server running as an unannounced side effect.

## Safe editing workflow

1. Read the relevant route, component, content source, and CSS before editing.
2. Check for existing user changes and preserve them.
3. Prefer existing patterns and tokens over new abstractions.
4. Use `apply_patch` for manual edits.
5. Keep public claims tied to an approved source.
6. Run lint and TypeScript checks after code changes.
7. Run the direct build or project test when practical.
8. Check responsive states and no-overflow behavior.
9. Stop the server and summarize validation and known limits.

## Change-specific checks

### Header or utility bar

- Check desktop and mobile separately.
- Confirm utility controls do not become a second navbar.
- Confirm external Login has an accessible name and new-tab behavior.
- Confirm language popover placement and keyboard behavior.
- Confirm theme state persists and both themes remain legible.

### Homepage section

- Confirm the section fits the established flow.
- Confirm heading, supporting copy, image, and CTA hierarchy.
- Confirm mobile stacking and text wrapping.
- Confirm no unsupported business claim was introduced.

### Service or client content

- Confirm the route and domain source.
- Confirm eligibility, risk, disclosure, and operational scope.
- Confirm the service label does not imply an unapproved product classification.

### Leadership content

- Use approved names, roles, biographies, and portraits only.
- Never map generic people photography to a named executive.
- Include review ownership and portrait rights when People CMS content is introduced.

## Current validation status

The service-tab and leadership changes in the current implementation have been checked with ESLint,
TypeScript no-emit, and a direct `vinext build`. Visual QA should still be performed in a real
browser at the responsive sizes listed in [DESIGN-SYSTEM-GUIDE.md](./DESIGN-SYSTEM-GUIDE.md).
