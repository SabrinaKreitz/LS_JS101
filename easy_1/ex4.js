
/*
4. Build a program that asks the user
to enter the length and width of a room in meters,
and then logs the area of the room
to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

Pseudocode:
START
GET room length
GET room width
SET room in m2 = room length * room width
SET room in feet2 = room in m2 * 10.7639

PRINT room in m2
PRINT room in feet2

END
*/

const readline = require('readline-sync');
const MULTIPLIER_SQUARE_FEET = 10.7639;

console.log("Type `F` to get the result in f2 and `M` to get the result in m2")
let unit = readline.prompt();

console.log("Enter length of room.");
let length = readline.prompt();

console.log("Enter width of room.");
let width = readline.prompt();

if (unit === 'F') {
  console.log((length * width) * MULTIPLIER_SQUARE_FEET);
} else if (unit === 'M') {
  console.log(width * length);
} else {
  console.log("You're entry is not valid! ");
}

