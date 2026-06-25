import os
import glob
import re

directories = [
    'src/app/coworking-space-near-tidel-park-coimbatore',
    'src/app/coworking-space-peelamedu',
    'src/app/coworking-space-avinashi-road',
    'src/app/coworking-space-saravanampatti',
    'src/app/coworking-space-gandhipuram',
    'src/app/managed-office-space-coimbatore',
    'src/app/coworking-space-for-startups-coimbatore',
    'src/app/dedicated-desk-coimbatore',
    'src/app/virtual-office-coimbatore'
]

for d in directories:
    page_path = os.path.join(d, 'page.tsx')
    if not os.path.exists(page_path):
        continue
    
    with open(page_path, 'r') as f:
        content = f.read()

    slug = d.split('/')[-1]

    # Don't inject if already there
    if 'application/ld+json' in content:
        continue

    schema_json = """
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeeSpaces %s",
    "image": "https://www.weespaces.in/images/branches/coimbatore/exterior-tall.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vidyanagar 3rd Street, Vidya Nagar, Civil Aerodrome Post, Kalapatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641014",
      "addressCountry": "IN"
    },
    "url": "https://www.weespaces.in/%s",
    "telephone": "+919999999999"
  };
""" % (slug.replace('-', ' ').title(), slug)

    replacement = schema_json + """
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-20">"""
      
    content = content.replace('  return (\n    <div className="pt-24 pb-20">', replacement)
    
    # We also need to add a closing fragment </> at the very end
    content = content.replace('    </div>\n  );\n}', '    </div>\n    </>\n  );\n}')
    
    with open(page_path, 'w') as f:
        f.write(content)
    
    print(f"Updated {page_path}")

