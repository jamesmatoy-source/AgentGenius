import React, { useState } from 'react';
import { generateInsight } from '../services/geminiService';
import { Loader2, Send, Cpu } from 'lucide-react';

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const result = await generateInsight(input);
      setResponse(result);
    } catch (error) {
      setResponse("Agent connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="mb-12 flex items-center gap-4">
          <div className="p-3 bg-enterprise-purple">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <div>
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide">Agent Orchestrator</h2>
             <p className="text-gray-400 font-mono text-sm mt-1">V 2.4.1 // SYSTEM ONLINE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Instructions */}
          <div className="lg:col-span-1">
             <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Task Assignment</h3>
             <p className="text-gray-400 mb-6 leading-relaxed">
               Direct our prototype agent to perform a cognitive task. The agent will analyze your request and simulate an enterprise-grade execution response.
             </p>
             <ul className="space-y-4 text-sm text-gray-300">
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-enterprise-purple"></div>
                 <span>Market Analysis Synthesis</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-enterprise-purple"></div>
                 <span>Customer Sentiment Evaluation</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-enterprise-purple"></div>
                 <span>Risk Assessment Logic</span>
               </li>
             </ul>
          </div>

          {/* Right Column: Interface */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 p-1">
            <div className="bg-black p-6 md:p-10 h-full flex flex-col">
              
              {/* Output Screen */}
              <div className="flex-grow min-h-[200px] mb-8 border-l-2 border-gray-800 pl-6 relative">
                {!response && !loading && (
                   <div className="text-gray-600 font-mono text-sm">
                     {`> Awaiting command input...`}
                   </div>
                )}
                
                {loading && (
                  <div className="flex items-center gap-3 text-enterprise-purple font-mono text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {`> PROCESSING REQUEST...`}
                  </div>
                )}

                {response && (
                  <div className="animate-in fade-in duration-500">
                    <div className="flex items-center gap-2 text-enterprise-purple mb-3 font-mono text-xs uppercase">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       Agent Response
                    </div>
                    <p className="text-xl text-white leading-relaxed font-light">
                      {response}
                    </p>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleGenerate} className="mt-auto">
                 <div className="relative">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter task for agent (e.g., 'Analyze the risks of adopting AI in healthcare')"
                      className="w-full bg-zinc-900 text-white px-6 py-5 pr-16 outline-none border-b-2 border-gray-700 focus:border-enterprise-purple transition-colors font-medium placeholder-gray-600 rounded-none"
                    />
                    <button 
                      type="submit"
                      disabled={loading || !input}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                    >
                      <Send className="w-6 h-6" />
                    </button>
                 </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiDemo;