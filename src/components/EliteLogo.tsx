import React from 'react';

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
    sm: { box: 'w-8 h-8', text: 'text-xs', iconSize: 24 },
    md: { box: 'w-12 h-12', text: 'text-sm', iconSize: 34 },
    lg: { box: 'w-20 h-20', text: 'text-lg', iconSize: 56 },
    xl: { box: 'w-36 h-36', text: 'text-2xl', iconSize: 96 }
  };

  const current = sizeMap[size];

  if (variant === 'icon') {
    return (
      <div 
        onClick={onClick}
        className={`relative inline-flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      >
        <svg 
          viewBox="0 0 100 100" 
          className={`${current.box} text-[#e9c176]`} 
          fill="none" 
          stroke="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Crest Outline */}
          <path 
            d="M 18 15 Q 50 12 82 15 L 82 58 Q 82 86 50 92 Q 18 86 18 58 Z" 
            stroke="#e9c176" 
            strokeWidth="3.5" 
            fill="#121414"
          />
          {/* Crossed Straight Razors */}
          <g transform="translate(50, 48) scale(0.65)" strokeWidth="3" stroke="#e9c176" fill="#e9c176">
            {/* Razor 1 (Left to Right) */}
            <g transform="rotate(-38)">
              {/* Handle */}
              <path d="M-35 8 C-20 7, 0 12, 10 18 C0 22, -20 20, -35 15 Z" fill="#e9c176" stroke="#121414" strokeWidth="1" />
              {/* Hinge Pin */}
              <circle cx="10" cy="18" r="2.5" fill="#121414" />
              {/* Blade */}
              <path d="M10 18 C20 12, 42 -5, 52 -18 C46 -22, 25 -12, 10 18 Z" fill="#e9c176" stroke="#121414" strokeWidth="1" />
              <rect x="22" y="-12" width="22" height="4" transform="rotate(-32 22 -12)" fill="#121414" opacity="0.8" />
            </g>

            {/* Razor 2 (Right to Left) */}
            <g transform="rotate(38)">
              {/* Handle */}
              <path d="M35 8 C20 7, 0 12, -10 18 C0 22, 20 20, 35 15 Z" fill="#e9c176" stroke="#121414" strokeWidth="1" />
              {/* Hinge Pin */}
              <circle cx="-10" cy="18" r="2.5" fill="#121414" />
              {/* Blade */}
              <path d="M-10 18 C-20 12, -42 -5, -52 -18 C-46 -22, -25 -12, -10 18 Z" fill="#e9c176" stroke="#121414" strokeWidth="1" />
              <rect x="-44" y="-12" width="22" height="4" transform="rotate(32 -44 -12)" fill="#121414" opacity="0.8" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className={`relative flex items-center justify-center shrink-0`}>
        <svg 
          viewBox="0 0 100 100" 
          className={`${current.box} text-[#e9c176] drop-shadow-[0_2px_10px_rgba(233,193,118,0.2)]`} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield frame */}
          <path 
            d="M 16 12 Q 50 8 84 12 L 84 56 Q 84 88 50 94 Q 16 88 16 56 Z" 
            stroke="#e9c176" 
            strokeWidth="3.2" 
            fill="#161818"
          />
          {/* Crossed Razors */}
          <g transform="translate(50, 42) scale(0.6)" stroke="#e9c176" fill="#e9c176">
            {/* Razor 1 */}
            <g transform="rotate(-38)">
              <path d="M-32 7 C-18 6, 0 11, 10 17 C0 21, -18 19, -32 14 Z" fill="#e9c176" stroke="#121414" strokeWidth="1.2" />
              <circle cx="10" cy="17" r="2.8" fill="#121414" />
              <path d="M10 17 C20 11, 40 -6, 50 -18 C44 -22, 24 -11, 10 17 Z" fill="#e9c176" stroke="#121414" strokeWidth="1.2" />
              <rect x="22" y="-11" width="20" height="3" transform="rotate(-33 22 -11)" fill="#121414" />
            </g>

            {/* Razor 2 */}
            <g transform="rotate(38)">
              <path d="M32 7 C18 6, 0 11, -10 17 C0 21, 18 19, 32 14 Z" fill="#e9c176" stroke="#121414" strokeWidth="1.2" />
              <circle cx="-10" cy="17" r="2.8" fill="#121414" />
              <path d="M-10 17 C-20 11, -40 -6, -50 -18 C-44 -22, -24 -11, -10 17 Z" fill="#e9c176" stroke="#121414" strokeWidth="1.2" />
              <rect x="-42" y="-11" width="20" height="3" transform="rotate(33 -42 -11)" fill="#121414" />
            </g>
          </g>

          {/* Typography inside crest */}
          <text 
            x="50" 
            y="72" 
            textAnchor="middle" 
            fill="#e9c176" 
            fontFamily="'Playfair Display', Georgia, serif" 
            fontSize="10" 
            fontWeight="800" 
            letterSpacing="2"
          >
            ELITE
          </text>
          <text 
            x="50" 
            y="81" 
            textAnchor="middle" 
            fill="#e9c176" 
            fontFamily="'Playfair Display', Georgia, serif" 
            fontSize="8" 
            fontWeight="700" 
            letterSpacing="1.5"
          >
            BARBER SHOP
          </text>
        </svg>
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
