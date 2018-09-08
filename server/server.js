const db = require('../database/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
// const peoplebought = require('./router/peoplebought')

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')))


app.get('*', function(req, res) {
  db.find()
  res.send(data)
  // res.sendFile(path.join(__dirname, '../public/index.html'))
})
//Router for Server
// app.use('/peoplebought', peoplebought)


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
