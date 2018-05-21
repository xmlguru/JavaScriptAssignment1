/**
 * Write a JavaScript program to construct the following pattern, using a nested for loop. 
*  
* *  
* * *  
* * * *  
* * * * * 
*/

var pattern1=function(len){
    if (isNaN(len)) { console.log('Invalid number!');return; }
    var pattern='';
 for(let i=1;i<=len;i++){
     let star='';
     for(let j=0;j<i;j++){
        star= star.concat('*');
         if((j+1)<i)star=star.concat(' ');
     }
     pattern= pattern.concat(star);
     //console.log(star);
     pattern= pattern.concat('\r\n');
 }
 return pattern;
}

console.log(pattern1(10));