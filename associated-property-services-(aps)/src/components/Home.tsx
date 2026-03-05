import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, ShieldCheck, Clock, Truck, UserCheck, Phone } from 'lucide-react';
import { SERVICES, TESTIMONIALS, STATS, TRUST_BADGES } from '../constants';
import { VoiceReceptionist } from './VoiceReceptionist';

export const Home = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000" 
            alt="London Skyline" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-gold/20">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span>INSTANT BOOKING AVAILABLE 24/7</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Your Property. <br />
              <span className="text-gold">Our Standards.</span> <br />
              Zero Missed Calls.
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Professional property cleaning and facilities management for over a decade. Our automated response system ensures your property is always inspection-ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavClick('contact')}
                className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-gold/20 hover:bg-gold-hover transition-all"
              >
                Get an Instant Quote
                <ArrowRight size={20} />
              </button>
              <a 
                href="tel:02081234567"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
              >
                Call our 24 hour receptionist
                <Phone size={20} className="text-gold" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-navy"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/60 font-medium">Trusted by 500+ property managers</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=1000" 
                alt="London Cityscape" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl border-gold/30 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-navy" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-tighter">Fully Insured</p>
                  <p className="text-[10px] text-navy/60">£10M Public Liability</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl border-gold/30 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <Clock className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-tighter">24/7 Response</p>
                  <p className="text-[10px] text-navy/60">Average 2hr arrival</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-display font-black text-navy mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-navy/40 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl text-navy mb-6">Comprehensive Property Solutions</h3>
            <p className="text-navy/60 max-w-2xl mx-auto text-lg">
              From routine maintenance to emergency recovery, we provide specification-led services tailored to your property's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-pointer"
                onClick={() => onNavClick('services')}
              >
                <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <service.icon className="text-navy group-hover:text-navy" size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-navy mb-4">{service.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">The APS Process</h2>
              <h3 className="text-4xl md:text-5xl text-navy mb-8 leading-tight">Simple, Transparent, and Professional.</h3>
              
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Book a Consultation', desc: 'Share your needs via our digital assistant or call our receptionist to arrange a site visit.' },
                  { step: '02', title: 'Phone Confirmation', desc: 'We confirm details and provide an initial onsite estimate if required.' },
                  { step: '03', title: 'Detailed Estimate', desc: 'Receive a comprehensive, specification-led quote for your approval.' },
                  { step: '04', title: 'Task Completed', desc: 'Our uniformed team completes the work to your exact specifications.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-display font-black text-gold/20 leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                      <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Equipment" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-navy p-10 rounded-3xl text-white hidden md:block max-w-xs">
                <p className="text-gold font-bold text-4xl mb-2">24/7</p>
                <p className="text-sm font-medium opacity-80">Reactive maintenance and emergency cleaning available around the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24-Hour Receptionist Banner */}
      <VoiceReceptionist />

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl text-navy mb-6">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-1 text-gold mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-navy/80 text-lg italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                <badge.icon size={32} className="text-navy" />
                <span className="text-xs font-bold uppercase tracking-widest text-navy">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2000" 
            alt="London City" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">Ready to Experience <span className="text-gold">Excellence?</span></h2>
          <p className="text-white/70 text-lg mb-12">
            Join hundreds of satisfied property managers across the UK. Get your instant quote or call our 24 hour receptionist now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavClick('contact')}
              className="bg-gold text-navy px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-gold/20 hover:bg-gold-hover transition-all"
            >
              Get an Instant Quote
            </button>
            <a 
              href="tel:02081234567"
              className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Call 020 8123 4567
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
