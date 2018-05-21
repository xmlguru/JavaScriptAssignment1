/**
 * Write a JavaScript function to generate a random integer.
 */
var random = function(howmanydigit){
    if (isNaN(howmanydigit)) { console.log('Invalid input!');return; }
    var power=function(){
        var tmp2=1
      for(let i=0;i<howmanydigit;i++){
         tmp2=tmp2*10
      }
      return tmp2
    };
    var funRandom=function(){
       return Math.floor(Math.random() * power())
    };

    for(let i=0;i<10;i++){
       let tmp=funRandom(); 
       if(tmp.toString().length!=howmanydigit) 
       {
        console.log(i+"--invalid->"+tmp);
           i--
       }
       else 
       {
           console.log(i+"-->"+tmp);
       }
    }
}

//generate random number serease of 2 digit
random(3);
random(5);