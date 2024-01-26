/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.
Do not worry about validating the input.
*/

const readline = require('readline-sync');

function printAddition (num1, num2) {
  let sum = num1 + num2;
  console.log(`==> ${num1} + ${num2} = ${sum}`);
}

function printSubstraction (num1, num2) {
  let substraction = num1 - num2;
  console.log(`==> ${num1} - ${num2} = ${substraction}`);
}

function printMultiplication (num1, num2) {
  let multi = num1 * num2;
  console.log(`==> ${num1} * ${num2} = ${multi}`);
}

function printDivision (num1, num2) {
  let division = num1 / num2;
  console.log(`==> ${num1} / ${num2} = ${division.toFixed(2)}`);
}

function printRemainder (num1, num2) {
  let remainder = num1 % num2;
  console.log(`==> ${num1} % ${num2} = ${remainder}`);
}

function printSquare (num1, num2) {
  let square = num1 ** num2;
  console.log(`==> ${num1} ** ${num2} = ${square}`);
}

console.clear();

console.log('==> Enter the first number:');
let number1 = Number(readline.question());

console.log('==> Enter the second number:');
let number2 = Number(readline.question());

printAddition(number1, number2);
printSubstraction(number1, number2);
printMultiplication(number1, number2);
printDivision(number1, number2);
printRemainder(number1, number2);
printSquare(number1, number2);


// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23