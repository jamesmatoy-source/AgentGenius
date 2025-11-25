import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import ResponsibleAi from './components/ResponsibleAi';
import HowItWorks from './components/HowItWorks';
import Expertise from './components/Expertise';
import AiDemo from './components/AiDemo';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import GuidingPrinciples from './components/GuidingPrinciples';
import Blog, { BlogPostType } from './components/Blog';
import BlogPost from './components/BlogPost';
import CmsDashboard from './components/CmsDashboard';

const INITIAL_POSTS: BlogPostType[] = [
  {
    id: 1,
    category: "Uncategorized",
    slug: "growing-smarter-together",
    title: "Growing Smarter Together at AgentGenius.ai",
    excerpt: "Stop working harder and start building smarter. AgentGenius.ai introduces the intelligent ecosystem where AI agents learn, adapt, and collaborate.",
    content: `At AgentGenius.ai, we've learned that careers grow the same way great products do — through curiosity, iteration, and momentum.\n\nIn technology, the pace never slows down. Tools change, roles evolve, and what worked last year may already feel outdated. That's why we've built a culture where learning isn't a side activity — it's part of the job.\n\nEveryone who joins our team brings a story, a skill, and a spark. From AI engineers to growth strategists, what connects us is a mindset: a hunger to figure things out. We don't expect anyone to know everything on day one. What matters more is the ability to learn fast, think critically, and experiment without fear.`,
    date: "November 23, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Uncategorized",
    slug: "introducing-agentgenius",
    title: "Introducing AgentGenius.ai — The Future of Work, Re-Engineered",
    excerpt: "AgentGenius.ai introduces the intelligent ecosystem where AI agents learn, adapt, and collaborate with your human teams.",
    content: "Full content placeholder for introducing Agent Genius...",
    date: "November 3, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Uncategorized",
    slug: "building-careers",
    title: "Growing Smarter Together: How We Build Careers at AgentGenius.ai",
    excerpt: "In today's fast-evolving tech landscape, AgentGenius.ai champions career growth driven by curiosity, iteration, and continuous learning.",
    content: "Full content placeholder for building careers...",
    date: "November 3, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Uncategorized",
    slug: "automate-without-code",
    title: "How to Automate Anything Without Code Using Make.com",
    excerpt: "Small business owners lose an average of 96 minutes daily due to inefficiencies. Discover how Make.com empowers organizations.",
    content: "Full content placeholder for automation...",
    date: "November 2, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Uncategorized",
    slug: "whatsapp-automation",
    title: "How to Turn Website Leads Into WhatsApp Messages Instantly",
    excerpt: "Did you know that responding to a prospect within five minutes can make you up to 10 times more likely to convert?",
    content: "Full content placeholder for whatsapp...",
    date: "October 26, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Uncategorized",
    slug: "real-estate-ai",
    title: "How a Real Estate Agent Could Save 8 Hours This Week",
    excerpt: "Feeling swamped by paperwork? Discover how AI can help every real estate agent reclaim eight hours a week.",
    content: "Full content placeholder for real estate...",
    date: "August 21, 2025",
    author: "James David Matoy",
    comments: "No Comments",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
  }
];

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'principles' | 'blog' | 'cms'>('home');
  const [posts, setPosts] = useState<BlogPostType[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  const handleNavigate = (newPage: 'home' | 'principles' | 'blog' | 'cms') => {
    setPage(newPage);
    if (newPage !== 'blog') {
        setSelectedPost(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCmsSave = (newPost: BlogPostType) => {
    setPosts([newPost, ...posts]);
    setPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-enterprise-purple selection:text-white">
      <Header currentPage={page} onNavigate={handleNavigate} />
      
      <main>
        {page === 'home' && (
          <>
            <Hero />
            <WhoWeHelp />
            <Services />
            <ResponsibleAi onLearnMore={() => handleNavigate('principles')} />
            <HowItWorks />
            <Expertise />
            <AiDemo />
            <CtaBanner />
          </>
        )}
        
        {page === 'principles' && <GuidingPrinciples />}
        
        {page === 'blog' && !selectedPost && (
            <Blog posts={posts} onPostClick={handlePostClick} />
        )}

        {page === 'blog' && selectedPost && (
            <BlogPost post={selectedPost} onBack={handleBackToBlog} />
        )}

        {page === 'cms' && (
            <CmsDashboard onSave={handleCmsSave} onCancel={() => handleNavigate('blog')} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;