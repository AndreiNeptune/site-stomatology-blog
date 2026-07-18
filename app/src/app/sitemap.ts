import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'
import { postSlugsQuery } from '@/lib/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://drbiancaionescu.ro'

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
    '/politica-de-confidentialitate',
    '/politica-de-cookies',
    '/termeni-si-conditii'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const slugs = await client.fetch(postSlugsQuery)
    blogRoutes = slugs.map((slug: string) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching slugs for sitemap:', error)
  }

  return [...staticRoutes, ...blogRoutes]
}
