import express from 'express';
import exphbs from 'express-handlebars';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

import tasks from './routes/tasks.mjs';

app.use('/tasks', tasks);

app.get('/', (req, res) => {
  res.redirect('/tasks');
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
