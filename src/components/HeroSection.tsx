import React from 'react';
import { Star, MessageSquare, Calendar, ChevronDown, CheckCircle2, Award, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
  onScrollToServices
}) => {
  return (
    <section 
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with Dark Moody Barbershop Interior & Amber Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85"
          alt="Elite Barber Shop Sanctuary Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1] scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Layered Obsidian & Brass Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/70 to-[#0d0e0f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Live Status & Star Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a1b1c]/90 border border-[#2d2f30] text-[#e9c176] text-xs font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Santuario Abierto Hoy • 10:00 - 20:00</span>
        </div>

        {/* Star Icon in Golden Circle (Faithful to Image 3) */}
        <div className="w-14 h-14 rounded-full bg-[#1a1b1c] border-2 border-[#e9c176] flex items-center justify-center text-[#e9c176] mb-6 shadow-[0_0_20px_rgba(233,193,118,0.25)]">
          <Star size={24} className="fill-[#e9c176]" />
        </div>

        {/* Main Title (Playfair Display) */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#e3e2e2] tracking-tight leading-[1.15] mb-5 drop-shadow-md">
          {SHOP_INFO.tagline}
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#d1c5b4] font-light leading-relaxed mb-8 tracking-wide">
          {SHOP_INFO.subtitle}
        </p>

        {/* Primary Call to Actions */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Main WhatsApp Button (Matching Image 3) */}
          <button
            id="hero-whatsapp-cta-btn"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto min-w-[260px] px-8 py-4 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#f3d79b] hover:shadow-[0_0_25px_rgba(233,193,118,0.4)] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <MessageSquare size={16} className="text-[#121414]" />
            <span>RESERVAR POR WHATSAPP</span>
          </button>

          {/* Secondary Full Booking Wizard */}
          <button
            id="hero-book-online-cta-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-w-[220px] px-7 py-4 bg-transparent border border-[#e9c176] text-[#e9c176] font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#e9c176] hover:text-[#121414] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <Calendar size={16} />
            <span>RESERVAR CITA ONLINE</span>
          </button>
        </div>

        {/* Social Pills (IG, FB, TK) - Exact Match with Image 3 */}
        <div className="flex items-center gap-4 mb-12">
          {[
            { id: 'ig', label: 'IG', name: 'Instagram', url: SHOP_INFO.social.instagram },
            { id: 'fb', label: 'FB', name: 'Facebook', url: SHOP_INFO.social.facebook },
            { id: 'tk', label: 'TK', name: 'TikTok', url: SHOP_INFO.social.tiktok }
          ].map((social) => (
            <a
              key={social.id}
              id={`hero-social-${social.id}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#1a1b1c] border border-[#2d2f30] text-[#e3e2e2] hover:text-[#e9c176] hover:border-[#e9c176] flex items-center justify-center text-xs font-bold tracking-wider transition-all duration-300 hover:scale-110 shadow-md"
              title={`Síguenos en ${social.name}`}
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Value Highlights Grid on Tablet/Desktop */}
        <div className="w-full max-w-3xl pt-8 border-t border-[#292a2a]/60 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-[#e9c176] text-xl sm:text-2xl font-bold">12+</span>
            <span className="text-[10px] sm:text-xs text-[#a7a5a5] uppercase tracking-widest mt-1">Años de Tradición</span>
          </div>
          <div className="flex flex-col items-center border-x border-[#292a2a]/60">
            <span className="font-serif text-[#e9c176] text-xl sm:text-2xl font-bold">5.0 ★</span>
            <span className="text-[10px] sm:text-xs text-[#a7a5a5] uppercase tracking-widest mt-1">Calificación de Clientes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-[#e9c176] text-xl sm:text-2xl font-bold">100%</span>
            <span className="text-[10px] sm:text-xs text-[#a7a5a5] uppercase tracking-widest mt-1">Garantía de Estilo</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          id="scroll-to-services-btn"
          onClick={onScrollToServices}
          className="mt-10 p-2 text-[#a7a5a5] hover:text-[#e9c176] transition-colors animate-bounce"
          aria-label="Ver servicios de barbería"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};
