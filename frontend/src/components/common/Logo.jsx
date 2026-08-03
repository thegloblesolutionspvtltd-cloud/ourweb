import React from 'react';

export default function Logo({ className = '', showText = true, size = 'md', isDark = true }) {
  // Dimension presets
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-5xl'
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.25em]',
    md: 'text-[9px] tracking-[0.3em]',
    lg: 'text-[11px] tracking-[0.35em]',
    xl: 'text-[13px] tracking-[0.4em]',
    '2xl': 'text-[18px] tracking-[0.45em]'
  };

  return (
    <div className={`flex items-center space-x-3 group select-none ${className}`}>
      {/* Emblem / Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size] || iconSizes.md}`}>
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-md group-hover:scale-105 transition-transform duration-300">
          <defs>
            <linearGradient id="logoEraGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="75%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="logoArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#172554" />
              <stop offset="45%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="logoShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Outer 'e' curve */}
          <path
            d="M 230 60 
               C 130 60, 50 145, 50 260 
               C 50 375, 130 450, 240 450 
               C 330 450, 410 390, 440 310 
               L 355 310 
               C 335 350, 290 380, 240 380 
               C 165 380, 122 325, 122 260 
               C 122 195, 165 130, 240 130 
               C 285 130, 330 158, 350 198 
               L 435 198 
               C 405 110, 330 60, 230 60 Z"
            fill="url(#logoEraGrad)"
          />

          {/* Inner 'e' bar */}
          <path
            d="M 124 235 
               L 420 235 
               C 425 245, 428 255, 428 265 
               C 428 278, 424 290, 418 300 
               L 124 300 Z"
            fill="url(#logoEraGrad)"
            opacity="0.95"
          />

          {/* Dynamic Ascending Arrow */}
          <path
            d="M 70 410 
               C 145 350, 245 230, 365 110 
               L 325 110 
               L 460 40 
               L 410 180 
               L 375 135 
               C 250 260, 160 380, 85 450 Z"
            fill="url(#logoArrowGrad)"
          />

          {/* Gloss highlight */}
          <path
            d="M 80 420 
               C 155 360, 255 240, 375 120 
               L 460 40 
               L 415 70 
               C 310 170, 205 295, 105 400 Z"
            fill="url(#logoShine)"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size] || titleSizes.md} ${isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'} transition-colors`}>
            ERA TECH
          </span>
          <span className={`font-extrabold uppercase ${subtitleSizes[size] || subtitleSizes.md} ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
}
