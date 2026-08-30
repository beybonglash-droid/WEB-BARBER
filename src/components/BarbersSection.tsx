import React from 'react';
import { Star, Award, Calendar, Scissors, CheckCircle2 } from 'lucide-react';
import { BARBERS } from '../data/barberData';
import { Barber } from '../types';

interface BarbersSectionProps {
  onSelectBarberForBooking: (barber: Barber) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({
  onSelectBarberForBooking
}) => {
  return (
    <section id="barberos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0e0f] relative border-t border-[#242526]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-2">
            MAESTRÍA & ARTESANÍA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] tracking-tight">
            Nuestros Maestros Barberos
          </h2>
          <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#a7a5a5] max-w-lg mx-auto font-light">
            Profesionales formados en academias internacionales con décadas acumuladas de destreza en tijera, navaja y visagismo masculino.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BARBERS.map((barber) => (
            <div
              key={barber.id}
              id={`barber-card-${barber.id}`}
              className="bg-[#161818] border border-[#242526] hover:border-[#e9c176] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Frame */}
              <div className="relative h-80 overflow-hidden border-b border-[#242526]">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161818] via-transparent to-transparent opacity-90" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-[#121414]/90 border border-[#e9c176] px-3 py-1 flex items-center gap-1.5 text-xs font-bold text-[#e9c176]">
                  <Star size={13} className="fill-[#e9c176]" />
                  <span>{barber.rating}</span>
                  <span className="text-[10px] text-[#a7a5a5]">({barber.reviewsCount})</span>
                </div>

                {/* Experience Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e9c176] bg-[#121414]/90 px-2.5 py-1 border border-[#292a2a]">
                    {barber.experience}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#e3e2e2] group-hover:text-[#e9c176] transition-colors">
                    {barber.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#e9c176] font-semibold mt-1 mb-3">
                    {barber.role}
                  </p>
                  
                  <p className="text-xs text-[#d1c5b4] leading-relaxed mb-4 font-light">
                    {barber.bio}
                  </p>

                  <div className="bg-[#121414] p-3 border border-[#242526] mb-5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#a7a5a5] block mb-1">
                      Especialidad
                    </span>
                    <span className="text-xs text-[#e3e2e2] font-medium flex items-center gap-1.5">
                      <Scissors size={13} className="text-[#e9c176] shrink-0" />
                      {barber.specialty}
                    </span>
                  </div>
                </div>

                {/* Booking Trigger */}
                <button
                  id={`book-with-barber-${barber.id}`}
                  onClick={() => onSelectBarberForBooking(barber)}
                  className="w-full py-3 bg-[#1f2020] border border-[#c5a059] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#121414] font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar size={14} />
                  <span>Reservar con {barber.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 bg-[#161818] border border-[#292a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-[#121414] border border-[#e9c176] flex items-center justify-center text-[#e9c176] shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#e3e2e2]">Garantía de Satisfacción 100%</h4>
              <p className="text-xs text-[#a7a5a5]">Si requieres cualquier ajuste menor dentro de las primeras 48 horas, lo realizamos sin costo adicional.</p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#e9c176] uppercase tracking-wider">
            <CheckCircle2 size={16} />
            <span>Calidad Certificada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
