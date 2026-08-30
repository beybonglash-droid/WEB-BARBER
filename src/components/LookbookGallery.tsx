import React, { useState } from 'react';
import { Sparkles, Eye, Scissors, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, BARBERS } from '../data/barberData';
import { GalleryItem } from '../types';
import {
  IMG_GALERIA_1,
  IMG_GALERIA_2,
  IMG_GALERIA_3,
  IMG_LOOKBOOK_ANTES,
  IMG_LOOKBOOK_DESPUES
} from '../config/images';

interface LookbookGalleryProps {
  onOpenBooking: () => void;
}

export const LookbookGallery: React.FC<LookbookGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'Fade', 'Barba', 'Clásico', 'Ritual'];

  const filteredItems = activeCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="lookbook" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121414] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] sm:text-xs font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-2">
            GALERÍA DE ESTILOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] tracking-tight">
            El Arte de la Precisión
          </h2>
          <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#a7a5a5] max-w-lg mx-auto font-light">
            Observa el calibre de ejecución de nuestros maestros barberos en cada corte, perfilado y afeitado.
          </p>
        </div>

        {/* 3-Panel Artisan Composite (Direct Tribute to Image 2) */}
        <div className="mb-16 border border-[#292a2a] bg-[#161818] p-2 sm:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
            {/* Panel 1: Tijera y Peine */}
            <div className="relative group overflow-hidden h-72 sm:h-80 lg:h-96 border border-[#242526]">
              <img
                src={IMG_GALERIA_1}
                alt="Corte a Tijera Artesanal"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9c176] mb-1">
                  01. Esculpido
                </span>
                <h4 className="font-serif text-lg font-bold text-white">Tijera Clásica de Autor</h4>
                <p className="text-xs text-[#d1c5b4] mt-1 font-light opacity-90">
                  Control milimétrico respetando la caída natural y textura.
                </p>
              </div>
            </div>

            {/* Panel 2: Máquina y Degradado Fade */}
            <div className="relative group overflow-hidden h-72 sm:h-80 lg:h-96 border border-[#242526]">
              <img
                src={IMG_GALERIA_2}
                alt="Degradado Fade de Precisión"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9c176] mb-1">
                  02. Desvanecido
                </span>
                <h4 className="font-serif text-lg font-bold text-white">Skin Fade Milimétrico</h4>
                <p className="text-xs text-[#d1c5b4] mt-1 font-light opacity-90">
                  Transición uniforme de sombra sin líneas visibles.
                </p>
              </div>
            </div>

            {/* Panel 3: Navaja Libre y Toalla Caliente */}
            <div className="relative group overflow-hidden h-72 sm:h-80 lg:h-96 border border-[#242526]">
              <img
                src={IMG_GALERIA_3}
                alt="Afeitado a Navaja y Toalla Caliente"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9c176] mb-1">
                  03. Ritual
                </span>
                <h4 className="font-serif text-lg font-bold text-white">Afeitado Real a Navaja</h4>
                <p className="text-xs text-[#d1c5b4] mt-1 font-light opacity-90">
                  Toalla caliente con aromaterapia y hoja japonesa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Before & After Transformation Slider */}
        <div className="mb-16 bg-[#161818] border border-[#242526] p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e9c176]">
              INTERACTIVE TRANSFORMATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#e3e2e2] mt-1">
              Desliza para ver la Transformación
            </h3>
            <p className="text-xs sm:text-sm text-[#a7a5a5] mt-1">
              Arrastra el control deslizante para comparar el antes y después de nuestro servicio completo.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto h-72 sm:h-96 overflow-hidden select-none border border-[#343535]">
            {/* After Image (Right/Full background) */}
            <img
              src={IMG_LOOKBOOK_ANTES}
              alt="Después de la transformación"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 bg-[#121414]/90 border border-[#e9c176] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e9c176]">
              DESPUÉS: ELITE CUT & BEARD
            </div>

            {/* Before Image (Left clipped layer) */}
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={IMG_LOOKBOOK_DESPUES}
                alt="Antes del servicio"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 bg-[#121414]/90 border border-[#a7a5a5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d1c5b4]">
                ANTES
              </div>
            </div>

            {/* Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-[#e9c176] shadow-[0_0_10px_#e9c176] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121414] border-2 border-[#e9c176] flex items-center justify-center text-[#e9c176] shadow-lg">
                <Scissors size={14} className="rotate-90" />
              </div>
            </div>

            {/* Invisible Range Slider */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={handleSliderMove}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Control deslizante antes y después"
            />
          </div>
        </div>

        {/* Gallery Filterable Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-[#e9c176] text-[#121414]'
                  : 'bg-[#1a1b1c] text-[#a7a5a5] hover:text-white border border-[#292a2a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#161818] border border-[#242526] hover:border-[#e9c176] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-3 left-3 bg-[#121414]/90 border border-[#292a2a] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#e9c176]">
                  {item.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 bg-[#121414]/90 border border-[#e9c176] text-[#e9c176]">
                    <Eye size={20} />
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-serif text-lg font-bold text-[#e3e2e2] group-hover:text-[#e9c176] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-2 text-xs text-[#a7a5a5]">
                  <span>Barbero: <strong className="text-[#d1c5b4]">{item.barberName}</strong></span>
                  <span className="text-[#e9c176] font-semibold text-[11px] uppercase tracking-wider">Ver Detalle →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for item preview */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#161818] border border-[#e9c176] max-w-xl w-full p-6 relative animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-80 overflow-hidden mb-4 border border-[#292a2a]">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e9c176]">
                {selectedItem.category} • {selectedItem.barberName}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#e3e2e2] mt-1 mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#d1c5b4] leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#292a2a]">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-[#1a1b1c] text-[#a7a5a5] hover:text-white font-bold text-xs uppercase tracking-wider border border-[#292a2a]"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-wider hover:bg-[#f3d79b]"
                >
                  Quiero este Estilo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
