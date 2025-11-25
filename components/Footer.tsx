import React from 'react';
import { Bot, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Top Section: Branding, Proud Member, Socials */}
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start mb-20 gap-12 xl:gap-0">
           
           {/* Left: Brand */}
           <div className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="text-white w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-tighter">Agent Genius</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering the autonomous enterprise. We build the digital workforce that powers tomorrow's industry leaders.
              </p>
           </div>

           {/* Center: Proud Member (New Addition) */}
           <div className="flex flex-col items-center xl:items-start">
             <span className="text-white font-light text-lg mb-4 tracking-wide">Proud Member</span>
             <div className="flex items-center gap-5">
               {/* Logo Mark Construction - SVG Shapes */}
               <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                  <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M35 5C26.7157 5 20 11.7157 20 20C20 28.2843 26.7157 35 35 35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M50 5C41.7157 5 35 11.7157 35 20C35 28.2843 41.7157 35 50 35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
               </svg>
               
               <div className="flex flex-col">
                 <span className="text-3xl font-extralight tracking-[0.1em] text-white leading-none">BURLINGTON</span>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-300 leading-tight mt-1 font-medium">Chamber of Commerce</span>
                 <span className="font-serif italic text-gray-400 text-sm mt-1 tracking-wide">Bringing life to business</span>
               </div>
             </div>
           </div>
           
           {/* Right: Socials */}
           <div className="flex gap-4 items-start">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-enterprise-purple transition-colors rounded-sm group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-enterprise-purple transition-colors rounded-sm group">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-enterprise-purple transition-colors rounded-sm group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-enterprise-purple transition-colors rounded-sm group">
                  <Globe className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
           </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-zinc-800 pt-16 mb-16">
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Customer Experience</li>
              <li className="hover:text-white cursor-pointer transition-colors">Supply Chain AI</li>
              <li className="hover:text-white cursor-pointer transition-colors">Risk Management</li>
              <li className="hover:text-white cursor-pointer transition-colors">HR Automation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Agent Orchestrator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security & Compliance</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-white cursor-pointer transition-colors">Developer API</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">About Agent Genius</li>
              <li className="hover:text-white cursor-pointer transition-colors">Leadership</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Investor Relations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Insights</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">White Papers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Webinars</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          {/* Left: Policy Links */}
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center md:justify-start">
             <span className="hover:text-white cursor-pointer">Privacy</span>
             <span className="hover:text-white cursor-pointer">Terms</span>
             <span className="hover:text-white cursor-pointer">Responsible AI</span>
             <span className="hover:text-white cursor-pointer">Accessibility</span>
             <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

          {/* Center: Contact Email */}
          <div className="mb-4 md:mb-0">
             <a href="mailto:team@agentgenius.ai" className="hover:text-white transition-colors">team@agentgenius.ai</a>
          </div>

          {/* Right: Copyright */}
          <p>&copy; {new Date().getFullYear()} Agent Genius Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;