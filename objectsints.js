var obj = {
    d: [1, 2, 3],
    a: 2,
    b: 0,
    // c: "",
    result: function () {
        return this.d[0] + this.a + this.b;
    },
    generateId: function () {
        return Math.floor(Math.random() * 10000); //floor() defines the round value of given number
    }
};
console.log(obj.result());
console.log(obj.generateId());
var obj2 = [
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
obj2.forEach(function (a) {
    if (a.completed === false) {
        console.log(a.id);
    }
});
// Example 3
var userdetails = function (userId, id, title, completed) {
    return { userId: userId, id: id, title: title, completed: completed };
};
var users = [];
users.push(userdetails(2, 12, 'fads', false));
users.push(userdetails(4, 14, 'fads', true));
users.forEach(function (a) {
    if (a.completed === true) {
        console.log(a.id);
    }
});
