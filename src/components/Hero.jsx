import React from 'react';

export default function Hero() {
  const handleBookNow = () => {
    // We will link this to the Fresha widget later
    if (window.fresha) {
      window.fresha.open({ businessId: "aucrisv2" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-brand-cream overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 px-8 md:px-20 py-16 z-10 animate-reveal">
        <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
          Portishead's Blonde Specialist
        </span>
        <h1 className="text-5xl md:text-7xl mb-6">
          Bespoke Colour. <br />
          <span className="italic">Creative Flair.</span>
        </h1>
        <p className="max-w-md text-lg mb-10 text-brand-slate">
          Transforming hair into vibrant works of art. Specialist in creative blondes 
          and tailored techniques in the heart of Redcliffe Bay.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={handleBookNow} className="btn-fresha">
            Book Appointment
          </button>
          <a href="#services" className="px-8 py-3 border border-brand-black/20 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-brand-black hover:text-white transition-all flex items-center justify-center">
            View Services
          </a>
        </div>
      </div>

      {/* Hero Image / Aesthetic Placeholder */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh] relative">
        <div className="absolute inset-0 bg-brand-black/5 z-10" /> {/* Subtle Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1200" 
          alt="Luxury Hair Colouring" 
          className="w-full h-full object-cover"
        />
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/20 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>
    </section>
  );
}