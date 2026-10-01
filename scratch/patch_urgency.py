file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re
# Remove Q3 Banner
content = re.sub(r'<div className="bg-red-500.*?Q3 COMPLIANCE DRIVE.*?</div>', '', content, flags=re.DOTALL)

# Remove CountdownTimer
content = content.replace("import CountdownTimer from '@/components/CountdownTimer';", "")
content = content.replace("<CountdownTimer hours={48} />", "")

# Remove letter circles (S A R M)
content = re.sub(r'<div className="flex -space-x-2">.*?</div>\n\s*<div className="flex items-center text-accent text-sm">', '<div className="flex items-center text-accent text-sm">', content, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(content)
