import React, { useState } from 'react';
import { Menu, X, Bot, Settings } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'principles' | 'blog' | 'cms';
  onNavigate: (page: 'home' | 'principles' | 'blog' | 'cms') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'principles' | 'blog' | 'cms', href?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    if (href && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-24 flex items-center border-b-4 border-enterprise-purple shadow-lg">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-full">
        
        {/* Logo Area */}
        <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNavClick('home')}
        >
          <div className="bg-white p-2 transition-transform group-hover:scale-105 duration-300">
            <Bot className="text-black w-8 h-8" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
             <span className="text-2xl font-black tracking-tighter uppercase leading-none">Agent</span>
             <span className="text-sm font-bold text-enterprise-purple tracking-[0.2em] uppercase leading-none">Genius</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center h-full ml-auto">
          <button 
            onClick={() => handleNavClick('home')}
            className={`relative h-full flex items-center px-5 text-sm font-bold transition-colors uppercase tracking-wider group ${currentPage === 'home' ? 'text-enterprise-purple bg-zinc-900' : 'text-white hover:bg-zinc-900'}`}
          >
            Home
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple transition-transform duration-300 origin-left ${currentPage === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </button>

          <button 
            onClick={() => handleNavClick('home', '#who-we-help')}
            className="relative h-full flex items-center px-5 text-sm font-bold text-white hover:bg-zinc-900 transition-colors uppercase tracking-wider group"
          >
            Who We Help
            <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button 
            onClick={() => handleNavClick('home', '#services')}
            className="relative h-full flex items-center px-5 text-sm font-bold text-white hover:bg-zinc-900 transition-colors uppercase tracking-wider group"
          >
            Capabilities
            <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button 
            onClick={() => handleNavClick('home', '#how-it-works')}
            className="relative h-full flex items-center px-5 text-sm font-bold text-white hover:bg-zinc-900 transition-colors uppercase tracking-wider group"
          >
            How It Works
            <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button 
            onClick={() => handleNavClick('home', '#demo')}
            className="relative h-full flex items-center px-5 text-sm font-bold text-white hover:bg-zinc-900 transition-colors uppercase tracking-wider group"
          >
            Our Agents
            <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button 
            onClick={() => handleNavClick('principles')}
            className={`relative h-full flex items-center px-5 text-sm font-bold transition-colors uppercase tracking-wider group ${currentPage === 'principles' ? 'text-enterprise-purple bg-zinc-900' : 'text-white hover:bg-zinc-900'}`}
          >
            Responsible AI
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple transition-transform duration-300 origin-left ${currentPage === 'principles' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </button>

          <button 
            onClick={() => handleNavClick('blog')}
            className={`relative h-full flex items-center px-5 text-sm font-bold transition-colors uppercase tracking-wider group ${currentPage === 'blog' ? 'text-enterprise-purple bg-zinc-900' : 'text-white hover:bg-zinc-900'}`}
          >
            Blog
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple transition-transform duration-300 origin-left ${currentPage === 'blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </button>

          <button 
            onClick={() => handleNavClick('cms')}
            className={`relative h-full flex items-center px-4 text-sm font-bold transition-colors uppercase tracking-wider group ${currentPage === 'cms' ? 'text-enterprise-purple bg-zinc-900' : 'text-gray-500 hover:text-white hover:bg-zinc-900'}`}
            title="CMS Admin"
          >
            <Settings className="w-4 h-4" />
          </button>

          <div className="h-full flex items-center pl-6 border-l border-gray-800 ml-2">
             <a 
              href="#contact"
              className="px-6 py-3 text-sm font-bold text-black bg-white border-2 border-white hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-white p-2 hover:bg-zinc-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-24 left-0 right-0 bg-black border-t border-gray-800 shadow-2xl h-screen overflow-y-auto pb-32">
          <nav className="flex flex-col p-8">
             <button 
                onClick={() => handleNavClick('home')}
                className={`text-left text-2xl font-bold py-6 border-b border-gray-800 transition-colors uppercase tracking-wider ${currentPage === 'home' ? 'text-enterprise-purple' : 'text-white hover:text-enterprise-purple'}`}
              >
                Home
              </button>

              <button 
                onClick={() => handleNavClick('home', '#who-we-help')}
                className="text-left text-2xl font-bold text-white py-6 border-b border-gray-800 hover:text-enterprise-purple transition-colors uppercase tracking-wider"
              >
                Who We Help
              </button>

             <button 
                onClick={() => handleNavClick('home', '#services')}
                className="text-left text-2xl font-bold text-white py-6 border-b border-gray-800 hover:text-enterprise-purple transition-colors uppercase tracking-wider"
              >
                Capabilities
              </button>

              <button 
                onClick={() => handleNavClick('home', '#how-it-works')}
                className="text-left text-2xl font-bold text-white py-6 border-b border-gray-800 hover:text-enterprise-purple transition-colors uppercase tracking-wider"
              >
                How It Works
              </button>

              <button 
                onClick={() => handleNavClick('home', '#demo')}
                className="text-left text-2xl font-bold text-white py-6 border-b border-gray-800 hover:text-enterprise-purple transition-colors uppercase tracking-wider"
              >
                Our Agents
              </button>
              <button 
                onClick={() => handleNavClick('principles')}
                className={`text-left text-2xl font-bold py-6 border-b border-gray-800 transition-colors uppercase tracking-wider ${currentPage === 'principles' ? 'text-enterprise-purple' : 'text-white hover:text-enterprise-purple'}`}
              >
                Responsible AI
              </button>
              <button 
                onClick={() => handleNavClick('blog')}
                className={`text-left text-2xl font-bold py-6 border-b border-gray-800 transition-colors uppercase tracking-wider ${currentPage === 'blog' ? 'text-enterprise-purple' : 'text-white hover:text-enterprise-purple'}`}
              >
                Blog
              </button>
               <button 
                onClick={() => handleNavClick('cms')}
                className={`text-left text-2xl font-bold py-6 border-b border-gray-800 transition-colors uppercase tracking-wider ${currentPage === 'cms' ? 'text-enterprise-purple' : 'text-gray-500 hover:text-white'}`}
              >
                Admin CMS
              </button>

            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 py-4 text-center text-lg font-bold bg-enterprise-purple text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;