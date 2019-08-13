class Drone {
    constructor(x,y,o,lx,ly) {
        this.x = x;
        this.y = y;
        this.o = o;
        this.lx= lx;
        this.ly= ly;
    }
  
    move(){
      
    }
  
    calculate() {
        return this.x + ',' +  this.y + ',' + this.o;
    }
  }
  
  module.exports = Drone
