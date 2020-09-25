let arr = [1,2,3,4,5,12,45];
let evenArr = arr.filter(function(value,index){
    console.log(index);
    return value % 2 === 0;
});

console.log(evenArr);

let num = arr.find(function(value){
    return value === 100;
});

console.log(num);

let indx = arr.findIndex(function(value){
    return value === 5;
});

console.log(indx);

let str = arr.join("-");
console.log(str);

arr.forEach(function(value){
    console.log('"' + value + '"');
});

let modifieredArr = arr.map(function(value){
    return value * 2;
});

console.log(modifieredArr);

let sum = arr.reduce(function(a,b){
    return a + b;
},0);

console.log(sum);

arr = [];
arr.push(100);
arr.push(200);
console.log(arr);

let res = arr.pop();
console.log(arr,res);

arr.unshift(500);
console.log(arr);
res = arr.shift();
console.log(arr,res);

for(let i = 0; i < 10; i++){
    arr.push(parseInt(Math.random() * 100));
}

console.log(arr);

arr.splice(2,3);
console.log(arr);
arr.splice(5,0,1000);
console.log(arr);
arr.splice(5,1,5000);
console.log(arr);

let subArr = arr.slice(2);
console.log(subArr);

subArr = arr.slice(2,6);
console.log(subArr);
console.log(arr);

let str1 = "Hello";
let str2 = 'Hello';
let name = 'John';

let greeting = "Hello " + name;

let str3 = `Hello ${name}`;
console.log(str3);