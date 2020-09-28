const list = new List(document.body );
Storage.loadToArr(list.arrContacts);
list.refresh();
const inputs = new InputFields(list);

window.onunload=()=>{
    Storage.saveFromArr(list.arrContacts);
}