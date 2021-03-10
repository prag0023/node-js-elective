"use strict";

//totalGlobalVariable = "My total global variable";
// never do this

//let someVarToDelete = "dont hurt me";
 //delete someVarToDelete;

 let variableA;
 let variableB;

 console.log(variableA + variableB);// conacts the string 
 console.log(variableA,  variableB);// takes multiple parameters

 // type coersion
  
  // this is a file level scope
 { 
     // this is new scope
     let  scopeVariable = "abc";
    {
        scopeVariable = 123;
        // this is a  nested scope that inherits the previous scope
    }
    console.log(scopeVariable);
  }

  {
      let scopeVariable="abc";
      {
          let scopeVariable = 123;
          console.log(scopeVariable)
      }
      console.log(scopeVariable);
  }

  function someApplication(){
      let myFavouriteNumber = 43;
      const theirFavourite = whatsYourFavouriteNumber();
      return (myFavouriteNumber, theirFavourite); 
  }

  for(let i = 0; i <6 ; i++) {
      setTimeout(() => {
          console.log(i);
      }, 1000);
 }




