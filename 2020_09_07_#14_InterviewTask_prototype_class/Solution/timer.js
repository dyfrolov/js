class Timer{
    constructor(count, onUpdateCountHandler, onStopHandler){
        this.count = count;
        this.interval = null;
        this.onUpdateCountHandler = onUpdateCountHandler;
        this.onStopHandler = onStopHandler;
    }

    start(){
        const that = this;
        this.interval = setInterval(function(){
            if(that.count > 0){
                that.count--;
                that.onUpdateCountHandler(that.count);
            }else{
                that.stop();
            }
        },1000);
    }

    stop(){
        clearInterval(this.interval);
        this.onStopHandler(this.count);
    }
}