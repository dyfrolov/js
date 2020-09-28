const CONTACTS_KEY = 'CONTACTS';
class Store {
    static save(contact) {
        let arr = this.getAll();
        arr.push(contact);
        let str = arr.map(cnt => cnt.serialization()).join('&');
        localStorage.setItem(CONTACTS_KEY, str);
    }

    static remove(index) {
        let arr = this.getAll();
        arr.splice(index, 1);
        if (arr.length === 0) {
            localStorage.removeItem(CONTACTS_KEY);
        } else {
            let str = arr.map(cnt => cnt.serialization()).join('&');
            localStorage.setItem(CONTACTS_KEY, str);
        }
    }

    static getAll() {
        let str = localStorage.getItem(CONTACTS_KEY);
        if (!str) {
            return [];
        }
        let arr = str.split('&');
        return arr.map(Contact.of);
    }
}