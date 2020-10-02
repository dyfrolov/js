
function header(props) {
    const div = document.createElement('div');
    div.classList.add('nav');
    div.innerHTML = `
        <h2>Phone Book</h2>
        <ul>
        ${props.auth ?
            `
            <li><a href="add" class="${props.isAdd ? 'active' : ''}">Add new contact</a></li>
            <li><a href="logout">Logout</a></li>
            `
            :
            `<li><a href="auth">Auth</a></li>`
        } 
        </ul>
    `;
    div.onclick = e => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            switch (e.target.attributes['href'].value) {
                case 'add':
                    props.onAddClickHandler();
                    break;
                case 'auth':
                    props.onAuthClickHandler();
                    break;
                case 'logout':
                    props.onLogoutClickHandler();
                    break;
            }
        }
    }
    return div;
}

function auth({auhtSuccess,authError, email, password, onLoginClickHandler, onRegClickHandler}){
    const div = document.createElement('div');
    div.classList.add('auth');
    div.innerHTML = `
    <h2>Authentication</h2>
    ${auhtSuccess ? `<div class="alert alert-success">Login or registration success</div>` : ``}
    ${authError ? `<div class="alert alert-danger">${authError}</div>` : ``}
    <form action="#" name="authForm">
        <input type="email" class="form-control" name="email" value="${email}" placeholder="Type email">
        <input type="password" class="form-control" name="password" value="${password}" placeholder="Type password">
        <div class="auth-controls">
            <button id="loginBtn" class="btn btn-success">login</button>
            <button id="regBtn" class="btn btn-primary">registration</button>
        </div>
    </form>
    `;

    div.onclick = e => {
        e.preventDefault();
        if(e.target.tagName === 'BUTTON'){
            const emailInput = document.forms.authForm.email.value;
            const passwordInput = document.forms.authForm.password.value;
            switch(e.target.id){
                case 'loginBtn': onLoginClickHandler(emailInput,passwordInput); break;
                case 'regBtn': onRegClickHandler(emailInput,passwordInput); break;
            }
        }
    }
    return div;
}

function content({
    contacts,
    selected,
    mode,
    onContactClickHandler,
    onAddContactClickHandler,
    onUpdateContactClickHandler
}){
    const div = document.createElement('div');
    div.classList.add('contacts');
    div.append(contactList({contacts,selected,onContactClickHandler}));
    if(selected >= 0 && mode === 'view'){
        div.append(contactView({contact:contacts[selected]}));
    }else if(mode === 'add'){
        div.append(contactForm({mode:'add',onAddContactClickHandler}))
    }
    return div;
}

function contactList({
    contacts,
    selected,
    onContactClickHandler
}){
    const ul = document.createElement('ul');
    ul.classList.add('list');
    ul.innerHTML = contacts.map((contact,index) => `
    <li class="list-item ${index === selected ? 'item-active':''}" data-index="${index}">
        <h2 class="title">${contact.name} ${contact.lastName}</h2>
        <h3 class="sub-title">${contact.phone}</h3>
    </li>
    `).join('');

    ul.onclick = e => {
        e.preventDefault();
        const li = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
        onContactClickHandler(parseInt(li.dataset.index))
    }
    return ul;
}

function contactView({contact,onContactEditClickHandler, onContactDeleteClickHandler}){
    const div = document.createElement('div');
    div.classList.add('contact-view');
    div.innerHTML = `
    <div class="header">
        <h2>${contact.name} ${contact.lastName}</h2>
        <div class="img-btn"><img src="images/delete.png" alt=""></div>
        <div class="img-btn"><img src="./images/edit.png" alt=""></div>
    </div>
        <div class="contact-view-row">
            <img src="./images/technology.png" alt="">
            <h3>${contact.phone}</h3>
        </div>
        <div class="contact-view-row"><img src="./images/multimedia.png" alt="">
            <h3>${contact.email}</h3>
        </div>
        <div class="contact-view-row"><img src="./images/buildings.png" alt="">
            <h3>${contact.address}</h3>
        </div>
        <p>${contact.description}</p>
    `;
    return div;
}

function contactForm({mode,contact, onAddContactClickHandler, onUpdateContactClickHandler}){
    const div = document.createElement('div');
    div.classList.add('contact-view','add-contact');
    div.innerHTML = `
    <form action="#" name="addForm">
        <input class="form-control" type="text" name="name" placeholder="Type name">
        <input class="form-control" type="text" name="lastname" placeholder="Type lastname">
        <input class="form-control" type="text" name="phone" placeholder="Type phone">
        <input class="form-control" type="text" name="email" placeholder="Type email">
        <input class="form-control" type="text" name="address" placeholder="Type address">
        <textarea class="form-control" type="text" name="description" placeholder="Type description"></textarea>
        <div class="buttons"><button id="saveBtn" class="btn btn-success">${mode === 'add' ? 'Add' : 'Save'}</button></div>
    </form>
    `;
    
    div.onclick = e => {
        e.preventDefault();
        if(e.target.tagName === 'BUTTON'){
            const form = document.forms.addForm;

            const cnt = {
                id: mode === 'add' ? null : contact.id,
                name: form.name.value,
                lastName: form.lastname.value,
                phone: form.phone.value,
                email: form.email.value,
                address: form.address.value,
                description: form.description.value
            }
            
            if(mode === 'add'){
                onAddContactClickHandler(cnt);
            }else if(mode === 'edit'){
                onUpdateContactClickHandler(cnt);
            }
        }
    }
    return div;
}

function home(){
    const div = document.createElement('div');
    div.innerHTML = `
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsa mollitia nobis quae. Blanditiis eaque
    esse laboriosam minus quia recusandae suscipit vel veniam voluptatem voluptatibus? Beatae id laborum minus
    sunt.
    </p>
    `;
    return div;
}

function loader(){
    const div = document.createElement('div');
    div.classList.add('progress');
    div.innerHTML = `<div class="loader"></div>`;
    return div;
}