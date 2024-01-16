/*
5.Create a simple tip calculator.
The program should prompt for a bill amount and a tip rate.
The program must compute the tip,
and then log both the tip and the total amount of the bill to the console.
You can ignore input validation and assume that the user will enter numbers.

Pseudocode:
START
GET input bill amount
GET input tip rate
SET total bill = bill amount + (tip rate * bill amount / 100)
PRINT tip rate
PRINT total bill
END
*/

let readline = require('readline-sync');

let bill = readline.question("What is the amount of the bill?");
bill = parseFloat(bill, 10);
let tip = readline.question("What is the tip rate?");
tip = parseFloat(tip, 10);
let totalBill = bill + ((tip * bill) / 100);


console.log(`The tip rate is ${tip.toFixed(2)}%.`);
console.log(`The total bill is €${totalBill.toFixed(2)}.`);

