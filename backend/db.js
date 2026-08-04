const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'company.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Database Load Error:', err.message);
  } else {
    console.log('⚡ ERA TECH Embedded Self-Contained DB: ONLINE (No MongoDB / External DB Required)');
    console.log('💾 Database File: company.db Auto-Synced Successfully');
  }
});

db.serialize(() => {
  // 1. Users Table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 2. Company Info Table
  db.run(`CREATE TABLE IF NOT EXISTS company_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    hero_title TEXT,
    hero_subtitle TEXT,
    experience_years INTEGER,
    total_projects INTEGER,
    total_clients INTEGER,
    countries_served INTEGER,
    about_text TEXT,
    mission TEXT,
    vision TEXT,
    phone TEXT,
    email TEXT,
    address TEXT,
    whatsapp TEXT
  )`);

  // 3. Founder / Leadership Table
  db.run(`CREATE TABLE IF NOT EXISTS founder (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    photo TEXT,
    bio TEXT,
    education TEXT,
    experience TEXT,
    skills TEXT,
    message TEXT,
    linkedin TEXT,
    email TEXT
  )`);

  // 4. Team Members Table
  db.run(`CREATE TABLE IF NOT EXISTS team (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    department TEXT NOT NULL,
    photo TEXT,
    bio TEXT,
    skills TEXT,
    experience TEXT,
    linkedin TEXT,
    twitter TEXT
  )`);

  // 5. Services Table
  db.run(`CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    short_desc TEXT,
    full_desc TEXT,
    icon TEXT,
    features TEXT
  )`);

  // 6. Projects / Portfolio Table
  db.run(`CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    client TEXT,
    category TEXT NOT NULL,
    short_desc TEXT,
    problem TEXT,
    solution TEXT,
    features TEXT,
    tech_stack TEXT,
    image TEXT,
    live_url TEXT,
    app_store_url TEXT,
    play_store_url TEXT
  )`);

  // 7. Products / Software Showcase Table
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    logo TEXT,
    short_desc TEXT,
    features TEXT,
    screenshots TEXT,
    demo_url TEXT,
    pricing TEXT
  )`);

  // 8. Blog Posts Table
  db.run(`CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    author TEXT NOT NULL,
    date TEXT NOT NULL,
    image TEXT,
    content TEXT,
    tags TEXT,
    seo_title TEXT,
    seo_desc TEXT
  )`);

  // 9. Careers / Jobs Table
  db.run(`CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL,
    work_type TEXT NOT NULL,
    salary TEXT,
    description TEXT,
    requirements TEXT,
    is_active INTEGER DEFAULT 1
  )`);

  // 10. Inquiries Table
  db.run(`CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    service_required TEXT,
    budget TEXT,
    description TEXT,
    status TEXT DEFAULT 'New',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 11. Quote Requests Table
  db.run(`CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    project_type TEXT,
    budget TEXT,
    timeline TEXT,
    features TEXT,
    status TEXT DEFAULT 'New',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 12. Job Applications Table
  db.run(`CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id INTEGER,
    job_title TEXT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    cover_letter TEXT,
    linkedin TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 13. Multi-Language Translations Table
  db.run(`CREATE TABLE IF NOT EXISTS translations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lang TEXT NOT NULL,
    key_name TEXT NOT NULL,
    val_text TEXT NOT NULL,
    UNIQUE(lang, key_name)
  )`);

  // 14. SEO Settings Table
  db.run(`CREATE TABLE IF NOT EXISTS seo_settings (
    id INTEGER PRIMARY KEY DEFAULT 1,
    meta_title TEXT,
    meta_description TEXT,
    keywords TEXT,
    og_image TEXT
  )`);

  seedInitialData();
  updateFounderToRahulTiwari();
});

function updateFounderToRahulTiwari() {
  db.run(`UPDATE founder SET name = ?, designation = ?, education = ?, email = ? WHERE id = 1`,
    ['Rahul Tiwari', 'Founder & CEO', 'B.Tech in Computer Science', 'thegloblesolutionspvtltd@gmail.com']
  );
  db.run(`UPDATE blogs SET author = ? WHERE author = 'Vikramaditya Sharma'`, ['Rahul Tiwari']);
}

