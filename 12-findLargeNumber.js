/**
 * Write a JavaScript program that accept two integers and display the larger.
 */
findLargeNo=function(num1,num2){
    if (isNaN(num1) || isNaN(num2)) { console.log('Invalid number!');return; }
    return (num1===num2? "both number are equal": (num1>num2? "First number is greatest": "second number is greatest"))
}
console.log(findLargeNo(12,13))

