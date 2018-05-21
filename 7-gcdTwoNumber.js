/**
 * Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
 */
var GCD=function(num1,num2){
    if (isNaN(num1) || isNaN(num2)) { console.log('Invalid number!');return; }
    
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
  while(num2) {
    var tmp = num2;
    num2 = num1 % num2;
    num1 = tmp;
    
  }
  console.log("GCD-"+num1);
}


GCD(721,36);