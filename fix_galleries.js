const fs = require('fs');

let content = fs.readFileSync('src/data/locations.ts', 'utf-8');

const images = {
  kochi: "['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']",
  calicut: "['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']",
  coimbatore: "['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']",
  trivandrum: "['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']"
};

// We will regex replace the gallery arrays in the cities block.
// This is a bit tricky, so we'll just parse the file and replace string segments
const kochiRegex = /id: 'kochi',[\s\S]*?gallery: \[.*?\]/g;
const calicutRegex = /id: 'calicut',[\s\S]*?gallery: \[.*?\]/g;
const coimbatoreRegex = /id: 'coimbatore',[\s\S]*?gallery: \[.*?\]/g;
const trivandrumRegex = /id: 'trivandrum',[\s\S]*?gallery: \[.*?\]/g;

// Instead of complex regex, let's just do simple string replacements for the micro locations
// by searching for the micro location name and replacing its gallery array.

content = content.replace(/gallery: \['\/images\/branches\/kochi\/reception\.jpg', '\/images\/branches\/kochi\/reception\.jpg', '\/images\/branches\/kochi\/reception\.jpg', '\/images\/branches\/kochi\/reception\.jpg'\]/g, "GALLERY_PLACEHOLDER");

// It's safer to use a regex that matches ANY gallery array and we can dynamically inject based on city
// Wait, the easiest way is just to replace the placeholders we added.
