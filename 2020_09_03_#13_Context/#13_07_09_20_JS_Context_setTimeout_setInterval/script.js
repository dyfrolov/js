const input = document.querySelector('#userInput');
const timerResult = document.querySelector('#timerResult');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');

timerResult.style.display = 'none';

let count = 0;
let interval;

startBtn.onclick = function () {
    count = parseInt(input.value);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    input.style.display = 'none';
    timerResult.style.display = 'block';
    timerResult.innerHTML = count;
    interval = setInterval(function () {
        count--;
        if (count > 0) {
            timerResult.innerHTML = count;
        } else {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    timerResult.innerHTML = '';
    timerResult.style.display = 'none';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    input.value = count;
    input.style.display = 'inline-block';
}

stopBtn.onclick = stopTimer;

for (var i = 0; i < 10; i++) {
    function f(j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    }
    f(i);
}
