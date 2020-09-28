const list = new List(document.body );
const inputs = new Inputs(document.body,list.addNew);
Storage.loadToArr(list.arrContacts);
list.refresh();

window.onunload=()=>{
    Storage.saveFromArr(list.arrContacts);
}