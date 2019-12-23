let a = prompt('Enter length of the first side of the triangle');
let b = prompt('Enter length of the second side of the triangle');
let c = prompt('Enter length of the third side of the triangle');
    if (a == '' || b == '' || c == ''){
      alert("input values should be ONLY numbers");
    } else if (a==0 || b==0 || c==0){
        alert("A triangle must have 3 sides with a positive definite length");
    } else if ( (a+b)<=c || (a+c)<=b || (b+c)<=a ){
      alert("Triangle doesn't exist");
      console.log("Triangle doesn't exist");  
    } else if (a!=b && a!=c && b!=c){
      alert("Scalene triangle");
      console.log("Scalene triangle");
    } else if (a==b && b==c){
      alert("Equvivalent triangle");
      console.log("Equvivalent triangle");
    } else{
      alert("Isosceles triangle");
      console.log("Isosceles triangle");
    }  