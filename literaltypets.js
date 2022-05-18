console.log('Literal Types');
var customer = {
    // amount : 5000, //Type '5000' is not assignable to type '500 | 1000 | 2000'.
    amount: 500,
    withdramtype: 'savingsAc'
};
var cus = customer;
console.log(cus);
// calculator
var i1 = document.getElementById('i1');
// i1.value;
var i2 = document.getElementById('i2');
var b1 = document.getElementById('btn1');
var b2 = document.getElementById('btn2');
var b3 = document.getElementById('btn3');
var b4 = document.getElementById('btn4');
var calculate = function (a, b, cal) {
    if (cal === 'add') {
        return a + b;
    }
    else if (cal === 'sub') {
        return a - b;
    }
    else if (cal === 'mul') {
        return a * b;
    }
    else if (cal === 'div') {
        return a / b;
    }
};
b1.addEventListener('click', function () {
    var v1 = parseInt(i1.value);
    var v2 = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert("Result(Add)=".concat(calculate(v1, v2, 'add')));
});
b2.addEventListener('click', function () {
    var v1 = parseInt(i1.value);
    var v2 = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert("Result(Sub)=".concat(calculate(v1, v2, 'sub')));
});
b3.addEventListener('click', function () {
    var v1 = parseInt(i1.value);
    var v2 = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert("Result(Mul)=".concat(calculate(v1, v2, 'mul')));
});
b4.addEventListener('click', function () {
    var v1 = parseInt(i1.value);
    var v2 = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert("Result(Div)=".concat(calculate(v1, v2, 'div')));
});
// <types> in ts
function identity(arg) {
    return arg;
}
//   console.log(identity(23));
console.log(identity({ flkds: 23 }));
