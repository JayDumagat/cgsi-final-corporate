import type { CollectionConfig } from 'payload'

export const MarketNews: CollectionConfig = {
  slug: 'market-news',
  access: {
    read: ({ req }) => (req.user ? true : { _status: { equals: 'published' } }),
  },
  admin: {
    defaultColumns: ['title', 'category', 'publishedAt', '_status'],
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
      name: 'category',
      type: 'select',
      options: [
        { label: 'Market close', value: 'market-close' },
        { label: 'Market structure', value: 'market-structure' },
        { label: 'Issuer information', value: 'issuer-information' },
        { label: 'Macro and policy', value: 'macro-policy' },
      ],
      required: true,
    },
    { name: 'summary', type: 'textarea', maxLength: 320, required: true },
    { name: 'heroImage', type: 'relationship', relationTo: 'media' },
    { name: 'body', type: 'richText', required: true },
    {
      name: 'source',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        {
          name: 'accessedAt',
          type: 'date',
          admin: { date: { pickerAppearance: 'dayAndTime' } },
        },
      ],
    },
    { name: 'publishedAt', type: 'date', required: true },
    {
      name: 'reviewedAt',
      type: 'date',
      admin: { description: 'Most recent editorial or compliance review.' },
    },
  ],
  versions: {
    drafts: { autosave: true, schedulePublish: true },
    maxPerDoc: 50,
  },
  timestamps: true,
}
