file_path = "src/components/ConsentBanner.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re

old_banner = r'<div className="max-w-4xl.*?</div>'
new_banner = """<div className="max-w-3xl mx-auto bg-navy/95 backdrop-blur-md text-white rounded-xl shadow-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto relative overflow-hidden">
        <div className="flex-grow pr-8 relative z-10">
          <p className="text-white/80 text-xs leading-tight">
            <strong>Privacy Policy:</strong> We use cookies to ensure you get the best experience. By continuing, you agree to our use of cookies.
          </p>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto relative z-10 mt-2 sm:mt-0">
          <button 
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-3 py-1.5 text-xs font-bold text-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-1.5 bg-accent text-navy rounded-lg text-xs font-bold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Accept All
          </button>
        </div>

        <button 
          onClick={handleDecline}
          className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>"""

content = re.sub(r'<div className="max-w-4xl.*?</div>\n    </div>', new_banner + '\n    </div>', content, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(content)
