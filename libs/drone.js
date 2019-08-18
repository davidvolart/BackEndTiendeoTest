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
                if(this.y > 0){
                    this.y=parseInt(this.y)-1;
                }
            break;
            case "E":
                if(this.x < this.area.getX()){
                    this.x = parseInt(this.x)+1;
                }
            break;
            case "O":
                if(this.x > 0){
                    this.x = parseInt(this.x)-1;
                }
            break;
        }
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
