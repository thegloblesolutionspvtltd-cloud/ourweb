import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, User, Tag, Search, ArrowRight, X, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    axios.get('/api/public/blogs').then(res => setBlogs(res.data)).catch(() => {});
  }, []);

  const categories = ['All', 'Web Development', 'Mobile Apps', 'AI & Automation', 'Business'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Engineering Insights</h1>
        <h2 className="text-4xl font-extrabold text-white">Tech Blog & Company News</h2>
        <p className="text-gray-400 text-sm">
          Deep dives into modern cloud architecture, mobile app performance, AI agents, and enterprise product engineering.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((article) => (
          <div key={article.id} className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  {article.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-4 text-[11px] text-gray-400">
                  <span className="flex items-center space-x-1">
                    <User className="w-3 h-3 text-blue-400" />
                    <span>{article.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{article.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                  {article.content}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveArticle(article)}
                className="w-full py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold text-xs flex items-center justify-center space-x-2 border border-gray-700"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Read Full Article</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card bg-[#111827] max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button onClick={() => setActiveArticle(null)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{activeArticle.title}</h2>
              <div className="flex items-center space-x-4 text-xs text-gray-400 pt-1">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{activeArticle.content}</p>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-gray-800 flex items-center space-x-2">
              <Tag className="w-4 h-4 text-blue-400" />
              <div className="flex flex-wrap gap-1.5">
                {activeArticle.tags?.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded bg-gray-800 text-[10px] text-gray-300">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
