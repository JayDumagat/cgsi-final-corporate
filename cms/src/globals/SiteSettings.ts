import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      defaultValue: 'Caballes-Go Securities, Inc.',
      required: true,
    },
    {
      name: 'telephone',
      type: 'text',
      defaultValue: '+63 2 7777 8970',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'admin@caballes-go.com',
      required: true,
    },
    {
      name: 'officeAddress',
      type: 'textarea',
      defaultValue:
        '16/F Robinsons Equitable Tower, ADB Avenue corner Poveda Street, Ortigas Center, Pasig City',
      required: true,
    },
    {
      name: 'clientLoginUrl',
      type: 'text',
      defaultValue: 'https://caballes-go.com/m/login',
      required: true,
    },
    {
      name: 'pseParticipantUrl',
      type: 'text',
      defaultValue:
        'https://www.pse.com.ph/trading-participant-information-caballes-go-securities-inc/',
      required: true,
    },
    {
      name: 'announcement',
      type: 'group',
      admin: {
        description:
          'Optional banner displayed above the utility header. Disable it without deleting the content.',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Latest',
        },
        {
          name: 'message',
          type: 'text',
          maxLength: 140,
        },
        {
          name: 'href',
          type: 'text',
          admin: {
            description: 'Internal path or approved external URL.',
          },
        },
        {
          name: 'linkLabel',
          type: 'text',
          defaultValue: 'Learn more',
        },
        {
          name: 'dismissible',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
  ],
}
