
/* 
Q1: Will the following functions return the same results?*/

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

/*
Q2: 
What does the last line in the following code output?*/

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/**/

function messWithVars(a, b, c) {
  a = ["two"];
  b = ['three'];
  c = ['one'];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/* Q4: Can you identify all of the variables, primitive values, and objects in the following code?*/

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/*

*/

/* Question 5
Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:
 */
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
/* Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code. */

// add conditions under which the code shoudl return false: !isAnIpNumber(word), array.length !== 4

function isDotSeparatedIpAddress(inputString) {
  if(!checkLengthOfAdress(inputString)) {
    return false;
  } else if(!checkIpNUmber(inputString)) {
    return false; 
  } else {
    return true; 
  }
}

function checkLengthOfAdress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  return dotSeparatedWords.length !== 4 ? false : true;
}

function checkIpNUmber (inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;  
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('10.4.5.11')); // true
console.log(isDotSeparatedIpAddress('4.5.11')); // false
console.log(isDotSeparatedIpAddress("1t.4.5.11")); // false