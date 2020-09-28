const names = ['John','Jack','Tony','Anna','Jane'];

const ul = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');

addBtn.onclick = function(){
    const rnd = getRnd(names.length);
    // ul.innerHTML = ul.innerHTML + `<li>${names[rnd]}</li>`;

    // ul.append(`<li>${names[rnd]}</li>`); 
    // ul.prepend(`<li>${names[rnd]}</li>`); 
    // ul.before(`<li>${names[rnd]}</li>`); 
    // ul.after(`<li>${names[rnd]}</li>`); 
    // ul.replaceWith(`<li>${names[rnd]}</li>`); 
    // ul.remove();

    // ul.insertAdjacentHTML('beforebegin',`<li>${names[rnd]}</li>`);
    // ul.insertAdjacentHTML('afterbegin',`<li>${names[rnd]}</li>`);
    // ul.insertAdjacentHTML('beforeend',`<li>${names[rnd]}</li>`);
    // ul.insertAdjacentHTML('afterend',`<li>${names[rnd]}</li>`);

    // let li = document.createElement('li');
    // li.innerHTML = names[rnd];
    // li.style.backgroundColor = getRndColor();
    // ul.append(li);

    // let row = createRow(names[rnd]);
    // ul.insertAdjacentHTML('afterbegin',row);

    ul.append(createRow(names[rnd]));

}

function createRow(name){
    let li = document.createElement('li');
    li.innerHTML = name;
    li.style.backgroundColor = getRndColor();
    // li.onclick = function(){
    //     li.style.backgroundColor = getRndColor();
    // };
    li.onclick = changeBg;
    // return li.outerHTML;
    return li;
}

const box = document.querySelector('.box');

box.onclick = function(e){
    console.log(e);
    console.log(e.target);
};

box.onclick = changeBg;

// const boxes = document.querySelectorAll('.row .box');
// console.log(boxes);

// for(let i = 0; i < boxes.length; i++){
//     boxes[i].onclick = changeBg;
// }


const row = document.querySelector('.row');
row.onclick = function(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('box')){
        e.target.style.backgroundColor = getRndColor();
    }
}

function changeBg(e){
    // console.log(e);
    e.target.style.backgroundColor = getRndColor();
}

function getRndColor(){
    return `rgb(${getRnd(256)},${getRnd(256)},${getRnd(256)})`;
}

function getRnd(max){
    return parseInt(Math.random()*max);
}

const myInput = document.querySelector('#myInp');

// myInput.onchange = function(e){
//     console.log(e.target.value);
// }

// myInput.oninput = function(e){
//     console.log(e.target.value);
// }

// myInput.oncopy = handleEvent;
// myInput.onpaste = handleEvent;

// myInput.onfocus = handleEvent;
// myInput.onblur = handleEvent;
myInput.focus();

function handleEvent(e){
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements[0]);
    console.log(e.target.email);
    // let str = e.clipboardData.getData('text/plain');
    // console.log(str);
}


const form = document.querySelector('#myform');

form.onsubmit = handleEvent;

console.log(document.forms[0]);
console.log(document.forms.subscribe);


const itemBox = document.querySelector('.item');

// itemBox.onclick = function(){
//     console.log("clicked by box");
// }

// itemBox.onclick = changeBg;

const logger = function(e){
    console.log(`Clicked by ${e.target.tagName}`);
};

itemBox.addEventListener('click',logger);

itemBox.addEventListener('click',changeBg);

itemBox.removeEventListener('click',logger);
console.dir(itemBox);

const link = document.querySelector('#myLink');

console.log(link.attributes);
console.log(link.hasAttribute('target'));
link.setAttribute('target','parent');
link.removeAttribute('target');

console.log(link.getAttribute('myIndex'));

console.log(link.dataset);
console.log(link.dataset.longText);