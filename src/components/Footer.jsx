import React from 'react';
import { Facebook, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  // Direct Fresha link for consistency
  const freshaUrl = "https://www.fresha.com/a/c-b-colour-portishead-down-road-aucrisv2/booking?menu=true&pId=2625444";

  const openingHours = [
    { day: 'Monday', time: '10:00 AM - 7:00 PM' },
    { day: 'Tuesday', time: 'Closed' },
    { day: 'Wednesday', time: 'Closed' },
    { day: 'Thursday', time: '10:00 AM - 8:00 PM' },
    { day: 'Friday', time: '10:00 AM - 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <footer id="location" className="bg-brand-black text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Column 1: Visit & Map */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h3 className="text-2xl font-display uppercase tracking-widest text-brand-gold">Visit the Studio</h3>
          <div className="space-y-4 opacity-80 text-sm tracking-wide">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <p>Down Rd, Redcliffe Bay<br />Portishead, Bristol BS20 8DG</p>
            </div>
          </div>
          
          {/* Map Container: Grayscale on Desktop for that luxury feel */}
          <div className="mt-4 w-full h-72 md:h-64 rounded-sm overflow-hidden border border-brand-cream/10 grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.265738641957!2d-2.7845!3d51.4885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871ed0736e6f0e5%3A0x6a1a1a1a1a1a1a1a!2sDown%20Rd%2C%20Portishead%2C%20Bristol%20BS20!5e0!3m2!1sen!2suk!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="C.B Colour Location"
            ></iframe>  
          </div>
        </div>

        {/* Column 2: Opening Hours */}
        <div className="flex flex-col gap-6 order-3 md:order-2">
          <h3 className="text-2xl font-display uppercase tracking-widest text-brand-gold">Studio Hours</h3>
          <div className="space-y-3">
            {openingHours.map((item) => (
              <div key={item.day} className="flex justify-between border-b border-brand-cream/10 pb-2 text-sm">
                <span className={item.time === 'Closed' ? 'opacity-40' : 'opacity-90'}>{item.day}</span>
                <span className={`font-mono text-xs ${item.time === 'Closed' ? 'text-red-400/50' : 'text-brand-gold'}`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Brand & Social */}
        <div className="flex flex-col gap-6 text-center md:text-right md:items-end order-1 md:order-3">
          <div className="flex flex-col md:items-end">
            <span className="font-display text-4xl tracking-tighter text-white">C.B COLOUR</span>
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Bespoke Hair</span>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61576895611799" target="_blank" rel="noreferrer" className="flex items-center gap-3 justify-center md:justify-end group">
              <Facebook size={18} className="text-brand-gold transition-transform group-hover:scale-110" />
              <span className="text-sm opacity-80 hover:text-brand-gold transition-colors">C.B Colour Portishead</span>
            </a>
            <a href="https://www.instagram.com/cb_colour/" target="_blank" rel="noreferrer" className="flex items-center gap-3 justify-center md:justify-end group">
              <Instagram size={18} className="text-brand-gold transition-transform group-hover:scale-110" />
              <span className="text-sm opacity-80 hover:text-brand-gold transition-colors">@cb_colour</span>
            </a>
          </div>

          {/* Book via Fresha Link */}
          <a 
            href={freshaUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-fresha !bg-brand-cream !text-brand-black hover:!bg-brand-gold w-full md:w-auto mt-4 inline-block text-center no-underline"
          >
            Book via Fresha
          </a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-brand-cream/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2026 C.B Colour • Portishead</p>
      </div>
    </footer>
  );
}