
function sum(a,b){
    return a + b;
}

const sum1 = (a,b) => {
    return a + b;
}

const pow2 = x => x * x;

console.log(pow2(10));

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    console.log(this);
});

btn.addEventListener('click',() => console.log(this));

let car = {
    model:'Civic',
    print:() => {
        console.log(this);
    }
}

let bike = {
    model:'HD'
}

bike.print = car.print.bind(bike);
bike.print();


class Timer{
    count = 100;
    interval;
    start(){

        this.interval = setInterval(() => {
            console.log(this);
            this.count--;
            console.log(this.count);
        },1000);
    }

    stop = () => {
        console.log(this);
        clearInterval(this.interval);
    }
}

let timer = new Timer();
timer.start();

btn.addEventListener('click',timer.stop);