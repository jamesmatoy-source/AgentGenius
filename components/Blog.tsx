import React from 'react';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export interface BlogPostType {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  comments: string;
  image: string;
  seoTitle?: string;
  seoDescription?: string;
  fileName?: string;
}

interface BlogProps {
  posts: BlogPostType[];
  onPostClick?: (post: BlogPostType) => void;
}

const Blog: React.FC<BlogProps> = ({ posts, onPostClick }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#f8f9fa] text-black animate-in fade-in duration-500">
      
      {/* Blog Hero / Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight">
            Dive into our Blogs on AI to learn about AI, automation, and scaling your business.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            The AgentGenius.ai blog is where we unpack the power of AI and automation. Get actionable insights tailored for business owners in any industry, helping you automate complex processes and achieve business success.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white border border-gray-200 group hover:shadow-enterprise transition-all duration-300 flex flex-col h-full relative cursor-pointer"
                onClick={() => onPostClick && onPostClick(post)}
              >
                {/* Top Purple Line Interaction */}
                <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>

                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-enterprise-purple text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-enterprise-purple transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-enterprise-purple hover:text-enterprise-darkPurple transition-colors mb-6 group/link">
                      Read More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                         <MessageSquare className="w-3 h-3" />
                         {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-enterprise-purple text-white py-16 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Stay ahead of the curve</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join our newsletter to receive the latest AI insights directly to your inbox.</p>
            <div className="flex justify-center max-w-md mx-auto">
                <input type="email" placeholder="ENTER YOUR EMAIL" className="w-full px-4 py-3 text-black text-sm outline-none placeholder-gray-500" />
                <button className="bg-black text-white px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-gray-900 transition-colors">Subscribe</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Blog;