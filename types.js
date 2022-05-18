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
console.log('typescript file');
var Employee = /** @class */ (function () {
    function Employee(id, n, d, de) {
        this.id = id;
        this.empname = n;
        this.dob = d;
        this.department = de;
    }
    Employee.prototype.details = function () {
        return "ID = ".concat(this.id, " Name = ").concat(this.empname, " Dob = ").concat(this.dob, " Dept = ").concat(this.department);
    };
    return Employee;
}());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(id, n, d, de, j) {
        var _this = _super.call(this, id, n, d, de) || this;
        _this.jobrole = j;
        return _this;
    }
    manager.prototype.mangaer_details = function () {
        console.log("".concat(_super.prototype.details.call(this), " JobRole = ").concat(this.jobrole, " Employee name = ").concat(this.empname));
    };
    return manager;
}(Employee));
var emp1 = new manager(1, 'abc', new Date(2022, 5, 22), 'Developer', 'Web Developer');
emp1.mangaer_details();
// Types of Datatypes in TypeScript
var e;
var b;
var c; // it means c id defined but not assign no value
var d; //it means d have null value 
