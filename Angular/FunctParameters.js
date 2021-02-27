var functuse = /** @class */ (function () {
    function functuse() {
    }
    functuse.prototype.stuDetails = function (id, name, e_mail_id) {
        console.log("ID:", id, " Name:", name);
        if (e_mail_id != undefined)
            console.log("Email-Id:", e_mail_id);
    };
    functuse.prototype.addFunc = function (a, b) {
        if (b === void 0) { b = 0; }
        return a + b;
    };
    functuse.prototype.sum = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        var result = a;
        for (var i = 0; i < b.length; i++) {
            result += b[i];
        }
        return result;
    };
    return functuse;
}());
var f = new functuse();
console.log("Optional Parameter:");
f.stuDetails(1, 'ABC');
f.stuDetails(2, 'cde', 'cde@gmail.com');
var result1 = f.sum(3.5, 5.3);
var result2 = f.sum(3, 5, 7, 9);
console.log("Default parameter");
console.log(f.addFunc(9));
console.log(f.addFunc(9, 2));
console.log("REST parameter");
console.log("The result1 sum = " + result1 + "\n The result2 sum = " + result2);
