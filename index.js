
// Conditional Statement and Logic
//  Less than
let maximumNumber=500;
let minimumNumber=15;
let sumAll;
if(minimumNumber < maximumNumber)
{
console.log("access denied");
}

else{
console.log("access granted");
}

console.log(sumAll);


// Greater than
if(minimumNumber > maximumNumber)
{
console.log("access denied");
}

else{
console.log("access granted");
}

console.log(sumAll);

// Logic Operator
// Equality
const averageMalenum=65;
const averageFemalenum=90;
let averageFigure;

if(averageMalenum==averageFemalenum){
  console.log(true);
}
else{
  console.log(false);
}

console.log(averageFigure);

// Function Assignment

function funNumbers(num1,num2,char){
  if(char=="sum"){
    return num1+num2;
  }
  
  if(char=="divide"){
    return num1/num2;
  }

  if(char=="multiply"){
    return num1*num2;
  }
  
};

 console.log(funNumbers(5,6,"sum"));
  console.log(funNumbers(5,6,"divide"));
  console.log(funNumbers(5,6,"multiply"));