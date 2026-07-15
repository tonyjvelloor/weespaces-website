const fs = require('fs');

// We can just parse the routes from sitemap.ts logic roughly.
// Or just let's see how many posts there are.
const posts = fs.readdirSync('./content/blog').length;
console.log('Posts:', posts);

const locations = fs.readFileSync('./src/data/locations.ts', 'utf8');
const cityMatches = locations.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
// This is too crude.

