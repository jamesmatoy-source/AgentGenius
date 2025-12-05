import React from 'react';
import { ArrowLeft, User, Calendar, MessageSquare, ArrowRight, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { BlogPostType } from './Blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white text-black animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Navigation / Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 py-6">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-enterprise-purple transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent pt-32 pb-12">
            <div className="container mx-auto px-6 lg:px-16">
                <span className="inline-block bg-enterprise-purple text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight mb-6">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 text-white/80 text-sm font-medium uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-enterprise-purple" />
                        <span>{post.author || "Agent Genius Team"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-enterprise-purple" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-enterprise-purple" />
                        <span>{post.comments || "No Comments"}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* Main Content Area */}
        <article className="lg:w-3/4">
            
            {/* SEO Meta Display (Visible for demo, usually hidden) */}
            {(post.seoTitle || post.seoDescription) && (
              <div className="mb-8 p-4 bg-gray-50 border border-gray-200 text-xs text-gray-500 font-mono">
                 <p><span className="font-bold">SEO Title:</span> {post.seoTitle}</p>
                 <p><span className="font-bold">SEO Desc:</span> {post.seoDescription}</p>
                 <p><span className="font-bold">Slug:</span> {post.slug}</p>
                 {post.fileName && <p><span className="font-bold">File Name:</span> {post.fileName}</p>}
              </div>
            )}

            {/* Dynamic Content Rendering */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16 whitespace-pre-wrap">
                {post.content ? (
                    post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6">{paragraph}</p>
                    ))
                ) : (
                    <p className="italic text-gray-500">No content available.</p>
                )}
            </div>

            {/* Comments Section */}
            <div className="mb-24">
                <h3 className="text-2xl font-black text-black mb-8 uppercase tracking-tight">Leave a Reply</h3>
                <div className="bg-gray-50 p-8 border border-gray-200 text-sm">
                    <p className="mb-6 text-gray-500">Logged in as {post.author || 'Guest'}. <a href="#" className="text-enterprise-purple underline">Edit your profile</a>. <a href="#" className="text-enterprise-purple underline">Log out?</a> Required fields are marked *</p>
                    <form>
                        <div className="mb-6">
                            <label className="block font-bold mb-2 uppercase tracking-wide text-xs text-gray-700">Comment *</label>
                            <textarea 
                                rows={6} 
                                className="w-full border border-gray-300 bg-white p-4 outline-none focus:border-enterprise-purple transition-colors resize-y"
                            ></textarea>
                        </div>
                        <button type="button" className="bg-white border-2 border-enterprise-purple text-enterprise-purple px-8 py-3 font-bold uppercase tracking-widest hover:bg-enterprise-purple hover:text-white transition-colors">
                            Post Comment
                        </button>
                    </form>
                </div>
            </div>

        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/4">
             <div className="sticky top-32">
                 
                 {/* Share Widget */}
                 <div className="mb-12">
                     <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-6 flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share Article
                     </h4>
                     <div className="flex gap-2">
                        <button className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-enterprise-purple transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-enterprise-purple transition-colors">
                            <Twitter className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-enterprise-purple transition-colors">
                            <Facebook className="w-4 h-4" />
                        </button>
                     </div>
                 </div>

                 {/* Newsletter */}
                 <div className="bg-black p-6 text-white text-center">
                    <h4 className="font-bold uppercase tracking-widest mb-4">Subscribe</h4>
                    <p className="text-gray-400 text-xs mb-4 leading-relaxed">Get the latest AI automation strategies delivered to your inbox.</p>
                    <input type="email" placeholder="Email Address" className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm mb-2 focus:border-enterprise-purple outline-none" />
                    <button className="w-full bg-enterprise-purple text-white py-3 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
                        Join Now
                    </button>
                 </div>

             </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogPost;