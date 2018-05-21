/**
 * Write a JavaScript function to convert a binary number to a decimal number.
 */
var decimalNumber=function(num,base){
    var regx = /^[0-1]+$/;
    //if (isNaN(num)) { console.log('Invalid number!');return; }
    if(num.match(regx)){
        console.log("Binary Number:-"+num);
       console.log("Decimal Number:-"+parseInt(num,base).toString(10));
    }
    else{
       console.log('Invalid binary number!');
    }
}

decimalNumber('101',2); //base 2 for binary only