function f1(){
    if(Math.random() > 0.5){
        throw new Error('Error! Somethong went wrong!');
    }
    return 100;
}
// f1();

try{
    let res = f1();
    console.log(res);
    console.log(tmp.length);
}catch(error){
    console.log('error: ',error.message);
}finally{
    console.log('God code!');
}