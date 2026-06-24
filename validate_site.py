import os
import re
import glob

def get_all_tsx_files():
    return glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True)

def check_leadform_props():
    print("Checking LeadForm usages...")
    files = get_all_tsx_files()
    pattern = re.compile(r'<LeadForm\s([^>]*)>')
    
    # We know LeadForm accepts `branch` and `source`.
    allowed_props = ['branch', 'source']
    
    errors = 0
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        matches = pattern.finditer(content)
        for match in matches:
            props_str = match.group(1)
            # basic extraction of prop names
            prop_names = re.findall(r'([a-zA-Z0-9_]+)=', props_str)
            for prop in prop_names:
                if prop not in allowed_props:
                    print(f"Error in {file}: LeadForm has invalid prop '{prop}'")
                    errors += 1
    
    if errors == 0:
        print("✅ LeadForm props look good.")

def check_internal_links():
    print("\nChecking Internal Links...")
    files = get_all_tsx_files()
    
    # valid routes based on src/app structure
    valid_routes = ['/', '/pricing', '/about', '/contact', '/terms', '/privacy-policy', '/investors']
    
    # scan src/app to build list of valid static routes
    for root, dirs, f in os.walk('src/app'):
        route = root.replace('src/app', '')
        if route == '':
            continue
        if '[' not in route: # ignore dynamic routes for static check
            valid_routes.append(route.replace('\\', '/'))

    link_pattern = re.compile(r'href=["\'](/[^"\']+)["\']')
    
    errors = 0
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        links = link_pattern.findall(content)
        for link in links:
            # strip query params or hashes
            base_link = link.split('?')[0].split('#')[0]
            # handle dynamic routes implicitly by relaxing the check or just warning
            
            # Simple check against known valid static routes
            # Also allow /api/... or /images/... or /landing/...
            if base_link.startswith('/api/') or base_link.startswith('/images/') or base_link.startswith('/landing/'):
                continue
                
            if base_link not in valid_routes and base_link + '/' not in valid_routes and base_link != '/services/virtual-office':
                # Special cases
                if base_link.startswith('/locations/'):
                    continue
                print(f"Warning in {file}: Potentially broken internal link '{link}'")
                errors += 1

def check_images():
    print("\nChecking Image paths...")
    files = get_all_tsx_files()
    image_pattern = re.compile(r'src=["\'](/images/[^"\']+)["\']')
    
    errors = 0
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        images = image_pattern.findall(content)
        for img in images:
            # check if file exists in public/images
            if not os.path.exists('public' + img):
                print(f"Error in {file}: Image '{img}' not found in public directory.")
                errors += 1
                
    if errors == 0:
        print("✅ Image paths look good.")

check_leadform_props()
check_internal_links()
check_images()
