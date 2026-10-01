file_path = "src/components/ui/VoDocumentChecklist.tsx"
with open(file_path, "r") as f:
    content = f.read()

old_button = """<button className="flex items-center gap-2 bg-accent text-navy px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors shrink-0">
            <Download className="w-5 h-5" />
            Download PDF Checklist
          </button>"""

new_button = """<a href="https://wa.me/919999999999?text=Hi!%20Please%20send%20me%20the%20PDF%20Document%20Checklist%20for%20Virtual%20Office%20GST%20Registration." target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent text-navy px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors shrink-0">
            <Download className="w-5 h-5" />
            Get Checklist on WhatsApp
          </a>"""

content = content.replace(old_button, new_button)
with open(file_path, "w") as f:
    f.write(content)
