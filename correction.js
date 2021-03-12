// Function Assignment

function funNumbers(valueOne,valueTwo,char){
    if(char=="sum"){
      return valueOne+valueTwo;
    }
    
   else if(char=="divide"){
      return valueOne/valueTwo;
    }
  
    else  if(char=="multiply"){
      return valueOne*valueTwo;
    }
    
  };
  
   console.log(funNumbers(5,6,"sum"));
    console.log(funNumbers(5,6,"divide"));
    console.log(funNumbers(5,6,"multiply"));