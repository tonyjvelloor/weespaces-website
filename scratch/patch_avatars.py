file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

target = """                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-navy overflow-hidden bg-gray-200">
                      <Image src={`/images/testimonials/avatar-${i}.jpg`} alt="User" width={48} height={48} className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>"""

replacement = """                <div className="flex -space-x-4">
                  {['S', 'M', 'R', 'P'].map((initial, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-navy bg-accent flex items-center justify-center text-navy font-bold text-lg">
                      {initial}
                    </div>
                  ))}
                </div>"""

content = content.replace(target, replacement)

with open(file_path, "w") as f:
    f.write(content)
