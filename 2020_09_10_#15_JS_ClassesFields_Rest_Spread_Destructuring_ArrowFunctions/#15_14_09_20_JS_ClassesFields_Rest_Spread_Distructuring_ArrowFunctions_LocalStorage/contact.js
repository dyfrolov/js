class Contact{
    constructor(name,lastname,phone,email){
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }

    serialization(){
        return `${this.name},${this.lastname},${this.phone},${this.email}`;
    }

    static of(str){
        const arr = str.split(',');
        return new Contact(arr[0],arr[1],arr[2],arr[3]);
    }

}