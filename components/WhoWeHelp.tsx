import React from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    title: "Insurance & Financial Services",
    description: "Turn repetitive admin and compliance tasks into automated workflows — freeing teams to focus on strategy, growth, and client satisfaction."
  },
  {
    title: "Law Firms & Professional Services",
    description: "Transform case, client, and document management into predictive, ROI-driven processes."
  },
  {
    title: "Construction, Manufacturing & Trade",
    description: "Digitize estimates, reporting, and on-site coordination to reduce manual errors and accelerate project timelines."
  },
  {
    title: "Recruitment & Workforce Solutions",
    description: "Streamline sourcing, screening, and placement with intelligent automations that reduce time-to-hire and improve candidate experience."
  },
  {
    title: "Retail & E-Commerce",
    description: "Leverage AI to predict demand, personalize customer engagement, and automate order and inventory workflows end-to-end."
  },
  {
    title: "Industrial Intelligence & IoT Automation",
    description: "Connect sensors, data, and devices to predict maintenance needs, optimize output, and transform factory operations through smart automation."
  },
  {
    title: "Real Estate & Asset-Based Businesses",
    description: "Harness AI to analyze market trends, predict demand shifts, and streamline client communications."
  },
  {
    title: "Growth-Stage Companies & Startups",
    description: "Scale operations efficiently with AI-powered workflows that turn funding or momentum into traction."
  },
  {
    title: "Marketing & Growth Teams",
    description: "Unify data, automate campaigns, and uncover correlations that reveal what truly drives conversions."
  }
];

const WhoWeHelp: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-gray-200 pb-12">
          <div className="max-w-3xl">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-enterprise-purple"></div>
                <span className="text-enterprise-purple font-bold uppercase tracking-widest text-sm">Industries Served</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-black leading-[0.95] tracking-tight mb-8">
               Who We Help Accelerate Performance and Innovation
             </h2>
          </div>
          <div className="max-w-md mt-8 md:mt-0 text-right md:text-left">
            <p className="text-gray-600 font-medium leading-relaxed text-lg mb-6">
              At AgentGenius.ai, we partner with forward-thinking organizations ready to scale intelligently.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our AI-powered systems don't just automate, they transform how teams operate, unlocking efficiency, precision, and measurable growth across every workflow.
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="p-10 border-r border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-300 relative"
            >
              {/* Purple Accent on Hover */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-enterprise-purple group-hover:h-full transition-all duration-300"></div>

              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-black group-hover:text-enterprise-purple transition-colors pr-4">
                {industry.title}
              </h3>
              
              <p className="text-gray-500 font-medium leading-relaxed text-sm group-hover:text-gray-800 transition-colors">
                {industry.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                 <ArrowRight className="w-5 h-5 text-enterprise-purple" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoWeHelp;
