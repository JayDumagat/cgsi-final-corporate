import type { GlobalConfig } from 'payload'

const linkFields = [
  {
    name: 'label',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'href',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'description',
    type: 'textarea' as const,
    maxLength: 180,
  },
  {
    name: 'openInNewTab',
    type: 'checkbox' as const,
    defaultValue: false,
  },
]

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'Site settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'utilityItems',
      type: 'array',
      maxRows: 8,
      admin: {
        description:
          'Investor relations, disclosures, help, accessibility, and other corporate utility links.',
      },
      fields: linkFields,
    },
    {
      name: 'megaMenus',
      type: 'array',
      maxRows: 6,
      admin: {
        description:
          'Each menu can use a different layout. The frontend maps the selected variant to a purpose-built composition.',
      },
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          options: [
            { label: 'Audience pathways', value: 'audiences' },
            { label: 'Numbered capabilities', value: 'capabilities' },
            { label: 'Editorial desk', value: 'editorial' },
            { label: 'Investor tools', value: 'tools' },
            { label: 'Company directory', value: 'company' },
          ],
        },
        {
          name: 'overview',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
        {
          name: 'featured',
          type: 'group',
          fields: [
            { name: 'eyebrow', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', maxLength: 220 },
            { name: 'href', type: 'text', required: true },
            { name: 'image', type: 'relationship', relationTo: 'media' },
          ],
        },
        {
          name: 'groups',
          type: 'array',
          maxRows: 4,
          fields: [
            { name: 'heading', type: 'text', required: true },
            {
              name: 'links',
              type: 'array',
              maxRows: 8,
              fields: linkFields,
            },
          ],
        },
      ],
    },
  ],
}
