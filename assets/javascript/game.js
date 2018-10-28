//start the game with a score of 0 
var win = 0;
var lose = 0;

//start the game with 10 lives
var lives = 10; 

//creates a list that contains the whole alphabet 
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v", "w", "x", "y", "z"];

//empty array where letters can be stored? 
var usedLetters =[];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");

//FUNCTIONS
// ----------------------------------------------------------------------------------------- <-- looks cool i guess

//function to store the computer guess in an empty string. 
function compGuess(){
    var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];  
    console.log(randomLetter); 
    var computerGuess = [];
    computerGuess.push(randomLetter); 
    
}



// function is run whenever a user presses a key...
document.onkeyup = function(event) {

    compGuess();

    // Determines which key was pressed.
    var userGuess = event.key;
    var userStorage = [];
    userStorage.push(userGuess); 

    if (userGuess === compGuess){
        wins ++;
        lives = 10;
        usedletters = [];
    }

    if(userGuess !== compGuess){
        lives -= 1; 
    }

    if (lives ===0){
        lose++;
        usedLetters =[];
        lives = 10;
    }

    // Display the user and computer guesses, and wins/losses/ties.
    winsText.textContent = "Wins: " + win;
    lossesText.textContent = "Losses: " + lose;
    remainingGuessesText.textContent = "Guesses left: " + lives;
    lettersGuessedText.textContent = "Your guesses so far: " + userGuess;

};