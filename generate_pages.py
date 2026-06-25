import os
import json

base_dir = "/Users/tonyvelloor/.gemini/antigravity/scratch/weespaces-website/src/app"

pages = [
    {
        "slug": "office-space-kalapatti-coimbatore",
        "title": "Office Space in Kalapatti Coimbatore | WeeSpaces",
        "description": "Find premium office space in Kalapatti, Coimbatore. Near Tidel Park and Airport. Perfect for IT companies and startups.",
        "keywords": ["office space kalapatti coimbatore", "office space for rent kalapatti", "commercial space kalapatti"],
        "canonical": "https://www.weespaces.in/office-space-kalapatti-coimbatore",
        "branch": "coimbatore",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Office Space</span><br />in Kalapatti, Coimbatore",
        "hero_desc": "Discover the ideal office space in Kalapatti, Coimbatore. Located strategically near Tidel Park and the Airport, offering flexible and dedicated workspaces for teams of all sizes.",
        "content_h2": "The Ultimate Guide to Office Space in Kalapatti, Coimbatore",
        "content_p1": "Kalapatti is rapidly emerging as a premier commercial destination in Coimbatore. With its proximity to Tidel Park and the airport, finding an <strong>office space in Kalapatti Coimbatore</strong> gives your business a significant strategic advantage.",
        "content_h3_1": "Why Choose Kalapatti for Your Office?",
        "content_p2": "Choosing an office here means excellent connectivity and access to top talent. Whether you need a private office or a flexible setup, our Kalapatti hub provides modern amenities without the crushing traffic of the city center.",
        "faqs": [
            {"q": "What types of office space are available in Kalapatti?", "a": "We offer hot desks, dedicated desks, and private cabins tailored for teams from 1 to 50+ members."},
            {"q": "Is the Kalapatti office near Tidel Park?", "a": "Yes, our WeeSpaces hub in Kalapatti is just 1.5km from Tidel Park."}
        ]
    },
    {
        "slug": "office-space-for-rent-kochi",
        "title": "Office Space for Rent in Ernakulam, Kochi | WeeSpaces",
        "description": "Premium office space for rent in Ernakulam, Kochi. Fully furnished workspaces, private cabins, and dedicated desks at MG Road.",
        "keywords": ["office space for rent ernakulam", "office space for rent in kochi", "commercial space kochi"],
        "canonical": "https://www.weespaces.in/office-space-for-rent-kochi",
        "branch": "ernakulam",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Office Space for Rent</span><br />in Ernakulam",
        "hero_desc": "Locate your business at the commercial heart of Kerala. We offer fully furnished office space for rent in Ernakulam, right on MG Road.",
        "content_h2": "Premium Office Space for Rent in Ernakulam",
        "content_p1": "Ernakulam is the bustling commercial hub of Kochi. Finding the right <strong>office space for rent in Ernakulam</strong> is crucial for networking and growth. WeeSpaces offers top-tier facilities designed to elevate your business.",
        "content_h3_1": "Flexible Renting Options on MG Road",
        "content_p2": "Instead of traditional leases, our managed office spaces provide a zero-CapEx solution. Enjoy enterprise-grade WiFi, meeting rooms, and 24/7 access in the heart of the city.",
        "faqs": [
            {"q": "How much does office space for rent in Ernakulam cost?", "a": "Our pricing starts at ₹5,000/month for hot desks, with custom quotes for private offices."},
            {"q": "Where is the Ernakulam office located?", "a": "We are located on the 4th floor of Palal Tower, MG Road, Ravipuram."}
        ]
    },
    {
        "slug": "coworking-space-kadavanthra-kochi",
        "title": "Coworking Space Kadavanthra Kochi | WeeSpaces",
        "description": "Best coworking space Kadavanthra Kochi. Just minutes away from MG Road, offering flexible desks, private offices, and meeting rooms.",
        "keywords": ["coworking kadavanthra kochi", "coworking space in kadavanthra", "shared office kadavanthra"],
        "canonical": "https://www.weespaces.in/coworking-space-kadavanthra-kochi",
        "branch": "ernakulam",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Coworking Space</span><br />near Kadavanthra, Kochi",
        "hero_desc": "Looking for a coworking space near Kadavanthra? Our MG Road hub is just minutes away, offering a vibrant community and top-notch amenities.",
        "content_h2": "Your Ideal Coworking Space near Kadavanthra, Kochi",
        "content_p1": "If you are searching for a <strong>coworking space in Kadavanthra, Kochi</strong>, our nearby Ravipuram hub on MG Road is the perfect fit. It offers unparalleled accessibility for professionals living in and around Kadavanthra.",
        "content_h3_1": "Why Work Near Kadavanthra?",
        "content_p2": "Kadavanthra is a premium residential and commercial area. Working just a stone's throw away on MG Road gives you the best of both worlds: a peaceful commute and a prestigious business address.",
        "faqs": [
            {"q": "Is there a WeeSpaces coworking space in Kadavanthra?", "a": "Our Ernakulam hub is located in Ravipuram on MG Road, which is extremely close and convenient for anyone in Kadavanthra."},
            {"q": "What amenities do you offer?", "a": "We provide high-speed WiFi, power backup, meeting rooms, and unlimited coffee/tea."}
        ]
    },
    {
        "slug": "office-space-for-rent-trivandrum",
        "title": "Office Space for Rent in Trivandrum | WeeSpaces",
        "description": "Find the perfect office space for rent in Trivandrum. Located in Pattom near Technopark, ideal for IT companies and startups.",
        "keywords": ["office space for rent trivandrum", "commercial space for rent in trivandrum", "office space trivandrum"],
        "canonical": "https://www.weespaces.in/office-space-for-rent-trivandrum",
        "branch": "trivandrum",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Office Space for Rent</span><br />in Trivandrum",
        "hero_desc": "Set up your business in Kerala's largest IT ecosystem. Flexible, fully managed office space for rent in Trivandrum.",
        "content_h2": "Best Office Space for Rent in Trivandrum",
        "content_p1": "Trivandrum is home to a massive IT corridor. An <strong>office space for rent in Trivandrum</strong> places your business right in the middle of a booming tech ecosystem, adjacent to Technopark.",
        "content_h3_1": "Zero-CapEx Office Solutions",
        "content_p2": "Skip the hassle of traditional renting. Our fully managed office spaces in Pattom provide everything from ergonomic furniture to high-speed internet, allowing you to focus purely on your business.",
        "faqs": [
            {"q": "Where can I find office space for rent in Trivandrum?", "a": "WeeSpaces is located in Relcon Plaza, Pattom, offering premium office rentals for teams of all sizes."},
            {"q": "Do you offer private offices?", "a": "Yes, we offer fully furnished private offices with biometric access starting at custom affordable rates."}
        ]
    },
    {
        "slug": "coworking-space-pattom-trivandrum",
        "title": "Coworking Space Pattom Trivandrum | WeeSpaces",
        "description": "Premium coworking space in Pattom, Trivandrum. Modern shared office near Technopark with hot desks, dedicated desks, and private cabins.",
        "keywords": ["coworking space pattom trivandrum", "coworking space in pattom", "shared office pattom"],
        "canonical": "https://www.weespaces.in/coworking-space-pattom-trivandrum",
        "branch": "trivandrum",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Coworking Space</span><br />in Pattom, Trivandrum",
        "hero_desc": "Join the most dynamic coworking space in Pattom, Trivandrum. Designed for IT professionals, startups, and remote workers.",
        "content_h2": "Experience Coworking Space in Pattom, Trivandrum",
        "content_p1": "Pattom is a major commercial node in the city. Our <strong>coworking space in Pattom Trivandrum</strong> provides an inspiring environment that fuels productivity and networking.",
        "content_h3_1": "The Ultimate Shared Workspace",
        "content_p2": "Whether you need a hot desk for a day or a dedicated desk for months, our Pattom hub offers flexible plans, enterprise-grade WiFi, and a community of like-minded professionals.",
        "faqs": [
            {"q": "How much is a hot desk in Pattom?", "a": "Hot desks at our Pattom, Trivandrum hub start at ₹4,500/month."},
            {"q": "What are the timings for the Pattom coworking space?", "a": "Members get 24/7 access to ensure flexibility for different time zones."}
        ]
    },
    {
        "slug": "office-space-for-rent-calicut",
        "title": "Office Space for Rent in Calicut | WeeSpaces",
        "description": "Discover premium office space for rent in Calicut. Close to Cyberpark, featuring modern amenities, private cabins, and flexible terms.",
        "keywords": ["office space for rent calicut", "commercial office space calicut", "office space in kozhikode"],
        "canonical": "https://www.weespaces.in/office-space-for-rent-calicut",
        "branch": "calicut",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Office Space for Rent</span><br />in Calicut",
        "hero_desc": "Find the perfect office space for rent in Calicut. Situated near Cyberpark, combining cultural richness with modern tech infrastructure.",
        "content_h2": "Your Next Office Space for Rent in Calicut",
        "content_p1": "Calicut is rapidly becoming a destination for tech startups and creative agencies. Finding an <strong>office space for rent in Calicut</strong> that meets modern standards is easy with WeeSpaces.",
        "content_h3_1": "Fully Managed Workspaces",
        "content_p2": "Located in East Nadakkave, our workspaces are fully furnished and managed. Enjoy hassle-free operations without worrying about maintenance, internet downtime, or utility bills.",
        "faqs": [
            {"q": "Where is your office space in Calicut?", "a": "We are located at Neeloth Plaza, East Nadakkave, opposite Malayalam Manorama."},
            {"q": "Can I rent a private cabin?", "a": "Yes, we offer private office cabins tailored for your team starting from ₹16,000/month."}
        ]
    },
    {
        "slug": "coworking-space-kozhikode",
        "title": "Coworking Space Kozhikode | Premium Shared Office | WeeSpaces",
        "description": "Best coworking space in Kozhikode. Flexible hot desks, private offices, and virtual office setup near Cyberpark.",
        "keywords": ["coworking space kozhikode", "coworking kozhikode", "shared workspace kozhikode"],
        "canonical": "https://www.weespaces.in/coworking-space-calicut",
        "branch": "calicut",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Coworking Space</span><br />in Kozhikode",
        "hero_desc": "Experience a vibrant community at the best coworking space in Kozhikode. Perfect for freelancers, startups, and growing teams.",
        "content_h2": "The Premier Coworking Space in Kozhikode",
        "content_p1": "Embrace a new way of working. Our <strong>coworking space in Kozhikode</strong> brings together the city's top creatives and tech professionals in a highly productive environment.",
        "content_h3_1": "Modern Amenities & Community",
        "content_p2": "Enjoy access to high-speed internet, ergonomic seating, and regular networking events. Whether you call it Calicut or Kozhikode, our space is designed to help you succeed.",
        "faqs": [
            {"q": "What is the cost of coworking in Kozhikode?", "a": "Our hot desks start at an affordable ₹4,000/month in Kozhikode."},
            {"q": "Do you provide meeting rooms?", "a": "Yes, our Kozhikode hub features state-of-the-art meeting rooms available for booking."}
        ]
    },
    {
        "slug": "virtual-office-for-gst-registration",
        "title": "Virtual Office for GST Registration India | WeeSpaces",
        "description": "Get a premium virtual office for GST registration in India. Prime business addresses in Kochi, Trivandrum, Calicut, and Coimbatore.",
        "keywords": ["virtual office for GST registration India", "virtual office GST", "virtual address India"],
        "canonical": "https://www.weespaces.in/virtual-office-for-gst-registration",
        "branch": "ernakulam",
        "hero_title": "Premium <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light\">Virtual Office</span><br />for GST Registration in India",
        "hero_desc": "Establish your business presence legally and professionally. Get a prestigious virtual office for GST registration across prime locations in India.",
        "content_h2": "Get Your Virtual Office for GST Registration in India",
        "content_p1": "Starting a business requires a professional address. A <strong>virtual office for GST registration in India</strong> allows you to comply with legal requirements without the massive overhead of physical office space.",
        "content_h3_1": "Why Choose WeeSpaces for Your Virtual Office?",
        "content_p2": "We provide premium business addresses in Ernakulam, Trivandrum, Calicut, and Coimbatore. Our virtual office plans include mail handling, GST registration support, and access to meeting rooms when you need them.",
        "faqs": [
            {"q": "Can I use a virtual office for GST registration?", "a": "Yes! The government allows GST registration using a virtual office address, provided you have the right documentation, which we supply (NOC and rent agreement)."},
            {"q": "How much does a virtual office cost?", "a": "Our virtual office plans start at just ₹10,000/year, offering incredible value for startups and remote businesses."}
        ]
    }
]

