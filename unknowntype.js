console.log('Unknow Type');
// Example 1
var uInput;
var uName;
var uAge;
uInput = 'vicky';
//uName = uInput; //Type 'unknown' is not assignable to type 'string'
// Method 1 : conversion of unknown type to value type 
if (typeof uInput === 'string') {
    uName = uInput;
    console.log(uName);
}
else if (typeof uInput === 'number') {
    uAge = uInput;
    console.log(uAge);
}
// Metod 2 :
var uInput2 = 'abc';
var umethod = uInput2;
// let umethod:string = uInput;
console.log(umethod);
// Example 2
console.log('Example2');
var a;
a = {
    name: 'Emerland'
};
function isName(obj) {
    if (typeof obj === 'object' && 'name' in obj) {
        return true;
    }
    else {
        return false;
    }
}
if (isName(a)) {
    console.log(a.name);
}
else {
    console.log('Name property does not exit on a');
}
