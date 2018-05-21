/**
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 */

 var protectEmail=function(email){
    var regx=/\S+@\S+/;
    var replaceWithStar=function(str){
        let tmp="";
        for(let i=0;i<str.length;i++){
        tmp=tmp.concat('*');
        }
        return tmp;
    }
     if(isNaN(email) && email.length>3 && email.match(regx))
     {
         // a single line expression can do all below job, for simplicity I have written in multiline
         let str1=email.split('@')[0];
         let substr=str1.slice(str1.length/2,str1.length-1)
         console.log(str1);
         console.log(substr);
      return str1.replace(substr,replaceWithStar(substr)).concat('@').concat(email.split('@')[1]);
     }
     else{
           return "Not a valid email.";
     }
 }

 console.log(protectEmail("singh2aug@gmail.com"));