function seedInitialData() {
  // Seed Users
  db.get('SELECT COUNT(*) as count FROM users', [], (err, row) => {
    if (row && row.count === 0) {
      const hash1 = bcrypt.hashSync('admin123', 10);
      const hash2 = bcrypt.hashSync('sales123', 10);
      const hash3 = bcrypt.hashSync('hr123', 10);

      const stmt = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
      stmt.run('Super Admin', 'admin@company.com', hash1, 'Super Admin');
      stmt.run('Sales Manager', 'sales@company.com', hash2, 'Sales Manager');
      stmt.run('HR Manager', 'hr@company.com', hash3, 'HR Manager');
      stmt.finalize();
    }
  });

  // Seed Company Info
  db.get('SELECT COUNT(*) as count FROM company_info', [], (err, row) => {
    if (row && row.count === 0) {
      db.run(`INSERT INTO company_info (name, hero_title, hero_subtitle, experience_years, total_projects, total_clients, countries_served, about_text, mission, vision, phone, email, address, whatsapp)
      VALUES (
        'The Globle Solutions',
        'Building Next-Gen Software & Digital Products',
        'We are a fast-growing technology startup specializing in MERN Stack web applications, Java & Python enterprise backends, C/C++ high-performance systems, mobile apps, and AI solutions.',
        1,
        15,
        10,
        5,
        'The Globle Solutions is a modern, fast-growing technology startup founded by Rahul Tiwari (B.Tech Computer Science). Driven by innovation, we empower businesses with high-performance MERN Stack web development, Java enterprise software, Python AI & ML, C/C++ system engines, and mobile applications.',
        'To empower businesses and startups by delivering reliable, high-performance, and scalable software solutions built on modern tech stacks.',
        'To become a trusted global technology company known for technical excellence, innovation, and client success.',
        '+91 8090121332',
        'thegloblesolutionspvtltd@gmail.com',
        'Engineering Chauraha, Lucknow, Uttar Pradesh, India',
        '+918090121332'
      )`);
    }
  });

  // Seed Founder
  db.get('SELECT COUNT(*) as count FROM founder', [], (err, row) => {
    if (row && row.count === 0) {
      db.run(`INSERT INTO founder (name, designation, photo, bio, education, experience, skills, message, linkedin, email)
      VALUES (
        'Rahul Tiwari',
        'Founder & CEO',
        '/founder.jpg',
        'Passionate software developer and entrepreneur with a degree in Computer Science (B.Tech CSE). Founded The Globle Solutions to help businesses and startups build high-quality Web & Mobile applications.',
        'B.Tech in Computer Science (CSE)',
        'Full-Stack Developer & Tech Founder',
        'MERN Stack, React, Node.js, Python, Java, C/C++, Flutter Mobile, Cloud Computing',
        'Mera goal har client ko modern technology ke saath best service Dena hai. Main har project par personal focus karke fast delivery aur best code quality ensure karta hu.',
        'https://www.linkedin.com/in/rahul-tiwari-3838232a6',
        'thegloblesolutionspvtltd@gmail.com'
      )`);
    } else {
      db.run(`UPDATE founder SET bio = ?, education = ?, photo = ? WHERE id = 1`, [
        'Passionate software developer and entrepreneur with a degree in Computer Science (B.Tech CSE). Founded The Globle Solutions to help businesses and startups build high-quality Web & Mobile applications.',
        'B.Tech in Computer Science (CSE)',
        '/founder.jpg'
      ]);
    }
  });

  // Seed Team (Real Team: Shivangi Pandey, Mr. Priyam Sinha, Vijay Kushwaha, Shailavi Srivastava, Kajal Singh & Saiyaaj)
  db.run(`DELETE FROM team WHERE name NOT LIKE '%Priyam%' AND name NOT LIKE '%Vijay%' AND name NOT LIKE '%Shivangi%' AND name NOT LIKE '%Shailavi%' AND name NOT LIKE '%Kajal%' AND name NOT LIKE '%Saiyaaj%'`, [], () => {
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Shivangi%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Shivangi Pandey', 'Chief Technology Officer (Android & iOS) (CTO, B.Tech CSE)', 'Management', '/shivangi_pandey.jpg', 'Directing technical architecture, Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing.', 'Android & iOS, AWS Cloud, App Deployment, Flutter, Swift, Kotlin, B.Tech CSE', 'B.Tech CSE', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      } else {
        db.run(`UPDATE team SET designation = 'Chief Technology Officer (Android & iOS) (CTO, B.Tech CSE)', bio = 'Directing technical architecture, Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing.', skills = 'Android & iOS, AWS Cloud, App Deployment, Flutter, Swift, Kotlin, B.Tech CSE' WHERE name LIKE "%Shivangi%"`);
      }
    });
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Shailavi%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Shailavi Srivastava', 'Lead Backend Developer (B.Tech CSE)', 'Development', '/shailavi_srivastava.png', 'Specializing in Node.js, Express APIs, Java Spring Boot microservices, Python backends, and SQL/SQLite databases.', 'Node.js, Express, Java Spring Boot, Python, SQL, REST APIs, B.Tech CSE', 'B.Tech CSE', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      }
    });
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Priyam%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Mr. Priyam Sinha', 'Head of Sales & Marketing (B.Tech)', 'Sales & Marketing', '/priyam_sinha.jpg', 'Leading client growth, strategic partnerships, and marketing at TheGloble Software Pvt Ltd.', 'Sales Strategy, Marketing, Client Relations, Growth', 'B.Tech', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      }
    });
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Kajal%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Kajal Singh', 'Social Media Manager & Growth Specialist', 'Sales & Marketing', '/kajal_singh.png', 'Driving social media marketing strategies, digital audience growth (2M+ Impressions, 10k+ Followers), content creation, and analytics tracking.', 'Social Media Strategy, Instagram & TikTok Growth, Analytics, Content Creation', 'Social Media Specialist', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      }
    });
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Saiyaaj%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Saiyaaj', 'Lead Data Analyst & BI Specialist', 'Data & Analytics', '/saiyaaj.jpg', 'Specializing in business intelligence, SQL data modeling, data visualization, predictive analytics, and performance dashboard reporting.', 'Data Analytics, SQL, Python, Power BI, Data Visualization, Business Intelligence', 'Data Analyst', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      }
    });
    db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Vijay%"', [], (err, r) => {
      if (!r || r.count === 0) {
        const stmt = db.prepare(`INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run('Mr. Vijay Sinha', 'Lead Frontend Developer (BCA & MCA CSE)', 'Development', '/vijay_kushwaha.jpg', 'Crafting high-performance React.js, Tailwind CSS, 3D WebGL interfaces, and UI design systems.', 'React.js, JavaScript, Tailwind CSS, 3D WebGL, BCA & MCA CSE', 'BCA & MCA CSE', 'https://linkedin.com', 'https://twitter.com');
        stmt.finalize();
      } else {
        db.run(`UPDATE team SET name = 'Mr. Vijay Sinha', designation = 'Lead Frontend Developer (BCA & MCA CSE)', experience = 'BCA & MCA CSE' WHERE name LIKE "%Vijay%"`);
      }
    });
  });

  // Seed Services
  db.get('SELECT COUNT(*) as count FROM services', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT INTO services (title, slug, category, short_desc, full_desc, icon, features) VALUES (?, ?, ?, ?, ?, ?, ?)`);
      stmt.run(
        'MERN Stack Full-Stack Web Development',
        'mern-stack-development',
        'Web Development',
        'Blazing-fast modern web applications built using MongoDB, Express.js, React, and Node.js.',
        'We engineer modern full-stack web applications using the MERN stack ecosystem. Enjoy single-page React frontend, RESTful Express APIs, and scalable MongoDB databases.',
        'Code',
        JSON.stringify(['React & Redux Single Page Apps', 'Node.js & Express RESTful APIs', 'MongoDB Document Database Architecture', 'JWT Auth & Real-time WebSockets'])
      );
      stmt.run(
        'Java Enterprise & Spring Boot Solutions',
        'java-enterprise-development',
        'Software Development',
        'High-concurrency, mission-critical enterprise platforms powered by Java and Spring Boot.',
        'Build robust, thread-safe enterprise software with Java, Spring Boot, Hibernate, microservices architecture, and high-security compliance.',
        'Server',
        JSON.stringify(['Java Spring Boot Microservices', 'Enterprise ERP & CRM Backends', 'Hibernate & JPA Relational DBs', 'High-Concurrency Multi-threading'])
      );
      stmt.run(
        'Python AI, ML & Fast Data Pipelines',
        'python-ai-ml-services',
        'AI / Automation',
        'Custom Python artificial intelligence models, Django/FastAPI web services, and machine learning.',
        'Harness Python’s rich ecosystem (Django, FastAPI, TensorFlow, PyTorch) for predictive data analytics, automation scripts, and LLM AI integration.',
        'Cpu',
        JSON.stringify(['FastAPI & Django REST Framework', 'PyTorch & TensorFlow Model Training', 'Pandas & NumPy Big Data Processing', 'Custom AI Chatbots & LLM RAG'])
      );
      stmt.run(
        'C / C++ High Performance & Embedded Systems',
        'c-cpp-systems-engineering',
        'Software Development',
        'Ultra-low latency algorithms, memory-optimized C/C++ engines, and embedded software.',
        'When microsecond performance and hardware-level memory management matter, our C and C++ engineers deliver bulletproof low-level code.',
        'Server',
        JSON.stringify(['C++20 High-Performance Engines', 'Low-Latency Networking & Socket Code', 'Embedded C/C++ Device Drivers', 'Memory & Speed Profiling'])
      );
      stmt.run(
        'Mobile App Development (iOS & Android)',
        'mobile-app-development',
        'Mobile App Development',
        'Native and cross-platform mobile apps for iOS and Android built using Flutter and React Native.',
        'Deliver native-feeling mobile experiences with offline support, biometric security, push notifications, and frictionless user onboarding.',
        'Smartphone',
        JSON.stringify(['Flutter & React Native Cross-Platform', 'Native Swift & Kotlin Development', 'App Store & Play Store Publishing', 'Biometrics & Offline Sync'])
      );
      stmt.run(
        'UI/UX & Product Design',
        'ui-ux-design',
        'UI/UX Design',
        'User research, high-fidelity wireframing, design systems, and responsive interactive prototypes.',
        'We combine human psychology with modern aesthetic principles to build interface design systems that boost conversions.',
        'Palette',
        JSON.stringify(['Interactive Figma Prototypes', 'Design Systems & Tokens', 'Mobile & Dashboard Wireframing', 'Usability Testing & Analytics'])
      );
      stmt.finalize();
    }
  });

  // Seed Projects
  db.get('SELECT COUNT(*) as count FROM projects', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT INTO projects (name, client, category, short_desc, problem, solution, features, tech_stack, image, live_url, app_store_url, play_store_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
      stmt.run(
        'OmniCart - MERN Stack E-Commerce Platform',
        'OmniRetail Inc.',
        'MERN Stack',
        'Omnichannel e-commerce web platform and mobile app handling 100,000+ daily orders.',
        'Legacy system couldn’t handle flash sale traffic spikes and lacked real-time order tracking.',
        'Built a high-concurrency MERN stack (MongoDB, Express, React, Node.js) with Redis caching.',
        JSON.stringify(['Real-time MERN order tracking', 'MongoDB aggregations for analytics', 'Multi-currency checkout', 'Push notifications']),
        JSON.stringify(['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'Redis']),
        'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80',
        'https://example.com/omnicart',
        'https://apple.com',
        'https://google.com'
      );
      stmt.run(
        'Era Bank - Java Spring Boot Core Banking Portal',
        'Global Horizon Bank',
        'Java Enterprise',
        'Ultra-secure Java Spring Boot enterprise transaction processing system.',
        'Bank needed zero-loss ACID transactions and multi-level encryption for international wires.',
        'Built a microservices Java Spring Boot architecture with PostgreSQL and Kafka messaging queues.',
        JSON.stringify(['ACID transaction integrity', 'Kafka event streaming', 'Spring Security OAuth2', 'Real-time ledger audit']),
        JSON.stringify(['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker']),
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        'https://example.com/erabank',
        '',
        ''
      );
      stmt.run(
        'QuantEngine - C++ High-Frequency Trading System',
        'Alpha Capital Hedge Fund',
        'C/C++ Systems',
        'Sub-millisecond latency algorithmic trading execution engine written in C++20.',
        'Standard web frameworks introduced 50ms latency bottlenecks during market volatility.',
        'Architected a lock-free multi-threaded C++ engine optimized for CPU cache lines and SIMD vector instructions.',
        JSON.stringify(['Sub-millisecond execution', 'Lock-free queue data structures', 'C++ memory pool allocation', 'Direct socket FIX protocol']),
        JSON.stringify(['C++', 'C', 'Linux Kernel', 'Sockets', 'Multi-threading']),
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        'https://example.com/quantengine',
        '',
        ''
      );
      stmt.finalize();
    }
  });

  // Seed Products
  db.get('SELECT COUNT(*) as count FROM products', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT INTO products (name, logo, short_desc, features, screenshots, demo_url, pricing) VALUES (?, ?, ?, ?, ?, ?, ?)`);
      stmt.run(
        'Era ERP Suite (Java & MERN Stack)',
        'Layers',
        'All-in-one enterprise cloud ERP built with Java Spring Boot backend and React MERN frontend.',
        JSON.stringify(['Employee & Attendance Tracker', 'Payroll & Tax Automation', 'Multi-warehouse Inventory Control', 'Financial Ledger & Reports']),
        JSON.stringify(['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80']),
        'https://demo.eratechsolutions.com/erp',
        '$199 / Month'
      );
      stmt.run(
        'PyBot AI - Python Conversational LLM Platform',
        'Cpu',
        'Enterprise Python & PyTorch customer support automation platform.',
        JSON.stringify(['Custom Document RAG Ingestion', 'Multi-lingual LLM Fine-tuning', 'Python FastAPI Async Workers', 'Analytics Dashboard']),
        JSON.stringify(['https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80']),
        'https://demo.eratechsolutions.com/pybot',
        '$149 / Month'
      );
      stmt.finalize();
    }
  });

  // Seed Blogs
  db.get('SELECT COUNT(*) as count FROM blogs', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT INTO blogs (title, slug, category, author, date, image, content, tags, seo_title, seo_desc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
      stmt.run(
        'Why MERN Stack is the Preferred Choice for Modern Web Startups in 2026',
        'why-mern-stack-wins-2026',
        'Web Development',
        'Rahul Tiwari',
        'July 18, 2026',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
        'The MERN stack (MongoDB, Express, React, Node.js) continues to dominate web app development. Its unified JavaScript/TypeScript language across frontend and backend allows engineering teams to ship features twice as fast...',
        JSON.stringify(['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express']),
        'MERN Stack Advantage in 2026 | TheGloble Software Pvt Ltd',
        'Learn why MERN stack is ideal for building high-speed web apps.'
      );
      stmt.run(
        'Java Spring Boot vs Python FastAPI vs C++ for Enterprise Systems',
        'java-python-cpp-architecture-comparison',
        'Software Development',
        'Aarav Mehta',
        'July 10, 2026',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        'Selecting between Java, Python, C++, and Node.js depends heavily on your system performance requirements. Java Spring Boot offers unrivaled enterprise ecosystem stability, Python powers AI/ML, and C++ delivers raw bare-metal execution speed...',
        JSON.stringify(['Java', 'Python', 'C++', 'MERN', 'Architecture']),
        'Java vs Python vs C++ Comparison | TheGloble Software Pvt Ltd',
        'Technical benchmark of Java, Python, C++, and MERN stack.'
      );
      stmt.finalize();
    }
  });

  // Seed Jobs
  db.get('SELECT COUNT(*) as count FROM jobs', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT INTO jobs (title, department, location, work_type, salary, description, requirements, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
      stmt.run(
        'Senior MERN Stack Developer (React & Node.js)',
        'Development',
        'Silicon Valley, CA (Hybrid / Remote)',
        'Full-Time',
        '$120,000 - $150,000 / year',
        'Lead full-stack web engineering using MongoDB, Express, React, and Node.js.',
        JSON.stringify(['5+ years MERN stack experience', 'Deep understanding of MongoDB schema design & indexing', 'Strong proficiency in React, Node.js, and TypeScript', 'Experience with AWS deployment']),
        1
      );
      stmt.run(
        'Senior Java & C/C++ Systems Engineer',
        'Development',
        'Remote',
        'Full-Time',
        '$130,000 - $160,000 / year',
        'Build high-performance microservices in Java Spring Boot and low-latency C/C++ engines.',
        JSON.stringify(['5+ years Java and C/C++ experience', 'Expertise in multi-threading, concurrency, and memory management', 'Knowledge of SQL databases and Linux Kernel optimization']),
        1
      );
      stmt.finalize();
    }
  });

  // Seed Multi-Language Translations (EN, HI, AR)
  db.get('SELECT COUNT(*) as count FROM translations', [], (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(`INSERT OR REPLACE INTO translations (lang, key_name, val_text) VALUES (?, ?, ?)`);
      
      // English
      stmt.run('en', 'nav_home', 'Home');
      stmt.run('en', 'nav_about', 'About Us');
      stmt.run('en', 'nav_services', 'Services');
      stmt.run('en', 'nav_projects', 'Projects');
      stmt.run('en', 'nav_products', 'Products');
      stmt.run('en', 'nav_team', 'Team');
      stmt.run('en', 'nav_founder', 'Founder');
      stmt.run('en', 'nav_blog', 'Blog');
      stmt.run('en', 'nav_careers', 'Careers');
      stmt.run('en', 'nav_contact', 'Contact Us');
      stmt.run('en', 'btn_get_quote', 'Get a Quote');
      stmt.run('en', 'hero_cta_start', 'Start a Project');
      stmt.run('en', 'hero_cta_services', 'Explore Our Services');

      // Hindi (हिंदी)
      stmt.run('hi', 'nav_home', 'होम');
      stmt.run('hi', 'nav_about', 'हमारे बारे में');
      stmt.run('hi', 'nav_services', 'सेवाएं');
      stmt.run('hi', 'nav_projects', 'प्रोजेक्ट्स');
      stmt.run('hi', 'nav_products', 'उत्पाद / सॉफ्टवेयर');
      stmt.run('hi', 'nav_team', 'हमारी टीम');
      stmt.run('hi', 'nav_founder', 'संस्थापक');
      stmt.run('hi', 'nav_blog', 'ब्लॉग');
      stmt.run('hi', 'nav_careers', 'करियर');
      stmt.run('hi', 'nav_contact', 'संपर्क करें');
      stmt.run('hi', 'btn_get_quote', 'कोटेशन लें');
      stmt.run('hi', 'hero_cta_start', 'प्रोजेक्ट शुरू करें');
      stmt.run('hi', 'hero_cta_services', 'हमारी सेवाएं देखें');

      // Arabic (العربية)
      stmt.run('ar', 'nav_home', 'الرئيسية');
      stmt.run('ar', 'nav_about', 'من نحن');
      stmt.run('ar', 'nav_services', 'خدماتنا');
      stmt.run('ar', 'nav_projects', 'مشاريعنا');
      stmt.run('ar', 'nav_products', 'المنتجات');
      stmt.run('ar', 'nav_team', 'فريق العمل');
      stmt.run('ar', 'nav_founder', 'المؤسس');
      stmt.run('ar', 'nav_blog', 'المدونة');
      stmt.run('ar', 'nav_careers', 'الوظائف');
      stmt.run('ar', 'nav_contact', 'اتصل بنا');
      stmt.run('ar', 'btn_get_quote', 'احصل على عرض سعر');
      stmt.run('ar', 'hero_cta_start', 'ابدأ مشروعاً');
      stmt.run('ar', 'hero_cta_services', 'استكشف خدماتنا');

      stmt.finalize();
    }
  });

  // Seed SEO Settings
  db.get('SELECT COUNT(*) as count FROM seo_settings', [], (err, row) => {
    if (row && row.count === 0) {
      db.run(`INSERT INTO seo_settings (id, meta_title, meta_description, keywords, og_image) VALUES (
        1,
        'TheGloble Software Pvt Ltd | Founded by Rahul Tiwari | B.Tech Computer Science',
        'TheGloble Software Pvt Ltd is founded by Rahul Tiwari (B.Tech Computer Science). We build MERN Stack web apps, Java Enterprise backends, Python AI models, and C/C++ systems.',
        'Rahul Tiwari, Founder & CEO, B.Tech Computer Science, MERN Stack, Java, Python, C, C++, Software company',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
      )`);
    }
  });
}

module.exports = db;
1