/**
 * Write a JavaScript function to find the highest value in an array. *
 */

 var maxArray=function(numArrayList){

    console.log(Math.max( ...numArrayList ));

    //console.log(Math.max.apply(null, numArrayList));
 }
var tmpArray=[1,2,373984,4098723,5];
 maxArray(tmpArray);