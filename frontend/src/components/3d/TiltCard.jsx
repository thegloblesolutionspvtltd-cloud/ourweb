import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', glowColor = 'rgba(59, 130, 246, 0.4)' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0, active: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Rotation degrees (Max 8 deg tilt for stability & crisp text)
    const rotateX = yPct * -10;
    const rotateY = xPct * 10;

    // Glare position percentage
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX,
      glareY,
      opacity: 1,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0, active: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={{
        transform: tilt.active 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01, 1.01, 1.01)` 
          : 'none',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* 3D Dynamic Glare Specular Highlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: tilt.opacity,
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, ${glowColor} 0%, transparent 65%)`,
        }}
      />
      
      {/* Inner Content with High Contrast Text Rendering */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
