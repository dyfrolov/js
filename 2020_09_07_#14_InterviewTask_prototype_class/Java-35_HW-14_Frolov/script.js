class Timer{
    count =  10;
    constructor(selector){
        this.parentEl = document.querySelector(selector);

        this.input = document.createElement('input');
        this.input.setAttribute('type','number');
        this.input.setAttribute('min','0');
        this.input.value=this.count;
        // this.input.style.display='inline-block';

        this.result = document.createElement('div');
        this.result.innerHTML=this.count;
        this.result.style.visibility='hidden';

        this.btnStart = document.createElement('button');
        this.btnStart.innerHTML = 'Start';
        // this.btnStart.onclick = function(){that.start()};  //???? (let that=this) defined below
        
        this.btnStop = document.createElement('button');
        this.btnStop.innerHTML = 'Stop';
        this.btnStop.disabled = true;
        // this.btnStop.onclick = function(){that.stop()};  //???? (let that=this) defined below
        
        this.parentEl.append(this.input,this.result,this.btnStart,this.btnStop);
        let that = this;
        this.btnStart.onclick = function(){that.start()};
        this.btnStop.onclick = function(){that.stop()};
        // this.btnStart.onclick = function(){that.start()};
        // this.btnStop.onclick = function(){that.stop()};
    };

    start = function(){
        this.count = this.input.value;
        this.btnStart.disabled=true;
        this.btnStop.disabled=false;
        this.input.style.visibility='hidden';
        this.result.style.visibility='visible';
        this.value=this.input.value;
        this.result.innerHTML=this.value;
        let that = this;
        this.interval = setInterval(function(){
            if(--that.count > 0){
                that.result.innerHTML=that.count;
            }else{
                that.stop();
            }

            },1000)
    };
    stop = function(){
        clearInterval(this.interval);
        this.input.value = this.count >=0? this.count: 0;
        this.btnStart.disabled=false;
        this.btnStop.disabled=true;
        this.input.style.visibility='visible';
        this.result.style.visibility='hidden';
    }   ;

};
const timer1 = new Timer('.wrapper:nth-of-type(1)');
timer1.input.value=50;
const timer2 = new Timer('.wrapper:nth-of-type(2)');
const timer3 = new Timer('.wrapper:nth-of-type(3)');
const timer4 = new Timer('.wrapper:nth-of-type(4)');
timer4.start();
setTimeout(function(){timer4.stop()},5_000);


