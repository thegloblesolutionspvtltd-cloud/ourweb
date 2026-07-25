import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layers, CheckCircle2, Play, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [demoProduct, setDemoProduct] = useState(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  useEffect(() => {
    axios.get('/api/public/products').then(res => setProducts(res.data)).catch(() => {});
  }, []);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setDemoProduct(null);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Proprietary Software</h1>
        <h2 className="text-4xl font-extrabold text-white">Company SaaS & Enterprise Products</h2>
        <p className="text-gray-400 text-sm">
          Turnkey enterprise platforms ready for instant cloud deployment, customization, and multi-tenant scaling.
        </p>
      </div>

      {/* Products List */}
      <div className="space-y-12">
        {products.map((prod) => (
          <div key={prod.id} className="glass-card rounded-3xl p-8 sm:p-10 border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{prod.name}</h3>
                  <span className="text-xs font-semibold text-emerald-400">{prod.pricing || 'Custom Enterprise Plan'}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{prod.short_desc}</p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Main Modules & Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {prod.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 bg-gray-900/60 p-2.5 rounded-xl border border-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setDemoProduct(prod)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center space-x-2"
                >
                  <span>Request Product Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {prod.demo_url && (
                  <a
                    href={prod.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold border border-gray-700 flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4 text-blue-400" />
                    <span>Watch Demo Preview</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Screenshot Preview */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl h-64 lg:h-80">
              <img
                src={prod.screenshots?.[0] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'}
                alt={prod.name}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        ))}
      </div>

      {/* Demo Request Modal */}
      {demoProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card bg-[#111827] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-gray-700 space-y-6 relative">
            <button onClick={() => setDemoProduct(null)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-white">Request Demo for {demoProduct.name}</h3>
              <p className="text-xs text-gray-400 mt-1">Our sales engineering team will set up a live trial environment for you.</p>
            </div>

            {demoSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-2xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 mx-auto" />
                <h4 className="font-bold text-sm">Demo Request Received!</h4>
                <p className="text-xs">We will email demo credentials within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Work Email</label>
                  <input required type="email" placeholder="john@company.com" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Company Name</label>
                  <input required type="text" placeholder="Acme Corp" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 font-bold text-white text-xs hover:bg-blue-500">
                  Submit Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
