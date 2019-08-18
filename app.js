var express = require('express');
var app = express();
var getRawBody = require('raw-body')
var contentType = require('content-type')

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

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

module.exports = app;

