/*
P
A mechanism that counts the wins of each player, then stops the game
and announces the winner after one of the players achieved three wins.

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
const WINNING_POINTS = 3;
let userPoints = 0;
let computerPoints = 0;

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
function gameEnds(choice, computerChoice) {
  if (userWins(choice, computerChoice)) {
    userPoints += 1;
    console.log(`Your score is ${userPoints} :)`);
  } else if (computerWins(choice, computerChoice)) {
    computerPoints += 1;
    console.log(`Computers score is ${computerPoints} :(`);
  }
}

function displayWinnerRound(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (userWins(choice, computerChoice)) {
    prompt(`You won this round.`);
  } else if (computerWins(choice, computerChoice)) {
    prompt(`Computer wins this round.`);
  } else {
    prompt("It's a tie!");
  }
}

function displayWinnerGame() {
  if (userPoints === WINNING_POINTS) {
    console.log('You won the game!');
  } else if (computerPoints === WINNING_POINTS) {
    console.log('You lost the game :(');
  }
}

function resetPoints() {
  userPoints = 0;
  computerPoints = 0;
}

function prompt(message) {
  console.log(`=> ${message}`);
}


while (true) {
  console.clear();
  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinnerRound(choice, computerChoice);

    gameEnds(choice, computerChoice);

    if (userPoints === WINNING_POINTS ||
    computerPoints === WINNING_POINTS) break;
  }

  displayWinnerGame();

  resetPoints();

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}