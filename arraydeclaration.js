// In javatypescript we have access a array values with different datatypes values in sequentia, in Typscript also we access like javascript.
// Advantages in TypeScript we have to declare array in two types then set array type to specfici array
// 1. Type1 declare array
confirm('ruwant to continue');
console.log('ArrayDeclaration');
var arr1 = [1, 2, 3]; // number targets datatype and [ ] targets array
// 2.Type2 declare array
var arr2 = [1, 2, 3];
console.log(arr1);
//  Multi Type array declaration
var mtarr = [1, "welcom", true, {}];
mtarr.forEach(function (a) { return console.log(a); });
// Multi Dimensianl Array with Multi Type
var marr = [[1, 2, true], [1, 2, 3,], [true]];
console.log('array result');
marr.forEach(function (a) {
    // console.log(a);
    a.forEach(function (a1) { return console.log(a1); });
});
// Tuple Type, it is we which datatype can give in declare with array then we also give same datatype value
var person1 = [1, "vicky", false];
var arr = [{ name: "vicky" }, [2, 3, 3], [6, 'dsfsf', true]];
var sam = '20';
console.log('type of sam is:');
console.log(typeof sam);
