import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/studio/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web', 'ClaudeBot', 'PerplexityBot'],
        allow: ['/'],
      }
    ],
    sitemap: 'https://rapident.ro/sitemap.xml',
  }
}
