import React from 'react';

export default function ServiceCard({ service }) {
  return (
    <div className="group relative bg-white border border-brand-black/5 p-8 transition-all duration-500 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-gold/10 transition-colors duration-700" />

      <div className="relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-4 block">
          {service.category}
        </span>
        
        <h3 className="text-2xl mb-3 font-display">
          {service.title}
        </h3>
        
        <p className="text-sm text-brand-slate mb-8 leading-relaxed">
          {service.description}
        </p>

        <div className="pt-4 border-t border-brand-black/5">
          <span className="text-xs text-brand-slate/50 block uppercase tracking-tighter mb-1">Starting from</span>
          <span className="text-xl font-display text-brand-black">{service.price}</span>
        </div>
      </div>
    </div>
  );
}