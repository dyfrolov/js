const list = document.querySelector('#contact-list');
const form = document.querySelector('#add-contact-form'); 

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

// let loader = document.querySelector('.lds-dual-ring');
let loader = document.querySelector('.loader-center');

new Promise((resolve,reject)=>{
    // document.querySelectorAll('.form-control , button').forEach(el=>el.disabled=true);
    document.querySelectorAll('form>*').forEach(el=>el.disabled=true);
    loader.style.display='inline-block';
    setTimeout(resolve,3_000);
})
.then(()=>{
    renderList(); 
})
.catch((reason)=>{console.log(reason)})
.finally(()=>{
    // document.querySelectorAll('.form-control , button').forEach(el=>el.disabled=false);
    document.querySelectorAll('form>*').forEach(el=>el.disabled=false);
    loader.style.display='none';
    });

// renderList();

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
    // Store.save(contact);
    new Promise((resolve,reject)=>{
        // e.target.querySelector('button').disabled=true;
        document.querySelectorAll('button').forEach(el=>el.disabled=true);
        loader.style.display='inline-block';
        try{
            setTimeout(resolve,2_000);
            if(e.target.name.value === 'error'){
                throw new Error('Error!!!');
            }
            Store.save(contact);
        }catch(error){
            reject(error);
        }
    })
    .then(()=>{
        renderList();
        e.target.name.value = '';
        e.target.lastname.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
    })
    .catch((reason)=>{console.log(reason)})
    .finally(()=>{
        // e.target.querySelector('button').disabled=false;
        document.querySelectorAll('button').forEach(el=>el.disabled=false);
        loader.style.display='none';
        });
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