import React from 'react';
import { Star, MessageSquare, Calendar, ChevronDown } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';
import { IMG_HERO_BG } from '../config/images';

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
          src={IMG_HERO_BG}
          alt={`${SHOP_INFO.name} Sanctuary Interior`}
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
          <span>Santuario Abierto Hoy • {SHOP_INFO.hours.weekdays}</span>
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

        {/* Social Pills — Instagram, Facebook, TikTok with real icons + names */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">

          {/* Instagram */}
          <a
            id="hero-social-ig"
            href={SHOP_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en Instagram"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1b1c] border border-[#2d2f30] hover:border-[#e1306c] hover:bg-[#1c1113] transition-all duration-300 hover:scale-105 shadow-md"
          >
            <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#e1306c] transition-colors duration-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#e1306c] transition-colors duration-300">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            id="hero-social-fb"
            href={SHOP_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en Facebook"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1b1c] border border-[#2d2f30] hover:border-[#1877f2] hover:bg-[#111520] transition-all duration-300 hover:scale-105 shadow-md"
          >
            <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#1877f2] transition-colors duration-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#1877f2] transition-colors duration-300">Facebook</span>
          </a>

          {/* TikTok */}
          <a
            id="hero-social-tk"
            href={SHOP_INFO.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en TikTok"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1b1c] border border-[#2d2f30] hover:border-[#69c9d0] hover:bg-[#111616] transition-all duration-300 hover:scale-105 shadow-md"
          >
            <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#69c9d0] transition-colors duration-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#69c9d0] transition-colors duration-300">TikTok</span>
          </a>

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
