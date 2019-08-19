const Drone = require('../libs/drone');
const Area = require('../libs/area');
var expect = require('chai').expect;


describe("movement E", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,3,3,'E');
    let xOrigin = drone.x;
    let yOrigin = drone.y;
    drone.proceedMovement();
    drone.proceedMovement();
   
    it("should add +1 to x each time is moved to E direction", () => {
      expect(drone.x).to.equal(xOrigin+2);
      expect(drone.y).to.equal(yOrigin);
    });
});

describe("movement O", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,3,3,'O');
    let xOrigin = drone.x;
    let yOrigin = drone.y;
    drone.proceedMovement();
    drone.proceedMovement();

    it("should add +1 to x each time is moved to O direction", () => {
      expect(drone.x).to.equal(xOrigin-2);
      expect(drone.y).to.equal(yOrigin);
    });
});

describe("movement S", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,3,3,'S');
    let xOrigin = drone.x;
    let yOrigin = drone.y;
    drone.proceedMovement();
    
    it("should add +1 to y each time is moved to S direction", () => {
      expect(drone.x).to.equal(xOrigin);
      expect(drone.y).to.equal(yOrigin-1);
    });
});

describe("movement N", () => {

    let area = new Area(5,8);
    let drone = new Drone(area,3,3,'N');
    let xOrigin = drone.x;
    let yOrigin = drone.y;
    drone.proceedMovement();
    drone.proceedMovement();
    drone.proceedMovement();
    
    it("should add +1 to y each time is moved to N direction", () => {
      expect(drone.x).to.equal(xOrigin);
      expect(drone.y).to.equal(yOrigin+3);
    });
});

describe("Changing direction", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,4,3,'N');
    drone.rotate('L');
    drone.rotate('R');
    drone.rotate('R');
    
    it("should change orientation each time receive L or R order", () => {
      expect(drone.o).to.equal('E');
    });
});

describe("Mixing rotate and movement", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,3,2,'E');
    drone.rotate('R');
    drone.proceedMovement();
    drone.proceedMovement();
    drone.proceedMovement();
    drone.rotate('R');
    drone.proceedMovement();
    drone.rotate('L');
    drone.proceedMovement();
    drone.proceedMovement();
    drone.rotate('L');
    drone.rotate('L');

    it("should change orientation and move on that direction", () => {
      expect(drone.x).to.equal(2);
      expect(drone.y).to.equal(0);
    });
});


describe("Going out of the region defined", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,4,4,'N');
    let xOrigin = drone.x;
    let yOrigin = drone.y;
    drone.proceedMovement();
    drone.proceedMovement();
    drone.proceedMovement();
    drone.proceedMovement();
    
    it("should never get a value higher than the defined in the region", () => {
      expect(drone.x).to.equal(xOrigin);
      expect(drone.y).to.equal(yOrigin+1);
    });
});

describe("Mixing rotate and movement by method move", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,4,4,'N');
    drone.move("M");
    drone.move("M");
    drone.move("L");
    drone.move("A");
    drone.move("M");
    drone.move("M");
    drone.move("F");

    it("should only rotate when recive an L or R order and move along on the actual orientation", () => {
      expect(drone.x).to.equal(2);
      expect(drone.y).to.equal(5);
    });
});

describe("Returning home", () => {

    let area = new Area(5,5);
    let drone = new Drone(area,4,4,'N');
    let x = drone.x;
    let y = drone.y;
    let o = drone.o;
    drone.move("M");
    drone.move("M");
    drone.move("L");
    drone.move("A");
    drone.move("M");
    drone.move("M");
    drone.move("F");
    drone.returnHome(x,y,o);

    it("should have the same position and orientation at the end that when it was created", () => {
      expect(drone.x).to.equal(x);
      expect(drone.y).to.equal(y);
      expect(drone.o).to.equal(o);
    });
});












   



