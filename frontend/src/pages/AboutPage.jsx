import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Award, ShieldCheck, Cpu, Code, Smartphone, Server, Rocket, Users, CheckCircle2, Zap } from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';

export default function AboutPage() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get('/api/public/info').then(res => setInfo(res.data)).catch(() => {});
  }, []);

  const milestones = [
    { year: '2023', title: 'Company Founded', desc: 'Founded in Lucknow, India by Rahul Tiwari (B.Tech CSE) with a focus on modern web and software development.' },
    { year: '2024', title: 'MERN & Mobile Expansion', desc: 'Expanded into full-stack MERN web apps, Android & iOS Flutter mobile applications, and custom business software.' },
    { year: '2025', title: 'AI & Cloud Integration', desc: 'Integrated Python AI models, smart automation tools, and AWS cloud deployment for client platforms.' },
    { year: '2026', title: 'Next-Gen 3D Platform', desc: 'Upgraded to high-performance 3D web platforms with dedicated founder-led delivery.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
          <Award className="w-3.5 h-3.5" />
          <span>India & Global Tech Startup</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Engineering Next-Gen Technology</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {info?.about_text || 'The Globle Solutions is a modern software company founded in 2023 by Rahul Tiwari (B.Tech Computer Science). Driven by innovation, we empower businesses with high-performance MERN Stack web development, Java enterprise software, Python AI & ML, C/C++ system engines, and mobile applications.'}
        </p>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((item, idx) => (
          <TiltCard key={idx} glowColor="rgba(59, 130, 246, 0.4)">
            <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-gradient-primary">{item.year}</span>
                <h2 className="text-lg font-extrabold text-white mt-2">{item.title}</h2>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">{item.desc}</p>
              </div>
              <div className="pt-2 text-[11px] font-bold text-blue-400 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Startup Milestone</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Leadership / Founder Highlight Card */}
      <TiltCard glowColor="rgba(168, 85, 247, 0.4)">
        <div className="glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center space-x-6">
            <div className="w-28 h-32 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shrink-0">
              <img
                src="/founder.jpg"
                alt="Rahul Tiwari - Founder"
                onError={(e) => { e.target.onerror = null; e.target.src = '/founder.jpg'; }}
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-xs text-blue-400 font-extrabold uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>Founded in 2023 by Engineering Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Lead by Rahul Tiwari</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                "The Globle Solutions is built on a simple promise: delivering resilient software in MERN, Java, Python, C/C++ that drives measurable business growth for startups and enterprise clients."
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              to="/founder"
              className="px-6 py-3.5 rounded-2xl btn-3d-primary text-white font-extrabold text-xs shadow-lg flex items-center space-x-2"
            >
              <span>View Founder Profile</span>
            </Link>
          </div>
        </div>
      </TiltCard>

    </div>
  );
}
