import mysql from 'mysql2';

const db = mysql.createPool({
  connectionLimit: 1,
  host: 'localhost',
  user: 'root',
  password: '1597532684',
  database: 'to-do-list',
});

export default db;
