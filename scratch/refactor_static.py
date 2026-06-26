import os
import re

STATIC_FILES = [
    ("src/app/(campaigns)/landing/thank-you/page.tsx", "/landing/thank-you", True),
    ("src/app/layout.tsx", "/", False),
    ("src/app/(main)/contact/page.tsx", "/contact", False),
    ("src/app/(main)/enterprise/page.tsx", "/enterprise", False),
    ("src/app/(main)/privacy-policy/page.tsx", "/privacy-policy", False),
    ("src/app/(main)/faq/layout.tsx", "/faq", False),
    ("src/app/(main)/terms/page.tsx", "/terms", False),
    ("src/app/(main)/book-tour/page.tsx", "/book-tour", False),
    ("src/app/(main)/tech-parks/page.tsx", "/tech-parks", False),
    ("src/app/(main)/locations/page.tsx", "/locations", False),
    ("src/app/(main)/alternatives/page.tsx", "/alternatives", False),
    ("src/app/(main)/community/page.tsx", "/community", False),
    ("src/app/(main)/page.tsx", "/", False),
    ("src/app/(main)/pricing/layout.tsx", "/pricing", False),
    ("src/app/(main)/services/incubation/page.tsx", "/services/incubation", False),
    ("src/app/(main)/investors/page.tsx", "/investors", False),
]

for filepath, canonical, noIndex in STATIC_FILES:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r') as f:
        content = f.read()

    # Skip if already using constructMetadata
    if 'constructMetadata' in content:
        continue

    # Extract title and description
    title_match = re.search(r'title:\s*[\'"`](.*?)[\'"`]', content)
    desc_match = re.search(r'description:\s*[\'"`](.*?)[\'"`]', content)
    
    title = title_match.group(1) if title_match else "WeeSpaces | Premium Coworking & Managed Offices"
    desc = desc_match.group(1) if desc_match else "Premium coworking spaces & managed offices in Trivandrum, Kochi, Calicut & Coimbatore."

    if filepath == "src/app/layout.tsx":
        # layout.tsx needs special handling since it contains metadataBase
        new_meta = f"""import {{ constructMetadata }} from '@/utils/metadata';

export const metadata: Metadata = {{
  metadataBase: new URL('https://www.weespaces.in'),
  ...constructMetadata({{
    title: "{title}",
    description: "{desc}",
    canonicalPath: "{canonical}",
  }}),
  keywords: ["Coworking space Kerala", "Office space Coimbatore", "Managed offices Trivandrum", "Premium coworking Ernakulam", "Private cabins Calicut"],
  verification: {{
    google: "XN0i_JTKrBVCjj37Hp_zuSl38bfGQR2qhsuUEzWdee4",
    other: {{
      'ahrefs-site-verification': 'd3997787cfaac2252dbec64bf63beebe9e91a31a5df4d755b5a570eba7beee86',
    }},
  }},
}};"""
    else:
        # Standard pages
        no_index_str = ",\n  noIndex: true" if noIndex else ""
        new_meta = f"""import {{ constructMetadata }} from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({{
  title: "{title}",
  description: "{desc}",
  canonicalPath: "{canonical}"{no_index_str}
}});"""

    # Replace old block
    new_content = re.sub(r'export const metadata: Metadata = \{.*?^\};', new_meta, content, flags=re.DOTALL|re.MULTILINE)
    
    # Add import Metadata if constructMetadata replaced it but we still need it (for type annotation on constructMetadata variable)
    if 'import { Metadata }' not in new_content and 'import type { Metadata }' not in new_content:
        new_content = new_content.replace("import { constructMetadata }", "import { Metadata }\nimport { constructMetadata }")
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Updated {filepath}")
