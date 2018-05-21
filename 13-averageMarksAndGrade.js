/**
 * Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 
 */

 var studentGrading=function(student){
     if(typeof student!=='object') return "invalid array";
     var grad=function(key,value){
                  
         if(isNaN(value))return null;
         var obj=[];
         obj[0]=key;
         obj[1]=value;
         
             if (value>90&&value<100)obj[2]="A"; 
             else if ( value>80)obj[2]="B"; 
             else if ( value>70)obj[2]="C";
             else if ( value>60)obj[2]="D"; 
             else if ( value<=60)obj[2]="F"; 
             else return null;  
                    
         return obj;
     }
     var studentGrad=[]
     var ctr=0;
     for(s in student){         
         studentGrad[ctr++]=grad(s,student[s]);
         //console.log(studentGrad);         
     }
  return (studentGrad);
 }

 var student2 = {"David": 95};
 var student = {"David": 80,"Vinoth": 77,"Divya": 88,"Ishitha": 95,"Thomas": 68};
  console.log(studentGrading(student));
