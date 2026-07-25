import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Code, Smartphone, Server, Palette, Cloud, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

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
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Services</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Full-Spectrum Engineering Capabilities</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          From concept wireframing to high-concurrency cloud deployments, we craft robust digital systems engineered for market leadership.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComp = getServiceIcon(service.category);
          return (
            <div key={service.id} className="glass-card glass-card-hover rounded-3xl p-8 border border-gray-800 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <IconComp className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">{service.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{service.full_desc || service.short_desc}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Offerings:</h4>
                  <ul className="space-y-2">
                    {service.features?.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <Link
                  to="/get-quote"
                  className="w-full py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
