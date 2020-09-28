let person = {
    name: 'John'
}

let employee = {
    salary: 1000
}

employee.__proto__ = person;

console.log(employee.salary);
console.log(employee.name);

console.log(employee);

let p1 = {
    name: 'John',
    doSome() {
        console.log('Call do some');
    }
}

let empl1 = {
    salary: 1000,
    __proto__: p1
}

empl1.doSome();

let empl2 = {
    __proto__: p1
}

empl2.doSome = function () {
    console.log("Do some employee");
}

empl2.doSome();
console.log(empl2);

let car = {
    model: 'Civic',
    manufc: 'Honda',

    get fullInfo() {
        return `${this.model} ${this.manufc}`;
    },

    set fullInfo(info) {
        let arr = info.split(' ');
        this.model = arr[0];
        this.manufc = arr[1];
    }
}

console.log(car.fullInfo);
car.fullInfo = 'Ceratto Kia';
console.log(car);

let truck = {
    __proto__: car,
    wight: 10000
}

truck.fullInfo = 'V2000 Volvo';
console.log(truck);

let parent = {
    print() {
        console.log(this.name);
    }
}

let child = {
    name: 'John',
    __proto__: parent
}

child.print();
parent.print();

let obj1 = {
    name: 'John'
}

let obj2 = {
    phone: '05456789',
    __proto__: obj1
}

for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
