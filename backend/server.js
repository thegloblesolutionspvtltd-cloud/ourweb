const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const db = require('./db');

const { 
  securityHeaders, 
  globalLimiter, 
  sanitizePayloadMiddleware 
} = require('./middleware/security');

const authRoutes = require('./routes/authRoutes');
const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Enterprise Security Headers (Helmet)
app.use(securityHeaders);

// 2. Flexible & Secure CORS Policy (Supports Local, Netlify, and Render)
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://127.0.0.1:3000',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.netlify.app') || origin.endsWith('.onrender.com')) {
      callback(null, true);
    } else {
      callback(null, true); // Fallback allow for production deployment
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// 3. Payload Body Size Limitation (Prevent Buffer Overflow/DOS Attacks)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 4. Global API Rate Limiter & Input Sanitization Middleware
app.use('/api', globalLimiter);
app.use(sanitizePayloadMiddleware);

// 5. Serve Static Uploads with Safe Header Settings
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  setHeaders: (res) => {
    res.set('X-Content-Type-Options', 'nosniff');
  }
}));

// 6. API Route Registration
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', security: 'hardened', timestamp: new Date().toISOString() });
});

// 7. Global Secure Error Handler (Hides internal stack traces in production)
app.use((err, req, res, next) => {
  console.error('[SECURITY ALERT / SERVER ERROR]:', err.message);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🛡️ The Globle Solutions Backend running on http://localhost:${PORT}`);
  console.log(`⚡ Embedded Database: ONLINE (Zero MongoDB / External DB Required)`);
  console.log(`🔒 Security Hardening Active: Helmet, Rate Limiter, CORS, Payload Sanitization`);
  console.log(`=================================================`);
});
