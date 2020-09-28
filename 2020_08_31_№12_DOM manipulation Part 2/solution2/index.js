const root = document.querySelector('#root');
const arrayTodo = [];

const headerEl = header();
headerEl.onclick = addBtnClickHandler;
root.append(headerEl);
root.append(document.createElement('hr'));

// renderTodo(root);
// root.append(todoList(['John','Jack','Tony']));


function header() {
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" id="todoInput"> 
        <button id="addBtn">add</button>
    `;
    return div;
}

function addBtnClickHandler(e) {
    if (e.target.tagName === 'BUTTON') {
        const input = e.target.parentElement.querySelector('input');
        arrayTodo.push({
            title:input.value,
            done:false
        });
        input.value = '';
        renderTodo(root);
    }
}


function row(todo,index) {
    const div = document.createElement('div');
    div.innerHTML = `
    <input type="checkbox" ${todo.done ? 'checked':''} data-index="${index}">
    <span style="text-decoration:${todo.done ? 'line-through' : 'none'}">${todo.title}</span>
    <button data-index="${index}">remove</button>
    `;
    return div;
}

function todoList(arr) {
    const ul = document.createElement('ul');
    ul.id = 'todoList'
    const rows = arr.map(function (el,i) { return `<li>${row(el,i).innerHTML}</li>`; });
    ul.innerHTML = rows.join('');
    return ul;
}

function renderTodo(rootEl) {
    let ul = rootEl.querySelector('#todoList');
    if (ul) {
        ul.remove();
    }
    ul = todoList(arrayTodo);
    ul.onchange = onChangeHandler; 
    ul.onclick = onRemoveClickHandler;
    rootEl.append(ul);
}

function onChangeHandler(e){
    if(e.target.tagName === 'INPUT'){
        let index = parseInt(e.target.dataset.index);
        arrayTodo[index].done = e.target.checked;
        renderTodo(root);
    }
}

function onRemoveClickHandler(e){
    if(e.target.tagName === 'BUTTON'){
        let index = parseInt(e.target.dataset.index);
        arrayTodo.splice(index,1);
        renderTodo(root);
    }
}