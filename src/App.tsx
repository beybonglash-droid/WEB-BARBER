/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { BarbersSection } from './components/BarbersSection';
import { LookbookGallery } from './components/LookbookGallery';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ServiceItem, Barber } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);
  const [preselectedBarber, setPreselectedBarber] = useState<Barber | null>(null);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Intersection observer to track active section while scrolling
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['inicio', 'servicios', 'barberos', 'lookbook', 'ubicacion'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleOpenBooking = () => {
    setPreselectedService(null);
    setPreselectedBarber(null);
    setBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setPreselectedService(service);
    setBookingModalOpen(true);
  };

  const handleSelectBarberForBooking = (barber: Barber) => {
    setPreselectedBarber(barber);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121414] text-[#e3e2e2] flex flex-col selection:bg-[#e9c176] selection:text-[#121414]">
      {/* Header & Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Sanctuary Banner (Image 3 Top Section) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
          onScrollToServices={() => scrollToSection('servicios')}
        />

        {/* Services & Price Menu with Dotted Leader Lines (Image 3 Middle Section) */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Call To Action Banner with Crossed Scissors (Image 3 CTA) */}
        <CallToActionBanner
          onOpenBooking={handleOpenBooking}
        />

        {/* Master Barbers Team Showcase */}
        <BarbersSection
          onSelectBarberForBooking={handleSelectBarberForBooking}
        />

        {/* Lookbook Gallery & Before/After Transformation Slider (Image 2 Montage) */}
        <LookbookGallery
          onOpenBooking={handleOpenBooking}
        />

        {/* Sanctuary Location, Hours & Interactive Map (Image 3 Bottom Section) */}
        <LocationSection
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer (Image 3 Copyright) */}
      <Footer
        onNavigate={scrollToSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Fixed Sticky Booking Bar for Mobile (Image 3 Bottom Sticky CTA) */}
      <StickyBottomBar
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive 4-Step Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={preselectedService}
        initialBarber={preselectedBarber}
      />

      {/* Direct Concierge WhatsApp Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
      />
    </div>
  );
}
