// without using interface we want write number lines
const person ={
    fname : 'vicky',
    lname : 'vicky',
    fullname :function(){
        return `${this.fname} ${this.lname} ${this}`
    }
}

function Display(obj:{
    fname: string,
    lname: string,
    fullname(): string
}) :{
    fname: string,
    lname: string,
    fullname(): string
}{
 return obj;
}

console.log(Display(person));

// Using Interface
interface ob{
    fname: string,
    lname: string,
    fullname(): string
}

const person1 : ob ={
    fname : 'vicky',
    lname : 'vicky',
    fullname :function(){
        return `${this.fname} ${this.lname} ${this}`
    }
}

function dis(obj:ob):ob{
        return obj;

}
console.log(dis(person1));
