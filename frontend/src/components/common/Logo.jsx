import React from 'react';

export default function Logo({ className = '', showText = true, size = 'md', isDark = true }) {
  // Dimension presets
  const logoSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20',
    '2xl': 'h-28'
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
    '2xl': 'text-4xl'
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.2em]',
    md: 'text-[9px] tracking-[0.25em]',
    lg: 'text-[11px] tracking-[0.3em]',
    xl: 'text-[13px] tracking-[0.35em]',
    '2xl': 'text-[16px] tracking-[0.4em]'
  };

  return (
    <div className={`flex items-center space-x-3 group select-none ${className}`}>
      {/* Official Brand Logo Image */}
      <div className={`relative flex items-center justify-center shrink-0 ${logoSizes[size] || logoSizes.md} p-1 bg-white/95 backdrop-blur-md rounded-xl border border-blue-500/30 shadow-lg group-hover:scale-105 group-hover:border-blue-400 transition-all duration-300`}>
        <img
          src="/logo.png"
          alt="The Globle Solutions"
          onError={(e) => { e.target.onerror = null; e.target.src = '/company_logo.png'; }}
          className="h-full w-auto object-contain rounded-lg"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size] || titleSizes.md} ${isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'} transition-colors`}>
            THE GLOBLE
          </span>
          <span className={`font-extrabold uppercase ${subtitleSizes[size] || subtitleSizes.md} ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
}
