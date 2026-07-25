import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Globe, Menu, X, Rocket, Shield, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';

export default function Navbar() {
  const { lang, changeLanguage, t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: t('nav_home', 'Home'), path: '/' },
    { label: t('nav_about', 'About Us'), path: '/about' },
    { label: t('nav_services', 'Services'), path: '/services' },
    { label: t('nav_projects', 'Projects'), path: '/projects' },
    { label: t('nav_products', 'Products'), path: '/products' },
    { label: t('nav_team', 'Team'), path: '/team' },
    { label: t('nav_founder', 'Founder'), path: '/founder' },
    { label: t('nav_blog', 'Blog'), path: '/blog' },
    { label: t('nav_careers', 'Careers'), path: '/careers' },
    { label: t('nav_contact', 'Contact Us'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080c15]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all shadow-2xl">
      
      {/* Top Micro-Bar: Systems Status & Corporate Info */}
      <div className="hidden md:block bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-950/40 border-b border-slate-800/50 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>API Systems 100% Operational</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300">AWS KMS 256-Bit Encrypted Architecture</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-300 font-semibold">Silicon Valley HQ • Global Delivery</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                APEX <span className="text-gradient">SYSTEMS</span>
              </span>
              <span className="text-[9px] text-slate-400 tracking-widest uppercase font-bold">MERN • Java • Python • C/C++</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'text-white bg-blue-600/15 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full shadow-glow" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Multi-Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700/60 transition-colors">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase">{lang === 'en' ? 'EN' : lang === 'hi' ? 'HI' : 'AR'}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  <span>🇺🇸 English</span>
                  {lang === 'en' && <CheckCircle2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => changeLanguage('hi')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${lang === 'hi' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  <span>🇮🇳 हिंदी</span>
                  {lang === 'hi' && <CheckCircle2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${lang === 'ar' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  <span>🇸🇦 العربية</span>
                  {lang === 'ar' && <CheckCircle2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Get a Quote Button */}
            <Link
              to="/get-quote"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-extrabold shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <span>{t('btn_get_quote', 'Get a Quote')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Admin Access Button */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/admin"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold hover:bg-emerald-500/20"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-[11px] text-slate-400 hover:text-red-400 font-semibold"
                >
                  Exit
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-xl transition-colors"
                title="Admin Control Panel"
              >
                <Shield className="w-4.5 h-4.5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 border border-slate-700/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-800 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-slate-400 font-semibold">Select Language:</span>
              <div className="flex space-x-1">
                <button onClick={() => changeLanguage('en')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>EN</button>
                <button onClick={() => changeLanguage('hi')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'hi' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>HI</button>
                <button onClick={() => changeLanguage('ar')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'ar' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>AR</button>
              </div>
            </div>

            <Link
              to="/get-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white text-xs shadow-lg"
            >
              Get a Project Quote
            </Link>
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
            >
              Admin Panel Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
