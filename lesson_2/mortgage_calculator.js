const readline = require('readline-sync');
const MESSAGE = require('../mortgage_message.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isPositiveNumber (number) {
  return Number.isNaN(number) || number <= 0;
}

function monthlyPercentageAsTotal (annualPercentageRate) {
  return (annualPercentageRate / 12) / 100;
}

function totalMonths (years, months) {
  return (years * 12) + months;
}

function monthlyPayment (amount, annualPercentageRate, years, months) {
  return amount * ( monthlyPercentageAsTotal(annualPercentageRate) /
  (1 - Math.pow((1 + monthlyPercentageAsTotal(annualPercentageRate)),
    ( -totalMonths(years, months)))));
}

let answer;
let result;

prompt(MESSAGE.Welcome);

do {
  prompt(MESSAGE.Amount);
  let totalLoan = parseFloat(readline.question());
  while (isPositiveNumber(totalLoan)) {
    console.log(MESSAGE.Error);
    prompt(MESSAGE.Amount);
    totalLoan = parseFloat(readline.question());
  }
  // Allows calculation without interest rate
  prompt(MESSAGE.APR);
  let APR = parseFloat(readline.question());
  while (APR < 0) {
    console.log(MESSAGE.Error);
    prompt(MESSAGE.APR);
    APR = parseFloat(readline.question());
  }

  prompt(MESSAGE.Years);
  let loanDurationYears = parseInt(readline.question(), 10);
  while (isPositiveNumber(loanDurationYears)) {
    console.log(MESSAGE.Error);
    prompt(MESSAGE.Years);
    loanDurationYears = parseFloat(readline.question());
  }

  prompt(MESSAGE.Months);
  let additionalMonths = parseInt(readline.question(), 10);
  while (additionalMonths < 0) {
    console.log(MESSAGE.Error);
    prompt(MESSAGE.Months);
    additionalMonths = parseInt(readline.question(), 10);
  }
  if (APR === 0) {
    result = totalLoan / totalMonths (loanDurationYears, additionalMonths);
  } else {
    result = monthlyPayment(totalLoan, APR, loanDurationYears,
      additionalMonths);
  }

  console.log(`The expected monthly payment is $${result.toFixed(2)}!`);

  prompt(MESSAGE.Repeat);
  answer = readline.question();
} // 1 represents Repeat
while (answer === '1');

