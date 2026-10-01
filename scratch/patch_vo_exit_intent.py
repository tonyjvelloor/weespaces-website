file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

imports = """import VOExitIntentPopup from '@/components/VOExitIntentPopup';
import LiveSignupToast from '@/components/LiveSignupToast';"""

content = content.replace("import LiveSignupToast from '@/components/LiveSignupToast';", imports)

tags = """<div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">
      <VOExitIntentPopup />
      <LiveSignupToast />"""

content = content.replace('<div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">\n      <LiveSignupToast />', tags)

with open(file_path, "w") as f:
    f.write(content)
