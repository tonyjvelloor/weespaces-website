import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Remove Trusted By Strip
content = re.sub(r'\{\/\* Trusted By Strip \*\/\}.*?<\/section>', '', content, flags=re.DOTALL)

# Remove Quick Actions Bar
content = re.sub(r'\{\/\* Quick Actions Bar \*\/\}.*?<\/section>', '', content, flags=re.DOTALL)

# Extract sections
hero = re.search(r'(\{\/\* Hero Section \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
stats = re.search(r'(\{\/\* Static Stat Block \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
timeline = re.search(r'(\{\/\* Horizontal Timeline \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
audience = re.search(r'(\{\/\* Audience Segmentation \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
pricing = re.search(r'(\{\/\* Pricing Preview Section \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
amenities = re.search(r'(\{\/\* Workspace Gallery & Amenities \*\/\}.*?<\/section>)', content, flags=re.DOTALL).group(1)
gallery = re.search(r'(\{\/\* Photo Gallery \*\/\}\n\s*<PhotoGallery \/>)', content, flags=re.DOTALL).group(1)
testimonials = re.search(r'(<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white\/10">\n\s*<ScrollReveal direction="up" className="text-center mb-16 relative">\n\s*<h2 className="text-4xl font-bold mb-4">Trusted by <span className="text-accent">Growing Teams.*?<\/section>)', content, flags=re.DOTALL).group(1)

# Add Mobile Divider image at the end of Audience Segmentation
mobile_divider = '''
      {/* Mobile Divider Image (Before Pricing) */}
      <div className="md:hidden max-w-7xl mx-auto px-6 mb-16">
         <div className="relative w-full h-48 rounded-2xl overflow-hidden glass border border-white/10 shadow-[0_0_20px_rgba(242,156,31,0.15)]">
             <Image src="/images/branches/calicut/workspace1.jpg" alt="WeeSpaces Premium Workspace" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                 <p className="text-white font-bold text-lg">Your Workspace, Redefined.</p>
             </div>
         </div>
      </div>
'''
audience = audience + "\n" + mobile_divider

# Update Pricing to show Private Cabin from ₹18,000/mo and exclude day pass
pricing = pricing.replace('<span className="text-4xl font-bold text-white">Custom</span>\n                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">Pricing</span>', '<span className="text-4xl font-bold text-white">₹18,000</span>\n                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>')

# Reorder: Hero → Gallery → Amenities → Testimonials → Audience Segmentation → Pricing → Growth Timeline → Stats.
new_body = "\n\n".join([hero, gallery, amenities, testimonials, audience, pricing, timeline, stats])

# Reconstruct file
prefix = content.split('{/* Hero Section */}')[0]
suffix = content.split('</section>')[-1].strip()

with open('src/app/page.tsx', 'w') as f:
    f.write(prefix + new_body + "\n    </>\n  );\n}\n")
