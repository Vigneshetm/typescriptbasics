// Example1 of object
interface o{
    a : number;
    b: number;
    c ?: string; // there is optional 
    d: number[];
    result(): (number | string)
    generateId : ()=> number;
}

let obj: o = {
    d: [1, 2, 3],
    a: 2,
    b: 0,
    // c: "",
    result: function (): string | number {
        return this.d[0] + this.a + this.b
    },
    generateId: function (): number {
        return Math.floor(Math.random()*10000); //floor() defines the round value of given number
    }
}

console.log(obj.result());
console.log(obj.generateId());
console.log("This example2 of objectts");

// Exxample 2
interface oob{
    userId: number;
     id: number;
     title:string;
      completed ?: boolean;
}
let obj2 : oob[]= [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false
    }
];
let arr3 : oob[] = [];
obj2.forEach(function(a){
if(a.completed === true)
{
    // console.log(a.id);
    // let temp = {userId:a.userId,id:a.id,title:a.title};
    // console.log(temp);
    arr3.push(a);
    console.log(arr3);
}
});
console.log(arr3)

// obj2.forEach(a=>{
// if(a.completed === false)
// {
//     console.log(a.id);
// }
// });
// obj2.forEach(temp(obj2));
// function temp(a):any{
//   console.log(a);
//   for(let i = 0;i<a.length;i++){
//   console.log('index' +a[i].id);

//     if(a[i].completed === false)
//     {
//         console.log(a.id);
//     }
//   }

// }
// Example 3
let userdetails= (userId: number,id: number, title:string,completed: boolean):oob => {
    return { userId: userId, id: id, title:title, completed: completed};
}

const users:oob[] = [];
users.push(userdetails(2,12,'fads',false));
users.push(userdetails(4,14,'fads',true));
users.forEach(a=>{
    if(a.completed === true)
    {
        console.log("true" +a.id);
    }
    });