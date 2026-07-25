const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { sanitizeString } = require('../middleware/security');
const { validateAWSConfig } = require('../config/aws');

router.use(authenticateToken);

// GET /api/admin/aws-status (Secure AWS Authentication Audit for Super Admin)
router.get('/aws-status', requireRole(['Super Admin']), (req, res) => {
  const awsSecurityAudit = validateAWSConfig();
  res.json(awsSecurityAudit);
});

// GET /api/admin/stats - Overview metrics
router.get('/stats', (req, res) => {
  const stats = {};
  
  db.get('SELECT COUNT(*) as inquiries FROM inquiries', [], (err, r1) => {
    stats.inquiries = r1 ? r1.inquiries : 0;
    db.get('SELECT COUNT(*) as projects FROM projects', [], (err, r2) => {
      stats.projects = r2 ? r2.projects : 0;
      db.get('SELECT COUNT(*) as team FROM team', [], (err, r3) => {
        stats.team = r3 ? r3.team : 0;
        db.get('SELECT COUNT(*) as blogs FROM blogs', [], (err, r4) => {
          stats.blogs = r4 ? r4.blogs : 0;
          db.get('SELECT COUNT(*) as jobs FROM jobs', [], (err, r5) => {
            stats.jobs = r5 ? r5.jobs : 0;
            db.get('SELECT COUNT(*) as applications FROM applications', [], (err, r6) => {
              stats.applications = r6 ? r6.applications : 0;
              res.json(stats);
            });
          });
        });
      });
    });
  });
});

// GET /api/admin/inquiries
router.get('/inquiries', requireRole(['Super Admin', 'Admin', 'Sales Manager']), (req, res) => {
  db.all('SELECT * FROM inquiries ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch inquiries' });
    res.json(rows || []);
  });
});

// PATCH /api/admin/inquiries/:id
router.patch('/inquiries/:id', requireRole(['Super Admin', 'Admin', 'Sales Manager']), (req, res) => {
  const status = sanitizeString(req.body.status);
  const id = parseInt(req.params.id, 10);
  db.run('UPDATE inquiries SET status = ? WHERE id = ?', [status, id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to update status' });
    res.json({ message: 'Inquiry status updated' });
  });
});

// GET /api/admin/quotes
router.get('/quotes', requireRole(['Super Admin', 'Admin', 'Sales Manager']), (req, res) => {
  db.all('SELECT * FROM quotes ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch quotes' });
    res.json(rows || []);
  });
});

// GET /api/admin/applications
router.get('/applications', requireRole(['Super Admin', 'Admin', 'HR Manager']), (req, res) => {
  db.all('SELECT * FROM applications ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch applications' });
    res.json(rows || []);
  });
});

// --- SERVICES CMS ---
router.post('/services', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const title = sanitizeString(req.body.title);
  const slug = sanitizeString(req.body.slug);
  const category = sanitizeString(req.body.category);
  const short_desc = sanitizeString(req.body.short_desc);
  const full_desc = sanitizeString(req.body.full_desc);
  const icon = sanitizeString(req.body.icon) || 'Code';
  const features = req.body.features || [];

  const stmt = db.prepare('INSERT INTO services (title, slug, category, short_desc, full_desc, icon, features) VALUES (?, ?, ?, ?, ?, ?, ?)');
  stmt.run(title, slug, category, short_desc, full_desc, icon, JSON.stringify(features), function(err) {
    if (err) return res.status(500).json({ error: 'Failed to create service' });
    res.json({ message: 'Service created', id: this.lastID });
  });
});

router.delete('/services/:id', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.run('DELETE FROM services WHERE id=?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to delete service' });
    res.json({ message: 'Service deleted' });
  });
});

// --- PROJECTS CMS ---
router.post('/projects', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const name = sanitizeString(req.body.name);
  const client = sanitizeString(req.body.client);
  const category = sanitizeString(req.body.category);
  const short_desc = sanitizeString(req.body.short_desc);
  const problem = sanitizeString(req.body.problem);
  const solution = sanitizeString(req.body.solution);
  const features = req.body.features || [];
  const tech_stack = req.body.tech_stack || [];
  const image = sanitizeString(req.body.image);
  const live_url = sanitizeString(req.body.live_url);
  const app_store_url = sanitizeString(req.body.app_store_url);
  const play_store_url = sanitizeString(req.body.play_store_url);

  const stmt = db.prepare('INSERT INTO projects (name, client, category, short_desc, problem, solution, features, tech_stack, image, live_url, app_store_url, play_store_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  stmt.run(name, client, category, short_desc, problem, solution, JSON.stringify(features), JSON.stringify(tech_stack), image, live_url, app_store_url, play_store_url, function(err) {
    if (err) return res.status(500).json({ error: 'Failed to create project' });
    res.json({ message: 'Project created', id: this.lastID });
  });
});

