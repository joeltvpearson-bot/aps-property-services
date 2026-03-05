import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header, Footer } from './components/Layout';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Reviews } from './components/Reviews';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavClick={setActivePage} />;
      case 'services':
        return <Services onNavClick={setActivePage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'reviews':
        return <Reviews onNavClick={setActivePage} />;
      default:
        return <Home onNavClick={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={activePage} onNavClick={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNavClick={setActivePage} />
      <Chatbot />

      {/* Exit Intent Prompt (Simplified) */}
      <ExitIntentModal onNavClick={setActivePage} />
    </div>
  );
}

const ExitIntentModal = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/80 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center relative"
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-navy/20 hover:text-navy transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
        </div>
        
        <h3 className="text-3xl font-display font-black text-navy mb-4">Before you go...</h3>
        <p className="text-navy/60 mb-8">Get a free, no-obligation quote for your property in just 30 seconds with our digital assistant.</p>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => {
              onNavClick('contact');
              setIsVisible(false);
            }}
            className="bg-gold text-navy py-4 rounded-2xl font-bold text-lg hover:bg-gold-hover transition-all"
          >
            Get Free Quote
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-navy/40 font-bold hover:text-navy transition-colors"
          >
            No thanks, just browsing
          </button>
        </div>
      </motion.div>
    </div>
  );
};
