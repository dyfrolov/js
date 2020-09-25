// console.log(this);
// console.log(document);
// console.dir(document);

let box = document.getElementById('box');
console.log(box);

let tags = document.getElementsByTagName('div');
console.log(tags);

let withClassColl = document.getElementsByClassName('title');
console.log(withClassColl);

let box1 = document.querySelector('#box');
console.log(box1);

let divs = document.querySelectorAll('div');
console.log(divs);

// console.log(divs.values().next())

for(let key in divs){
    console.log(key);
    console.log(divs[key]);
}

for(let i = 0; i < divs.length; i++){
    console.log(divs[i]);
}

for(let div of divs){
    console.log(div);
}

divs.forEach(function(el){
    console.dir(el);
});


console.log(box.innerHTML);
box.innerHTML = '<b>Hello from JS</b>';

console.log(box.outerHTML);

let b = box.querySelector('b');
// console.log(b.outerHTML);
// b.outerHTML = `<h1>Hello ${box.innerHTML}</h1>`;

b.style.color = 'red';
b.style.display = 'block';
b.style.width = '200px';
b.style.border = '1px solid black';
console.log(b.style);
console.log(b.style.cssText);
b.style.cssText = `color:green; width:300px; border: 2px solid green`;

let button = document.querySelector('#my-div');
button.innerHTML = 'send request';
button.className = 'btn';

button.className = button.className + ' btn-danger';

let classes = button.className.split(' ');
let classesWithOut = classes.filter(function(v){return v !== 'btn-danger'});
classesWithOut.push('btn-success');
button.className = classesWithOut.join(' ');

let list = button.classList;
console.log(list);

button.className = '';

// button.classList.add('btn');
button.classList.toggle('btn');
button.classList.add('btn-danger');
// button.classList.remove('btn-danger');
// button.classList.add('btn-success');
button.classList.replace('btn-danger','btn-success');

button.onclick = function(){
    console.log('clicked');
    button.style.backgroundColor = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`
};


function getRandomInt(){
    return parseInt(Math.random() * 255);
}
