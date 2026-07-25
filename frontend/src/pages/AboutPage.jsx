import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Target, Compass, Award, ShieldCheck, Heart, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get('/api/public/info').then(res => setInfo(res.data)).catch(() => {});
  }, []);

  const timeline = [
    { year: '2020', title: 'Company Founded', desc: 'Apex Systems was established in Silicon Valley with 5 core software engineers.' },
    { year: '2021', title: 'First 50 Projects Delivered', desc: 'Expanded into mobile app engineering and cloud enterprise solutions.' },
    { year: '2023', title: 'Global Footprint Expansion', desc: 'Acquired 100+ international clients across Europe, Middle East, and Asia.' },
    { year: '2025', title: 'SaaS Software Line Launched', desc: 'Rolled out flagship proprietary enterprise ERP and CRM cloud products.' },
    { year: '2026+', title: 'AI Engineering Division', desc: 'Integrating custom LLMs, RAG models, and autonomous AI agents for clients.' }
  ];

  const values = [
    { title: 'Engineering Integrity', desc: 'We never cut corners on security, code architecture, or database optimization.', icon: ShieldCheck },
    { title: 'User-Centric Design', desc: 'Every line of code and pixel layout prioritizes human experience and speed.', icon: Heart },
    { title: 'Agile Transparency', desc: 'Open code repositories, sprint demos, and direct Slack communication.', icon: Target }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">About Apex Systems</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Architecting the Digital Future</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {info?.about_text || 'Apex Software Systems is a full-stack digital transformation agency. Founded in 2020, we empower businesses with cutting-edge software architecture, intuitive UI/UX design, and AI automation.'}
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl border border-blue-500/20 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {info?.mission || 'To accelerate digital innovation globally by delivering secure, high-performance, and accessible software solutions.'}
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-purple-500/20 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-400 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {info?.vision || 'To be the preferred global technology partner recognized for technical craftsmanship, product excellence, and client empowerment.'}
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">Core Engineering Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gray-800 text-blue-400 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">{v.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Company Timeline */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-extrabold text-white">Company Journey</h3>
          <p className="text-gray-400 text-xs mt-2">Key milestones that shaped our engineering growth.</p>
        </div>

        <div className="relative border-l border-blue-500/30 ml-4 md:ml-32 space-y-8 pl-6 md:pl-10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#0b0f19]" />
              <div className="glass-card p-6 rounded-2xl space-y-2 border border-gray-800 hover:border-blue-500/40 transition-colors">
                <span className="inline-block px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-extrabold text-xs">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Culture & Awards */}
      <div className="glass-card p-10 rounded-3xl border border-gray-800 space-y-6">
        <h3 className="text-2xl font-bold text-white">Culture & Work Environment</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          At Apex Systems, we foster an inclusive, remote-first, and highly collaborative environment. We invest heavily in continuous learning, cloud certifications, hackathons, and open-source contributions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="bg-gray-900/60 p-4 rounded-xl text-center border border-gray-800">
            <div className="text-blue-400 font-bold text-base">AWS Certified</div>
            <div className="text-[10px] text-gray-400">Partner Network</div>
          </div>
          <div className="bg-gray-900/60 p-4 rounded-xl text-center border border-gray-800">
            <div className="text-purple-400 font-bold text-base">ISO 27001</div>
            <div className="text-[10px] text-gray-400">Security Standard</div>
          </div>
          <div className="bg-gray-900/60 p-4 rounded-xl text-center border border-gray-800">
            <div className="text-emerald-400 font-bold text-base">Top 100 Agency</div>
            <div className="text-[10px] text-gray-400">Clutch Awards</div>
          </div>
          <div className="bg-gray-900/60 p-4 rounded-xl text-center border border-gray-800">
            <div className="text-amber-400 font-bold text-base">SOC2 Type II</div>
            <div className="text-[10px] text-gray-400">Data Compliant</div>
          </div>
        </div>
      </div>

    </div>
  );
}
