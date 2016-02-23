'use strict';

const express = require('express');
const path = require('path');
const swig = require('swig');

const app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// Set up static and public directories
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

// Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).render('Main', {});
});

const port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log('Boiler Room running on port ' + port + '.');
});