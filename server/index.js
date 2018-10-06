const express = require('express');
const parser = require('body-parser');

require('newrelic');

const app = express();
app.set('PORT', process.env.PORT || 7878);

app.use('/:companyAbbr', express.static('public'));

// --- Solo ---
const router = require('./routes');

app.use(parser.json());

app.use('/api', router);
// --- Solo ---


// // --- Load Balancing ---
// const proxy = require('express-http-proxy');
// require('./servers.js');

// const servers = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'];
// let current = 0;
// const handler = (req, res, next) => {
//   const url = servers[current];
//   current = (current + 1) % servers.length;
//   app.use('/', proxy(url));
//   next();
// };
// app.use('/', handler);
// // --- Load Balancing ---

app.listen(app.get('PORT'), () => {
  console.log(`App is listening to ${app.get('PORT')}`);
});
