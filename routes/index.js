const Drone = require('../libs/drone');
const Area = require('../libs/area');
var app = require('../app');

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
