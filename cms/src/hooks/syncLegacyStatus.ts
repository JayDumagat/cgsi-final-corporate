import type { CollectionBeforeChangeHook } from 'payload'

type EditorialStatus = 'draft' | 'published'

function isEditorialStatus(value: unknown): value is EditorialStatus {
  return value === 'draft' || value === 'published'
}

/**
 * Keeps the legacy `status` field aligned with Payload's native `_status`.
 *
 * The public CGSI frontend currently filters Insights through
 * `where[status][equals]=published`. Retaining this mirror allows the CMS to
 * adopt native drafts and scheduled publishing without breaking that API.
 * It also maps legacy API writes to `_status` during the transition.
 */
export const syncLegacyStatus: CollectionBeforeChangeHook = ({ data }) => {
  if (!data) return data

  if (isEditorialStatus(data._status)) {
    data.status = data._status
  } else if (isEditorialStatus(data.status)) {
    data._status = data.status
  }

  return data
}
