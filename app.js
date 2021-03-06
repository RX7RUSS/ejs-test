
const serverless = require('serverless-http');
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/home.ejs');
});


app.listen(3000);
console.log('App served on port 3000');

module.exports.handler = serverless(app);