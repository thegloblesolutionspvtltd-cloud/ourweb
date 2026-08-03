import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Zap, Clock, MessageSquare, PhoneCall } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProjectEstimator3D() {
  const navigate = useNavigate();

  const [currency, setCurrency] = useState('INR'); // Default to INR for Indian clients
  const [techStack, setTechStack] = useState('mern');
  const [projectScope, setProjectScope] = useState('medium');
  const [timeline, setTimeline] = useState('standard');
  const [addons, setAddons] = useState({
    security: true,
    aiChat: false,
    cloudAws: true,
    mobileApp: false,
  });

  // Base Prices in USD & INR
  const basePrices = {
    mern: { label: 'Web Application (MERN Stack)', sub: 'Full Website & Custom Web Portal', usd: 499, inr: 24999, weeks: 2 },
    flutter: { label: 'Mobile App (Android + iOS)', sub: 'PlayStore & AppStore Ready', usd: 699, inr: 34999, weeks: 3 },
    java: { label: 'Enterprise Software & Billing', sub: 'Java Spring Boot & ERP Systems', usd: 999, inr: 54999, weeks: 4 },
    python: { label: 'AI Bot & Smart Automation', sub: 'Python AI & Chatbot Pipeline', usd: 799, inr: 39999, weeks: 3 },
    cpp: { label: 'High Speed System (C/C++)', sub: 'Low Latency & Hardware Engine', usd: 1200, inr: 69999, weeks: 4 },
  };

  const scopeMultipliers = {
    small: { label: 'Startup / Basic Business', sub: 'Fast launch within 7 days', factor: 1.0, weekAdd: 0 },
    medium: { label: 'Growing Business Platform', sub: 'Full features & admin panel', factor: 1.5, weekAdd: 1 },
    enterprise: { label: 'High-Scale Custom Solution', sub: 'Multi-branch & high volume', factor: 2.2, weekAdd: 3 },
  };

  const selectedBase = basePrices[techStack];
  const selectedScope = scopeMultipliers[projectScope];

  let rawPriceUSD = selectedBase.usd * selectedScope.factor;
  let rawPriceINR = selectedBase.inr * selectedScope.factor;
  let totalWeeks = selectedBase.weeks + selectedScope.weekAdd;

  if (addons.security) { rawPriceUSD += 100; rawPriceINR += 5000; }
  if (addons.aiChat) { rawPriceUSD += 150; rawPriceINR += 8000; }
  if (addons.cloudAws) { rawPriceUSD += 120; rawPriceINR += 6000; }
  if (addons.mobileApp) { rawPriceUSD += 250; rawPriceINR += 15000; }

  if (timeline === 'urgent') {
    rawPriceUSD *= 1.15;
    rawPriceINR *= 1.15;
    totalWeeks = Math.max(1, Math.round(totalWeeks * 0.7));
  }

  const finalPrice = currency === 'INR' 
    ? `₹${Math.round(rawPriceINR).toLocaleString('en-IN')}` 
    : `$${Math.round(rawPriceUSD).toLocaleString()}`;

  const handleProceedQuote = () => {
    const summary = `Estimated Cost: ${finalPrice} | Delivery: ~${totalWeeks} Weeks | Service: ${selectedBase.label} | Scope: ${selectedScope.label}`;
    navigate('/get-quote', { state: { projectSummary: summary, techStack, projectScope } });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Rahul, I would like to discuss developing my software/website project. Estimate: ${selectedBase.label} (${finalPrice}, ~${totalWeeks} weeks).`);
    window.open(`https://wa.me/918090121332?text=${text}`, '_blank');
  };

  return (
    <section className="relative my-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl blur-3xl -z-10" />

      <TiltCard glowColor="rgba(99, 102, 241, 0.4)">
        <div className="glass-panel-luxury p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Project Price & Time Calculator • 100% Free</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Configure Your Live Project Budget
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Select your engineering requirements and see live cost & delivery estimates immediately.
              </p>
            </div>

            {/* Price Display Card with Currency Toggle */}
            <div className="bg-slate-900/90 border border-blue-500/40 p-4 sm:p-5 rounded-2xl flex flex-col justify-between shadow-inner min-w-[240px]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Estimated Budget</span>
                
                {/* INR / USD Currency Switcher */}
                <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setCurrency('INR')}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors ${
                      currency === 'INR' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🇮🇳 ₹ INR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors ${
                      currency === 'USD' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🌐 $ USD
                  </button>
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">
                {finalPrice}
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 mt-2">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Delivery: ~{totalWeeks} Weeks</span>
                </span>
              </div>
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-blue-400 flex items-center space-x-1.5">
                <Cpu className="w-4 h-4" />
                <span>1. Select Service / Software Type</span>
              </label>
              <div className="space-y-2">
                {Object.entries(basePrices).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTechStack(key)}
                    className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border ${
                      techStack === key
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.sub}</div>
                    </div>
                    {techStack === key && <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-purple-400 flex items-center space-x-1.5">
                  <Zap className="w-4 h-4" />
                  <span>2. Business Scale & Complexity</span>
                </label>
                <div className="space-y-2">
                  {Object.entries(scopeMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProjectScope(key)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border ${
                        projectScope === key
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-600/20'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{item.label}</div>
                        <div className="text-[10px] text-slate-400">{item.sub}</div>
                      </div>
                      {projectScope === key && <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Delivery Speed</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTimeline('standard')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      timeline === 'standard'
                        ? 'bg-blue-600 text-white border-blue-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Standard Sprint
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('urgent')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      timeline === 'urgent'
                        ? 'bg-amber-500 text-slate-950 border-amber-300 font-extrabold shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    ⚡ Fast-Track Express
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3 & Action */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3. Additional Modules</span>
                </label>

                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors">
                    <span className="text-xs font-semibold text-slate-200">SSL Security & Data Protection</span>
                    <input
                      type="checkbox"
                      checked={addons.security}
                      onChange={(e) => setAddons({ ...addons, security: e.target.checked })}
                      className="rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors">
                    <span className="text-xs font-semibold text-slate-200">WhatsApp / AI Chatbot Pipeline</span>
                    <input
                      type="checkbox"
                      checked={addons.aiChat}
                      onChange={(e) => setAddons({ ...addons, aiChat: e.target.checked })}
                      className="rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors">
                    <span className="text-xs font-semibold text-slate-200">Domain & AWS Cloud Setup</span>
                    <input
                      type="checkbox"
                      checked={addons.cloudAws}
                      onChange={(e) => setAddons({ ...addons, cloudAws: e.target.checked })}
                      className="rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleProceedQuote}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Book Free Consultation & Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-6 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat Directly on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </TiltCard>
    </section>
  );
}
