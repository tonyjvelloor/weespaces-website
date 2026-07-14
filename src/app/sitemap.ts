import { MetadataRoute } from 'next';
import { services, cities } from '@/data/locations';
import { comparisons } from '@/data/comparisons';
import { getAllPosts } from '@/lib/mdx';

const BASE_URL = 'https://www.weespaces.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

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

  // 2. Service Hub Pages
  services.forEach((service) => {
    routes.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // 3. City-level Service Pages
    Object.values(cities).forEach((city) => {
      routes.push({
        url: `${BASE_URL}/${service.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // 4. Micro-location Service Pages
      city.microLocations.forEach((microLoc) => {
        // Only generate this route if the neighborhood supports this service
        if (microLoc.services && microLoc.services.includes(service.slug)) {
          routes.push({
            url: `${BASE_URL}/${service.slug}/${city.slug}/${microLoc.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          });
        }
      });
    });
  });

  // 5. Virtual Office Funnel Pages
  const virtualOfficeFunnels = ['gst-registration', 'company-registration', 'llp-registration', 'opc-registration', 'startup-india'];
  virtualOfficeFunnels.forEach((funnel) => {
    routes.push({
      url: `${BASE_URL}/virtual-office/${funnel}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 6. Comparison Pages
  Object.values(comparisons).forEach((comparison) => {
    routes.push({
      url: `${BASE_URL}/compare/${comparison.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 7. Blog Categories
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));
  categories.forEach((category) => {
    routes.push({
      url: `${BASE_URL}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // 8. Blog Posts (MDX)
  posts.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      // Use the post date if available, otherwise fallback
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}
