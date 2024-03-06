/* Question 2
Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

P
Take a string with upper- and lower case letters and return a string
with the upper-case letters made lower case and the lower-case letters made upper case.
*/

let munstersDescription = "The Munsters are creepy and spooky.";

let newArray = munstersDescription.split('');
let newString = "";
for (let char of newArray) {
  if (char === char.toUpperCase()) {
    newString += char.toLowerCase();
  } else {
    newString += char.toUpperCase();
  }
}
console.log(newString);

