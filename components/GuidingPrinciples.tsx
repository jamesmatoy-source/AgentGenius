import React from 'react';
import { Users, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

const GuidingPrinciples: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white text-black animate-in fade-in duration-500">
        {/* Hero Section */}
        <section className="bg-enterprise-purple text-white py-24 px-6 lg:px-16 relative overflow-hidden selection:bg-white selection:text-enterprise-purple">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto text-center max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                    Building Responsible AI That Puts People First
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 font-light leading-relaxed max-w-3xl mx-auto">
                    At AgentGenius.ai, innovation must always serve people. Our Responsible AI Framework ensures every system we build is transparent, ethical, and human-centered.
                </p>
            </div>
        </section>

        {/* Principles Grid */}
        <section className="py-24 bg-gray-50 text-black">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-20">
                    <span className="text-enterprise-purple font-bold uppercase tracking-widest text-sm mb-4 block">Core Pillars</span>
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Our Guiding Principles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-enterprise group hover:border-enterprise-purple transition-all duration-300 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        <div className="w-16 h-16 bg-zinc-50 text-enterprise-purple flex items-center justify-center mb-8 rounded-none border border-zinc-100 group-hover:bg-enterprise-purple group-hover:text-white transition-colors">
                            <Users className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">You Stay in Control</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            We believe AI should be a copilot, not an autopilot. Our systems are designed with meaningful human oversight at critical decision points, ensuring you always retain the final say in your operations.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-enterprise group hover:border-enterprise-purple transition-all duration-300 relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                        <div className="w-16 h-16 bg-zinc-50 text-enterprise-purple flex items-center justify-center mb-8 rounded-none border border-zinc-100 group-hover:bg-enterprise-purple group-hover:text-white transition-colors">
                            <Lock className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Protect What Matters</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Security and privacy are foundational. We implement rigorous data governance, encryption, and compliance standards to safeguard your proprietary information and your customers' trust.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-enterprise group hover:border-enterprise-purple transition-all duration-300 relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                        <div className="w-16 h-16 bg-zinc-50 text-enterprise-purple flex items-center justify-center mb-8 rounded-none border border-zinc-100 group-hover:bg-enterprise-purple group-hover:text-white transition-colors">
                            <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Serve Your Customers Better</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            AI should enhance the customer experience, not complicate it. We rigorously test for bias and accuracy to ensure every interaction builds loyalty and delivers genuine value to your end users.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-[#050505] text-white">
            <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-center">
                 <div className="border-l-4 border-enterprise-purple pl-8 py-4 bg-white/5 inline-block text-left w-full backdrop-blur-sm">
                    <p className="text-3xl md:text-5xl font-serif italic leading-tight text-gray-200">
                        "Customer-obsessed. Human at the core. Responsible by design."
                    </p>
                 </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white text-center border-t border-gray-200">
            <div className="container mx-auto px-6 lg:px-16">
                 <h2 className="text-3xl md:text-4xl font-black mb-6 text-black tracking-tight">Ready to innovate with confidence?</h2>
                 <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto font-medium">
                    See how our Responsible AI Framework integrates into your workflows to drive growth without compromising on ethics.
                 </p>
                 <a href="#contact" className="bg-enterprise-purple text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-black transition-colors inline-flex items-center gap-3 shadow-lg">
                    Integrate Responsible AI <ArrowRight className="w-5 h-5" />
                 </a>
            </div>
        </section>
    </div>
  )
}

export default GuidingPrinciples;