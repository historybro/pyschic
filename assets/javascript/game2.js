//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


//Initial computer letter
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Game
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

var html = "<h1>Guess what letter I'm thinking of!</h1>" +
          "<h2>Wins: " + wins + "</h2>" +
          "<h2>Losses: " + losses + "</h2>" +
          "<h2>Guesses left: " + guessesLeft + "</h2>" +
          "<h2>Your guesses: " + lettersGuessed + "</h2>";
 
document.querySelector("#game").innerHTML = html;

}