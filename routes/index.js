const Drone = require('../libs/drone');
const Area = require('../libs/area');
var app = require('../app');

app.post('/', function (req, res) {
    
    ordenes = String(req.text).split("\n");
    let drone;
    let area,x,y,o;
    
    
    for (i=0;i<ordenes.length;i++){
      
        if(i==0){
            const xInitial = ordenes[i].substring(0,1);
            const yInitial = ordenes[i].substring(2,3);
            
            if(xInitial<=0 || yInitial<=0 || isNaN(xInitial) || isNaN(yInitial)){
                res.write('Area no validos');
                res.end();
                return;
            }
        
            area = new Area(xInitial,yInitial);

        }else if(i%2==1){
            x = ordenes[i].substring(0,1);
            y = ordenes[i].substring(2,3);
            o = ordenes[i].substring(4,5);

            if(isNaN(x) || isNaN(y) || !isNaN(o)){
                res.write('Valores inciales no validos');
                res.end();
                return;
            }

            drone = new Drone(area,x,y,o);
        }else{

            for(c=0;c<ordenes[i].length;c++){
            drone.move(ordenes[i].substring(c,c+1));
            }

            res.write(drone.calculate());
            res.write('\n');
            drone.returnHome(x,y,o); 
        }
    } 
    res.end();
});


