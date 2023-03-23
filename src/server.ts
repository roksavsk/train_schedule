import bodyParser, { json } from 'body-parser';
import express from 'express';

import connection from './config/db';
import routes from './routes/routes';

const app = express();
const port = 3000;

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

connection
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
