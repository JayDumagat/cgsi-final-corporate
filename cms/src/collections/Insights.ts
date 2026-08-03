import type { CollectionConfig } from 'payload'

import { publishedOrLegacyStatus } from '../access/publishedOrLegacyStatus'
import { syncLegacyStatus } from '../hooks/syncLegacyStatus'

export const Insights: CollectionConfig = {
  slug: 'insights',
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return publishedOrLegacyStatus
    },
  },
  admin: {
    defaultColumns: ['title', 'publicationType', 'category', '_status', 'publishedAt'],
    group: 'Publications',
    useAsTitle: 'title',
  },
  hooks: {
    beforeChange: [syncLegacyStatus],
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
      unique: true,
      required: true,
    },
    {
      name: 'publicationType',
      type: 'select',
      defaultValue: 'market-note',
      index: true,
      options: [
        { label: 'Research report', value: 'research-report' },
        { label: 'Market note', value: 'market-note' },
        { label: 'Blog or commentary', value: 'blog' },
        { label: 'Guide', value: 'guide' },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      index: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
      admin: {
        description:
          'Compatibility mirror for the current frontend API. Payload publishing is controlled by _status.',
        hidden: true,
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Getting started', value: 'Getting started' },
        { label: 'Market basics', value: 'Market basics' },
        { label: 'Planning', value: 'Planning' },
        { label: 'Philippine market', value: 'Philippine market' },
        { label: 'Company research', value: 'Company research' },
      ],
      required: true,
    },
    {
      name: 'author',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Role or team displayed with the byline.',
          },
        },
        {
          name: 'organization',
          type: 'text',
          defaultValue: 'Caballes-Go Securities, Inc.',
        },
      ],
    },
    {
      name: 'excerpt',
      type: 'textarea',
      maxLength: 280,
      required: true,
    },
    {
      name: 'readTime',
      type: 'text',
      defaultValue: '6 min read',
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sections',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphs',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      index: true,
      admin: {
        description: 'Eligible for lead-story placement on editorial pages.',
      },
    },
    {
      name: 'topics',
      type: 'text',
      hasMany: true,
      admin: {
        description: 'Short reusable topics for editorial discovery and related content.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
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
        description: 'Most recent editorial, research, legal, or compliance review.',
      },
    },
    {
      name: 'reviewDueAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
        description: 'Optional reminder date for time-sensitive content.',
      },
    },
    {
      name: 'sources',
      type: 'array',
      admin: {
        description:
          'Identifiable evidence used by the publication. URLs should point to the original source whenever possible.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'publisher',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'sourceType',
          type: 'select',
          defaultValue: 'other',
          options: [
            { label: 'Official disclosure or filing', value: 'official-disclosure' },
            { label: 'Exchange or regulator', value: 'regulator' },
            { label: 'Company primary source', value: 'company' },
            { label: 'Research or data provider', value: 'research' },
            { label: 'Other', value: 'other' },
          ],
          required: true,
        },
        {
          name: 'publishedAt',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'accessedAt',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'notes',
          type: 'textarea',
        },
      ],
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
          name: 'socialImage',
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
    maxPerDoc: 75,
  },
  timestamps: true,
}
