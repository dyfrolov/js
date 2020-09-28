class List{
    constructor(elParent){
      this.elParent = elParent;  
      this.divList = document.createElement('div');
      this.divList.classList.add('contacts');
      this.elParent.append(this.divList);
  }
    arrContacts = [];
    addNew(objToAdd){
        this.arrContacts.push(objToAdd);
        this.refresh();
    }
    refresh(){
        if (this.divList){
            this.divList.remove();
        }
        this.divList = document.createElement('div');
        this.divList.classList.add('contacts');
        this.elParent.append(this.divList);
        for(let i in this.arrContacts){
            new ContactItem(this.arrContacts[i],'.contacts', 
                            ()=>{ this.arrContacts.splice(i,1); 
                                    this.refresh(); } );
        }
    }
}
