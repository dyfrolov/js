const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

addBtn.onclick = function(){
    const input = todoInput.value;
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const removeBtn = document.createElement('button');
    li.append(checkbox,span,removeBtn);
    checkbox.type = 'checkbox';
    span.innerHTML = input;
    removeBtn.innerHTML = 'remove';

    checkbox.onchange = function(){
       if(checkbox.checked){
           span.style.textDecoration = 'line-through';
       }else{
           span.style.textDecoration = 'none';
       }
    }

    removeBtn.onclick = function(){
        li.remove();
    }

    list.append(li);
    todoInput.value = '';
}