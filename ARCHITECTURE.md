# Pure Next.js architecture

The September 2026 revision removes the Payload application, its REST adapters, PostgreSQL
services, unused database scaffold, and Vinext/Cloudflare build wrappers. Public website
features and routes are preserved.

- Next.js App Router owns rendering, routing, metadata, and static generation.
- Typed `content/` modules own navigation, settings, services, audiences, and publications.
- `lib/content.ts` exposes the same content-access interface using local imports.
- Shared `components/` implement menus, dialogs, tabs, filters, calculator, and page templates.
- Server components are the default. Client components handle interaction and preferences.
- `app/globals.css` retains established route styles; `app/refinement.css` applies a consistent
  spacing and typography refinement without replacing the information architecture.
- The build emits `.next`; `next start` serves it. Docker uses Next.js standalone output.
- No CMS service, administrative UI, API secret, database, Worker binding, or remote content fetch
  is required. Edit local content, review it, and rebuild to publish changes.
- The old `.openai/hosting.json` is not consulted by any runtime or build code.

Do not remove pages or controls in a visual redesign. Treat information architecture changes
as a separate scope. Existing planned capabilities must retain their availability labels.
