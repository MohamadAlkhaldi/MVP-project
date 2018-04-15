var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
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

app.post('/archive', function(req, res){
	//console.log(typeof req.body.title)
	var newIetm = new db.Item({
		title: req.body.title,
		description: req.body.description,
		url: req.body.url 
	});
	newIetm.save(function (err) {
  if (err) return;
});
	res.send(req.body.title)
})

app.get('/archive', function (req, res) {
  db.selectAll(function(err, items){
  	//console.log(items)
  	res.send(items)
  })
  })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

