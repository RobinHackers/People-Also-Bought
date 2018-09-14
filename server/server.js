const express = require('express');
const path = require('path');
const parser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const Company = require('../database/index.js');
const handleListen = require('./handleListen.js');
// const peoplebought = require('./router/peoplebought')

mongoose.connect('mongodb://localhost/people-also-bought', { useNewUrlParser: true }, (err) => {
  console.log(err || 'MongoDB connected');
});

const app = express();
const PORT = 3003;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/people-also-bought', (req, res) => {
  Company.find({ group: 1 }).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
});

// app.listen(PORT, () => {
//   console.log("Listening to port: ", PORT)
// })

app.listen(PORT, handleListen(console.log, PORT));
