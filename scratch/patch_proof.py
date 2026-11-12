file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

proof_strip = """
        {/* Proof Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-accent mb-1">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-white font-bold">4.5+ on Google</p>
            <p className="text-white/50 text-sm">Across our partner network</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-black text-white mb-1">500+</h4>
            <p className="text-white/70 font-medium">GST Registrations</p>
            <p className="text-white/50 text-sm">Filed successfully</p>
          </div>
        </div>
"""

import re
content = re.sub(r'<div className="flex items-center gap-4 mt-8">.*?</div>', proof_strip, content, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(content)
