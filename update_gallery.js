const fs = require('fs');

let content = fs.readFileSync('src/data/locations.ts', 'utf-8');

// Replace the single image array with 4 images
content = content.replace(
  /gallery: \['\/images\/branches\/kochi\/reception\.jpg'\]/g,
  "gallery: ['/images/branches/kochi/reception.jpg', '/images/branches/kochi/reception.jpg', '/images/branches/kochi/reception.jpg', '/images/branches/kochi/reception.jpg']"
);

fs.writeFileSync('src/data/locations.ts', content, 'utf-8');
console.log('locations.ts updated with 4 gallery images successfully');
