// localStorage.setItem('myKey','My Value');
// localStorage.setItem('myKey','My Value2');
// localStorage.setItem('myKey1','My Value1');
// localStorage.setItem('myKey2','1, Name1, +7323729270');
let obj={name:'Name2,aaa',phone:'+7323729270', email:'dsds@fasfsdf.com'};
// console.log(obj);
// localStorage.setItem('1',serialise(obj));

// let value = localStorage.getItem('myKey');
// console.log(value);
// console.log(localStorage.length);

// localStorage.removeItem('myKey');
for(let i=0; i<localStorage.length;i++){
    console.log("key="+localStorage.key(i),"value="+localStorage.getItem(localStorage.key(i)));
}
// localStorage.clear();

// console.log(localStorage.getItem('1'))
// let newObj = deserialise(localStorage.getItem('1'));

// let newObj = JSON.parse(localStorage.getItem('1'));
// console.log( newObj );
let newObj = deserialise(localStorage.getItem('0'))
console.log(newObj);

console.log(obj.name==newObj.name && obj.phone==newObj.phone && obj.email==newObj.email );
console.log(obj===newObj);

console.log(JSON.parse(localStorage.getItem('0')));
//=======================================
function deserialise(str){
    if(str==null || str.length<7){
        return '';
    }
    let arr = str.slice(2,str.length-2).split('","');
    let objResult = {};
    for(pair in arr){
        let arr2=arr[pair].split('":"');
        objResult[arr2[0]]=arr2[1];
    }
    return objResult;
}


//=======================================
function serialise(obj){
    let arr=[]
    for(let f in obj){
        arr.push(`"${f}":"${obj[f]}"`);
    }
    return `{${arr.join(',')}}`; 
};
window.addEventListener('click', ()=>console.log('click') );
// document.addEventListener('click', function(){console.log('click');} );

// window.addEventListener('beforeunload', ()=>localStorage.setItem("key400","value400") );
let arr = [obj, newObj, deserialise('{"name":"Aaaa","phone":"05080452045","email":"dfa@fafsd.com"}')];

let arr2=[];
arr2['3']='third'
arr2['2']='second'
arr2['10']='tenth'
arr2['0']='zero'

console.log(arr2);
console.log(arr2[3]);

for(let i in arr){
    console.log(i,serialise(arr[i]));
}
// window.onbeforeunload = function() {
//     localStorage.clear();
//     // for(let i in arr){
//     //     localStorage.setItem(i,serialise(arr[i]));
//     // }
//   };
