import type { Where } from 'payload'

/**
 * Allows native Payload publications while keeping records created before
 * native drafts were enabled publicly readable through the legacy field.
 */
export const publishedOrLegacyStatus: Where = {
  or: [
    {
      _status: {
        equals: 'published',
      },
    },
    {
      and: [
        {
          _status: {
            exists: false,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
  ],
}
