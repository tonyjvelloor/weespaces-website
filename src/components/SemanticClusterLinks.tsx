import Link from 'next/link';
import { Network, FileText, BarChart, BookOpen, ArrowRight, Book, ArrowUpRight } from 'lucide-react';

interface LinkProp {
  title: string;
  href: string;
}

export function SemanticClusterLinks({ 
  commercial, 
  comparison, 
  research, 
  knowledge, 
  related,
  theme = 'light'
}: {
  commercial: LinkProp;
  comparison: LinkProp;
  research: LinkProp;
  knowledge: LinkProp;
  related: LinkProp[];
  theme?: 'light' | 'dark';
}) {
  const isDark = theme === 'dark';

  return (
    <section className={`mt-16 pt-12 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="flex items-center gap-2 mb-8">
        <Network className="w-6 h-6 text-accent" />
        <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-navy'}`}>Related Concepts & Research</h3>
      </div>
      
      <p className={`mb-8 max-w-3xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
        Explore more about this topic across our knowledge hub, commercial offerings, and independent research.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Core Links */}
        <div className={`rounded-2xl p-6 border ${isDark ? 'bg-navy-light/40 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-accent' : 'text-gray-500'}`}>Core Concepts</h4>
          <ul className="space-y-4">
            <ClusterLink isDark={isDark} icon={<ArrowUpRight className="w-5 h-5" />} label="Workspace Solution" link={commercial} color="text-accent" />
            <ClusterLink isDark={isDark} icon={<BarChart className="w-5 h-5" />} label="Comparison Guide" link={comparison} color={isDark ? "text-blue-400" : "text-blue-600"} />
            <ClusterLink isDark={isDark} icon={<FileText className="w-5 h-5" />} label="Market Research" link={research} color={isDark ? "text-emerald-400" : "text-emerald-600"} />
            <ClusterLink isDark={isDark} icon={<BookOpen className="w-5 h-5" />} label="Knowledge Base" link={knowledge} color={isDark ? "text-purple-400" : "text-purple-600"} />
          </ul>
        </div>

        {/* Related Articles */}
        <div className={`rounded-2xl p-6 border ${isDark ? 'bg-navy border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
           <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-accent' : 'text-gray-500'}`}>Related Reading</h4>
           <div className="space-y-6">
             {related.map((article, i) => (
                <div key={i} className="group">
                   <Link href={article.href} className="flex gap-4 items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isDark ? 'bg-navy-light group-hover:bg-accent/20' : 'bg-gray-50 group-hover:bg-accent/10'}`}>
                         <Book className={`w-4 h-4 transition-colors ${isDark ? 'text-white/50 group-hover:text-accent' : 'text-gray-400 group-hover:text-accent'}`} />
                      </div>
                      <div>
                         <div className={`font-bold transition-colors line-clamp-2 leading-tight ${isDark ? 'text-white group-hover:text-accent' : 'text-navy group-hover:text-accent'}`}>
                            {article.title}
                         </div>
                         <div className={`text-sm mt-1 flex items-center gap-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                            Read article <ArrowRight className="w-3 h-3" />
                         </div>
                      </div>
                   </Link>
                </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function ClusterLink({ icon, label, link, color, isDark }: { icon: React.ReactNode, label: string, link: LinkProp, color: string, isDark: boolean }) {
   return (
      <li>
         <Link href={link.href} className={`flex items-center justify-between p-3 rounded-xl border transition-all group ${isDark ? 'hover:bg-navy-light/50 border-transparent hover:border-white/10' : 'hover:bg-white border-transparent hover:border-gray-200'}`}>
            <div className="flex items-center gap-3">
               <div className={`${color}`}>{icon}</div>
               <div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{label}</div>
                  <div className={`font-bold transition-colors ${isDark ? 'text-white group-hover:text-accent' : 'text-navy group-hover:text-accent'}`}>{link.title}</div>
               </div>
            </div>
            <ArrowRight className={`w-4 h-4 transition-all group-hover:translate-x-1 ${isDark ? 'text-white/20 group-hover:text-accent' : 'text-gray-300 group-hover:text-accent'}`} />
         </Link>
      </li>
   );
}
