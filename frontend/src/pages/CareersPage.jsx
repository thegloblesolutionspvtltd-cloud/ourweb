import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, ArrowRight, X, ShieldCheck, Upload } from 'lucide-react';

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cover_letter: '',
    linkedin: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    axios.get('/api/public/jobs').then(res => setJobs(res.data)).catch(() => {});
  }, []);

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios.post('/api/public/apply', {
      job_id: activeJobModal.id,
      job_title: activeJobModal.title,
      ...formData
    }).then(() => {
      setSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess(false);
        setActiveJobModal(null);
        setFormData({ name: '', email: '', phone: '', cover_letter: '', linkedin: '' });
      }, 2500);
    }).catch(err => {
      setSubmitting(false);
      alert('Error submitting application: ' + (err.response?.data?.error || err.message));
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs font-bold uppercase tracking-widest text-blue-400">Careers & Culture</h1>
        <h2 className="text-4xl font-extrabold text-white">Join Our Engineering Team</h2>
        <p className="text-gray-400 text-sm">
          We are looking for ambitious software developers, UI designers, and system architects to solve hard tech challenges.
        </p>
      </div>

      {/* Active Job Openings List */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {jobs.map((job) => (
          <div key={job.id} className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-gray-800 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
                  {job.department}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{job.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{job.work_type}</span>
                  </span>
                  {job.salary && (
                    <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{job.salary}</span>
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setActiveJobModal(job)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">{job.description}</p>

            {/* Requirements list */}
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Candidate Requirements:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.requirements?.map((req, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Job Application Form Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card bg-[#111827] max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button onClick={() => setActiveJobModal(null)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-white">Apply for {activeJobModal.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{activeJobModal.department} • {activeJobModal.location}</p>
            </div>

            {submittedSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-2xl text-center space-y-2">
                <ShieldCheck className="w-10 h-10 mx-auto" />
                <h4 className="font-bold text-base">Application Submitted!</h4>
                <p className="text-xs">Our HR team will review your application and contact you via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold mb-1 block">Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
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

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/janedoe"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-1 block">Cover Letter / Note</label>
                  <textarea
                    rows={3}
                    value={formData.cover_letter}
                    onChange={e => setFormData({ ...formData, cover_letter: e.target.value })}
                    placeholder="Briefly introduce yourself and why you're a great fit..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="border border-dashed border-gray-700 rounded-xl p-4 text-center">
                  <Upload className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <span className="text-xs text-gray-300 font-medium">Attach Resume / CV (PDF or DOCX)</span>
                  <input type="file" className="block w-full text-xs text-gray-500 mt-2 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500" />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-blue-600 font-bold text-white text-xs hover:bg-blue-500 shadow-lg shadow-blue-600/30"
                >
                  {submitting ? 'Submitting...' : 'Submit Job Application'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
