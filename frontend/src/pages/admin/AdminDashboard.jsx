import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, MessageSquare, Layers, Briefcase, Users, FileText, 
  Globe, Search, Plus, Trash2, Pencil, CheckCircle2, Shield, LogOut, Save, Sparkles, UserPlus, FolderPlus
} from 'lucide-react';
import TiltCard from '../../components/3d/TiltCard';

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
  const [editingTeamId, setEditingTeamId] = useState(null);

  // Form states for creating new items
  const [newProject, setNewProject] = useState({ 
    name: '', 
    client: '', 
    category: 'Web Application', 
    short_desc: '', 
    image: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80', 
    tech_stack: 'React, Node.js, Express, MongoDB' 
  });
  
  const [newTeam, setNewTeam] = useState({ 
    name: '', 
    designation: '', 
    department: 'Development', 
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', 
    bio: '',
    skills: 'React, Node.js, Python, Java',
    experience: '5+ years in backend and frontend development',
    linkedin: '',
    twitter: ''
  });
  
  const [newJob, setNewJob] = useState({ title: '', department: 'Development', location: 'Remote', work_type: 'Full-Time', salary: '$100,000 / yr', description: '' });
  const [newBlog, setNewBlog] = useState({ title: '', category: 'Web Development', author: 'Team The Globle Solutions', content: '', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' });
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
      tech_stack: typeof newProject.tech_stack === 'string' ? newProject.tech_stack.split(',').map(s => s.trim()) : newProject.tech_stack
    }).then(() => {
      alert('Project added successfully to website!');
      setNewProject({ name: '', client: '', category: 'Web Application', short_desc: '', image: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80', tech_stack: 'React, Node.js' });
      fetchDashboardData();
    });
  };

  const handleDeleteProject = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      axios.delete(`/api/admin/projects/${id}`).then(() => fetchDashboardData());
    }
  };

  const resetTeamForm = () => {
    setEditingTeamId(null);
    setNewTeam({ name: '', designation: '', department: 'Development', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', bio: '', skills: 'React, Node.js, Python, Java', experience: '5+ years in backend and frontend development', linkedin: '', twitter: '' });
  };

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (editingTeamId) {
      axios.put(`/api/admin/team/${editingTeamId}`, newTeam).then(() => {
        alert('Team member profile updated successfully!');
        resetTeamForm();
        fetchDashboardData();
      }).catch((error) => {
        console.error('Team update failed:', error?.response?.data || error.message);
        alert(`Failed to update team member profile. ${error?.response?.data?.error || ''}`);
      });
      return;
    }

    axios.post('/api/admin/team', newTeam).then(() => {
      alert('Team member profile added successfully!');
      resetTeamForm();
      fetchDashboardData();
    }).catch(() => {
      alert('Failed to add team member profile.');
    });
  };

  const handleDeleteTeam = (id) => {
    if (confirm('Delete team member profile?')) {
      axios.delete(`/api/admin/team/${id}`).then(() => fetchDashboardData());
    }
  };

  const handleEditTeam = (member) => {
    setEditingTeamId(member.id);
    setNewTeam({
      name: member.name || '',
      designation: member.designation || '',
      department: member.department || 'Development',
      photo: member.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: member.bio || '',
      skills: member.skills || 'React, Node.js, Python, Java',
      experience: member.experience || '5+ years in backend and frontend development',
      linkedin: member.linkedin || '',
      twitter: member.twitter || ''
    });
    setActiveTab('team');
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
      alert('Blog post published!');
      setNewBlog({ title: '', category: 'Web Development', author: 'Team TheGloble Software', content: '', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' });
      fetchDashboardData();
    });
  };

  const handleSaveTranslation = (e) => {
    e.preventDefault();
    axios.post('/api/admin/translations', {
      lang: transLang,
      key: transKey,
      val: transVal
    }).then(() => {
      alert('Translation saved successfully!');
    });
  };

  const handleSaveSeo = (e) => {
    e.preventDefault();
    axios.post('/api/admin/seo', seo).then(() => {
      alert('SEO metadata saved successfully!');
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white">Team & Admin Management Portal</h1>
            <p className="text-xs text-slate-400">Welcome, {user?.name || user?.email || 'Team Member'} ({user?.role || 'Admin'})</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-colors flex items-center space-x-1.5"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutDashboard },
          { id: 'inquiries', label: 'Client Requests', icon: MessageSquare },
          { id: 'projects', label: 'Add / Edit Projects', icon: FolderPlus },
          { id: 'team', label: 'Add / Edit Team Profile', icon: UserPlus },
          { id: 'jobs', label: 'Careers & Hiring', icon: Briefcase },
          { id: 'blogs', label: 'Blogs & Articles', icon: FileText },
          { id: 'languages', label: 'Languages (CMS)', icon: Globe },
          { id: 'seo', label: 'SEO Settings', icon: Search },
        ].map((tab) => {
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition-all border ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border-slate-800'
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
            <TiltCard glowColor="rgba(59, 130, 246, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-white">{stats.inquiries_count || 0}</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">Inquiries</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(168, 85, 247, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-blue-400">{projects.length || 0}</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">Published Projects</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(16, 185, 129, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-purple-400">{team.length || 0}</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">Team Members</div>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(245, 158, 11, 0.4)">
              <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-emerald-400">{stats.jobs_count || 0}</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">Open Roles</div>
              </div>
            </TiltCard>
          </div>

          <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white">Recent Client Inquiries & Quote Requests</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Client</th>
                    <th className="p-3">Subject / Details</th>
                    <th className="p-3">Budget</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {inquiries.slice(0, 5).map((inq) => (
                    <tr key={inq.id}>
                      <td className="p-3 font-bold text-white">{inq.name}<br/><span className="text-[10px] text-slate-400">{inq.email}</span></td>
                      <td className="p-3">{inq.subject || inq.message}</td>
                      <td className="p-3 text-emerald-400 font-bold">{inq.budget || 'N/A'}</td>
                      <td className="p-3 text-slate-400">{new Date(inq.created_at).toLocaleDateString()}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold">
                          {inq.status || 'New'}
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

      {/* TAB 2: INQUIRIES & QUOTES */}
      {activeTab === 'inquiries' && (
        <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white">All Client Leads & Quotes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
                <tr>
                  <th className="p-3">Client</th>
                  <th className="p-3">Message / Summary</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Status Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {inquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td className="p-3 font-bold text-white">{inq.name}<br/><span className="text-[10px] text-slate-400">{inq.email}</span></td>
                    <td className="p-3">{inq.message}</td>
                    <td className="p-3 text-blue-400">{inq.phone || 'N/A'}</td>
                    <td className="p-3">
                      <select
                        value={inq.status || 'new'}
                        onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs text-white"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: PROJECTS MANAGER */}
      {activeTab === 'projects' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateProject} className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white flex items-center space-x-2">
              <FolderPlus className="w-5 h-5 text-blue-400" />
              <span>Add New Project to Website Showcase</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Project Name</label>
                <input required placeholder="e.g. RetailGo E-Commerce App" value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Client Name / Category</label>
                <input placeholder="e.g. RetailGo Pvt Ltd" value={newProject.client} onChange={e => setNewProject({...newProject, client: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Category</label>
                <select value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white">
                  <option value="Web Application">Web Application (MERN)</option>
                  <option value="Mobile App">Mobile App (Flutter / Android)</option>
                  <option value="Enterprise Software">Enterprise Software (Java / ERP)</option>
                  <option value="AI & Automation">AI & Automation (Python)</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Tech Stack (comma separated)</label>
                <input placeholder="React, Node.js, Express, MongoDB" value={newProject.tech_stack} onChange={e => setNewProject({...newProject, tech_stack: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Project Image URL</label>
              <input placeholder="Image URL (e.g. https://...)" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Short Description</label>
              <textarea rows={3} placeholder="Describe the project features and achievements..." value={newProject.short_desc} onChange={e => setNewProject({...newProject, short_desc: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <button type="submit" className="px-6 py-3 rounded-xl btn-3d-primary text-white font-extrabold text-xs shadow-lg">
              Save & Publish Project
            </button>
          </form>

          {/* Current Published Projects List */}
          <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white">Live Published Projects ({projects.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div key={p.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded-xl" />
                  <h3 className="font-extrabold text-white text-sm">{p.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.short_desc}</p>
                  <button onClick={() => handleDeleteProject(p.id)} className="w-full py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white font-bold text-xs transition-colors">
                    Delete Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TEAM MANAGER */}
      {activeTab === 'team' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateTeam} className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white flex items-center space-x-2">
              <UserPlus className="w-5 h-5 text-emerald-400" />
              <span>Add Team Member Profile Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Member Name</label>
                <input required placeholder="e.g. Devendra Sharma" value={newTeam.name} onChange={e => setNewTeam({...newTeam, name: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Designation / Role</label>
                <input required placeholder="e.g. Lead Full-Stack Developer" value={newTeam.designation} onChange={e => setNewTeam({...newTeam, designation: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Department</label>
                <select value={newTeam.department} onChange={e => setNewTeam({...newTeam, department: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white">
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">HR</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Photo URL</label>
              <input placeholder="Photo URL" value={newTeam.photo} onChange={e => setNewTeam({...newTeam, photo: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Bio</label>
                <textarea rows={2} placeholder="Describe experience and background..." value={newTeam.bio} onChange={e => setNewTeam({...newTeam, bio: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Skills</label>
                <textarea rows={2} placeholder="React, Node.js, SQL, AWS..." value={newTeam.skills} onChange={e => setNewTeam({...newTeam, skills: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Experience</label>
                <input placeholder="e.g. 5+ years" value={newTeam.experience} onChange={e => setNewTeam({...newTeam, experience: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">LinkedIn URL</label>
                <input placeholder="LinkedIn profile URL" value={newTeam.linkedin} onChange={e => setNewTeam({...newTeam, linkedin: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold mb-1 block">Twitter URL</label>
                <input placeholder="Twitter profile URL" value={newTeam.twitter} onChange={e => setNewTeam({...newTeam, twitter: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button type="submit" className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg">
                {editingTeamId ? 'Update Team Member Profile' : 'Save Team Member Profile'}
              </button>
              {editingTeamId && (
                <button type="button" onClick={resetTeamForm} className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold hover:bg-slate-700">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white">Team Members ({team.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img src={m.photo} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h3 className="font-extrabold text-white text-sm">{m.name}</h3>
                        <p className="text-xs text-blue-400">{m.designation}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{m.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEditTeam(m)} className="p-2 rounded-lg bg-blue-500/10 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteTeam(m.id)} className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {m.bio && <p className="text-[11px] text-slate-300 line-clamp-3">{m.bio}</p>}
                  <div className="text-[10px] text-slate-400 space-y-1">
                    {m.skills && <div><span className="font-semibold text-slate-200">Skills:</span> {m.skills}</div>}
                    {m.experience && <div><span className="font-semibold text-slate-200">Experience:</span> {m.experience}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: JOBS */}
      {activeTab === 'jobs' && (
        <div className="space-y-8">
          <form onSubmit={handleCreateJob} className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white">Post New Job Opening</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required placeholder="Job Title" value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} className="bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Location" value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} className="bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
              <input placeholder="Salary" value={newJob.salary} onChange={e => setNewJob({...newJob, salary: e.target.value})} className="bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>
            <textarea rows={2} placeholder="Job Description" value={newJob.description} onChange={e => setNewJob({...newJob, description: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            <button type="submit" className="px-6 py-2.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs">Publish Job Opening</button>
          </form>

          <div className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white">Candidate Applications ({applications.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Candidate</th>
                    <th className="p-3">Job Applied</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Cover Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="p-3 font-bold text-white">{app.name}</td>
                      <td className="p-3 text-blue-400 font-semibold">{app.job_title}</td>
                      <td className="p-3">{app.email}<br/><span className="text-[10px] text-slate-400">{app.phone}</span></td>
                      <td className="p-3 text-[11px] text-slate-300">{app.cover_letter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: BLOGS */}
      {activeTab === 'blogs' && (
        <form onSubmit={handleCreateBlog} className="glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white">Publish New Blog Article</h2>
          <input required placeholder="Blog Title" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
          <textarea rows={4} placeholder="Article Content" value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
          <button type="submit" className="px-6 py-2.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs">Publish Article</button>
        </form>
      )}

      {/* TAB 7: CMS TRANSLATIONS */}
      {activeTab === 'languages' && (
        <div className="glass-panel-luxury p-8 rounded-3xl border border-slate-800 space-y-6 max-w-2xl">
          <h2 className="text-xl font-extrabold text-white">Multi-Language String Dictionary (EN, HI, AR)</h2>
          <form onSubmit={handleSaveTranslation} className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Language</label>
              <select value={transLang} onChange={e => setTransLang(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white">
                <option value="en">English (en)</option>
                <option value="hi">Hindi (hi)</option>
                <option value="ar">Arabic (ar)</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Translation Key Name</label>
              <input required type="text" value={transKey} onChange={e => setTransKey(e.target.value)} placeholder="e.g. nav_home" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Translated String Value</label>
              <input required type="text" value={transVal} onChange={e => setTransVal(e.target.value)} placeholder="e.g. Home" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <button type="submit" className="w-full py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs flex items-center justify-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save String Translation</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 8: SEO */}
      {activeTab === 'seo' && (
        <div className="glass-panel-luxury p-8 rounded-3xl border border-slate-800 space-y-6 max-w-2xl">
          <h2 className="text-xl font-extrabold text-white">SEO & Social Meta Tags</h2>
          <form onSubmit={handleSaveSeo} className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Meta Title</label>
              <input type="text" value={seo.meta_title || ''} onChange={e => setSeo({...seo, meta_title: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold mb-1 block">Meta Description</label>
              <textarea rows={3} value={seo.meta_description || ''} onChange={e => setSeo({...seo, meta_description: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white" />
            </div>

            <button type="submit" className="w-full py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs flex items-center justify-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Meta Tags</span>
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
