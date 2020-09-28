class Storage{
   static loadToArr(arr){
        for(let i=0; i<localStorage.length; i++){
            arr[i]=this.parseJson(localStorage.getItem(i));
        }
    }
    static saveFromArr(arr){
        localStorage.clear();
        for(let i in arr){
            localStorage.setItem(i, this.serialiseJson(arr[i]));
        }
    }
    static parseJson(str){
        if(str==null || str.length<7){
            return '';
        }
        let arr = str.slice(2,str.length-2).split('","');
        let objResult = {};
        for(let pair in arr){
            let arr2=arr[pair].split('":"');
            objResult[arr2[0]]=arr2[1];
        }
        return objResult;
    }
    static serialiseJson(obj){
        let arr=[]
        for(let f in obj){
            arr.push(`"${f}":"${obj[f]}"`);
        }
        return `{${arr.join(',')}}`; 
    }
}

