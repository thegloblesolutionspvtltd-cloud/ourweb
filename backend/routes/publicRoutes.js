const express = require('express');
const router = express.Router();
const db = require('../db');
const { formLimiter, sanitizeString } = require('../middleware/security');
const { sendHRInquiryEmail } = require('../services/emailService');

// GET /api/public/info
router.get('/info', (req, res) => {
  db.get('SELECT * FROM company_info LIMIT 1', [], (err, row) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    res.json(row || {});
  });
});

// GET /api/public/founder
router.get('/founder', (req, res) => {
  db.get('SELECT * FROM founder LIMIT 1', [], (err, row) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    res.json(row || {});
  });
});

// GET /api/public/team
router.get('/team', (req, res) => {
  db.all('SELECT * FROM team ORDER BY id ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    res.json(rows || []);
  });
});

// GET /api/public/services
router.get('/services', (req, res) => {
  db.all('SELECT * FROM services ORDER BY id ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const formatted = (rows || []).map(r => ({
      ...r,
      features: r.features ? JSON.parse(r.features) : []
    }));
    res.json(formatted);
  });
});

// GET /api/public/projects
router.get('/projects', (req, res) => {
  db.all('SELECT * FROM projects ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const formatted = (rows || []).map(r => ({
      ...r,
      features: r.features ? JSON.parse(r.features) : [],
      tech_stack: r.tech_stack ? JSON.parse(r.tech_stack) : []
    }));
    res.json(formatted);
  });
});

// GET /api/public/products
router.get('/products', (req, res) => {
  db.all('SELECT * FROM products ORDER BY id ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const formatted = (rows || []).map(r => ({
      ...r,
      features: r.features ? JSON.parse(r.features) : [],
      screenshots: r.screenshots ? JSON.parse(r.screenshots) : []
    }));
    res.json(formatted);
  });
});

// GET /api/public/blogs
router.get('/blogs', (req, res) => {
  db.all('SELECT * FROM blogs ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const formatted = (rows || []).map(r => ({
      ...r,
      tags: r.tags ? JSON.parse(r.tags) : []
    }));
    res.json(formatted);
  });
});

// GET /api/public/blogs/:slug
router.get('/blogs/:slug', (req, res) => {
  const cleanSlug = sanitizeString(req.params.slug);
  db.get('SELECT * FROM blogs WHERE slug = ?', [cleanSlug], (err, row) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    if (!row) return res.status(404).json({ error: 'Blog post not found' });
    row.tags = row.tags ? JSON.parse(row.tags) : [];
    res.json(row);
  });
});

// GET /api/public/jobs
router.get('/jobs', (req, res) => {
  db.all('SELECT * FROM jobs WHERE is_active = 1 ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const formatted = (rows || []).map(r => ({
      ...r,
      requirements: r.requirements ? JSON.parse(r.requirements) : []
    }));
    res.json(formatted);
  });
});

// GET /api/public/translations/:lang
router.get('/translations/:lang', (req, res) => {
  const lang = sanitizeString(req.params.lang) || 'en';
  db.all('SELECT key_name, val_text FROM translations WHERE lang = ?', [lang], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    const translationMap = {};
    (rows || []).forEach(r => {
      translationMap[r.key_name] = r.val_text;
    });
    res.json(translationMap);
  });
});

// GET /api/public/seo
router.get('/seo', (req, res) => {
  db.get('SELECT * FROM seo_settings LIMIT 1', [], (err, row) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    res.json(row || {});
  });
});

