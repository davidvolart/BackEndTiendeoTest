class Drone {
    constructor(lx,ly,o) {
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
