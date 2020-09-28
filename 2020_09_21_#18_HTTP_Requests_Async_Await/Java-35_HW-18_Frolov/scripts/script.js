let arrContacts=[];
let activeLi = null;
const ERROR_MESSAGE_DUPLICATE_MAIL_PHONE = "Duplicate contact fields! Email and phone need be unique to each contact";
const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const divContacts = document.querySelector('.contacts');
const contactView = document.querySelector('#divContactView');
const contactAdd = document.querySelector('#divContactAdd');
const contactEdit = document.querySelector('#divContactEdit');
const pAbout = document.querySelector('.container p');
const auth = document.querySelector('.auth');
const authAlertSucc = auth.querySelector('.alert-success');
const authAlertFail = auth.querySelector('.alert-danger');
const addAlertSucc = contactAdd.querySelector('.alert-success');
const addAlertFail = contactAdd.querySelector('.alert-danger');
const editAlertSucc = contactEdit.querySelector('.alert-success');
const editAlertFail = contactEdit.querySelector('.alert-danger');
const progress = document.querySelector('.progress');

auth.style.display='none';
divContacts.style.display='none';
list.style.display='none';
contactView.style.display='none';
contactEdit.style.display='none';
contactAdd.style.display='none';
pAbout.style.display='block';
progress.style.display='none';
let curToken = localStorage.getItem("TOKEN");
if (curToken){
    showContacts(curToken);
}else{
    showNotLoggedIn();
}

//===================================================      
//      NAV ONCLICK
//===================================================      
nav.onclick=function(event){
    if(event.target.id==='navAdd'){
        showFormAdd();
    }else if(event.target.id==='navAuth'){
        showAuth();
    }else if(event.target.id==='navLogout'){
        localStorage.removeItem('TOKEN')
        curToken="";
        arrContacts=[];
        showNotLoggedIn();
    }
}

//===================================================      
//      ADD CONTACT
//===================================================      
function showFormAdd(){
    contactView.style.display='none';
    contactAdd.style.display='block';
    addAlertSucc.style.display='none';
    addAlertFail.style.display='none';
    if (activeLi){
        activeLi.classList.remove('item-active');
    }
    nav.children[1].children[0].style.display = 'none';
    nav.children[1].children[1].style.display = 'none';
    nav.children[1].children[2].style.display = 'block';

}
document.forms.formAddContact.btnAddContact.onclick=function(e){
    e.preventDefault();
    let formAdd=document.forms.formAddContact;
    Api.addContact(curToken, {
        "address": formAdd.address.value,
        "description": formAdd.description.value,
        "email": formAdd.email.value,
        "id": 0,
        "lastName": formAdd.lastname.value,
        "name": formAdd.name.value,
        "phone": formAdd.phone.value
      })
        .then( contact => {
           addAlertSucc.style.display='block';
           addAlertFail.style.display='none';
           document.forms.formAddContact.reset();
        })
        .catch(error => {
            addAlertSucc.style.display='none';
            addAlertFail.style.display='block';
            if (error.code===500){
                addAlertFail.innerHTML=ERROR_MESSAGE_DUPLICATE_MAIL_PHONE;
            }else{
                addAlertFail.innerHTML=error.message;
            }
        })
        .finally(()=>showContacts(curToken));
}


//===================================================      
//      AUTHORIZATION
//===================================================      

function showAuth(){
    authAlertSucc.style.display='none';
    authAlertFail.style.display='none';
    auth.style.display='block';
    divContacts.style.display='none';
    list.style.display='none';
    contactView.style.display='none';
    pAbout.style.display='none';
    nav.children[1].children[0].style.display = 'none';
    nav.children[1].children[1].style.display = 'none';
    nav.children[1].children[2].style.display = 'none';
}
document.forms.formAuth.btnLogin.onclick = function(e){
    e.preventDefault();
    Api.login(document.forms.formAuth.email.value, document.forms.formAuth.password.value)
        .then(({ token }) => {
            localStorage.setItem("TOKEN", token);
            curToken = token;
            authAlertFail.style.display='none';
            authAlertSucc.style.display='block';
            showContacts(curToken);
        }).catch(error => {
            authAlertFail.style.display='block';
        });
}
document.forms.formAuth.btnReg.onclick = function(e){
    e.preventDefault();
    Api.registration(document.forms.formAuth.email.value, document.forms.formAuth.password.value)
        .then(({ token }) => {
            localStorage.setItem("TOKEN", token);
            curToken=token;
            authAlertFail.style.display='none';
            authAlertSucc.style.display='block';
            showContacts(curToken);
        }).catch(error => {
            authAlertFail.style.display='block';
        });
}


//===================================================      
//      CONTACT LIST  
//===================================================      

list.onclick=listOnClick;
function listOnClick(event){
    let nodeName = event.target.nodeName;
    if (nodeName=='LI' || nodeName=='H2' || nodeName=='H3'){
        let index = event.target.dataset.index;
        showContactView(index);
    }
}

