import re

file_path = "src/components/templates/VirtualOfficeCityTemplate.tsx"

with open(file_path, 'r') as f:
    content = f.read()

replacement = """  if (city.slug === 'kochi') {
    heroTitle = `Virtual Office in Kochi | Palarivattom & Infopark`;
    heroSub = `The perfect launchpad for IT startups. Get a premium virtual office in Ernakulam, Palarivattom, and Infopark for GST and company incorporation.`;
    perks = ["Near Infopark", "Virtual Office Ernakulam", "Virtual Office Palarivattom"];
  } else if (city.slug === 'trivandrum') {
    heroTitle = `Virtual Office in Trivandrum (Technopark)`;
    heroSub = `Establish your presence among government contractors and IT giants in Kerala's capital. Get your virtual office in Trivandrum today.`;
    perks = ["Near Technopark", "IT Companies & Govt Contractors", "Mail Forwarding"];
  } else if (city.slug === 'coimbatore') {
    heroTitle = `Virtual Office in Coimbatore`;
    heroSub = `Fast-track your business expansion into Tamil Nadu's SME hub with a compliant registered office. Get your virtual office in Coimbatore today.`;
    perks = ["Tamil Nadu GST", "Manufacturing & SMEs", "Meeting Room Access"];
  } else if (city.slug === 'calicut') {
    heroTitle = `Virtual Office Kozhikode (Calicut)`;
    heroSub = `Expand your regional footprint with a premium virtual office in Kozhikode (Calicut) for GST and mail handling.`;
    perks = ["Virtual Office Kozhikode", "Startups & SMEs", "Regional Expansion"];"""

content = re.sub(
    r"  if \(city\.slug === 'kochi'\) \{.*?\} else if \(city\.slug === 'calicut'\) \{.*?\}",
    replacement,
    content,
    flags=re.DOTALL
)

with open(file_path, 'w') as f:
    f.write(content)

print("Patch applied to VirtualOfficeCityTemplate.")
