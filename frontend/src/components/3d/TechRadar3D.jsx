import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { Code, Server, Cpu, Smartphone, Cloud, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TechRadar3D() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'mern', label: 'MERN Stack 🌐' },
    { id: 'java', label: 'Enterprise Java ☕' },
    { id: 'python', label: 'AI & Python 🐍' },
    { id: 'cpp', label: 'C/C++ Systems ⚡' },
    { id: 'mobile', label: 'Mobile & Cloud 📱' },
  ];

  const technologies = [
    {
      id: 1,
      category: 'mern',
      name: 'MERN Stack Web Development',
      badge: 'Full-Stack React & Node',
      icon: '🌐',
      glow: 'rgba(59, 130, 246, 0.5)',
      description: 'Single-page web applications built with MongoDB, Express.js, React.js, and Node.js with server-side rendering support.',
      capabilities: ['REST & GraphQL APIs', 'Real-time WebSockets', 'Redux / Zustand State', 'JWT & OAuth Authentication']
    },
    {
      id: 2,
      category: 'java',
      name: 'Java Spring Boot Enterprise',
      badge: 'High-Concurrency Backends',
      icon: '☕',
      glow: 'rgba(239, 68, 68, 0.5)',
      description: 'Enterprise-grade microservices architecture designed for banking, healthcare, and high-concurrency enterprise workloads.',
      capabilities: ['Spring Boot 3 & Hibernate', 'Kafka & RabbitMQ Messaging', 'PostgreSQL / Oracle DB', 'Microservices Isolation']
    },
    {
      id: 3,
      category: 'python',
      name: 'Python AI & Machine Learning',
      badge: 'LLMs, PyTorch & FastAPI',
      icon: '🐍',
      glow: 'rgba(168, 85, 247, 0.5)',
      description: 'Artificial Intelligence models, computer vision, OpenAI/LLM integration, and ultra-fast Python web APIs via FastAPI.',
      capabilities: ['LLM & RAG Pipelines', 'PyTorch / TensorFlow', 'FastAPI & Async Engine', 'Pandas & Data Analytics']
    },
    {
      id: 4,
      category: 'cpp',
      name: 'C & C++ Low-Latency Systems',
      badge: 'Hardware & Trading Engines',
      icon: '⚡',
      glow: 'rgba(234, 179, 8, 0.5)',
      description: 'Low-latency financial trading algorithms, embedded hardware software, multi-threaded network drivers, and C++ memory management.',
      capabilities: ['Sub-millisecond Speed', 'Socket Programming', 'Multi-Threaded Concurrency', 'Zero-Allocation Memory']
    },
    {
      id: 5,
      category: 'mobile',
      name: 'Flutter Cross-Platform Mobile',
      badge: 'iOS & Android Apps',
      icon: '💙',
      glow: 'rgba(14, 165, 233, 0.5)',
      description: 'Beautiful, native-speed iOS and Android applications built from a single clean Dart codebase with offline sync.',
      capabilities: ['60FPS Smooth UI', 'Native Device Features', 'Offline Data Storage', 'Push Notifications']
    },
    {
      id: 6,
      category: 'mobile',
      name: 'AWS Cloud & Infrastructure',
      badge: 'DevOps & KMS Security',
      icon: '☁️',
      glow: 'rgba(16, 185, 129, 0.5)',
      description: 'Scalable AWS cloud hosting with automated Docker/Kubernetes CI/CD deployment pipelines and KMS 256-bit encryption.',
      capabilities: ['AWS EC2, S3, ECS, Lambda', 'Docker & Kubernetes', 'KMS Data Encryption', '99.99% SLA Uptime']
    }
  ];

  const filteredTech = activeCategory === 'all'
    ? technologies
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="space-y-10 py-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold">
          <Layers className="w-3.5 h-3.5" />
          <span>Core Engineering Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          3D Interactive Technology Ecosystem
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Hover over any card to interact with its 3D depth. We build across Web, Enterprise, AI, Mobile, and Low-Latency Systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3D Tech Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTech.map((tech) => (
          <TiltCard key={tech.id} glowColor={tech.glow}>
            <div className="glass-panel-luxury p-8 rounded-3xl h-full flex flex-col justify-between border border-slate-800 hover:border-slate-700 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-bold">
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">{tech.name}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{tech.description}</p>

                <div className="pt-2 space-y-2 border-t border-slate-800/80">
                  {tech.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-bold text-blue-400">
                <span>Enterprise Production Ready</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
