import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Linkedin, Twitter, Users, Briefcase, Award } from 'lucide-react';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [selectedDept, setSelectedDept] = useState('All');

  useEffect(() => {
    axios.get('/api/public/team').then(res => setTeam(res.data)).catch(() => {});
  }, []);

  const departments = ['All', 'Management', 'Development', 'Design', 'Marketing', 'Sales', 'HR'];

  const filteredTeam = selectedDept === 'All'
    ? team
    : team.filter(m => m.department.toLowerCase() === selectedDept.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Mindpower</h1>
        <h2 className="text-4xl font-extrabold text-white">Meet the Engineering & Design Team</h2>
        <p className="text-gray-400 text-sm">
          A passionate group of software architects, product designers, data engineers, and growth strategists.
        </p>
      </div>

      {/* Department Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedDept === dept
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 border border-gray-700/60'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((member) => (
          <div key={member.id} className="glass-card glass-card-hover rounded-3xl p-6 border border-gray-800 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              {/* Photo & Badge */}
              <div className="relative">
                <img
                  src={member.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-md text-[10px] font-bold text-blue-400 border border-gray-700">
                  {member.department}
                </span>
              </div>

              {/* Name & Designation */}
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-blue-400">{member.designation}</p>
              </div>

              {/* Bio */}
              <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{member.bio}</p>

              {/* Skills */}
              {member.skills && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.split(',').map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-gray-800 text-[10px] text-gray-300">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Info & Social Links */}
            <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">Exp: {member.experience || '5+ Years'}</span>
              <div className="flex space-x-2">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-gray-800 hover:bg-blue-600 hover:text-white text-gray-400 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-gray-800 hover:bg-sky-500 hover:text-white text-gray-400 transition-colors">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
