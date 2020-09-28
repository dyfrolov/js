
function getSomething(num = 100, num1 = 200){
    // let n = num || 100;
    console.log(num,num1);
}

getSomething(0);

function fun1(){
    console.log(arguments);
}

fun1();
fun1('John','Jack','Tony');

function fun2(num1, ...args){
    console.log(args);
}

fun2();
fun2(1,2,3,4,5);

let car = {
    model:'Corolla',
    manuf: 'Toyota'
}

let address = {
    city:'Tokio',
    contry:'Japan'
}

let car2 = {...car, speed:'200km/h', model:'Camry'};
console.log(car2);

let car3 = {...car,...address};
console.log(car3);

function makeCopyWith(car1, model){
    return {
        ...car1,
        model
    };
}

console.log(makeCopyWith(car,'CH-R'));

let arr = [1,2,3,4];
let arr1 = [1000,...arr,100,...arr];
console.log(arr1);

let p1 = {
    name:'John'
};

let p2 = {
    name:'Jack'
}

let persons = [p1,p2];
let personsCopy = [...persons];
p1.name = 'Tony';
console.log(personsCopy);

let obj = {
    field1:'Test',
    field2:'Test2',
    field3:'Test3'
}

// let var1 = obj.filed1;
// let var2 = obj.field2;
// let var3 = obj.field3;

let {field1,field2} = obj;
console.log(field1);
console.log(field2);


function printField({field1,field3,abc}){
    console.log(field1,field3,abc);
}

printField(obj);


let [,a,,b] = arr;

console.log(a,b);


