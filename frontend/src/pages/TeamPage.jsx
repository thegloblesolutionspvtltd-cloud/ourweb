import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Linkedin, Twitter, Users, Briefcase, Award, TrendingUp, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [selectedDept, setSelectedDept] = useState('All');

  useEffect(() => {
    axios.get('/api/public/team').then(res => setTeam(res.data)).catch(() => {});
  }, []);

  const defaultTeam = [
    {
      id: 'shivangi',
      name: 'Shivangi Pandey',
      designation: 'Chief Technology Officer (Android & iOS) (CTO, B.Tech CSE)',
      department: 'Management',
      photo: '/shivangi_pandey.jpg',
      bio: 'Directing technical architecture, Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing.',
      skills: 'Android & iOS, AWS Cloud, App Deployment, Flutter, Swift, Kotlin, B.Tech CSE',
      experience: 'B.Tech CSE'
    },
    {
      id: 'priyam',
      name: 'Mr. Priyam Sinha',
      designation: 'Head of Sales & Marketing',
      department: 'Sales & Marketing',
      photo: '/priyam_sinha.jpg',
      bio: 'Leading client acquisition, growth strategy, business development, and marketing campaigns at The Globle Solutions.',
      skills: 'Sales Strategy, Marketing, Client Relations, Growth, B.Tech',
      experience: 'B.Tech'
    },
    {
      id: 'kajal',
      name: 'Kajal Singh',
      designation: 'Social Media Manager & Growth Specialist',
      department: 'Sales & Marketing',
      photo: '/kajal_singh.png',
      bio: 'Driving social media marketing strategies, digital audience growth (2M+ Impressions, 10k+ Followers), content creation, and analytics tracking.',
      skills: 'Social Media Strategy, Instagram & TikTok Growth, Analytics, Content Creation',
      experience: 'Social Media Specialist'
    },
    {
      id: 'vijay',
      name: 'Mr. Vijay Kushwaha',
      designation: 'Lead Frontend Developer (BCA & MCA CSE)',
      department: 'Development',
      photo: '/vijay_kushwaha.jpg',
      bio: 'Specializing in React.js, Tailwind CSS, 3D WebGL interfaces, dynamic UI animations, and responsive web application design.',
      skills: 'React.js, JavaScript, Tailwind CSS, 3D WebGL, UI/UX',
      experience: 'BCA & MCA CSE'
    },
    {
      id: 'shailavi',
      name: 'Shailavi Srivastava',
      designation: 'Lead Backend Developer',
      department: 'Development',
      photo: '/shailavi_srivastava.png',
      bio: 'Specializing in Node.js, Express APIs, Java Spring Boot microservices, Python backends, and SQL/SQLite databases.',
      skills: 'Node.js, Express, Java Spring Boot, Python, SQL, REST APIs, B.Tech CSE',
      experience: 'B.Tech CSE'
    },
    {
      id: 'saiyaaj',
      name: 'Saiyaaj',
      designation: 'Lead Data Analyst & BI Specialist',
      department: 'Data & Analytics',
      photo: '/saiyaaj.jpg',
      bio: 'Specializing in business intelligence, SQL data modeling, data visualization, predictive analytics, and performance dashboard reporting.',
      skills: 'Data Analytics, SQL, Python, Power BI, Data Visualization, Business Intelligence',
      experience: 'Data Analyst'
    }
  ];

  // Retain Shivangi Pandey, Shailavi Srivastava, Mr. Priyam Sinha, Vijay Kushwaha, Kajal Singh & Saiyaaj in team display
  const realTeamNames = ['shivangi', 'shailavi', 'priyam', 'vijay', 'kajal', 'saiyaaj'];
  const baseList = team.length > 0 ? team : defaultTeam;

  // Guarantee all defaultTeam members exist in the list
  const mergedList = [...baseList];
  defaultTeam.forEach(defMember => {
    const firstName = defMember.name.toLowerCase().split(' ')[0];
    if (!mergedList.some(m => m.name.toLowerCase().includes(firstName))) {
      mergedList.push(defMember);
    }
  });

  const finalTeamList = mergedList.filter(m => realTeamNames.some(name => m.name.toLowerCase().includes(name)));

  const departments = ['All', 'Management', 'Sales & Marketing', 'Development', 'Data & Analytics'];

  const filteredTeam = selectedDept === 'All'
    ? finalTeamList
    : finalTeamList.filter(m => m.department.toLowerCase().includes(selectedDept.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Leadership & Mindpower</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Meet Our Team</h1>
        <p className="text-slate-400 text-sm">
          Dynamic tech leaders and growth strategists driving client success at The Globle Solutions.
        </p>
      </div>

      {/* Featured CTO Leadership Hero Card */}
      <TiltCard glowColor="rgba(59, 130, 246, 0.5)">
        <div className="glass-panel-luxury p-8 sm:p-10 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex justify-center">
            <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl glow-border">
              <img
                src="/shivangi_pandey.jpg"
                alt="Shivangi Pandey - CTO"
                onError={(e) => { e.target.onerror = null; e.target.src = '/shivangi_pandey.jpg'; }}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
              <Cpu className="w-3.5 h-3.5" />
              <span>Chief Technology Officer (Android & iOS)</span>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white">Shivangi Pandey</h2>
              <p className="text-sm font-extrabold text-gradient-primary mt-1">CTO, B.Tech CSE | Android & iOS Engineering Leadership</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Directing technical architecture, cross-platform Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing. Dedicated to delivering high-performance, robust mobile & web platforms for clients globally.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Android & iOS', 'AWS Cloud Infrastructure', 'Play Store & App Store Deployment', 'Flutter & Swift', 'CI/CD Pipelines', 'B.Tech CSE'].map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </TiltCard>

      {/* Department Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              selectedDept === dept
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((member) => (
          <TiltCard key={member.id} glowColor="rgba(59, 130, 246, 0.4)">
            <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 h-full">
              
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl h-60 border border-slate-800">
                  <img
                    src={member.photo || '/founder.jpg'}
                    alt={member.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      if (member.name.includes('Shivangi')) e.target.src = '/shivangi_pandey.jpg';
                      else if (member.name.includes('Priyam')) e.target.src = '/priyam_sinha.jpg';
                      else if (member.name.includes('Vijay')) e.target.src = '/vijay_kushwaha.jpg';
                      else if (member.name.includes('Shailavi')) e.target.src = '/shailavi_srivastava.png';
                      else if (member.name.includes('Kajal')) e.target.src = '/kajal_singh.png';
                      else if (member.name.includes('Saiyaaj')) e.target.src = '/saiyaaj.jpg';
                      else e.target.src = '/founder.jpg';
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-extrabold text-blue-400 border border-slate-700">
                    {member.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">{member.name}</h3>
                  <p className="text-xs font-extrabold text-blue-400">{member.designation}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{member.bio}</p>

                {member.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.skills.split(',').map((s, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                        {s.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-extrabold">Qualification: {member.experience || 'B.Tech'}</span>
                <span className="text-[10px] font-extrabold text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  Verified Team
                </span>
              </div>

            </div>
          </TiltCard>
        ))}
      </div>

    </div>
  );
}
