const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content/blog');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Only inject if it's about virtual office and doesn't already have the component
  if ((content.toLowerCase().includes('virtual office') || file.includes('virtual')) && !content.includes('<VoInternalLinks')) {
    
    // Find a good place to inject. Let's find the first `## ` after the frontmatter
    const frontmatterEnd = content.indexOf('---', 4);
    if (frontmatterEnd > -1) {
      const firstH2 = content.indexOf('\n## ', frontmatterEnd);
      if (firstH2 > -1) {
        // Inject right before the first H2
        const injection = '\n\n<VoInternalLinks />\n\n';
        content = content.slice(0, firstH2) + injection + content.slice(firstH2);
        fs.writeFileSync(filePath, content);
        modifiedCount++;
      }
    }
  }
}

console.log(`Injected <VoInternalLinks /> into ${modifiedCount} blog posts.`);
