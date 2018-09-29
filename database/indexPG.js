// const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'eddielo',
//   host: 'localhost',
//   database: 'alsoBought',
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// const client = new Client({
//   user: 'eddielo',
//   host: 'localhost',
//   database: 'alsoBought',
// });

// client.connect();

// client.query('SELECT NOW() as now')
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))
//   .then(() => client.end());
