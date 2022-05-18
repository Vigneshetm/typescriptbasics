console.log('typescript file');
class Employee{
    private id; // private is only access within class
    public empname;
    private dob;
    private department;
    constructor(id,n,d,de){
        this.id = id;
        this.empname = n;
        this.dob= d;
        this.department = de;
        
    }
    protected details(){ // protected only access within class and subclass
        return `ID = ${this.id} Name = ${this.empname} Dob = ${this.dob} Dept = ${this.department}`;
    }
}
class manager extends Employee{ //manager class is child class for employee class
    private jobrole;
    constructor(id:number,n:string,d:Date,de:string,j:string){
        super(id,n,d,de); // super() method is used for inherit all the properties from parent class Employee
        this.jobrole = j;
    }
    public mangaer_details() : void{  //usage void type is 'it is does not return any value'
        console.log(`${super.details()} JobRole = ${this.jobrole} Employee name = ${this.empname}`)
    }
}

const emp1 = new manager(1,'abc',new Date(2022,5,22),'Developer','Web Developer');
emp1.mangaer_details();

// Types of Datatypes in TypeScript
let e:number;
let b:string;
let c: undefined; // it means c id defined but not assign no value
let d: null; //it means d have null value 