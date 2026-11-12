file_path = "src/app/(campaigns)/landing/vo-offer-8999/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

import re

# Find the existing voFaqs array and replace it
new_faqs = """const voFaqs = [
  {
    question: "Is GST included, and what's the renewal price?",
    answer: "The ₹8,999 pricing is exclusive of 18% GST (Total ₹10,619). The plan is valid for 12 months. Upon expiry, it renews at the prevailing market rates at that time."
  },
  {
    question: "What happens when the GST officer visits for physical verification?",
    answer: "Our staffed WeeSpaces centre manager will be on-site to meet the GST officer. We provide them with your company's name board, your NOC, and verify that you are a registered virtual tenant at our premium commercial address."
  },
  {
    question: "What if my GST application is rejected?",
    answer: "While rejections are rare with our compliant documentation, if your application is rejected specifically due to the address, our support team will assist you in rectifying the specific queries raised by the GST department."
  },
  {
    question: "Can I use this address for Amazon or Flipkart seller registration?",
    answer: "Yes. Our virtual office address can be used as your Additional Place of Business (APOB) or Principal Place of Business (PPOB) for all e-commerce marketplace registrations."
  },
  {
    question: "How long until I get my GSTIN?",
    answer: "We provide your required documents (NOC, Rent Agreement, Utility Bill) within 48 hours. However, the issuance of the GSTIN itself depends entirely on the GST department's processing times, which typically takes 7-14 working days after you file."
  },
  {
    question: "How is my mail and courier forwarded?",
    answer: "Our reception team collects and securely stores any mail or packages arriving for your company. You can pick them up during business hours, or we can forward them to your home address on request."
  },
  {
    question: "Can I book meeting rooms or upgrade to a physical desk later?",
    answer: "Absolutely. As a WeeSpaces virtual office client, you can book meeting rooms by the hour at discounted rates, or seamlessly upgrade to a dedicated desk or private cabin when your team grows."
  }
];"""

content = re.sub(r'const voFaqs = \[.*?\];', new_faqs, content, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(content)
