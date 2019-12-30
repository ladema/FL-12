function makeNumber(string){
    let output="";
    for(let arg of string ){
        if (!isNaN(arg)){
            output+=arg;
        }
    }return output;
}
makeNumber('314qeweqw');