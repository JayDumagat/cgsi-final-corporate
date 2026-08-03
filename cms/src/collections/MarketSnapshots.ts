import type { CollectionConfig } from 'payload'

export const MarketSnapshots: CollectionConfig = {
  slug: 'market-snapshots',
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { _status: { equals: 'published' } }
    },
  },
  admin: {
    defaultColumns: ['title', 'asOf', 'sourceLabel', '_status'],
    group: 'Markets',
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Philippine market snapshot', required: true },
    {
      name: 'asOf',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    { name: 'statusLabel', type: 'text', defaultValue: 'Market closed', required: true },
    { name: 'sourceLabel', type: 'text', required: true },
    { name: 'sourceUrl', type: 'text', required: true },
    {
      name: 'indices',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'number', required: true },
        { name: 'change', type: 'number', required: true },
        { name: 'percentChange', type: 'number', required: true },
      ],
    },
    {
      name: 'disclaimer',
      type: 'textarea',
      defaultValue: 'End-of-day data is provided for context and is not a live trading feed.',
    },
  ],
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
    maxPerDoc: 30,
  },
  timestamps: true,
}
