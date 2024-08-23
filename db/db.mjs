import mysql from 'mysql2';

const db = mysql.createPool({
  connectionLimit: 1,
  host: 'localhost',
  user: 'root',
  password: '1597532684',
  database: 'to-do-list',
});

db.query('CREATE TABLE IF NOT EXISTS tasks (id_task int primary key auto_increment, name VARCHAR(255) NOT NULL, description TEXT, done BOOLEAN DEFAULT false);');

export default db;