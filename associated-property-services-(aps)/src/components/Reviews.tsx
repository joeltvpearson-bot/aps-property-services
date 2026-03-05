import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Reviews = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl text-navy mb-6">Client Success Stories</h1>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See why the UK's leading property managers trust APS.
          </p>
        </div>

        {/* Featured Review */}
        <div className="bg-navy rounded-[3rem] p-12 md:p-20 text-white mb-24 relative overflow-hidden">
          <Quote className="absolute top-10 right-10 text-gold/10 w-64 h-64 -rotate-12" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-1 text-gold mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic leading-relaxed mb-12">
              "Associated Property Services has been a game-changer for our portfolio. Their responsiveness is unmatched, and the standard of cleaning is consistently exceptional."
            </h2>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy font-black text-2xl">
                JD
              </div>
              <div>
                <h4 className="text-xl font-bold">James Davidson</h4>
                <p className="text-gold font-bold uppercase tracking-widest text-xs">Director, Prime Residential Ltd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            ...TESTIMONIALS,
            { id: '3', name: 'Robert Chen', role: 'Developer', content: 'The refurbishment cleaning was flawless. They removed every speck of dust and left the property ready for immediate viewing.', rating: 5 },
            { id: '4', name: 'Sarah Jenkins', role: 'Landlord', content: 'Quick turnaround on a property recovery clean. Saved me weeks of stress and got the property back on the market in 48 hours.', rating: 5 },
            { id: '5', name: 'David Miller', role: 'Estate Agent', content: 'Reliable, professional, and always available. APS is our go-to for all common area maintenance.', rating: 5 },
            { id: '6', name: 'Elena Rodriguez', role: 'Facility Manager', content: 'The digital assistant is brilliant. I can book a site visit at 11 PM and have it confirmed by morning.', rating: 5 }
          ].map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-1 text-gold mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-navy/70 text-sm italic mb-8 flex-1 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{review.name}</h4>
                  <p className="text-[10px] text-navy/40 font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Placeholder */}
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Case Studies</h2>
          <h3 className="text-4xl text-navy mb-12">Real Results for Real Clients</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Luxury Penthouse Recovery', area: 'Mayfair, London', desc: 'Restored a severely neglected 4-bedroom penthouse to showroom condition in 72 hours.', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800' },
              { title: 'Commercial Office Sparkle Clean', area: 'City of London', desc: 'Post-refurbishment deep clean of 15,000 sq ft office space for a leading tech firm.', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' }
            ].map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-[2rem] overflow-hidden mb-6 shadow-lg relative">
                  <img src={study.img} alt={study.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors"></div>
                </div>
                <div className="text-left">
                  <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2">{study.area}</p>
                  <h4 className="text-2xl font-display font-bold text-navy mb-3">{study.title}</h4>
                  <p className="text-navy/60 text-sm mb-4 leading-relaxed">{study.desc}</p>
                  <div className="flex items-center gap-2 text-navy font-bold text-sm">
                    View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Review Prompt */}
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-6" />
            <span className="text-xl font-bold text-navy">Reviews</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-navy mb-4">Are you a satisfied client?</h3>
          <p className="text-navy/60 mb-8 max-w-sm">Your feedback helps us maintain our high standards. Please take a moment to leave us a review on Google.</p>
          <button className="bg-white text-navy border border-navy/10 px-8 py-4 rounded-full font-bold hover:border-gold transition-all shadow-sm">
            Leave a Review
          </button>
        </div>
      </div>
    </main>
  );
};
