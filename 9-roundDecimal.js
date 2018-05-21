/**
 * Write a JavaScript function to round a number to a given decimal places. 
 */
var numRoundof=function(number,howManyDecimal){
    if (isNaN(number) || isNaN(howManyDecimal)) 
    { 
        console.log('Invalid number!');return; 
    }
  
   console.log (Math.round((number*Math.pow(10,howManyDecimal))/Math.pow(10,howManyDecimal)).toFixed(howManyDecimal))
  }
  
  numRoundof(-19823479.82039485,5);