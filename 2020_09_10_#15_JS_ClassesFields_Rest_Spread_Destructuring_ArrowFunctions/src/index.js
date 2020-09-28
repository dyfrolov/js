class Car{
    model = 'Civic';
    manufc = 'Honda';
    static country = 'Japan';
    #myField = 'private';
    // constructor(){
    //     this.model = 'Civic';
    //     this.manufc = 'Honda';
    // }

    print(){
        console.log(this.#myField);
        this.#printPrivate();
    }

    #printPrivate(){
        console.log('Private method');
    }
    static doSome(){
        console.log("Hello");
        console.log(this);
    }
}

let c1 = new Car();
console.log(c1.model, c1.manufc);
console.log(Car.country);
Car.doSome();

c1.print();
c1.#printPrivate();
// console.log(c1.#myField);