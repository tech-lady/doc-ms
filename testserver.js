import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';

import routes from './server/routes';
import models from './server/models';


const app = express();


// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require all routes by importing the index.js from /routes
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use('/api', routes.roleRouter);
app.use('/api', routes.docRouter);
app.use('/api', routes.userRouter);


app.get('/*', (req, res) => {
  res.json({ message: 'Welcome to the beginning of greatness.' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server started in port ${port}`);
});

export default app;
