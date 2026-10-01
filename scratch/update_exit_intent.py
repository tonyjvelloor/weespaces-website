file_path = "src/components/VOExitIntentPopup.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re

# Add email state
content = content.replace("const [phone, setPhone] = useState('');", "const [phone, setPhone] = useState('');\n  const [email, setEmail] = useState('');")

# Update API payload
payload_old = """body: JSON.stringify({
          name: 'VO Exit Intent Lead',
          phone: phone,
          email: 'no-email@exitintent.com',"""
payload_new = """body: JSON.stringify({
          name: 'VO Exit Intent Lead',
          phone: phone,
          email: email,"""
content = content.replace(payload_old, payload_new)

# Update Form fields
form_old = """              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative text-left">
                  <input 
                    type="tel" 
                    id="exit-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="exit-phone" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">
                    Phone Number
                  </label>
                </div>"""

form_new = """              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative text-left">
                  <input 
                    type="email" 
                    id="exit-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
                    placeholder="Enter Email Address"
                  />
                  <label htmlFor="exit-email" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">
                    Email Address
                  </label>
                </div>

                <div className="relative text-left">
                  <input 
                    type="tel" 
                    id="exit-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="exit-phone" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">
                    Phone Number
                  </label>
                </div>"""

content = content.replace(form_old, form_new)

with open(file_path, "w") as f:
    f.write(content)
