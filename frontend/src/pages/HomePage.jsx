import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import { 
  Rocket, ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Award, 
  Sparkles, Code, Smartphone, Server, Palette, Cloud, Cpu, ChevronRight, Layers, Lock, Zap,
  TrendingUp, Users, Globe, Play, PhoneCall, MessageSquare, HeartHandshake
} from 'lucide-react';

import Hero3DCanvas from '../components/3d/Hero3DCanvas';
import TiltCard from '../components/3d/TiltCard';
import ProjectEstimator3D from '../components/3d/ProjectEstimator3D';
import TechRadar3D from '../components/3d/TechRadar3D';
import QuickActionDock3D from '../components/3d/QuickActionDock3D';

export default function HomePage() {
  const { t } = useLanguage();
  const [info, setInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/public/info').then(res => setInfo(res.data)).catch(() => {});
    axios.get('/api/public/services').then(res => setServices(res.data)).catch(() => {});
    axios.get('/api/public/projects').then(res => setProjects(res.data)).catch(() => {});
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Rahul, I would like to discuss developing a custom website or mobile application for my business.");
    window.open(`https://wa.me/918090121332?text=${text}`, '_blank');
  };

  const trustGuarantees = [
    {
      title: '100% Dedicated Founder Focus',
      desc: 'Founder Rahul Tiwari (B.Tech CS) personally oversees and architects every project with full attention.',
      icon: Award,
      badge: 'Founder Led',
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      title: 'Fast 7 to 15 Days Delivery',
      desc: 'Agile development process ensuring rapid deployment so your product reaches the market quickly.',
      icon: Clock,
      badge: 'Fast Launch',
      glow: 'rgba(16, 185, 129, 0.4)'
    },
    {
      title: 'Modern 2026 Tech Stack',
      desc: 'Engineered using modern MERN Stack, React 18, Node.js, Python AI, Flutter, and AWS Cloud.',
      icon: Cpu,
      badge: 'Modern Code',
      glow: 'rgba(168, 85, 247, 0.4)'
    },
    {
      title: 'Transparent Startup Pricing',
      desc: 'No middleman margins or hidden fees. Upfront transparent packages in INR (₹) and USD ($).',
      icon: HeartHandshake,
      badge: 'Best Value',
      glow: 'rgba(245, 158, 11, 0.4)'
    }
  ];

  const clientTestimonials = [
    {
      name: 'Amitabh Kumar',
      company: 'Founder, RetailGo (India)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      review: 'Rahul Tiwari and his team delivered our e-commerce platform and mobile application in just 10 days! Extremely hard-working and dedicated founder.',
      rating: 5,
      tag: 'Verified Client'
    },
    {
      name: 'Priya Sharma',
      company: 'Co-Founder, EduSpark Technologies',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      review: 'ERA TECH SOLUTIONS built our student portal using MERN stack. Clean UI, fast page loads, and outstanding support directly from the founder.',
      rating: 5,
      tag: 'EdTech Client'
    },
    {
      name: 'David Miller',
      company: 'CEO, BrightCloud Tech (USA)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      review: 'Working with ERA TECH was a fantastic experience. Great energy, fast communication, and delivered as promised on time.',
      rating: 5,
      tag: 'Global Client'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-cyber-grid bg-[#050811] text-slate-100 overflow-hidden relative">
      
      {/* 3D Quick Action Dock */}
      <QuickActionDock3D />

      {/* ================= HERO SECTION WITH 3D CANVAS ================= */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 overflow-hidden">
        {/* Glow Lights */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full badge-glowing text-blue-300 text-xs font-extrabold shadow-xl animate-float">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Next-Gen Tech Agency • Founded by Rahul Tiwari (B.Tech CS)</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Transform Your Vision Into <span className="text-gradient-primary">3D Digital</span> Platforms
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                We engineer scalable **Websites, MERN Stack Applications, Android/iOS Mobile Apps, Java Enterprise Software**, and **AI Automations** for businesses and startups.
              </p>

              {/* Simple Feature Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {['MERN Web Apps 🌐', 'Android & iOS Apps 📱', 'Java & Python ☕', 'C/C++ High Performance ⚡', 'AWS Cloud Setup ☁️'].map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-bold shadow-md hover:border-blue-500/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/get-quote"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-3d-primary text-white font-extrabold text-sm shadow-xl flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Start Project / Instant Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-extrabold text-sm transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4.5 h-4.5 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-400 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Lucknow, UP India HQ</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>100% Founder Direct Attention</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Canvas */}
            <div className="lg:col-span-5 relative">
              <Hero3DCanvas />
            </div>

          </div>

          {/* Stats Cards */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <TiltCard glowColor="rgba(59, 130, 246, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2026</div>
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Tech Startup</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(168, 85, 247, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">100%</div>
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Dedicated Focus</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(16, 185, 129, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight">7-15 Days</div>
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Fast Delivery</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(245, 158, 11, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">Best Value</div>
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Transparent Pricing</div>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* ================= INSTANT PRICE CALCULATOR (INR / USD) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator3D />
      </div>

      {/* ================= 3D TECH RADAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechRadar3D />
      </div>

      {/* ================= WHY CLIENTS CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold">
            <Zap className="w-3.5 h-3.5" />
            <span>Why Choose ERA TECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Built For Growth & Performance
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We combine high-level technical execution with fast turnaround times and transparent communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustGuarantees.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <TiltCard key={idx} glowColor={item.glow}>
                <div className="glass-panel-luxury p-7 rounded-3xl h-full flex flex-col justify-between border border-slate-800 space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-extrabold text-blue-400 uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 text-[11px] font-bold text-slate-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Commitment</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Our Work</div>
            <h2 className="text-3xl font-extrabold text-white">Featured Projects & Systems</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-blue-300">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((proj) => (
            <TiltCard key={proj.id} glowColor="rgba(59, 130, 246, 0.4)">
              <div className="glass-panel-luxury rounded-3xl overflow-hidden group border border-slate-800 h-full flex flex-col justify-between">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-300 border border-slate-700">
                    {proj.category}
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">{proj.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{proj.short_desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech_stack?.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-slate-200">5.0 Star Client Experience</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((test, idx) => (
              <TiltCard key={idx} glowColor="rgba(245, 158, 11, 0.3)">
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {test.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">"{test.review}"</p>
                  </div>

                  <div className="flex items-center space-x-3 pt-3 border-t border-slate-800">
                    <img src={test.image} alt={test.name} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                    <div>
                      <div className="text-xs font-extrabold text-white">{test.name}</div>
                      <div className="text-[11px] text-slate-400">{test.company}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TiltCard glowColor="rgba(59, 130, 246, 0.6)">
          <div className="glass-panel-luxury p-10 sm:p-14 rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-purple-900/50 text-center relative overflow-hidden shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Connect directly with Founder Rahul Tiwari to discuss your business requirements, project timeline, and custom packages.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/get-quote"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-3d-primary text-white font-extrabold text-sm shadow-xl flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Instant Custom Proposal</span>
              </Link>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/40 text-emerald-200 font-extrabold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </TiltCard>
      </section>

    </div>
  );
}
