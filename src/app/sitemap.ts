import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export const dynamic = 'force-static';

const subareasMap: Record<string, string[]> = {
  trivandrum: ['technopark', 'kazhakootam', 'pattom'],
  ernakulam: ['kadavanthra', 'mg-road', 'kaloor', 'kakkanad'],
  calicut: ['cyberpark', 'nadakkavu', 'thondayad'],
  coimbatore: ['rs-puram', 'peelamedu', 'kalapatti'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weespaces.co.in';

  // Dynamic Branches
  const branches = ['trivandrum', 'ernakulam', 'calicut', 'coimbatore'].map((branch) => ({
    url: `${baseUrl}/locations/${branch}`,
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Hyper-Local Sub-Areas
  const subareas: MetadataRoute.Sitemap = [];
  for (const [branch, areas] of Object.entries(subareasMap)) {
    for (const area of areas) {
      subareas.push({
        url: `${baseUrl}/locations/${branch}/${area}`,
        lastModified: new Date('2026-06-01'),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    }
  }

  // Blog Posts
  const blogs = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog Index
  const blogIndex = [{
    url: `${baseUrl}/blog`,
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }];

  // Static Pages
  const staticPages = [
    '', 
    '/about', 
    '/contact', 
    '/pricing',
    '/services/virtual-office',
    '/services/incubation',
    '/investors'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));

  return [...staticPages, ...branches, ...subareas, ...blogIndex, ...blogs];
}
