import type { CollectionConfig } from 'payload'

export const Offerings: CollectionConfig = {
  slug: 'offerings',
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  admin: {
    defaultColumns: ['title', 'kind', 'lifecycleStatus', '_status', 'updatedAt'],
    group: 'Offerings',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      unique: true,
      required: true,
      admin: {
        description: 'URL-safe path segment, for example: broker-assisted-trading.',
      },
    },
    {
      name: 'kind',
      type: 'select',
      defaultValue: 'service',
      index: true,
      options: [
        { label: 'Service', value: 'service' },
        { label: 'Product', value: 'product' },
        { label: 'Platform', value: 'platform' },
      ],
      required: true,
    },
    {
      name: 'lifecycleStatus',
      type: 'select',
      defaultValue: 'available',
      index: true,
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Coming soon', value: 'coming-soon' },
        { label: 'Restricted availability', value: 'restricted' },
        { label: 'Archived', value: 'archived' },
      ],
      required: true,
      admin: {
        description:
          'Operational availability is separate from the CMS draft or published state.',
      },
    },
    {
      name: 'layoutVariant',
      type: 'select',
      defaultValue: 'coverage',
      options: [
        { label: 'Human coverage', value: 'coverage' },
        { label: 'Decision brief', value: 'decision' },
        { label: 'Research editorial', value: 'research' },
        { label: 'Post-trade operations', value: 'operations' },
        { label: 'Direct Market Access', value: 'dma' },
        { label: 'PERA retirement', value: 'pera' },
        { label: 'Investment platform', value: 'platform' },
      ],
      required: true,
      admin: {
        description:
          'Selects the dedicated presentation model instead of forcing every offering into one page template.',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      maxLength: 240,
      required: true,
      admin: {
        description: 'Concise listing and navigation description.',
      },
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
        },
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'audiences',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Individuals and families', value: 'individuals-families' },
        { label: 'OFWs and seafarers', value: 'ofws-seafarers' },
        { label: 'New investors', value: 'new-investors' },
        { label: 'Institutions and corporations', value: 'institutions' },
      ],
      admin: {
        description: 'Client groups for discovery, filtering, and related-content queries.',
      },
    },
    {
      name: 'capabilities',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'body',
      type: 'richText',
    },
    {
      name: 'primaryAction',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'href',
          type: 'text',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'relatedOfferings',
      type: 'relationship',
      hasMany: true,
      relationTo: 'offerings',
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
    },
    {
      name: 'relatedPublications',
      type: 'relationship',
      hasMany: true,
      relationTo: 'insights',
    },
    {
      name: 'riskDisclosure',
      type: 'richText',
      admin: {
        description: 'Offering-specific risk, eligibility, or availability information.',
      },
    },
    {
      name: 'effectiveAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'reviewedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'Most recent business, legal, or compliance review.',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 100,
      index: true,
      admin: {
        step: 10,
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          maxLength: 70,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 180,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  timestamps: true,
}
