
function sum(a,b){
    return a + b;
}

// function diff(a,b){
//     return a - b;
// }

const PI = 3.14;

// export default class Person{
//     static sayHello(name){
//         console.log(`Hello, ${name}`);
//     }
// }

export default class {
    static sayHello(name){
        console.log(`Hello, ${name}`);
    }
}

// export default Person;

export {sum,PI as TEST};