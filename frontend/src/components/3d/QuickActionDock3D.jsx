import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, PhoneCall, Sparkles, X, Zap } from 'lucide-react';

export default function QuickActionDock3D() {
  const [isOpen, setIsOpen] = useState(true);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Rahul, I would like to discuss developing a custom website or software application for my business.");
    window.open(`https://wa.me/918090121332?text=${text}`, '_blank');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:scale-110 transition-all border border-blue-400/40 flex items-center space-x-2 font-bold text-xs"
      >
        <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
        <span>Free Consultation (Call / WhatsApp)</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 animate-bounce-short">
      <div className="glass-panel-luxury p-3 sm:p-4 rounded-3xl border border-blue-500/40 shadow-2xl flex items-center space-x-2.5 bg-slate-950/95 backdrop-blur-2xl">
        
        {/* Lead Badge */}
        <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-extrabold">
          <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Lucknow HQ • Software Agency</span>
        </div>

        {/* Action 1: WhatsApp Button */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 flex items-center space-x-1.5"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp Chat</span>
        </button>

        {/* Action 2: Direct Call Button */}
        <a
          href="tel:+918090121332"
          className="px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center space-x-1.5"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call 8090121332</span>
        </a>

        {/* Action 3: Get Instant Quote */}
        <Link
          to="/get-quote"
          className="hidden md:flex px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all items-center space-x-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Get Quote</span>
        </Link>

        {/* Close Toggle */}
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors"
          title="Minimize Dock"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
