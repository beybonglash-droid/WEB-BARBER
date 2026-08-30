import React from 'react';
import { Scissors } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenBooking: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  onOpenBooking
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0e0f] relative overflow-hidden border-y border-[#242526]">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(233,193,118,0.06)_0,_transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Crossed Scissors Icon matching Image 3 */}
        <div className="text-[#e9c176] mb-5 transform transition-transform hover:scale-110 duration-300">
          <Scissors size={38} className="transform -rotate-45" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] tracking-tight mb-4">
          ¿Listo para tu próximo corte?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#d1c5b4] font-light leading-relaxed mb-8 max-w-lg">
          Asegura tu lugar en nuestro sillón. La excelencia requiere tiempo.
        </p>

        {/* Gold Outlined Button (Matching Image 3) */}
        <button
          id="cta-reserve-spot-btn"
          onClick={onOpenBooking}
          className="min-w-[200px] sm:min-w-[240px] px-8 py-3.5 bg-transparent border-2 border-[#e9c176] text-[#e9c176] font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#e9c176] hover:text-[#121414] active:scale-95 shadow-[0_0_15px_rgba(233,193,118,0.15)]"
        >
          RESERVAR CITA
        </button>
      </div>
    </section>
  );
};
