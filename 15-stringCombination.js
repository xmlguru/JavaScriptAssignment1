/**
 * 15. Write a JavaScript function that generates all combinations of a string.
 * 
 */
var strCombination=function(str){
    var List=new Array();
    //var tmpStr='';
    if (isNaN(str)) 
    {
        //var index=0;
       // while(index<str.length)
         for(let i=0;i<str.length;i++)
         {
            //List.push(str.charAt(i))
             for(let j=0;j<=str.length;j++)
             {
                if(j!==i)List.push(str.charAt(i)+str.charAt(j))
                for(let k=str.length-1;k>i;k--)
                {
                    List.push(str.charAt(i)+str.charAt(j)+str.charAt(k)) 
                }
             }
             //tmpStr=tmpStr.concat(str.charAt(i))
         }
         List.push(str)
    }
    else{
        List.push('Invalid string!');return; 
    }
    console.log(List.length);
return List;
}

console.log(strCombination('abcd'));