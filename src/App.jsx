import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import BookingWidget from './components/BookingWidget';
import { services } from './data/services';

function App() {
  useEffect(() => {
    // Initializing the Fresha widget
    if (window.fresha && typeof window.fresha.init === 'function') {
      window.fresha.init();
    }
  }, []);

  const handleFullMenu = () => {
    if (window.fresha) {
      window.fresha.open({ businessId: "aucrisv2" });
    }
  };

  return (
    <div className="relative font-sans bg-brand-cream">
      {/* Persistent Navigation */}
      <Navbar />

      <main>
        {/* Landing Experience */}
        <Hero />

        {/* Dynamic Services Grid */}
        <section id="services" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl animate-reveal">
                <h2 className="text-4xl md:text-5xl mb-4 text-brand-black">The Service Menu</h2>
                <p className="text-brand-slate text-lg">
                  Bespoke colour and creative styling in a private Portishead boutique. 
                  Every appointment begins with a detailed consultation.
                </p>
              </div>
              <button 
                onClick={handleFullMenu}
                className="text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all w-fit"
              >
                View Full Menu on Fresha
              </button>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Instagram Teaser Placeholder */}
        <section className="bg-brand-black py-20 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 text-center">
             <h3 className="font-display text-3xl text-brand-gold italic">Follow the journey on Instagram</h3>
             <p className="text-brand-cream/60 mt-2">@cb_colour</p>
           </div>
        </section>
      </main>

      {/* Map, Contact & Hours */}
      <Footer />

      {/* Floating Booking Trigger (Mobile & Desktop Tab) */}
      <BookingWidget />
    </div>
  );
}

export default App;