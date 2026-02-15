import React from 'react';
import { Calendar } from 'lucide-react';

export default function BookingWidget() {
  
  // This function triggers the Fresha overlay
  const handleBooking = () => {
    if (window.fresha) {
      window.fresha.open({
        businessId: "aucrisv2", // Chloe's Business ID
      });
    } else {
      // Fallback if the script fails to load
      window.open('https://www.fresha.com/a/c-b-colour-portishead-down-road-aucrisv2/booking', '_blank');
    }
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON (Mobile Only)
        Stays in the bottom right corner for easy thumb-access
      */}
      <button
        onClick={handleBooking}
        className="md:hidden fixed bottom-6 right-6 z-[60] bg-brand-gold text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce-subtle"
        aria-label="Book Appointment"
      >
        <Calendar size={24} />
      </button>

      {/* SIDE TAB (Desktop Only)
        A subtle "Book Now" tab that sits on the right side of the screen
      */}
      <button
        onClick={handleBooking}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-brand-black text-white px-4 py-8 rounded-l-xl flex-col items-center gap-4 hover:bg-brand-gold transition-all duration-300 group shadow-xl"
      >
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.3em] text-[10px] font-bold">
          Book Appointment
        </span>
        <Calendar size={18} className="group-hover:scale-110 transition-transform" />
      </button>
    </>
  );
}