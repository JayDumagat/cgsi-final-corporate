import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Content',
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'card',
        width: 900,
        height: 675,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 2000,
        height: 1200,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
}
