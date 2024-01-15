/*
6. Write a program that asks the user to enter an integer greater than 0,
 then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer,
inclusive.
Pseudocode: 
START
GET integer
GET type of operation 
SET counter = 1
IF integer = 1 
PRINT 1 
ELSE IF type of operation = sum
WHLE counter < integer 
SET claculated number = integer + counter  
SET integer = calulated number
SET counter += 1 
PRINT calculated number 
ELSE IF type of operation = prouct 
WHLE counter < integer 
SET claculated number = integer * counter  
SET integer = calulated number
SET counter += 1 
PRINT calculated number 
END 
*/

let readline = require('readline-sync');
let number = readline.question("Please enter an integer.");
number = parseInt(number, 10);
let operation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product.");

operation = "p";
number = 6;

let counter = 2; 
let addition = 1;
let multiplication = 1;

if(number == 1) {
  console.log(1)
}
else if (operation == "s") {
  while (counter <= number) {
    addition = counter + addition; 
    counter += 1;
  }
  console.log(addition);
}
else if (operation == "p") {
  while (counter <= number) {
    multipliation = counter * multiplication; 
    counter += 1;
  }
  console.log(multiplication);
}
else {
 console.log("Enter a valid number");
}



// 1+2 = 3 
// 3+3 = 6
// 6+4 = 10
//10 + 5 = 15