import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Consultation', href: '#consultation' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-display text-2xl tracking-tighter text-brand-black">C.B COLOUR</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold -mt-1">Portishead</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-bold text-brand-black hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={18} className="text-brand-black hover:text-brand-gold transition-colors" />
          </a>
          <button 
            onClick={() => window.fresha?.open({ businessId: "aucrisv2" })}
            className="btn-fresha !py-2 !px-6 text-[10px]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-black/5 flex flex-col p-8 gap-6 animate-reveal md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-display text-brand-black"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              window.fresha?.open({ businessId: "aucrisv2" });
              setIsOpen(false);
            }}
            className="btn-fresha w-full"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}