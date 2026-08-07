import React, { useState } from 'react';
import axios from 'axios';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Upload } from 'lucide-react';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'MERN Stack Web Application',
    budget: '₹50,000 – ₹2,00,000',
    timeline: '1 to 2 Months',
    features: []
  });

  const [selectedFeatures, setSelectedFeatures] = useState([
    'MERN Stack Architecture',
    'User Authentication & Roles',
    'Admin Management Panel',
    'Payment Gateway Integration'
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const availableFeatures = [
    'MERN Stack (MongoDB, Express, React, Node)',
    'Java Spring Boot Enterprise Backend',
    'Python AI / ML / FastAPI Integration',
    'C / C++ High Performance Engine',
    'User Authentication & Roles',
    'Admin Management Panel',
    'Payment Gateway Integration',
    'Real-time WebSockets & Push Alerts',
    'Multi-Language (i18n) Support',
    'Analytics & Reporting Dashboard'
  ];

  const toggleFeature = (feat) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios.post('/api/public/quote', {
      ...formData,
      features: selectedFeatures.join(', ')
    }).then(() => {
      setSubmitting(false);
      setSubmittedSuccess(true);
    }).catch(err => {
      setSubmitting(false);
      const errMsg = String(err.response?.data?.error || err.response?.data?.message || err.message || '');
      if (
        err.response?.status === 200 ||
        err.response?.status === 201 ||
        err.response?.data?.id ||
        errMsg.toLowerCase().includes('saved') ||
        errMsg.toLowerCase().includes('submitted') ||
        errMsg.toLowerCase().includes('success')
      ) {
        setSubmittedSuccess(true);
      } else {
        alert('Error submitting quote request: ' + errMsg);
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-6 h-6" />
        </div>
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Interactive Quote Generator</h1>
        <h2 className="text-4xl font-extrabold text-white">MERN, Java, Python & C/C++ Project Estimate</h2>
        <p className="text-gray-400 text-sm">
          Select your tech stack, features, budget tier, and expected delivery timeline.
        </p>
      </div>

      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-gray-800">
        {submittedSuccess ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-10 rounded-2xl text-center space-y-4">
            <ShieldCheck className="w-16 h-16 mx-auto" />
            <h3 className="text-2xl font-extrabold">Estimate Request Submitted!</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              Our engineering lead will review your tech selection and email a formal scope breakdown within 24 hours.
            </p>
            <button
              onClick={() => setSubmittedSuccess(false)}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              Request Another Estimate
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitQuote} className="space-y-8">
            
            {/* Step 1: Contact Details */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="David Clark"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Work Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Tech & Scope */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Project Scope & Technology Stack</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Technology / Project Type</label>
                  <select
                    value={formData.project_type}
                    onChange={e => setFormData({ ...formData, project_type: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="MERN Stack Web Application">MERN Stack (MongoDB, Express, React, Node)</option>
                    <option value="Java Spring Boot Backend">Java Spring Boot Enterprise Backend</option>
                    <option value="Python AI / ML & FastAPI">Python AI / ML & FastAPI Backend</option>
                    <option value="C / C++ High Performance Engine">C / C++ Low Latency Systems Engine</option>
                    <option value="Mobile App (Flutter / React Native)">Mobile App (Flutter / React Native)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Project Budget (SRS Specified)</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
                    <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
                    <option value="₹5,00,000+">₹5,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Expected Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Under 1 Month">Under 1 Month (Fast MVP)</option>
                    <option value="1 to 2 Months">1 to 2 Months</option>
                    <option value="2 to 4 Months">2 to 4 Months</option>
                    <option value="4+ Months">4+ Months Enterprise System</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Required Features Checklist */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Select Tech Features</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center space-x-2 transition-all ${
                        isChecked
                          ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                          : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isChecked ? 'text-blue-400' : 'text-gray-600'}`} />
                      <span>{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Document Upload */}
            <div className="border border-dashed border-gray-700 rounded-xl p-4 text-center">
              <Upload className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <span className="text-xs text-gray-300 font-medium">Attach Requirement Brief / Spec Doc (Optional)</span>
              <input type="file" className="block w-full text-xs text-gray-500 mt-2 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-gray-800 file:text-gray-300" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all"
            >
              <span>{submitting ? 'Calculating Proposal...' : 'Submit Quote Request'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>

    </div>
  );
}
