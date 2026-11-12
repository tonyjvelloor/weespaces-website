file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re

# 1. Update Hero Headline and Subheadline
content = re.sub(
    r'<DynamicCityHeadline.*?/>',
    '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">\n              Your GST-ready business address in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Kerala</span><br/>\n              — ₹8,999/year\n            </h1>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 max-w-xl">.*?</p>',
    '<p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 max-w-xl">NOC, rent agreement and utility bill in 48 hours, from a staffed WeeSpaces centre. Our manager is on-site when the GST officer visits.</p>',
    content,
    flags=re.DOTALL
)

# 2. Add Strikethrough pricing and explicit terms in the benefits section
# Find the section with "Virtual Office Deliverables"
pricing_html = """
<div className="bg-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
    <div>
      <h3 className="text-3xl font-black mb-2">What ₹8,999/yr gets you</h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl text-white/50 line-through font-bold">₹14,999</span>
        <span className="bg-accent text-navy px-3 py-1 rounded-full text-sm font-bold tracking-wide">SAVE ₹6,000</span>
      </div>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> NOC, Notarised Rent Agreement & Utility Bill</li>
        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Name board displayed at the entrance</li>
        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Mail and courier handling</li>
        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> On-site support during GST physical verification</li>
      </ul>
      <p className="text-white/60 text-sm font-medium">
        * ₹8,999 + 18% GST for 12 months. Renews at prevailing market rates. Pay via UPI, Credit/Debit Card, or Bank Transfer.
      </p>
    </div>
    <div className="shrink-0 w-full md:w-auto">
      <a href="#lead-form" className="block text-center bg-accent hover:bg-accent-light text-navy px-8 py-4 rounded-xl font-black transition-all text-lg shadow-lg">
        Get My Address Documents
      </a>
    </div>
  </div>
</div>
"""

# Replace the existing "Why Businesses Choose Us" or timeline with the new pricing block + 3 use cases
content = re.sub(
    r'<section className="py-20 bg-gray-50 relative">.*?<div className="text-center mb-16">.*?<h2 className="text-3xl md:text-5xl font-black text-navy mb-4">Why Businesses Choose Us</h2>.*?</section>',
    f"""<section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {pricing_html}
        
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-10 text-center">Who uses our Virtual Offices?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">E-Commerce Sellers</h3>
              <p className="text-gray-600 font-medium">Amazon and Flipkart sellers adding a required Kerala place of business (APOB/PPOB).</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">New Pvt Ltd & LLP Founders</h3>
              <p className="text-gray-600 font-medium">Startups requiring a premium, compliant commercial address for MCA incorporation.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Out-of-State Companies</h3>
              <p className="text-gray-600 font-medium">Businesses expanding to South India needing a local GSTIN without physical office costs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>""",
    content,
    flags=re.DOTALL
)

# Also ensure lucide icons are imported
if "Store" not in content:
    content = content.replace("CheckCircle2, Star, Clock", "CheckCircle2, Star, Clock, Store, Building, Globe")

with open(file_path, "w") as f:
    f.write(content)
