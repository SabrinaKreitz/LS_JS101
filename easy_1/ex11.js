/*
Write a function that determines and returns the UTF-16 string value
of a string passed in as an argument.
The UTF-16 string value is the sum of the UTF-16 values
of every character in the string.
(You may use String.prototype.charCodeAt()
to determine the UTF-16 value of a character.)

START
SET sum = 0
Use String.prototype.charCodeAt() on value to return UTF-16 value
add to sum
*/

function utf16Value(string) {
  let sum = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
