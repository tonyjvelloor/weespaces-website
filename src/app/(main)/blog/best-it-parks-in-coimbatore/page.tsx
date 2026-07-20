import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: "Best IT Parks in Coimbatore | Tidel Park, CHIL SEZ & More | WeeSpaces",
  description: "A comprehensive guide to Coimbatore's top IT parks including Tidel Park, CHIL SEZ Saravanampatti, and KCT Tech Park. Find the best workspace for your team.",
  canonicalPath: "/blog/best-it-parks-in-coimbatore",
});

export default function BestITParksCoimbatorePage() {
  const parks = [
    {
      name: "Tidel Park Coimbatore",
      location: "Avinashi Road, Peelamedu",
      desc: "The largest and most iconic IT park in Coimbatore. Spanning over 1.7 million sq ft, it houses giants like TCS, Wipro, and Cognizant. It's perfectly situated on the arterial Avinashi Road, just minutes from the airport.",
      highlights: ["1.7 Million Sq Ft", "Near Airport", "Premium Infrastructure"]
    },
    {
      name: "CHIL SEZ IT Park",
      location: "Saravanampatti",
      desc: "Saravanampatti is rapidly emerging as the Silicon Valley of Coimbatore, and CHIL SEZ is its crown jewel. Spread across 250 acres, it's home to Bosch, Cognizant, and KGISL.",
      highlights: ["250 Acres", "SEZ Benefits", "Startup Ecosystem"]
    },
    {
      name: "KCT Tech Park",
      location: "Saravanampatti",
      desc: "Located within the Kumaraguru College of Technology campus, this park bridges the gap between industry and academia, making it ideal for R&D centers and tech startups looking for fresh talent.",
      highlights: ["Academic Proximity", "R&D Focus", "Vibrant Talent Pool"]
    },
    {
      name: "Hanudev Info Park",
      location: "Nava India, Avinashi Road",
      desc: "A premium IT facility offering state-of-the-art infrastructure. It provides excellent connectivity to the central business district and residential areas.",
      highlights: ["Central Location", "Modern Amenities", "Excellent Connectivity"]
    }
  ];

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm font-bold tracking-wider mb-8">
          <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-accent transition-colors">BLOG</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="uppercase text-navy">BEST IT PARKS IN COIMBATORE</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
          The Best IT Parks in Coimbatore: Where to Base Your Tech Team
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span>Updated July 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image src="/images/branches/coimbatore/workspace1.jpg" alt="Coimbatore IT Parks" fill className="object-cover" />
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-navy max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Coimbatore is no longer just the Manchester of South India. Over the last decade, it has quietly transformed into a powerhouse for software development, IT services, and SaaS startups. A major driver of this growth is the city's impressive network of IT parks.
          </p>

          <p>
            Whether you are an established enterprise looking to set up a Global Capability Center (GCC) or a scaling startup, choosing the right micro-location in Coimbatore is critical for talent acquisition and operational efficiency. Let's explore the top IT parks in the city.
          </p>

          <div className="space-y-12 mt-12">
            {parks.map((park, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-navy mb-2 mt-0">{park.name}</h2>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{park.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{park.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {park.highlights.map((highlight, i) => (
                      <span key={i} className="bg-white text-navy text-xs font-bold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-navy mt-16 mb-4">The Smart Alternative: WeeSpaces in Kalapatti</h3>
          <p>
            While setting up an office directly inside these IT parks is an option for massive enterprises, it often comes with rigid 3-5 year lock-in periods, massive upfront CapEx, and complex facility management overhead.
          </p>
          <p>
            For agile teams, <strong>WeeSpaces</strong> offers a highly strategic alternative. Located in Kalapatti, our premium workspace sits perfectly between the Avinashi Road IT corridor (Tidel Park) and the Saravanampatti IT corridor (CHIL SEZ).
          </p>
          <ul>
            <li><strong>Zero CapEx:</strong> Fully furnished, enterprise-grade workspaces.</li>
            <li><strong>Strategic Location:</strong> 15 minutes from Saravanampatti, 10 minutes from Tidel Park, and 10 minutes from the Airport.</li>
            <li><strong>Avoid Traffic:</strong> Escape the severe peak-hour congestion of the main IT park arteries.</li>
          </ul>

          <div className="bg-navy text-white p-8 rounded-2xl mt-12 text-center">
            <h4 className="text-2xl font-bold mb-4 text-white">Looking for Workspace in Coimbatore?</h4>
            <p className="text-white/80 mb-6">Explore our premium coworking, private office, and custom managed office solutions.</p>
            <Link href="/coworking-space/coimbatore" className="inline-block bg-accent text-navy px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
              View Coimbatore Workspaces
            </Link>
          </div>
        </article>

      </div>
    </div>
  );
}
