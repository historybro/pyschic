//Create Array of Alphabet
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create variables for tracking wins, losses, etc
var wins = 0;
var loss = 0;
var guessLeft = 10;
//Create empty arrays for storage
var guess = [];
var computerGuess = [];

//Test function
function resetLength() {
    guessesLeft = 10;
	guess.length = 0;
	computerGuess.length = 0;
}
function reset () {
    wins = 0;
    loss = 0;
    guessLeft = 10;
    guess.length = 0;
    computerGuess.length = 0;
}

function cGuess() {
    var compGuess = alpha[Math.floor(Math.random() * alpha.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

//Create initial computer "guess"
window.onload = function() {
    var compGuess = alpha[Math.floor(Math.random() * alpha.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}


//Begin the game
document.onkeyup = function (event) {
    var userGuess = event.key;
    guess.push(userGuess);
    cGuess();
    console.log(computerGuess[0]);

    if ((userGuess === computerGuess[0]) && (guessLeft > 0)) {
        wins++;
        guessLeft = 10;
        guess.length = 0;
        computerGuess.length = 0;
        cGuess();
    }

    else if ((userGuess !== computerGuess[0]) && (guessLeft > 0)) {
        guessLeft--;
        guess.push(userGuess);
    }

    else {
        loss++;
        resetLength();
        cGuess();
    }


    var html = "<h1>The Pyschic Game</h1>" +
        "<h2>Wins: " + wins + "</h2>" +
        "<h2>Losses: " + loss + "</h2>" +
        "<h3>Guesses Left: " + guessLeft + "</h3>" +
        "<h3>Your Guesses: " + guess + "</h3>";

    document.querySelector("#game").innerHTML = html;

    if (wins === 10) {
        reset();
        alert("You Win!");

    } else if (loss === 10) {
        reset();
        alert("You Lose!");

    }

}