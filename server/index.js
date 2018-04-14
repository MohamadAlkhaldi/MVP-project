var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var util = require('./util');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  util.getNews(function(err, data){
  	//console.log(typeof data)
  	var d = JSON.parse(data)
  	res.send(d)
  })
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

