import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mic, Sparkles } from 'lucide-react';

export const VoiceReceptionist = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-gold/20">
              <Sparkles size={16} />
              <span>24-HOUR RECEPTIONIST</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              Prefer to Talk? Call our <span className="text-gold">24 hour receptionist</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl">
              Our professional receptionist answers in 2 seconds, speaks naturally, and can book your appointment instantly — 24/7, 365 days a year. No hold times, no missed calls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <motion.a
                href="tel:02081234567"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl shadow-gold/20"
              >
                <Phone size={24} />
                <span>020 8123 4567</span>
              </motion.a>
              <div className="text-white/50 text-sm font-medium italic">
                "Instant booking, zero hold times"
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-8 animate-pulse-soft">
                <Mic size={40} className="text-navy" />
              </div>
              
              <div className="flex items-end gap-1 h-16 mb-6">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="waveform-bar"
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      opacity: Math.random() * 0.5 + 0.5
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gold font-bold tracking-widest text-xs uppercase mb-2">Voice Activity Detected</p>
                <p className="text-white/60 text-sm italic">"Hello! I'm the APS receptionist. How can I assist you today?"</p>
              </div>
            </div>
            
            {/* Decorative rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
