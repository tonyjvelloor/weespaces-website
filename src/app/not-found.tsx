import Link from 'next/link';
import { constructMetadata } from '@/utils/metadata';
import { MapPin, Building, Search, Home } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = constructMetadata({
  title: 'Page Not Found | WeeSpaces',
  description: 'The page you are looking for does not exist or has been moved.',
  canonicalPath: '/404',
  noIndex: true
});

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-2xl w-full text-center">
        <ScrollReveal>
          <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-2xl font-bold text-navy mb-6">Oops! We couldn't find that page.</h2>
          <p className="text-gray-600 mb-12 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            If you followed an old link, we apologize for the inconvenience!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Link href="/" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all group">
              <Home className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-navy mb-2 group-hover:text-accent transition-colors">Return Home</h3>
              <p className="text-sm text-gray-500">Go back to our homepage to explore WeeSpaces.</p>
            </Link>
            
            <Link href="/locations" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all group">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-navy mb-2 group-hover:text-accent transition-colors">Find a Workspace</h3>
              <p className="text-sm text-gray-500">Browse our premium locations across South India.</p>
            </Link>

            <Link href="/virtual-office" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all group md:col-span-2">
              <Building className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-navy mb-2 group-hover:text-accent transition-colors">Virtual Office for GST</h3>
              <p className="text-sm text-gray-500">Need a compliant business address without the physical space? Get your NOC and Rent Agreement in 24 hours.</p>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
