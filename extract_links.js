const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!filepath.includes('node_modules') && !filepath.includes('.git') && !filepath.includes('.next')) {
        filelist = walk(filepath, filelist);
      }
    } else {
      if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
        filelist.push(filepath);
      }
    }
  }
  return filelist;
}

const files = walk('/Users/tonyvelloor/.gemini/antigravity/scratch/weespaces-website/src');
const urlRegex = /href=["'](https?:\/\/[^"']+)["']/g;
const links = new Set();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    links.add(match[1]);
  }
}

console.log(Array.from(links).join('\n'));
