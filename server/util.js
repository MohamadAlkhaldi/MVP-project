var express = require('express');
var request = require('request');

var getNews = function(cb){


var options = {
	url : "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b5d46ffde2d84577957ebdddf7555344"
}

request(options.url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    cb(null, body) 
  }
})
}

module.exports.getNews = getNews;