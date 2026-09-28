import re

file_path = "src/data/comparisons.ts"

with open(file_path, 'r') as f:
    content = f.read()

new_competitor = """  'incuspaze': {
    slug: 'incuspaze',
    title: 'WeeSpaces vs. Incuspaze',
    description: 'Compare WeeSpaces and Incuspaze. Find out which workspace provider is better for your growing team in South India.',
    metaTitle: 'Incuspaze Alternative in Kerala & Tamil Nadu | WeeSpaces',
    metaDescription: 'Looking for an alternative to Incuspaze? Compare WeeSpaces for better pricing, zero setup fees, and premium South Indian locations.',
    opponentName: 'Incuspaze',
    prosCons: {
      traditional: {
        pros: ['Good presence in Tier 2 cities', 'Custom enterprise build-outs', 'Standardized pan-India design'],
        cons: ['Can have rigid contract terms', 'Slower turnaround for custom requests', 'Pricing is often premium']
      },
      weespaces: {
        pros: ['Deep localized expertise in South India', 'Zero hidden CapEx', 'Highly flexible terms for startups and SMEs'],
        cons: ['Focus strictly on South India']
      }
    },
    points: [
      {
        feature: 'Local Support',
        traditional: { value: 'Centralized', description: 'Support and billing are often handled from a central HQ.' },
        weespaces: { value: 'On-Ground', description: 'Direct access to decision-makers and local community managers.' }
      },
      {
        feature: 'Pricing Structure',
        traditional: { value: 'Corporate Pricing', description: 'Often carries a premium for the brand name.' },
        weespaces: { value: 'Transparent Value', description: 'Zero setup fees, transparent per-seat pricing with no hidden tech costs.' }
      }
    ],
    faqs: [
      { question: 'Why switch from Incuspaze to WeeSpaces?', answer: 'WeeSpaces offers unparalleled localized support in South India, ensuring faster problem resolution, zero hidden CapEx, and incredibly flexible terms designed specifically for agility.' }
    ]
  },
};"""

# Replace the closing "};" with our new competitor and closing brace.
content = content.replace("};", new_competitor)

with open(file_path, 'w') as f:
    f.write(content)
