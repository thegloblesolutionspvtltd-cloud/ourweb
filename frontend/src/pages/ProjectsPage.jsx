import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Smartphone, Globe, CheckCircle2, X, AlertCircle, Lightbulb } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    axios.get('/api/public/projects').then(res => setProjects(res.data)).catch(() => {});
  }, []);

  const categories = ['All', 'MERN Stack', 'Java Enterprise', 'C/C++ Systems', 'Custom Software'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.tech_stack?.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Portfolio & Case Studies</h1>
        <h2 className="text-4xl font-extrabold text-white">MERN, Java, Python & C/C++ Projects</h2>
        <p className="text-gray-400 text-sm">
          Explore how we solved critical engineering bottlenecks with MERN Stack, Java Spring Boot microservices, Python AI models, and C/C++ engines.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 border border-gray-700/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-300 border border-gray-700">
                  {project.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-[11px] text-gray-400 font-medium">Client: {project.client || 'Confidential Enterprise'}</div>
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{project.short_desc}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech_stack?.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all"
              >
                View Technical Case Study
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card bg-[#111827] max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
                {activeModalProject.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{activeModalProject.name}</h2>
              <p className="text-xs text-gray-400">Client: {activeModalProject.client}</p>
            </div>

            {/* Image Preview */}
            <div className="rounded-2xl overflow-hidden h-60">
              <img src={activeModalProject.image} alt={activeModalProject.name} className="w-full h-full object-cover" />
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-red-400 font-bold text-xs uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Bottleneck / Problem</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{activeModalProject.problem || 'Legacy infrastructure could not scale.'}</p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase">
                  <Lightbulb className="w-4 h-4" />
                  <span>Our Architecture Solution</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{activeModalProject.solution || 'Re-architected microservices with cloud caching.'}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-gray-400">Key Built Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 bg-gray-900/60 p-2.5 rounded-xl border border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
              {activeModalProject.live_url && (
                <a href={activeModalProject.live_url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Visit Live Website</span>
                </a>
              )}
              {activeModalProject.app_store_url && (
                <a href={activeModalProject.app_store_url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-gray-800 text-gray-200 text-xs font-bold flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>App Store</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
