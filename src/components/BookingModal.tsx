import React, { useState, useEffect } from 'react';
import { X, Check, Clock, Scissors, Coffee, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES, BARBERS, SHOP_INFO } from '../data/barberData';
import { ServiceItem, Barber } from '../types';
import { IMG_HERO_BG } from '../config/images';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
  initialBarber?: Barber | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialBarber
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [complimentaryDrink, setComplimentaryDrink] = useState<string>('Espresso Italiano');

  // Available dates (next 10 days)
  const availableDates = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = d.toLocaleDateString('es-ES', { weekday: 'short' });
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString('es-ES', { month: 'short' });
    const fullDateStr = d.toISOString().split('T')[0];
    return {
      dateStr: fullDateStr,
      displayDay: dayName.toUpperCase(),
      displayNumber: dayNumber,
      displayMonth: monthName.toUpperCase(),
      isSunday: d.getDay() === 0
    };
  });

  const timeSlots = [
    '10:00', '10:45', '11:30', '12:15', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const drinkOptions = [
    { id: 'espresso', label: 'Café Espresso Italiano Doble', icon: '☕' },
    { id: 'whisky', label: 'Whisky Escocés Single Malt', icon: '🥃' },
    { id: 'cerveza', label: 'Cerveza Artesanal Stout / IPA', icon: '🍺' },
    { id: 'agua', label: 'Agua Mineral con Rodaja de Cítricos', icon: '🍋' }
  ];

  // Sync initial selections
  useEffect(() => {
    if (initialService) {
      setSelectedServiceIds([initialService.id]);
    } else if (selectedServiceIds.length === 0) {
      setSelectedServiceIds([SERVICES[0].id]);
    }

    if (initialBarber) {
      setSelectedBarberId(initialBarber.id);
    }

    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].dateStr);
    }

    if (!selectedTime) {
      setSelectedTime('11:30');
    }
  }, [initialService, initialBarber]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((sId) => sId !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const selectedServices = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((acc, s) => acc + s.price, 0);
  const totalDuration = selectedServices.reduce((acc, s) => acc + s.duration, 0);

  const selectedBarber = BARBERS.find((b) => b.id === selectedBarberId) || {
    id: 'any',
    name: 'Cualquier Maestro Barbero Disponible',
    role: 'Asignación Óptima de Turno',
    specialty: 'Todos los especialistas certificados',
    image: IMG_HERO_BG
  };

  // Step 3: open WhatsApp directly with all booking info
  const handleOpenWhatsApp = () => {
    const servicesNames = selectedServices.map((s) => s.name).join(' + ');
    const msg =
      `*RESERVA DE CITA - ${SHOP_INFO.name.toUpperCase()}*\n\n` +
      `¡Hola! Quiero reservar una cita con los siguientes datos:\n\n` +
      `✂️ *Servicio(s):* ${servicesNames}\n` +
      `💈 *Barbero:* ${selectedBarber.name}\n` +
      `📅 *Fecha:* ${selectedDate}\n` +
      `🕐 *Hora:* ${selectedTime} hrs\n` +
      `⏱️ *Duración estimada:* ${totalDuration} min\n` +
      `🍸 *Bebida de cortesía:* ${complimentaryDrink}\n` +
      `💰 *Total Estimado:* $${totalPrice} USD\n\n` +
      `Por favor confirmar disponibilidad. ¡Gracias!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    onClose();
  };

  const generateCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//${SHOP_INFO.name}//Appointments//ES\nBEGIN:VEVENT\nSUMMARY:Cita ${SHOP_INFO.name} - ${selectedServices.map(s => s.name).join(', ')}\nDESCRIPTION:Barbero: ${selectedBarber.name}. Bebida: ${complimentaryDrink}\nLOCATION:${SHOP_INFO.fullAddress}\nDTSTART:${selectedDate.replace(/-/g, '')}T${selectedTime.replace(':', '')}00\nDURATION:PT${totalDuration}M\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Cita-${SHOP_INFO.name.replace(/\s+/g, '')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-2xl bg-[#121414] border border-[#2d2f30] shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#161818] px-6 py-4 border-b border-[#242526] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[#e9c176] font-bold text-lg uppercase tracking-wider">
              Reserva Tu Cita
            </span>
            <span className="text-[11px] text-[#a7a5a5] uppercase tracking-widest font-semibold">
              Paso {step} de 3
            </span>
          </div>
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#a7a5a5] hover:text-[#e9c176] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full h-1 bg-[#1a1b1c]">
          <div
            className="h-full bg-[#e9c176] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">

          {/* STEP 1: SELECT SERVICES */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#e3e2e2]">Elige tus Servicios</h3>
                <p className="text-xs text-[#a7a5a5] mt-1">
                  Puedes seleccionar múltiples servicios o paquetes completos.
                </p>
              </div>

              <div className="space-y-3">
                {SERVICES.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#1a1b1c] border-[#e9c176] shadow-[0_0_15px_rgba(233,193,118,0.1)]'
                          : 'bg-[#161818] border-[#242526] hover:border-[#383939]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 mt-0.5 border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#e9c176] border-[#e9c176] text-[#121414]'
                              : 'border-[#4e4639]'
                          }`}
                        >
                          {isSelected && <Check size={14} strokeWidth={3} />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif font-bold text-[#e3e2e2] text-base sm:text-lg">
                              {service.name}
                            </h4>
                            {service.popular && (
                              <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/40 font-bold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#d1c5b4] mt-0.5 max-w-md">
                            {service.description}
                          </p>
                          <span className="text-[11px] text-[#a7a5a5] mt-1 inline-flex items-center gap-1">
                            <Clock size={11} className="text-[#e9c176]" />
                            {service.duration} minutos
                          </span>
                        </div>
                      </div>
                      <div className="font-serif text-lg sm:text-xl font-bold text-[#e9c176] shrink-0">
                        ${service.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE BARBER */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#e3e2e2]">Selecciona tu Maestro Barbero</h3>
                <p className="text-xs text-[#a7a5a5] mt-1">
                  Todos nuestros barberos cuentan con más de 8 años de maestría certificada.
                </p>
              </div>

              {/* Any Barber Option */}
              <div
                onClick={() => setSelectedBarberId('any')}
                className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                  selectedBarberId === 'any'
                    ? 'bg-[#1a1b1c] border-[#e9c176]'
                    : 'bg-[#161818] border-[#242526]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#121414] border border-[#383939] flex items-center justify-center text-[#e9c176]">
                    <Scissors size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#e3e2e2]">Cualquier Barbero Disponible</h4>
                    <p className="text-xs text-[#a7a5a5]">Asignación al primer sillón libre según tu horario preferido.</p>
                  </div>
                </div>
                {selectedBarberId === 'any' && (
                  <CheckCircle2 size={18} className="text-[#e9c176]" />
                )}
              </div>

              {/* Individual Master Barbers */}
              <div className="space-y-3">
                {BARBERS.map((barber) => {
                  const isSelected = selectedBarberId === barber.id;
                  return (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarberId(barber.id)}
                      className={`p-4 border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#1a1b1c] border-[#e9c176]'
                          : 'bg-[#161818] border-[#242526] hover:border-[#383939]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={barber.image}
                          alt={barber.name}
                          className="w-14 h-14 object-cover border border-[#242526]"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif font-bold text-[#e3e2e2]">{barber.name}</h4>
                            <span className="text-[10px] text-[#e9c176] font-bold">★ {barber.rating}</span>
                          </div>
                          <p className="text-xs text-[#d1c5b4]">{barber.role}</p>
                          <span className="text-[11px] text-[#a7a5a5]">{barber.specialty}</span>
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 size={18} className="text-[#e9c176] shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DATE, TIME & DRINK */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#e3e2e2]">Fecha y Hora</h3>
                <p className="text-xs text-[#a7a5a5] mt-1">
                  Selecciona el momento ideal para tu visita al santuario.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#161818] border border-[#292a2a] p-4 text-xs space-y-2 rounded-sm">
                <div className="flex justify-between text-[#d1c5b4]">
                  <span>Servicio(s):</span>
                  <strong className="text-[#e3e2e2] text-right">{selectedServices.map(s => s.name).join(', ')}</strong>
                </div>
                <div className="flex justify-between text-[#d1c5b4]">
                  <span>Barbero:</span>
                  <strong className="text-[#e3e2e2]">{selectedBarber.name}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#242526] text-sm">
                  <span className="font-bold text-[#e3e2e2]">Total Estimado:</span>
                  <span className="font-serif font-bold text-lg text-[#e9c176]">${totalPrice} USD</span>
                </div>
              </div>

              {/* Date Picker */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#d1c5b4] block mb-2">
                  Día de la Cita
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates.slice(0, 5).map((d) => {
                    const isSelected = selectedDate === d.dateStr;
                    return (
                      <button
                        key={d.dateStr}
                        type="button"
                        onClick={() => setSelectedDate(d.dateStr)}
                        className={`p-2.5 border text-center transition-all flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-[#e9c176] border-[#e9c176] text-[#121414] font-bold'
                            : 'bg-[#161818] border-[#242526] text-[#d1c5b4] hover:border-[#383939]'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-semibold">{d.displayDay}</span>
                        <span className="text-lg font-serif font-bold">{d.displayNumber}</span>
                        <span className="text-[9px] uppercase">{d.displayMonth}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#d1c5b4] block mb-2">
                  Horario Disponible
                </span>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 text-center text-xs font-semibold uppercase tracking-wider border transition-all ${
                          isSelected
                            ? 'bg-[#e9c176] border-[#e9c176] text-[#121414] font-bold'
                            : 'bg-[#161818] border-[#242526] text-[#d1c5b4] hover:border-[#383939]'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Complimentary Drink */}
              <div className="pt-4 border-t border-[#242526]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e9c176] flex items-center gap-1.5 mb-3">
                  <Coffee size={14} />
                  <span>Bebida de Cortesía Incluida (Al llegar)</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {drinkOptions.map((drink) => (
                    <button
                      key={drink.id}
                      type="button"
                      onClick={() => setComplimentaryDrink(drink.label)}
                      className={`p-2.5 border text-left text-xs transition-all flex items-center gap-2 ${
                        complimentaryDrink === drink.label
                          ? 'bg-[#1a1b1c] border-[#e9c176] text-[#e9c176] font-semibold'
                          : 'bg-[#161818] border-[#242526] text-[#a7a5a5]'
                      }`}
                    >
                      <span className="text-base">{drink.icon}</span>
                      <span className="truncate">{drink.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA Info */}
              <div className="bg-[#0f1a12] border border-[#1e4a2a] p-4 rounded-sm flex items-start gap-3">
                <MessageSquare size={18} className="text-[#25d366] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#d1c5b4] leading-relaxed">
                    Al confirmar, abriremos <strong className="text-[#25d366]">WhatsApp</strong> automáticamente con todos los datos de tu cita pre-escritos. Solo envía el mensaje y listo.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#161818] px-6 py-4 border-t border-[#242526] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 bg-[#1a1b1c] text-[#a7a5a5] hover:text-white font-bold text-xs uppercase tracking-wider border border-[#292a2a] flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Atrás</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] uppercase text-[#a7a5a5] block">Total Estimado</span>
              <span className="font-serif font-bold text-[#e9c176] text-base">${totalPrice} USD</span>
            </div>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#f3d79b]"
              >
                <span>Continuar</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                id="confirm-whatsapp-booking-btn"
                onClick={handleOpenWhatsApp}
                className="px-6 py-2.5 bg-[#25d366] text-white font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#1da851] shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center gap-2 transition-all"
              >
                <MessageSquare size={15} />
                <span>Reservar por WhatsApp</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
