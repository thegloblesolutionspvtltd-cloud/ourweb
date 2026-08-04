const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./company.db');

db.serialize(() => {
  db.run(`UPDATE company_info SET name = 'The Globle Solutions', about_text = REPLACE(about_text, 'ERA TECH SOLUTIONS', 'The Globle Solutions') WHERE id = 1`, (err) => {
    if (err) console.error('Error updating company_info:', err.message);
    else console.log('Company info updated in company.db!');
  });
  db.run(`UPDATE founder SET bio = REPLACE(bio, 'ERA TECH SOLUTIONS', 'The Globle Solutions') WHERE id = 1`, (err) => {
    if (err) console.error('Error updating founder:', err.message);
    else console.log('Founder bio updated in company.db!');
  });
  db.run(`UPDATE team SET bio = REPLACE(bio, 'ERA TECH SOLUTIONS', 'The Globle Solutions')`, (err) => {
    if (err) console.error('Error updating team:', err.message);
    else console.log('Team bios updated in company.db!');
  });
  db.run(`UPDATE seo_settings SET meta_title = REPLACE(meta_title, 'ERA TECH SOLUTIONS', 'The Globle Solutions'), meta_description = REPLACE(meta_description, 'ERA TECH SOLUTIONS', 'The Globle Solutions') WHERE id = 1`, (err) => {
    if (err) console.error('Error updating seo_settings:', err.message);
    else console.log('SEO settings updated in company.db!');
  });
});
