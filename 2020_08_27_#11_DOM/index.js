// let arr = [1,2,3,4,5,6];
// let evenArr = arr.filter(v=>{return v  % 2 ===0});
// console.log(evenArr);

let arrPictures =  [];
let i=0;
arrPictures.push("./redpanda-profile-400x400-984.jpg");
arrPictures.push("./Pic_haifa.png");
arrPictures.push("./DSC01680.JPG");
arrPictures.push("./DSC01681.JPG");
arrPictures.push("./Pic_haifa.png");

show1();
document.querySelector("#btn-prev").setAttribute("onclick","show1(-1)");
document.querySelector("#btn-next").setAttribute("onclick","show1(1)");
document.querySelector("#img-slide").setAttribute("onclick","show1(1)");
function show1(delta=0){
    i = (i + arrPictures.length + delta ) % arrPictures.length ;
    document.querySelector("#img-slide").setAttribute("src",arrPictures[i]);
    // document.querySelector(".imagebg").setAttribute("background-image","url("+arrPictures[i]+")");
    document.querySelector(".imagebg").style.backgroundImage = `url("${arrPictures[i]}")`;
    // console.log(document.querySelector(".imagebg"));
    // console.dir(document.querySelector(".imagebg"));
}