router.delete('/projects/:id', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.run('DELETE FROM projects WHERE id=?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to delete project' });
    res.json({ message: 'Project deleted' });
  });
});

// --- TEAM CMS ---
router.post('/team', requireRole(['Super Admin', 'Admin', 'HR Manager']), (req, res) => {
  const name = sanitizeString(req.body.name);
  const designation = sanitizeString(req.body.designation);
  const department = sanitizeString(req.body.department);
  const photo = sanitizeString(req.body.photo);
  const bio = sanitizeString(req.body.bio);
  const skills = sanitizeString(req.body.skills);
  const experience = sanitizeString(req.body.experience);
  const linkedin = sanitizeString(req.body.linkedin);
  const twitter = sanitizeString(req.body.twitter);

  const stmt = db.prepare('INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  stmt.run(name, designation, department, photo, bio, skills, experience, linkedin, twitter, function(err) {
    if (err) return res.status(500).json({ error: 'Failed to add team member' });
    res.json({ message: 'Team member added', id: this.lastID });
  });
});

router.delete('/team/:id', requireRole(['Super Admin', 'Admin', 'HR Manager']), (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.run('DELETE FROM team WHERE id=?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to delete team member' });
    res.json({ message: 'Team member deleted' });
  });
});

// --- BLOGS CMS ---
router.post('/blogs', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const title = sanitizeString(req.body.title);
  const slug = sanitizeString(req.body.slug) || title.toLowerCase().replace(/ /g, '-');
  const category = sanitizeString(req.body.category);
  const author = sanitizeString(req.body.author);
  const date = sanitizeString(req.body.date) || new Date().toLocaleDateString();
  const image = sanitizeString(req.body.image);
  const content = sanitizeString(req.body.content);
  const tags = req.body.tags || [];
  const seo_title = sanitizeString(req.body.seo_title);
  const seo_desc = sanitizeString(req.body.seo_desc);

  const stmt = db.prepare('INSERT INTO blogs (title, slug, category, author, date, image, content, tags, seo_title, seo_desc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  stmt.run(title, slug, category, author, date, image, content, JSON.stringify(tags), seo_title, seo_desc, function(err) {
    if (err) return res.status(500).json({ error: 'Failed to create blog' });
    res.json({ message: 'Blog post created', id: this.lastID });
  });
});

router.delete('/blogs/:id', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.run('DELETE FROM blogs WHERE id=?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to delete blog' });
    res.json({ message: 'Blog deleted' });
  });
});

// --- JOBS CMS ---
router.post('/jobs', requireRole(['Super Admin', 'Admin', 'HR Manager']), (req, res) => {
  const title = sanitizeString(req.body.title);
  const department = sanitizeString(req.body.department);
  const location = sanitizeString(req.body.location);
  const work_type = sanitizeString(req.body.work_type);
  const salary = sanitizeString(req.body.salary);
  const description = sanitizeString(req.body.description);
  const requirements = req.body.requirements || [];

  const stmt = db.prepare('INSERT INTO jobs (title, department, location, work_type, salary, description, requirements, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, 1)');
  stmt.run(title, department, location, work_type, salary, description, JSON.stringify(requirements), function(err) {
    if (err) return res.status(500).json({ error: 'Failed to create job posting' });
    res.json({ message: 'Job posting created', id: this.lastID });
  });
});

router.delete('/jobs/:id', requireRole(['Super Admin', 'Admin', 'HR Manager']), (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.run('DELETE FROM jobs WHERE id=?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to delete job posting' });
    res.json({ message: 'Job posting deleted' });
  });
});

// --- TRANSLATIONS CMS ---
router.post('/translations', requireRole(['Super Admin', 'Admin', 'Content Manager']), (req, res) => {
  const lang = sanitizeString(req.body.lang);
  const key_name = sanitizeString(req.body.key_name);
  const val_text = sanitizeString(req.body.val_text);

  db.run('INSERT OR REPLACE INTO translations (lang, key_name, val_text) VALUES (?, ?, ?)', [lang, key_name, val_text], function(err) {
    if (err) return res.status(500).json({ error: 'Failed to update translation' });
    res.json({ message: 'Translation updated' });
  });
});

// --- SEO SETTINGS CMS ---
router.put('/seo', requireRole(['Super Admin', 'Admin']), (req, res) => {
  const meta_title = sanitizeString(req.body.meta_title);
  const meta_description = sanitizeString(req.body.meta_description);
  const keywords = sanitizeString(req.body.keywords);
  const og_image = sanitizeString(req.body.og_image);

  db.run('UPDATE seo_settings SET meta_title=?, meta_description=?, keywords=?, og_image=? WHERE id=1',
    [meta_title, meta_description, keywords, og_image],
    function(err) {
      if (err) return res.status(500).json({ error: 'Failed to update SEO settings' });
      res.json({ message: 'SEO settings updated' });
    }
  );
});

module.exports = router;
