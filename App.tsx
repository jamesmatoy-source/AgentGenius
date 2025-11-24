import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AiDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;