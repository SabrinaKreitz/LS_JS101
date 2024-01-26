/*
Write a function that takes a non-empty string argument
and returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly two characters.

Edge cases:
Is not a string
String is empty
*/

let isNotAString = value => typeof (value) !== 'string';

let stringIsEmpty = string => {
  let array = string.split("");
  return array[0] === undefined;
};

let centerOf = string => {
  let centerOdd = string[(string.length - 1) / 2];
  let leftCenterEven = (string.length / 2) - 1;

  if (isNotAString(string) || stringIsEmpty(string)) {
    console.log("String is empty or not a string.");
  } else if (string.length % 2 === 0) {
    console.log(string.substring(leftCenterEven , leftCenterEven + 2));
  } else {
    console.log(centerOdd);
  }
};

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
centerOf('');                  // "String is empty or not a string."
centerOf(8);                   // "String is empty or not a string."


