var Car = /** @class */ (function () {
    function Car(carColor, engineCap, noofCylinders) {
        this.carColor = carColor;
        this.engineCap = engineCap;
        this.noOfCylinders = noofCylinders;
        console.log("Car Details\n");
        console.log("Car Color: " + carColor);
        console.log("Engine Capacity (in CC): " + engineCap);
        console.log("No of cylinders in engine: " + noofCylinders);
    }
    Car.prototype.StartCar = function (k) {
        if (k) {
            console.log("\nKey ->present Start the car..");
        }
        else {
            console.log("\nPlease insert Key");
        }
    };
    Car.prototype.StopCar = function (b) {
        if (b) {
            console.log("\nBrakes applied Please Stop the car...");
        }
        else {
            console.log("\nNo brakes applied continue driving...");
        }
    };
    Car.prototype.AccelerateCar = function (s) {
        if (s < 25) {
            console.log("\ncurrent speed: " + s + " Please accelerate...");
        }
        else if (s < 60) {
            console.log("\ncurrent speed: " + s + " Maintain Speed");
        }
        else {
            console.log("\ncurrent speed: " + s + " OverSpeed please reduce the speed..");
        }
    };
    Car.prototype.OpenCarLock = function (d1) {
        if (d1 == "closed") {
            console.log("\nDoors-> closed, Please open the car door...");
        }
    };
    Car.prototype.CloseCarLock = function (d2) {
        if (d2 == "open") {
            console.log("\nDoors-> open, Please close the car door...");
        }
    };
    return Car;
}());
var c = new Car("Red", 1390, 4);
var key = true;
var brakes = true;
var speed = 50;
var door1 = "closed";
var door2 = "open";
c.StartCar(key);
c.StopCar(brakes);
c.AccelerateCar(speed);
c.OpenCarLock(door1);
c.CloseCarLock(door2);
