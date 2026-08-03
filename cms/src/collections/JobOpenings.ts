import type { CollectionConfig } from 'payload'

export const JobOpenings: CollectionConfig = {
  slug: 'job-openings',
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { _status: { equals: 'published' } }
    },
  },
  admin: {
    defaultColumns: ['title', 'department', 'location', 'availability', '_status'],
    group: 'Company',
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'department', type: 'text', required: true },
    { name: 'location', type: 'text', defaultValue: 'Ortigas Center, Pasig City' },
    {
      name: 'workArrangement',
      type: 'select',
      options: [
        { label: 'On-site', value: 'on-site' },
        { label: 'Hybrid', value: 'hybrid' },
        { label: 'Remote', value: 'remote' },
      ],
      required: true,
    },
    {
      name: 'employmentType',
      type: 'select',
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
      required: true,
    },
    {
      name: 'availability',
      type: 'select',
      defaultValue: 'open',
      index: true,
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Expressions of interest', value: 'expressions-of-interest' },
        { label: 'Paused', value: 'paused' },
        { label: 'Filled', value: 'filled' },
      ],
      required: true,
    },
    { name: 'summary', type: 'textarea', required: true, maxLength: 300 },
    { name: 'responsibilities', type: 'richText' },
    { name: 'qualifications', type: 'richText' },
    { name: 'applyEmail', type: 'email', required: true },
    {
      name: 'closingAt',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    { name: 'heroImage', type: 'relationship', relationTo: 'media' },
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
