import re

file_path = "src/app/(main)/[service]/[city]/page.tsx"

with open(file_path, 'r') as f:
    content = f.read()

# 1. Inject faqSchema variable definition after galleryLabels
faq_def = """  const galleryLabels = ["📍 Reception", "📍 Hot Desk Zone", "📍 Private Cabins", "📍 Collaboration Area"];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || "Contact us for details."
      }
    }))
  };"""

content = content.replace('  const galleryLabels = ["📍 Reception", "📍 Hot Desk Zone", "📍 Private Cabins", "📍 Collaboration Area"];', faq_def)

# 2. Inject it into the Virtual Office return block JSON array
content = re.sub(
    r'(\{\s*"@context": "https://schema\.org",\s*"@type": "WebSite",\s*"url": "https://weespaces\.in/",\s*"name": "WeeSpaces",\s*"description": "Premium Workspaces in South India"\s*\})',
    r'\1,\n              faqSchema',
    content
)

# 3. Inject it into the main return block. Wait, let's see if the main return block has JSON-LD.
# Let's just add it as a new <script> block right inside <div className="relative">
main_return_injection = """  return (
    <div className="relative">
      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />"""

content = content.replace('  return (\n    <div className="relative">', main_return_injection)

with open(file_path, 'w') as f:
    f.write(content)

print("FAQ Schema Patch applied.")
