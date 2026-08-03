# Content model and source map

## Local content sources

The repository currently uses typed local content for important public structures:

| File | Current responsibility |
| --- | --- |
| `content/site-settings.ts` | Company settings, contact details, external links, announcement, market snapshot, leadership directory, corporate news |
| `content/profiles.ts` | Client profiles and service profiles, including outcomes and process steps |
| `content/navigation.ts` | Header mega menus, groups, featured stories, overview labels, and metadata |
| `content/insights.ts` | Local insight seed content and legacy service/navigation data |
| `content/market-content.ts` | Market news, official announcement directory, and press release seed content |

`app/page.tsx` also contains homepage composition data such as audience tiles, service category
presentation groups, engagement steps, investor resource links, image choices, and leadership
highlight summaries. This is view-model content and should gradually move to the appropriate CMS or
typed domain source as the content workflow matures.

## CMS boundary

Payload is a separate application in `cms/`. Its collections include Pages, Offerings, Insights,
Market News, Market Announcements, Press Releases, People, Job Openings, Market Snapshots, Media,
Users, Navigation, and Site Settings. See [CMS-SETUP.md](../CMS-SETUP.md) and
[ARCHITECTURE.md](../ARCHITECTURE.md) for the full boundary.

The public site reads published insight and site-setting data through `lib/payload/`. If the CMS is
not configured or is unavailable, reviewed local seed content can be used as a resilience fallback.
This fallback must not silently hide stale contact, regulatory, pricing, or product information.

## Content ownership rules

- Navigation owns structure and labels, not transaction workflows.
- Offerings own service facts, eligibility, process, risks, and related content.
- People owns approved names, roles, biographies, credentials, portraits, and publication authorship.
- Media owns source, rights, alt text, focal point, and review state.
- Market snapshots own dated values, source references, and market state.
- Insights own publication metadata, authorship, sources, review dates, and disclosures.
- Site Settings owns verified organization-level contact and external links.

Do not duplicate one regulated fact across several components. Render it from one typed source or a
CMS relation. Do not place a person biography in a generic JSX string when the People collection is
the approved source.

## Homepage composition data

The current homepage view model contains:

- `audienceTiles`: audience labels, copy, routes, image paths, alt text, and layout size.
- `services`: six homepage service links and descriptions.
- `serviceCategories`: four display groups used by the interactive tabs.
- `engagementSteps`: three relationship stages.
- `leadershipHighlights`: the five existing leadership records with short responsibility summaries
  and blank portrait slots reserved for approved images.
- `investorResources`: three resource destinations.
- `insightImages`: editorial image choices for the research block.

These arrays are not a substitute for a final approved service taxonomy. They are the current
presentation layer.

## Migration guidance

When moving a data point to CMS:

1. Add the field to the correct domain collection, not a generic page block.
2. Add ownership, approval, review date, status, and disclosure fields where relevant.
3. Keep the component API typed and stable.
4. Preserve a reviewed fallback only where resilience is explicitly needed.
5. Remove the duplicated local value after the published CMS record is verified.
6. Update this map and the relevant architecture decision.
