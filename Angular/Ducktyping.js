var PersonA = /** @class */ (function () {
    function PersonA() {
        this.Gender = "Male";
    }
    return PersonA;
}());
var PersonB = /** @class */ (function () {
    function PersonB() {
        this.Gender = "Female";
    }
    return PersonB;
}());
var PersonC = /** @class */ (function () {
    function PersonC() {
        this.Gender = "Male";
    }
    PersonC.prototype.swim = function () {
        console.log("Pesron C swims well!");
    };
    return PersonC;
}());
var personA = new PersonB();
var personB = new PersonC();
var personD = new PersonC();
console.log("Person A gender: " + personA.Gender);
console.log("Person B gender: " + personB.Gender);
console.log("Person C gender: " + personD.Gender);
