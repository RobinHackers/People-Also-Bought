const express = require('express');
const parser = require('body-parser');

require('newrelic');

const app = express();
app.set('PORT', process.env.PORT || 7878);
app.set('HOST', process.env.HOST || 'localhost');

app.use('/:companyAbbr', express.static('public'));

// const morgan = require('morgan');
// app.use(morgan('dev'));

// --- REDIS CACHE ---
const redis = require('redis');
const path = require('path');

const client = redis.createClient(process.env.REDIS_PORT || 6379);

client.on('connect', () => {
  console.log('Redis client connected');
});

const cache = (req, res, next) => {
  client.get(path.basename(req.url), (error, data) => {
    if (error) { res.status('401').send(error); }
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};

module.exports = client;
// --- REDIS CACHE ---

// // --- Single Server ---
// const router = require('./routes');

// app.use(parser.json());

// app.use('/api', cache, router);
// // --- Single Server ---


// --- Load Balancing ---
const proxy = require('express-http-proxy');
require('./servers.js');

const servers = ['http://localhost:3000', 'http://localhost:3001'];
let current = 0;
const handler = (req, res, next) => {
  const url = servers[current];
  current = (current + 1) % servers.length;
  app.use('/', proxy(url));
  next();
};
app.use('/', handler);
// --- Load Balancing ---

app.listen(app.get('PORT'), app.get('HOST'), () => {
  console.log(`App is listening to ${app.get('PORT')}`);
});
