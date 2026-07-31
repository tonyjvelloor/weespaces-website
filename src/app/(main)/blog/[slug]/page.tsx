import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import HowToSchema from '@/components/HowToSchema';
import OfficeCalculator from '@/components/OfficeCalculator';
import AnswerBlock from '@/components/AnswerBlock';
import { ArrowRight, Building2, MapPin } from 'lucide-react';

const components = {
  LeadForm,
  Image,
  HowToSchema,
  AnswerBlock,
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

import { constructMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found | WeeSpaces' };
  }

  return constructMetadata({
    title: `${post.title} | WeeSpaces Blog`,
    description: post.excerpt,
    canonicalPath: `/blog/${resolvedParams.slug}`,
    ogType: 'article',
  });
}

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

  // Get related articles
  const allPosts = getAllPosts();
  const relatedArticles = allPosts
    .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags?.some(tag => post.tags?.includes(tag))))
    .slice(0, 2);

  // If not enough related by category/tags, just grab recent ones
  if (relatedArticles.length < 2) {
    const additional = allPosts.filter(p => p.slug !== post.slug && !relatedArticles.find(r => r.slug === p.slug));
    relatedArticles.push(...additional.slice(0, 2 - relatedArticles.length));
  }

  // Determine Related Workspace Link
  const categoryLower = post.category?.toLowerCase() || '';
  let workspaceLink = '/coworking-space';
  let workspaceName = 'Coworking Spaces';
  
  if (categoryLower.includes('virtual')) {
    workspaceLink = '/virtual-office';
    workspaceName = 'Virtual Offices';
  } else if (categoryLower.includes('managed') || categoryLower.includes('enterprise')) {
    workspaceLink = '/managed-office';
    workspaceName = 'Managed Offices';
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://weespaces.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://weespaces.in/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://weespaces.in/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="pt-24 pb-32 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header (Introduction) */}
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
            className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-accent [&>h2]:mb-4 [&>h2]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-3 [&>h3]:mt-8 [&>p]:text-white/80 [&>p]:leading-relaxed [&>p]:mb-6 [&>strong]:text-white [&>em]:text-white/60 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-white/80 [&>ul>li]:mb-2"
          >
            <MDXRemote source={post.content} components={components} />
          </div>
        </ScrollReveal>
        
        {/* Related Workspace */}
        <ScrollReveal direction="up" className="mt-16 pt-12 border-t border-white/10">
          <div className="bg-gradient-to-br from-navy-light to-navy border border-accent/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Building2 className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider text-sm">Workspace Solutions</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Explore Premium {workspaceName}</h3>
              <p className="text-white/70 max-w-md">Find the perfect workspace tailored to your business needs across Kochi, Trivandrum, Coimbatore, and Calicut.</p>
            </div>
            <Link href={workspaceLink} className="relative z-10 shrink-0 bg-accent text-navy px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-navy transition-all flex items-center gap-2">
              View {workspaceName} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Calculator */}
        <ScrollReveal direction="up" className="mt-16">
          <OfficeCalculator />
        </ScrollReveal>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <ScrollReveal direction="up" className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relPost) => (
                <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="block group">
                  <div className="bg-navy-light border border-white/10 rounded-2xl p-6 h-full transition-all group-hover:border-accent/50 group-hover:-translate-y-1">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-3 block">{relPost.category}</span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{relPost.title}</h4>
                    <p className="text-white/60 text-sm line-clamp-3">{relPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        )}
        
        {/* Contact (Lead Form) */}
        <ScrollReveal direction="up" className="mt-16 pt-16 border-t border-white/10">
          <div className="bg-navy-light/40 border border-accent/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
             <h3 className="text-3xl font-bold mb-4 relative z-10">Get in Touch</h3>
             <p className="text-white/70 mb-8 relative z-10 max-w-xl mx-auto">
               Have questions or want to check availability? Drop your details below and our team will get back to you shortly.
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
