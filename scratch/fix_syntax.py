import os

def fix_imports(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix import { Metadata } \n import { constructMetadata } from '@/utils/metadata'; \n from 'next';
    bad_import = "import { Metadata }\nimport { constructMetadata } from '@/utils/metadata';\n from 'next';"
    good_import = "import { Metadata } from 'next';\nimport { constructMetadata } from '@/utils/metadata';"
    
    if bad_import in content:
        content = content.replace(bad_import, good_import)
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Fixed imports in {file_path}")

# 1. Fix about/page.tsx
about_file = 'src/app/(main)/about/page.tsx'
with open(about_file, 'r') as f:
    about_content = f.read()
about_content = about_content.replace('model\'s', 'model&apos;s')
about_content = about_content.replace('"The Work Lounge"', '&quot;The Work Lounge&quot;')
with open(about_file, 'w') as f:
    f.write(about_content)
print("Fixed about")

# 2, 3, 4. Fix imports
fix_imports('src/app/(main)/[service]/[city]/[microLocation]/page.tsx')
fix_imports('src/app/(main)/[service]/page.tsx')
fix_imports('src/app/(main)/compare/[slug]/page.tsx')

# 5. Fix blog/page.tsx
blog_file = 'src/app/(main)/blog/page.tsx'
with open(blog_file, 'r') as f:
    blog_lines = f.readlines()

# The error in blog/page.tsx is around lines 44-48:
# 44               </Link>
# 45             );
# 46           })}
# 47         </div>
# 48       </div>
# 49     </div>
# Let's just fix it.
with open(blog_file, 'r') as f:
    blog_content = f.read()

# I will just write a regex or replace if there's a typo.
# Wait, maybe there's a missing closing brace or extra one. Let's just run sed or look at it.
