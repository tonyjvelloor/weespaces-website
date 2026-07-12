'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { Search, Tag } from 'lucide-react';
import type { BlogPost } from '@/lib/mdx';

export default function BlogFilter({ initialPosts }: { initialPosts: Omit<BlogPost, 'content'>[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = Array.from(new Set(initialPosts.map(p => p.category))).filter(Boolean);
  const tags = Array.from(new Set(initialPosts.flatMap(p => p.tags || []))).filter(Boolean);

  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div>
      {/* FILTER BAR */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
         <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-grow relative">
               <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
               <input 
                 type="text"
                 placeholder="Search articles, guides, and insights..."
                 className="w-full bg-navy border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
               <button 
                 onClick={() => setSelectedCategory(null)}
                 className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-colors ${!selectedCategory ? 'bg-accent text-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
               >
                 All
               </button>
               {categories.map(category => (
                 <button
                   key={category}
                   onClick={() => setSelectedCategory(category)}
                   className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-colors ${selectedCategory === category ? 'bg-accent text-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
                 >
                   {category}
                 </button>
               ))}
            </div>
         </div>

         {/* TAGS ROW */}
         {tags.length > 0 && (
           <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 overflow-x-auto scrollbar-hide">
             <Tag className="w-4 h-4 text-accent shrink-0" />
             <span className="text-white/50 text-sm font-medium mr-2">Filter by Tags:</span>
             
             <button 
                onClick={() => setSelectedTag(null)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-bold transition-colors ${!selectedTag ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-white/5 text-white/70 border border-white/10 hover:text-white'}`}
              >
                Any
              </button>
             {tags.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-bold transition-colors ${selectedTag === tag ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-white/5 text-white/70 border border-white/10 hover:text-white'}`}
                >
                  {tag}
                </button>
             ))}
           </div>
         )}
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => {
          const categorySlug = (post.category || 'uncategorized').toLowerCase().replace(/ /g, '-');
          return (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <MouseGlowCard className="glass p-8 rounded-3xl h-full flex flex-col border border-white/10 hover:border-accent transition-all relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6 text-xs font-bold uppercase tracking-wider text-white/50">
                    <span className="bg-navy-light px-3 py-1 rounded-full text-accent z-10 relative">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-white/70 leading-relaxed flex-grow mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-white/40 bg-white/5 px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center text-sm font-medium border-t border-white/10 pt-6 mt-auto">
                    <span className="text-white/50">{post.date}</span>
                    <span className="text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Article &rarr;</span>
                  </div>
                </MouseGlowCard>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-white/50">
           No articles found matching your criteria.
        </div>
      )}
    </div>
  );
}
