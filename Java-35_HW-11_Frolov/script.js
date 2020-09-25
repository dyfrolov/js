document.querySelector("#prev").onclick=function(){show(-1)};
document.querySelector("#next").onclick=function(){show( 1)};
let arr = document.querySelectorAll(".image");
let curIndex = 0;
arr[curIndex].classList.add("slide");
function show (delta){
    arr[curIndex].classList.remove("slide");
    curIndex = (curIndex + arr.length + delta)%arr.length;
    arr[curIndex].classList.add("slide");
}