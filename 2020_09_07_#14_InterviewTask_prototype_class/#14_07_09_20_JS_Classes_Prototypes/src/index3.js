let person = {
    name:'John'
}

function Employee(salary){
    this.salary = salary;
}

Employee.prototype = person;

let empl1 = new Employee(1000);//empl1.__proto__ = person

console.log(empl1.name);

function Car(){
    this.model = 'Civic';
}
//Car.prototype = {constructor:Car}

let car1 = new Car();

console.log(car1.constructor == Car);
console.log(car1);

let car2 = new car1.constructor();
console.log(car2);



let obj1 = {
    name:'John',
    print(){
        console.log('print');
    }
}

let obj2 = {
    __proto__:obj1,
    phone:'05653873',
    display(){
        console.log(display);
    }
}
console.log(obj2);

for(let key in obj2){
    console.log(key);
}

console.log(Object.keys(obj2));

String.prototype.prefix = function(prefix){
    return prefix + this;
}

console.log('Hello'.prefix('JavaScript'));

let list = {
    0:'John',
    1:'Jack',
    2:'Tony',
    length:3
}

list.join = Array.prototype.join;

console.log(list.join('---'));

class Animal{
    constructor(name){
        this.name = name;

    }

    print(){
        console.log(this.name);
    }
}

let cat = new Animal('Cat');
console.log(cat);
cat.print();

class Dog extends Animal{
    gender = 'Male';

    constructor(gender){
        super('Dog');
        this.gender = gender;
    }

    voice(){
        console.log('Gav gav!');
    }

    print(){
        super.print();
        console.log(this.name, this.gender);
    }

}

let dog1 = new Dog('----');
dog1.voice();
dog1.print();
console.log(dog1);

console.log("===========");
dog1.print();

class Timer{
    count = 0;
    constructor(selector){

    }
    start(){

    }

    stop(){

    }
}

new Timer('#timer')