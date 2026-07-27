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
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Claude-Web', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot'],
        allow: ['/knowledge/', '/llms.txt', '/.well-known/llms.txt', '/workspace-data.md'],
      }
    ],
    sitemap: 'https://www.weespaces.in/sitemap.xml',
  };
}
