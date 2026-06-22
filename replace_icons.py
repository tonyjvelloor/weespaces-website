import re

def update_footer():
    with open('src/components/Footer.tsx', 'r') as f:
        content = f.read()
    
    # Add imports
    if 'import { MapPin, Clock, Phone, Mail, Handshake } from \'lucide-react\';' not in content:
        content = content.replace("import { usePathname } from 'next/navigation';", "import { usePathname } from 'next/navigation';\nimport { MapPin, Clock, Phone, Mail, Handshake } from 'lucide-react';")

    # Replace specific icons
    content = content.replace('<span className="material-symbols-outlined text-accent text-[32px]">location_on</span>', '<MapPin className="text-accent w-8 h-8" />')
    content = content.replace('<span className="material-symbols-outlined text-[16px]">schedule</span>', '<Clock className="w-4 h-4" />')
    content = content.replace('<span className="material-symbols-outlined text-accent text-[20px]">call</span>', '<Phone className="text-accent w-5 h-5" />')
    content = content.replace('<span className="material-symbols-outlined text-accent text-[20px]">mail</span>', '<Mail className="text-accent w-5 h-5" />')
    content = content.replace('<span className="material-symbols-outlined text-accent text-[20px]">handshake</span>', '<Handshake className="text-accent w-5 h-5" />')
    
    with open('src/components/Footer.tsx', 'w') as f:
        f.write(content)

def update_header():
    with open('src/components/Header.tsx', 'r') as f:
        content = f.read()

    # Add imports
    if 'import { ChevronDown, ArrowRight, Menu } from \'lucide-react\';' not in content:
        content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { ChevronDown, ArrowRight, Menu } from 'lucide-react';")

    # Replace specific icons
    content = content.replace('<span className="material-symbols-outlined text-[16px]">expand_more</span>', '<ChevronDown className="w-4 h-4" />')
    content = content.replace('<span className="material-symbols-outlined text-[16px]">arrow_forward</span>', '<ArrowRight className="w-4 h-4" />')
    content = content.replace('<span className="material-symbols-outlined text-3xl">', '<Menu className="w-8 h-8" />')
    content = content.replace('menu\n          </span>', '')
    
    with open('src/components/Header.tsx', 'w') as f:
        f.write(content)

update_footer()
update_header()
print("Done replacing icons")
