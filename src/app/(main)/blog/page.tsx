import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';

export const metadata = {
  title: 'Blog & Insights | WeeSpaces',
  description: 'Insights on the Future of Work, Startup ecosystems, and Workspace trends in Kerala and Tamil Nadu.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workspace Insights & News</h1>
          <p className="text-white/70 text-lg">
            Stay updated with the latest trends in the coworking industry, startup ecosystems, and business strategies in South India.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => {
            const categorySlug = post.category.toLowerCase().replace(/ /g, '-');
            return (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <MouseGlowCard className="glass p-8 rounded-3xl h-full flex flex-col border border-white/10 hover:border-accent transition-all">
                    <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-wider text-white/50">
                      <Link href={`/blog/category/${categorySlug}`} className="bg-navy-light px-3 py-1 rounded-full text-accent hover:bg-accent hover:text-navy transition-colors z-10 relative">
                        {post.category}
                      </Link>
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
          );
          })}
        </div>
      </div>
    </div>
  );
}
