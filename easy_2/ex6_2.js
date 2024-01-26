/*
Suppose we need a function that retrieves the middle word of a phrase/sentence.
What edge cases need to be considered?
How would you handle those edge cases without ignoring them?
Write a function that returns the middle word of a phrase or sentence.
It should handle all of the edge cases you thought of.

Edge cases:
> is not a string
> string is empty
> string only has 1 word
> string has even number of words and as such no middle
*/

function isNoString (string) {
  return typeof string !== "string";
}

function hasNoMiddle (string) {
  let array = string.split(" ");
  return array.length === 1 || array.length % 2 === 0;
}

function hasMiddle (string) {
  let array = string.split(" ");
  return (array[(array.length - 1) / 2]);
}

function printMiddleWord (string) {
  if (isNoString (string)) {
    console.log("This is not a string.");
  } else if (hasNoMiddle(string)) {
    console.log("This phrase has no middle.");
  } else {
    console.log(hasMiddle(string));
  }
}

printMiddleWord(""); // This phrase has no middle.
printMiddleWord("Phrase has middle"); // middle
printMiddleWord("Hi"); // This phrase has no middle.
printMiddleWord("Phrase has no middle");// This phrase has no middle.
printMiddleWord("What would be the middle word in this sentence?"); // middle
printMiddleWord(8); // This is not a string.

