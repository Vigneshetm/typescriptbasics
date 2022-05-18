console.log('Unknow Type');
// Example 1
let uInput : unknown;
let uName : string;
let uAge : number;
uInput='vicky';

//uName = uInput; //Type 'unknown' is not assignable to type 'string'

// Method 1 : conversion of unknown type to value type 
if(typeof uInput === 'string'){
    uName = uInput;
    console.log(uName);
}
else if(typeof uInput=== 'number')
{
    uAge = uInput;
    console.log(uAge);
}

// Metod 2 :
let uInput2: unknown = 'abc';

let umethod:string = (uInput2 as string);
// let umethod:string = uInput;
console.log(umethod);

// Example 2
console.log('Example2');
let a:unknown;
a = {
    name:'Emerland'
}
// console.log(a.name); //Property 'name' does not exist on type 'unknown'
interface o{
    name:string;
    age: number;
}
function isName(obj : unknown): obj is o{
if(typeof obj === 'object' && 'name' in obj)
{
    return true;
}
else{
    return false;
}
} 
if(isName(a)){
     console.log(a.name);
 } else {
     console.log('Name property does not exit on a');
 }

 