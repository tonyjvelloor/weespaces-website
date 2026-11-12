import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Claude-Web', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'Applebot-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.weespaces.in/sitemap.xml',
  };
}
