file_path = "src/app/(main)/layout.tsx"
with open(file_path, "r") as f:
    content = f.read()

import_statement = "import ExitIntentPopup from '@/components/ExitIntentPopup';\n"
content = import_statement + content

content = content.replace("<MobileStickyCTA />", "<MobileStickyCTA />\n      <ExitIntentPopup />")

with open(file_path, "w") as f:
    f.write(content)
