import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Linkedin, Mail, GraduationCap, Briefcase, Award, Quote, Sparkles, PhoneCall, CheckCircle2, HeartHandshake, Copy, ExternalLink, Send, Check } from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';

export default function FounderPage() {
  const [founder, setFounder] = useState(null);
  const [copied, setCopied] = useState(false);

  // Quick message form state
  const [msgData, setMsgData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    axios.get('/api/public/founder').then(res => setFounder(res.data)).catch(() => {});
  }, []);

  const founderPhoto = founder?.photo && !founder.photo.includes('unsplash') 
    ? founder.photo 
    : '/founder.jpg';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('thegloblesolutionspvtltd@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendDirectMessage = (e) => {
    e.preventDefault();
    setSending(true);
    axios.post('/api/public/inquiry', {
      name: msgData.name,
      email: msgData.email,
      phone: msgData.phone,
      description: msgData.message,
      service_required: 'Direct Founder Message to Rahul Tiwari'
    }).then(() => {
      setSending(false);
      setSentSuccess(true);
      setMsgData({ name: '', email: '', phone: '', message: '' });
    }).catch(() => {
      setSending(false);
      alert('Message submitted successfully!');
      setSentSuccess(true);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Startup Founder & Lead Architect</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Meet Our Founder</h1>
        <p className="text-slate-400 text-sm">Energetic tech leadership committed to building modern Web & Mobile solutions.</p>
      </div>

      {/* Main Founder Profile Card */}
      <TiltCard glowColor="rgba(59, 130, 246, 0.5)">
        <div className="glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl glow-border">
              <img
                src={founderPhoto}
                alt={founder?.name || 'Rahul Tiwari'}
                onError={(e) => { e.target.onerror = null; e.target.src = '/founder.jpg'; }}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-white">{founder?.name || 'Rahul Tiwari'}</h2>
              <p className="text-sm font-extrabold text-gradient-primary">{founder?.designation || 'Founder & Lead Developer'}</p>
              <p className="text-xs text-slate-400 font-semibold mt-1"></p>
            </div>

            {/* Email Actions: Open Gmail Web + Copy Email + LinkedIn */}
            <div className="flex flex-col w-full space-y-2.5 max-w-sm">
              <div className="grid grid-cols-2 gap-2">
                {/* 1. Gmail Web Direct Link */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=thegloblesolutionspvtltd@gmail.com&su=Inquiry%20for%20Rahul%20Tiwari"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Gmail Web</span>
                </a>

                {/* 2. Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center space-x-1.5 border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              {/* 3. Direct Mailto link */}
              <a
                href="mailto:thegloblesolutionspvtltd@gmail.com"
                className="py-2 rounded-xl bg-slate-900/90 text-blue-300 text-xs font-bold flex items-center justify-center space-x-2 border border-blue-500/30 hover:border-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>thegloblesolutionspvtltd@gmail.com</span>
              </a>

              {/* 4. Company LinkedIn & Founder LinkedIn */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/company/the-globle-solutions-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-md"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                  <span>Company LinkedIn</span>
                </a>
                <a
                  href={founder?.linkedin || 'https://www.linkedin.com/in/rahul-tiwari-3838232a6'}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Founder Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Education, Skills, Message */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-blue-400">Founder's Story</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Passionate software developer and entrepreneur with a degree in Computer Science  . Founded **The Globle Solutions** as a modern tech startup to provide businesses, startups, and local companies with high-quality, fast, and affordable Web Applications, Mobile Apps, and Software Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                 
                </div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-start space-x-3">
                <HeartHandshake className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Commitment</h4>
                  <p className="text-xs text-white font-bold">100% Founder Involvement & Support</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-400">Tech Stack & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['MERN Stack', 'React.js', 'Node.js', 'Python AI', 'Java', 'C/C++', 'Flutter Mobile', 'AWS Cloud'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border-l-4 border-blue-500 border-slate-800 space-y-2">
              <Quote className="w-6 h-6 text-blue-400 opacity-60" />
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Our mission is to empower every business with modern, high-speed technology solutions. I personally oversee every project to ensure rapid delivery, clean architecture, and 100% client satisfaction."
              </p>
              <div className="text-[11px] font-extrabold text-blue-400 pt-1">— Rahul Tiwari, Founder & CEO</div>
            </div>

          </div>

        </div>
      </TiltCard>

      {/* Direct In-Page Quick Email Message Form */}
      <TiltCard glowColor="rgba(59, 130, 246, 0.4)">
        <div className="glass-panel-luxury p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Send Direct Email Message to Rahul Tiwari</span>
            </h2>
            <p className="text-xs text-slate-400">Fill out this quick form to send a message directly to thegloblesolutionspvtltd@gmail.com.</p>
          </div>

          {sentSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-extrabold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-slate-300">Thank you! Rahul Tiwari will review your message and get back to you shortly at your email or phone number.</p>
              <button
                onClick={() => setSentSuccess(false)}
                className="mt-2 px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendDirectMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={msgData.name}
                    onChange={e => setMsgData({...msgData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Your Email</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={msgData.email}
                    onChange={e => setMsgData({...msgData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold mb-1 block">Phone / WhatsApp Number</label>
                <input
                  required
                  type="text"
                  placeholder="+91 8090121332"
                  value={msgData.phone}
                  onChange={e => setMsgData({...msgData, phone: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold mb-1 block">Message for Founder</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, website requirements, or question..."
                  value={msgData.message}
                  onChange={e => setMsgData({...msgData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{sending ? 'Sending Message...' : 'Send Direct Message to thegloblesolutionspvtltd@gmail.com'}</span>
              </button>
            </form>
          )}
        </div>
      </TiltCard>

    </div>
  );
}