function showContacts(token){
    progressShow();
    Api.getContacts(token)
        .then( ({contacts})=>{
            arrContacts={...contacts}
            renderContactList(contacts)
        })
        .catch(error => {
            showNotLoggedIn();
        })
        .finally(()=>progressHide());

};
function renderContactList(contacts){
    auth.style.display='none';
    divContacts.style.display='flex';
    list.style.display='block';
    contactView.style.display='none';
    pAbout.style.display='none';

    list.innerHTML ='';
    let index=0;
    if (!contacts.length){
        list.innerHTML='<p align="center">Add your first contact</p>';
    }else{
        for(contact of contacts){
            list.innerHTML = `${list.innerHTML}
            <li class="list-item" data-index="${index}">
            <h2 class="title"  data-index="${index}">${contact.name} ${contact.lastName}</h2>
            <h3 class="sub-title"  data-index="${index++}">${contact.phone}</h3>
            </li>`;
        }
    }
    nav.children[1].children[0].style.display = 'list-item';
    nav.children[1].children[1].style.display = 'none';
    nav.children[1].children[2].style.display = 'list-item';
}



//===================================================      
//  CONTACT 
//===================================================      

function renderContact(index){
    let contact=arrContacts[index];
    contactView.innerHTML=`
    <div class="header">
        <h2>${contact.name} ${contact.lastName}</h2>
        <div class="img-btn" data-index="${index}" id="btnContactDel"><img src="./images/delete.png" alt=""></div>
        <div class="img-btn" data-index="${index}" id="btnContactEdit"><img src="./images/edit.png" alt=""></div>
    </div>
    <div class="contact-view-row">
        <img src="./images/technology.png" alt="">
        <h3>${contact.phone}</h3>
    </div>
    <div class="contact-view-row"><img src="./images/multimedia.png" alt="">
        <h3>${contact.email}</h3></div>
    <div class="contact-view-row"><img src="./images/buildings.png" alt="">
        <h3>${contact.address}</h3></div>
    <p>${contact.description}</p>
    `;
    let btnContactDel = contactView.querySelector('#btnContactDel');
    let btnContactEdit = contactView.querySelector('#btnContactEdit');
    btnContactDel.onclick = onContactDel;
    btnContactEdit.onclick = onContactEdit;
}

function showContactView(index){
    contactView.style.display='block';
    contactAdd.style.display='none';
    contactEdit.style.display='none';
    renderContact(index);
    if (activeLi){
        activeLi.classList.remove('item-active');
    }
    activeLi = list.querySelector(`li[data-index="${index}"]`);
    activeLi.classList.add('item-active')
    nav.children[1].children[0].style.display = 'block';
    nav.children[1].children[1].style.display = 'none';
    nav.children[1].children[2].style.display = 'block';
}


//===================================================      
//  CONTACT DEL
//===================================================      

function onContactDel(){
    let id = arrContacts[activeLi.dataset.index].id;
    Api.deleteContact(curToken, id)
        .then( status => {
            activeLi = null;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>showContacts(curToken));
}

//===================================================      
//  CONTACT EDIT
//===================================================      

function onContactEdit(){
    let curContact = arrContacts[activeLi.dataset.index];
    contactEdit.style.display='block';
    contactView.style.display='none';
    editAlertSucc.style.display='none';
    editAlertFail.style.display='none';
    nav.children[1].children[0].style.display = 'none';
    nav.children[1].children[1].style.display = 'none';
    nav.children[1].children[2].style.display = 'block';
    let formEdit = document.forms.formEditContact;
    formEdit.name.value = curContact.name;
    formEdit.lastname.value = curContact.lastName;
    formEdit.phone.value = curContact.phone;
    formEdit.email.value = curContact.email;
    formEdit.address.value = curContact.address;
    formEdit.description.value = curContact.description;
}

document.forms.formEditContact.btnEditContact.onclick=function(e){
    e.preventDefault();
    let formEdit=document.forms.formEditContact;
    let curContact = {
        "address": formEdit.address.value,
        "description": formEdit.description.value,
        "email": formEdit.email.value,
        "id": arrContacts[activeLi.dataset.index].id,
        "lastName": formEdit.lastname.value,
        "name": formEdit.name.value,
        "phone": formEdit.phone.value
      }
    Api.updateContact(curToken, curContact)
        .then( contact => {
           editAlertSucc.style.display='block';
           editAlertFail.style.display='none';
           document.forms.formEditContact.reset();
           if (activeLi){
                let index = activeLi.dataset.index;
                arrContacts[index].address=contact.address;
                arrContacts[index].description=contact.description;
                arrContacts[index].email=contact.email;
                arrContacts[index].lastName=contact.lastName;
                arrContacts[index].name=contact.name;
                arrContacts[index].phone=contact.phone;
                activeLi.innerHTML=
                    `<h2 class="title"  data-index="${index}">${contact.name} ${contact.lastName}</h2>
                    <h3 class="sub-title"  data-index="${index}">${contact.phone}</h3>`;
                showContactView(index);
            }
        })
        .catch(error => {
            editAlertSucc.style.display='none';
            editAlertFail.style.display='block';
            if (error.code===500){
                editAlertFail.innerHTML=ERROR_MESSAGE_DUPLICATE_MAIL_PHONE;
            }else{
                editAlertFail.innerHTML=error.message;
            }
        })
}

//===================================================      
//      NOT LOGGED IN
//===================================================      

function showNotLoggedIn(){
    list.style.display='none';
    contactView.style.display='none';
    contactAdd.style.display='none';
    contactEdit.style.display='none';
    pAbout.style.display='block';
    nav.children[1].children[0].style.display = 'none';
    nav.children[1].children[1].style.display = 'list-item';
    nav.children[1].children[2].style.display = 'none';
};


//===================================================      
//  PROGRESS SHOW/HIDE
//===================================================      

function progressShow(){
    progress.style.display='flex'
}
function progressHide(){
    progress.style.display='none'
}