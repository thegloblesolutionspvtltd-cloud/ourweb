const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./company.db');

db.serialize(() => {
  db.get('SELECT COUNT(*) as count FROM team WHERE name LIKE "%Kajal%"', [], (err, r) => {
    if (!r || r.count === 0) {
      const stmt = db.prepare('INSERT INTO team (name, designation, department, photo, bio, skills, experience, linkedin, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
      stmt.run(
        'Kajal Singh',
        'Social Media Manager & Growth Specialist',
        'Sales & Marketing',
        '/kajal_singh.png',
        'Driving social media marketing strategies, digital audience growth (2M+ Impressions, 10k+ Followers), content creation, and analytics tracking.',
        'Social Media Strategy, Instagram & TikTok Growth, Analytics, Content Creation',
        'Social Media Specialist',
        'https://linkedin.com',
        'https://twitter.com'
      );
      stmt.finalize();
      console.log('Successfully inserted Kajal Singh into database!');
    } else {
      console.log('Kajal Singh is already present in database!');
    }
  });
});
