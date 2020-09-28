const timer1Input = document.querySelector('#timer1Inp');
const timer1Result = document.querySelector('#timer1Result');
const timer1StartBtn = document.querySelector('#timer1StartBtn');
const timer1StopBtn = document.querySelector('#timer1StopBtn');

timer1Result.style.display = 'none';

const timer = new Timer(0, updateCount, onStopHandler);

timer1StartBtn.onclick = function(){
    let input = parseInt(timer1Input.value);
    timer.count = input;
    timer.start();
    timer1Input.style.display = 'none';
    timer1Result.style.display = 'block';
}

// timer1StopBtn.onclick = function(){
//     timer.stop();
// }

timer1StopBtn.onclick = timer.stop.bind(timer);

function updateCount(count){
    timer1Result.innerHTML = count;
}

function onStopHandler(count){
    timer1Input.value = count;
    timer1Result.style.display = 'none';
    timer1Input.style.display = 'inline-block';
}
