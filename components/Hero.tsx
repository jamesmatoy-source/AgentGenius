import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 min-h-[90vh] flex flex-col lg:flex-row bg-white">
      
      {/* Left Content Block */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-20 z-10 bg-white text-black">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-16 h-2 bg-enterprise-purple"></div>
            <span className="font-bold uppercase tracking-widest text-sm text-gray-600">
              The Future of Work
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-black leading-[0.9] mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-enterprise-purple to-enterprise-darkPurple">
              Automate.
            </span> <br/>
            Delegate. <br/>
            Scale.
          </h1>
          
          <p className="text-2xl text-black font-bold mb-10 leading-tight">
            The AI layer that scales how your business works.
          </p>

          <ul className="space-y-5 mb-12">
            {[
                "Turn complex data into clear, actionable intelligence.",
                "Automate the busywork so your team can scale what truly matters.",
                "Achieve more impact with fewer resources — no extra headcount required.",
                "Deploy custom AI agents built to fit your business, not the other way around.",
                "Predict trends before they happen and uncover insights others miss."
            ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle className="w-6 h-6 text-enterprise-purple flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg text-gray-700 font-medium leading-snug">{item}</span>
                </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-0">
            <a 
              href="#demo"
              className="px-10 py-5 bg-black text-white font-bold text-base uppercase tracking-widest hover:bg-enterprise-purple transition-colors flex items-center justify-center gap-3 group"
            >
              Deploy Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-10 py-5 bg-gray-100 text-black font-bold text-base uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center border-l-2 border-white"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Right Visual Block */}
      <div className="w-full lg:w-1/2 bg-black relative overflow-hidden min-h-[500px] lg:min-h-auto group">
        
        {/* Robot Image */}
        <div className="absolute inset-0 bg-enterprise-purple/20 z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" 
          alt="Autonomous AI Robot" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[20s]"
        />
        
        {/* Gradient Overlays for Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-enterprise-purple/10 mix-blend-overlay"></div>

        {/* Floating Stats Card */}
        <div className="absolute bottom-16 left-8 lg:left-16 border-l-4 border-enterprise-purple pl-6 z-10 backdrop-blur-md bg-black/40 p-6 pr-12 max-w-xs">
           <h3 className="text-white text-4xl font-black uppercase mb-2">94%</h3>
           <p className="text-gray-200 uppercase tracking-widest text-xs font-bold">Efficiency Gain in Operations</p>
        </div>

        {/* "Code" Overlay */}
        <div className="absolute top-10 right-10 font-mono text-xs text-white/90 bg-black/60 p-4 backdrop-blur-md hidden md:block border border-white/10 shadow-2xl">
           {`> INITIALIZING AGENT SWARM...`} <br/>
           {`> CONNECTING TO ENTERPRISE GRID...`} <br/>
           {`> OPTIMIZING WORKFLOWS...`} <br/>
           {`> STATUS: ONLINE`}
        </div>
      </div>
    </section>
  );
};

export default Hero;