import mysql from 'mysql2';

const db = mysql.createPool({
  connectionLimit: 1,
  host: '', // Endereço do seu banco de dados
  user: '', // Usuário do seu banco de dados
  password: '', // Senha do seu banco de dados
  database: '', // Nome do seu banco de dados
});

db.query('CREATE TABLE IF NOT EXISTS tasks (id_task int primary key auto_increment, name VARCHAR(255) NOT NULL, description TEXT, done BOOLEAN DEFAULT false);');

export default db;