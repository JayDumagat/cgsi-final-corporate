import type { CollectionConfig } from 'payload'

export const MarketAnnouncements: CollectionConfig = {
  slug: 'market-announcements',
  access: {
    read: ({ req }) => (req.user ? true : { _status: { equals: 'published' } }),
  },
  admin: {
    defaultColumns: ['title', 'announcementType', 'effectiveAt', '_status'],
    group: 'Markets',
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      index: true,
      unique: true,
      required: true,
    },
    {
      name: 'announcementType',
      type: 'select',
      options: [
        { label: 'Exchange notice', value: 'exchange-notice' },
        { label: 'Trading schedule', value: 'trading-schedule' },
        { label: 'Market operation', value: 'market-operation' },
        { label: 'Issuer disclosure directory', value: 'issuer-directory' },
      ],
      required: true,
    },
    { name: 'description', type: 'textarea', maxLength: 320, required: true },
    {
      name: 'officialSource',
      type: 'group',
      fields: [
        { name: 'publisher', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        { name: 'referenceNumber', type: 'text' },
      ],
    },
    { name: 'effectiveAt', type: 'date' },
    { name: 'publishedAt', type: 'date', required: true },
  ],
  versions: {
    drafts: { autosave: true, schedulePublish: true },
    maxPerDoc: 50,
  },
  timestamps: true,
}
