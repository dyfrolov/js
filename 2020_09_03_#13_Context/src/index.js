console.log(this);


myFunc();

function myFunc(){
    console.log(this);
}

const btn = document.querySelector('#btn');

btn.onclick = myFunc;

let p1 = {
    name:'John',
    print: function(){
        console.log(this.name);
    }
}

p1.print();

let p2 = {
    name:'Jack',
    age:23,
    display:function(){
        console.log(this.name, this.age);
    }
}

p2.display();
p2.display = p1.print;
p2.display();

p2.display = myFunc;
p2.display();


const newPrint = p1.print.bind(p1);
newPrint();

p2.display = newPrint;
p2.display();

myFunc();

myFunc.call(p2);

let timeout = setTimeout(function(){
    console.log("after 3s");
},3000);

let interval = setInterval(function(){
    console.log("after 2s");
},2000);

clearInterval(interval);
clearTimeout(timeout);

let car = {
    model:'Honda',
    print: function(){
        let that = this;
        setTimeout(function(){
            console.log(that.model);
        },2000);
    }
}

car.print();


