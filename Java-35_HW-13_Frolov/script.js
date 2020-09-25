// const timerEl = getTimer();

const timer = {
    timerEl:getTimer,
}

function getTimer(){
    let div = document.createElement('div');
    div.innerHTML=`
    <input type='text'>
    <hr>
    <button disable id="stop">stop</button>
    <button id="start">start</button>
    `;
    document.body.append(div);
    return div;
}

