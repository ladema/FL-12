let a = prompt("Enter coeff 'a'");
let b = prompt("Enter coeff 'b'");
let c = prompt("Enter coeff 'c'");
    if (a==0 ||a==''||b=='' || c=='') {
        console.log("Invalid input data");
    } 
let disc = b*b - 4*a*c;
let x1,x2;
 if(disc>0){
     x1=(-b+Math.sqrt(disc)/(2*a));
     x2=(-b-Math.sqrt(disc)/(2*a));
     console.log("x1="+x1 ,"x2="+x2);
 }
 else if (disc==0){
     x1=-b/(2*a);
     console.log("x="+x1);
 }
 else if (disc<0){
     console.log("no solution")
 }