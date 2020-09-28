const list = document.querySelector('#contact-list');
const form = document.querySelector('#add-contact-form'); 

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

renderList();

function renderList() {
    list.innerHTML = Store.getAll().map(mapToRow).join('');
}

function onRemoveContactHandler(e) {
    if (e.target.tagName === 'BUTTON') {
        let index = parseInt(e.target.dataset.index);
        Store.remove(index);
        renderList();
    }
}

function onAddContactHandler(e){
    e.preventDefault();
    const contact = new Contact(
        e.target.name.value,
        e.target.lastname.value,
        e.target.phone.value,
        e.target.email.value
    );
    Store.save(contact);
    renderList();
    e.target.name.value = '';
    e.target.lastname.value = '';
    e.target.phone.value = '';
    e.target.email.value = '';
}

function mapToRow(contact, index) {
    return `
        <li class="list-group-item d-flex w-100">
            <div class="flex-grow-1">
                <h2 class="m-0">${contact.name} ${contact.lastname}</h2>
                <h4 class="m-0">${contact.phone}</h4>
            </div>
            <button class="btn btn-danger align-self-center" data-index="${index}">
                remove
            </button>
        </li>
    `;
}