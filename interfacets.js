// without using interface we want write number lines
var person = {
    fname: 'vicky',
    lname: 'vicky',
    fullname: function () {
        return "".concat(this.fname, " ").concat(this.lname, " ").concat(this);
    }
};
function Display(obj) {
    return obj;
}
console.log(Display(person));
var person1 = {
    fname: 'vicky',
    lname: 'vicky',
    fullname: function () {
        return "".concat(this.fname, " ").concat(this.lname, " ").concat(this);
    }
};
function dis(obj) {
    return obj;
}
console.log(dis(person1));
