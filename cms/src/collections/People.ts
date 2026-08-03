import type { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { _status: { equals: 'published' } }
    },
  },
  admin: {
    defaultColumns: ['name', 'role', 'group', 'sortOrder', '_status'],
    group: 'Company',
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'role', type: 'text', required: true },
    {
      name: 'group',
      type: 'select',
      defaultValue: 'leadership',
      index: true,
      options: [
        { label: 'Board', value: 'board' },
        { label: 'Executive leadership', value: 'leadership' },
        { label: 'Client coverage', value: 'coverage' },
        { label: 'Research', value: 'research' },
        { label: 'Operations', value: 'operations' },
        { label: 'Compliance and risk', value: 'compliance-risk' },
      ],
      required: true,
    },
    { name: 'profile', type: 'richText' },
    { name: 'photo', type: 'relationship', relationTo: 'media' },
    {
      name: 'showOnWebsite',
      type: 'checkbox',
      defaultValue: true,
      index: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 100,
      index: true,
      admin: { step: 10 },
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
