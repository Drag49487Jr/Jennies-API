// /*
// Copyright (c) 2017, ZOHO CORPORATION
// License: MIT
// */
// var fs = require('fs');
// var path = require('path');
// var express = require('express');
// var bodyParser = require('body-parser');
// var errorHandler = require('errorhandler');
// var morgan = require('morgan');
// var serveIndex = require('serve-index');
// var https = require('https');
// // var chalk = require('chalk');

// process.env.PWD = process.env.PWD || process.cwd();


// var expressApp = express();
// var port = 5000;

// // expressApp.set('port', port);
// // expressApp.use(morgan('dev'));
// // expressApp.use(bodyParser.json());
// // expressApp.use(bodyParser.urlencoded({ extended: false }));
// // expressApp.use(errorHandler());


// expressApp.use('/', function (req, res, next) {
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   res.sendFile(path.join(__dirname, '/index.html'));
//   // res.sendFile(path.join(__dirname, '/script.js'));
//   // next();
// });

// expressApp.listen(port);
// console.log('Server started at http://localhost:' + port);
