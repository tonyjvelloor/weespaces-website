export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or plain HTML
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'guide-to-registering-company-kerala',
    title: 'The Ultimate Guide to Registering a Company in Kerala (2026)',
    excerpt: 'Step-by-step instructions on navigating the MCA portal, GST registration, and finding a virtual office in Kochi or Trivandrum.',
    date: 'June 1, 2026',
    readTime: '6 min read',
    category: 'Startups',
    content: `
<h2>Why Kerala is the New Startup Hub</h2>
<p>Kerala has rapidly transformed into one of India's most vibrant startup ecosystems. With the Kerala Startup Mission (KSUM) providing massive grants and infrastructural support, registering a company here has never been more lucrative.</p>

<h2>Step 1: Digital Signature Certificate (DSC)</h2>
<p>Before you can register your company with the Ministry of Corporate Affairs (MCA), the proposed directors must obtain a Class 3 Digital Signature Certificate.</p>

<h2>Step 2: Name Approval (RUN)</h2>
<p>Use the Reserve Unique Name (RUN) web service on the MCA portal. Choose a name that is unique and reflects your brand.</p>

<h2>Step 3: The Virtual Office Advantage</h2>
<p>When registering a company, you need a physical address for GST and official communication. Instead of signing a heavy 3-year commercial lease, modern startups use <strong>Virtual Offices</strong>. <br/><br/>
A Virtual Office provides you with a premium address (like MG Road, Ernakulam or Pattom, Trivandrum) without the overhead. You get mail handling and GST registration proof instantly.</p>

<h2>Step 4: Incorporation Documents</h2>
<p>Draft the Memorandum of Association (MoA) and Articles of Association (AoA) with your company secretary.</p>

<h2>Conclusion</h2>
<p>Registering your company in Kerala is streamlined if you follow the right steps. Need a premium address for your new registration? Check out WeeSpaces Virtual Office plans!</p>
    `
  },
  {
    slug: 'top-5-it-parks-coimbatore',
    title: 'Top 5 IT Parks for Startups in Coimbatore',
    excerpt: 'Discover the best IT hubs in the Manchester of South India, and why Kalapatti is becoming the new epicenter of growth.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    category: 'Ecosystem',
    content: `
<h2>The Rise of Coimbatore's Tech Scene</h2>
<p>Coimbatore is no longer just the textile capital; it is a booming IT destination. Lower operational costs and incredible talent pools are driving companies away from Bangalore and into Coimbatore.</p>

<h3>1. Tidel Park</h3>
<p>The crown jewel of Coimbatore's IT infrastructure, housing major MNCs and providing world-class amenities.</p>

<h3>2. KCT Tech Park</h3>
<p>Located near Saravanampatti, this park is known for its academic integrations and vibrant student-startup crossover.</p>

<h3>3. CHIL SEZ (Keeranatham)</h3>
<p>A massive Special Economic Zone offering incredible tax benefits for export-oriented IT businesses.</p>

<h3>4. Kalapatti / Civil Aerodrome Area</h3>
<p>This is the fastest-growing micro-market in Coimbatore. Just minutes from the airport and Tidel Park, Kalapatti is becoming the preferred destination for agile startups and hybrid teams. <br/><br/>
<em>Looking to set up your team in Kalapatti? Our newly launched WeeSpaces Coimbatore hub is located right here!</em></p>

<h3>5. Rathinam Technopark</h3>
<p>Ideal for medium-scale enterprises with excellent plug-and-play facilities.</p>
    `
  },
  {
    slug: 'benefits-of-coworking-for-remote-teams',
    title: 'Why Remote Teams are Shifting to Premium Coworking Spaces',
    excerpt: 'Work-from-home fatigue is real. Here is why hybrid teams are utilizing coworking passes to boost productivity and mental health.',
    date: 'May 15, 2026',
    readTime: '4 min read',
    category: 'Future of Work',
    content: `
<h2>The End of "Work From Couch"</h2>
<p>While the pandemic proved we can work from anywhere, the long-term effects of working from a living room are showing. Burnout, lack of boundary between work and home, and isolation are major issues.</p>

<h2>1. Professional Environment</h2>
<p>A premium coworking space offers ergonomic chairs, high-speed Wi-Fi, and a distraction-free zone. When you step into the office, your brain knows it's time to work.</p>

<h2>2. Networking and Community</h2>
<p>Serendipitous encounters by the coffee machine lead to new clients, partnerships, and ideas. You can't get that on a Zoom call.</p>

<h2>3. Flexibility</h2>
<p>With options like Hot Desks and Day Passes, teams don't need to commit to massive leases. You only pay for what you use.</p>

<h2>4. Meeting Clients</h2>
<p>Inviting a major client to a noisy cafe is unprofessional. Booking a state-of-the-art conference room in a premium coworking space instantly elevates your brand image.</p>
    `
  },
  {
    slug: 'calicut-design-freelance-community',
    title: 'Inside Calicut’s Thriving Design and Freelance Community',
    excerpt: 'How Kozhikode is quietly becoming the creative capital of Kerala with a booming community of designers and developers.',
    date: 'May 10, 2026',
    readTime: '4 min read',
    category: 'Community',
    content: `
<h2>The Creative Capital</h2>
<p>Calicut has always been a city of culture, food, and art. Today, that heritage is bleeding into the digital realm.</p>

<h2>The Cyberpark Ripple Effect</h2>
<p>With the growth of Cyberpark and UL Cyberpark, the ecosystem has expanded. But unlike Trivandrum or Kochi which are heavily enterprise-focused, Calicut has a massive, highly-skilled freelance and agency community.</p>

<h2>Collaboration Over Competition</h2>
<p>Walk into any premium coworking space in Calicut (like our hub near Cyberpark), and you'll see UI/UX designers collaborating with independent app developers to launch products on ProductHunt.</p>

<h2>Why Freelancers Love Managed Workspaces</h2>
<p>Freelancers need high-speed internet, unlimited coffee, and most importantly, a community to bounce ideas off. Coworking spaces provide the perfect blend of independence and community.</p>
    `
  }
];