template = """import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { branchData } from '@/data/branches';
import NAPBlock from '@/components/NAPBlock';

const data = branchData.__BRANCH__;

export const metadata: Metadata = {
  title: '__TITLE__',
  description: '__DESCRIPTION__',
  keywords: __KEYWORDS__,
  alternates: {
    canonical: '__CANONICAL__',
  },
  openGraph: {
    title: '__TITLE__',
    description: '__DESCRIPTION__',
    url: 'https://www.weespaces.in/__SLUG__',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: '__TITLE__',
      },
    ],
  },
};

const faqs = __FAQS__;

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '__TITLE__',
  image: 'https://www.weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: data.address.split(',')[0],
    addressLocality: data.name,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '₹4,000 - ₹22,000',
  url: 'https://www.weespaces.in/__SLUG__',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- INAUGURATION OFFER BANNER --- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-accent-light to-accent text-navy text-center py-2.5 px-4 text-sm font-bold shadow-[0_4px_20px_rgba(242,156,31,0.4)]">
        🎉 Inauguration Offer Now Live! <span className="hidden sm:inline">Get 20% off on all plans.</span>
        <Link href={`/contact?branch=${data.name.toLowerCase()}`} className="ml-2 underline underline-offset-2 hover:text-navy/70 transition-colors">Claim Now →</Link>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="__TITLE__" fill sizes="100vw" className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              {data.name}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight" dangerouslySetInnerHTML={{__html: `__HERO_TITLE__`}}></h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                __HERO_DESC__
              </p>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch={data.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* --- NAP BLOCK + PRICING --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <NAPBlock
            name={`WeeSpaces ${data.name}`}
            address={data.address}
            mapUrl={data.mapUrl}
            hours="Mon–Sat: 8:00 AM – 8:00 PM | 24/7 access for members"
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15} className="mt-8">
          <div className="bg-navy-light/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Pricing Plans in {data.name}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Hot Desk', price: data.pricing.hotDesk, note: 'Flexible seating' },
                { label: 'Dedicated Desk', price: data.pricing.dedicatedDesk, note: 'Your own fixed desk' },
                { label: 'Private Office', price: data.pricing.privateOffice, note: 'Enclosed cabin' },
                { label: 'Virtual Office', price: data.pricing.virtualOffice, note: 'Premium address' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center border border-white/10 hover:border-accent/30 transition-all">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-accent">{item.price.split('/')[0]}</p>
                  <p className="text-[11px] text-white/40 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- SEO DEEP DIVE SECTION --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">__CONTENT_H2__</h2>
          <p dangerouslySetInnerHTML={{__html: `__CONTENT_P1__`}}></p>

          <h3 className="text-2xl font-bold mt-12 mb-4">__CONTENT_H3_1__</h3>
          <p dangerouslySetInnerHTML={{__html: `__CONTENT_P2__`}}></p>
        </ScrollReveal>
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">{data.name}</span> Hub</h2>
          <p className="text-xl text-white/70">Take a peek inside our premium workspace.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.galleryImages.length > 0 && (
            <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96 md:col-span-2 group">
              <Image src={data.galleryImages[0]} alt={`WeeSpaces ${data.name} workspace featured`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          )}
          {data.galleryImages.slice(1).map((src, idx) => (
            <ScrollReveal key={idx + 1} direction="up" delay={0.2 + (idx * 0.1)} className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 group">
              <Image src={src} alt={`WeeSpaces ${data.name} workspace ${idx + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <details className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group">
                <summary className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg cursor-pointer list-none">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-white/50 group-open:rotate-90 group-open:text-accent transition-transform duration-300 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
"""

