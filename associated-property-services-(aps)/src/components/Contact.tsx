import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Bot, Sparkles, ChevronDown, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <main className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-navy mb-6">Get in Touch</h1>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            Whether you need a routine clean or an emergency repair, our automated systems are ready to assist you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 text-gold">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Call Us</h3>
            <p className="text-navy/50 text-sm mb-4">Call our 24 hour receptionist instantly.</p>
            <a href="tel:02081234567" className="text-navy font-black text-xl hover:text-gold transition-colors">020 8123 4567</a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 text-navy">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Email Us</h3>
            <p className="text-navy/50 text-sm mb-4">We respond to all enquiries within 1 hour.</p>
            <a href="mailto:info@aps-property.co.uk" className="text-navy font-black text-xl hover:text-gold transition-colors">info@aps-property.co.uk</a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 text-navy">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Visit Us</h3>
            <p className="text-navy/50 text-sm mb-4">Our central London headquarters.</p>
            <p className="text-navy font-black text-xl">London, SE1 1AA</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Instant Booking Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border-navy/10 rounded-[3rem] overflow-hidden flex flex-col h-[600px]"
          >
            <div className="bg-navy p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Bot size={28} className="text-navy" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">APS Instant Booking Hub</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs opacity-70 uppercase tracking-widest font-bold">Instant Response Active</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Our digital receptionist qualifies your needs, checks availability, and books your appointment — all automatically, 24/7.</p>
            </div>
            
            <div className="flex-1 bg-slate-50 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 text-navy">
                <Sparkles size={40} className="text-gold" />
              </div>
              <h4 className="text-2xl font-bold text-navy mb-4">Ready to start?</h4>
              <p className="text-navy/60 mb-8 max-w-sm">Use the chat widget in the bottom right corner of your screen to get an instant quote and book your service now.</p>
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <button className="bg-navy text-white py-4 rounded-2xl font-bold hover:bg-navy/90 transition-all">Open Chat Assistant</button>
                <button className="bg-white text-navy border border-navy/10 py-4 rounded-2xl font-bold hover:border-gold transition-all">View Pricing Guide</button>
              </div>
            </div>
          </motion.div>

          {/* Traditional Form & FAQ */}
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-navy mb-8">Traditional Enquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Service Needed</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none appearance-none">
                    <option>Common Area Cleaning</option>
                    <option>Property Recovery</option>
                    <option>Reactive Maintenance</option>
                    <option>Refurbishment Cleaning</option>
                    <option>Re-letting Preparation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Message</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none min-h-[120px]" placeholder="Tell us about your property..."></textarea>
                </div>
                <button className="w-full bg-gold text-navy py-5 rounded-2xl font-bold text-lg hover:bg-gold-hover transition-all flex items-center justify-center gap-3">
                  Send Enquiry
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-display font-bold text-navy mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: 'What areas do you cover?', a: 'We provide comprehensive property services across Greater London and the surrounding Home Counties.' },
                  { q: 'How quickly can you start?', a: 'For reactive maintenance, we aim for a 2-hour response. For cleaning services, we can typically start within 24-48 hours of estimate approval.' },
                  { q: 'Are your teams insured?', a: 'Yes, we carry £10M Public Liability Insurance and all our staff are fully insured and DBS checked.' },
                  { q: 'What is your minimum booking?', a: 'To ensure the highest standard of service, we have a minimum booking of 3 hours per visit.' }
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 group cursor-pointer hover:border-gold transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-navy text-sm">{faq.q}</h4>
                      <ChevronDown size={18} className="text-navy/30 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="mt-4 text-navy/60 text-sm leading-relaxed hidden group-hover:block">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
