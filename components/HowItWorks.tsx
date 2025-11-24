import React from 'react';
import { Search, Headset, FileOutput, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description: "We identify your biggest automation opportunities."
  },
  {
    icon: <Headset className="w-8 h-8" />,
    title: "Custom AI Agent Design",
    description: "Tailored automations for your workflow."
  },
  {
    icon: <FileOutput className="w-8 h-8" />,
    title: "Deployment & Optimization",
    description: "Real-time analytics, continuous improvement."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Scale & Support",
    description: "Expand your automation ecosystem as you grow."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
           <div>
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-1 bg-enterprise-purple"></div>
                 <span className="text-enterprise-purple font-bold uppercase tracking-widest text-sm">Process Framework</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
                How It Works
              </h2>
           </div>
           <p className="hidden md:block text-gray-500 font-medium max-w-sm text-right">
             A systematic approach to deploying autonomous intelligence within your infrastructure.
           </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-10 border-r border-b border-gray-200 group hover:bg-black hover:text-white transition-colors duration-300 min-h-[360px] flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-zinc-800 transition-colors select-none">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="relative z-10 mb-8">
                 <div className="w-16 h-16 bg-enterprise-purple text-white flex items-center justify-center rounded-none shadow-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {step.icon}
                 </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight group-hover:text-enterprise-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;