import re

file_path = "src/app/(main)/[service]/[city]/page.tsx"

with open(file_path, 'r') as f:
    content = f.read()

replacement = """  if (service.slug === 'virtual-office') {
    if (city.slug === 'kochi') {
      metaTitle = `Virtual Office in Kochi | Palarivattom, Infopark & Ernakulam | WeeSpaces`;
      metaDesc = `Get a premium virtual office and business address in Kochi (Palarivattom, Infopark, Ernakulam) for GST compliance and company incorporation.`;
    } else if (city.slug === 'calicut') {
      metaTitle = `Virtual Office Kozhikode | HiLite Business Park Address | WeeSpaces`;
      metaDesc = `Get a premium virtual office in Kozhikode (Calicut) at HiLite Business Park for GST compliance and company incorporation. Fast setup in 24 hours.`;
    } else if (city.slug === 'trivandrum') {
      metaTitle = `Virtual Office in Trivandrum | Near Technopark & Kazhakootam | WeeSpaces`;
      metaDesc = `Premium virtual office in Trivandrum. Establish your business address near Technopark for GST and company registration.`;
    } else if (city.slug === 'coimbatore') {
      metaTitle = `Virtual Office in Coimbatore | Premium Business Address | WeeSpaces`;
      metaDesc = `Get a virtual office in Coimbatore for GST and company registration. Establish a premium presence in Saravanampatti and RS Puram.`;
    } else {
      metaTitle = `Virtual Office in ${city.name} | GST & Company Registration | WeeSpaces`;
      metaDesc = `Get a premium virtual office and business address in ${city.name} for GST compliance and company incorporation. Fast setup in 48 hours.`;
    }
  } else if (service.slug === 'coworking-space') {
    if (city.slug === 'kochi') {
      metaTitle = `Best Coworking Space Kochi | Workspace & Office Space in Kochi | WeeSpaces`;
      metaDesc = `Premium workspace in Kochi. Find the best coworking space in Ernakulam and Kakkanad with dedicated desks, meeting rooms, and high-speed internet.`;
    } else if (city.slug === 'calicut') {
      metaTitle = `Coworking Space Kozhikode | Working Space Calicut | WeeSpaces`;
      metaDesc = `Premium coworking space in Calicut. Find your perfect working space at HiLite Business Park with 24/7 access and zero hidden fees.`;
    } else if (city.slug === 'trivandrum') {
      metaTitle = `Coworking Space Trivandrum | Workspace near Kazhakootam & Technopark`;
      metaDesc = `Premium coworking space in Trivandrum. Find your ideal workspace near Technopark and Kazhakootam with dedicated desks and meeting rooms.`;
    } else if (city.slug === 'coimbatore') {
      metaTitle = `Coworking Space Coimbatore | Workspace in Saravanampatti | WeeSpaces`;
      metaDesc = `Premium workspace in Coimbatore. Find flexible office space and coworking options in Saravanampatti and Gandhipuram.`;
    } else {
      metaTitle = `Coworking Space in ${city.name} | From ₹4,999/mo | WeeSpaces`;
      metaDesc = `Premium coworking space in ${city.name}. Dedicated desks, high-speed internet, meeting rooms, and 24/7 access with zero hidden fees.`;
    }
  } else if (service.slug === 'private-office' || service.slug === 'managed-office') {"""

content = re.sub(
    r"  if \(service\.slug === 'virtual-office'\) \{.*?\} else if \(service\.slug === 'private-office' \|\| service\.slug === 'managed-office'\) \{",
    replacement,
    content,
    flags=re.DOTALL
)

with open(file_path, 'w') as f:
    f.write(content)

print("Patch applied successfully.")
