
    
/* This is the question regarding how many times a person has gone to Paris */
var userScore; 
var passGoal = 5;
userScore = 2;
If ( userScore < passGoal ) {
  console.log( "You did not go to Paris for enough time with only" + userScore + "there is no way that you had enough time to any anything in such a short time" + passGoal "would have been better."  );
} else {
  console.log(  " You must have had an amazing time in Paris!!"); 
}

var firstNumber;
var secondNumber;
var result;

firstNumber = 20;
secondNumber = 30;
results =firstNumber + secondNumber;
alert( result);

function howmanytrips(userScore,passGoal ){
  If ( userScore < passGoal ) {
      return ( "You did not go to Paris for enough time with       only" + userScore + "there is no way that you had enough         time to any anything in such a short time" + passGoal            "would have been better."  );
} else {
  return ( " You must have had an amazing time in Paris!!"); 
  }
}
var message = howmanytrips( 1, 5); 
alert( message );
console.log( howmanytrips( 2, 5));  

var h3Element = document.getElementById("resultOutput");
h3Element.innerHTML = "resultsMessage";
