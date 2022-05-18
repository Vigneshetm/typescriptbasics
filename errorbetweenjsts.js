var addition = /** @class */ (function () {
    function addition() {
        var a = 10;
        var b = '20';
    }
    addition.prototype.myfun = function (a, b) {
        return a + b;
    };
    return addition;
}());
var addans = new addition();
console.log(addans.myfun(10, 20));
