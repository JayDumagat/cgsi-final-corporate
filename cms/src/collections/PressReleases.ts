import type { CollectionConfig } from 'payload'

export const PressReleases: CollectionConfig = {
  slug: 'press-releases',
  access: {
    read: ({ req }) => (req.user ? true : { _status: { equals: 'published' } }),
  },
  admin: {
    defaultColumns: ['title', 'releaseType', 'publishedAt', '_status'],
    group: 'Company',
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
      name: 'releaseType',
      type: 'select',
      options: [
        { label: 'Corporate milestone', value: 'corporate-milestone' },
        { label: 'Company update', value: 'company-update' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Media statement', value: 'media-statement' },
      ],
      required: true,
    },
    { name: 'summary', type: 'textarea', maxLength: 320, required: true },
    { name: 'heroImage', type: 'relationship', relationTo: 'media' },
    { name: 'body', type: 'richText', required: true },
    { name: 'publishedAt', type: 'date', required: true },
    {
      name: 'mediaContact',
      type: 'group',
      fields: [
        { name: 'team', type: 'text', defaultValue: 'Corporate communications' },
        { name: 'email', type: 'email' },
      ],
    },
  ],
  versions: {
    drafts: { autosave: true, schedulePublish: true },
    maxPerDoc: 50,
  },
  timestamps: true,
}
