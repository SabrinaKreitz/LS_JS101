/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).
*/

function logTeddiesAge (max, min) {
  if ((max - min) <= 0) {
    console.log ("Teddy must be older than 0! The first number entered must be higher.");
  } else {
    let age = Math.floor((Math.random () * (max - min + 1)) + min);
    console.log(`Teddy is ${age} years old!`);
  }
}

logTeddiesAge(120, 20);
