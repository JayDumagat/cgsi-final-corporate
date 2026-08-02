# CGSI Payload CMS

Payload 3 admin and content API for the CGSI corporate website. The CMS is intentionally separate
from the public frontend so it can be deployed as a private editorial service while the website
remains independently cacheable.

## Local development

```bash
cp .env.example .env
npm install
npm run dev -- -p 3001
```

Admin: `http://localhost:3001/admin`

For a Docker-based local environment:

```bash
docker compose up
```

## Content model

### Pages

Evergreen corporate pages. Pages now use Payload's native versions and drafts while retaining the
legacy `status` field as a hidden compatibility mirror for existing records.

### Offerings

Reusable records for CGSI services, products, and platforms. Each Offering supports:

- lifecycle state independent from publication state;
- client audiences;
- structured hero, capabilities, body, actions, disclosures, and SEO;
- related Offerings and Publications;
- effective and review dates;
- draft, autosave, version history, and scheduled publishing.

Public API: `GET /api/offerings`

### Insights

The existing `/api/insights` contract remains compatible with the public website. Existing fields
such as `title`, `slug`, `status`, `category`, `excerpt`, `readTime`, `intro`, `sections`,
`featuredImage`, and `publishedAt` are preserved.

The collection now also supports:

- publication types: insight, news, announcement, and guide;
- author byline details;
- last-reviewed and review-due dates;
- structured source citations;
- native drafts, autosave, version history, and scheduled publishing.

The hidden `status` field mirrors Payload's native `_status` so the current frontend query
`where[status][equals]=published` continues to work during migration.

### Supporting configuration

- `Media` manages images and generated renditions.
- `Users` provides CMS authentication.
- `Navigation` and `Site Settings` are global configuration records.

## Editorial workflow

Pages, Offerings, and Insights use native Payload drafts. Editors can save incomplete work, compare
versions, publish, unpublish, and schedule future publication.

Scheduled publishing creates background jobs. A production deployment must run a dedicated worker:

```bash
npm run jobs:run
```

Run exactly one scheduler/worker strategy. On a long-running Node deployment, the command above can
run as a separate process. On a serverless deployment, call Payload's jobs endpoints from the
platform scheduler instead of running a persistent process.

## Validation

```bash
npm run generate:types
npm run lint
npm run build
```

PostgreSQL is the configured database. See [`../CMS-SETUP.md`](../CMS-SETUP.md) for environment
variables, storage, and production requirements.
