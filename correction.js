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



  // Function that gives the length of a text

  function displayTextLength(string){
    return string.length;
}

//  displayTextLength('Kehinde');
console.log(displayTextLength('Ebenezer'))


// Function that gives the square of a number
function calculateSquare(number){
  return number * number;
}
calculateSquare(9)

// Function that converts text to uppercase

function changeToUppercase(string){
return string.toUpperCase();
}

changeToUppercase('i love this shit !')
  
   console.log(funNumbers(5,6,"sum"));
    console.log(funNumbers(5,6,"divide"));
    console.log(funNumbers(5,6,"multiply"));