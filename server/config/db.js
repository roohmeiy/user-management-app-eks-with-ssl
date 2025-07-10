const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql-container',
  user: 'admin',
  password: 'password', 
  database: 'test_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;

