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
const b1 = document.getElementById('btn1') as HTMLButtonElement;
const b2 = document.getElementById('btn2') as HTMLButtonElement;
const b3 = document.getElementById('btn3') as HTMLButtonElement;
const b4 = document.getElementById('btn4') as HTMLButtonElement;
type cal = 'add'|'sub'|'mul'|'div';
const calculate = (a:number,b:number,cal : cal) : number=>{
if(cal === 'add'){
    return a+b;
}
else if (cal === 'sub'){
    return a-b;
}else if(cal === 'mul')
{
    return a*b;
}
else if(cal === 'div'){
    return a/b;
}
}

b1.addEventListener('click',()=>{
let v1 : number = parseInt(i1.value);
let v2 : number = parseInt(i2.value);
i1.value = "";
i2.value = "";
alert(`Result(Add)=${calculate(v1,v2,'add')}`);
});

b2.addEventListener('click',()=>{
    let v1 : number = parseInt(i1.value);
    let v2 : number = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert(`Result(Sub)=${calculate(v1,v2,'sub')}`);
});

b3.addEventListener('click',()=>{
        let v1 : number = parseInt(i1.value);
        let v2 : number = parseInt(i2.value);
        i1.value = "";
        i2.value = "";
        alert(`Result(Mul)=${calculate(v1,v2,'mul')}`);
});

b4.addEventListener('click',()=>{
    let v1 : number = parseInt(i1.value);
    let v2 : number = parseInt(i2.value);
    i1.value = "";
    i2.value = "";
    alert(`Result(Div)=${calculate(v1,v2,'div')}`);
});

// <types> in ts

function identity<vicky>(arg:vicky): vicky {
    return arg;
  }
  
//   console.log(identity(23));
  console.log(identity({flkds:23}));


