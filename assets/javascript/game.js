//start the game with a score of 0 
var wins = 0;
var loses = 0;

//start the game with 10 lives
var lives = 10; 

//creates a list that contains the whole alphabet 
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v", "w", "x", "y", "z"];

// Create variables that hold references to the places in the HTML where we want to display things.
var remainingGuesses = document.getElementById("remaining-guesses");
var scoreWins = document.getElementById("wins");




// function is run whenever a user presses a key...
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    //produce a random letter :) 
    var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)]; 

//    if (userGuess != randomLetter){
  //      lives -=1;
   // }

    //if (userGuess == randomLetter){
    //    wins++;
    //}


    
    remainingGuess = "Your guesses so far: " + userGuess
    scoreWins = "Wins: " + wins;

}