let slideShow = {
    currentItem:0,
    pictures:[],
    show:function (delta=0){
        this.currentItem = (this.currentItem + slideShow.pictures.length + delta ) % slideShow.pictures.length ;
        document.querySelector("#img-slide").setAttribute("src",slideShow.pictures[this.currentItem]);
    },
    showPrev:function(){this.show(-1);},
    showNext:function(){this.show( 1);},
}

slideShow.pictures.push("./images/gallery_1.jpg");
slideShow.pictures.push("./images/gallery_2.jpg");
slideShow.pictures.push("./images/gallery_3.jpg");
slideShow.pictures.push("./images/gallery_4.jpg");
slideShow.pictures.push("./images/gallery_5.jpg");
slideShow.pictures.push("./images/gallery_6.jpg");
slideShow.pictures.push("./images/gallery_7.jpg");
slideShow.pictures.push("./images/gallery_8.jpg");

slideShow.show(0);
// document.querySelector("#btn-prev").setAttribute("onclick","slideShow.showPrev()");
// document.querySelector("#btn-next").setAttribute("onclick","slideShow.showNext()");
// document.querySelector("#btn-prev").onclick = function(){slideShow.showPrev()};
// document.querySelector("#btn-next").onclick = function(){slideShow.showNext()};
document.querySelector("#btn-prev").onclick = function(){slideShow.show(-1)};
document.querySelector("#btn-next").onclick = function(){slideShow.show(1)};
