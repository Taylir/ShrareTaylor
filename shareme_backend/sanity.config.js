import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'gold-raven',

  projectId: 'spz9qb10',
  dataset: 'share-me-tay',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
