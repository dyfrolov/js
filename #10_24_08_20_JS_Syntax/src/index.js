// alert("Hello");
console.log("Hello world");

// var myVar;
// let myLet;
// const myConst = 123;

let a = 123;
let b = 12.5;
let str = 'some "title" text';
let str1 = 'some "title" text';
let bool = true;
let def = null;
let arr = [];
let obj = {};
let fn = function () {};
let tmp;

console.log(typeof a);
console.log(typeof b);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof def);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof fn);
console.log(typeof tmp);
console.log(typeof tmp1);

let abc = 123;
abc = "hello";
console.log(abc);

function greetign() {
  console.log("Hello world");
}
greetign();

let gr = greetign();
console.log(gr);

function sayHello(name) {
  console.log("hello", name);
}

sayHello("John");

function sum(a, b) {
  return a + b;
}

let result = sum(10, 20);
console.log(result);

let person = {
  name: "John",
  "last-name": "Smith",
  0: "Some value",
  age: 23,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Rehovot",
    street: "Plaut",
    number: 10,
  },
  walk: function () {
    console.log("Im walking");
  },
};

console.log(person);
console.log(person.name);
console.log(person["last-name"]);
person.walk();

person.name = "Jack";
person["last-name"] = "Sparrow";
console.log(person);

let names = ["John", "Jack", "Tony", 23, {}];
console.log(names[0]);
names[1] = "David";
console.log(names);
console.log(names.length);
names[100] = "Jane";
console.log(names.length);
console.log(names);

let num = 0;
let obj1 = new String("0");
let str2 = "0";
let b1 = false;

console.log(num == num); //true
console.log(obj1 == obj1); //true
console.log(str2 == str2); //true

console.log(num == obj1); //true
console.log(num == str2); //true
console.log(obj1 == str2); //true
console.log(null == undefined); //true

console.log(num === num); //true
console.log(obj1 === obj1); //true
console.log(str2 === str2); //true

console.log(num === obj1); //false
console.log(num === str2); //false
console.log(obj1 === str2); //false
console.log(null === undefined); //false

console.log(typeof obj1);
console.log(typeof str2);

if ("") {
  console.log("Some text");
} else if (0) {
} else {
  console.log("Block else");
}

a = true;
b = false;

if (a)
  if (b) console.log("a and b both true");
  else console.log("???");

a = 10;
console.log(a > 0 ? "positive" : "negative");

switch (a) {
  case 1:
    console.log("one");
    break;
  case 2:
  case 3:
    console.log("two and three");
    break;
  case 10:
    console.log("ten");
  default:
    console.log("other");
    console.log(a);
}


let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// while(true){
//     console.log('Infinity loop');
// }

do{
    console.log("Loop");
}while(false);

for(let i = 0; i < 10; i++){
    console.log(i);
}

arr = ['John','Jack','Tony'];
arr[100] = 'Jane';
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let car = {
    model:'Civic',
    manufc:'Honda'
}

for(let key in car){
    console.log(key + ' = ' + car[key]);
}

for(let key in arr){
    console.log(arr[key]);
}

console.log(arr);
for(let value of arr){
    console.log(value);
}

const PI = 3.14;
// PI = 3.2;
const car1 = {
    model:'Civic',
    manufc:'Honda'
}

car1.model = 'Accord';
console.log(car1);

if(true){
    var varTest = 'Hello';
}
console.log(varTest);

if(true){
    let letTest = 'Hello';
}

// console.log(letTest);

for(var j = 0; j < 10; j++){

}

console.log(j);

function doSome(){
    if(true){
        var name123 = 'John'; 
    }
    console.log(name123);
}

doSome();
// console.log(name123);

function f1(){
    str123 = 'Hello';
    console.log(str123);
    var str123;
}

// function f1(){
//     var str123;
//     str123 = 'Hello';
//     console.log(str123);
// }

f1();

function f2(){
    console.log(str345);
    var str345 = 'hello';
}


let add = sum;
let res = add(10,20);
console.log(res);

let div = function(a,b){
    return a / b;
};
res = div(10,5);
console.log(res);

function run(fn){
    fn();
}

run(greetign);

run(function(){
    console.log("Inner call");
});

function getInnerFunction(){
    return function(a,b){
        return a - b;
    };
}

let sub = getInnerFunction();
res = sub(20,10);
console.log(res);

res = getInnerFunction()(15,5);
console.log(res);

(function(name){
    console.log('Hello',name);
})('John');

let arr1 = [1,2,3,4,5];

let city = 'Ashdod';

for(let key in city){
    console.log(key + ' = ' + city[key]);
}

console.log(city.toUpperCase());


function palindrome(str){
    return false;
}

function bubbleSort(arr){

}

function binarySearch(arr,value){
    return -1;
}