import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => (post.category || 'uncategorized').toLowerCase().replace(/ /g, '-'))));
  return categories.map((category) => ({
    category,
  }));
}

import { constructMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const posts = getAllPosts();
  const categoryPosts = posts.filter(post => (post.category || 'uncategorized').toLowerCase().replace(/ /g, '-') === resolvedParams.category);
  
  if (categoryPosts.length === 0) {
    return { title: 'Category Not Found | WeeSpaces' };
  }

  const categoryName = categoryPosts[0].category || 'Uncategorized';

  return constructMetadata({
    title: `${categoryName} | WeeSpaces Blog`,
    description: `Read the latest articles about ${categoryName} from WeeSpaces.`,
    canonicalPath: `/blog/category/${resolvedParams.category}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const posts = getAllPosts();
  const categoryPosts = posts.filter(post => (post.category || 'uncategorized').toLowerCase().replace(/ /g, '-') === resolvedParams.category);

  if (categoryPosts.length === 0) {
    notFound();
  }

  const categoryName = categoryPosts[0].category || 'Uncategorized';

  return (
    <div className="pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 font-medium">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to all articles
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryName}</h1>
          <p className="text-white/70 text-lg">
            Articles and insights related to {categoryName}.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <MouseGlowCard className="glass p-8 rounded-3xl h-full flex flex-col border border-white/10 hover:border-accent transition-all">
                  <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-wider text-white/50">
                    <span className="bg-navy-light px-3 py-1 rounded-full text-accent">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-white/70 leading-relaxed flex-grow mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm font-medium border-t border-white/10 pt-6 mt-auto">
                    <span className="text-white/50">{post.date}</span>
                    <span className="text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                  </div>
                </MouseGlowCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