// POST /api/public/inquiry (Contact form - Rate Limited & Sanitized)
router.post('/inquiry', formLimiter, async (req, res) => {
  const name = sanitizeString(req.body.name);
  const company_name = sanitizeString(req.body.company_name);
  const email = sanitizeString(req.body.email);
  const phone = sanitizeString(req.body.phone);
  const service_required = sanitizeString(req.body.service_required);
  const budget = sanitizeString(req.body.budget);
  const description = sanitizeString(req.body.description);

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  const stmt = db.prepare(`INSERT INTO inquiries (name, company_name, email, phone, service_required, budget, description, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'New')`);
  stmt.run(name, company_name || '', email, phone || '', service_required || '', budget || '', description || '', async function(err) {
    if (err) return res.status(500).json({ error: 'Failed to record inquiry' });

    try {
      const emailResult = await sendHRInquiryEmail({
        name,
        company_name,
        email,
        phone,
        service_required,
        budget,
        description,
        timestamp: new Date().toLocaleString()
      });

      if (!emailResult?.delivered) {
        return res.status(502).json({
          error: 'Inquiry saved, but email delivery failed. Please verify your Gmail SMTP/App Password settings.'
        });
      }

      return res.json({ message: 'Inquiry submitted successfully and HR notified via email', id: this.lastID });
    } catch (e) {
      console.error('HR Email Notification Error:', e.message);
      return res.status(502).json({
        error: 'Inquiry saved, but email delivery failed. Please verify your Gmail SMTP/App Password settings.'
      });
    }
  });
});

// POST /api/public/quote (Get a Quote form - Rate Limited & Sanitized)
router.post('/quote', formLimiter, (req, res) => {
  const name = sanitizeString(req.body.name);
  const email = sanitizeString(req.body.email);
  const phone = sanitizeString(req.body.phone);
  const project_type = sanitizeString(req.body.project_type);
  const budget = sanitizeString(req.body.budget);
  const timeline = sanitizeString(req.body.timeline);
  const features = sanitizeString(req.body.features);

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  const stmt = db.prepare(`INSERT INTO quotes (name, email, phone, project_type, budget, timeline, features, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'New')`);
  stmt.run(name, email, phone || '', project_type || '', budget || '', timeline || '', features || '', function(err) {
    if (err) return res.status(500).json({ error: 'Failed to record quote request' });

    // Send automated email notification to HR
    sendHRInquiryEmail({
      name,
      company_name: 'Project Quote Request',
      email,
      phone,
      service_required: project_type || 'Quote Request',
      budget,
      description: `Timeline: ${timeline || 'N/A'}\nRequested Features: ${features || 'N/A'}`,
      timestamp: new Date().toLocaleString()
    }).catch(e => console.error('HR Email Quote Notification Error:', e.message));

    res.json({ message: 'Quote request submitted successfully and HR notified', id: this.lastID });
  });
});

// POST /api/public/apply (Job application - Rate Limited & Sanitized)
router.post('/apply', formLimiter, (req, res) => {
  const job_id = parseInt(req.body.job_id, 10) || 0;
  const job_title = sanitizeString(req.body.job_title);
  const name = sanitizeString(req.body.name);
  const email = sanitizeString(req.body.email);
  const phone = sanitizeString(req.body.phone);
  const cover_letter = sanitizeString(req.body.cover_letter);
  const linkedin = sanitizeString(req.body.linkedin);

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  const stmt = db.prepare(`INSERT INTO applications (job_id, job_title, name, email, phone, cover_letter, linkedin) VALUES (?, ?, ?, ?, ?, ?, ?)`);
  stmt.run(job_id, job_title || '', name, email, phone || '', cover_letter || '', linkedin || '', function(err) {
    if (err) return res.status(500).json({ error: 'Failed to record job application' });

    // Send automated email notification to HR
    sendHRInquiryEmail({
      name,
      company_name: `Job Application: ${job_title || 'General Position'}`,
      email,
      phone,
      service_required: `Career Application (${job_title || 'General'})`,
      budget: 'N/A',
      description: `LinkedIn: ${linkedin || 'N/A'}\nCover Letter: ${cover_letter || 'N/A'}`,
      timestamp: new Date().toLocaleString()
    }).catch(e => console.error('HR Email Job Application Notification Error:', e.message));

    res.json({ message: 'Application submitted successfully and HR notified', id: this.lastID });
  });
});

module.exports = router;
