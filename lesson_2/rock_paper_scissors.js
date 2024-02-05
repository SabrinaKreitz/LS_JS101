/* eslint-disable no-constant-condition */
/* eslint-disable complexity */

/*
P
A mechanism that counts the wins of each player, then stops the game
and announces the winner after one of the players achieved three wins.

E
D

A
Create a loop and within the loop, set two counter variables
- one for winning and one for loosing.
Within the function there is a winning condition and a loosing condition.
Whenever one of the conditions is met, the winning or loosing condition
is incremented by 1 respectively.
The loop stops when one of the conditions equals 3.

*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function userWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === ('scissors') || computerChoice === ('lizard'))) ||
  (choice === 'paper' && (computerChoice === ('rock') || computerChoice === ('spock'))) ||
  (choice === 'scissors' && (computerChoice === ('paper') || computerChoice === ('lizard'))) ||
  (choice === 'spock' && (computerChoice === ('scissors') || computerChoice === ('rock'))) ||
  (choice === 'lizard' && (computerChoice === ('spock') || computerChoice === ('paper')))) {
    return true;
  } else {
    return false;
  }
}

function computerWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === ('paper') || computerChoice === ('spock'))) ||
  (choice === 'paper' && (computerChoice === ('scissors') || computerChoice === ('lizard'))) ||
  (choice === 'scissors' && (computerChoice === ('rock') || computerChoice === ('spock'))) ||
  (choice === 'spock' && (computerChoice === ('paper') || computerChoice === ('lizard'))) ||
  (choice === 'lizard' && (computerChoice === ('scissors') || computerChoice === ('rock')))) {
    return true;
  } else {
    return false;
  }
}
function gameEnds() {
  let userWins = 0;
  let computerWins = 0;
  while (userWins < 3 || computerWins < 3) {
  if(userWins(choice, computerChoice)) {
    userWins += 1;
  } else (computerWins(choice, computerChoice)) {
    computerWins += 1;
  }
}
}

function prompt(message) {
  console.log(`=> ${message}`);
}

/* function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (userWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (computerWins(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
} */

while (true) {
  console.clear();
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}