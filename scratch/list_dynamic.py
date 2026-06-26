import re
import os

FILES = [
    "src/app/(campaigns)/landing/[location]/page.tsx",
    "src/app/(main)/blog/[category]/page.tsx",
    "src/app/(main)/blog/[category]/[slug]/page.tsx",
    "src/app/(main)/compare/[slug]/page.tsx",
    "src/app/(main)/[service]/[city]/[microLocation]/page.tsx",
    "src/app/(main)/[service]/[city]/page.tsx",
    "src/app/(main)/[service]/page.tsx",
]

for f in FILES:
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
        match = re.search(r'export async function generateMetadata.*?return \{.*?\};', content, re.DOTALL)
        if match:
            print(f"=== {f} ===")
            print(match.group(0))
            print("")
