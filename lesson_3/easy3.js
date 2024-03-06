/* Question 1
Write three different ways to remove all of the elements from the following array: */

let numbers = [1, 2, 3, 4];


// Question 2: What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// Question 3: What will the following code ouput? 

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);


// Q4: What will the following code output? 

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
Answer
*/

/*
Question 5
The following function unnecessarily uses two return statements to return boolean values.
 Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
 */

 function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

let color = "blue"
let color2 = "red"
//function isColorValid(color) {return color === "blue" || color === "green"}
let isColorValid = (color) => color === "blue" || color === "green"
console.log(isColorValid(color))
console.log(isColorValid(color2))

/* Question 6
Examine the following code carefully. 
Can you identify all of the variables, primitive values, and objects that exist when this code executes? */

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

