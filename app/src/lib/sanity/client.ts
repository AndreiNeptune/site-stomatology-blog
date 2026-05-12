import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to avoid Sanity edge caching issues with Next.js ISR
  perspective: 'published',
})

// For live preview / draft mode
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_READ_TOKEN,
})

export function getClient(preview?: boolean) {
  return preview ? previewClient : client
}
