import { generateSitemaps, default as sitemap } from './src/app/sitemap.ts';
async function count() {
  const ids = await generateSitemaps();
  let total = 0;
  for (const {id} of ids) {
    const routes = sitemap({ id });
    console.log(`Sitemap ${id}: ${routes.length} URLs`);
    total += routes.length;
  }
  console.log('Total URLs:', total);
}
count();
