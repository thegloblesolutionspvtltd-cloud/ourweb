import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <Logo size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Founded by Rahul Tiwari (B.Tech Computer Science). We build MERN Stack web platforms, Java enterprise backends, Python AI models, C/C++ low-latency engines, and mobile applications.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>API Gateway: 100% Operational • SSL Encrypted</span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://www.linkedin.com/company/the-globle-solutions-pvt-ltd/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white flex items-center justify-center transition-all shadow-md shadow-blue-600/20" title="The Globle Solutions LinkedIn Company Page">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-tiwari-3838232a6" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800" title="Founder Rahul Tiwari LinkedIn Profile">
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors border border-slate-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918090121332" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800" title="WhatsApp Us">
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
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Head Office</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Engineering Chauraha, Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+91 8090121332</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>thegloblesolutionspvtltd@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Globle Solutions. All rights reserved. Founded by Rahul Tiwari.</p>
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
