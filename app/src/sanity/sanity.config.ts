import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'Luna Dental Blog',

  projectId: 'igoc6trt',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: 'http://localhost:3000',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
