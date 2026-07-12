import { getAllPosts } from '@/lib/mdx';
import ScrollReveal from '@/components/ui/ScrollReveal';
import BlogFilter from '@/components/BlogFilter';

export const metadata = {
  title: 'Blog & Insights | WeeSpaces',
  description: 'Insights on the Future of Work, Startup ecosystems, and Workspace trends in Kerala and Tamil Nadu.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-32 min-h-screen bg-navy text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workspace Insights & News</h1>
          <p className="text-white/70 text-lg">
            Strategic guides, compliance updates, and startup ecosystem trends across South India.
          </p>
        </ScrollReveal>

        <BlogFilter initialPosts={posts} />
      </div>
    </div>
  );
}
