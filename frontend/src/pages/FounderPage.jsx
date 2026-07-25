import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Linkedin, Mail, GraduationCap, Briefcase, Award, Quote, Sparkles } from 'lucide-react';

export default function FounderPage() {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    axios.get('/api/public/founder').then(res => setFounder(res.data)).catch(() => {});
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Leadership Vision</h1>
        <h2 className="text-4xl font-extrabold text-white">Meet Our Founder & CEO</h2>
      </div>

      {/* Main Founder Profile Card */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Photo & Direct Contacts */}
        <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl glow-blue">
            <img
              src={founder?.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'}
              alt={founder?.name || 'Rahul Tiwari'}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-white">{founder?.name || 'Rahul Tiwari'}</h3>
            <p className="text-sm font-semibold text-blue-400">{founder?.designation || 'Founder & CEO'}</p>
          </div>

          <div className="flex space-x-3 pt-2">
            <a
              href={founder?.linkedin || 'https://linkedin.com/in/rahul-tiwari'}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center space-x-2 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={`mailto:${founder?.email || 'rahul@apexsoftware.com'}`}
              className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold flex items-center space-x-2 border border-gray-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* Right Column: Bio, Education, Skills, Message */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">About Founder</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {founder?.bio || 'Tech visionary with extensive experience building C/C++ high-performance engines, Java Enterprise systems, Python AI platforms, and MERN stack applications.'}
            </p>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900/60 p-4 rounded-2xl border border-blue-500/20 space-y-1">
              <div className="flex items-center space-x-2 text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Qualification</span>
              </div>
              <p className="text-xs text-white font-bold">{founder?.education || 'B.Tech in Computer Science'}</p>
            </div>

            <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800 space-y-1">
              <div className="flex items-center space-x-2 text-purple-400">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Background</span>
              </div>
              <p className="text-xs text-gray-300 font-medium">{founder?.experience || '14+ years in Enterprise Systems & Tech Leadership'}</p>
            </div>
          </div>

          {/* Skill Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {(founder?.skills || 'MERN Stack, Java, Python, C/C++, System Architecture, Cloud Computing, AI & ML, Technical Leadership').split(',').map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Founder Message Quote */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-500/20 relative space-y-2">
            <Quote className="w-8 h-8 text-blue-400/40 absolute top-4 right-4" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400">Founder Message</h5>
            <p className="text-xs text-gray-200 italic leading-relaxed">
              "{founder?.message || 'Our commitment is simple: build resilient software in MERN, Java, Python, C/C++ that drives measurable business growth.'}"
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
