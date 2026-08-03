import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Globe, Menu, X, Shield, ArrowRight, UserCheck, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import Logo from '../common/Logo';

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
    { label: t('nav_contact', 'Contact Us'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050811]/90 backdrop-blur-2xl border-b border-slate-800/80 transition-all shadow-2xl">
      
      {/* Top Micro-Bar: High Trust & Systems Status */}
      <div className="hidden md:block bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-950/80 border-b border-slate-800/60 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-slate-300 font-semibold">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ERA TECH 3D Engineering Engine • Active</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">AWS KMS 256-Bit Encrypted Architecture</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-blue-300">Lucknow, IN HQ</span>
            <span className="text-slate-700">|</span>
            <a href="tel:+918090121332" className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-extrabold">
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>Call: +91 8090121332</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="hover:scale-105 transition-transform">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/40 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Multi-Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700/80 transition-colors shadow-md">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase">{lang === 'en' ? 'EN' : lang === 'hi' ? 'HI' : 'AR'}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl btn-3d-primary text-white text-xs font-extrabold shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>{t('btn_get_quote', 'Get Instant Quote')}</span>
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
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
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
              <span className="text-xs text-slate-400 font-semibold">Language:</span>
              <div className="flex space-x-1">
                <button onClick={() => changeLanguage('en')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>EN</button>
                <button onClick={() => changeLanguage('hi')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'hi' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>HI</button>
                <button onClick={() => changeLanguage('ar')} className={`px-2.5 py-1 text-xs rounded-lg font-bold ${lang === 'ar' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>AR</button>
              </div>
            </div>

            <Link
              to="/get-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs shadow-lg"
            >
              Get Instant Project Quote
            </Link>
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold"
            >
              Admin Panel Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
