import os

def replace_in_file(filepath, old_str, new_str, import_str="import { constructMetadata } from '@/utils/metadata';\n"):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f:
        content = f.read()
    
    if new_str in content or "constructMetadata" in content:
        return
        
    content = content.replace(old_str, new_str)
    
    if "import { Metadata }" in content:
        content = content.replace("import { Metadata }", f"import {{ Metadata }}\n{import_str}")
    elif "import type { Metadata }" in content:
        content = content.replace("import type { Metadata }", f"import type {{ Metadata }}\n{import_str}")
    else:
        content = import_str + content
        
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Updated {filepath}")

# 1. src/app/(main)/compare/[slug]/page.tsx
replace_in_file(
    "src/app/(main)/compare/[slug]/page.tsx",
"""  return {
    title,
    description: comparison.shortDesc,
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    }
  };""",
"""  return constructMetadata({
    title,
    description: comparison.shortDesc,
    canonicalPath: `/compare/${comparison.slug}`,
  });"""
)

# 2. src/app/(main)/[service]/[city]/[microLocation]/page.tsx
replace_in_file(
    "src/app/(main)/[service]/[city]/[microLocation]/page.tsx",
"""  return {
    title,
    description,
    alternates: {
      canonical: `/${service.slug}/${city.slug}/${microLoc.slug}`,
    }
  };""",
"""  return constructMetadata({
    title,
    description,
    canonicalPath: `/${service.slug}/${city.slug}/${microLoc.slug}`,
  });"""
)

# 3. src/app/(main)/[service]/[city]/page.tsx
replace_in_file(
    "src/app/(main)/[service]/[city]/page.tsx",
"""  return {
    title: `${service.name} in ${city.name} | Premium Workspaces | WeeSpaces`,
    description: `Looking for ${service.name.toLowerCase()} in ${city.name}? Premium workspaces, 0 setup cost, flexible terms. ${city.description}`,
    alternates: {
      canonical: `/${service.slug}/${city.slug}`,
    }
  };""",
"""  return constructMetadata({
    title: `${service.name} in ${city.name} | Premium Workspaces | WeeSpaces`,
    description: `Looking for ${service.name.toLowerCase()} in ${city.name}? Premium workspaces, 0 setup cost, flexible terms. ${city.description}`,
    canonicalPath: `/${service.slug}/${city.slug}`,
  });"""
)

# 4. src/app/(main)/[service]/page.tsx
replace_in_file(
    "src/app/(main)/[service]/page.tsx",
"""  return {
    title: `${service.name} in Kerala & Tamil Nadu | WeeSpaces`,
    description: `Find premium ${service.name.toLowerCase()} across South India. ${service.shortDesc} Zero setup costs, flexible terms, and premium amenities.`,
    alternates: {
      canonical: `/${service.slug}`,
    }
  };""",
"""  return constructMetadata({
    title: `${service.name} in Kerala & Tamil Nadu | WeeSpaces`,
    description: `Find premium ${service.name.toLowerCase()} across South India. ${service.shortDesc} Zero setup costs, flexible terms, and premium amenities.`,
    canonicalPath: `/${service.slug}`,
  });"""
)

