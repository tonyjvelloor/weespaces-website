import re

with open('src/app/page.tsx', 'r') as f:
    text = f.read()

# simple check for unmatched fragments
if text.count('<>') != text.count('</>'):
    print("Unmatched fragments")
if text.count('<section') != text.count('</section>'):
    print("Unmatched section", text.count('<section'), text.count('</section>'))
if text.count('<div') != text.count('</div>'):
    print("Unmatched div", text.count('<div'), text.count('</div>'))
print("Done")
