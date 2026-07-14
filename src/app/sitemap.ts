import { MetadataRoute } from 'next';
import { services, cities } from '@/data/locations';
import { intents } from '@/data/intents';
import { comparisons } from '@/data/comparisons';
import { getAllPosts } from '@/lib/mdx';

const BASE_URL = 'https://www.weespaces.in';

export async function generateSitemaps() {
  // We segment the sitemaps by functional area to stay within limits and aid GSC monitoring
  return [
    { id: 'core' },
    { id: 'blog' },
    { id: 'virtual-office' },
    { id: 'coworking-space' },
    { id: 'private-office' },
    { id: 'meeting-room' },
    { id: 'managed-office' }
  ];
}

export default async function sitemap({ id }: { id: string | Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const resolvedId = await id;
  const routes: MetadataRoute.Sitemap = [];

  if (resolvedId === 'core') {
    // 1. Core Pages
    const corePages = ['', '/about', '/contact', '/pricing', '/locations', '/faq', '/investors', '/enterprise', '/blog'];
    corePages.forEach((path) => {
      routes.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1.0 : 0.8,
      });
    });

    // 2. Comparison Pages
    Object.values(comparisons).forEach((comparison) => {
      routes.push({
        url: `${BASE_URL}/compare/${comparison.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  }

  if (resolvedId === 'blog') {
    const posts = getAllPosts();
    
    // Blog Categories
    const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));
    categories.forEach((category) => {
      routes.push({
        url: `${BASE_URL}/blog/category/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    // Blog Posts
    posts.forEach((post) => {
      routes.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  }

  // Dynamic Service Sitemaps (virtual-office, coworking-space, etc)
  const matchingService = services.find(s => s.slug === resolvedId);
  
  if (matchingService) {
    // Service Hub Page
    routes.push({
      url: `${BASE_URL}/${matchingService.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    Object.values(cities).forEach((city) => {
      // City-level Service Page
      routes.push({
        url: `${BASE_URL}/${matchingService.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // Micro-location Service Pages
      city.microLocations.forEach((micro) => {
        if (micro.services && micro.services.includes(matchingService.slug)) {
          routes.push({
            url: `${BASE_URL}/${matchingService.slug}/${city.slug}/${micro.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      });

      // Intent Pages
      Object.values(intents).forEach((intent) => {
        // Intent pages usually only make sense for virtual-office and coworking-space
        if (['virtual-office', 'coworking-space'].includes(matchingService.slug)) {
          routes.push({
            url: `${BASE_URL}/${matchingService.slug}/${city.slug}/intent/${intent.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
          });
        }
      });
    });
  }

  return routes;
}
