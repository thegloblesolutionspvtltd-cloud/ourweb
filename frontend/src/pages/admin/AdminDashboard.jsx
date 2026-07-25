import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, MessageSquare, Layers, Briefcase, Users, FileText, 
  Globe, Search, Plus, Trash2, CheckCircle2, Shield, LogOut, Save
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({});
  const [inquiries, setInquiries] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [applications, setApplications] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [seo, setSeo] = useState({ meta_title: '', meta_description: '', keywords: '', og_image: '' });

  // Form states for creating new items
  const [newProject, setNewProject] = useState({ name: '', client: '', category: 'Web Application', short_desc: '', image: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80', tech_stack: 'React, Node.js' });
  const [newTeam, setNewTeam] = useState({ name: '', designation: '', department: 'Development', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', bio: '' });
  const [newJob, setNewJob] = useState({ title: '', department: 'Development', location: 'Remote', work_type: 'Full-Time', salary: '$100,000 / yr', description: '' });
  const [newBlog, setNewBlog] = useState({ title: '', category: 'Web Development', author: 'Admin', content: '', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' });
  const [transLang, setTransLang] = useState('hi');
  const [transKey, setTransKey] = useState('nav_home');
  const [transVal, setTransVal] = useState('होम');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    fetchDashboardData();
  }, [isAuthenticated, navigate]);

  const fetchDashboardData = () => {
    axios.get('/api/admin/stats').then(res => setStats(res.data)).catch(() => {});
    axios.get('/api/admin/inquiries').then(res => setInquiries(res.data)).catch(() => {});
    axios.get('/api/admin/quotes').then(res => setQuotes(res.data)).catch(() => {});
    axios.get('/api/admin/applications').then(res => setApplications(res.data)).catch(() => {});
    axios.get('/api/public/services').then(res => setServices(res.data)).catch(() => {});
    axios.get('/api/public/projects').then(res => setProjects(res.data)).catch(() => {});
    axios.get('/api/public/team').then(res => setTeam(res.data)).catch(() => {});
    axios.get('/api/public/blogs').then(res => setBlogs(res.data)).catch(() => {});
    axios.get('/api/public/jobs').then(res => setJobs(res.data)).catch(() => {});
    axios.get('/api/public/seo').then(res => setSeo(res.data)).catch(() => {});
  };

  const updateInquiryStatus = (id, status) => {
    axios.patch(`/api/admin/inquiries/${id}`, { status }).then(() => {
      fetchDashboardData();
    });
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    axios.post('/api/admin/projects', {
      ...newProject,
      tech_stack: newProject.tech_stack.split(',').map(s => s.trim())
    }).then(() => {
      alert('Project added successfully!');
      setNewProject({ name: '', client: '', category: 'Web Application', short_desc: '', image: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80', tech_stack: 'React, Node.js' });
      fetchDashboardData();
    });
  };

  const handleDeleteProject = (id) => {
    if (confirm('Delete this project?')) {
      axios.delete(`/api/admin/projects/${id}`).then(() => fetchDashboardData());
    }
  };

  const handleCreateTeam = (e) => {
    e.preventDefault();
    axios.post('/api/admin/team', newTeam).then(() => {
      alert('Team member added!');
      setNewTeam({ name: '', designation: '', department: 'Development', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', bio: '' });
      fetchDashboardData();
    });
  };

  const handleDeleteTeam = (id) => {
    if (confirm('Delete team member?')) {
      axios.delete(`/api/admin/team/${id}`).then(() => fetchDashboardData());
    }
  };

  const handleCreateJob = (e) => {
    e.preventDefault();
    axios.post('/api/admin/jobs', newJob).then(() => {
      alert('Job opening created!');
      setNewJob({ title: '', department: 'Development', location: 'Remote', work_type: 'Full-Time', salary: '$100,000 / yr', description: '' });
      fetchDashboardData();
    });
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    axios.post('/api/admin/blogs', newBlog).then(() => {
      alert('Blog published!');
      setNewBlog({ title: '', category: 'Web Development', author: 'Admin', content: '', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' });
      fetchDashboardData();
    });
  };

  const handleSaveTranslation = (e) => {
    e.preventDefault();
    axios.post('/api/admin/translations', { lang: transLang, key_name: transKey, val_text: transVal }).then(() => {
      alert(`Translation for key '${transKey}' in language '${transLang}' updated!`);
    });
  };

  const handleSaveSeo = (e) => {
    e.preventDefault();
    axios.put('/api/admin/seo', seo).then(() => {
      alert('SEO Settings Updated!');
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header Bar */}
      <div className="glass-card p-6 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white">Admin Management Dashboard</h1>
            <p className="text-xs text-gray-400">Logged in as <span className="text-blue-400 font-bold">{user?.name}</span> ({user?.role})</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-bold flex items-center space-x-2 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-800 pb-3">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutDashboard },
          { id: 'inquiries', label: `Inquiries (${inquiries.length})`, icon: MessageSquare },
          { id: 'projects', label: 'Projects CMS', icon: Layers },
          { id: 'team', label: 'Team CMS', icon: Users },
          { id: 'jobs', label: `Jobs & Applicants (${applications.length})`, icon: Briefcase },
          { id: 'blogs', label: 'Blog CMS', icon: FileText },
          { id: 'languages', label: 'Multi-Lang CMS', icon: Globe },
          { id: 'seo', label: 'SEO Settings', icon: Search },
        ].map((tab) => {
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-gray-800">
              <div className="text-xs text-gray-400 font-semibold uppercase">Total Leads / Inquiries</div>
              <div className="text-3xl font-extrabold text-blue-400 mt-2">{stats.inquiries || 0}</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-gray-800">
              <div className="text-xs text-gray-400 font-semibold uppercase">Portfolio Projects</div>
              <div className="text-3xl font-extrabold text-purple-400 mt-2">{stats.projects || 0}</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-gray-800">
              <div className="text-xs text-gray-400 font-semibold uppercase">Team Members</div>
              <div className="text-3xl font-extrabold text-emerald-400 mt-2">{stats.team || 0}</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-gray-800">
              <div className="text-xs text-gray-400 font-semibold uppercase">Job Applications</div>
              <div className="text-3xl font-extrabold text-amber-400 mt-2">{stats.applications || 0}</div>
            </div>
          </div>

          {/* Recent Inquiries Table */}
          <div className="glass-card p-6 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Recent Customer Inquiries</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900 text-gray-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Client Name</th>
                    <th className="p-3">Email / Phone</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Budget</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {inquiries.slice(0, 5).map((inq) => (
                    <tr key={inq.id}>
                      <td className="p-3 font-bold text-white">{inq.name} <br/><span className="text-[10px] text-gray-500">{inq.company_name}</span></td>
                      <td className="p-3">{inq.email}<br/><span className="text-[10px] text-gray-400">{inq.phone}</span></td>
                      <td className="p-3 font-semibold text-blue-400">{inq.service_required}</td>
                      <td className="p-3">{inq.budget}</td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          inq.status === 'New' ? 'bg-blue-500/20 text-blue-400' :
                          inq.status === 'In Progress' ? 'bg-amber-500/20 text-amber-400' :
                          inq.status === 'Converted' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'
                        }`}>
                          {inq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INQUIRIES & LEADS */}
      {activeTab === 'inquiries' && (
        <div className="glass-card p-6 rounded-3xl border border-gray-800 space-y-6">
          <h3 className="text-xl font-bold text-white">Client Inquiry & Quote Manager</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900 text-gray-400 uppercase text-[10px]">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name / Company</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Service / Budget</th>
                  <th className="p-3">Project Description</th>
                  <th className="p-3">Status Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {inquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td className="p-3 text-gray-500">#{inq.id}</td>
                    <td className="p-3 font-bold text-white">{inq.name}<br/><span className="text-[10px] text-gray-400">{inq.company_name}</span></td>
                    <td className="p-3">{inq.email}<br/><span className="text-[10px] text-gray-400">{inq.phone}</span></td>
                    <td className="p-3 font-semibold text-blue-400">{inq.service_required}<br/><span className="text-[10px] text-emerald-400">{inq.budget}</span></td>
                    <td className="p-3 max-w-xs text-[11px] text-gray-300">{inq.description}</td>
                    <td className="p-3">
                      <select
                        value={inq.status}
                        onChange={e => updateInquiryStatus(inq.id, e.target.value)}
                        className="bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: PROJECTS CMS */}
      {activeTab === 'projects' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateProject} className="glass-card p-6 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Plus className="w-5 h-5 text-blue-400" />
              <span>Add New Portfolio Project</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required placeholder="Project Name" value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Client Name" value={newProject.client} onChange={e => setNewProject({...newProject, client: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <select value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white">
                <option value="Web & Mobile App">Web & Mobile App</option>
                <option value="Custom Software">Custom Software</option>
                <option value="SaaS Product">SaaS Product</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Tech Stack (comma separated)" value={newProject.tech_stack} onChange={e => setNewProject({...newProject, tech_stack: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <textarea rows={2} placeholder="Short Description" value={newProject.short_desc} onChange={e => setNewProject({...newProject, short_desc: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />

            <button type="submit" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs">
              Publish Project to Website
            </button>
          </form>

          {/* Current Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card p-4 rounded-2xl border border-gray-800 space-y-3 relative">
                <button onClick={() => handleDeleteProject(proj.id)} className="absolute top-3 right-3 p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white">
                  <Trash2 className="w-4 h-4" />
                </button>
                <img src={proj.image} alt={proj.name} className="w-full h-32 object-cover rounded-xl" />
                <h4 className="font-bold text-white text-sm">{proj.name}</h4>
                <p className="text-xs text-gray-400">{proj.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: TEAM CMS */}
      {activeTab === 'team' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateTeam} className="glass-card p-6 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Plus className="w-5 h-5 text-blue-400" />
              <span>Add Team Member</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required placeholder="Full Name" value={newTeam.name} onChange={e => setNewTeam({...newTeam, name: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <input required placeholder="Designation" value={newTeam.designation} onChange={e => setNewTeam({...newTeam, designation: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <select value={newTeam.department} onChange={e => setNewTeam({...newTeam, department: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white">
                <option value="Management">Management</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <textarea rows={2} placeholder="Bio & Skills summary" value={newTeam.bio} onChange={e => setNewTeam({...newTeam, bio: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />

            <button type="submit" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs">
              Save Team Member
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.id} className="glass-card p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{m.name}</h4>
                  <p className="text-xs text-blue-400">{m.designation}</p>
                  <span className="text-[10px] text-gray-500">{m.department}</span>
                </div>
                <button onClick={() => handleDeleteTeam(m.id)} className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: JOBS & CANDIDATES */}
      {activeTab === 'jobs' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateJob} className="glass-card p-6 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Post New Job Opening</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required placeholder="Job Title" value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Location" value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Salary" value={newJob.salary} onChange={e => setNewJob({...newJob, salary: e.target.value})} className="bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>
            <textarea rows={2} placeholder="Job Description" value={newJob.description} onChange={e => setNewJob({...newJob, description: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs">Publish Job Opening</button>
          </form>

          {/* Applications list */}
          <div className="glass-card p-6 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Candidate Applications ({applications.length})</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900 text-gray-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Candidate</th>
                    <th className="p-3">Job Applied</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Cover Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="p-3 font-bold text-white">{app.name}</td>
                      <td className="p-3 text-blue-400 font-semibold">{app.job_title}</td>
                      <td className="p-3">{app.email}<br/><span className="text-[10px] text-gray-400">{app.phone}</span></td>
                      <td className="p-3 text-[11px] text-gray-300">{app.cover_letter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: MULTI-LANG CMS */}
      {activeTab === 'languages' && (
        <div className="glass-card p-8 rounded-3xl border border-gray-800 space-y-6 max-w-2xl">
          <h3 className="text-xl font-bold text-white">Multi-Language String Dictionary (EN, HI, AR)</h3>
          
          <form onSubmit={handleSaveTranslation} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">Language</label>
              <select value={transLang} onChange={e => setTransLang(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white">
                <option value="en">English (en)</option>
                <option value="hi">Hindi (hi - हिंदी)</option>
                <option value="ar">Arabic (ar - العربية)</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">Translation Key Name</label>
              <input required type="text" value={transKey} onChange={e => setTransKey(e.target.value)} placeholder="e.g. nav_home" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">Translated String Value</label>
              <input required type="text" value={transVal} onChange={e => setTransVal(e.target.value)} placeholder="e.g. होम" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 font-bold text-white text-xs flex items-center justify-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Translation Entry</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 7: SEO SETTINGS CMS */}
      {activeTab === 'seo' && (
        <div className="glass-card p-8 rounded-3xl border border-gray-800 space-y-6 max-w-2xl">
          <h3 className="text-xl font-bold text-white">Global Search Engine Optimization (SEO)</h3>
          
          <form onSubmit={handleSaveSeo} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">SEO Meta Title</label>
              <input type="text" value={seo.meta_title || ''} onChange={e => setSeo({...seo, meta_title: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">SEO Meta Description</label>
              <textarea rows={3} value={seo.meta_description || ''} onChange={e => setSeo({...seo, meta_description: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">Target Keywords</label>
              <input type="text" value={seo.keywords || ''} onChange={e => setSeo({...seo, keywords: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-semibold mb-1 block">Open Graph Image (Social Sharing Banner)</label>
              <input type="text" value={seo.og_image || ''} onChange={e => setSeo({...seo, og_image: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 font-bold text-white text-xs flex items-center justify-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Update SEO Metadata</span>
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
