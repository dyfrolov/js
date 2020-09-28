const list = document.querySelector('#contact-list');
const form = document.querySelector('#add-contact-form'); 

let pbcenter = document.querySelector('.progbar-center'); 
let pbsmall = document.querySelector('.progbar-small'); 

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;
console.dir(list);
renderList();

function renderList() {
    document.querySelectorAll('button,input').forEach(el=>el.disabled=true);
    Store.getAll()
    .then( fillList )
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        pbcenter.style.display='none';
        document.querySelectorAll('button,input').forEach(el=>el.disabled = false);
    });

}

function onRemoveContactHandler(e) {
    if (e.target.tagName === 'BUTTON') {
        pbcenter.style.display='inline-block';
        document.querySelectorAll('button,input').forEach(el=>el.disabled=true);
        let index = parseInt(e.target.dataset.index);
        Store.remove(index)
        .then( fillList )
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            pbcenter.style.display='none';
            document.querySelectorAll('button,input').forEach(el=>el.disabled = false);

        });
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
    pbsmall.style.display='inline-block';
    form.querySelector('button').disabled=true;
    Store.save(contact)
    .then((arr)=>{
        fillList(arr);
        e.target.name.value = '';
        e.target.lastname.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        pbsmall.style.display='none';
        form.querySelector('button').disabled=false;
    });
}

function fillList(arr){
    list.innerHTML = arr.map(mapToRow).join('')
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