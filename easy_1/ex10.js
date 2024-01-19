/*
Write a function that computes the sum of all numbers between 1
and some other number,inclusive, that are multiples of 3 or 5.
 For instance, if the supplied number is 20,
 the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/


function multisum(number) {
  let counter3 = 3;
  let counter5 = 5;
  let arr3 = [];
  let arr5 = [];

  while (number >= counter3) {
    arr3.push(counter3);
    counter3 += 3;
  }
  while (number >= counter5) {
    if (!arr3.includes(counter5)) {
      arr5.push(counter5);
    }
    counter5 += 5;
  }
  let combinedArray = arr3.concat(arr5);
  let result = combinedArray.reduce(
    (accumulator,currentValue) => accumulator + currentValue);
  console.log(result);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168