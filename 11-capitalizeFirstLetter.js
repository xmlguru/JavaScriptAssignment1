/**
 * Write a JavaScript function to capitalize the first letter of a string.
 */
var firstLetterCapital=function(str){

    if(isNaN(str)){

        let tmpStr='';
        var upperCase=function(str){
            str=str.replace(str.slice(0,1),str.slice(0,1).toUpperCase())
            return str.concat(' ');
        }
        str.trim().split(' ').forEach(element => {
            //console.log('->'+typeof element)
          if(typeof element !== undefined)
          {
            tmpStr= tmpStr.concat(upperCase(element))
          }
        });
        return tmpStr.trim();
    }
}

console.log(firstLetterCapital("Hi, I Just want to be master of mean stack "));