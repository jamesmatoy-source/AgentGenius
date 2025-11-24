import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import ResponsibleAi from './components/ResponsibleAi';
import HowItWorks from './components/HowItWorks';
import Expertise from './components/Expertise';
import AiDemo from './components/AiDemo';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import GuidingPrinciples from './components/GuidingPrinciples';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'principles'>('home');

  return (
    <div className="min-h-screen font-sans selection:bg-enterprise-purple selection:text-white">
      <Header currentPage={page} onNavigate={setPage} />
      
      <main>
        {page === 'home' ? (
          <>
            <Hero />
            <Services />
            <WhoWeHelp />
            <ResponsibleAi />
            <HowItWorks />
            <Expertise />
            <AiDemo />
            <CtaBanner />
          </>
        ) : (
          <GuidingPrinciples />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;