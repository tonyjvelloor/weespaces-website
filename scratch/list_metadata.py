import os
import re

FILES_TO_PROCESS = [
    "src/app/(campaigns)/landing/thank-you/page.tsx",
    "src/app/layout.tsx",
    "src/app/(main)/contact/page.tsx",
    "src/app/(main)/enterprise/page.tsx",
    "src/app/(main)/privacy-policy/page.tsx",
    "src/app/(main)/faq/layout.tsx",
    "src/app/(main)/terms/page.tsx",
    "src/app/(main)/book-tour/page.tsx",
    "src/app/(main)/blog/page.tsx",
    "src/app/(main)/tech-parks/page.tsx",
    "src/app/(main)/locations/page.tsx",
    "src/app/(main)/alternatives/page.tsx",
    "src/app/(main)/community/page.tsx",
    "src/app/(main)/page.tsx",
    "src/app/(main)/pricing/layout.tsx",
    "src/app/(main)/services/coworking/page.tsx",
    "src/app/(main)/services/incubation/page.tsx",
    "src/app/(main)/investors/page.tsx",
    "src/app/(campaigns)/landing/[location]/page.tsx",
    "src/app/(main)/blog/[category]/page.tsx",
    "src/app/(main)/blog/[category]/[slug]/page.tsx",
    "src/app/(main)/compare/[slug]/page.tsx",
    "src/app/(main)/[service]/[city]/[microLocation]/page.tsx",
    "src/app/(main)/[service]/[city]/page.tsx",
    "src/app/(main)/[service]/page.tsx",
]

# This is a complex refactoring that is probably better done by manually reviewing each one using replace_file_content
# I will use Python to just PRINT the current metadata blocks, so I can easily format them.

for file in FILES_TO_PROCESS:
    if not os.path.exists(file): continue
    with open(file, 'r') as f:
        content = f.read()
    
    # We can try a simple regex to extract the metadata block
    match = re.search(r'export const metadata: Metadata = \{(.*?)\};', content, re.DOTALL)
    if match:
        print(f"=== {file} ===")
        print(match.group(0))
        print("")
    
    match2 = re.search(r'export async function generateMetadata.*?\{(.*?)\}', content, re.DOTALL)
    if match2:
        print(f"=== {file} ===")
        print(match2.group(0))
        print("")
