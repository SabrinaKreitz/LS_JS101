/* Question 1
Given a string, return a new string that replaces every occurrence of the word
 "important" with "urgent": */

let advice = "Few things in life are as important as house training your pet dinosaur.";
let newString = advice.replaceAll(/important/gi, "urgent");
console.log(newString);

/* Question 2
The Array.prototype.reverse method reverses the order of
elements in an array, and Array.prototype.sort
can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate
the original array as shown below. Write two distinct ways of
reversing the array without mutating the original array.
Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/

let numbers = [1, 2, 3, 4, 5];

let reverse = (array) => {
  let reversedArray = [];
  for (let idx = array.length - 1; idx >= 0; idx--) {
    reversedArray.push(array[idx]);
  }
  return reversedArray;
};

console.log(reverse(numbers));
console.log(numbers);

let sort = (array) => {
  let sortedArray = [];
  array.forEach((digit) =>
    sortedArray.unshift(digit)
  );
  return sortedArray;
};

console.log(sort(numbers));
console.log(numbers);

//Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";

//famousWords = "Four score and " + famousWords;
famousWords = "Four score and ".concat(famousWords)

console.log(famousWords)

/* Question 5
Given an array of numbers [1, 2, 3, 4, 5], mutate
the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]. */

let array = [1, 2, 3, 4, 5];
array.splice(2,1)
console.log(array)


//Question 7 : Create an array from this object that contains only two elements: Barney's name and Barney's number:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
//let flintstonesArray = Object.entries(flintstones).slice(2,3)
let newA = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(newA);

// Q8: How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers))
console.log(Array.isArray(table))

// Q9: If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
let middle = Math.floor((40 - title.length) / 2)
console.log(middle)
title = ' '.repeat(middle) + title;

console.log(title)

// Q10: Write a one-line expression to count the number of lower-case t characters in each of the following strings

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

