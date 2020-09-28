for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);    
    },1_000)
}
for(var i=0;i<3;i++){
    setTimeout(function(j){
        console.log(j);    
    },1_000,i)
}
for(var i=0;i<3;i++){
    let fn = function(j){setTimeout(function(){
        console.log(j);    
    },1_000)};
    fn(i);
}
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(
            function(){
                console.log(j);    
            }
            ,1_000)
        }(i));
}
for(var i=0;i<3;i++){
    (function(){
        let j=i;
        setTimeout(
            function(){
                console.log(j);    
            }
            ,1_000)
        }());
}
for(var i=0;i<3;i++){
    (function(){
        let j=i;
        setTimeout(
            function(){
                console.log(j);    
            }
            ,1_000)
        })();
}
for(var i=0;i<3;i++){
    (()=>{
        let j=i;
        setTimeout(
            function(){
                console.log(j);    
            }
            ,1_000)
        })();
}
