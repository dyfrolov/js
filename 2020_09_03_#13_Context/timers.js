// const wrapper = document.querySelector('#wrapper');
// const body = document.querySelector('body');
// const secWrapper = document.querySelector('#secWrapper');
// let timer = createTimer(wrapper,100);
let timer = createTimer(document.querySelector('#wrapper'),100);
timer.show();
// let timer1 = createTimer(body,50);
// timer1.show();

// let timer2 = createTimer( 
//     (function() {
//         let btn = document.createElement('button');
//         body.append(btn);
//         btn.onclick = function(){body.setAttribute('bgcolor',`
//         rgb(${Math.random(0,255)},${Math.random(0,255)},${Math.random(0,255)})`);};
//         return btn;       
//         })()
//         , 5);
// timer2.show();

function createTimer(parentEl, initValue){
    let newTimer = {
            divTimer:getDivTimer(),
            value:initValue,
            isRunning:false,
            // parent:parentEl,
            // show:function(){renderTimer(parentEl,this);},
            show:function(){renderTimer(this);},
            btnRun:getBtn('Run'),
            btnStop:getBtn('Stop'),
            inputValue:getInputValue(initValue),
            divCountDown:getDivCountDown(initValue),
            funcInterval: null,
        };
        newTimer.btnRun.onclick = function(){onBtnClick(newTimer)};
        newTimer.btnStop.onclick = function(){onBtnClick(newTimer)};
        // newTimer.inputValue.onchange = function(){onInputChange(newTimer)};
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
    // console.log(typeof(val));
    // console.log(val);
    return isNaN(val) || parseInt(val)<=0 ? false : true ;
}
// function onInputChange(curTimer){
//     let newValue = parseInt(curTimer.inputValue.value);
//     console.log(newValue);
//     if( typeof newValue === 'number'){
//         curTimer.value = newValue;
//     }else{
//         curTimer.inputValue.value = 0;
//         curTimer.value = 0;
//     }
// }
function getInputValue(value){
    let input = document.createElement('INPUT');
    input.setAttribute('placeholder','enter initial value');
    input.setAttribute('value',value);
    input.setAttribute('type','text');
    return input;
}
function getDivCountDown(value){
    let div = document.createElement('div');
    div.innerHTML = `${value}`;
    return div;
}
// function renderTimer(root,that){
function renderTimer(that){
    if (that.value===0){
        clearInterval(that.funcInterval);
        that.isRunning = false;
    }
    if (that.isRunning){
        that.divCountDown.setAttribute('style','visibility:visible');
        that.inputValue.setAttribute('style','visibility:hidden');
        that.divCountDown.innerHTML = `${that.value}`;
    }else{
        that.divCountDown.setAttribute('style','visibility:hidden');
        that.inputValue.setAttribute('style','visibility:visible');
        that.inputValue.value = that.value;
    }
    that.btnStop.disabled = !that.isRunning;
    that.btnRun.disabled = that.isRunning;
}