for page in pages:
    dir_path = os.path.join(base_dir, page["slug"])
    os.makedirs(dir_path, exist_ok=True)
    file_path = os.path.join(dir_path, "page.tsx")
    
    # Format faqs properly
    faqs_str = "[\n"
    for faq in page["faqs"]:
        q = faq['q'].replace("'", "\\'")
        a = faq['a'].replace("'", "\\'")
        faqs_str += f"  {{ question: '{q}', answer: '{a}' }},\n"
    faqs_str += "]"
    
    content = template
    content = content.replace("__TITLE__", page["title"].replace("'", "\\'"))
    content = content.replace("__DESCRIPTION__", page["description"].replace("'", "\\'"))
    content = content.replace("__KEYWORDS__", json.dumps(page["keywords"]))
    content = content.replace("__CANONICAL__", page["canonical"])
    content = content.replace("__SLUG__", page["slug"])
    content = content.replace("__BRANCH__", page["branch"])
    content = content.replace("__HERO_TITLE__", page["hero_title"].replace("'", "\\'"))
    content = content.replace("__HERO_DESC__", page["hero_desc"].replace("'", "\\'"))
    content = content.replace("__CONTENT_H2__", page["content_h2"].replace("'", "\\'"))
    content = content.replace("__CONTENT_P1__", page["content_p1"].replace("'", "\\'"))
    content = content.replace("__CONTENT_H3_1__", page["content_h3_1"].replace("'", "\\'"))
    content = content.replace("__CONTENT_P2__", page["content_p2"].replace("'", "\\'"))
    content = content.replace("__FAQS__", faqs_str)
    
    with open(file_path, "w") as f:
        f.write(content)

print("All pages generated successfully.")
