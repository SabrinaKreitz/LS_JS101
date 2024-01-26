/*
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.

Pseudo:
START
SET current year
SET user age
SET user retirment age
PRINT retirment (age - age) + current year
 */

const readline = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();

console.clear();

let userAge = Number(readline.question('How old are you now?\n'));

let retirementAge = Number(readline.question('At which age do you want to retire?\n'));

let timeToWork = retirementAge - userAge;
let yearOfRetirement = CURRENT_YEAR + timeToWork;

console.log (`It's ${CURRENT_YEAR}. You will retire in ${yearOfRetirement}.
You have only ${timeToWork} years of work to go!`);