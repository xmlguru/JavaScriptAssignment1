/**
 * Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
 */

var binaryNumber=function(num,base){
    
    if (isNaN(num)) { console.log('Invalid number!');return; }
    
    console.log("Decimal Number:-"+num);
    console.log("Binary Number:-"+parseInt(num,base).toString(2));
    
    
}

binaryNumber(-230.99,10); //base 10 for decimal