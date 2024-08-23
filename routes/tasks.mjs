import express from 'express';
import db from '../db/db.mjs';

const task = express.Router();

task.get('/', (req, res) => {
  const query = 'SELECT * FROM tasks';

  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      res.render('home', { tasks: results });
    }
  });
});

task.post('/add', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.redirect('/tasks');

    return;
  }

  const query = 'INSERT INTO tasks (??, ??) VALUES (?, ?)';

  db.query(query, ['name', 'description', name, description], (error) => {
    if (error) {
      console.error(error);
    } else {
      res.redirect('/tasks');
    }
  });
});

task.post('/done/:id', (req, res) => {
  const { id } = req.params;

  const query = 'UPDATE tasks SET done = NOT done WHERE ?? = ?';

  db.query(query, ['id_task', id], (error) => {
    if (error) {
      console.error(error);
    } else {
      res.redirect('/tasks');
    }
  });
});

task.post('/delete/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tasks WHERE ?? = ?';

  db.query(query, ['id_task', id], (error) => {
    if (error) {
      console.error(error);
    } else {
      res.redirect('/tasks');
    }
  });
});

export default task;
