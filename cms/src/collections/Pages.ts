import type { CollectionConfig } from 'payload'

import { publishedOrLegacyStatus } from '../access/publishedOrLegacyStatus'
import { syncLegacyStatus } from '../hooks/syncLegacyStatus'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return publishedOrLegacyStatus
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    group: 'Content',
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
      admin: {
        description: 'Path segment only, for example: about or governance.',
      },
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
          'Compatibility mirror for existing records. Payload publishing is controlled by _status.',
        hidden: true,
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
      name: 'body',
      type: 'richText',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 180,
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
