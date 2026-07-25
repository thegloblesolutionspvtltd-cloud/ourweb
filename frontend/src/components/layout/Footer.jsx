import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, MessageSquare, ShieldCheck, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                APEX <span className="text-gradient">SYSTEMS</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Founded by Rahul Tiwari (B.Tech Computer Science). We build MERN Stack web platforms, Java enterprise backends, Python AI models, C/C++ low-latency engines, and mobile applications.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>API Gateway: 100% Operational • SSL Encrypted</span>
            </div>

            <div className="flex space-x-3 pt-2">
              <a href="https://linkedin.com/in/rahul-tiwari" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors border border-slate-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://wa.me/18005550199" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800" title="WhatsApp Us">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/founder" className="hover:text-blue-400 transition-colors">Founder & Leadership</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers & Hiring</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Tech Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Tech Stack</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">MERN Stack Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Java Enterprise Solutions</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Python AI & Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">C / C++ Low Latency Systems</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Flutter & Native Mobile</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Cloud & AWS KMS Integration</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Global HQ</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>750 Innovation Way, Suite 400, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contact@apexsoftware.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Apex Software Systems Inc. All rights reserved. Founded by Rahul Tiwari.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400 transition-colors">Security Hardening</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
