function convert() {
    let arr=[]; 
    for (let item of arguments) {
        if ( item===`${item}`) {
            arr.push(+item);
        } else {
            arr.push(`${item}`);
        }
    }return arr;
}
console.log(convert('1', 2, 3, '4'));
function executeforEach(arr,func){
    for (let el of arr){
        func(el);
    }
}
executeforEach([1,2,3], function(el) {
 console.log(el * 2) 
});
function mapArray(arr,func){
    let arr3=[];
    executeforEach(arr,function(el){
        arr3.push(func(+el));
    });return arr3;
}
console.log(mapArray([2, '5', 8], function(el) {
 return el + 3 
}) );
function filterArray(arr,func){
    let arr4=[];
    executeforEach(arr,function(el){
        if(func(el)){
            arr4.push(el);
        }
    });return arr4;
}
console.log(filterArray([2, 5, 8], function(el) {
 return el % 2 === 0 
}) );
function flipOver(string){
    let string5='';
    for(let i=string.length-1;i>=0;i--){
        string5+=string[i];
    }return string5;
}
console.log(flipOver('hey world'));
function makeListFromRange([a,b]){
    let arr6=[];
    for(let i=a;i<=b;i++){
        arr6.push(i);
    }return arr6;
}
console.log(makeListFromRange([2, 7]));
function getArrayOfKeys(arr){
    let arr7=[];
    executeforEach(arr,function(el){
        arr7.push(el.name);
    });return arr7;
}
const actors = [
        { name: `tommy`, age: 36 },
        { name: `lee`, age: 28 }
      ];
console.log( getArrayOfKeys(actors, 'name') );
function substitute(arr){
    let arr8=[];
    executeforEach(arr,function(el){
        if (el<30){
            arr8.push('*')
        }else{
            arr8.push(el);
        }
    });return arr8;
}
console.log(substitute([58, 14, 48, 2, 31, 29]) );
function formatDate(date) {
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hour=date.getHours();
    let minute = date.getMinutes();
    if (hour<10){
        hour=`0${hour}`;
    }
    if (minute<10){
        minute=`0${minute}`;
    }return `${year}/${month}/${day} ${hour}:${minute}`;
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));