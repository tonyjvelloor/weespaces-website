const { cities } = require('./src/data/locations');

Object.values(cities).forEach(city => {
  const validSlugs = new Set();
  city.microLocations.forEach(m => validSlugs.add(m.slug));
  city.landmarks.forEach(l => validSlugs.add(l.slug));
  
  if (city.proximityNodes) {
    city.proximityNodes.forEach(node => {
      if (node.slug && !validSlugs.has(node.slug)) {
        console.log(`404 error found in ${city.name}: proximityNode slug "${node.slug}" does not exist in microLocations or landmarks.`);
      }
    });
  }
});
