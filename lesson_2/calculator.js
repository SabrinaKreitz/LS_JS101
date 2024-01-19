const readline = require("readline-sync");
const MESSAGE = require('./calculator_message.json');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

// Choose language
prompt(MESSAGE['language']['EN']);
let userLanguage = readline.question();
// Validating input
while (!['EN', 'DE', 'ES', 'FR'].includes(userLanguage)) {
  prompt(MESSAGE['language']['EN']);
  userLanguage = readline.question();
}

prompt(MESSAGE['welcome'][userLanguage]);

let answer;
do {
  prompt(MESSAGE['firstNumber'][userLanguage]);
  let number1 = readline.question();
  // Validating input
  while (invalidNumber(number1)) {
    prompt(MESSAGE['invalidNumber'][userLanguage]);
    number1 = readline.question();
  }

  prompt(MESSAGE['secondNumber'][userLanguage]);
  let number2 = readline.question();
  // Validing input
  while (invalidNumber(number2)) {
    prompt(MESSAGE['invalidNumber'][userLanguage]);
    number2 = readline.question();
  }

  prompt(
    MESSAGE['whichOperation'][userLanguage]
  );
  let operation = readline.question();
  // Validating input
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGE['whichOperation'][userLanguage]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
  // '1' represents addition
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      // '2' represents subtraction
      output = Number(number1) - Number(number2);
      break;
      // 3 represents multiplication
    case '3':
      output = Number(number1) * Number(number2);
      break;
      // 4 represents division
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt (MESSAGE['newCalculation'][userLanguage]);
  answer = readline.question();
  // Validating input
  while (invalidNumber(answer)) {
    prompt (MESSAGE['newCalculation'][userLanguage]);
    answer = readline.question();
  }
} // 1 represents new calculation
while (answer === "1");