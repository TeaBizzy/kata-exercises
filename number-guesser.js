let prompt = require("prompt-sync")();
let numberToGuess = 0;
let attempts = 0;
let guesses = [];

initGame()

function initGame() {
  numberToGuess =  Math.floor(Math.random() * 100)
  console.log("A number between 0-100 has been chosen.")
  console.log("To quit the game type \"q\".")
  gameLoop()
}

function gameLoop(){
  guessNumber();
}

function guessNumber(){
  const answer = getUserInput("Guess a number: ");
  
  if(answer == "q") {
    console.log("Qutting game...")
    return;
  }

  answer = parseInt(answer);

  if(isNaN(answer)) {
    console.log("Invalid entry!");
    return gameLoop();
  }

  
  for(num of guesses) {
    console.log(num)
    if(answer == num) {
      console.log(`You have already guessed ${num}!`)
      return gameLoop();
    }
  }
  attempts++;
  guesses.push(answer);
  
  if(answer == numberToGuess) {
    console.log(`You took ${attempts} attempts to guess the correct number!`);
    return
  }

  if(answer < numberToGuess) {
    console.log(`The secret number is greater than your guess of ${answer}`);
  } else {
    console.log(`The secret number is less than your guess of ${answer}`);
  }
  return gameLoop()
}

function getUserInput(message) {
  input = prompt(message);
  return input;
}