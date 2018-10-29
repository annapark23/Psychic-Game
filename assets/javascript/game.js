//start the game with a score of 0 
var win = 0;
var lose = 0;

//start the game with 10 lives
var lives = 10; 

//creates a list that contains the whole alphabet 
var alphabet="qwertyuiopasdfghjklzxcvbnm";

//empty array where letters can be stored? 
var usedLetters =[];

var randomLetter = randomLetter;

// Create variables that hold references to the places in the HTML where we want to display things.
var guessIntroText = document.getElementById("guess-intro");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");

//FUNCTIONS
// ----------------------------------------------------------------------------------------- <-- looks cool i guess


randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function compGuess() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);

}

// function is run whenever a user presses a key...
document.onkeyup = function(event) {


    // Determines which key was pressed.
    var userGuess = event.key;

    //if you guessed correctly, add a win, lives and letters guessed will be reset, and comp will get another word. 
    if (userGuess === randomLetter){
        win ++;
        lives = 10;
        usedLetters = [];
        compGuess();
    }

    //take away a life if userguess doesnt equal random letter
    if(userGuess !== randomLetter){
        lives -= 1; 
    }

    //if lives = 0
    if (lives ===0){
        lose++;
        usedLetters =[];
        lives = 10;
        compGuess();
    } 

    //do nothing if user guess is in usedletter array 
    if (usedLetters.indexOf(userGuess) >= 0) {

    } 
    else {
        //this pushes the players incorrect guess to the usedArray and writes it to the HTML
        usedLetters.push(userGuess);
        document.getElementById('userGuess').innerHTML = usedLetters;

    }


    // Display the user and computer guesses, and wins/losses/ties.
    guessIntroText.textContent = "Guess what letter I'm thinking of..";
    winsText.textContent = "Wins: " + win;
    lossesText.textContent = "Losses: " + lose;
    remainingGuessesText.textContent = "Guesses left: " + lives;
    lettersGuessedText.textContent = "Your guesses so far: " + userGuess;

};