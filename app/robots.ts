import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // This targets every standard web crawler on the internet (Google, Bing, Yahoo, DuckDuckGo, etc.)
        userAgent: '*',
        allow: '/',
      },
      {
        // Google specifically requires AdsBot to be named explicitly to be allowed
        userAgent: ['AdsBot-Google', 'AdsBot-Google-Mobile', 'AdsBot-Google-Mobile-Apps'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.myjanani.in/sitemap.xml',
  }
}
