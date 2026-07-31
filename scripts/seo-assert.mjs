import fs from 'fs';
import path from 'path';

const NEXT_APP_DIR = path.join(process.cwd(), '.next', 'server', 'app');

let errors = 0;
let warnings = 0;
let checkedFiles = 0;

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

function checkHtmlFile(filePath) {
  if (!filePath.endsWith('.html')) return;
  // Skip 404, 500, etc.
  if (path.basename(filePath).match(/^[0-9]{3}\.html$/)) return;
  // Skip internal next files
  if (filePath.includes('/_') || filePath.includes('\\_')) return;

  checkedFiles++;
  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Check 1: Exactly one H1 tag
  const h1Matches = html.match(/<h1[^>]*>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    console.warn(`⚠️ [Missing H1]: ${filePath}`);
    warnings++;
  } else if (h1Matches.length > 1) {
    console.error(`❌ [Multiple H1s (${h1Matches.length})]: ${filePath}`);
    errors++;
  }

  // Check 2: Canonical tag exists
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    console.warn(`⚠️ [Missing Canonical]: ${filePath}`);
    warnings++;
  } else {
    const canonicalUrl = canonicalMatch[1];
    // Check 3: No trailing slash in canonical (unless it's the root domain like https://weespaces.in/)
    if (canonicalUrl.endsWith('/') && canonicalUrl.split('/').length > 4) {
      console.error(`❌ [Trailing Slash in Canonical]: ${filePath} (${canonicalUrl})`);
      errors++;
    }
  }

  // Check 4: Title exists
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error(`❌ [Missing Title]: ${filePath}`);
    errors++;
  }

  // Check 5: Meta description exists
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (!descMatch) {
    console.error(`❌ [Missing Meta Description]: ${filePath}`);
    errors++;
  }
}

console.log('🚀 Starting SEO Validation on build output...');

if (!fs.existsSync(NEXT_APP_DIR)) {
  console.error('❌ Could not find .next/server/app directory. Make sure you run this after `npm run build`.');
  process.exit(1);
}

walkDir(NEXT_APP_DIR, checkHtmlFile);

console.log(`\n✅ Checked ${checkedFiles} static HTML files.`);
if (warnings > 0) {
  console.log(`⚠️  Found ${warnings} warnings.`);
}

if (errors > 0) {
  console.error(`\n❌ SEO Validation failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('\n🎉 SEO Validation passed successfully!');
  process.exit(0);
}
