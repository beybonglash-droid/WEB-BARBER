import React, { useState } from 'react';
import { Clock, Check, Plus, Scissors, Sparkles, ChevronRight, LayoutGrid, List } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barba', label: 'Barba' },
    { id: 'paquetes', label: 'Paquetes Completos' },
    { id: 'rituales', label: 'Rituales Spa' }
  ];

  const filteredServices = selectedCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121414] relative">
      {/* Subtle Background Pattern */}
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header (Matching Image 3) */}
        <div className="text-center mb-12">
          <span className="text-[11px] sm:text-xs font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-2">
            NUESTRA ESPECIALIDAD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] tracking-tight">
            Servicios de Barbería
          </h2>
          {/* Gold Underline Divider */}
          <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#a7a5a5] max-w-lg mx-auto font-light">
            Técnicas ancestrales combinadas con la más alta precisión contemporánea. Cada servicio incluye asesoría de imagen y productos de autor.
          </p>
        </div>

        {/* Category Filters & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-4 border-b border-[#292a2a]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#e9c176] text-[#121414]'
                    : 'bg-[#1a1b1c] text-[#a7a5a5] hover:text-[#e3e2e2] hover:bg-[#242526] border border-[#292a2a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Desktop View Switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-[#1a1b1c] p-1 border border-[#292a2a]">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#e9c176] text-[#121414]' : 'text-[#a7a5a5] hover:text-white'}`}
              title="Vista de Lista Clásica"
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 transition-colors ${viewMode === 'grid' ? 'bg-[#e9c176] text-[#121414]' : 'text-[#a7a5a5] hover:text-white'}`}
              title="Vista de Tarjetas"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>

        {/* List View (Authentic to Image 3 Screenshot with Dotted Leader Lines) */}
        {viewMode === 'list' ? (
          <div className="space-y-8">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-item-${service.id}`}
                  className="group relative bg-[#161818]/60 p-5 sm:p-6 border border-[#242526] hover:border-[#e9c176]/50 transition-all duration-300"
                >
                  {/* Top Line: Service Name, Dotted Leader Line, Price */}
                  <div 
                    onClick={() => toggleExpand(service.id)}
                    className="flex items-baseline justify-between cursor-pointer gap-2 sm:gap-4 select-none"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e3e2e2] group-hover:text-[#e9c176] transition-colors">
                        {service.name}
                      </h3>
                      {service.popular && (
                        <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/40">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Dotted Leader Line */}
                    <div className="flex-1 mx-2 sm:mx-4 border-b border-dotted border-[#4e4639] self-end mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />

                    {/* Price */}
                    <div className="font-serif text-xl sm:text-2xl font-bold text-[#e3e2e2] text-right shrink-0 group-hover:text-[#e9c176] transition-colors">
                      ${service.price}
                    </div>
                  </div>

                  {/* Description matching screenshot */}
                  <p 
                    onClick={() => toggleExpand(service.id)}
                    className="text-sm sm:text-base text-[#d1c5b4] font-normal leading-relaxed mt-2.5 cursor-pointer max-w-2xl"
                  >
                    {service.description}
                  </p>

                  {/* Quick Meta Row */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#242526]/80 text-xs text-[#a7a5a5]">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#e9c176]" />
                        <span>{service.duration} min</span>
                      </span>
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="text-[#e9c176] hover:underline flex items-center gap-1 text-xs font-semibold"
                      >
                        <span>{isExpanded ? 'Ocultar detalles' : 'Ver qué incluye'}</span>
                        <ChevronRight size={13} className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    <button
                      id={`book-service-btn-${service.id}`}
                      onClick={() => onSelectServiceForBooking(service)}
                      className="px-3.5 py-1.5 bg-[#1f2020] border border-[#c5a059] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#121414] font-bold text-[11px] uppercase tracking-wider transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <Plus size={13} />
                      <span>Añadir a Cita</span>
                    </button>
                  </div>

                  {/* Expanded Inclusions Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#292a2a] bg-[#121414]/90 p-4 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-[#e9c176] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <Sparkles size={13} />
                            <span>Protocolo de Excelencia Incluido</span>
                          </h4>
                          <ul className="space-y-2 text-xs text-[#d1c5b4]">
                            {service.includes.map((inc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check size={13} className="text-[#e9c176] shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {service.imageUrl && (
                          <div className="relative h-32 md:h-full min-h-[110px] overflow-hidden border border-[#292a2a]">
                            <img
                              src={service.imageUrl}
                              alt={service.name}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                              <span className="text-[10px] uppercase tracking-widest text-[#e9c176] font-bold">
                                Acabado de Firma Elite
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Grid View for Laptop & Tablet */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#161818] border border-[#242526] hover:border-[#e9c176] transition-all duration-300 flex flex-col justify-between group"
              >
                {service.imageUrl && (
                  <div className="relative h-44 overflow-hidden border-b border-[#242526]">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#121414]/90 border border-[#e9c176] px-3 py-1 text-sm font-serif font-bold text-[#e9c176]">
                      ${service.price}
                    </div>
                  </div>
                )}
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#e3e2e2] group-hover:text-[#e9c176] transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#d1c5b4] line-clamp-3 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.includes.slice(0, 2).map((inc, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#a7a5a5]">
                          <Check size={11} className="text-[#e9c176] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#242526] flex items-center justify-between">
                    <span className="text-xs text-[#a7a5a5] flex items-center gap-1">
                      <Clock size={12} className="text-[#e9c176]" />
                      <span>{service.duration} min</span>
                    </span>

                    <button
                      onClick={() => onSelectServiceForBooking(service)}
                      className="px-4 py-2 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-wider hover:bg-[#f3d79b] transition-colors"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnote about bespoke styling */}
        <div className="mt-12 text-center p-6 bg-[#161818]/40 border border-[#242526]">
          <p className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
            ✦ Todos los servicios incluyen bebida de cortesía (Espresso Italiano, Whisky Escocés o Cerveza Artesanal) y toalla caliente de vapor orgánico.
          </p>
        </div>
      </div>
    </section>
  );
};
