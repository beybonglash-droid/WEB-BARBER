import React, { useState } from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Copy, Check, Map as MapIcon, Phone, Car, Coffee, Shield, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';
import { IMG_LOCAL_INTERIOR } from '../config/images';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  const [showInteractiveMap, setShowInteractiveMap] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [transportMode, setTransportMode] = useState<'car' | 'transit' | 'walk'>('car');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SHOP_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenExternalMap = (provider: 'google' | 'apple' | 'waze') => {
    const encoded = encodeURIComponent(SHOP_INFO.fullAddress);
    if (provider === 'google') {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
    } else if (provider === 'apple') {
      window.open(`https://maps.apple.com/?q=${encoded}`, '_blank');
    } else {
      window.open(`https://waze.com/ul?q=${encoded}`, '_blank');
    }
  };

  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121414] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header (Matching Image 3) */}
        <div className="text-center mb-12">
          <span className="text-[11px] sm:text-xs font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-2">
            ENCUÉNTRANOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] tracking-tight">
            Ubicación
          </h2>
          {/* Gold Underline Divider */}
          <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-4 mb-6" />
        </div>

        {/* Location Details Block (Matching Image 3) */}
        <div className="bg-[#161818] border border-[#242526] p-6 sm:p-8 mb-8">
          <div className="space-y-6">
            
            {/* Address Row */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#121414] border border-[#e9c176] flex items-center justify-center text-[#e9c176] shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-[#e3e2e2]">Dirección del Santuario</h3>
                <p className="text-sm sm:text-base text-[#d1c5b4] mt-0.5 font-light">
                  {SHOP_INFO.address}
                </p>
                <p className="text-xs sm:text-sm text-[#a7a5a5]">
                  {SHOP_INFO.cityState}
                </p>
                
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 mt-2 text-xs text-[#e9c176] hover:underline font-semibold"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? '¡Dirección copiada!' : 'Copiar dirección exacta'}</span>
                </button>
              </div>
            </div>

            {/* Schedule Row */}
            <div className="flex items-start gap-4 pt-6 border-t border-[#242526]">
              <div className="w-10 h-10 bg-[#121414] border border-[#e9c176] flex items-center justify-center text-[#e9c176] shrink-0 mt-0.5">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#e3e2e2]">Horario de Atención</h3>
                <p className="text-sm sm:text-base text-[#d1c5b4] mt-0.5 font-light">
                  {SHOP_INFO.hours.weekdays}
                </p>
                <p className="text-sm sm:text-base text-[#d1c5b4] font-light">
                  {SHOP_INFO.hours.sunday}
                </p>
              </div>
            </div>

            {/* Solid Gold "CÓMO LLEGAR" Button matching Image 3 */}
            <div className="pt-6 border-t border-[#242526] flex flex-col sm:flex-row items-center gap-3">
              <button
                id="como-llegar-main-btn"
                onClick={() => setShowInteractiveMap(!showInteractiveMap)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#f3d79b] shadow-[0_0_20px_rgba(233,193,118,0.25)] flex items-center justify-center gap-2"
              >
                <Navigation size={15} />
                <span>{showInteractiveMap ? 'OCULTAR MAPA' : 'CÓMO LLEGAR'}</span>
              </button>

              <button
                onClick={() => handleOpenExternalMap('google')}
                className="w-full sm:w-auto px-5 py-3 bg-[#1a1b1c] border border-[#2d2f30] text-[#e3e2e2] hover:border-[#e9c176] hover:text-[#e9c176] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink size={14} />
                <span>Abrir en Google Maps</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Map Visual Card (Matching Image 3 with "Mapa Interactivo" center badge) */}
        {!showInteractiveMap ? (
          <div 
            id="mapa-interactivo-card"
            onClick={() => setShowInteractiveMap(true)}
            className="relative h-64 sm:h-80 border border-[#292a2a] overflow-hidden cursor-pointer group"
          >
            {/* Background 3-barber montage matching Image 3 */}
            <img
              src={IMG_LOCAL_INTERIOR}
              alt="Elite Barber Shop Ubicación"
              className="w-full h-full object-cover filter brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

            {/* Centered "Mapa Interactivo" Card Badge matching Image 3 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#121414]/90 border border-[#2d2f30] group-hover:border-[#e9c176] px-8 py-5 flex flex-col items-center gap-2 shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <MapIcon size={28} className="text-[#e9c176]" />
                <span className="font-serif text-sm sm:text-base font-bold text-[#e3e2e2] tracking-wider uppercase">
                  Mapa Interactivo
                </span>
                <span className="text-[10px] text-[#a7a5a5] uppercase tracking-widest">
                  Toca para explorar ruta
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Rich Interactive Simulated Map Canvas */
          <div className="bg-[#161818] border border-[#e9c176] p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#292a2a]">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#e9c176]" />
                <h4 className="font-serif text-lg font-bold text-[#e3e2e2]">Navegador del Santuario</h4>
              </div>
              <button
                onClick={() => setShowInteractiveMap(false)}
                className="text-xs text-[#a7a5a5] hover:text-[#e9c176] underline uppercase tracking-wider"
              >
                Minimizar Mapa
              </button>
            </div>

            {/* Stylized Dark Obsidian Map Display */}
            <div className="relative h-72 sm:h-96 bg-[#0f0f0f] border border-[#292a2a] overflow-hidden">
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#383939_1px,transparent_1px),linear-gradient(to_bottom,#383939_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Simulated Roads */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Main Avenues */}
                <path d="M 0 150 Q 200 130 500 160 T 900 140" stroke="#2a2b2c" strokeWidth="18" fill="none" />
                <path d="M 0 150 Q 200 130 500 160 T 900 140" stroke="#e9c176" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
                
                <path d="M 300 0 L 320 400" stroke="#2a2b2c" strokeWidth="14" fill="none" />
                <path d="M 120 0 L 150 400" stroke="#222324" strokeWidth="8" fill="none" />
                <path d="M 500 0 L 480 400" stroke="#222324" strokeWidth="10" fill="none" />
                <path d="M 0 280 L 900 290" stroke="#222324" strokeWidth="8" fill="none" />
              </svg>

              {/* Street Names */}
              <span className="absolute top-[130px] left-6 text-[10px] uppercase font-bold tracking-widest text-[#a7a5a5]/60">
                Av. Paseo Central
              </span>
              <span className="absolute top-12 left-[330px] text-[10px] uppercase font-bold tracking-widest text-[#a7a5a5]/60 -rotate-90">
                Calle de la Tradición
              </span>

              {/* Pin for Elite Barber Shop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#e9c176] text-[#121414] flex items-center justify-center font-bold shadow-[0_0_30px_#e9c176] animate-pulse">
                    <MapPin size={24} className="fill-[#121414]" />
                  </div>
                  <span className="absolute -inset-2 rounded-full border border-[#e9c176] animate-ping opacity-75" />
                </div>
                <div className="bg-[#121414] border border-[#e9c176] px-3 py-1 text-xs font-bold text-[#e9c176] uppercase tracking-wider mt-2 shadow-2xl">
                  ELITE BARBER SHOP #123
                </div>
              </div>

              {/* Map Floating Route Switcher */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#121414]/95 border border-[#2d2f30] p-3 flex flex-wrap items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTransportMode('car')}
                    className={`px-2.5 py-1 text-xs font-bold uppercase transition-colors ${transportMode === 'car' ? 'bg-[#e9c176] text-[#121414]' : 'text-[#a7a5a5] hover:text-white'}`}
                  >
                    Auto (Valet Parking)
                  </button>
                  <button
                    onClick={() => setTransportMode('transit')}
                    className={`px-2.5 py-1 text-xs font-bold uppercase transition-colors ${transportMode === 'transit' ? 'bg-[#e9c176] text-[#121414]' : 'text-[#a7a5a5] hover:text-white'}`}
                  >
                    Metro / Metrobús
                  </button>
                </div>

                <div className="text-xs text-[#e9c176] font-semibold">
                  {transportMode === 'car' ? '🚗 8-15 min desde Reforma (Valet gratis)' : '🚇 Estación Bellas Artes (4 min a pie)'}
                </div>
              </div>
            </div>

            {/* Quick App Launchers */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <button
                onClick={() => handleOpenExternalMap('google')}
                className="py-2.5 bg-[#121414] border border-[#292a2a] hover:border-[#e9c176] text-xs font-semibold text-[#e3e2e2] flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={12} className="text-[#e9c176]" />
                <span>Google Maps</span>
              </button>
              <button
                onClick={() => handleOpenExternalMap('apple')}
                className="py-2.5 bg-[#121414] border border-[#292a2a] hover:border-[#e9c176] text-xs font-semibold text-[#e3e2e2] flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={12} className="text-[#e9c176]" />
                <span>Apple Maps</span>
              </button>
              <button
                onClick={() => handleOpenExternalMap('waze')}
                className="py-2.5 bg-[#121414] border border-[#292a2a] hover:border-[#e9c176] text-xs font-semibold text-[#e3e2e2] flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={12} className="text-[#e9c176]" />
                <span>Waze</span>
              </button>
            </div>
          </div>
        )}

        {/* Sanctuary Amenities Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SHOP_INFO.amenities.map((item, idx) => (
            <div key={idx} className="bg-[#161818] p-3.5 border border-[#242526] flex items-center gap-2.5 text-xs text-[#d1c5b4]">
              <Sparkles size={14} className="text-[#e9c176] shrink-0" />
              <span className="font-light">{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
