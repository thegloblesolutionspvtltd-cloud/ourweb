import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Code, Smartphone, Server, Palette, Cloud, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/public/services').then(res => setServices(res.data)).catch(() => {});
  }, []);

  const getServiceIcon = (category) => {
    switch (category) {
      case 'Web Development': return Code;
      case 'Mobile App Development': return Smartphone;
      case 'Software Development': return Server;
      case 'UI/UX Design': return Palette;
      case 'Cloud & Technology': return Cloud;
      case 'AI / Automation': return Cpu;
      default: return Code;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>3D Architecture & Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Full-Spectrum Engineering Capabilities</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From concept wireframing to high-concurrency MERN, Java, Python, and C/C++ cloud deployments, we craft robust digital systems engineered for market leadership.
        </p>
      </div>

      {/* Services Grid with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComp = getServiceIcon(service.category);
          return (
            <TiltCard key={service.id} glowColor="rgba(59, 130, 246, 0.45)">
              <div className="glass-panel-luxury rounded-3xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-inner">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-blue-400 tracking-wider bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">{service.category}</span>
                    <h2 className="text-xl font-extrabold text-white mt-3">{service.title}</h2>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{service.full_desc || service.short_desc}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Key Offerings:</h3>
                    <ul className="space-y-2">
                      {service.features?.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    to="/get-quote"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <span>Request 3D Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </TiltCard>
          );
        })}
      </div>

    </div>
  );
}
