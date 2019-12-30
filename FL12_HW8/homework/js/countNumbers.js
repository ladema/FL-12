function countNumbers(string){
    let output={};
    for(let arg of string ){
        if (!isNaN(arg)){
            if(!output[arg]){
                output[arg]=1;   
            }else{
            output[arg]+=1;    
            }
        }
    }return output;
}
countNumbers("123333123eqw");