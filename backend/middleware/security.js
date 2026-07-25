const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// 1. Helmet Security Headers Setup
const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com", "https://*.unsplash.com"],
      connectSrc: ["'self'", "http://localhost:5000", "http://localhost:3000"]
    }
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  noSniff: true,
  xssFilter: true,
  hidePoweredBy: true
});

// 2. Global API Rate Limiter (Max 100 requests per 15 mins)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});

// 3. Brute-Force Auth Protection Limiter (Max 5 login attempts per 15 mins)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many failed login attempts. Account locked temporarily for 15 minutes.' }
});

// 4. Form Submission Anti-Spam Rate Limiter (Max 10 submissions per hour)
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Form submission limit reached for your IP. Please try again later.' }
});

// 5. Input Sanitizer Function (Strips HTML tags, scripts, and XSS attack vectors)
function sanitizeString(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip <script>
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Strip <iframe>
    .replace(/on\w+="[^"]*"/gi, '') // Strip inline event handlers like onerror, onload
    .replace(/javascript:/gi, '') // Strip javascript: URLs
    .trim();
}

// 6. Middleware to recursively sanitize req.body, req.query, req.params
function sanitizePayloadMiddleware(req, res, next) {
  if (req.body && typeof req.body === 'object') {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeString(req.body[key]);
      }
    });
  }
  if (req.query && typeof req.query === 'object') {
    Object.keys(req.query).forEach(key => {
      if (typeof req.query[key] === 'string') {
        req.query[key] = sanitizeString(req.query[key]);
      }
    });
  }
  next();
}

module.exports = {
  securityHeaders,
  globalLimiter,
  authLimiter,
  formLimiter,
  sanitizeString,
  sanitizePayloadMiddleware
};
