import re

file_path = "src/app/(main)/[service]/[city]/page.tsx"

with open(file_path, "r") as f:
    content = f.read()

# Add the import
import_statement = "import ABTestCTA from '@/components/ABTestCTA';\n"
content = content.replace("import LocalBusinessSchema", "import ABTestCTA from '@/components/ABTestCTA';\nimport LocalBusinessSchema")

# Replace the specific Book Tour link
target = """           <a href="#book-tour" className="flex items-center justify-center gap-2 lg:bg-accent lg:text-navy text-accent bg-accent/10 px-4 py-3 lg:py-4 rounded-xl font-bold lg:shadow-lg hover:lg:scale-105 transition-all text-sm w-full lg:w-auto">
             <Clock className="w-4 h-4" /> Book Tour
           </a>"""

replacement = """           <ABTestCTA experimentId="hero_cta_v1" className="lg:bg-accent lg:text-navy text-accent bg-accent/10 px-4 py-3 lg:py-4 rounded-xl font-bold lg:shadow-lg text-sm w-full lg:w-auto" />"""

content = content.replace(target, replacement)

with open(file_path, "w") as f:
    f.write(content)

print("ABTestCTA injected")
