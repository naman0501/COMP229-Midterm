/*****************************************
 //    File Name: index.js
 // Student Name: Naman Prabhaker
 //   Student ID: 301274515
 //         Date: July 07, 2023
 *****************************************/
let express = require('express');
let mongoose = require('mongoose');

// public controller function to display the homepage
module.exports.displayHomePage = function (req, res, next){
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
}

