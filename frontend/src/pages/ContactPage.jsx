import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck, Upload, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    service_required: 'MERN Stack Web Development',
    budget: 'Under ₹50,000',
    description: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios.post('/api/public/inquiry', formData)
      .then(() => {
        setSubmitting(false);
        setSubmittedSuccess(true);
        setFormData({
          name: '',
          company_name: '',
          email: '',
          phone: '',
          service_required: 'MERN Stack Web Development',
          budget: 'Under ₹50,000',
          description: ''
        });
      })
      .catch(err => {
        setSubmitting(false);
        alert('Error submitting inquiry: ' + (err.response?.data?.error || err.message));
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Get In Touch</h1>
        <h2 className="text-4xl font-extrabold text-white">Let's Build Your MERN, Java, Python or C/C++ Solution</h2>
        <p className="text-gray-400 text-sm">
          Have technical questions or ready to kick off your project? Fill out the form below or chat on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Cards & Map */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card p-6 rounded-3xl border border-gray-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Headquarters</h4>
                  <p className="text-xs text-gray-300">Engineering Chauraha, Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Call Us</h4>
                  <p className="text-xs text-gray-300">+91 8090121332</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Email Inquiry</h4>
                  <p className="text-xs text-gray-300">thegloblesolutionspvtltd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons: WhatsApp & LinkedIn */}
            <div className="space-y-2.5">
              <a
                href="https://wa.me/918090121332"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat directly on WhatsApp (+91 8090121332)</span>
              </a>

              <a
                href="https://www.linkedin.com/company/the-globle-solutions-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>Follow on LinkedIn (The Globle Solutions)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Mockup */}
          <div className="glass-card rounded-3xl overflow-hidden border border-gray-800 h-60 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
              alt="Map Preview"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-gray-700">
              <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-xs font-bold text-white">Engineering Chauraha</div>
              <div className="text-[10px] text-gray-400">Lucknow, Uttar Pradesh, India</div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-gray-800 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
              <p className="text-xs text-gray-400 mt-1">We respond to all technical inquiries within 4 business hours.</p>
            </div>

            {submittedSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-8 rounded-2xl text-center space-y-3">
                <ShieldCheck className="w-12 h-12 mx-auto text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Enquiry Successfully Submitted!</h4>
                <p className="text-xs text-slate-300">Thank you for reaching out! Your enquiry has been received and will be sent to the team at thegloblesolutionspvtltd@gmail.com.</p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Company Name</label>
                    <input
                      type="text"
                      value={formData.company_name}
                      onChange={e => setFormData({ ...formData, company_name: e.target.value })}
                      placeholder="Nexus Corp"
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@nexus.com"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Service Required</label>
                    <select
                      value={formData.service_required}
                      onChange={e => setFormData({ ...formData, service_required: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="MERN Stack Web Development">MERN Stack Web Development</option>
                      <option value="Java Spring Boot Software">Java Enterprise / Spring Boot</option>
                      <option value="Python AI / ML & Automation">Python AI / ML & Automation</option>
                      <option value="C / C++ Low-Latency Systems">C / C++ Low-Latency Systems</option>
                      <option value="Mobile App (Flutter / React Native)">Mobile App (Flutter / React Native)</option>
                      <option value="UI/UX Design">UI/UX Product Design</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Project Budget</label>
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
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Project Description / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your tech goals, features required, and timeline..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {/* File Upload Simulation */}
                <div className="border border-dashed border-gray-700 rounded-xl p-3 text-center">
                  <Upload className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <span className="text-[11px] text-gray-400">Attach Brief / Spec Doc (Optional)</span>
                  <input type="file" className="block w-full text-xs text-gray-500 mt-1 file:mr-4 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-gray-800 file:text-gray-300" />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
