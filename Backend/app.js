//* DotEnv
require('dotenv').config();
//* Require  Express
const express = require('express');
const app = express();
//* Middlewares json
app.use(express.json());
//* logeer simple

if (process.env.NODE_ENV === 'dev') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

// Route Test
app.get('/test', (req, res) => {
  res.status(200).json({
    msg: 'Test Router',
  });
});
//* Connection DB
const conectedDb = require('./config/db');
conectedDb();

//* Port
const port = process.env.PORT || 3000;

//* Run Server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
