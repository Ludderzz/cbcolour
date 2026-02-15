import React from 'react';
import heroImage from '../assets/hero3.jpg';

export default function Hero() {
  const handleBookNow = () => {
    if (window.fresha) {
      window.fresha.open({ businessId: "aucrisv2" });
    }
  };

  return (
    /* pt-24 on all screens, md:pt-32 for extra breathing room on PC */
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
          <button onClick={handleBookNow} className="btn-fresha cursor-pointer">
            Book Appointment
          </button>
          <a href="#services" className="px-8 py-4 border border-brand-black/20 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-brand-black hover:text-white transition-all flex items-center justify-center text-center">
            View Services
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full md:w-1/2 h-[65vh] md:h-[90vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-black/5 z-10" />
        <img 
          src={heroImage} 
          alt="C.B Colour Bespoke Hair" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/20 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>
    </section>
  );
}