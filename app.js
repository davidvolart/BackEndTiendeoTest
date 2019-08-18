var express = require('express');
var app = express();
var getRawBody = require('raw-body')
var contentType = require('content-type')
const Drone = require('./drone');
const Area = require('./area');


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
    
    ordenes = String(req.text).split("\n");
    let drone;
    let area;

    console.log(ordenes);
    for (i=0;i<ordenes.length;i++){
      if(i==0){
        const x = ordenes[i].substring(0,1);
        const y = ordenes[i].substring(2,3);
        area = new Area(x,y);
      }else if(i%2==1){
        let x = ordenes[i].substring(0,1);
        let y = ordenes[i].substring(2,3);
        let o = ordenes[i].substring(4,5);
        drone = new Drone(area,x,y,o);
      }else{
        for(c=0;c<ordenes[i].length;c++){
          drone.move(ordenes[i].substring(c,c+1));
        }
        console.log(drone.calculate());
      }
    } 

});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});