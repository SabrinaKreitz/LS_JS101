/* Write a function that takes two strings as arguments,
determines the length of the two strings,
and then returns the result of concatenating the shorter string,
the longer string, and the shorter string once again.
You may assume that the strings are of different lengths.

Pseudocode:
START
SET string 1
SET string 2
IF string 1 > string 2
SET newString = string2 + string 1 + string 2
ELSE
SET newString = string1 + string 2 + string 1
*/

function addStrings(string1, string2) {
  if (string2.length < string1.length) {
    let newString = string2 + string1 + string2;
    console.log(newString);
  } else {
    let newString = string1 + string2 + string1;
    console.log(newString);
  }
}

addStrings("hi", "world");

