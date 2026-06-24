import os
import re

directory = '/Users/tonyvelloor/.gemini/antigravity/scratch/weespaces-website/src'
url_pattern = re.compile(r'https?://[^\s\'"<>]+')
links = set()

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = url_pattern.findall(content)
                for match in matches:
                    links.add(match)

for link in sorted(links):
    print(link)
