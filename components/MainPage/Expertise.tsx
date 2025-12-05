import React from 'react';
import { BrainCircuit, Database, Network, Cpu, ScanEye, Share2, ShieldCheck, Binary, Heart } from 'lucide-react';

const expertise = [
  { 
    icon: <BrainCircuit className="w-10 h-10" />, 
    title: "Generative AI & LLMs",
    desc: "Fine-tuning & RAG architectures"
  },
  { 
    icon: <Network className="w-10 h-10" />, 
    title: "Multi-Agent Systems",
    desc: "Autonomous swarm orchestration"
  },
  { 
    icon: <Database className="w-10 h-10" />, 
    title: "Enterprise Data",
    desc: "Knowledge graph construction"
  },
  { 
    icon: <ScanEye className="w-10 h-10" />, 
    title: "Computer Vision",
    desc: "Visual inspection & OCR"
  },
  { 
    icon: <Cpu className="w-10 h-10" />, 
    title: "Edge Computing",
    desc: "On-device model deployment"
  },
  { 
    icon: <Binary className="w-10 h-10" />, 
    title: "Predictive Analytics",
    desc: "Time-series forecasting"
  },
  { 
    icon: <Share2 className="w-10 h-10" />, 
    title: "API Integrations",
    desc: "ERP & CRM connectivity"
  },
  { 
    icon: <ShieldCheck className="w-10 h-10" />, 
    title: "AI Governance",
    desc: "Compliance & guardrails"
  },
];

const tools = [
  { name: 'Make', src: 'https://cdn.simpleicons.org/make' },
  { name: 'Zapier', src: 'https://cdn.simpleicons.org/zapier' },
  { name: 'Gemini', src: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Claude', src: 'https://cdn.simpleicons.org/anthropic' },
  { name: 'OpenAI', src: 'https://cdn.simpleicons.org/openai' },
  { name: 'Perplexity', src: 'https://cdn.simpleicons.org/perplexity' },
  { name: 'HubSpot', src: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Supabase', src: 'https://cdn.simpleicons.org/supabase' },
];

const Expertise: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-enterprise-purple"></div>
                <span className="text-enterprise-purple font-bold uppercase tracking-widest text-sm">Technical Proficiency</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
               Our Expertise
             </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right mt-6 md:mt-0 font-medium">
            Deep engineering capabilities across the entire artificial intelligence value chain.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-800 mb-20">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="group border-r border-b border-zinc-800 p-8 flex flex-col items-start hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="text-enterprise-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-2">
                {item.title}
              </h3>
              
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-enterprise-purple transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Tool Ecosystem */}
        <div className="pt-10 border-t border-zinc-800">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-bold mb-12">
            Supported Enterprise Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center justify-center group cursor-pointer">
                <img 
                  src={tool.src} 
                  alt={tool.name} 
                  className="h-8 md:h-10 w-auto object-contain transition-all duration-300 
                             brightness-0 invert opacity-60 
                             group-hover:filter-none group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
            ))}
            {/* Custom Lovable Logo */}
             <div className="flex items-center gap-2 group cursor-pointer">
                <Heart className="h-6 w-6 text-white fill-white opacity-60 group-hover:text-[#ff0066] group-hover:fill-[#ff0066] group-hover:opacity-100 transition-all duration-300" />
                <span className="font-bold text-xl text-white opacity-60 group-hover:text-[#ff0066] group-hover:opacity-100 transition-all duration-300 tracking-tight">lovable</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;