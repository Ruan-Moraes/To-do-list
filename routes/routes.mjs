import express from 'express';
import db from '../db/db.mjs';

const router = express.Router();

router.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';

  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      res.render('home', { tasks: results });
    }
  });
});

router.post('/tasks/add', (req, res) => {});

export default router;
