import re

file_path = "src/components/ExitIntentPopup.tsx"

with open(file_path, "r") as f:
    content = f.read()

target = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real app, send to API. For now, simulate success.
    setSubmitted(true);
    
    // Simulate pixel event for Lead Magnet"""

replacement = """  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: 'Exit Intent Lead',
          source: 'Exit Intent Popup',
          leadMagnet: 'pricing_guide'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Fallback success to not block user experience
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
    
    // Fire pixel event for Lead Magnet"""

content = content.replace(target, replacement)

# Let's also make sure the button has disabled state when submitting
btn_target = """                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent/30"
                >
                  Send Me The Guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>"""

btn_replacement = """                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent/30 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Me The Guide'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>"""

content = content.replace(btn_target, btn_replacement)

with open(file_path, "w") as f:
    f.write(content)

print("ExitIntentPopup patched")
