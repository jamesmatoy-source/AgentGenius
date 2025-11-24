import React from 'react';
import { Users, Lock, ShieldCheck, ArrowRight, FileCheck, GlobeLock, Server, Eye, CheckCircle2 } from 'lucide-react';

const GuidingPrinciples: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white text-black animate-in fade-in duration-500">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] text-white py-24 px-6 lg:px-16 relative overflow-hidden selection:bg-enterprise-purple selection:text-white">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            <div className="container mx-auto text-center max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Enterprise Grade Governance</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                    Building Responsible AI<br/>That Puts People First
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                    At AgentGenius.ai, innovation implies obligation. Our Responsible AI Framework is not an afterthought—it is the architectural foundation of every agent we deploy.
                </p>
            </div>
        </section>

        {/* Compliance & Standards Bar */}
        <section className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-6 lg:px-16 py-10">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                    Built to exceed Global Compliance Standards
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale">
                    {/* Mock Compliance Logos using text for reliability */}
                    <div className="flex items-center gap-2 group">
                        <FileCheck className="w-8 h-8 text-black" />
                        <span className="font-bold text-xl tracking-tight text-black">SOC 2 <span className="text-xs font-normal text-gray-500 block">Type II Ready</span></span>
                    </div>
                    <div className="flex items-center gap-2 group">
                        <GlobeLock className="w-8 h-8 text-black" />
                        <span className="font-bold text-xl tracking-tight text-black">GDPR <span className="text-xs font-normal text-gray-500 block">Compliant</span></span>
                    </div>
                    <div className="flex items-center gap-2 group">
                        <ShieldCheck className="w-8 h-8 text-black" />
                        <span className="font-bold text-xl tracking-tight text-black">HIPAA <span className="text-xs font-normal text-gray-500 block">Aligned</span></span>
                    </div>
                    <div className="flex items-center gap-2 group">
                        <Server className="w-8 h-8 text-black" />
                        <span className="font-bold text-xl tracking-tight text-black">ISO <span className="text-xs font-normal text-gray-500 block">27001</span></span>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 bg-gray-50 text-black">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-enterprise-purple font-bold uppercase tracking-widest text-sm mb-4 block">Core Pillars</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Our Guiding Principles</h2>
                    </div>
                    <p className="max-w-md text-gray-500 font-medium text-right mt-6 md:mt-0">
                        Three non-negotiable rules that govern every line of code we write.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-white shadow-sm">
                    {/* Card 1 */}
                    <div className="p-12 border-r border-gray-200 hover:bg-black hover:text-white group transition-colors duration-300 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        <Users className="w-12 h-12 text-enterprise-purple mb-8" />
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">1. Human in Command</h3>
                        <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed text-sm">
                            We believe AI is a copilot, not an autopilot. Our "Human-in-the-Loop" architecture ensures that critical decision points always route to human supervisors for validation before execution.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-12 border-r border-gray-200 hover:bg-black hover:text-white group transition-colors duration-300 relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                        <Lock className="w-12 h-12 text-enterprise-purple mb-8" />
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">2. Zero-Retention Privacy</h3>
                        <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed text-sm">
                            Your data is yours. Our models are trained to process information ephemerally. We implement strict data governance where proprietary inputs are never used to train public models.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-12 hover:bg-black hover:text-white group transition-colors duration-300 relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-enterprise-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                        <ShieldCheck className="w-12 h-12 text-enterprise-purple mb-8" />
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">3. Algorithmic Transparency</h3>
                        <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed text-sm">
                            No black boxes. We provide full audit trails for every agent action, allowing compliance teams to trace exactly why a decision was made and what data was used to make it.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Defense in Depth - Technical Credibility Section */}
        <section className="py-24 bg-white text-black border-t border-gray-200">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Defense in Depth: <br/>Security Architecture</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We utilize a multi-layered security approach to ensure resilience against both external threats and internal data leakage.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-enterprise-purple" /></div>
                                <div>
                                    <h4 className="font-bold uppercase text-sm mb-1">Infrastructure Layer</h4>
                                    <p className="text-sm text-gray-500">VPC isolation, encrypted data at rest (AES-256) and in transit (TLS 1.3).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-enterprise-purple" /></div>
                                <div>
                                    <h4 className="font-bold uppercase text-sm mb-1">Model Layer</h4>
                                    <p className="text-sm text-gray-500">Adversarial testing against prompt injection and hallucination guardrails.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-enterprise-purple" /></div>
                                <div>
                                    <h4 className="font-bold uppercase text-sm mb-1">Application Layer</h4>
                                    <p className="text-sm text-gray-500">Role-Based Access Control (RBAC) and Single Sign-On (SSO) integration.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 border border-gray-200 relative">
                        {/* Abstract Representation of Layers */}
                        <div className="space-y-4">
                            <div className="bg-white p-6 border-l-4 border-enterprise-purple shadow-sm flex items-center justify-between">
                                <span className="font-mono text-sm font-bold">APPLICATION_LAYER</span>
                                <Lock className="w-5 h-5 text-gray-300" />
                            </div>
                            <div className="bg-white p-6 border-l-4 border-gray-300 shadow-sm flex items-center justify-between opacity-80">
                                <span className="font-mono text-sm font-bold">MODEL_GOVERNANCE</span>
                                <Eye className="w-5 h-5 text-gray-300" />
                            </div>
                            <div className="bg-white p-6 border-l-4 border-gray-800 shadow-sm flex items-center justify-between opacity-60">
                                <span className="font-mono text-sm font-bold">INFRASTRUCTURE_CORE</span>
                                <Server className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-xs font-mono text-gray-400">Fig 1.1: Security Protocol Stack</p>
                        </div>
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
                    Request Security Whitepaper <ArrowRight className="w-5 h-5" />
                 </a>
            </div>
        </section>
    </div>
  )
}

export default GuidingPrinciples;