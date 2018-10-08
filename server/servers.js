const express = require('express');
const parser = require('body-parser');

const router = require('./routes');

const server1 = express();
server1.use(parser.json());
server1.use('/api', router);
server1.set('PORT', 3000);
server1.listen(server1.get('PORT'), () => {
  console.log(`Server 1 is listening to ${server1.get('PORT')}`);
});

// --- Server 2 ---
const server2 = express();
server2.use(parser.json());
server2.use('/api', router);
server2.set('PORT', 3001);
server2.listen(server2.get('PORT'), () => {
  console.log(`Server 2 is listening to ${server2.get('PORT')}`);
});

// --- Server 3 ---
const server3 = express();
server3.use(parser.json());
server3.use('/api', router);
server3.set('PORT', 3002);
server3.listen(server3.get('PORT'), () => {
  console.log(`Server 3 is listening to ${server3.get('PORT')}`);
});

// --- Server 4 ---
const server4 = express();
server4.use(parser.json());
server4.use('/api', router);
server4.set('PORT', 3003);
server4.listen(server4.get('PORT'), () => {
  console.log(`Server 4 is listening to ${server4.get('PORT')}`);
});
