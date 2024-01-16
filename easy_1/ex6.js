/*
6. Write a program that asks the user to enter an integer greater than 0,
 then asks whether the user wants to determine the sum
or the product of all numbers between 1 and the entered integer,
inclusive.
*/

//Ex6.1 - single number input

let readline = require('readline-sync');
let number = readline.question("Please enter an integer greater than 0.");
//validating input
number = parseInt(number, 10);

let operation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product.");
//validating input
while (!['p', 's'].includes(operation)) {
  console.log('Must choose p or s!');
  operation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product.");
}

let counter = 2;
let result = 1;

if (number === 1) {
  console.log(number);
} else if (operation === "s") {
  while (counter <= number) {
    result += counter;
    counter += 1;
  }
  console.log(`The sum of all integers between 1 and ${number} is ${result}!`);
} else if (operation === "p") {
  while (counter <= number) {
    result *= counter;
    counter += 1;
  }
  console.log(`The product of all integers between 1 and ${number} is ${result}!`);
} else {
  console.log("Couldn't compute number - try again.");
}

// Ex6.2 - compute functions with array input
/*
function computeSum(array) {
  let sum =  array.reduce((accumulator, element) => accumulator + element, 0);
  console.log(sum);
}

computeSum([4,5,6]);

function computeProduct(array) {
  let sum =  array.reduce((accumulator, element) => accumulator * element, 1);
  console.log(sum);
}

computeProduct([4,5,6]);
*/