import React from 'react';
import heroImage from '../assets/hero7.jpeg';

export default function Hero() {
  // Same direct link used in the Navbar and Footer for consistency
  const freshaUrl = "https://www.fresha.com/a/c-b-colour-portishead-down-road-aucrisv2/booking?menu=true&pId=2625444";

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-brand-cream overflow-hidden pt-24 md:pt-32">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 px-8 md:px-20 py-16 z-10 animate-reveal">
        <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-center md:text-left">
          Portishead's Blonde Specialist
        </span>
        <h1 className="text-5xl md:text-7xl mb-6 font-display leading-tight text-brand-black text-center md:text-left">
          Bespoke Colour. <br />
          <span className="italic">Creative Flair.</span>
        </h1>
        <p className="max-w-md text-lg mb-10 text-brand-slate text-center md:text-left mx-auto md:mx-0 leading-relaxed">
          Transforming hair into vibrant works of art. Specialist in creative blondes 
          and tailored techniques in the heart of Redcliffe Bay.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Main Booking Button */}
          <a 
            href={freshaUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-fresha inline-block text-center no-underline cursor-pointer"
          >
            Book Appointment
          </a>

          {/* Secondary Services Button */}
          <a 
            href="#services" 
            className="px-8 py-4 border border-brand-accent rounded-full uppercase tracking-widest text-[10px] font-bold text-brand-black hover:bg-brand-black hover:text-brand-cream transition-all duration-500 flex items-center justify-center text-center"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
{/* Hero Image Section */}
<div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12 group">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20">
    <div className="absolute inset-0 bg-brand-black/5 z-10 transition-opacity duration-700 group-hover:opacity-0" />
    
    <img 
      src={heroImage} 
      alt="C.B Colour Bespoke Hair" 
      /* h-auto and max-h ensure the full image fits 
         without being forced into a tall, narrow box 
      */
      className="w-full h-auto max-h-[70vh] md:max-h-[85vh] object-contain transition-transform duration-[3000ms] scale-100 group-hover:scale-105"
    />

    {/* Subtle Decorative Element */}
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl pointer-events-none" />
  </div>
</div>
    </section>
  );
}