import React from 'react';
import { Scissors, Calendar, Clock } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-booking-bar"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#121414]/95 border-t border-[#292a2a] p-3 backdrop-blur-md shadow-[0_-4px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        {/* Solid Gold Button matching Image 3 screenshot */}
        <button
          id="sticky-reservar-ahora-btn"
          onClick={onOpenBooking}
          className="w-full py-3.5 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(233,193,118,0.3)] flex items-center justify-center gap-2"
        >
          <Scissors size={15} className="text-[#121414]" />
          <span>RESERVAR AHORA</span>
        </button>
      </div>
    </div>
  );
};
