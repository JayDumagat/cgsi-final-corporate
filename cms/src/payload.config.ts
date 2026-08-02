import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Insights } from './collections/Insights'
import { Offerings } from './collections/Offerings'
import { Pages } from './collections/Pages'
import { People } from './collections/People'
import { JobOpenings } from './collections/JobOpenings'
import { MarketSnapshots } from './collections/MarketSnapshots'
import { MarketNews } from './collections/MarketNews'
import { MarketAnnouncements } from './collections/MarketAnnouncements'
import { PressReleases } from './collections/PressReleases'
import { Navigation } from './globals/Navigation'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | CGSI Content',
      description: 'Content administration for the CGSI corporate website',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Pages,
    Offerings,
    Insights,
    MarketNews,
    MarketAnnouncements,
    PressReleases,
    People,
    JobOpenings,
    MarketSnapshots,
    Media,
    Users,
  ],
  globals: [Navigation, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  plugins: [],
})
