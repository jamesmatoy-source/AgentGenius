import React from 'react';
import { Bot, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
           <div className="mb-10 md:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="text-white w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-tighter">Agent Genius</span>
              </div>
              <p className="max-w-xs text-gray-400 leading-relaxed">
                Pioneering the autonomous enterprise. We build the digital workforce that powers tomorrow's industry leaders.
              </p>
           </div>
           
           <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-900 hover:bg-enterprise-purple transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-zinc-900 hover:bg-enterprise-purple transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-zinc-900 hover:bg-enterprise-purple transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-zinc-900 hover:bg-enterprise-purple transition-colors"><Globe className="w-5 h-5" /></a>
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
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center md:justify-start">
             <span className="hover:text-white cursor-pointer">Privacy</span>
             <span className="hover:text-white cursor-pointer">Terms</span>
             <span className="hover:text-white cursor-pointer">Accessibility</span>
             <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Agent Genius Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;