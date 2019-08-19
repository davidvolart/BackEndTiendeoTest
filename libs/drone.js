class Drone {

    constructor(area,x,y,o) {
        this.area= area;
        this.o = o;
        this.x= x;
        this.y= y;
        this.direction = ['N', 'E','S','O'];
        this.rotations = ['L','R'];
    }
  
    move(orden){
      if(this.isValidRotation(orden)){
        this.rotate(orden);
      }else if(orden==="M"){
        this.proceedMovement();
      }
    }

    isValidRotation(rotation){
        return this.rotations.includes(rotation);
    }

    proceedMovement(){
        
        switch(this.o){
            case "N":
                if(this.y < this.area.getY()){
                    this.y=parseInt(this.y)+1;
                }
            break;
            case "S":
                if(this.y > this.area.getYInitial()){
                    this.y=parseInt(this.y)-1;
                }
            break;
            case "E":
                if(this.x < this.area.getX()){
                    this.x = parseInt(this.x)+1;
                }
            break;
            case "O":
                if(this.x > this.area.getYInitial()){
                    this.x = parseInt(this.x)-1;
                }
            break;
        }
    }

    rotate(rotation){
        let index = this.direction.indexOf(this.o);

        if(index != -1){
            if(rotation==="R"){
                this.o = this.direction[(index+1)%this.direction.length];
            }else{ 
                if(index==0){
                    index=4;
                }
                this.o = this.direction[index-1];
            }
        }
    }

    calculate() {
        return this.x + ' ' +  this.y + ' ' + this.o;
    }

    returnHome(x,y,o){
        this.x= x;
        this.y= y;
        this.o= o;
    }

}
  
  module.exports = Drone
