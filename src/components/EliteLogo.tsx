import React from 'react';
import { IMG_LOGO } from '../config/images';

interface EliteLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'crest';
  className?: string;
  onClick?: () => void;
}

export const EliteLogo: React.FC<EliteLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  onClick
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', text: 'text-xs', iconSize: 24 },
    md: { box: 'w-14 h-14', text: 'text-sm', iconSize: 34 },
    lg: { box: 'w-24 h-24', text: 'text-lg', iconSize: 56 },
    xl: { box: 'w-40 h-40', text: 'text-2xl', iconSize: 96 }
  };

  const current = sizeMap[size];

  if (variant === 'icon') {
    return (
      <div 
        onClick={onClick}
        className={`relative inline-flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      >
        <img 
          src={IMG_LOGO} 
          alt="Logo" 
          className={`${current.box} object-cover rounded-md shadow-[0_2px_10px_rgba(233,193,118,0.2)] border border-[#e9c176]/30`} 
        />
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className={`relative flex items-center justify-center shrink-0`}>
        <img 
          src={IMG_LOGO} 
          alt="Logo" 
          className={`${current.box} object-cover rounded-md shadow-[0_2px_10px_rgba(233,193,118,0.2)] border border-[#e9c176]/30`} 
        />
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-serif text-[#e9c176] tracking-[0.2em] font-bold text-base md:text-lg leading-tight uppercase">
            Elite Barber Shop
          </span>
          <span className="text-[#a7a5a5] text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium">
            Santuario del Caballero
          </span>
        </div>
      )}
    </div>
  );
};
