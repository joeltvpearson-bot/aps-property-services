import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Clock, Truck, UserCheck, Star } from 'lucide-react';

export const About = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Our Story</h2>
            <h1 className="text-5xl md:text-6xl text-navy mb-8 leading-tight">A Decade of <span className="text-gold">Excellence</span> in Property Services.</h1>
            <p className="text-navy/60 text-lg mb-6 leading-relaxed">
              Founded over 10 years ago, Associated Property Services Ltd (APS) was built on a simple premise: property management should be seamless, professional, and reliable.
            </p>
            <p className="text-navy/60 text-lg mb-8 leading-relaxed">
              We recognized that landlords and managing agents needed a partner who didn't just clean, but cared for the long-term value of their assets. Today, we are a leading UK provider of specialist property services, known for our attention to detail and innovative approach.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-black text-navy mb-1">10+</p>
                <p className="text-xs font-bold text-navy/40 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-black text-navy mb-1">500+</p>
                <p className="text-xs font-bold text-navy/40 uppercase tracking-widest">Properties Managed</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-gold p-8 rounded-3xl text-navy hidden md:block max-w-[200px] shadow-xl">
              <Star className="mb-4" fill="currentColor" />
              <p className="font-bold text-lg leading-tight">Committed to the highest standards.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-navy rounded-[3rem] p-12 md:p-20 text-white mb-32">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl mb-6">What Drives Us Every Day</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Punctuality', desc: 'We respect your time. Our teams arrive on schedule, every time.', icon: Clock },
              { title: 'Communication', desc: 'Clear, proactive updates so you are never left wondering.', icon: UserCheck },
              { title: 'Compliance', desc: 'Strict adherence to health, safety, and industry regulations.', icon: ShieldCheck },
              { title: 'Minimal Disruption', desc: 'We work efficiently to minimize impact on tenants and residents.', icon: Sparkles }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">The APS Difference</h2>
            <h3 className="text-4xl text-navy">Why Choose Us?</h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-6 font-bold text-navy uppercase tracking-widest text-xs">Feature</th>
                  <th className="p-6 font-bold text-gold uppercase tracking-widest text-xs text-center">APS Services</th>
                  <th className="p-6 font-bold text-navy/30 uppercase tracking-widest text-xs text-center">Typical Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { feature: '24/7 Professional Receptionist', aps: true, other: false },
                  { feature: 'Uniformed & DBS Checked', aps: true, other: 'Sometimes' },
                  { feature: 'Branded Vehicles', aps: true, other: false },
                  { feature: 'Specification-Led Cleaning', aps: true, other: false },
                  { feature: '£10M Public Liability Insurance', aps: true, other: 'Limited' },
                  { feature: 'Reactive Maintenance Team', aps: true, other: false }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 text-sm font-medium text-navy">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.aps === true ? <CheckCircle2 className="text-gold mx-auto" size={20} /> : row.aps}
                    </td>
                    <td className="p-6 text-center text-sm text-navy/30">
                      {row.other === false ? <span className="text-red-400">✕</span> : row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

const Sparkles = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);
