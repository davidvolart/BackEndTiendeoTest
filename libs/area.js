class Area {

    constructor(x,y) {
        this.xFinal = x;
        this.yFinal = y;
    }

    getX(){
        return this.xFinal;
    }

    getY(){
        return this.yFinal;
    }

    getXInitial(){
        return 0;
    }
  
    getYInitial(){
        return 0;
    }

  }
  
  module.exports = Area