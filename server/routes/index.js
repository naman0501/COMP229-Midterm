/*****************************************
 //    File Name: index.js
 // Student Name: Naman Prabhaker
 //   Student ID: 301274515
 //         Date: July 07, 2023
 *****************************************/

 // modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
