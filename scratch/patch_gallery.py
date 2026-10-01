file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re

target_gallery = re.search(r'(<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-\[600px\]">.*?</section>)', content, re.DOTALL)
if target_gallery:
    new_gallery = """<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
            {/* Left large image */}
            <div className="relative rounded-3xl overflow-hidden group h-[300px] md:h-full">
              <Image src="/images/exterior.jpg" alt="Premium Building Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Grade-A IT Parks</h3>
                <p className="text-gray-300 text-sm">Impressive infrastructure</p>
              </div>
            </div>
            
            {/* Center stack */}
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/kochi_coworking.jpg" alt="Modern Reception Area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Professional Receptions</h3>
                  <p className="text-gray-300 text-sm">We handle your mail and guests</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/calicut_coworking.jpg" alt="Premium Workspaces" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Modern Interiors</h3>
                  <p className="text-gray-300 text-sm">Fully furnished layouts</p>
                </div>
              </div>
            </div>

            {/* Right stack - Coimbatore */}
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/branches/coimbatore/exterior-tall.jpg" alt="Coimbatore Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Coimbatore Hub</h3>
                  <p className="text-gray-300 text-sm">Premium business park</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/branches/coimbatore/amenity1.jpg" alt="Coimbatore Amenity" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">World-Class Amenities</h3>
                  <p className="text-gray-300 text-sm">Access to premium facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>"""
    
    content = content.replace(target_gallery.group(1), new_gallery)
    with open(file_path, "w") as f:
        f.write(content)
    print("Gallery patched.")
else:
    print("Could not find gallery section.")
