import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found | WeeSpaces' };
  }

  return {
    title: `${post.title} | WeeSpaces Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${post.title} | WeeSpaces Blog`,
      description: post.excerpt,
      url: `/blog/${resolvedParams.slug}`,
      type: 'article',
    },
  };
}

/**
 * Convert a human-readable date like "June 18, 2026" to ISO format "2026-06-18".
 */
function toISODate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return <div className="pt-32 text-center text-white">Article not found.</div>;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: toISODate(post.date),
    author: {
      '@type': 'Organization',
      name: 'WeeSpaces',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WeeSpaces',
      url: 'https://weespaces.in',
    },
  };

  return (
    <article className="pt-24 pb-32 min-h-screen">
      {/* Article JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <header className="container mx-auto px-6 max-w-4xl mb-16 pt-12">
        <ScrollReveal direction="up" className="text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-medium">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Blog
          </Link>
          <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/50 mb-6">
            <span className="bg-navy-light px-3 py-1 rounded-full text-accent">{post.category}</span>
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">{post.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">{post.excerpt}</p>
        </ScrollReveal>
      </header>

      {/* Article Content */}
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal direction="up" delay={0.2}>
          <div 
            className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-accent [&>h2]:mb-4 [&>h2]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-3 [&>h3]:mt-8 [&>p]:text-white/80 [&>p]:leading-relaxed [&>p]:mb-6 [&>strong]:text-white [&>em]:text-white/60"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </ScrollReveal>
        
        {/* Article Footer / CTA */}
        <ScrollReveal direction="up" className="mt-20 pt-16 border-t border-white/10">
          <div className="bg-navy-light/40 border border-accent/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
             <h3 className="text-3xl font-bold mb-4 relative z-10">Looking for a Workspace?</h3>
             <p className="text-white/70 mb-8 relative z-10 max-w-xl mx-auto">
               Whether you are an individual freelancer or a growing startup, WeeSpaces offers premium environments designed for productivity.
             </p>
             <div className="max-w-md mx-auto relative z-10 text-left">
               <LeadForm branch={`Blog Reader - ${post.slug}`} />
             </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
