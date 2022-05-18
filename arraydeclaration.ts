// In javatypescript we have access a array values with different datatypes values in sequentia, in Typscript also we access like javascript.
// Advantages in TypeScript we have to declare array in two types then set array type to specfici array

// 1. Type1 declare array
confirm('ruwant to continue');
console.log('ArrayDeclaration');
let arr1:number[] = [1,2,3]; // number targets datatype and [ ] targets array

// 2.Type2 declare array
 let arr2:Array<number> =[1,2,3];
 console.log(arr1 );

//  Multi Type array declaration
let mtarr:(number | string | boolean | {})[] = [1,"welcom",true,{}];
mtarr.forEach(a => console.log(a));

// Multi Dimensianl Array with Multi Type

let marr:(number | boolean)[][] = [[1,2,true],[1,2,3,],[true]];
console.log('array result');
marr.forEach(a => {
// console.log(a);

    a.forEach(a1=>console.log(a1))
});

// Tuple Type, it is we which datatype can give in declare with array then we also give same datatype value
let person1:[number,string,boolean] = [1,"vicky",false];
let arr:[{},number[],(number | string | boolean)[]] = [{name:"vicky"},[2,3,3],[6,'dsfsf',true]];
let sam= '20';
 console.log('type of sam is:')
 console.log(typeof sam);