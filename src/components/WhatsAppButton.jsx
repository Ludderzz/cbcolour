import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showPopout, setShowPopout] = useState(false);
  const phoneNumber = "447961016462";
  const message = "Hi Chloe! I'd like to chat about a hair appointment at C.B COLOUR.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show the "Need to chat?" popout after 2 seconds
    const timer = setTimeout(() => {
      setShowPopout(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex items-center group">
      {/* Pop-out Message */}
      <div className={`absolute left-16 bg-white text-brand-black py-3 px-5 rounded-2xl rounded-bl-none shadow-2xl border border-brand-accent/10 transition-all duration-500 flex items-center gap-3 whitespace-nowrap ${
        showPopout ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
      }`}>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Chloe is online</span>
          <span className="text-sm font-medium">Need to chat?</span>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            setShowPopout(false);
          }}
          className="p-1 hover:bg-brand-cream rounded-full transition-colors"
        >
          <X size={14} className="text-brand-slate" />
        </button>
      </div>

      {/* The Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        
        {/* Subtle Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </a>
    </div>
  );
}