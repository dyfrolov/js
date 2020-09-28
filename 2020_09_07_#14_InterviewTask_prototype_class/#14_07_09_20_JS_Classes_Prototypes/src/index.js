
function Person(){
    //this = {}
    this.name = 'John';
    this.age = 23;
    //return this;
}

const p1 = new Person();
console.log(p1);
console.log(p1.name, p1.age);

function Person1(){
    this.name = 'Jack';
    this.age = 23;
    return {name:'Tony'};
    //return; -> return this;
    //return 10;
}

const p2 = new Person1();
console.log(p2);

function Employee(name, age, hours, wage){
    this.name = name;
    this.age = age;
    this.hours = hours || 0;
    this.wage = wage || 0;

    this.calcSalary = function(){
        return this.hours * this.wage;
    }
}

const empl1 = new Employee('John', 23, 10, 10.0);
const empl2 = new Employee('Jack', 32);

console.log(empl1);
console.log(empl2);

console.log(empl1.calcSalary());
console.log(empl2.calcSalary());

//[[Prototype]]
