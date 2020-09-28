const wrapper = document.querySelector('#wrapper');
const timer = createTimer(wrapper, 10);
timer.show();
// const timer2 = createTimer(document.querySelector('body'), 20);
// timer2.show();

// timer object implementation
function createTimer(parentEl, initValue){
    let newTimer = {
            divTimer:getDivTimer(),
            value:initValue,
            isRunning:false,
            show:function(){renderTimer(this);},
            btnRun:getBtn('Start'),
            btnStop:getBtn('Stop'),
            inputValue:getInputValue(initValue),
            divCountDown:getDivCountDown(initValue),
            funcInterval: null,
        };
        newTimer.btnRun.onclick = function(){onBtnClick(newTimer)};
        newTimer.btnStop.onclick = function(){onBtnClick(newTimer)};
        parentEl.append(newTimer.divTimer);
        newTimer.divTimer.append(newTimer.inputValue, newTimer.divCountDown,newTimer.btnRun,newTimer.btnStop);
        return newTimer;
}
function getDivTimer(){
    let divTimer = document.createElement('DIV');
    return divTimer;
}
function getBtn(name){
    let btn = document.createElement('BUTTON');
    btn.innerHTML = name;
    return btn;
}
function onBtnClick(curTimer){
    if (!isValidInputValue(curTimer.inputValue.value) && !curTimer.isRunning){
        curTimer.inputValue.focus();
        return;
    }
    curTimer.isRunning = !curTimer.isRunning;
    if(curTimer.isRunning){
        curTimer.value = curTimer.inputValue.value
        curTimer.funcInterval = setInterval(function(){
            curTimer.value--;
            curTimer.show();
        }, 1000, curTimer);
    }else{
        clearInterval(curTimer.funcInterval);
    }
    curTimer.show();
}
function isValidInputValue(val){
    return val==='' || isNaN(val) || parseInt(val)<=0 ? false : true ;
}
function getInputValue(value){
    let input = document.createElement('INPUT');
    input.setAttribute('placeholder','enter initial value');
    input.setAttribute('value',value);
    return input;
}
function getDivCountDown(value){
    let div = document.createElement('div');
    div.innerHTML = `${value}`;
    return div;
}
function renderTimer(that){
    if (that.value<0){
        that.value=0
        clearInterval(that.funcInterval);
        that.isRunning = false;
    }
    if (that.isRunning){
        that.divCountDown.style.visibility = 'visible';
        that.inputValue.style.visibility = 'hidden';
        that.divCountDown.innerHTML = `${that.value}`;
    }else{
        that.divCountDown.style.visibility = 'hidden';
        that.inputValue.style.visibility = 'visible';
        that.inputValue.value = that.value;
    }
    that.btnStop.disabled = !that.isRunning;
    that.btnRun.disabled = that.isRunning;
}
