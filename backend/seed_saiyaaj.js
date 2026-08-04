const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./company.db');

db.serialize(() => {
  db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Saiyaaj%"', [], (err, r) => {
    if (!r || r.count === 0) {
      const stmt = db.prepare('INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
      stmt.run(
        'Saiyaaj',
        'Lead Data Analyst & BI Specialist',
        'Data & Analytics',
        '/saiyaaj.jpg',
        'Specializing in business intelligence, SQL data modeling, data visualization, predictive analytics, and performance dashboard reporting.',
        'Data Analytics, SQL, Python, Power BI, Data Visualization, Business Intelligence',
        'Data Analyst',
        'https://linkedin.com',
        'https://twitter.com'
      );
      stmt.finalize();
      console.log('Successfully inserted Saiyaaj into database!');
    } else {
      console.log('Saiyaaj is already present in database!');
    }
  });
});
