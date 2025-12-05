import React from 'react';
import { ArrowRight, ShieldCheck, Lock, GlobeLock, FileCheck } from 'lucide-react';

interface ResponsibleAiProps {
  onLearnMore?: () => void;
}

const ResponsibleAi: React.FC<ResponsibleAiProps> = ({ onLearnMore }) => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-zinc-900 selection:bg-enterprise-purple selection:text-white">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
              backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-enterprise-purple rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Security Header */}
        <div className="flex items-center gap-3 mb-8 text-enterprise-purple">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-mono text-sm font-bold tracking-widest uppercase">Enterprise Security Protocol</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
               <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tight">
                 Responsible AI.<br />
                 Secured by Design.
               </h2>
               <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
                 We don't just build smart agents; we build safe ones. Our architecture enforces strict data isolation, zero-retention privacy, and human-in-the-loop governance standards.
               </p>
               
               <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm">
                      <Lock className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-300">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm">
                      <GlobeLock className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-300">GDPR Ready</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm">
                      <FileCheck className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-300">ISO 27001</span>
                  </div>
               </div>

               <button 
                 onClick={onLearnMore}
                 className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-enterprise-purple hover:text-white transition-all duration-300 font-bold text-sm uppercase tracking-widest"
               >
                 View Security Framework <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Right Visual - Abstract Security Architecture */}
            <div className="relative border border-zinc-800 bg-zinc-950/50 p-8 md:p-12 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enterprise-purple to-transparent"></div>
                <div className="space-y-6 font-mono text-sm">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <span className="text-gray-500">ENCRYPTION_LAYER</span>
                        <span className="text-green-500 font-bold">AES-256 ENABLED</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <span className="text-gray-500">MODEL_ACCESS</span>
                        <span className="text-green-500 font-bold">RBAC STRICT</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <span className="text-gray-500">DATA_RETENTION</span>
                        <span className="text-enterprise-purple font-bold">EPHEMERAL</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">AUDIT_LOGGING</span>
                        <span className="text-green-500 font-bold">IMMUTABLE</span>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-enterprise-purple/20 flex items-center justify-center rounded-full">
                        <ShieldCheck className="w-6 h-6 text-enterprise-purple" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wide text-sm">Enterprise Grade Protection</h4>
                        <p className="text-xs text-gray-500 mt-1">Your proprietary data never trains our public models.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ResponsibleAi;