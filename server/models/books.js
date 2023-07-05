/*****************************************
 //    File Name: books.js
 // Student Name: Naman Prabhaker
 //   Student ID: 301274515
 //         Date: July 07, 2023
 *****************************************/

 let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
