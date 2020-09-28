// setTimeout(callback,3000);

// function callback(){
//     console.log('callback');
// }

// getData();

console.log("end of script");

// function getData(){
//     console.log('Start...');
//     setTimeout(() => {
//         let data = {str:'My Data'};
//         setTimeout(() => {
//             let data2 = {str1:'My Data 2'};
//             setTimeout(() => {
//                 let data3 = {str2:'My data 3'};
//                 let fullData = {...data,...data2,...data3};
//                 console.log(fullData);
//             },2000);
//         },2000);
//     },2000);
// }



const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            reject('Something went wrong!');
        } else {
            resolve('My data');
        }
    }, 500);
});

p1.then((data) => {
    console.log('Then 1',data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({str:data, str2:'My Data2'});
        },500);
    });
}).then((data) => {
    console.log('Then2',data);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({...data,str3:'My Data 3'});
        },500);
    });
}).then(data => {
    return {...data,somefield:'Some data'};
}).then(data => console.log(data)).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('God code!');
});


let car = {
    model:'Civic',
    manufc:'Honda'
}

let str = JSON.stringify(car);
console.log(str);

str = '[{"name":"John","age":23},{"name":"Jack","age":32}]';

let p = JSON.parse(str);
console.log(p);