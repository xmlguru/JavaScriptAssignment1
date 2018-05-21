/**
 * Write a JavaScript function to format a number up to specified decimal places
 */
var numformater=function(number,howManyDecimal){
  if (isNaN(number) || isNaN(howManyDecimal)) 
  { console.log('Invalid number!');return; }

  console.log(number.toFixed(howManyDecimal))

}

numformater(100,5);