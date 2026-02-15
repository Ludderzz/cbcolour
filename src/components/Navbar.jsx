import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
// Import your logo
import logo from '../assets/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 nav-glass transition-all duration-500 ${
      scrolled ? 'nav-glass-scrolled shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border border-brand-accent/30 transition-transform duration-500 group-hover:scale-105">
            <img 
              src={logo} 
              alt="C.B Colour Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl tracking-tighter text-brand-black leading-none">
              C.B COLOUR
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">
              Portishead
            </span>
          </div>
        </a>

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
          <a href="https://instagram.com/cb_colour" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
            <Instagram size={18} className="text-brand-black" />
          </a>
          <button 
            onClick={() => window.fresha?.open({ businessId: "aucrisv2" })}
            className="btn-fresha !py-2.5 !px-8 text-[9px]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-accent/20 flex flex-col p-8 gap-8 animate-reveal md:hidden shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-display text-brand-black border-b border-brand-accent/10 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <button 
              onClick={() => {
                window.fresha?.open({ businessId: "aucrisv2" });
                setIsOpen(false);
              }}
              className="btn-fresha w-full !py-4"
            >
              Book Now
            </button>
            <a href="https://instagram.com/cb_colour" className="flex items-center justify-center gap-2 text-brand-slate py-2">
              <Instagram size={20} />
              <span className="text-xs uppercase tracking-widest font-bold">Follow @cb_colour</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}