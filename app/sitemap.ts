import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://miux.com.br'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/feedback`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
