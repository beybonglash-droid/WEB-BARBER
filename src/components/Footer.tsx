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
              {/* Instagram */}
              <a
                href={SHOP_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-[#161818] border border-[#2d2f30] hover:border-[#e1306c] hover:bg-[#1c1113] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#e1306c] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#e1306c] transition-colors duration-300">Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href={SHOP_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-[#161818] border border-[#2d2f30] hover:border-[#1877f2] hover:bg-[#111520] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#1877f2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#1877f2] transition-colors duration-300">Facebook</span>
              </a>

              {/* TikTok */}
              <a
                href={SHOP_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-[#161818] border border-[#2d2f30] hover:border-[#69c9d0] hover:bg-[#111616] transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-[#a7a5a5] group-hover:text-[#69c9d0] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a7a5a5] group-hover:text-[#69c9d0] transition-colors duration-300">TikTok</span>
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
