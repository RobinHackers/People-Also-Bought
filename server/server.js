const Company = require('../database/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const handleListen = require('./handleListen.js');
// const peoplebought = require('./router/peoplebought')

mongoose.connect('mongodb://localhost/people-also-bought', {useNewUrlParser: true}, (err) => {
  console.log(err || `MongoDB connected`)
})

const app = express();
const PORT = 3003;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')))


app.get('/people-also-bought', function(req, res) {
  // Company.find({}).limit(10).select('currentDay').exec((err, results) => {
  //   if (err) return console.log(err);
  //   res.json(results)
  // })
  Company.find({}).limit(10).exec((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results)
    }
    // console.log('SERVER RESULT', results)
  })
  // Company.find(({}), (err, results) => {
  //   if (err) {
  //     return console.log(err)
  //   } else {
  //     res.json(results);
  //   }
  // })
  // res.sendFile(path.join(__dirname, '../public/index.html'))
})

// app.get('/people-also-bought/company/:company', (req, res) => {
//   const { company } = req.params;

//   database.Company.find({ company }, null, (err, result) => {
//     if (err) {
//       return console.log('callback err');
//     }
//     console.log(req.params);
//     return res.json(result);
//   });

// })


//Router for Server
// app.use('/peoplebought', peoplebought)


// app.listen(PORT, () => {
//   console.log("Listening to port: ", PORT)
// })

app.listen(PORT, handleListen(console.log, PORT));
