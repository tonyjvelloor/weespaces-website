const fs = require('fs');

let content = fs.readFileSync('src/data/locations.ts', 'utf-8');

// Update Types
content = content.replace(
  /parking: string;\n};/,
  'parking: string;\n  gallery: string[];\n};'
);

content = content.replace(
  /gstRegistrationRules: string;\n  microLocations:/,
  'gstRegistrationRules: string;\n  gallery: string[];\n  microLocations:'
);

// Add to Kochi city
content = content.replace(
  /gstRegistrationRules: 'Kerala follows standard GST procedures. A virtual office or physical workspace in Kochi provides a highly credible business address required for quick GST registration and state compliance.',\n    microLocations: \[/g,
  "gstRegistrationRules: 'Kerala follows standard GST procedures. A virtual office or physical workspace in Kochi provides a highly credible business address required for quick GST registration and state compliance.',\n    gallery: ['/images/branches/kochi/reception.jpg'],\n    microLocations: ["
);

// Add to Trivandrum city
content = content.replace(
  /gstRegistrationRules: 'Registering a business in the capital city provides unparalleled credibility. Our virtual and managed offices supply all required NOCs and rental agreements needed for rapid GST clearance in Kerala.',\n    microLocations: \[/g,
  "gstRegistrationRules: 'Registering a business in the capital city provides unparalleled credibility. Our virtual and managed offices supply all required NOCs and rental agreements needed for rapid GST clearance in Kerala.',\n    gallery: ['/images/branches/kochi/reception.jpg'],\n    microLocations: ["
);

// Add to Calicut city
content = content.replace(
  /gstRegistrationRules: 'A registered office address in Calicut is mandatory for local GST compliance. Our workspaces offer premium addresses in commercial hubs to ensure your business meets all state regulations effortlessly.',\n    microLocations: \[/g,
  "gstRegistrationRules: 'A registered office address in Calicut is mandatory for local GST compliance. Our workspaces offer premium addresses in commercial hubs to ensure your business meets all state regulations effortlessly.',\n    gallery: ['/images/branches/kochi/reception.jpg'],\n    microLocations: ["
);

// Add to Coimbatore city
content = content.replace(
  /gstRegistrationRules: 'As a major commercial hub in Tamil Nadu, GST registration requires a credible physical address. Our managed and virtual offices in Coimbatore provide the necessary documentation for swift approval.',\n    microLocations: \[/g,
  "gstRegistrationRules: 'As a major commercial hub in Tamil Nadu, GST registration requires a credible physical address. Our managed and virtual offices in Coimbatore provide the necessary documentation for swift approval.',\n    gallery: ['/images/branches/kochi/reception.jpg'],\n    microLocations: ["
);

// Add to all microLocations
content = content.replace(/parking: '(.*?)'\n      }/g, "parking: '$1',\n        gallery: ['/images/branches/kochi/reception.jpg']\n      }");

fs.writeFileSync('src/data/locations.ts', content, 'utf-8');
console.log('locations.ts updated successfully');
