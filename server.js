// load dependancies
var express = require('express');
var app     = express();
var path = require('path');

// send index.html file for home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// set main route
app.use(express.static(__dirname + '/public'));

// start server
app.listen(8080);
console.log("There is a hell of a universe on port:8080");