import { MetadataRoute } from 'next';
import { services, cities } from '@/data/locations';
import { comparisons } from '@/data/comparisons';
import { getAllPosts } from '@/lib/mdx';

const BASE_URL = 'https://www.weespaces.in';

const ensureTrailingSlash = (url: string) => url.endsWith('/') ? url : `${url}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // 1. Core Pages
  const corePages = ['', '/about', '/contact', '/pricing', '/locations', '/faq', '/investors', '/enterprise', '/blog'];
  corePages.forEach((path) => {
    routes.push({
      url: ensureTrailingSlash(`${BASE_URL}${path}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '' ? 1.0 : 0.8,
    });
  });

  // 2. Service Hub Pages
  services.forEach((service) => {
    routes.push({
      url: ensureTrailingSlash(`${BASE_URL}/${service.slug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // 3. City-level Service Pages
    Object.values(cities).forEach((city) => {
      routes.push({
        url: ensureTrailingSlash(`${BASE_URL}/${service.slug}/${city.slug}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // 4. Micro-location Service Pages
      city.microLocations.forEach((microLoc) => {
        routes.push({
          url: ensureTrailingSlash(`${BASE_URL}/${service.slug}/${city.slug}/${microLoc.slug}`),
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });

      // 5. Landmark Service Pages
      city.landmarks.forEach((landmark) => {
        routes.push({
          url: ensureTrailingSlash(`${BASE_URL}/${service.slug}/${city.slug}/${landmark.slug}`),
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  });

  // 6. Comparison Pages
  comparisons.forEach((comparison) => {
    routes.push({
      url: ensureTrailingSlash(`${BASE_URL}/compare/${comparison.slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 7. Blog Posts (MDX)
  const posts = getAllPosts();
  posts.forEach((post) => {
    routes.push({
      url: ensureTrailingSlash(`${BASE_URL}/blog/${post.category}/${post.slug}`),
      // Use the post date if available, otherwise fallback
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}
