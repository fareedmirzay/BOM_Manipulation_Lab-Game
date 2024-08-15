let Answer = Math.floor(Math.random() * 30) + 1;
let Guess = 0;
let maxGuess = 5;

function startGame() {
  while (Guess < maxGuess) {
    let remainingAttempts = maxGuess - Guess;
    let userGuess = parseInt(window.prompt("Guess a number:"));
    Guess++;
    if (userGuess === Answer) {
      window.alert("YOU WIN!!!!!!!!!! You guessed the correct number");
      break;
    } else if (userGuess > Answer) {
      window.alert(`The number you guessed is to high!!! Try again. you have ${maxGuess - Guess} attampts left`);
    } else {
      window.alert(`The number you guessed is to low!!! Try again. You have ${maxGuess - Guess} attampts left`);
    }

    if (Guess === maxGuess) {
      window.alert("You suck at this Game!!!! GAME OVERRR LOSER!!!! The correct number was " + Answer);
    }
  }
}

startGame();


