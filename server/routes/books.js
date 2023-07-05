/*****************************************
 //    File Name: books.js
 // Student Name: Naman Prabhaker
 //   Student ID: 301274515
 //         Date: July 07, 2023
 *****************************************/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let bookModel = require('../models/books');

// get the book controller
let bookController = require('../controllers/books')

/* GET books List page. READ */
router.get('/', bookController.getBookList);

//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.getAddBookPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', bookController.addNewBook);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', bookController.getEditBookPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', bookController.editBook);

// GET - process delete by user id
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;
