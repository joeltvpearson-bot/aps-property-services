import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS, TRUST_BADGES } from '../constants';

export const Header = ({ activePage, onNavClick }: { activePage: string, onNavClick: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning! Looking for a property clean today?');
    else if (hour < 18) setGreeting('Good afternoon! Need a professional property service?');
    else setGreeting('Good evening! Need an emergency clean-up?');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      {/* Top Bar (Desktop Only) */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium text-white/70 uppercase tracking-widest">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Phone size={14} className="text-gold" /> 020 8123 4567</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-gold" /> info@aps-property.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-gold animate-pulse" />
              <span>{greeting}</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => onNavClick('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
            <span className="text-navy font-black text-xl">A</span>
          </div>
          <div className="flex flex-col items-start">
            <span className={`font-display font-black text-2xl tracking-tighter leading-none ${isScrolled ? 'text-navy' : 'text-white'}`}>APS</span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.2em] leading-none mt-1 ${isScrolled ? 'text-navy/60' : 'text-white/60'}`}>Property Services</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => onNavClick(item.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-all relative py-2 ${
                activePage === item.href 
                  ? (isScrolled ? 'text-gold' : 'text-gold') 
                  : (isScrolled ? 'text-navy/70 hover:text-navy' : 'text-white/70 hover:text-white')
              }`}
            >
              {item.label}
              {activePage === item.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:02081234567"
            className={`hidden sm:flex items-center gap-2 font-bold text-sm ${isScrolled ? 'text-navy' : 'text-white'}`}
          >
            <Phone size={18} className="text-gold" />
            <span className="hidden lg:inline">020 8123 4567</span>
          </a>
          <button 
            onClick={() => onNavClick('contact')}
            className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gold-hover transition-all shadow-lg shadow-gold/20"
          >
            Book Now
          </button>
          <button 
            className="md:hidden p-2 text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    onNavClick(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xl font-display font-bold uppercase tracking-widest text-left ${
                    activePage === item.href ? 'text-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a href="tel:02081234567" className="flex items-center gap-3 text-white font-bold">
                  <Phone size={20} className="text-gold" /> 020 8123 4567
                </a>
                <a href="mailto:info@aps-property.co.uk" className="flex items-center gap-3 text-white font-bold">
                  <Mail size={20} className="text-gold" /> info@aps-property.co.uk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="text-navy font-black text-2xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter leading-none text-white">APS</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none text-gold mt-1">Property Services</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              For over a decade, providing excellence in cleaning and facilities management services across the UK. Fully insured, 24/7 availability.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button 
                    onClick={() => onNavClick(item.href)}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Our Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavClick('services')} className="text-white/60 hover:text-gold transition-colors text-sm">Common Area Cleaning</button></li>
              <li><button onClick={() => onNavClick('services')} className="text-white/60 hover:text-gold transition-colors text-sm">Property Recovery</button></li>
              <li><button onClick={() => onNavClick('services')} className="text-white/60 hover:text-gold transition-colors text-sm">Reactive Maintenance</button></li>
              <li><button onClick={() => onNavClick('services')} className="text-white/60 hover:text-gold transition-colors text-sm">Refurbishment Cleaning</button></li>
              <li><button onClick={() => onNavClick('services')} className="text-white/60 hover:text-gold transition-colors text-sm">Re-letting Prep</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Business Park, London Road,<br />London, SE1 1AA</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={18} className="text-gold shrink-0" />
                <span>020 8123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@aps-property.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Associated Property Services Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
