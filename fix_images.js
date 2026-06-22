const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const regex = /<Image([^>]+?)fill([^>]*?)>/g;
  
  content = content.replace(regex, (match, p1, p2) => {
    if (match.includes('sizes=')) return match;
    changed = true;
    
    let sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    if (match.includes('priority') || match.includes('hero') || match.includes('Hero')) {
      sizes = '100vw';
    }
    
    return `<Image${p1}fill sizes="${sizes}"${p2}>`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated images in ${filePath}`);
  }
});
