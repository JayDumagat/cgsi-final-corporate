# Payload CMS setup

The CGSI project separates the public corporate site from the content-management service:

- the repository root is the public Next.js site;
- `cms/` is a standard Payload 3 application;
- Payload uses PostgreSQL and exposes REST/GraphQL content APIs;
- the public site reads published insights through `PAYLOAD_CMS_URL`.

This separation lets the public site remain fast and deploy independently while the admin service
keeps authenticated editing and database access outside the public runtime.

## Local development

### Option A: Docker

```bash
cd cms
docker compose up
```

Open `http://localhost:3001/admin` and create the first administrator. PostgreSQL data and CMS
dependencies are stored in named Docker volumes.

The example Docker credentials are development-only. Change `PAYLOAD_SECRET`, database
credentials, and exposed ports before any shared deployment.

### Option B: local Node and PostgreSQL

Requirements:

- Node.js 20.9 or later
- PostgreSQL 14 or later

```bash
cd cms
cp .env.example .env
npm install
npm run dev -- -p 3001
```

Then run the public site from the repository root:

```bash
PAYLOAD_CMS_URL=http://localhost:3001 npm run dev
```

## Environment variables

### CMS

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `PAYLOAD_SECRET` | long random secret used by Payload |
| `NEXT_PUBLIC_SERVER_URL` | canonical HTTPS URL of the CMS service |

### Public frontend

| Variable | Purpose |
| --- | --- |
| `PAYLOAD_CMS_URL` | server-side base URL for the Payload API |

The frontend does not expose database credentials or a Payload secret. If the CMS cannot be
reached, reviewed local content is used as a resilience fallback.

## Included content model

- **Pages:** evergreen page content with native drafts, versions, autosave, and scheduled publishing
- **Offerings:** services, products, and platforms with audiences, capabilities, disclosures,
  related content, lifecycle dates, and SEO fields
- **Insights:** research reports, market notes, blogs/commentary, and guides with authors, sources,
  review dates, structured sections, featured media, and workflow
- **Market News:** market-focused editorial coverage with categories, source attribution, and review dates
- **Market Announcements:** exchange, issuer, and market-operation references linked to official sources
- **Press Releases:** company milestones, statements, and media-contact information
- **People:** board, executive, and operating-team profiles with explicit publication controls
- **Job Openings:** role, location, arrangement, availability, content, and application contact
- **Market Snapshots:** dated, sourced index values for the homepage market overview
- **Media:** upload collection with alt text and hero/card derivatives
- **Users:** authenticated editors with a simple role field
- **Navigation:** editable utility links and variant-aware mega menus
- **Site Settings:** corporate contact information and a CMS-toggleable announcement banner

Only published public content is readable without authentication. A compatibility hook keeps the
current frontend insight query working while records migrate to Payload’s native `_status`.

## Production requirements

1. Deploy Payload on a Node-compatible service with TLS.
2. Use a managed PostgreSQL database with backups, restricted ingress, and separate credentials.
3. Replace local-disk uploads with a Payload-supported object-storage adapter such as S3-compatible
   storage; do not rely on ephemeral container storage.
4. Set a strong secret through the deployment environment, never in source control.
5. Restrict admin access, enable organizational SSO or MFA where available, and review editor roles.
6. Run database migrations as part of the release process.
7. Configure logs, monitoring, error reporting, retention, and recovery procedures.
8. Add the production CMS URL as `PAYLOAD_CMS_URL` in the public-site environment.
9. Verify CORS/CSRF and proxy settings against the final public and admin domains.
10. Run the Payload jobs worker in production so scheduled publications are released on time.

## Container orchestration

The root `compose.yml` is the supported full-stack local/acceptance configuration. It starts the
public app, CMS, and PostgreSQL with health-based dependency ordering. The CMS-only Compose file
inside `cms/` remains available for isolated work:

```bash
docker compose --env-file ../.env up --build
```

Never commit the populated `.env`. The sample values are placeholders, not deployable secrets.

Official references:

- Payload installation: <https://payloadcms.com/docs/getting-started/installation>
- Configuration: <https://payloadcms.com/docs/configuration/overview>
- Deployment: <https://payloadcms.com/docs/production/deployment>
- Storage adapters: <https://payloadcms.com/docs/upload/storage-adapters>
