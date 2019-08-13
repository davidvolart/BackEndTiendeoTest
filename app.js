var express = require('express');
var app = express();
var getRawBody = require('raw-body')
var contentType = require('content-type')
const Drone = require('./drone');


app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(req).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})

app.post('/', function (req, res) {
    const drone = new Drone();

    ordenes = String(req.text).split("\n");
    console.log(ordenes);
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});