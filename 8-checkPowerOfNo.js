/**
 * Write a JavaScript function to test if a number is a power of 2.
 */

var checkPower=function(val,power){
    if (isNaN(val) || isNaN(power) || power<=0) { console.log('Invalid number!');return; }
    let tmp=val;
  while(tmp>power){
    tmp=tmp/power;
      //console.log(tmp);
      if(tmp==power){
          console.log("Yes, "+val+" is power of "+power); 
          return;
        }
  }
  console.log("No Power value");
}
checkPower(811,3);

//best way to do so for power of two
var IsPowerOfTwo=function(x)
{
    return (x != 0) && (x & (x - 1)) == 0;
}

console.log("Is Power Of 2:-"+IsPowerOfTwo(62));