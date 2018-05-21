/**
 * Write a JavaScript function to find the lowest value in an array. *
 */

var maxArray=function(numArrayList){

    console.log(Math.min( ...numArrayList ));

    //console.log(Math.min.apply(null, numArrayList));
    // var max = numArrayList.reduce(function(a, b) {
    //     console.log(a+"----->"+b);
    //     console.log(Math.max(a, b));
    // });
 }
var tmpArray=[12,23,43,200,50];
 maxArray(tmpArray);