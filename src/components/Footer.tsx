import React, { useState } from 'react';
import { EliteLogo } from './EliteLogo';
import { SHOP_INFO } from '../data/barberData';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [emailSubscribed, setEmailSubscribed] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#0d0e0f] border-t border-[#242526] pt-16 pb-24 md:pb-16 px-4 sm:px-6 lg:px-8 text-[#a7a5a5]">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#242526]">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <EliteLogo size="md" variant="full" onClick={() => onNavigate('inicio')} />
            <p className="text-xs sm:text-sm text-[#d1c5b4] max-w-md leading-relaxed font-light mt-3">
              Un santuario concebido para el caballero exigente. Preservamos las técnicas milenarias del afeitado tradicional a navaja y el corte de precisión con los más altos estándares contemporáneos.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#161818] border border-[#2d2f30] hover:border-[#e9c176] hover:text-[#e9c176] flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={SHOP_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#161818] border border-[#2d2f30] hover:border-[#e9c176] hover:text-[#e9c176] flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={SHOP_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#161818] border border-[#2d2f30] hover:border-[#e9c176] hover:text-[#e9c176] flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#e3e2e2] uppercase tracking-widest">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#e9c176] transition-colors"
                >
                  Inicio & Santuario
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-[#e9c176] transition-colors"
                >
                  Servicios & Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('barberos')}
                  className="hover:text-[#e9c176] transition-colors"
                >
                  Maestros Barberos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lookbook')}
                  className="hover:text-[#e9c176] transition-colors"
                >
                  Lookbook & Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ubicacion')}
                  className="hover:text-[#e9c176] transition-colors"
                >
                  Ubicación & Horarios
                </button>
              </li>
            </ul>
          </div>

          {/* VIP Gentlemen's Club Newsletter */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#e3e2e2] uppercase tracking-widest">
              Club de Caballeros
            </h4>
            <p className="text-xs text-[#d1c5b4] leading-relaxed">
              Recibe invitaciones a catas privadas de whisky y acceso prioritario a agenda de fin de semana.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-[#161818] border border-[#2d2f30] focus:border-[#e9c176] text-[#e3e2e2] px-3 py-2 text-xs outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#e9c176] text-[#121414] px-3 py-2 font-bold hover:bg-[#f3d79b] transition-colors"
                  aria-label="Suscribirse"
                >
                  <Send size={14} />
                </button>
              </div>
              {emailSubscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check size={12} />
                  <span>¡Bienvenido al Club Elite!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Copyright & Slogan matching Image 3 screenshot */}
        <div className="pt-8 text-center space-y-2">
          <div className="font-serif text-base sm:text-lg font-bold text-[#e3e2e2] tracking-[0.2em] uppercase">
            {SHOP_INFO.name}
          </div>
          <p className="text-xs text-[#a7a5a5] uppercase tracking-widest font-light">
            © 2024 ELITE BARBER SHOP. CRAFTED FOR THE MODERN GENTLEMAN.
          </p>
        </div>
      </div>
    </footer>
  );
};
