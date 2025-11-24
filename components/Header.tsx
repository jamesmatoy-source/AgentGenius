import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#services' },
    { name: 'Our Agents', href: '#demo' },
    { name: 'Insights', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-24 flex items-center border-b-4 border-enterprise-purple">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-full">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-white p-2 transition-transform group-hover:scale-105 duration-300">
            <Bot className="text-black w-8 h-8" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
             <span className="text-2xl font-black tracking-tighter uppercase leading-none">Agent</span>
             <span className="text-sm font-bold text-enterprise-purple tracking-[0.2em] uppercase leading-none">Genius</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative h-full flex items-center px-6 text-sm font-bold text-white hover:bg-zinc-900 transition-colors uppercase tracking-wider group"
            >
              {link.name}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          ))}
          <div className="h-full flex items-center pl-6 border-l border-gray-800 ml-2">
             <a 
              href="#contact"
              className="px-8 py-3 text-sm font-bold text-black bg-white border-2 border-white hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-zinc-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-black border-t border-gray-800 shadow-2xl h-screen">
          <nav className="flex flex-col p-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white py-6 border-b border-gray-800 hover:text-enterprise-purple transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
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