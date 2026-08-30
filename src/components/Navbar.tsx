import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Phone, MessageSquare, Clock, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EliteLogo } from './EliteLogo';
import { SHOP_INFO } from '../data/barberData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'barberos', label: 'Barberos' },
    { id: 'lookbook', label: 'Lookbook' },
    { id: 'ubicacion', label: 'Ubicación' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#121414]/95 backdrop-blur-md border-b border-[#292a2a] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#0d0e0f]/90 via-[#121414]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Left: Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e3e2e2] hover:text-[#e9c176] transition-colors focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center on Mobile / Left on Desktop: Brand Logo */}
          <div className="flex items-center">
            {/* Mobile: Crest only */}
            <div className="md:hidden">
              <EliteLogo size="sm" variant="icon" onClick={() => handleLinkClick('inicio')} />
            </div>

            {/* Desktop: Full Logo */}
            <div className="hidden md:flex items-center">
              <EliteLogo size="md" variant="full" onClick={() => handleLinkClick('inicio')} />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all relative py-1 ${
                    isActive ? 'text-[#e9c176] font-semibold' : 'text-[#a7a5a5] hover:text-[#e3e2e2]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e9c176]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* WhatsApp Quick Link */}
            <button
              id="header-whatsapp-btn"
              onClick={onOpenWhatsApp}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#e3e2e2] bg-[#1a1b1c] border border-[#2d2f30] hover:border-[#e9c176] hover:text-[#e9c176] transition-all"
              title="Chatear por WhatsApp"
            >
              <MessageSquare size={14} className="text-[#e9c176]" />
              <span>WhatsApp</span>
            </button>

            {/* Scissors / Book Now Button */}
            <button
              id="header-book-cta-btn"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#f3d79b] hover:shadow-[0_0_20px_rgba(233,193,118,0.3)] active:scale-95"
            >
              <Scissors size={15} className="text-[#121414]" />
              <span className="hidden sm:inline">Reservar Cita</span>
              <span className="sm:hidden">Cita</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Smooth Backdrop */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            id="mobile-drawer-content"
            className="w-[85%] max-w-sm h-full bg-[#121414] border-r border-[#292a2a] p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#292a2a]">
                <EliteLogo size="sm" variant="full" onClick={() => handleLinkClick('inicio')} />
                <button
                  id="close-mobile-drawer-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a7a5a5] hover:text-[#e9c176] transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left py-3 px-4 text-sm font-medium tracking-[0.15em] uppercase transition-all flex items-center justify-between border-l-2 ${
                      activeSection === link.id
                        ? 'border-[#e9c176] bg-[#1a1b1c] text-[#e9c176] font-semibold'
                        : 'border-transparent text-[#d1c5b4] hover:bg-[#1a1b1c]/50 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && <Sparkles size={14} className="text-[#e9c176]" />}
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Info & Direct Actions */}
            <div className="pt-6 border-t border-[#292a2a] space-y-4">
              <div className="space-y-2 text-xs text-[#a7a5a5]">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#e9c176] shrink-0" />
                  <span>{SHOP_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-[#e9c176] shrink-0" />
                  <span>{SHOP_INFO.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#e9c176] shrink-0" />
                  <span>{SHOP_INFO.phone}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  id="drawer-book-now-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-[#f3d79b]"
                >
                  <Calendar size={15} />
                  <span>Reservar Cita Online</span>
                </button>

                <button
                  id="drawer-whatsapp-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsApp();
                  }}
                  className="w-full py-3 bg-[#1a1b1c] border border-[#2d2f30] text-[#e9c176] font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:border-[#e9c176]"
                >
                  <MessageSquare size={15} />
                  <span>Chatear por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
