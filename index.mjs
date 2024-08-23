import express from 'express';
import exphbs from 'express-handlebars';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

import router from './routes/routes.mjs';

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
