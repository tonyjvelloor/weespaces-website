import os
import re
import glob

# Map of target phrase -> URL
LINK_MAP = {
    r'\b(?:virtual office in kochi)\b': '/virtual-office/kochi',
    r'\b(?:virtual office kochi)\b': '/virtual-office/kochi',
    r'\b(?:virtual office in kerala)\b': '/virtual-office/kerala',
    r'\b(?:virtual office in trivandrum)\b': '/virtual-office/trivandrum',
    r'\b(?:virtual office kozhikode)\b': '/virtual-office/calicut',
    r'\b(?:virtual office in calicut)\b': '/virtual-office/calicut',
    r'\b(?:virtual office calicut)\b': '/virtual-office/calicut',
    r'\b(?:virtual office in coimbatore)\b': '/virtual-office/coimbatore',
    
    r'\b(?:coworking space in kochi)\b': '/coworking-space/kochi',
    r'\b(?:coworking space kochi)\b': '/coworking-space/kochi',
    r'\b(?:coworking space in ernakulam)\b': '/coworking-space/kochi',
    r'\b(?:office space in kochi)\b': '/coworking-space/kochi',
    r'\b(?:office space for rent in kochi)\b': '/coworking-space/kochi',
    
    r'\b(?:coworking space in calicut)\b': '/coworking-space/calicut',
    r'\b(?:coworking space in kozhikode)\b': '/coworking-space/calicut',
    r'\b(?:coworking space kozhikode)\b': '/coworking-space/calicut',
    r'\b(?:office space for rent in calicut)\b': '/coworking-space/calicut',
    
    r'\b(?:coworking space in trivandrum)\b': '/coworking-space/trivandrum',
    r'\b(?:coworking space trivandrum)\b': '/coworking-space/trivandrum',
    r'\b(?:office space in trivandrum)\b': '/coworking-space/trivandrum',
    
    r'\b(?:coworking space in coimbatore)\b': '/coworking-space/coimbatore',
    r'\b(?:coworking space coimbatore)\b': '/coworking-space/coimbatore',
    r'\b(?:office space for rent in coimbatore)\b': '/coworking-space/coimbatore',
}

def is_inside_link(text, match_start, match_end):
    # Very basic check: are there unbalanced '[' or ']' around it?
    # Actually, a simpler way is to just replace only the FIRST occurrence
    # and only if it's not already in a markdown link format.
    pass

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    original_content = content
    links_added = 0
    
    for pattern, url in LINK_MAP.items():
        # Find all occurrences (case-insensitive)
        # But we must ensure it's not already inside [text](url)
        # We can use a regex that matches the text ONLY if it is not preceded by [ and not followed by ]
        
        # Negative lookbehind for [ and negative lookahead for ]
        # Also let's just replace the FIRST occurrence per file to avoid over-linking
        regex = re.compile(r'(?<!\[)(?<!\w)(' + pattern.strip(r'\b') + r')(?!\w)(?!\])', re.IGNORECASE)
        
        # Check if match exists
        if regex.search(content):
            # Replace only the first occurrence
            content = regex.sub(lambda m: f"[{m.group(1)}]({url})", content, count=1)
            links_added += 1
            
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        return links_added
    return 0

if __name__ == '__main__':
    total_links = 0
    files_modified = 0
    for filepath in glob.glob('content/blog/*.mdx') + glob.glob('content/blog/*.md'):
        added = process_file(filepath)
        if added > 0:
            files_modified += 1
            total_links += added
            
    print(f"Added {total_links} internal links across {files_modified} blog posts.")
