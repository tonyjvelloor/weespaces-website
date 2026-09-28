import re

file_path = "src/app/(main)/[service]/[city]/page.tsx"

with open(file_path, 'r') as f:
    content = f.read()

target = """            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              No deposits. No setup. No hidden costs. Expand your business instantly without the traditional office headaches.
            </p>"""

replacement = """            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              {city.slug === 'kochi' 
                ? `Find the perfect workspace in Kochi. Whether you need an office space in Kochi, or flexible coworking in Ernakulam and Kakkanad, we have you covered with zero hidden costs.` 
                : city.slug === 'calicut' 
                ? `Discover premium coworking in Kozhikode. Our HiLite Business Park location provides the ideal working space in Calicut for growing teams.`
                : city.slug === 'trivandrum' 
                ? `Your ideal workspace in Trivandrum. Join our premium coworking space in Kazhakootam, right next to Technopark, with zero setup costs.`
                : city.slug === 'coimbatore' 
                ? `Elevate your workspace in Coimbatore. Find flexible office space and premium coworking in Saravanampatti with enterprise-grade amenities.`
                : `No deposits. No setup. No hidden costs. Expand your business instantly without the traditional office headaches.`
              }
            </p>"""

content = content.replace(target, replacement)

with open(file_path, 'w') as f:
    f.write(content)

print("Patch applied to Coworking Hero.")
