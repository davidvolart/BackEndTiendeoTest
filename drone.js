class Drone {

    constructor(x,y,o) {
        this.o = o;
        this.x= x;
        this.y= y;
        this.direction = ['N', 'E','S','O'];
        this.rotations = ['L','R'];
    }
  
    move(orden){
      if(isNaN(orden) && this.isValidRotation(orden)){
        this.rotate(orden);
      }else{
        
      }
    }

    isValidRotation(rotation){
        return this.rotations.includes(rotation);
    }

    rotate(rotation){
        let index = this.direction.indexOf(this.o);
        if(index != -1){
            if(index==3 && rotation==="R"){
                index=-1;
            }else if(index==0 && rotation==="L"){
                index=4;
            }
            if(rotation==="R"){
                this.o=this.direction[index+1];
            }else{
                this.o=this.direction[index-1];
            }
        }
    }

    calculate() {
        return this.x + ' ' +  this.y + ' ' + this.o;
    }

  }
  
  module.exports = Drone
