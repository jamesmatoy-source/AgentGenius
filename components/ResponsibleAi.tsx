import React from 'react';
import { ArrowRight, BrainCircuit } from 'lucide-react';

const ResponsibleAi: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white overflow-hidden">
      {/* Geometric Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl">
           <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tight">
             Responsible AI.<br />
             Human at the Core.
           </h2>
           <p className="text-xl md:text-2xl text-indigo-100/90 max-w-3xl mb-20 leading-relaxed font-light">
             Every automation we design puts people first – ensuring transparency, control, and data integrity at every step.
           </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-10">
           <div className="mb-8 md:mb-0 flex items-center gap-4 text-indigo-200">
              <div className="p-3 border border-white/20 rounded-none bg-white/5 backdrop-blur-sm">
                 <BrainCircuit className="w-10 h-10" />
              </div>
              <div>
                <span className="block uppercase tracking-widest text-xs font-bold text-white">Ethical Protocol</span>
                <span className="text-xs opacity-70">Verified Compliance</span>
              </div>
           </div>
           
           <a href="#" className="group flex items-center gap-4 px-10 py-4 border border-white/40 hover:bg-white hover:text-[#1e1b4b] transition-all duration-300 font-bold text-sm uppercase tracking-widest backdrop-blur-sm">
             Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAi;