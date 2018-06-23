var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var player_guess = undefined;
var guesses = [];

document.onkeyup = function(event) {
  var random_letter = alphabet[Math.floor(Math.random() * alphabet.length)];

  var player_guess = String.fromCharCode(event.keyCode).toLowerCase();

  if (random_letter === player_guess){
    wins++;
    alert("you won");
    //resets guesses & guessesLeft
    guessesLeft = 9;
    guesses = [];
    random_letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  if (random_letter != player_guess){
    guessesLeft--;
    guesses.push(player_guess);
  }

  if (guessesLeft === 0){
    alert("you lost!");
    alert("correct answer:" + random_letter);
    losses++;
    guessesLeft = 9;
    guesses = [];
    random_letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  $(".wins").text("Wins " + wins);
  $(".losses").text("losses: " + losses);
  $(".lives").text("guessesLeft: " + guessesLeft);
  $(".guesses").text("Your guesses so far: " + guesses);


};
