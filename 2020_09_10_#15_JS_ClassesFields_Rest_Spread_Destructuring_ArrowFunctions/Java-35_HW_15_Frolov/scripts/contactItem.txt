class ContactItem{
    constructor(objContact, selectorParent, onRemove){
        this.elParent = document.querySelector(selectorParent);
        this.objContact;
        this.divContact = document.createElement('div');
        this.divContact.style.marginTop='20px';
        this.divContact.classList.add('contact');
        this.elParent.append(this.divContact);
        this.btnRemove = document.createElement('button');
        this.btnRemove.innerHTML="Remove";
        this.btnRemove.onclick = onRemove;
        this.divContact.innerHTML=`<p>${objContact.name} <br> ${objContact.phone}</p>`;
        this.divContact.append(this.btnRemove);
    }
}
