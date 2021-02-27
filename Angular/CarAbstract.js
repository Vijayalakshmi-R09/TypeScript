var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarAbstract = /** @class */ (function () {
    function CarAbstract(carModel, carColor, engineCap, noOfCylinders) {
        this.carModel = carModel;
        this.carColor = carColor;
        this.engineCap = engineCap;
        this.noOfCylinders = noOfCylinders;
    }
    return CarAbstract;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(carModel, carMake, carColor, engineCap, noOfCylinders, Manufacturer) {
        var _this = _super.call(this, carModel, carColor, engineCap, noOfCylinders) || this;
        _this.carModel = carModel;
        _this.carMake = carMake;
        _this.carColor = carColor;
        _this.engineCap = engineCap;
        _this.noOfCylinders = noOfCylinders;
        console.log("-------------------------");
        console.log("\nSUV Car Details\n");
        console.log("Model Name: " + carModel + "Make: " + carMake + "\nColor: " + carColor + "\nengine capacity(in cc): " + engineCap + "\nCylinders: " + noOfCylinders + "\n Manufacturer: " + Manufacturer);
        return _this;
    }
    SUV.prototype.StartCar = function () {
        console.log(this.carModel + " start the engine..");
    };
    SUV.prototype.StopCar = function () {
        console.log(this.carModel + " is Halted..");
    };
    return SUV;
}(CarAbstract));
var HatchBach = /** @class */ (function (_super) {
    __extends(HatchBach, _super);
    function HatchBach(carModel, carMake, carColor, engineCap, noOfCylinders, Manufacturer) {
        var _this = _super.call(this, carModel, carColor, engineCap, noOfCylinders) || this;
        _this.carModel = carModel;
        _this.carMake = carMake;
        _this.carColor = carColor;
        _this.engineCap = engineCap;
        _this.noOfCylinders = noOfCylinders;
        console.log("-------------------------");
        console.log("\nHatchBach Car Details\n");
        console.log("Model Name: " + carModel + "Make: " + carMake + "\nColor: " + carColor + "\nengine capacity(in cc): " + engineCap + "\nCylinders: " + noOfCylinders + "\n Manufacturer: " + Manufacturer);
        return _this;
    }
    HatchBach.prototype.StartCar = function () {
        console.log(this.carModel + " start the engine..");
    };
    HatchBach.prototype.StopCar = function () {
        console.log(this.carModel + " is Halted..");
    };
    return HatchBach;
}(CarAbstract));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carModel, carMake, carColor, engineCap, noOfCylinders, Manufacturer) {
        var _this = _super.call(this, carModel, carColor, engineCap, noOfCylinders) || this;
        _this.carModel = carModel;
        _this.carMake = carMake;
        _this.carColor = carColor;
        _this.engineCap = engineCap;
        _this.noOfCylinders = noOfCylinders;
        console.log("-------------------------");
        console.log("\nSedan Car Details\n");
        console.log("Model Name: " + carModel + "Make: " + carMake + "\nColor: " + carColor + "\nengine capacity(in cc): " + engineCap + "\nCylinders: " + noOfCylinders + "\n Manufacturer: " + Manufacturer);
        return _this;
    }
    Sedan.prototype.StartCar = function () {
        console.log(this.carModel + " start the engine..");
    };
    Sedan.prototype.StopCar = function () {
        console.log(this.carModel + " is Halted..");
    };
    return Sedan;
}(CarAbstract));
var suv = new SUV("SUV500", 2018, "White", 2171, 4, "Mahindra");
suv.StartCar();
suv.StopCar();
var hatchbach = new HatchBach("BMW i3", 2021, "Black", 2200, 4, "BMW");
hatchbach.StartCar();
hatchbach.StopCar();
var sedan = new Sedan("Dzire", 2020, "Blue", 1197, 4, "Maruti Suzuki");
sedan.StartCar();
sedan.StopCar();
