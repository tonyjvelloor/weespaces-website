import Image from 'next/image';

const heroImages = [
  { src: '/images/branches/trivandrum/image1.jpg', alt: 'Premium coworking space in Trivandrum - WeeSpaces' },
  { src: '/images/branches/kochi/workspace1.jpg', alt: 'Private office space in Kochi for startups' },
  { src: '/images/branches/calicut/workspace1.jpg', alt: 'Shared office space in Calicut' },
  { src: '/images/branches/trivandrum/image3.jpg', alt: 'Managed workspace near IT Hub Trivandrum' }
];

export default function HeroCarousel() {
  // Using the first image statically to improve Largest Contentful Paint (LCP).
  // This ensures the image is included in the initial server-rendered HTML 
  // and picked up by the browser's preload scanner immediately.

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy-dark">
      <div className="absolute inset-0">
        <Image 
          src={heroImages[0].src} 
          alt={heroImages[0].alt} 
          fill 
          sizes="100vw" 
          className="object-cover object-center opacity-40" 
          priority={true}
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy-dark/90 mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
    </div>
  );
}
