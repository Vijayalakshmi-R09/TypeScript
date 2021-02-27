var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.Rectangle = function (length, breadth) {
        console.log("AREA OF RECTANGLE " + (length * breadth).toFixed(2));
    };
    Area.prototype.Square = function (side) {
        console.log("AREA OF SQUARE " + (side * side).toFixed(2));
    };
    Area.prototype.Triangle = function (base, height) {
        console.log("AREA OF TRIANGLE " + ((base * height) / 2).toFixed(2));
    };
    return Area;
}());
var a = new Area();
a.Rectangle(10, 12);
a.Square(6);
a.Triangle(10, 5);
