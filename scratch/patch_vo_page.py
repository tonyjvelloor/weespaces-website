file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Add imports
imports = """import LiveSignupToast from '@/components/LiveSignupToast';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import DynamicCityHeadline from '@/components/DynamicCityHeadline';
"""

content = content.replace("import TrustLayer from '@/components/ui/TrustLayer';", "import TrustLayer from '@/components/ui/TrustLayer';\n" + imports)

# Replace the H1 with DynamicCityHeadline
import re
h1_pattern = r'<h1.*?Legally Register Your Company.*?</h1>'
content = re.sub(h1_pattern, '<DynamicCityHeadline />', content, flags=re.DOTALL)

# Add StickyMobileCTA and LiveSignupToast right inside the main div
content = content.replace('<div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">', '<div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">\n      <LiveSignupToast />\n      <StickyMobileCTA />')

with open(file_path, "w") as f:
    f.write(content)
