import React from 'react';
import { Bot, Workflow, ShieldCheck, BarChart3, ArrowRight, Code2, MessageSquare, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-12 h-12" />,
    title: "Digital Workers",
    description: "Deploy autonomous agents that handle end-to-end roles: from Customer Support Representatives to Data Entry Specialists."
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "Workflow Automation",
    description: "Seamlessly integrate agents into your existing ERP and CRM stacks to automate complex, multi-step business logic."
  },
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: "Conversational AI",
    description: "Natural language interfaces that allow your team to query databases, generate reports, and control software via chat."
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Predictive Intelligence",
    description: "Agents that don't just report data but forecast trends and autonomously flag anomalies before they impact revenue."
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Custom LLM Fine-Tuning",
    description: "Train proprietary models on your enterprise data for agents that speak your language and know your business inside out."
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Governance & Security",
    description: "Enterprise-grade guardrails ensuring your autonomous agents operate within strict compliance and security boundaries."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f2f2f2] text-black">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-gray-300 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
              Agent Capabilities
            </h2>
            <p className="text-gray-600 text-xl font-medium">
              We don't sell tools. We sell outcomes. Our agents are designed to perform specific high-value tasks within your organization.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#" className="text-enterprise-purple font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              View Full Catalog <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-300 bg-white">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-10 border-r border-b border-gray-300 hover:bg-black hover:text-white group transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="mb-8 text-black group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-enterprise-purple transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;