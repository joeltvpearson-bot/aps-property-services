import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl text-navy mb-6">Our Specialist Services</h1>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            Professional, specification-led property services delivered by uniformed, insured teams.
          </p>
        </div>

        <div className="space-y-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`border rounded-3xl overflow-hidden transition-all duration-500 ${
                expandedId === service.id ? 'border-gold shadow-xl bg-white' : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-navy/10'
              }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                    expandedId === service.id ? 'bg-navy text-gold' : 'bg-white text-navy shadow-sm'
                  }`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-navy">{service.title}</h3>
                    <p className="text-navy/50 text-sm">{service.description}</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${expandedId === service.id ? 'rotate-180 text-gold' : 'text-navy/30'}`}>
                  <ChevronDown size={28} />
                </div>
              </button>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="p-8 pt-0 border-t border-slate-50">
                      <div className="grid md:grid-cols-2 gap-12 mt-8">
                        <div>
                          <h4 className="font-bold text-navy mb-4 uppercase tracking-widest text-xs">What's Included</h4>
                          <ul className="space-y-3">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3 text-navy/70 text-sm">
                                <CheckCircle2 size={18} className="text-gold shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-navy mb-4 uppercase tracking-widest text-xs">Ideal For</h4>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {service.idealFor.map((item, i) => (
                              <span key={i} className="bg-navy/5 text-navy/70 px-3 py-1 rounded-full text-xs font-medium">
                                {item}
                              </span>
                            ))}
                          </div>
                          
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="text-sm text-navy/60 mb-4">Need a custom specification for your property? Our digital assistant can help you build a quote in seconds.</p>
                            <button 
                              onClick={() => onNavClick('contact')}
                              className="w-full bg-navy text-white py-3 rounded-xl font-bold text-sm hover:bg-navy/90 transition-all flex items-center justify-center gap-2"
                            >
                              Get a Quote for {service.title}
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Cross-sell Banner */}
        <div className="mt-20 bg-gold p-12 rounded-[3rem] text-navy flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-display font-black mb-4">Need Multiple Services?</h3>
            <p className="font-medium opacity-80">We offer bundled rates for clients requiring comprehensive facilities management. Save up to 15% when you combine cleaning and maintenance packages.</p>
          </div>
          <button 
            onClick={() => onNavClick('contact')}
            className="bg-navy text-white px-10 py-5 rounded-full font-bold text-lg whitespace-nowrap hover:bg-navy/90 transition-all shadow-xl shadow-navy/20"
          >
            Get a Bundled Rate
          </button>
        </div>
      </div>
    </main>
  );
};
