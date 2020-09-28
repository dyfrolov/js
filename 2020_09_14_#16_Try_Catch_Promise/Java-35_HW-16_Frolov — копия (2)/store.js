const CONTACTS_KEY = 'CONTACTS';
class Store {
    static arrContacts=[];
    static save(contact) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try{
                    if(!contact.name){
                        throw new Error('Server message: Empty name');
                    }
                    let arr = this.arrContacts;
                    arr.push(contact);
                    let str = arr.map(cnt => cnt.serialization()).join('&');
                    localStorage.setItem(CONTACTS_KEY, str);
                    resolve(arr);
                }catch(error){
                    reject(error);
                } }, 1_000);
            });
    }

    static remove(index) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let arr = this.arrContacts;
                    arr.splice(index, 1);
                    if (arr.length === 0) {
                        localStorage.removeItem(CONTACTS_KEY);
                    } else {
                        let str = arr.map(cnt => cnt.serialization()).join('&');
                        localStorage.setItem(CONTACTS_KEY, str);
                    }
                    resolve(arr); 
                } catch (error) {
                    reject(error);
                }
            }, 1_000)

        })
    }

    static getAll() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let str = localStorage.getItem(CONTACTS_KEY);
                    if (!str) {
                        this.arrContacts = [];
                        return resolve(this.arrContacts);
                    }
                    this.arrContacts = str.split('&').map(Contact.of);
                    return resolve(this.arrContacts);
                } catch (error) {
                    return reject(error);
                }
            },2_000)
        })
    }
}