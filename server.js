import express from 'express';
import logger from 'morgan';
import sequelize from 'sequelize';
import bodyParser from 'body-parser';
import routes from './server/routes';
import models from './server/models';
import http from 'http';


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require all routes by importing the index.js from /routes
// require('./server/routes/index')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use('/', routes.roleRouter);
app.use('/', routes.docRouter);
app.use('/', routes.userRouter);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of greatness.',
}));


// models.sequelize.sync().then(() => {
      //   console.log('database migrated');
      // });



const port = parseInt(process.env.PORT, 10) || 8000;
const server = http.createServer(app);
server
.listen(port, () => {
  console.log(`app started on port: ${port}`);
});

export default server;
