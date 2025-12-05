import React from 'react';
import { MessageSquare, ArrowRight, Bot } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-enterprise-purple py-20 text-white relative overflow-hidden selection:bg-white selection:text-enterprise-purple">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Watermark Icons (Abstracting the 'Robots' from reference) */}
      <div className="absolute -left-12 -bottom-12 opacity-10 rotate-12 pointer-events-none">
        <Bot size={300} strokeWidth={0.5} />
      </div>
      <div className="absolute -right-12 -top-12 opacity-10 -rotate-12 pointer-events-none">
        <Bot size={300} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
              Empowering enterprises to reach their full potential through AI.
            </h2>
            <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto lg:mx-0">
              Ready to deploy your digital workforce? Let's architect your autonomous future.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a 
              href="#contact" 
              className="group bg-white text-enterprise-purple px-10 py-5 font-bold text-lg uppercase tracking-widest flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 shadow-enterprise border-2 border-transparent hover:border-white"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Talk to Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner;