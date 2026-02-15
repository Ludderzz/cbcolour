import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Added for SEO
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import BookingWidget from './components/BookingWidget';
import { services } from './data/services';
import Portfolio from './components/Portfolio';

function App() {
  useEffect(() => {
    // Initializing the Fresha widget
    if (window.fresha && typeof window.fresha.init === 'function') {
      window.fresha.init();
    }
  }, []);

  const freshaUrl = "https://www.fresha.com/a/c-b-colour-portishead-down-road-aucrisv2/booking?menu=true&pId=2625444";

  return (
    <div className="relative font-sans bg-brand-cream">
      {/* Dynamic SEO Overrides */}
      <Helmet>
        <title>C.B COLOUR | Bespoke Blonde & Creative Colour Specialist Portishead</title>
        <meta name="description" content="Expert hair transformations in Portishead. Specialist in creative blondes, lived-in colour, and bespoke styling at C.B Colour Studio." />
        <meta property="og:title" content="C.B COLOUR | Bespoke Blonde Specialist" />
        <meta property="og:url" content="https://cbcolour.co.uk/" />
        <link rel="canonical" href="https://cbcolour.co.uk/" />
      </Helmet>

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
                <h2 className="text-4xl md:text-5xl mb-4 text-brand-black font-display">The Service Menu</h2>
                <p className="text-brand-slate text-lg">
                  Bespoke colour and creative styling in a private Portishead boutique. 
                  Every appointment begins with a detailed consultation.
                </p>
              </div>

              {/* View Full Menu with SVG Arrow */}
              <a 
                href={freshaUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-brand-black hover:text-brand-gold transition-all w-fit no-underline"
              >
                <span className="border-b-2 border-brand-gold pb-1">
                  View Full Menu on Fresha
                </span>
                <svg 
                  width="18" 
                  height="12" 
                  viewBox="0 0 18 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path 
                    d="M12 1L17 6M17 6L12 11M17 6H1" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Portfolio / Instagram Teaser Placeholder */}
       
      </main>

      {/* Map, Contact & Hours */}
      <Footer />

      {/* Floating Booking Trigger (Mobile & Desktop Tab) */}
      <BookingWidget />
    </div>
  );
}

export default App;