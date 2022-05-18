console.log('Literal Types');
interface ob{
    amount : 500|1000|2000;
    withdramtype: 'savingsAc'|'currentAc';
}

const customer:ob = {
    // amount : 5000, //Type '5000' is not assignable to type '500 | 1000 | 2000'.
    amount : 500,
    withdramtype: 'savingsAc'
}

let cus = customer;
console.log(cus);

// calculator
let i1 = document.getElementById('i1') as HTMLInputElement;
// i1.value;
let i2 = document.getElementById('i2') as HTMLInputElement;
const b1 = document