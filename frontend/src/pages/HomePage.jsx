import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import { 
  Rocket, ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Award, 
  Sparkles, Code, Smartphone, Server, Palette, Cloud, Cpu, ChevronRight, Layers, Lock, Zap
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const [info, setInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTechFilter, setActiveTechFilter] = useState('All');

  useEffect(() => {
    axios.get('/api/public/info').then(res => setInfo(res.data)).catch(() => {});
    axios.get('/api/public/services').then(res => setServices(res.data)).catch(() => {});
    axios.get('/api/public/projects').then(res => setProjects(res.data)).catch(() => {});
  }, []);

  const techStack = [
    { name: 'MERN Stack', category: 'Full-Stack MERN', icon: '🌐', highlight: true, desc: 'MongoDB, Express, React, Node.js' },
    { name: 'Java', category: 'Enterprise Java', icon: '☕', highlight: true, desc: 'Spring Boot, Microservices, Hibernate' },
    { name: 'Python', category: 'AI & Python', icon: '🐍', highlight: true, desc: 'PyTorch, FastAPI, Django, LLMs' },
    { name: 'C Language', category: 'Systems C/C++', icon: '⚡', highlight: true, desc: 'Embedded, Sockets, Device Drivers' },
    { name: 'C++', category: 'Systems C/C++', icon: '🚀', highlight: true, desc: 'Low-Latency, High-Frequency Trading' },
    { name: 'React', category: 'Full-Stack MERN', icon: '⚛️', desc: 'Single Page Apps & Next.js' },
    { name: 'Node.js', category: 'Full-Stack MERN', icon: '🟢', desc: 'Asynchronous Event-Driven Backends' },
    { name: 'MongoDB', category: 'Full-Stack MERN', icon: '🍃', desc: 'NoSQL Document Database' },
    { name: 'Flutter', category: 'Mobile', icon: '💙', desc: 'Cross-Platform iOS & Android' },
    { name: 'AWS Cloud', category: 'Enterprise Java', icon: '☁️', desc: 'KMS, EC2, S3, ECS Cloud Setup' }
  ];

  const filteredTech = activeTechFilter === 'All'
    ? techStack
    : techStack.filter(t => t.category === activeTechFilter);

  const whyChooseUs = [
    { title: 'Senior Mindpower', desc: '100+ Senior engineers led by Rahul Tiwari (B.Tech Computer Science).', icon: Award },
    { title: 'Hardened Security', desc: 'Helmet CSP headers, rate-limiting, and AWS KMS Server-Side Encryption.', icon: ShieldCheck },
    { title: 'Agile Delivery Sprints', desc: 'Bi-weekly releases with transparent code commits and Slack access.', icon: Clock },
    { title: 'Multi-Tenant Architecture', desc: 'Scalable microservices engineered for 10M+ concurrent API calls.', icon: Server }
  ];

  const testimonials = [
    {
      name: 'Marcus Vance',
      company: 'CEO, OmniRetail Group',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      review: 'Apex Systems built our MERN stack e-commerce app and C++ latency engine. It processes 100k daily transactions with zero downtime!'
    },
    {
      name: 'Dr. Sarah Jenkins',
      company: 'CTO, MetroCare Health',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      review: 'Their Java Spring Boot and Python AI pipelines revolutionized our healthcare logistics. Exceptional engineering standards.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-cyber-grid bg-[#050811]">
      
      {/* HERO SECTION */}
      <section className="relative pt-16 lg:pt-24 overflow-hidden">
        {/* Ambient Glow Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          {/* Top Glowing Badge */}
          <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full badge-glowing text-blue-300 text-xs font-extrabold shadow-xl animate-float">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>MERN Stack • Java • Python • C/C++ Enterprise Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Engineering <span className="text-gradient-primary">Next-Gen</span> Software & Enterprise Applications
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {info?.hero_subtitle || 'We build scalable MERN Stack web applications, Java & Python enterprise backends, C/C++ high-performance systems, mobile apps, and AI solutions.'}
          </p>

          {/* Core Tech Stack Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['MERN Stack 🌐', 'Java Enterprise ☕', 'Python AI 🐍', 'C & C++ Systems ⚡', 'Flutter Mobile 📱'].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-bold shadow-md hover:border-blue-500/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-quote"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-base shadow-xl shadow-blue-600/35 transition-all hover:scale-[1.03] flex items-center justify-center space-x-2"
            >
              <span>{t('hero_cta_start', 'Start a Project')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-luxury text-slate-200 font-bold text-base transition-all flex items-center justify-center space-x-2"
            >
              <span>{t('hero_cta_services', 'Explore Our Services')}</span>
            </Link>
          </div>

          {/* Counter Stats Cards */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 glass-panel-luxury p-8 rounded-3xl border border-slate-800 max-w-5xl mx-auto glow-border">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{info?.experience_years || 8}+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">{info?.total_projects || 250}+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Projects Shipped</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 tracking-tight">{info?.total_clients || 180}+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Global Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">{info?.countries_served || 24}+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Countries Served</div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE SERVICES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Engineering Spectrum</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Full-Stack MERN, Java, Python & C/C++ Services</h3>
          <p className="text-slate-400 text-sm sm:text-base">
            From single-page MERN web apps to high-concurrency Java enterprise platforms and C/C++ low-latency engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div key={service.id} className="glass-panel-luxury p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 shadow-inner">
                  <Code className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-white mb-2">{service.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{service.short_desc}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features?.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/services"
                className="w-full py-3 rounded-xl bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all border border-blue-500/20"
              >
                <span>Learn Deep Architecture</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE TECH STACK FILTERABLE GRID */}
      <section className="bg-slate-950/90 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Our Tech Stack Ecosystem</h2>
            <h3 className="text-3xl font-extrabold text-white">Click Technology Categories to Explore</h3>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', 'Full-Stack MERN', 'Enterprise Java', 'AI & Python', 'Systems C/C++', 'Mobile'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                  activeTechFilter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTech.map((tech, idx) => (
              <div key={idx} className="glass-panel-luxury p-6 rounded-2xl text-left space-y-2 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">
                    {tech.category}
                  </span>
                </div>
                <h4 className="text-lg font-extrabold text-white">{tech.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Selected Case Studies</h2>
            <h3 className="text-3xl font-extrabold text-white">MERN, Java & C++ Case Studies</h3>
          </div>
          <Link to="/projects" className="inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:underline">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((proj) => (
            <div key={proj.id} className="glass-panel-luxury rounded-3xl overflow-hidden group border border-slate-800">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-300 border border-slate-700">
                  {proj.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{proj.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{proj.short_desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tech_stack?.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & ENTERPRISE GUARANTEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Why Partner With Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Mastery Across MERN, Java, Python, C and C++ Architecture
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Led by Founder Rahul Tiwari (B.Tech Computer Science), our engineering teams enforce strict memory profiling, microservice isolation, and SOC2 compliant data security.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {whyChooseUs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-2">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-panel-luxury p-8 rounded-3xl border border-slate-800 relative overflow-hidden space-y-6">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Enterprise SLA & Guarantee</span>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white">99.99% Cloud Uptime Guarantee</h5>
                  <p className="text-xs text-slate-400">Multi-region AWS load-balanced deployments.</p>
                </div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center space-x-3">
                <Lock className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white">Hardened XSS & Anti-Spam Security</h5>
                  <p className="text-xs text-slate-400">Helmet Headers & Express Rate Limiting active.</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-bold text-white pt-2">Client Testimonials</h4>
            <div className="space-y-4">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">"{test.review}"</p>
                  <div className="flex items-center space-x-3 pt-1">
                    <img src={test.image} alt={test.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="text-xs font-bold text-white">{test.name}</div>
                      <div className="text-[10px] text-slate-400">{test.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-luxury p-10 sm:p-14 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 text-center relative overflow-hidden shadow-2xl space-y-6 glow-border">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Need MERN, Java, Python or C/C++ Developers?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Build high-performance web platforms, mobile applications, or custom enterprise software. Get a custom proposal from Founder Rahul Tiwari's team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-quote"
              className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              Get an Instant Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 text-white font-bold text-sm transition-all"
            >
              Contact Engineering Lead
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
