import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { SHOP_INFO, SERVICES } from '../data/barberData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('booking');
  const [userName, setUserName] = useState<string>('');
  const [preferredService, setPreferredService] = useState<string>(SERVICES[0].name);
  const [customMessage, setCustomMessage] = useState<string>('');

  if (!isOpen) return null;

  const topics = [
    { id: 'booking', label: '✂️ Agendar Cita Rápida' },
    { id: 'custom', label: '💈 Consulta de Estilo / Asesoría' },
    { id: 'events', label: '🍸 Eventos Privados / Paquete Novios' }
  ];

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = '';
    const nameStr = userName.trim() ? `Mi nombre es ${userName}.` : '';

    if (selectedTopic === 'booking') {
      text = `Hola ${SHOP_INFO.name}! ${nameStr} Quisiera agendar una cita para el servicio de *${preferredService}*. ¿Qué horarios tienen disponibles hoy o mañana?`;
    } else if (selectedTopic === 'events') {
      text = `Hola ${SHOP_INFO.name}! ${nameStr} Me gustaría solicitar información sobre paquetes de boda / eventos VIP en el santuario.`;
    } else {
      text = `Hola ${SHOP_INFO.name}! ${nameStr} ${customMessage || 'Deseo consultar sobre disponibilidad y servicios.'}`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div
      id="whatsapp-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="whatsapp-modal-container"
        className="relative w-full max-w-lg bg-[#121414] border border-[#2d2f30] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#161818] p-5 border-b border-[#242526] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#e3e2e2]">Concierge WhatsApp</h3>
              <p className="text-xs text-[#a7a5a5]">Atención directa y reservaciones instantáneas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#a7a5a5] hover:text-[#e9c176]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLaunchWhatsApp} className="p-6 space-y-5">
          {/* Topic selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#d1c5b4] mb-2">
              Motivo de tu Consulta
            </label>
            <div className="grid grid-cols-1 gap-2">
              {topics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTopic(t.id)}
                  className={`p-3 text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selectedTopic === t.id
                      ? 'bg-[#1a1b1c] border-[#e9c176] text-[#e9c176]'
                      : 'bg-[#161818] border-[#242526] text-[#a7a5a5]'
                  }`}
                >
                  <span>{t.label}</span>
                  {selectedTopic === t.id && <CheckCircle2 size={16} className="text-[#e9c176]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#a7a5a5] mb-1">
              Tu Nombre (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej. Carlos Mendoza"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-[#161818] border-b border-[#383939] focus:border-[#e9c176] text-[#e3e2e2] px-3 py-2 text-sm outline-none transition-colors"
            />
          </div>

          {/* Service Selector if booking */}
          {selectedTopic === 'booking' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a7a5a5] mb-1">
                Servicio Deseado
              </label>
              <select
                value={preferredService}
                onChange={(e) => setPreferredService(e.target.value)}
                className="w-full bg-[#161818] border border-[#2d2f30] text-[#e3e2e2] px-3 py-2.5 text-xs font-medium outline-none focus:border-[#e9c176]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name} className="bg-[#121414] text-white">
                    {s.name} (${s.price} USD - {s.duration} min)
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedTopic !== 'booking' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a7a5a5] mb-1">
                Mensaje personalizado
              </label>
              <textarea
                rows={3}
                placeholder="Escribe aquí tu consulta..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full bg-[#161818] border border-[#2d2f30] focus:border-[#e9c176] text-[#e3e2e2] p-3 text-xs outline-none"
              />
            </div>
          )}

          {/* WhatsApp Direct Action Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#e9c176] text-[#121414] font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#f3d79b] shadow-[0_0_20px_rgba(233,193,118,0.25)] flex items-center justify-center gap-2"
          >
            <Send size={16} />
            <span>ABRIR EN WHATSAPP AHORA</span>
          </button>
        </form>
      </div>
    </div>
  );
};
