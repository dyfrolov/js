const BASE_URL = 'https://jsonplaceholder.typicode.com';

// let promise = fetch(`${BASE_URL}/posts`);
// promise.then(response => {
//     if(response.ok){
//        return response.json(); 
//     }
//     throw new Error(response.status);
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

//================ my ==========================
// let promise = fetch(`${BASE_URL}/posts`);
// promise.then(response => {
//     if(response.ok){
//         let json = response.json();
//         console.log(JSON.stringify(json));
//            return json;
//            return {json:response.json(),status:response.status}; 
//         }
//         // throw new Error(response.status);
//     throw new Error(`${response.status} ${JSON.stringify(response.json())} ${response.bodyUsed} ${response.ok}`);
// }).then(data => {
//     console.log(data);
//     // console.log(data.status);
//     // console.log(data.json);
// }).catch(error => {
//         console.log(error);
// });

(async function(){
let response = await fetch(`${BASE_URL}/posts`);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
  console.log(json);
} else {
    //   alert("Ошибка HTTP: " + response.status);
    console.log("Ошибка HTTP: " + response.status);
    let json = await response.json();
    console.log( json);
}

}())
// //================ my2 ==========================
// let promise = fetch(`${BASE_URL}/posts`);
// promise.then(response => {
//     console.log(`${response.status} ${JSON.stringify(response.json())} ${response.bodyUsed} ${response.ok}`);
//     console.log(response);
    
//     // if(response.ok){
//     //    return response.json(); 

//     // }
//     // throw new Error(response.status);
//     // throw new Error(`${response.status} ${JSON.stringify(response.json())} ${response.bodyUsed} ${response.ok}`);
// }).catch(error => console.log(`ErRoR: ${error}`))
// // .then(data => {
// //     console.log(data);
// // }).catch(error => {
// //         console.log(error);
// // })
// ;

// console.log('AFTER FETCH');
// //=====================================


// let post = {
//     title: 'My title',
//     num: 123
// };

// fetch(`${BASE_URL}/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify(post)
// })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(error);
//     });

// fetch(`${BASE_URL}/posts1`)
// .then(response => parseJSON(response))
// .then(response => {
//     if(response.ok){
//         console.log(response.json)
//         return;
//     }
//     // throw new Error(`${response.status} - ${response.json}`);
//     throw new Error(`${response.status} - ${JSON.stringify(response.json)}`);
// }).catch(error => console.log(error.message));

// function parseJSON(response){
//     return new Promise(resolve => {
//         response.json()
//         .then(json => {
//             resolve({
//                 status:response.status,
//                 ok:response.ok,
//                 json
//             });
//         });
//     });
// }

// const timeout = function(time){
//     return new Promise((resolve => {
//         setTimeout(() => resolve(),time);
//     }));
// }

// timeout(2000).then(() => console.log('after 2 seconds'));

// async function fetchPostsAsync(){
//     try{
//         await timeout(2000);
//         const response = await fetch(`${BASE_URL}/posts`);
//         const data = await response.json();
//         if(response.ok){
//             // console.log(response.status,data);
//             return {code:response.status,body:data};
//         }else{
//             throw new Error(data)
//         }
//     }catch(error){
//         console.log(error);
//     }
// }

// // const response = fetch(`${BASE_URL}/posts`).then(response => response);

// fetchPostsAsync().then(data => console.log(data));

// function fetchPosts(){
//     return timeout(2000)
//     .then(() => fetch(`${BASE_URL}/posts`))
//     .then(response => response.json());
// }
// fetchPosts().then(data => console.log(data));


/*
let xhr = new XMLHttpRequest();
// xhr.open('POST',`${BASE_URL}/posts`);
xhr.open('GET',`${BASE_URL}/posts1`);

xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type','application/json; charset=utf-8');

// let post = {
//     title:'My title',
//     count:100
// }

// xhr.send(JSON.stringify(post));
xhr.send();

xhr.onload = () => {
    // if(xhr.status >= 200 || xhr.status < 300){
    if(xhr.status >= 200 && xhr.status < 300){
        console.log(`Status: ${xhr.status}`);
        console.log(xhr.response);
    }else{
        console.log(`Error: ${xhr.status}`);
        console.log(xhr.response);
    }
};

xhr.onerror = () => {
    console.log("Error!");
}
*/