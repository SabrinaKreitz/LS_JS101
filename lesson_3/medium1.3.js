/* Question 3
Alan wrote the following function, which was intended to return all of the factors of number:
Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. 
How can he make this work without using a do/while loop? Note that we're not looking to 
find the factors for 0 or negative numbers, but we want to handle it 
gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code? */
/* 
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
 */
function factors (number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors.sort();
}

console.log(factors(6));

let array = [1, 2, 3, 4]
let buffer = 4
let newBuffer = array.push(buffer);

console.log(newBuffer)
/* 
Question 5
What will the following two lines of code output? */

console.log(0.6 + 0.8);
console.log(0.3 + 0.6 === 0.9);

/*
*/

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/**/



